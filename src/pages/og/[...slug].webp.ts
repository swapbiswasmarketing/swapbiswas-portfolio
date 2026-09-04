import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// The card renders at 1200x630 because that is what og:image consumers want, but the
// same file is also the article hero, and .content-column caps the body at 66ch
// (measured 658px). A DPR-1 desktop was downloading 52.6 KiB to paint 658x345, about
// 3.3x the pixels it needed. These extra widths exist only for the on-page
// <img srcset>; /og/{slug}.webp keeps its URL and stays the social card.
const HERO_WIDTHS = [400, 660];

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.flatMap((post) => {
		const props = {
			slug: post.id,
			title: post.data.title,
			description: post.data.description,
			categories: post.data.category,
			img: post.data.img,
		};
		return [
			{ params: { slug: post.id }, props: { ...props, width: 1200 } },
			...HERO_WIDTHS.map((width) => ({
				params: { slug: `${post.id}-${width}w` },
				props: { ...props, width },
			})),
		];
	});
}

// Paper & Signal palette (mirrors DESIGN.md section 2 / 6 - light values, OG cards are always light)
const PAPER = '#f6f4ef';
const PANEL = '#ffffff';
const CREAM = '#eeebe4';
const HAIR = '#e4dfd6';
const INK = '#15130f';
const LEDE = '#55504a';
const MUTED = '#6a645c';
const ACCENT = '#b53b15';

// Load fonts from local disk (bundled in src/assets/fonts) to avoid network dependency at build/dev time
let bricolage600: Buffer | null = null;
let inter400: Buffer | null = null;
let inter500: Buffer | null = null;
let jbmono500: Buffer | null = null;

function loadFont(filename: string): Buffer {
	const fontPath = path.join(process.cwd(), 'src', 'assets', 'fonts', filename);
	return fs.readFileSync(fontPath);
}

function getFonts() {
	if (!bricolage600) bricolage600 = loadFont('bricolage-600.ttf');
	if (!inter400) inter400 = loadFont('inter-400.ttf');
	if (!inter500) inter500 = loadFont('inter-500.ttf');
	if (!jbmono500) jbmono500 = loadFont('jbmono-500.ttf');
	return { bricolage600, inter400, inter500, jbmono500 };
}

// Right-side image panel dimensions (card is 1200x630, 6px rule + 56px padding top/bottom)
const PANEL_W = 400;
const PANEL_H = 512;

// Load and cache images as base64 data URIs
const imageCache: Record<string, string> = {};

// satori + resvg is roughly 300ms per card and Astro calls GET once for every emitted
// path, so without this the three-width ladder would rasterise each card three times
// and add about a minute to a 137-post build. One 1200x630 PNG is held per post, which
// is far cheaper than re-rendering it.
const cardPngCache = new Map<string, Buffer>();

function getImageDataUri(filename: string): string {
	if (imageCache[filename]) return imageCache[filename];
	const imgPath = path.join(process.cwd(), 'public', 'assets', filename);
	const buffer = fs.readFileSync(imgPath);
	const dataUri = `data:image/jpeg;base64,${buffer.toString('base64')}`;
	imageCache[filename] = dataUri;
	return dataUri;
}

// The brand stock images are WebP (src/assets/stock-1..4.webp, mirrored in public/assets).
// Satori / resvg want PNG or JPEG, so crop-to-panel and re-encode with sharp once per file.
async function getStockPanelDataUri(filename: string): Promise<string> {
	const key = `panel:${filename}`;
	if (imageCache[key]) return imageCache[key];
	const imgPath = path.join(process.cwd(), 'public', 'assets', filename);
	const png = await sharp(imgPath)
		.resize(PANEL_W, PANEL_H, { fit: 'cover', position: 'centre' })
		.png({ compressionLevel: 9 })
		.toBuffer();
	const dataUri = `data:image/png;base64,${png.toString('base64')}`;
	imageCache[key] = dataUri;
	return dataUri;
}

// Category config: every category derives from the single vermilion signal.
// Only the chip label may vary; colour is always accent text on cream.
const categoryConfig: Record<string, { label: string }> = {
	SEO: { label: 'SEO' },
	Marketing: { label: 'Marketing' },
	'Product Marketing': { label: 'Product Marketing' },
	AI: { label: 'AI' },
	Tools: { label: 'Tools' },
	Career: { label: 'Career' },
	Email: { label: 'Email' },
	Design: { label: 'Design' },
	Travel: { label: 'Travel' },
	'Thought Leadership': { label: 'Thought Leadership' },
};

// Map frontmatter image paths to the stock filename used for the panel
function getStockFromFrontmatter(img: string): string {
	const match = img.match(/stock-(\d)\.webp$/);
	if (match) return `stock-${match[1]}.webp`;
	return 'stock-1.webp'; // fallback
}

// Keep the description to at most four lines at 21px in a 600px column
function truncate(text: string, max: number): string {
	if (!text || text.length <= max) return text || '';
	const cut = text.slice(0, max);
	const lastSpace = cut.lastIndexOf(' ');
	return `${cut.slice(0, lastSpace > 80 ? lastSpace : max).replace(/[,;:.\s-]+$/, '')}...`;
}

