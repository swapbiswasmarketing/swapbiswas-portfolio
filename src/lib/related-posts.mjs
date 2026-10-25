/**
 * Build-time "Related Articles" picks for blog posts.
 *
 * WHAT IT REPLACED. The template used to take any post sharing a category, score it by
 * the number of shared categories and break ties by newest publishDate. Categories are
 * coarse (Marketing alone holds 147 of 251 posts), so the newest posts in the common
 * category pairs won every tie: 200 of 251 posts never appeared as a related link, three
 * posts took 46% of all slots, no Claude post showed another Claude post, and every new
 * publish rewired the block on about 100 pages (growth audit CONT-01 / UX-01).
 *
 * HOW IT PICKS.
 *   1. Each post becomes a bag of weighted tokens: slug x3 (plus adjacent slug-word
 *      pairs, so "price in india" or "claude code" counts as one strong term), title x2,
 *      the ## and ### headings of the markdown body x1, description x1, categories x1.
 *      Lowercased, punctuation stripped, stopwords and years dropped, light plural
 *      stemming. Tokens in more than MAX_DF of posts ("marketing", "guide") or in only
 *      one post carry no signal for pairing and are dropped.
 *   2. TF-IDF with sublinear term frequency, then cosine similarity over every pair.
 *   3. Global greedy assignment: all (source, candidate) edges sorted by similarity, the
 *      strongest first, and an edge is taken while the source still has open slots and
 *      the candidate has been picked fewer than CAP times. The cap is what spreads links
 *      across the archive; sorting edges (rather than walking sources in some order)
 *      means the strongest pairs always survive it. Underfilled sources then take their
 *      best remaining candidates ignoring the cap, so every post still gets n picks.
 *   4. A post whose categories are all held by fewer than MIN_CATEGORY_SIZE posts (today
 *      only the lone Travel post) is only offered to posts that share one of them, i.e.
 *      to nobody, so an off-topic page never lands in another cluster's block.
 *
 * DETERMINISM AND STABILITY. Posts are sorted by id before anything else and every tie
 * breaks on ids, so the output does not depend on getCollection() order. Picks follow
 * content similarity, not dates, so a new post only moves the blocks of posts it is
 * genuinely closer to (plus the odd cap knock-on), instead of the ~100 it used to.
 *
 * COST. One pass per build process: 251 posts is ~31k pairs and runs in well under a
 * second, memoised at module level so the 251 page renders share it. The memo key
 * covers ids, titles, descriptions and body lengths, so an edited post in `astro dev`
 * recomputes instead of serving stale picks. Zero bytes of client JS.
 */

// Tuned against the 251-post corpus on 2026-10-25 (scratchpad impl/A/check.mjs):
// CAP 6 keeps the busiest post at 6 appearances; see the slice report for coverage.
const CAP = 6;
const MAX_DF = 0.3;
const MIN_CATEGORY_SIZE = 3;
const COVER_RATIO = 0.7;

const W_SLUG = 3;
const W_TITLE = 2;
const W_HEADING = 1;
const W_DESC = 1;
const W_CATEGORY = 1;

const STOPWORDS = new Set(
	(
		'a an and are as at be been but by can do does for from get got has have how i if in ' +
		'into is it its me my no not of on or our out so than that the their them then there ' +
		'these they this to up us vs was we what when where which who why will with without ' +
		'you your yours about after all also any before best between both each every few more ' +
		'most much new one only other over own same should some such too under use used using ' +
		'very via way ways actually really just real top guide guides complete ultimate step ' +
		'steps example examples tip tips faq faqs question questions answer answers conclusion ' +
		'final thought thoughts summary takeaway takeaways key overview introduction intro ' +
		'here like make made need know read look work works first next last right good better ' +
		'thing things free full quick simple easy common year years month months day days ' +
		'today now want see go going 1 2 3 4 5 6 7 8 9 10'
	).split(' ')
);

/** Plural folding only: "prompts" -> "prompt", "strategies" -> "strategy". */
function stem(t) {
	if (t.length > 4 && t.endsWith('ies')) return t.slice(0, -3) + 'y';
	if (t.length > 3 && t.endsWith('s') && !/(ss|is|us|os)$/.test(t)) return t.slice(0, -1);
	return t;
}

function words(text) {
	return String(text || '')
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, ' ')
		.split(' ')
		.filter((t) => t && !STOPWORDS.has(t) && !/^(19|20)\d\d$/.test(t))
		.map(stem);
}

