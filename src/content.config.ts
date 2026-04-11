import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			faqs: z.array(z.object({
				q: z.string(),
				a: z.string(),
			})).optional(),
			howTo: z.object({
				name: z.string().optional(),
				totalTime: z.string().optional(),
				steps: z.array(z.object({
					name: z.string(),
					text: z.string(),
				})),
			}).optional(),
		}),
	}),
};
