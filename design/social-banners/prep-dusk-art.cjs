// Banner-only grade of the dusk hero painting (alternate / dark banner set).
// Starts from the full-resolution raw (tmp/art-raw/hero-landscape-dusk.jpg) and does, in order:
//   1. bright-crack softening: a horizontal grey opening finds thin bright vertical and diagonal
//      cracks (the white "scratches" that read as damage at banner scale) and pulls them down
//      toward their surroundings. Horizontal strokes (river shimmer, ridge light) survive
//      because the structuring element runs along them. On dark ground (cypress masses, the
//      left foliage) the threshold drops and the pull is full strength, because the exposure
//      lift in step 4 amplifies a faint light streak on a dark base the most.
//   2. sky spot pass: bright specks and pale paint losses in the sky that are small in BOTH
//      directions (min of a horizontal and a vertical opening top-hat) are pulled down. Long
//      horizontal light (cloud rims, the ridge glow) is untouched.
//   3. sky dark-crack pass: the mirror of step 1 (horizontal and vertical closings) fills the
//      thin dark craquelure web above the skyline, where the lift made it read as a cracked
//      surface. Below the skyline the painting keeps its texture.
//   4. an exposure lift with midtone contrast, so the scene reads as a painting at phone size
//      instead of a dark mass.
//   5. the site grade from prep-art.cjs (saturation 0.82, blacks lifted toward umber).
//   6. the campfire is blended toward the dark-mode accent #E85C33 (the S-mark head colour), so
//      the banner shows one red, with a small lighter core so it survives a 26% downscale.
//   7. the site's fine grain.
// Nothing is filtered at display time; the HTML just places this file.
// Usage: node design/social-banners/alternate/prep-dusk-art.cjs
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const repo = path.resolve(__dirname, '..', '..');
const src = path.join(repo, 'tmp', 'art-raw', 'hero-landscape-dusk.jpg');
const out = path.join(repo, 'design', 'social-banners', 'art', 'hero-landscape-dusk-banner.jpg');

const K = 9;            // opening width in px (cracks are 1-4px wide at 2752px)
const T = 7;            // top-hat below this is canvas texture, keep it
const T_DARK = 2;       // ...on dark ground (base luminance < ~45)
const SPOT = 41;        // spot pass: features shorter than this in both axes
const T_SPOT = 5;
const T_CRACK = 3;      // sky dark-crack threshold
const GAMMA = 0.8;      // < 1 lifts midtones
const PIVOT = 72, CONTRAST = 1.12;
const FIRE = { x: 1694, y: 924 };
const ACCENT = [232, 92, 51];   // #E85C33, --d-accent
const HOT = [255, 176, 138];    // light core, same hue family

// Lower edge of the sky in source px, drawn around the tall cypress tops so their spires are
// never touched. Linear between points; the pass fades out over SKY_FEATHER px above it.
const SKYLINE = [[0, 540], [320, 560], [520, 640], [700, 620], [735, 470], [800, 470], [812, 315], [915, 315], [935, 560], [985, 560], [995, 365], [1080, 365], [1095, 500], [1150, 505], [1300, 480], [1420, 445], [1500, 400], [1640, 350], [1800, 370], [1950, 392], [2060, 392], [2075, 215], [2235, 210], [2255, 395], [2400, 345], [2600, 265], [2752, 215]];
const SKY_FEATHER = 40;
const SKY_MAX_Y = 700;

