import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { title: post.data.title, categories: post.data.category, img: post.data.img },
	}));
}

// Load fonts from local disk (bundled in src/assets/fonts) to avoid network dependency at build/dev time
let rubikBold: Buffer | null = null;
let rubikRegular: Buffer | null = null;

function loadFont(filename: string): Buffer {
	const fontPath = path.join(process.cwd(), 'src', 'assets', 'fonts', filename);
	return fs.readFileSync(fontPath);
}

function getFonts() {
	if (!rubikBold) rubikBold = loadFont('rubik-semibold.ttf');
	if (!rubikRegular) rubikRegular = loadFont('rubik-regular.ttf');
	return { rubikBold, rubikRegular };
}

// Load and cache stock images as base64 data URIs
const stockImageCache: Record<string, string> = {};

function getStockImageDataUri(filename: string): string {
	if (stockImageCache[filename]) return stockImageCache[filename];
	const imgPath = path.join(process.cwd(), 'public', 'assets', filename);
	const buffer = fs.readFileSync(imgPath);
	const base64 = buffer.toString('base64');
	const dataUri = `data:image/jpeg;base64,${base64}`;
	stockImageCache[filename] = dataUri;
	return dataUri;
}

// Category config: accent color per category
const categoryConfig: Record<string, { bg: string; glow: string }> = {
	SEO: { bg: '#2563eb', glow: 'rgba(37, 99, 235, 0.35)' },
	Marketing: { bg: '#7611a6', glow: 'rgba(118, 17, 166, 0.35)' },
	Travel: { bg: '#0d9488', glow: 'rgba(13, 148, 136, 0.35)' },
	AI: { bg: '#e05d22', glow: 'rgba(224, 93, 34, 0.35)' },
	'Thought Leadership': { bg: '#b45309', glow: 'rgba(180, 83, 9, 0.35)' },
};

// Map frontmatter .webp paths to .jpg filenames for OG image rendering
function getStockFromFrontmatter(img: string): string {
	const match = img.match(/stock-(\d)\.webp$/);
	if (match) return `stock-${match[1]}.jpg`;
	return 'stock-1.jpg'; // fallback
}

export async function GET({ props }: APIContext) {
	const { title, categories, img } = props as { title: string; categories: string[]; img: string };
	const fonts = getFonts();
	const primaryCategory = categories[0] || 'Marketing';
	const config = categoryConfig[primaryCategory] || categoryConfig.Marketing;
	const bgImageUri = getStockImageDataUri(getStockFromFrontmatter(img));
	const avatarUri = getStockImageDataUri('avatar-crop.jpg');

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					position: 'relative',
					overflow: 'hidden',
					fontFamily: 'Rubik',
				},
				children: [
					// Background stock image - fully visible
					{
						type: 'img',
						props: {
							src: bgImageUri,
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								width: '1200px',
								height: '630px',
								objectFit: 'cover',
							},
						},
					},

					// Light scrim - just enough to unify the image, not blacken it
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								right: '0',
								bottom: '0',
								background: 'linear-gradient(160deg, rgba(12, 14, 22, 0.25) 0%, rgba(12, 14, 22, 0.35) 100%)',
							},
						},
					},

					// Top gradient accent bar
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								right: '0',
								height: '4px',
								background: `linear-gradient(90deg, #ca7879 0%, ${config.bg} 50%, #1c0056 100%)`,
							},
						},
					},

					// Content area - frosted glass panel pinned to bottom
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								bottom: '0',
								left: '0',
								right: '0',
								display: 'flex',
								flexDirection: 'column',
								padding: '40px 64px 44px',
								background: 'linear-gradient(180deg, rgba(12, 14, 22, 0.0) 0%, rgba(12, 14, 22, 0.55) 15%, rgba(12, 14, 22, 0.88) 40%, rgba(12, 14, 22, 0.95) 100%)',
							},
							children: [
								// Category pill row
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											marginBottom: '20px',
										},
										children: [
											// Category pills
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														alignItems: 'center',
														gap: '8px',
													},
													children: [
														{
															type: 'div',
															props: {
																style: {
																	width: '10px',
																	height: '10px',
																	borderRadius: '50%',
																	background: config.bg,
																	boxShadow: `0 0 14px ${config.glow}`,
																},
															},
														},
														...categories.map((cat: string) => ({
															type: 'div',
															props: {
																style: {
																	padding: '6px 16px',
																	borderRadius: '999px',
																	border: '1px solid rgba(255, 255, 255, 0.18)',
																	background: 'rgba(255, 255, 255, 0.1)',
																	color: '#e8ecf4',
																	fontSize: '13px',
																	fontWeight: '400',
																	letterSpacing: '0.08em',
																	textTransform: 'uppercase' as const,
																},
																children: cat,
															},
														})),
													],
												},
											},
											// Site branding
											{
												type: 'div',
												props: {
													style: {
														fontSize: '15px',
														color: 'rgba(255, 255, 255, 0.5)',
														letterSpacing: '0.04em',
													},
													children: 'swapbiswas.com',
												},
											},
										],
									},
								},

								// Title
								{
									type: 'div',
									props: {
										style: {
											fontSize: title.length > 60 ? '40px' : title.length > 40 ? '48px' : '54px',
											fontWeight: '600',
											color: '#ffffff',
											lineHeight: '1.2',
											maxWidth: '1000px',
											letterSpacing: '-0.02em',
											textShadow: '0 2px 16px rgba(0, 0, 0, 0.4)',
											marginBottom: '24px',
										},
										children: title,
									},
								},

								// Author row
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											alignItems: 'center',
											gap: '14px',
										},
										children: [
											// Author avatar photo
											{
												type: 'img',
												props: {
													src: avatarUri,
													style: {
														width: '40px',
														height: '40px',
														borderRadius: '50%',
														objectFit: 'cover',
														boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
														border: '2px solid rgba(255, 255, 255, 0.2)',
													},
												},
											},
											// Author name
											{
												type: 'div',
												props: {
													style: {
														fontSize: '16px',
														color: '#d0d5e0',
														fontWeight: '600',
													},
													children: 'Swapnil Biswas',
												},
											},
											// Separator dot
											{
												type: 'div',
												props: {
													style: {
														width: '4px',
														height: '4px',
														borderRadius: '50%',
														background: 'rgba(255, 255, 255, 0.3)',
													},
												},
											},
											// Role
											{
												type: 'div',
												props: {
													style: {
														fontSize: '14px',
														color: 'rgba(255, 255, 255, 0.4)',
														fontWeight: '400',
													},
													children: 'Product Marketing & Growth',
												},
											},
										],
									},
								},
							],
						},
					},

					// Bottom border accent
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								bottom: '0',
								left: '0',
								right: '0',
								height: '3px',
								background: `linear-gradient(90deg, transparent 0%, ${config.bg} 30%, #ca7879 70%, transparent 100%)`,
								opacity: '0.6',
							},
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Rubik',
					data: fonts.rubikBold,
					weight: 600,
					style: 'normal' as const,
				},
				{
					name: 'Rubik',
					data: fonts.rubikRegular,
					weight: 400,
					style: 'normal' as const,
				},
			],
		}
	);

	const resvg = new Resvg(svg, {
		fitTo: { mode: 'width', value: 1200 },
	});
	const pngData = resvg.render();
	const pngBuffer = pngData.asPng();

	// Convert PNG to WebP for smaller file size
	const webpBuffer = await sharp(Buffer.from(pngBuffer))
		.webp({ quality: 82 })
		.toBuffer();

	return new Response(new Uint8Array(webpBuffer), {
		headers: {
			'Content-Type': 'image/webp',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
