/**
 * Central AdSense configuration - the one place slot ids live.
 *
 * Every unit below ships with a placeholder id. adUnitHtml() returns an empty string
 * for any unit whose id does not match SLOT_ID_PATTERN, and both consumers render
 * nothing for an empty string, so a checkout with no ids pasted in emits no wrapper,
 * no <ins>, no reserved height and no push(). Filling in a slot id is the only step
 * needed to turn a unit on, and blanking it back out is the whole rollback.
 *
 * Two consumers read this file and both build their markup through adUnitHtml(), so
 * the two can never drift apart:
 *   - src/components/AdUnit.astro  - units placed directly in .astro templates
 *   - src/lib/rehype-ad-slots.mjs  - the mid-article units, spliced into the hast tree
 *     at build time so they ship inside the static HTML
 *
 * THERE IS DELIBERATELY NO DEV/PROD GATE IN THIS FILE. Skipping render when
 * process.env.NODE_ENV === 'development' looks conservative and is not: the rehype
 * plugin's output is cached in .astro/data-store.json keyed on the raw markdown digest
 * (node_modules/astro/dist/content/loaders/glob.js), and `astro dev` sets NODE_ENV to
 * development, so a dev run would write ad-free HTML into the same store the next
 * `astro build` reads back - silently shipping a production build with no mid-article
 * units. With no gate, dev and build produce byte-identical cached HTML. Off production
 * the loader in MainHead.astro never runs, so on the dev server the units render as
 * empty reserved boxes, which is what you want for checking spacing anyway.
 *
 * The loader script is not here either. It sits in the head on production hostnames
 * only (src/components/MainHead.astro) and serves Auto ads as well as these units. The
 * body-end initialiser in BaseLayout.astro re-asserts it after a soft navigation,
 * because Astro's head swap removes it.
 */