function hMin(src, w, h, k, dst, y1 = h) {
	const r = k >> 1;
	for (let y = 0; y < y1; y++) {
		const row = y * w;
		for (let x = 0; x < w; x++) {
			let m = 255;
			const a = Math.max(0, x - r), b = Math.min(w - 1, x + r);
			for (let i = a; i <= b; i++) { const v = src[row + i]; if (v < m) m = v; }
			dst[row + x] = m;
		}
	}
}
function hMax(src, w, h, k, dst, y1 = h) {
	const r = k >> 1;
	for (let y = 0; y < y1; y++) {
		const row = y * w;
		for (let x = 0; x < w; x++) {
			let m = 0;
			const a = Math.max(0, x - r), b = Math.min(w - 1, x + r);
			for (let i = a; i <= b; i++) { const v = src[row + i]; if (v > m) m = v; }
			dst[row + x] = m;
		}
	}
}
function vMin(src, w, h, k, dst, y1 = h) {
	const r = k >> 1;
	for (let y = 0; y < y1; y++) {
		const a = Math.max(0, y - r), b = Math.min(h - 1, y + r);
		for (let x = 0; x < w; x++) {
			let m = 255;
			for (let i = a; i <= b; i++) { const v = src[i * w + x]; if (v < m) m = v; }
			dst[y * w + x] = m;
		}
	}
}
function vMax(src, w, h, k, dst, y1 = h) {
	const r = k >> 1;
	for (let y = 0; y < y1; y++) {
		const a = Math.max(0, y - r), b = Math.min(h - 1, y + r);
		for (let x = 0; x < w; x++) {
			let m = 0;
			for (let i = a; i <= b; i++) { const v = src[i * w + x]; if (v > m) m = v; }
			dst[y * w + x] = m;
		}
	}
}
const smooth = (e0, e1, v) => { const t = Math.min(1, Math.max(0, (v - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
const lum = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
function skylineAt(x) {
	for (let i = 1; i < SKYLINE.length; i++) {
		const [x0, y0] = SKYLINE[i - 1], [x1, y1] = SKYLINE[i];
		if (x <= x1) return y0 + (y1 - y0) * (x - x0) / Math.max(1, x1 - x0);
	}
	return SKYLINE[SKYLINE.length - 1][1];
}

(async () => {
	const { data, info } = await sharp(src).rotate().removeAlpha().raw().toBuffer({ resolveWithObject: true });
	const { width: w, height: h } = info;
	const n = w * h;

	// fire protection (fire, its reflection, and the smoke plume up and to the right)
	const weight = new Float32Array(n);
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		const i = y * w + x;
		const dFire = Math.hypot(x - FIRE.x, (y - FIRE.y) * 0.6);
		let wt = smooth(26, 60, dFire);
		if (x > 1665 && x < 1725 && y > 985 && y < 1050) wt = 0;
		weight[i] = wt;
	}
	// sky weight: 1 above the skyline, fading to 0 over SKY_FEATHER px above it
	const sky = new Float32Array(w * SKY_MAX_Y);
	for (let x = 0; x < w; x++) {
		const s = skylineAt(x);
		for (let y = 0; y < SKY_MAX_Y; y++) sky[y * w + x] = smooth(s, s - SKY_FEATHER, y);
	}

	const ch = [0, 1, 2].map((c) => { const a = new Float32Array(n); for (let i = 0; i < n; i++) a[i] = data[i * 3 + c]; return a; });
	const tmp = new Float32Array(n);

	// 1. bright cracks: per-channel horizontal opening, soft-threshold top-hat, stronger on dark ground
	const opens = ch.map((a) => { const o = new Float32Array(n); hMin(a, w, h, K, tmp); hMax(tmp, w, h, K, o); return o; });
	for (let i = 0; i < n; i++) {
		const base = lum(opens[0][i], opens[1][i], opens[2][i]);
		const d = smooth(70, 40, base);                 // 1 on dark ground
		const t = T + (T_DARK - T) * d, k = 0.85 + 0.15 * d;
		for (let c = 0; c < 3; c++) {
			const th = ch[c][i] - opens[c][i];
			if (th > t) ch[c][i] -= (th - t) * k * weight[i];
		}
	}
	opens.length = 0;

	// 2. sky spots: luminance top-hat that is large for BOTH a horizontal and a vertical opening
	const Y1 = SKY_MAX_Y;
	// the vertical opening's window reaches past Y1, so luminance is computed a little further down
	const LY = Math.min(h, Y1 + 2 * SPOT);
	const L = new Float32Array(n);
	for (let i = 0; i < w * LY; i++) L[i] = lum(ch[0][i], ch[1][i], ch[2][i]);
	const oh = new Float32Array(n), ov = new Float32Array(n);
	hMin(L, w, h, SPOT, tmp, Y1); hMax(tmp, w, h, SPOT, oh, Y1);
	vMin(L, w, h, SPOT, tmp, Math.min(h, Y1 + SPOT));
	vMax(tmp, w, h, SPOT, ov, Y1);
	let spots = 0;
	for (let i = 0; i < w * Y1; i++) {
		const th = Math.min(L[i] - oh[i], L[i] - ov[i]);
		const s = sky[i] * weight[i];
		if (th > T_SPOT && s > 0) {
			const dv = (th - T_SPOT) * s;
			for (let c = 0; c < 3; c++) ch[c][i] -= dv;
			spots++;
		}
	}

	// 3. sky dark cracks: per-channel closing along both axes; fill what either closing fills
	const cl = new Float32Array(n), cv = new Float32Array(n);
	let filled = 0;
	for (const a of ch) {
		hMax(a, w, h, K, tmp, Y1); hMin(tmp, w, h, K, cl, Y1);
		const ext = Math.min(h, Y1 + K);
		vMax(a, w, h, K, tmp, ext); vMin(tmp, w, h, K, cv, Y1);
		for (let i = 0; i < w * Y1; i++) {
			if (sky[i] === 0) continue;
			const bh = Math.max(cl[i] - a[i], cv[i] - a[i]);
			if (bh > T_CRACK) { a[i] += (bh - T_CRACK) * 0.9 * sky[i]; filled++; }
		}
	}
	console.log('sky spot px', spots, 'dark-crack px*ch', filled);

	// 4. exposure lift + midtone contrast (LUT on each channel)
	const lut = new Float32Array(256);
	for (let v = 0; v < 256; v++) {
		let o = 255 * Math.pow(v / 255, GAMMA);
		o = (o - PIVOT) * CONTRAST + PIVOT;
		lut[v] = Math.max(0, Math.min(255, o));
	}
	const buf = Buffer.alloc(n * 3);
	for (let i = 0; i < n; i++) for (let c = 0; c < 3; c++) {
		const v = Math.max(0, Math.min(255, ch[c][i]));
		const lo = Math.floor(v), f = v - lo;
		buf[i * 3 + c] = Math.round(lut[lo] * (1 - f) + lut[Math.min(255, lo + 1)] * f);
	}

	// 5. site grade
	const graded = await sharp(buf, { raw: { width: w, height: h, channels: 3 } })
		.modulate({ saturation: 0.82, brightness: 1.0 })
		.linear([0.94, 0.94, 0.94], [10, 8, 5])
		.raw().toBuffer();

	// 6. campfire: flame pixels are mixed toward #E85C33 by their redness, and a small lighter
	//    core (#FFB08A) sits at the flame's centroid so it keeps some luminance after
	//    downscaling. The reflection gets a lighter mix.
	const box = { x0: FIRE.x - 60, x1: FIRE.x + 60, y0: FIRE.y - 60, y1: FIRE.y + 130 };
	let sx = 0, sy = 0, sw = 0;
	for (let y = box.y0; y < FIRE.y + 30; y++) for (let x = box.x0; x < box.x1; x++) {
		const i = (y * w + x) * 3;
		const red = graded[i] - Math.max(graded[i + 1], graded[i + 2]);
		if (red > 90) { sx += x * red; sy += y * red; sw += red; }
	}
	const cx = sx / sw, cy = sy / sw;
	for (let y = box.y0; y < box.y1; y++) for (let x = box.x0; x < box.x1; x++) {
		const i = (y * w + x) * 3;
		const px = [graded[i], graded[i + 1], graded[i + 2]];
		const red = px[0] - Math.max(px[1], px[2]);
		if (red < 40) continue;
		const flame = y < FIRE.y + 30;
		const s = smooth(40, 140, red) * (flame ? 1 : 0.6);
		let o = px.map((v, c) => v + (ACCENT[c] - v) * s);
		if (flame) {
			const d = Math.hypot(x - cx, (y - cy) * 1.15);
			const k = 0.8 * smooth(9, 2.5, d);
			o = o.map((v, c) => v * (1 - k) + HOT[c] * k);
		}
		for (let c = 0; c < 3; c++) graded[i + c] = Math.max(0, Math.min(255, Math.round(o[c])));
	}
	console.log('flame centroid', cx.toFixed(1), cy.toFixed(1));

	// 7. grain, same as prep-art.cjs
	const grain = await sharp({ create: { width: w, height: h, channels: 1, noise: { type: 'gaussian', mean: 128, sigma: 10 } } }).png().toBuffer();
	await sharp(graded, { raw: { width: w, height: h, channels: 3 } })
		.composite([{ input: grain, blend: 'overlay' }])
		.jpeg({ quality: 93, mozjpeg: true, chromaSubsampling: '4:4:4' })
		.toFile(out);
	console.log('wrote', out, w + 'x' + h, Math.round(fs.statSync(out).size / 1024) + 'KB');
})();
