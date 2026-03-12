import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const blog = await getCollection('blog');
	return rss({
		title: 'Swapnil Biswas - Blog',
		description: 'Articles on marketing, SEO, AI, and growth strategy by Swapnil Biswas',
		site: context.site,
		items: blog
			.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.publishDate,
				description: post.data.description,
				link: `/blog/${post.id}/`,
			})),
	});
}
