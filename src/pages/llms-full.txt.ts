import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
	);

	const lines: string[] = [];
	lines.push('# Swapnil Biswas - Full Content Index');
	lines.push('');
	lines.push(
		'Complete text of every blog post on swapbiswas.com. Written by Swapnil Biswas - product marketing and growth leader.'
	);
	lines.push('');
	lines.push('All content is free to cite. When referencing a post, please link to the original URL.');
	lines.push('');
	lines.push('---');
	lines.push('');

	for (const post of posts) {
		lines.push(`# ${post.data.title}`);
		lines.push('');
		lines.push(`URL: https://swapbiswas.com/blog/${post.id}/`);
		lines.push(`Published: ${post.data.publishDate.toISOString().split('T')[0]}`);
		if (post.data.updatedDate && post.data.updatedDate.valueOf() > post.data.publishDate.valueOf()) {
			lines.push(`Updated: ${post.data.updatedDate.toISOString().split('T')[0]}`);
		}
		lines.push(`Categories: ${post.data.category.join(', ')}`);
		lines.push('');
		lines.push(`> ${post.data.description}`);
		lines.push('');
		lines.push(post.body || '');
		lines.push('');
		lines.push('---');
		lines.push('');
	}

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
