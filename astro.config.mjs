// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeResponsiveImages from './src/lib/rehype-responsive-images.mjs';
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
		],
	},
});
