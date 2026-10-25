// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeResponsiveImages from './src/lib/rehype-responsive-images.mjs';
import rehypeAdSlots from './src/lib/rehype-ad-slots.mjs';
import rehypeTableWrap from './src/lib/rehype-table-wrap.mjs';
// Imported here, not inside the plugin, on purpose: passing these as plugin OPTIONS is
// what puts them inside config.markdown.rehypePlugins, which is part of the hashed
// Astro config. Editing a slot id then changes astroConfigDigest and clears
// .astro/data-store.json, so the 144 cached posts re-render. Import them inside the
// plugin instead and a pasted slot id changes nothing the cache can see.
import { AD_SLOTS, IN_ARTICLE_PLAN, UNSAFE_BEFORE_TAGS } from './src/config/ads.mjs';
import { readdirSync } from 'node:fs';

// The 41 concept demos moved from /redesign/{slug} to /personal-website-examples/{slug} (still noindex).
// Build per-slug redirects from the new files so any stale /redesign/{slug} link still resolves.
const demoSlugs = readdirSync('./src/pages/personal-website-examples')
	.filter((f) => f.endsWith('.astro') && f !== 'index.astro')
	.map((f) => f.replace(/\.astro$/, ''));
// Destinations keep the trailing slash: without it the emitted redirect stubs carry a
// slashless <link rel="canonical">, which disagrees with the real page's self-canonical
// and, once the trailing-slash 308 is live, costs an extra hop.
const demoRedirects = Object.fromEntries(
	demoSlugs.map((s) => [`/redesign/${s}`, `/personal-website-examples/${s}/`])
);

