import { adUnitHtml } from '../config/ads.mjs';

/**
 * Splices the mid-article ad units into the article body at build time, so they ship
 * inside the static HTML instead of being inserted by client JS after first paint.
 *
 * WHY THE CONFIG ARRIVES AS PLUGIN OPTIONS RATHER THAN AN IMPORT.
 * This is the single most important detail in the file. Astro's content layer caches
 * rendered markdown in .astro/data-store.json, and the glob loader returns the cached
 * html whenever the raw file's digest is unchanged
 * (node_modules/astro/dist/content/loaders/glob.js). The store is only wiped when
 * astro-config-digest, content-config-digest or the Astro version changes
 * (node_modules/astro/dist/content/content-layer.js), and that config digest is
 * safeStringify() over the Astro config minus vite/integrations/adapter. src/config/
 * ads.mjs is in none of those. Import the slot table directly and pasting a real slot
 * id changes nothing the digest can see: `npm run build` reuses ad-free cached HTML for
 * all 144 posts, with no error and no warning, and the rollout looks broken.
 *
 * Registering the plugin as [rehypeAdSlots, { plan, slots }] puts those plain objects
 * inside config.markdown.rehypePlugins, which IS part of the hashed config. Editing a
 * slot id then changes astroConfigDigest, Astro logs "Astro config changed", clears the
 * store, and every post re-renders. The functions in that array serialise to null,
 * which is fine - the objects are what has to be seen.
 *
 * Why the tree and not the client:
 *   - The slot is in the document the browser parses, so its reserved height is part of
 *     the initial layout and its arrival shifts nothing.
 *   - No new client JS on a page that just cut its weight by 67 percent, and no second
 *     pass over .content on every View Transition navigation.
 *   - A JS-created element carries no data-astro-cid, so scoped CSS never reaches it.
 *     A node in the server HTML has the same problem for a different reason (markdown
 *     output is not scoped to the page component either), which is why the ad CSS lives
 *     in global.css. Doing it here at least makes the placement deterministic and
 *     inspectable in `view-source`.
 *
 * Two pipeline facts govern the implementation, both verified against
 * node_modules/@astrojs/markdown-remark/dist/index.js:
 *   1. User rehype plugins run AFTER rehype-shiki and BEFORE rehype-raw. So code
 *      samples are already <pre>/<code> elements and cannot be matched by accident, and
 *      a {type:'raw'} node emitted here is parsed into real elements downstream. That is
 *      why the unit is inserted as a raw HTML string: one markup builder in ads.mjs
 *      serves both this plugin and AdUnit.astro, with no hast property-name guessing.
 *   2. rehypeHeadingIds also runs after this plugin, so the h2 nodes here have no id
 *      yet. Matching is on tagName only, and the ids the TOC links to are unaffected.
 *
 * getHeadings() sees no new heading, so the table of contents is unchanged.
 *
 * One known limitation, stated rather than engineered around: only top-level element
 * h2 nodes are counted. A post that wrote a literal <h2> in HTML would still be a raw
 * string at this stage and would not be counted. Checked across all 144 posts: none do.
 * (21 posts DO contain other top-level raw HTML blocks, and rehype-responsive-images
 * already documents 23 raw <img> tags, but none of those blocks is a heading, and a raw
 * node is explicitly rejected as a preceding block below, so raw HTML is handled rather
 * than assumed away.)
 */

// The list of unsafe preceding blocks is NOT defined here. It arrives as a plugin
// option from src/config/ads.mjs, because Astro hashes the options and serialises the
// plugin function to null - so a rule edited in this file changes nothing the content
// cache can see and `npm run build` re-emits the old placement for all 144 posts with
// no error. Verified the hard way: adding 'table' here alone left six units sitting
// under a </table> after a clean-looking rebuild. Anything that decides WHERE a unit
// goes belongs in ads.mjs. A change to the ALGORITHM below still needs .astro/ deleted.
// Used only if the option is missing, which should not happen.
const DEFAULT_UNSAFE_BEFORE_TAGS = ['pre', 'figure', 'img'];

/**
 * Words of prose in a subtree. <pre> subtrees count as zero, so a 300-line code sample
 * cannot satisfy the "600 words above" gate on its own.
 *
 * @param {any} node
 * @returns {number}
 */
