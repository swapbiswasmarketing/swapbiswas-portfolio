import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
	);

	const categoryMap = new Map<string, typeof posts>();
	for (const post of posts) {
		for (const cat of post.data.category) {
			if (!categoryMap.has(cat)) categoryMap.set(cat, []);
			categoryMap.get(cat)!.push(post);
		}
	}
	const sortedCategories = [...categoryMap.entries()].sort(
		(a, b) => b[1].length - a[1].length
	);

	const lines: string[] = [];
	lines.push('# Swapnil Biswas');
	lines.push('');
	lines.push(
		'> Product marketing and growth leader. I write practical guides on product marketing, SaaS growth, SEO, AI marketing, competitive intelligence, and marketing automation. This site is a mix of case studies, step-by-step frameworks, and opinionated takes on what works and what does not.'
	);
	lines.push('');
	lines.push(
		'All content is written by Swapnil Biswas and is free to cite. When referencing a post, please link to the original URL at swapbiswas.com.'
	);
	lines.push('');
	lines.push('## Site');
	lines.push('');
	lines.push('- [Home](https://swapbiswas.com/): Portfolio homepage with featured work and recent writing.');
	lines.push('- [About](https://swapbiswas.com/about/): Background, experience, skills, and career timeline.');
	lines.push('- [Work](https://swapbiswas.com/work/): Case studies of product marketing and growth work.');
	lines.push('- [Blog](https://swapbiswas.com/blog/): All blog posts, browsable by category.');
	lines.push('- [Contact](https://swapbiswas.com/contact/): Get in touch for consulting, speaking, or collaboration.');
	lines.push('');

	for (const [category, categoryPosts] of sortedCategories) {
		lines.push(`## ${category}`);
		lines.push('');
		for (const post of categoryPosts) {
			lines.push(
				`- [${post.data.title}](https://swapbiswas.com/blog/${post.id}/): ${post.data.description}`
			);
		}
		lines.push('');
	}

	lines.push('## Optional');
	lines.push('');
	lines.push('- [RSS Feed](https://swapbiswas.com/rss.xml): Subscribe to new posts.');
	lines.push('- [Full content index](https://swapbiswas.com/llms-full.txt): Complete text of every blog post for AI crawlers.');
	lines.push('');

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