/*
 * RUNTIME NOTES - the full reasoning behind the push initialiser at the end of <body>
 * in src/layouts/BaseLayout.astro. It lives here, not there, because that script is
 * inlined into every page and every byte of it ships on every page view. Moving this
 * block out of it saved 3,522 bytes per view. Nothing below is executed; it is the
 * record of why the runtime code is shaped the way it is.
 *
 * 1. THE LOADER DOES NOT SURVIVE A SOFT NAVIGATION.
 *    MainHead.astro creates the pagead2 script at runtime and appends it to <head>.
 *    Astro's swapHeadElements (transitions/swap-functions.js) removes every head child
 *    that persistedHeadElement does not match, and that matches only
 *    [data-astro-transition-persist] and stylesheet links. A script element is neither,
 *    so the loader is gone after navigation #1 - and MainHead's inline creator cannot
 *    rebuild it, because detectScriptExecuted keys inline scripts by textContent and
 *    that text is byte-identical on every page. A transition-persist attribute does not
 *    help either: persistedHeadElement resolves the id against the NEW document's head,
 *    and the new document is server HTML that never contained a runtime-created element.
 *    Hence ensureLoader(), called on every astro:page-load before any early return.
 *    window.adsbygoogle survives element removal so manual pushes would have kept
 *    working, but Auto ads scans at load time and would have placed nothing on pages
 *    2..N of a session - which falsifies the "Auto ads stay on" half of the
 *    density plan.
 *
 * 2. push({}) IS POSITIONAL.
 *    It carries no reference to any element. AdSense claims the first ins.adsbygoogle
 *    in document order that has no data-adsbygoogle-status. Firing one push per
 *    intersecting element is therefore only correct while intersection order equals DOM
 *    order, and two routine cases break that: a back navigation (the router restores
 *    scrollX/scrollY before after-swap and before page-load, so a reader returning to
 *    the bottom of a post intersects the LAST slot first) and entry via a TOC fragment
 *    link. In both cases the push fills a slot further up, the slot in front of the
 *    reader is stamped and unobserved, and it can never be requested again - a
 *    permanently blank 280px labelled box with no data-ad-status to collapse on.
 *    pushThrough() claims the whole unclaimed DOM-ordered prefix up to and including
 *    the element that intersected, so the queue and the DOM stay in step. The honest
 *    cost: slots above the reader's entry point are requested even if never scrolled
 *    to. That is unavoidable with push({}) and is the smaller error - an unviewed
 *    impression rather than a permanently blank box.
 *
 * 3. NO INLINE push SNIPPET NEXT TO EACH <ins>.
 *    Google prints the snippet that way, but Astro's ClientRouter de-duplicates inline
 *    scripts by exact textContent, so a snippet repeated on every page executes once
 *    per session and never again after a soft navigation. Every push comes from the
 *    single initialiser instead.
 *
 * 4. THE COLLAPSE IS DEFERRED, NOT CSS.
 *    Google's published recipe is ins.adsbygoogle[data-ad-status="unfilled"]
 *    { display: none }. That fires the instant AdSense stamps the attribute, and the
 *    slot is frequently on screen at that moment: at flick-scroll velocity a slot 600px
 *    below the fold enters the viewport 240-600ms after the push, and an AdSense round
 *    trip is 200-800ms. The two distributions overlap almost completely, and a ~330px
 *    collapse at the top of a 720px mobile viewport is a distance fraction of 0.46 with
 *    an impact fraction near 0.9 - roughly 0.4 CLS from a single no-fill. So the push
 *    observer uses a 2000px rootMargin to resolve the request well before visibility,
 *    and an unfilled slot is handed to a second IntersectionObserver that adds
 *    .ad-slot--collapsed only when it reports isIntersecting false. A slot the reader
 *    has already passed collapses at once; one in front of them stays as reserved
 *    whitespace until they scroll by. This also avoids a document-wide :has() subject
 *    keyed on a descendant attribute change, which would schedule style recalc at the
 *    moment the ad script is busiest.
 *
 * 5. WHY THE RESERVED HEIGHT IS NEVER RELEASED ON FILL.
 *    There is deliberately no rule setting min-height: 0 once data-ad-status="filled".
 *    Releasing it converts every short fill into an upward shift, trading permanent
 *    dead space - invisible to CLS, costs nothing but pixels - for a real layout shift
 *    on every impression. Dead space is the cheaper error. This only works because no
 *    unit is fluid or auto: rectangle tops out at 336x280 and horizontal at 320x100 in
 *    these containers, so 280px and 100px are ceilings as well as floors.
 *
 * 6. TEARDOWN IS PARTIAL AND KNOWN.
 *    astro:before-swap disconnects our three observers, because they hold strong
 *    references to targets the router is about to discard. That releases OUR references
 *    only. AdSense registers its own per-slot viewability machinery and exposes no API
 *    to release it, so a long session accumulates abandoned registrations pointing at
 *    detached iframes. There is no clean fix and this design does not claim one.
 */

export const AD_CLIENT = 'ca-pub-3086200953871328';

// AdSense slot ids are digits only. Every placeholder below fails this test, and so
// does a half-finished paste: an empty string, a whole <ins> tag, or an id with a
// stray space on the end.
const SLOT_ID_PATTERN = /^[0-9]{8,12}$/;

/**
 * @typedef {object} AdUnitConfig
 * @property {string} slot     data-ad-slot, copied from the AdSense dashboard
 * @property {string} variant  modifier class; drives spacing and reserve in global.css
 * @property {string} style    the inline style that ships on the <ins>
 * @property {string} [format] data-ad-format
 * @property {string} [fullWidthResponsive] data-full-width-responsive
 * @property {string} [label]  set to '' to drop the "Advertisement" caption
 */