/** ## and ### headings of a markdown body, skipping fenced code. */
function headingText(body) {
	if (!body) return '';
	const out = [];
	let fenced = false;
	for (const line of body.split('\n')) {
		if (/^\s*(```|~~~)/.test(line)) {
			fenced = !fenced;
			continue;
		}
		if (fenced) continue;
		const m = /^#{2,3}\s+(.+)$/.exec(line);
		if (m) out.push(m[1]);
	}
	return out.join(' ');
}

function bagOf(post) {
	const bag = new Map();
	const add = (t, w) => bag.set(t, (bag.get(t) || 0) + w);
	const slugWords = words(post.id.replace(/-/g, ' '));
	for (const t of slugWords) add(t, W_SLUG);
	for (let i = 1; i < slugWords.length; i++) add(`${slugWords[i - 1]}_${slugWords[i]}`, W_SLUG);
	for (const t of words(post.data.title)) add(t, W_TITLE);
	for (const t of words(headingText(post.body))) add(t, W_HEADING);
	for (const t of words(post.data.description)) add(t, W_DESC);
	for (const c of post.data.category) add(`cat:${c.toLowerCase()}`, W_CATEGORY);
	return bag;
}

function compute(posts, n) {
	const N = posts.length;
	const bags = posts.map(bagOf);

	const df = new Map();
	for (const bag of bags) for (const t of bag.keys()) df.set(t, (df.get(t) || 0) + 1);

	// Unit-length TF-IDF vectors as sorted [token, weight] arrays for a merge-style dot product.
	const vecs = bags.map((bag) => {
		const v = [];
		let norm = 0;
		for (const [t, tf] of bag) {
			const d = df.get(t);
			if (d < 2 || d / N > MAX_DF) continue;
			const w = (1 + Math.log(tf)) * Math.log(N / d);
			v.push([t, w]);
			norm += w * w;
		}
		norm = Math.sqrt(norm) || 1;
		for (const e of v) e[1] /= norm;
		v.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
		return v;
	});

	const catSize = new Map();
	for (const p of posts) for (const c of p.data.category) catSize.set(c, (catSize.get(c) || 0) + 1);
	const isolated = posts.map((p) => p.data.category.every((c) => catSize.get(c) < MIN_CATEGORY_SIZE));
	const cats = posts.map((p) => new Set(p.data.category));
	const shareCat = (i, j) => posts[j].data.category.some((c) => cats[i].has(c));

	const sim = Array.from({ length: N }, () => new Float64Array(N));
	for (let i = 0; i < N; i++) {
		const a = vecs[i];
		for (let j = i + 1; j < N; j++) {
			const b = vecs[j];
			let s = 0;
			for (let x = 0, y = 0; x < a.length && y < b.length; ) {
				if (a[x][0] === b[y][0]) s += a[x++][1] * b[y++][1];
				else if (a[x][0] < b[y][0]) x++;
				else y++;
			}
			sim[i][j] = sim[j][i] = s;
		}
	}

	const eligible = (i, j) => i !== j && (!isolated[j] || shareCat(i, j));
	// Each source's candidates, best first; equal scores fall back to id order.
	const ranked = posts.map((_, i) => {
		const c = [];
		for (let j = 0; j < N; j++) if (eligible(i, j)) c.push(j);
		return c.sort((x, y) => sim[i][y] - sim[i][x] || x - y);
	});

	const picks = posts.map(() => []);
	const count = new Int32Array(N);

	// Pass 1: global greedy over the top candidates of every source, under the cap. Only
	// the first 4n candidates per source are considered; a source that cannot fill from
	// those within the cap is handled by pass 2 rather than reaching for weak matches here.
	const edges = [];
	for (let i = 0; i < N; i++) for (const j of ranked[i].slice(0, 4 * n)) edges.push([sim[i][j], i, j]);
	edges.sort((a, b) => b[0] - a[0] || a[1] - b[1] || a[2] - b[2]);
	for (const [s, i, j] of edges) {
		if (s <= 0 || picks[i].length >= n || count[j] >= CAP) continue;
		picks[i].push(j);
		count[j]++;
	}

	// Pass 2: fill what is left from each source's ranked list, still under the cap first,
	// and only then over it. Sources go in id order, so this is deterministic too.
	for (const capped of [true, false]) {
		for (let i = 0; i < N; i++) {
			for (const j of ranked[i]) {
				if (picks[i].length >= n) break;
				if (picks[i].includes(j) || (capped && count[j] >= CAP)) continue;
				picks[i].push(j);
				count[j]++;
			}
		}
	}

	// Pass 3: coverage. A post nobody picked takes the weakest slot of the source that
	// likes it most, provided it is nearly as close to that source as the pick it replaces
	// (COVER_RATIO) and the replaced pick keeps at least one other appearance. This is
	// what turns "the cap spread things out" into "almost every post is linked from
	// somewhere", without pushing an off-topic page into a block.
	for (let t = 0; t < N; t++) {
		if (count[t] > 0 || isolated[t]) continue;
		let best = -1;
		let bestSlot = -1;
		for (let i = 0; i < N; i++) {
			if (!eligible(i, t) || sim[i][t] <= 0 || picks[i].includes(t)) continue;
			let slot = -1;
			for (let k = 0; k < picks[i].length; k++) {
				const w = picks[i][k];
				if (count[w] < 2) continue;
				if (slot < 0 || sim[i][w] < sim[i][picks[i][slot]]) slot = k;
			}
			if (slot < 0 || sim[i][t] < COVER_RATIO * sim[i][picks[i][slot]]) continue;
			if (best < 0 || sim[i][t] > sim[best][t]) {
				best = i;
				bestSlot = slot;
			}
		}
		if (best < 0) continue;
		count[picks[best][bestSlot]]--;
		picks[best][bestSlot] = t;
		count[t]++;
	}

	// Within a block, show the closest match first (it also feeds the "Next read" line).
	const byId = new Map();
	posts.forEach((p, i) => {
		picks[i].sort((x, y) => sim[i][y] - sim[i][x] || x - y);
		byId.set(p.id, picks[i].map((j) => posts[j]));
	});
	return byId;
}

let memo = { key: '', n: 0, byId: new Map() };

/**
 * @template {{ id: string, body?: string, data: { title: string, description: string, category: string[] } }} P
 * @param {P[]} allPosts every blog entry (order does not matter)
 * @param {string} id the current post's id
 * @param {number} [n] how many picks
 * @returns {P[]} up to n related posts, best first, never the post itself
 */
export function getRelatedPosts(allPosts, id, n = 3) {
	const posts = [...allPosts].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
	const key = posts
		.map((p) => `${p.id}|${p.data.title}|${p.data.description}|${p.data.category.join(',')}|${p.body ? p.body.length : 0}`)
		.join('\n');
	if (memo.key !== key || memo.n !== n) memo = { key, n, byId: compute(posts, n) };
	return memo.byId.get(id) || [];
}
