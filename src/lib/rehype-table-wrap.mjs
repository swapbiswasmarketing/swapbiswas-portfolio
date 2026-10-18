/**
 * Wraps every markdown <table> in <div class="table-wrap"> at build time.
 *
 * enhanceContent() in src/pages/blog/[...slug].astro used to do this in the browser,
 * right after DOMContentLoaded. Moving a table into a new div detaches it, so the
 * browser threw away the style and layout of every table and rebuilt them: on
 * claude-student-discount-india that was ~400 restyled elements and a ~480-object
 * relayout (about 16ms of unthrottled main thread, ~65ms of PSI's 4x-scaled Style &
 * Layout). With the wrapper already in the HTML that work never happens, and tables
 * scroll before any script runs. The runtime step stays as a fallback: it skips a
 * table whose parent already has the class, and still wraps raw-HTML tables, which
 * are unparsed {type:'raw'} nodes here because rehype-raw runs after user plugins.
 * It runs on every markdown collection, not only blog; .table-wrap styles are scoped to
 * the post's .content, and no other collection has tables today.
 *
 * ORDER: must stay LAST in markdown.rehypePlugins. rehype-ad-slots checks the block
 * above each candidate h2 against UNSAFE_BEFORE_TAGS, which lists 'table'. Wrap
 * first and it sees a 'div', and ~10-17 posts get an ad unit directly under a table.
 *
 * WHITESPACE: rehype-raw foster-parents the GFM table's newline text nodes out of
 * <table>, so view-source shows <div class="table-wrap"> followed by blank lines
 * before <table>. Expected, and it renders nothing.
 *
 * CACHE: same gotcha as rehype-ad-slots. Astro's content layer hashes plugin OPTIONS,
 * not plugin CODE, so an edit to this file alone reuses stale HTML from
 * .astro/data-store.json. Bump `rev` in astro.config.mjs whenever this body changes.
 */
export default function rehypeTableWrap() {
	return (tree) => {
		const walk = (node) => {
			if (!node.children) return;
			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i];
				if (child.type !== 'element') continue;
				if (child.tagName === 'table') {
					const cls = node.type === 'element' && node.properties ? node.properties.className : null;
					if (!(Array.isArray(cls) && cls.includes('table-wrap'))) {
						node.children[i] = {
							type: 'element',
							tagName: 'div',
							properties: { className: ['table-wrap'] },
							children: [child],
						};
					}
					continue;
				}
				walk(child);
			}
		};
		walk(tree);
	};
}