/** @type {Record<string, AdUnitConfig>} */
export const AD_SLOTS = {
	// Mid-article unit. rectangle, NOT fluid and NOT auto.
	//
	// fluid/in-article lets the creative choose its own height and writes that height
	// inline on the <ins>. min-height is only a floor, so nothing can cap a fluid unit
	// and the whole reserved-height argument collapses: a 420px native creative landing
	// in a 280px reserve is a 140px shift mid-viewport. auto has the same problem from
	// the other end - inside a 658px measure it is free to serve anything from a 90px
	// strip to a 280px block, and no one number fits both.
	//
	// rectangle is bounded. In these containers (272px at a 320px viewport, 658px in the
	// article column) the tallest rectangle it can serve is 280px, which is exactly the
	// floor set in global.css. So a fill can never push the page down; the worst case is
	// 30px of dead space under a 250px creative. That trade - a few percent of RPM for a
	// structurally impossible layout shift - is the whole point of this design.
	blogInArticle: {
		slot: 'PLACEHOLDER-IN-ARTICLE-1',
		variant: 'rect',
		style: 'display:block;',
		format: 'rectangle',
		// "false" keeps the unit inside the article measure on mobile portrait rather than
		// breaking out to the full screen width. Google says "true" earns more; flipping
		// this one word is the entire change if that trade is worth it, but verify the
		// creative is not clipped first - html, body { overflow-x: clip } in global.css
		// will clip a breakout silently rather than showing a scrollbar.
		fullWidthResponsive: 'false',
	},

	// Second mid-article unit, long posts only. Same shape on purpose: two ids so the
	// AdSense reporting separates them.
	blogInArticleLong: {
		slot: 'PLACEHOLDER-IN-ARTICLE-2',
		variant: 'rect',
		style: 'display:block;',
		format: 'rectangle',
		fullWidthResponsive: 'false',
	},

	// After the FAQ accordion, before the author bio. Same bounded rectangle.
	blogEndOfPost: {
		slot: 'PLACEHOLDER-END-OF-POST',
		variant: 'rect',
		style: 'display:block;',
		format: 'rectangle',
		fullWidthResponsive: 'false',
	},

	// /blog/, below the pagination nav. horizontal rather than auto because this sits in
	// the full 1280px wrapper, where auto could serve anything from a 970x90 strip to a
	// 336x280 block. horizontal pins it to a banner shape whose tallest member is 320x100,
	// so the 100px floor in global.css is also its ceiling and it cannot shift either.
	blogIndexFeed: {
		slot: 'PLACEHOLDER-BLOG-INDEX',
		variant: 'banner',
		style: 'display:block;',
		format: 'horizontal',
		fullWidthResponsive: 'false',
	},

	// Bottom of six tool pages, after the SEO section.
	toolFooter: {
		slot: 'PLACEHOLDER-TOOL-FOOTER',
		variant: 'banner',
		style: 'display:block;',
		format: 'horizontal',
		fullWidthResponsive: 'false',
	},
};

/**
 * Where the mid-article units go.
 *
 * The gate is measured content, not a heading ordinal. "Before the 3rd h2" sounds like
 * it lands 35-50 percent in after a finished paragraph. Measured across the 144-post
 * corpus, both halves are false:
 *
 *   - The 3rd h2 sits anywhere from 15 percent to 79 percent of the way in. On 10 posts
 *     fewer than 600 words precede it, which puts the slot inside the 2000px
 *     IntersectionObserver margin at first layout on a desktop viewport - so the ad
 *     request would race the fetchpriority="high" hero image the LCP score depends on.
 *   - On 14 posts the block immediately above the 3rd h2 is an image, a bulleted list,
 *     a fenced code block, a table or a raw HTML block. Every .content image carries
 *     cursor: zoom-in and a lightbox click handler, so "clickable image, small gap,
 *     display ad" is the accidental-click shape placement policy is written against.
 *
 * So each step names the minimum prose above and below the slot, and the plugin rejects
 * a candidate whose preceding block is an image, a figure, a <pre> or an unparsed raw
 * node. Measured outcome with these numbers: 82 posts get one unit, 57 get two, and 5
 * get none, which is the right answer for the thin and code-heavy end of the corpus.
 *
 * minH2Gap is counted in qualifying h2 positions, not word distance, so the two units
 * are never adjacent sections.
 */
export const IN_ARTICLE_PLAN = [
	{ name: 'blogInArticle', minWordsBefore: 600, minWordsAfter: 500, minH2Gap: 0 },
	{ name: 'blogInArticleLong', minWordsBefore: 1800, minWordsAfter: 500, minH2Gap: 4 },
];

