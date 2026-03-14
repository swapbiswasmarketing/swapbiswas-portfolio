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
			.map((post) => {
				const wordCount = post.body ? post.body.split(/\s+/).length : 0;
				const readingTime = Math.max(1, Math.ceil(wordCount / 220));
				return {
					title: post.data.title,
					pubDate: post.data.publishDate,
					description: `${post.data.description} (${readingTime} min read)`,
					link: `/blog/${post.id}/`,
					categories: post.data.category,
				};
			}),
	});
}
