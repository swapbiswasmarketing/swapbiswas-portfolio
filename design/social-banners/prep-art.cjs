// Grade the raw site paintings at FULL resolution for banner use.
// The site copies in public/assets/art/ stop at 2000px; a banner rendered at 2x
// (3000-3168px wide) needs the 2752px raws from tmp/art-raw/. Same grade as
// scripts/grade-art.cjs (saturation 0.82, blacks lifted toward umber, fine grain).
// Usage: node design/social-banners/prep-art.cjs
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const repo = path.resolve(__dirname, '..', '..');
const rawDir = path.join(repo, 'tmp', 'art-raw');
const outDir = path.join(__dirname, 'art');
const IDS = ['hero-landscape', 'hero-landscape-dusk', 'notfound-ruins', 'newsletter-dove', 'contact-window', 'tools-workshop', 'about-garden'];

(async () => {
	fs.mkdirSync(outDir, { recursive: true });
	for (const id of IDS) {
		const src = ['jpg', 'png', 'jpeg', 'webp'].map((e) => path.join(rawDir, `${id}.${e}`)).find(fs.existsSync);
		if (!src) { console.log('missing raw', id); continue; }
		const meta = await sharp(src).metadata();
		const { width: w, height: h } = meta;
		const base = await sharp(src).rotate()
			.modulate({ saturation: 0.82, brightness: 1.0 })
			.linear([0.94, 0.94, 0.94], [10, 8, 5])
			.toBuffer();
		const grain = await sharp({ create: { width: w, height: h, channels: 1, noise: { type: 'gaussian', mean: 128, sigma: 10 } } }).png().toBuffer();
		const out = path.join(outDir, `${id}.jpg`);
		await sharp(base).composite([{ input: grain, blend: 'overlay' }]).jpeg({ quality: 92, mozjpeg: true }).toFile(out);
		console.log(id, w + 'x' + h, Math.round(fs.statSync(out).size / 1024) + 'KB');
	}
})();
