// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeResponsiveImages from './src/lib/rehype-responsive-images.mjs';
import rehypeAdSlots from './src/lib/rehype-ad-slots.mjs';
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
	},
	integrations: [
		sitemap({
			// Exclude noindexed routes so they don't bloat the sitemap
			filter: (page) =>
				!page.includes('/blog/category/') &&
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
			// values that hook injects. Move it above and every URL parses as "no lastmod",
			// so a deploy would announce nothing and still log success.
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
					const { FRESH_WINDOW_DAYS, SITEMAP_FILE } = await import('./src/config/indexnow.mjs');
					const { parseSitemapEntries, resolveDeployContext, selectFreshUrls, submitUrls, verifyKeyFile } =
						await import('./src/lib/indexnow.mjs');

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
						const urls = selectFreshUrls(entries, new Date(), FRESH_WINDOW_DAYS);
						if (urls.length === 0) {
							say(`nothing to announce - no URL has a lastmod inside ${FRESH_WINDOW_DAYS} days`);
							return;
						}

						// The key has to be live at the origin BEFORE anything can be announced, and
						// on the deploy that first adds it the production domain is still serving the
						// previous deployment. That first build logs this and skips; the next submits.
						const keyCheck = await verifyKeyFile({ fetchImpl: fetch });
						if (!keyCheck.ok) {
							say(`skipped - ${keyCheck.message}`);
							return;
						}

						const result = await submitUrls({ urls, fetchImpl: fetch });
						say(result.ok ? result.message : `announcement failed - ${result.message}`);
					} catch (error) {
						say(`skipped - unexpected error: ${error?.message || error}`);
					}
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
		],
	},
});