export async function GET({ props }: APIContext) {
	const { slug, width, title, description, categories, img } = props as {
		slug: string;
		width: number;
		title: string;
		description?: string;
		categories: string[];
		img: string;
	};

	// satori + resvg is the whole cost of this route. Once a card has been rasterised,
	// the other two widths in the ladder are just a sharp resize off the cached PNG.
	const cached = cardPngCache.get(slug);
	if (cached) return respond(await encodeCard(cached, width));

	const fonts = getFonts();
	const chips = (categories.length ? categories : ['Marketing']).slice(0, 2).map((cat) => {
		return (categoryConfig[cat] || { label: cat }).label;
	});
	const panelImageUri = await getStockPanelDataUri(getStockFromFrontmatter(img));
	const avatarUri = getImageDataUri('avatar-crop.jpg');
	const summary = truncate(description || '', 170);

	const titleSize = title.length > 56 ? '42px' : title.length > 40 ? '48px' : '54px';

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
					fontFamily: 'Inter',
					background: PAPER,
				},
				children: [
					// Vermilion signal rule along the top edge
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								right: '0',
								height: '6px',
								background: ACCENT,
							},
						},
					},

					// Body: left text column + right image panel
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'stretch',
								gap: '40px',
								width: '100%',
								height: '100%',
								padding: '62px 64px 56px',
							},
							children: [
								// Left column
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'space-between',
											flex: '1',
											minWidth: '0',
										},
										children: [
											// Category chips (mono, accent on cream)
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														alignItems: 'center',
														gap: '8px',
													},
													children: chips.map((label) => ({
														type: 'div',
														props: {
															style: {
																display: 'flex',
																padding: '7px 12px 6px',
																borderRadius: '4px',
																border: `1px solid ${HAIR}`,
																background: CREAM,
																color: ACCENT,
																fontFamily: 'JetBrains Mono',
																fontSize: '13px',
																fontWeight: '500',
																letterSpacing: '0.1em',
																textTransform: 'uppercase' as const,
																lineHeight: '1',
															},
															children: label,
														},
													})),
												},
											},

											// Title + description
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														flexDirection: 'column',
														gap: '18px',
														paddingTop: '24px',
														paddingBottom: '24px',
													},
													children: [
														{
															type: 'div',
															props: {
																style: {
																	fontFamily: 'Bricolage Grotesque',
																	fontSize: titleSize,
																	fontWeight: '600',
																	color: INK,
																	lineHeight: '1.06',
																	letterSpacing: '-0.02em',
																},
																children: title,
															},
														},
														...(summary
															? [
																	{
																		type: 'div',
																		props: {
																			style: {
																				fontFamily: 'Inter',
																				fontSize: '21px',
																				fontWeight: '400',
																				color: LEDE,
																				lineHeight: '1.45',
																			},
																			children: summary,
																		},
																	},
																]
															: []),
													],
												},
											},

											// Footer: avatar + name + domain
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														alignItems: 'center',
														gap: '12px',
													},
													children: [
														{
															type: 'img',
															props: {
																src: avatarUri,
																style: {
																	width: '36px',
																	height: '36px',
																	borderRadius: '50%',
																	objectFit: 'cover',
																	border: `1px solid ${HAIR}`,
																},
															},
														},
														{
															type: 'div',
															props: {
																style: {
																	fontFamily: 'Inter',
																	fontSize: '16px',
																	fontWeight: '500',
																	color: INK,
																},
																children: 'Swapnil Biswas',
															},
														},
														{
															type: 'div',
															props: {
																style: {
																	width: '1px',
																	height: '16px',
																	background: HAIR,
																},
															},
														},
														{
															type: 'div',
															props: {
																style: {
																	fontFamily: 'JetBrains Mono',
																	fontSize: '14px',
																	fontWeight: '500',
																	color: MUTED,
																	letterSpacing: '0.02em',
																},
																children: 'swapbiswas.com',
															},
														},
													],
												},
											},
										],
									},
								},

								// Right image panel (white panel, hair border, radius 12)
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											width: `${PANEL_W}px`,
											height: `${PANEL_H}px`,
											flexShrink: '0',
											borderRadius: '12px',
											border: `1px solid ${HAIR}`,
											background: PANEL,
											overflow: 'hidden',
										},
										children: [
											{
												type: 'img',
												props: {
													src: panelImageUri,
													style: {
														width: `${PANEL_W}px`,
														height: `${PANEL_H}px`,
														objectFit: 'cover',
														borderRadius: '11px',
													},
												},
											},
										],
									},
								},
							],
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
					name: 'Bricolage Grotesque',
					data: fonts.bricolage600,
					weight: 600,
					style: 'normal' as const,
				},
				{
					name: 'Inter',
					data: fonts.inter400,
					weight: 400,
					style: 'normal' as const,
				},
				{
					name: 'Inter',
					data: fonts.inter500,
					weight: 500,
					style: 'normal' as const,
				},
				{
					name: 'JetBrains Mono',
					data: fonts.jbmono500,
					weight: 500,
					style: 'normal' as const,
				},
			],
		}
	);

	const resvg = new Resvg(svg, {
		fitTo: { mode: 'width', value: 1200 },
	});
	const pngBuffer = Buffer.from(resvg.render().asPng());
	cardPngCache.set(slug, pngBuffer);

	return respond(await encodeCard(pngBuffer, width));
}

// Downscale off the 1200px PNG, not off the finished WebP: re-encoding an already lossy
// WebP smears the thin type in the card headline.
async function encodeCard(png: Buffer, width: number): Promise<Buffer> {
	const pipeline = sharp(png);
	if (width < 1200) pipeline.resize({ width });
	return pipeline.webp({ quality: 82 }).toBuffer();
}

function respond(webp: Buffer): Response {
	return new Response(new Uint8Array(webp), {
		headers: {
			'Content-Type': 'image/webp',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