/**
 * Block types that must not sit directly above an ad unit.
 *
 *   pre        - a code fence; an ad wedged under one reads as its output
 *   figure/img - every .content image carries cursor: zoom-in and a lightbox click
 *                handler, so "clickable image, small gap, display ad" is the
 *                accidental-click shape placement policy is written against
 *   ul / ol    - list items in this corpus frequently contain outbound links
 *   table      - a bordered data block; an ad flush under one reads as a table footer
 *   blockquote - a pull quote reads as editorial voice, and an ad under it inherits it
 *
 * THIS LIVES HERE, NOT IN THE PLUGIN, FOR THE SAME REASON THE SLOT TABLE DOES.
 * Astro hashes the plugin OPTIONS but serialises the plugin FUNCTION to null, so
 * editing the rule inside src/lib/rehype-ad-slots.mjs does not change the config
 * digest, the content store is never cleared, and `npm run build` silently re-emits
 * the previous rule's HTML for all 144 posts. Measured: moving this list from the
 * plugin body to here is the difference between a rule change taking effect and being
 * ignored with no error. Anything that decides WHERE a unit goes belongs in this file.
 * If you change the plugin's algorithm rather than its data, delete .astro/ to force
 * a re-render.
 */
export const UNSAFE_BEFORE_TAGS = ['pre', 'figure', 'img', 'ul', 'ol', 'table', 'blockquote'];

/**
 * Throws on a unit name that is not in the table.
 *
 * Without this a typo - <AdUnit name="toolfooter" />, or a config key renamed in five
 * of six places - renders nothing, builds clean, logs nothing, and is indistinguishable
 * from the intended pre-configuration state forever. The placeholder gate is a separate
 * check, so a build-time throw here costs nothing.
 *
 * @param {string} name
 * @param {Record<string, AdUnitConfig>} slots
 */
export function assertKnownUnit(name, slots) {
	if (!Object.prototype.hasOwnProperty.call(slots, name)) {
		throw new Error(
			`ads.mjs: unknown ad unit "${name}". Known units: ${Object.keys(slots).join(', ')}`,
		);
	}
}

/**
 * True only when the named unit has a real slot id.
 *
 * @param {string} name
 * @param {Record<string, AdUnitConfig>} [slots]
 * @returns {boolean}
 */
export function isAdEnabled(name, slots = AD_SLOTS) {
	assertKnownUnit(name, slots);
	return SLOT_ID_PATTERN.test(String(slots[name].slot));
}

/** @param {string} name @param {string | undefined} value */
function attr(name, value) {
	return value == null || value === '' ? '' : ` ${name}="${value}"`;
}

/**
 * The one markup builder, shared by the component and the rehype plugin.
 *
 * data-pagefind-ignore is not optional. On a blog post this markup lands inside
 * .content-column, which carries data-pagefind-body, so without it the word
 * "Advertisement" is indexed into the site's own search results.
 *
 * There is deliberately no inline push() script beside the <ins>, even though that is
 * how Google prints the snippet. Astro's ClientRouter de-duplicates inline scripts by
 * their exact text (node_modules/astro/dist/transitions/swap-functions.js), so a push
 * snippet repeated on every page would execute once per session and never again after a
 * soft navigation. Every push comes from the single initialiser at the end of the body
 * in BaseLayout.astro instead.
 *
 * The slots table is a parameter, not a closed-over import, because the rehype plugin
 * receives it as a plugin option so that changing a slot id changes the Astro config
 * digest and invalidates the content-layer cache. See src/lib/rehype-ad-slots.mjs.
 *
 * @param {string} name
 * @param {Record<string, AdUnitConfig>} [slots]
 * @returns {string} the unit's HTML, or '' when the unit is not configured
 */
export function adUnitHtml(name, slots = AD_SLOTS) {
	if (!isAdEnabled(name, slots)) return '';
	const unit = slots[name];
	// "Advertisement" is one of the two labels AdSense permits. Anything else, or an
	// unlabelled unit under a heading, is what the misleading-header clause covers.
	const label = unit.label === '' ? '' : '<span class="ad-label">Advertisement</span>';
	return (
		`<div class="ad-slot ad-slot--${unit.variant}" data-pagefind-ignore>` +
		label +
		'<ins class="adsbygoogle"' +
		attr('style', unit.style) +
		attr('data-ad-client', AD_CLIENT) +
		attr('data-ad-slot', unit.slot) +
		attr('data-ad-format', unit.format) +
		attr('data-full-width-responsive', unit.fullWidthResponsive) +
		'></ins></div>'
	);
}
