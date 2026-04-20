// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://swapbiswas.com',
	integrations: [
		sitemap({
			// Exclude noindexed routes so they don't bloat the sitemap
			filter: (page) =>
				!page.includes('/blog/category/') &&
				!page.includes('/work/') &&
				!page.match(/\/work\/?$/),
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
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
});