function wordCount(node) {
	if (!node) return 0;
	if (node.type === 'text') {
		return String(node.value || '').split(/\s+/).filter(Boolean).length;
	}
	if (node.type === 'raw') {
		return String(node.value || '')
			.replace(/<[^>]*>/g, ' ')
			.split(/\s+/)
			.filter(Boolean).length;
	}
	if (node.type !== 'element' || !Array.isArray(node.children)) return 0;
	if (node.tagName === 'pre') return 0;
	let total = 0;
	for (const child of node.children) total += wordCount(child);
	return total;
}

/** @param {any} node @returns {boolean} */
function containsImage(node) {
	if (!node || node.type !== 'element' || !Array.isArray(node.children)) return false;
	for (const child of node.children) {
		if (child.type === 'element' && child.tagName === 'img') return true;
		if (containsImage(child)) return true;
	}
	return false;
}

/**
 * The last meaningful top-level node before index i, skipping whitespace text nodes
 * that the parser leaves between blocks.
 *
 * @param {any[]} children
 * @param {number} i
 * @returns {any}
 */
function previousBlock(children, i) {
	for (let j = i - 1; j >= 0; j--) {
		const node = children[j];
		if (node.type === 'text' && !String(node.value || '').trim()) continue;
		return node;
	}
	return null;
}

/** @param {any} node @param {Set<string>} unsafe @returns {boolean} */
function isSafeBefore(node, unsafe) {
	if (!node) return false;
	// A raw node is unparsed HTML at this stage. It could be anything, including an
	// image or an embed, so it is never an acceptable neighbour.
	if (node.type !== 'element') return false;
	if (unsafe.has(node.tagName)) return false;
	// A <p> whose subtree contains an <img> is rejected too, which is how markdown's
	// ![](...) arrives when it is not wrapped in a figure.
	if (containsImage(node)) return false;
	return true;
}

/**
 * @param {{ plan?: any[], slots?: Record<string, any>, unsafeBefore?: string[] }} [options]
 */
export default function rehypeAdSlots(options = {}) {
	const plan = Array.isArray(options.plan) ? options.plan : [];
	const slots = options.slots || {};
	const unsafe = new Set(
		Array.isArray(options.unsafeBefore) ? options.unsafeBefore : DEFAULT_UNSAFE_BEFORE_TAGS,
	);

	return (tree, file) => {
		if (!plan.length) return;
		if (!tree || !Array.isArray(tree.children)) return;

		// Only blog posts. The work collection is markdown too, and its entries are short
		// enough that the word gates would exclude them anyway, but the path check makes
		// that explicit rather than incidental. file.path is set from renderOpts.fileURL,
		// which the glob loader always supplies for a content-collection entry; VFile's
		// path setter runs urlToPath, so this is a real absolute path on Windows too once
		// the backslashes are normalised.
		const filePath = String(file?.path || file?.history?.[0] || '').replace(/\\/g, '/');
		if (!filePath.includes('/src/content/blog/')) return;

		// One pass: record every top-level h2, the prose above it, and whether the block
		// immediately above it is a safe neighbour.
		const candidates = [];
		let running = 0;
		for (let i = 0; i < tree.children.length; i++) {
			const node = tree.children[i];
			if (node.type === 'element' && node.tagName === 'h2') {
				candidates.push({
					index: i,
					wordsBefore: running,
					prevOk: isSafeBefore(previousBlock(tree.children, i), unsafe),
				});
			}
			running += wordCount(node);
		}
		if (!candidates.length) return;
		const totalWords = running;

		const inserts = [];
		// Position within `candidates` of the h2 the previous step claimed. -1 means none.
		let lastPick = -1;
		for (const step of plan) {
			// Empty while the slot id is still a placeholder, which is what keeps an
			// unconfigured unit from adding a blank block to 144 posts. Throws on a name
			// that is not in the slots table.
			const html = adUnitHtml(step.name, slots);
			if (!html) continue;

			const gap = step.minH2Gap || 0;
			for (let k = 0; k < candidates.length; k++) {
				if (lastPick >= 0 && k - lastPick < gap) continue;
				if (k <= lastPick) continue;
				const c = candidates[k];
				if (!c.prevOk) continue;
				if (c.wordsBefore < step.minWordsBefore) continue;
				if (totalWords - c.wordsBefore < step.minWordsAfter) continue;
				inserts.push({ at: c.index, html });
				lastPick = k;
				break;
			}
		}
		if (!inserts.length) return;

		// Back to front, so an earlier splice cannot invalidate a later index.
		inserts.sort((a, b) => b.at - a.at);
		for (const insert of inserts) {
			tree.children.splice(insert.at, 0, { type: 'raw', value: insert.html });
		}
	};
}
