import type { APIContext } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// Paper & Signal palette (mirrors DESIGN.md section 2 / 6 - light values, OG cards are always light)
const PAPER = '#f6f4ef';
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

// Right-side art panel: the homepage hero landscape painting, ~46% of the 1200x630 card, full height.
// ART_W includes the 1px hairline border-left; the image itself is ART_W - 1 wide.
const CARD_W = 1200;
const CARD_H = 630;
const ART_W = 552;
const ART_IMG_W = ART_W - 1;

const imageCache: Record<string, string> = {};

function getImageDataUri(filename: string): string {
	if (imageCache[filename]) return imageCache[filename];
	const imgPath = path.join(process.cwd(), 'public', 'assets', filename);
	const buffer = fs.readFileSync(imgPath);
	const ext = filename.split('.').pop();
	const dataUri = `data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,${buffer.toString('base64')}`;
	imageCache[filename] = dataUri;
	return dataUri;
}

// Satori does not decode WebP, so read the painting with fs, crop it to the panel with sharp
// (cover, anchored to the right edge where the olive tree, vermilion cloth and cypresses sit)
// and hand Satori an exact-size JPEG data URL.
async function getArtPanelDataUri(filename: string): Promise<string> {
	const key = `art:${filename}`;
	if (imageCache[key]) return imageCache[key];
	const imgPath = path.join(process.cwd(), 'public', 'assets', 'art', filename);
	const buf = fs.readFileSync(imgPath);
	const jpg = await sharp(buf)
		.resize(ART_IMG_W, CARD_H, { fit: 'cover', position: 'right' })
		.jpeg({ quality: 80 })
		.toBuffer();
	const dataUri = `data:image/jpeg;base64,${jpg.toString('base64')}`;
	imageCache[key] = dataUri;
	return dataUri;
}

// Stats: numeral in ink, suffix in accent (DESIGN.md section 4, "Stats")
const STATS: { number: string; suffix: string; label: string }[] = [
	{ number: '657', suffix: 'K', label: 'Leads generated' },
	{ number: '18.2', suffix: 'M', label: 'Website traffic' },
	{ number: '10', suffix: 'x', label: 'Conversion results' },
];

export async function GET(_context: APIContext) {
	const fonts = getFonts();
	const avatarUri = getImageDataUri('avatar-crop.jpg');
	const artUri = await getArtPanelDataUri('hero-landscape.webp');

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
					// Body: left text column + right art panel
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'stretch',
								width: '100%',
								height: '100%',
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
											padding: '62px 48px 56px 64px',
										},
										children: [
											// Role chips (mono, cream, hair border)
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														alignItems: 'center',
														gap: '8px',
													},
													children: ['Product Marketing', 'Growth', 'AI'].map((role) => ({
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
															children: role,
														},
													})),
												},
											},

											// Name + role line + stats
											{
												type: 'div',
												props: {
													style: {
														display: 'flex',
														flexDirection: 'column',
														paddingTop: '24px',
														paddingBottom: '24px',
													},
													children: [
														{
															type: 'div',
															props: {
																style: {
																	fontFamily: 'Bricolage Grotesque',
																	fontSize: '72px',
																	fontWeight: '600',
																	color: INK,
																	lineHeight: '1.0',
																	letterSpacing: '-0.03em',
																},
																children: 'Swapnil Biswas',
															},
														},
														{
															type: 'div',
															props: {
																style: {
																	fontFamily: 'Inter',
																	fontSize: '22px',
																	fontWeight: '400',
																	color: LEDE,
																	lineHeight: '1.45',
																	marginTop: '16px',
																},
																children: 'AI, Product & Digital Growth Marketer',
															},
														},

														// Stats row
														{
															type: 'div',
															props: {
																style: {
																	display: 'flex',
																	gap: '40px',
																	marginTop: '36px',
																	paddingTop: '24px',
																	borderTop: `1px solid ${HAIR}`,
																},
																children: STATS.map((stat) => ({
																	type: 'div',
																	props: {
																		style: {
																			display: 'flex',
																			flexDirection: 'column',
																			gap: '6px',
																		},
																		children: [
																			{
																				type: 'div',
																				props: {
																					style: {
																						display: 'flex',
																						alignItems: 'baseline',
																						fontFamily: 'Bricolage Grotesque',
																						fontSize: '40px',
																						fontWeight: '600',
																						lineHeight: '1',
																						letterSpacing: '-0.02em',
																					},
																					children: [
																						{
																							type: 'span',
																							props: {
																								style: { color: INK },
																								children: stat.number,
																							},
																						},
																						{
																							type: 'span',
																							props: {
																								style: { color: ACCENT },
																								children: stat.suffix,
																							},
																						},
																					],
																				},
																			},
																			{
																				type: 'div',
																				props: {
																					style: {
																						fontFamily: 'JetBrains Mono',
																						fontSize: '12px',
																						fontWeight: '500',
																						color: MUTED,
																						letterSpacing: '0.08em',
																						textTransform: 'uppercase' as const,
																					},
																					children: stat.label,
																				},
																			},
																		],
																	},
																})),
															},
														},
													],
												},
											},

											// Footer: avatar + domain
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

								// Right art panel: hero landscape painting, full card height, hairline border-left, no radius
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											width: `${ART_W}px`,
											height: `${CARD_H}px`,
											flexShrink: '0',
											borderLeft: `1px solid ${HAIR}`,
											overflow: 'hidden',
										},
										children: [
											{
												type: 'img',
												props: {
													src: artUri,
													style: {
														width: `${ART_IMG_W}px`,
														height: `${CARD_H}px`,
														objectFit: 'cover',
													},
												},
											},
										],
									},
								},
							],
						},
					},

					// Vermilion signal rule along the top edge (last child so it paints over the art panel too)
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
				],
			},
		},
		{
			width: CARD_W,
			height: CARD_H,
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
		fitTo: { mode: 'width', value: CARD_W },
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
