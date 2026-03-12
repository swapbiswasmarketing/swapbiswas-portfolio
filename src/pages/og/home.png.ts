import type { APIContext } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

// Fetch and cache fonts
let rubikBold: ArrayBuffer | null = null;
let rubikRegular: ArrayBuffer | null = null;

async function fetchFont(weight: number): Promise<ArrayBuffer> {
	const res = await fetch(
		`https://fonts.googleapis.com/css2?family=Rubik:wght@${weight}&display=swap`
	);
	const css = await res.text();
	const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
	if (!fontUrl) throw new Error('Could not find font URL');
	const fontRes = await fetch(fontUrl);
	return fontRes.arrayBuffer();
}

async function getFonts() {
	if (!rubikBold) rubikBold = await fetchFont(600);
	if (!rubikRegular) rubikRegular = await fetchFont(400);
	return { rubikBold, rubikRegular };
}

function getImageDataUri(filename: string): string {
	const imgPath = path.join(process.cwd(), 'public', 'assets', filename);
	const buffer = fs.readFileSync(imgPath);
	const base64 = buffer.toString('base64');
	const ext = filename.split('.').pop();
	return `data:image/${ext === 'jpg' ? 'jpeg' : ext};base64,${base64}`;
}

export async function GET(_context: APIContext) {
	const fonts = await getFonts();
	const avatarUri = getImageDataUri('avatar-crop.jpg');
	const portraitUri = getImageDataUri('portrait-new.jpg');

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
					background: '#090b11',
				},
				children: [
					// Portrait image on the right
					{
						type: 'img',
						props: {
							src: portraitUri,
							style: {
								position: 'absolute',
								top: '0',
								right: '0',
								width: '480px',
								height: '630px',
								objectFit: 'cover',
								objectPosition: 'top center',
							},
						},
					},

					// Gradient fade from left over the portrait
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								right: '0',
								bottom: '0',
								background: 'linear-gradient(90deg, #090b11 55%, rgba(9, 11, 17, 0.85) 70%, rgba(9, 11, 17, 0.4) 85%, rgba(9, 11, 17, 0.15) 100%)',
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
								background: 'linear-gradient(90deg, #ca7879 0%, #7611a6 50%, #1c0056 100%)',
							},
						},
					},

					// Content area
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								padding: '60px 64px',
								width: '720px',
								height: '100%',
								position: 'relative',
							},
							children: [
								// Role pills
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											gap: '10px',
											marginBottom: '28px',
										},
										children: ['Product Marketing', 'Growth Strategy', 'Content & SEO'].map(
											(role) => ({
												type: 'div',
												props: {
													style: {
														padding: '6px 16px',
														borderRadius: '999px',
														border: '1px solid rgba(255, 255, 255, 0.15)',
														background: 'rgba(255, 255, 255, 0.08)',
														color: '#c3cadb',
														fontSize: '13px',
														fontWeight: '400',
														letterSpacing: '0.04em',
													},
													children: role,
												},
											})
										),
									},
								},

								// Name
								{
									type: 'div',
									props: {
										style: {
											fontSize: '52px',
											fontWeight: '600',
											color: '#ffffff',
											lineHeight: '1.15',
											letterSpacing: '-0.02em',
											marginBottom: '16px',
										},
										children: 'Swapnil Biswas',
									},
								},

								// Tagline
								{
									type: 'div',
									props: {
										style: {
											fontSize: '22px',
											fontWeight: '400',
											color: '#a3acc8',
											lineHeight: '1.5',
											maxWidth: '560px',
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
											gap: '36px',
											marginTop: '40px',
											paddingTop: '28px',
											borderTop: '1px solid rgba(255, 255, 255, 0.1)',
										},
										children: [
											{ value: '657K', label: 'Leads Generated' },
											{ value: '18.2M', label: 'Website Traffic' },
											{ value: '10x', label: 'Conversion Results' },
										].map((stat) => ({
											type: 'div',
											props: {
												style: {
													display: 'flex',
													flexDirection: 'column',
													gap: '4px',
												},
												children: [
													{
														type: 'div',
														props: {
															style: {
																fontSize: '28px',
																fontWeight: '600',
																color: '#ca7879',
															},
															children: stat.value,
														},
													},
													{
														type: 'div',
														props: {
															style: {
																fontSize: '12px',
																color: 'rgba(255, 255, 255, 0.4)',
																letterSpacing: '0.04em',
															},
															children: stat.label,
														},
													},
												],
											},
										})),
									},
								},

								// Website branding
								{
									type: 'div',
									props: {
										style: {
											display: 'flex',
											alignItems: 'center',
											gap: '12px',
											marginTop: '36px',
										},
										children: [
											{
												type: 'img',
												props: {
													src: avatarUri,
													style: {
														width: '32px',
														height: '32px',
														borderRadius: '50%',
														objectFit: 'cover',
														border: '2px solid rgba(255, 255, 255, 0.15)',
													},
												},
											},
											{
												type: 'div',
												props: {
													style: {
														fontSize: '14px',
														color: 'rgba(255, 255, 255, 0.45)',
														letterSpacing: '0.04em',
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
								background: 'linear-gradient(90deg, transparent 0%, #7611a6 30%, #ca7879 70%, transparent 100%)',
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

	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