// https://astro.build/config
export default defineConfig({
	site: 'https://swapbiswas.com',
	// Every route already emits <path>/index.html and every sitemap <loc> already ends in
	// a slash, so this locks in current behaviour rather than changing it. It pairs with
	// the 308 in vercel.json: without that redirect both /page and /page/ return 200.
	trailingSlash: 'always',
	build: {
		// The homepage shipped two render-blocking stylesheets: its own page chunk
		// (~35 KB raw) and the shared Nav/Footer/ThemeToggle/BaseLayout/global.css
		// chunk (~27 KB raw, misleadingly named after the `about` entry). Both lost a
		// bandwidth race on slow 4G against the third-party scripts that start higher
		// up in <head>, which is why PSI timed two similarly sized files at 170ms and
		// 520ms. Inlining them ships the CSS with the document: measured 3 requests
		// (2 render-blocking) -> 1 request (0 render-blocking), and slightly FEWER
		// bytes on the wire, because one brotli stream over HTML+CSS beats three.
		// Cascade order is preserved - Astro sorts sheets with cssOrder() and merges
		// adjacent inline ones, so the emitted order is unchanged.
		inlineStylesheets: 'always',
	},
	redirects: {
		// The concept library and its 41 demos all live under /personal-website-examples/.
		'/redesign': '/personal-website-examples/',
		'/homepage-design-concepts': '/personal-website-examples/',
		...demoRedirects,
		// Archive URLs from the site's previous platform. They 404 today but Search
		// Console still shows them earning impressions (exports of 2026-09-03 and
		// 2026-10-23), so each one points at the closest live listing. Static stubs:
		// meta refresh + noindex + canonical to the destination, like /redesign above.
		'/category/seo': '/blog/category/seo/',
		'/category/marketing': '/blog/category/marketing/',
		'/category/travel': '/blog/category/travel/',
		'/blog/tag/ai': '/blog/category/ai/',
		// No marketing-research category; its posts sit under Marketing.
		'/blog/tag/marketing-research': '/blog/category/marketing/',
		// No content-writing category or close match, so the blog index.
		'/blog/tag/content-writing': '/blog/',
	},
	integrations: [
		sitemap({
			// Exclude noindexed routes so they don't bloat the sitemap. The legacy-archive
			// redirect stubs (/category/*, /blog/tag/*) are noindex too; '/category/' also
			// covers /blog/category/.
			filter: (page) =>
				!page.includes('/category/') &&
				!page.includes('/blog/tag/') &&
				!page.includes('/work/') &&
				!page.match(/\/work\/?$/) && !page.includes('/redesign') && !page.match(/\/personal-website-examples\/[^/]+\/?$/),
		}),
		{
			name: 'sitemap-lastmod',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					const fs = await import('node:fs');
					const path = await import('node:path');

					// Build lastmod map from blog frontmatter
					const blogDir = path.resolve('./src/content/blog');
					const lastmodMap = new Map();
					const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
					for (const file of files) {
						const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
						const slug = file.replace(/\.md$/, '');
						const url = `https://swapbiswas.com/blog/${slug}/`;
						const updatedMatch = content.match(/^updatedDate:\s*(.+)$/m);
						const publishMatch = content.match(/^publishDate:\s*(.+)$/m);
						const dateStr = updatedMatch?.[1]?.trim() || publishMatch?.[1]?.trim();
						if (dateStr) {
							const date = new Date(dateStr);
							lastmodMap.set(url, date.toISOString().split('T')[0]);
						}
					}

					// Inject lastmod into sitemap XML
					const outDir = dir.pathname.replace(/^\/([A-Z]:)/, '$1');
					const sitemapPath = path.join(outDir, 'sitemap-0.xml');
					if (!fs.existsSync(sitemapPath)) return;

					let xml = fs.readFileSync(sitemapPath, 'utf-8');
					for (const [url, lastmod] of lastmodMap) {
						xml = xml.replace(
							`<loc>${url}</loc>`,
							`<loc>${url}</loc><lastmod>${lastmod}</lastmod>`
						);
					}
					fs.writeFileSync(sitemapPath, xml);
				},
			},
		},
		{
			// Announces new and edited URLs to IndexNow (Bing, Yandex, Seznam, Naver) at the
			// end of a production build. Google does not participate, so this changes nothing
			// there - the sitemap is still the only signal Google gets.
			//
			// ORDER MATTERS. This must stay AFTER sitemap-lastmod in this array: Astro runs
			// astro:build:done hooks in integration order, and this one reads the <lastmod>
			// values that hook injects. Move it above and every blog URL in the new sitemap
			// has no lastmod while the live sitemap has one, so the diff flags all of them
			// and every deploy resubmits every dated URL - while still logging success.
			//
			// TIMING. This runs before Vercel promotes the build, so the live site is the
			// PREVIOUS deployment: a URL this build adds is still a 404 there. Such URLs are
			// held in dist/indexnow-pending.json and announced by the next production build.
			//
			// This hook can fail the announcement but must never fail the build. The pages
			// are already built and the sitemap still carries them; the worst case of a
			// failure here is that Bing finds the change on its own schedule.
			name: 'indexnow-submit',
			hooks: {
				'astro:build:done': async ({ dir, logger }) => {
					const fs = await import('node:fs');
					const path = await import('node:path');
					const { fileURLToPath } = await import('node:url');
					const { FRESH_WINDOW_DAYS, PENDING_FILE, SITEMAP_FILE } = await import('./src/config/indexnow.mjs');
					const {
						fetchPublishedPending,
						fetchPublishedSitemap,
						parseSitemapEntries,
						resolveDeployContext,
						selectUrlsToAnnounce,
						splitByPublished,
						submitUrls,
						verifyKeyFile,
					} = await import('./src/lib/indexnow.mjs');

					const say = (msg) => (logger ? logger.info(msg) : console.log(`[indexnow-submit] ${msg}`));

					try {
						const context = resolveDeployContext(process.env);
						if (!context.shouldSubmit) {
							say(`skipped - ${context.reason}`);
							return;
						}

						const sitemapPath = path.join(fileURLToPath(dir), SITEMAP_FILE);
						if (!fs.existsSync(sitemapPath)) {
							say(`skipped - no ${SITEMAP_FILE} in the build output`);
							return;
						}

						const entries = parseSitemapEntries(fs.readFileSync(sitemapPath, 'utf8'));

						// Hands URLs this build cannot announce to the next production build, which
						// reads the file back from the live site (see splitByPublished in the lib).
						// Written on every submitting build, [] included, so a list never outlives
						// the deploy that announced it. Its own try: a failed write costs only the
						// held URLs, never the build.
						const writePending = (list) => {
							try {
								fs.writeFileSync(path.join(fileURLToPath(dir), PENDING_FILE), JSON.stringify(list));
							} catch (error) {
								say(`could not write ${PENDING_FILE}: ${error?.message || error}`);
							}
						};

						// The live site is still serving the PREVIOUS deployment at this point, so its
						// sitemap is a free record of what was published last time. Diffing against it
						// catches an edit whose lastmod has already aged out of the window. If it cannot
						// be read we pass null: selection falls back to the window alone (passing []
						// would mean "nothing was ever published" and select all 159 URLs), and the
						// live check below holds every candidate, since none can be confirmed served.
						// The pending list is what the previous build held back for this one.
						const [published, pendingList] = await Promise.all([
							fetchPublishedSitemap({ fetchImpl: fetch }),
							fetchPublishedPending({ fetchImpl: fetch }),
						]);
						if (!published.ok) {
							say(`could not read the published sitemap (${published.message}); holding every candidate for the next deploy`);
						}
						if (!pendingList.ok) say(`could not read the pending list (${pendingList.message})`);

						const selection = selectUrlsToAnnounce({
							currentEntries: entries,
							previousEntries: published.ok ? published.entries : null,
							now: new Date(),
							windowDays: FRESH_WINDOW_DAYS,
							pendingUrls: pendingList.urls,
						});

						// Same timing fact, other side: a URL this build ADDS is a 404 on the live
						// site until Vercel promotes it, and announcing a 404 gets the page treated as
						// dead. Only URLs the published sitemap already lists go out now; the rest are
						// held in PENDING_FILE for the next production build.
						const { live: urls, held } = splitByPublished(selection.urls, published.ok ? published.entries : null);
						if (held.length) say(`${held.length} URL(s) not live yet, held for the next deploy: ${held.join(', ')}`);
						if (urls.length === 0) {
							writePending(held);
							say(`nothing to announce - no live URL changed against the published sitemap, has a lastmod inside ${FRESH_WINDOW_DAYS} days or was pending`);
							return;
						}
						say(`${urls.length} URL(s) to announce (${selection.changed.length} changed vs published, ${selection.fresh.length} inside the ${FRESH_WINDOW_DAYS}-day window, ${selection.pending.length} pending from the last deploy)`);

						// The key has to be live at the origin BEFORE anything can be announced, and
						// on the deploy that first adds it the production domain is still serving the
						// previous deployment. That first build logs this and skips; the next submits.
						// Everything is held on a skip, so the next deploy still announces it.
						const keyCheck = await verifyKeyFile({ fetchImpl: fetch });
						if (!keyCheck.ok) {
							writePending([...urls, ...held]);
							say(`skipped - ${keyCheck.message}`);
							return;
						}

						writePending(held);
						const result = await submitUrls({ urls, fetchImpl: fetch });
						say(result.ok ? result.message : `announcement failed - ${result.message}`);
					} catch (error) {
						say(`skipped - unexpected error: ${error?.message || error}`);
					}
				},
			},
		},
		{
			// Astro ships `<script is:inline>` bodies and `<!-- -->` markup comments verbatim.
			// On a post that was ~6.7 KB of the ~46 KB brotli document, enough to cost a
			// simulated slow-start round trip. See src/lib/minify-inline-html.mjs.
			name: 'minify-inline-html',
			hooks: {
				'astro:build:done': async ({ dir, logger }) => {
					const fs = await import('node:fs');
					const path = await import('node:path');
					const zlib = await import('node:zlib');
					const { fileURLToPath } = await import('node:url');
					const { minifyInlineHtml, stats } = await import('./src/lib/minify-inline-html.mjs');
					const root = fileURLToPath(dir);
					const files = [];
					(function walk(d) {
						for (const e of fs.readdirSync(d, { withFileTypes: true })) {
							const p = path.join(d, e.name);
							if (e.isDirectory()) walk(p);
							else if (e.name.endsWith('.html')) files.push(p);
						}
					})(root);
					// Vercel serves HTML at about brotli quality 3. Posts still above the
					// two-window line keep the byte saving but not the round trip.
					const LINE = 43800;
					let before = 0, after = 0;
					const overLine = [];
					for (const file of files) {
						const html = fs.readFileSync(file, 'utf8');
						const out = minifyInlineHtml(html);
						before += Buffer.byteLength(html);
						after += Buffer.byteLength(out);
						if (out !== html) fs.writeFileSync(file, out);
						const rel = path.relative(root, file).replace(/\\/g, '/');
						if (rel.startsWith('blog/')) {
							const br = zlib.brotliCompressSync(Buffer.from(out), {
								params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 3 },
							}).length;
							if (br + 500 > LINE) overLine.push(`${rel} (${br} B)`);
						}
					}
					logger.info(`${files.length} pages, ${before} -> ${after} bytes, ${stats.unminified} inline script(s) shipped as authored`);
					if (overLine.length) logger.info(`${overLine.length} blog page(s) still above the 43.8 KB two-window line: ${overLine.join(', ')}`);
				},
			},
		},
	],
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark-dimmed' },
			defaultColor: false,
		},
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
			// Adds srcset/sizes/width/height/loading to the hand-authored diagrams under
			// /assets/blog/. Reads src/data/image-manifest.json, which is written by
			// `npm run img:variants` - the prebuild step keeps it in step with the files.
			rehypeResponsiveImages,
			// Splices the mid-article AdSense units into blog posts at the first h2 with
			// enough prose above and below it and a safe block immediately above. Emits
			// nothing while the slot ids are placeholders. The plan and slot table are
			// passed as OPTIONS rather than imported inside the plugin so that changing a
			// slot id changes this config's digest and invalidates the content-layer cache.
			[rehypeAdSlots, { plan: IN_ARTICLE_PLAN, slots: AD_SLOTS, unsafeBefore: UNSAFE_BEFORE_TAGS }],
			// Wraps tables in .table-wrap at build time instead of in enhanceContent() after
			// first layout. LAST on purpose: rehype-ad-slots must still see bare <table>
			// siblings. `rev` is only there to change the config digest: bump it whenever
			// the plugin body changes, or the content-layer cache serves stale posts.
			[rehypeTableWrap, { rev: 1 }],
		],
	},
});
