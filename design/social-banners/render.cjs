// Render a banner HTML file to upload-ready images + review previews.
// Usage: node design/social-banners/render.cjs <banner.html> <x|li> [outDir]
//
// Serves the repo root on 127.0.0.1 so the HTML can use root-relative URLs
// (/design/social-banners/brand.css, /design/social-banners/art/*.jpg,
//  /public/assets/..., /public/logo-strand.svg). Renders at 2x, downsamples
// with Mitchell to the exact platform size, then writes:
//   <name>.png / <name>.jpg        upload files (1500x500 for x, 1584x396 for li)
//   <name>@2x.png                  2x master
//   <name>-overlay.png             safe-zone guides: avatar circles (desktop solid,
//                                   mobile dashed), mobile crop bounds, X top/bottom crop band
//   <name>-desktop.png             in-situ mock at real desktop display size with the real avatar
//   <name>-mobile.png              in-situ mock at phone display size with the real avatar
const fs = require('fs');
const path = require('path');
const http = require('http');
const sharp = require('sharp');
const { chromium } = require(path.resolve(__dirname, '..', '..', 'node_modules', 'playwright'));

const REPO = path.resolve(__dirname, '..', '..');
const SPEC = {
	x: {
		w: 1500, h: 500,
		// X web desktop: header 600x200, avatar outer 141.5px, left 16, top 110 (margin-top -15% of column).
		desktop: { dw: 600, avatar: { left: 16, top: 110, d: 141.5 } },
		// X mobile web/app at 390 wide: header 390x130, avatar outer ~97.5, left 16, top 71.5.
		mobile: { dw: 390, crop: null, avatar: { left: 16, top: 71.5, d: 97.5 } },
		cropBand: 60, // some displays crop ~60px top and bottom
	},
	li: {
		w: 1584, h: 396,
		// LinkedIn desktop: banner in the ~804px main column (804x201), photo outer 160px, left 24, top 89.
		desktop: { dw: 804, avatar: { left: 24, top: 89, d: 160 } },
		// LinkedIn app: sides cropped ~14% each (visible ~1128x376), shown ~390x130, photo ~96px, left 16, top 66. Approximate.
		mobile: { dw: 390, crop: { x: 228, y: 10, w: 1128, h: 376 }, avatar: { left: 16, top: 66, d: 96 } },
		cropBand: 0,
	},
};

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };

function serve() {
	return new Promise((resolve) => {
		const srv = http.createServer((req, res) => {
			const p = path.join(REPO, decodeURIComponent(req.url.split('?')[0]));
			if (!p.startsWith(REPO) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
			res.writeHead(200, { 'Content-Type': MIME[path.extname(p).toLowerCase()] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
			fs.createReadStream(p).pipe(res);
		});
		srv.listen(0, '127.0.0.1', () => resolve(srv));
	});
}

function avatarRectInBanner(spec, which) {
	// Map a display-space avatar box back into banner pixel space.
	const v = spec[which];
	const crop = v.crop || { x: 0, y: 0, w: spec.w, h: spec.h };
	const s = crop.w / v.dw;
	return { cx: crop.x + (v.avatar.left + v.avatar.d / 2) * s, cy: crop.y + (v.avatar.top + v.avatar.d / 2) * s, r: (v.avatar.d / 2) * s };
}

async function overlay(png, spec) {
	const { w, h } = spec;
	const a = avatarRectInBanner(spec, 'desktop');
	const m = avatarRectInBanner(spec, 'mobile');
	const c = spec.mobile.crop;
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
		${spec.cropBand ? `<rect x="0" y="0" width="${w}" height="${spec.cropBand}" fill="rgba(0,120,255,0.18)"/><rect x="0" y="${h - spec.cropBand}" width="${w}" height="${spec.cropBand}" fill="rgba(0,120,255,0.18)"/>` : ''}
		${c ? `<rect x="0" y="0" width="${c.x}" height="${h}" fill="rgba(0,120,255,0.18)"/><rect x="${c.x + c.w}" y="0" width="${w - c.x - c.w}" height="${h}" fill="rgba(0,120,255,0.18)"/><rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" fill="none" stroke="rgb(0,120,255)" stroke-width="3" stroke-dasharray="14 8"/>` : ''}
		<circle cx="${a.cx}" cy="${a.cy}" r="${a.r}" fill="rgba(255,0,80,0.28)" stroke="rgb(255,0,80)" stroke-width="4"/>
		<circle cx="${m.cx}" cy="${m.cy}" r="${m.r}" fill="none" stroke="rgb(255,0,80)" stroke-width="4" stroke-dasharray="16 10"/>
		<text x="${w - 16}" y="${h - 16}" font-family="Arial" font-size="22" fill="rgb(0,90,200)" text-anchor="end">pink solid = desktop avatar, pink dashed = mobile avatar, blue = may be cropped</text>
	</svg>`;
	return sharp(png).composite([{ input: Buffer.from(svg) }]).png().toBuffer();
}

async function roundAvatar(d) {
	const px = Math.round(d * 2);
	const border = Math.max(3, Math.round(px * 0.03));
	const inner = px - border * 2;
	const img = await sharp(path.join(REPO, 'public/assets/avatar-crop.jpg')).resize(inner, inner).toBuffer();
	const mask = Buffer.from(`<svg width="${inner}" height="${inner}"><circle cx="${inner / 2}" cy="${inner / 2}" r="${inner / 2}"/></svg>`);
	const round = await sharp(img).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
	const ring = Buffer.from(`<svg width="${px}" height="${px}"><circle cx="${px / 2}" cy="${px / 2}" r="${px / 2}" fill="#ffffff"/></svg>`);
	return sharp(ring).composite([{ input: round, left: border, top: border }]).png().toBuffer();
}

async function mock(png, spec, which) {
	// Everything at 2x of display size so the preview is crisp to inspect.
	const v = spec[which];
	const crop = v.crop || { x: 0, y: 0, w: spec.w, h: spec.h };
	const dh = Math.round((crop.h / crop.w) * v.dw);
	const S = 2;
	const banner = await sharp(png).extract({ left: crop.x, top: crop.y, width: crop.w, height: crop.h }).resize(v.dw * S, dh * S, { kernel: 'lanczos3' }).toBuffer();
	const av = await roundAvatar(v.avatar.d);
	const nameY = Math.round((v.avatar.top + v.avatar.d) * S) + 34 * S;
	const H = nameY + 40 * S;
	const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${v.dw * S}" height="${H}">
		<text x="${16 * S}" y="${nameY}" font-family="Segoe UI, Arial" font-weight="700" font-size="${20 * S}" fill="#0f1419">Swapnil Biswas</text>
		<text x="${16 * S}" y="${nameY + 24 * S}" font-family="Segoe UI, Arial" font-size="${15 * S}" fill="#536471">${which === 'desktop' ? 'desktop preview' : 'phone preview'} at ${v.dw}px wide</text>
	</svg>`);
	return sharp({ create: { width: v.dw * S, height: H, channels: 3, background: '#ffffff' } })
		.composite([
			{ input: banner, left: 0, top: 0 },
			{ input: av, left: Math.round(v.avatar.left * S), top: Math.round(v.avatar.top * S) },
			{ input: text, left: 0, top: 0 },
		]).png().toBuffer();
}

(async () => {
	const [, , htmlArg, platform, outArg] = process.argv;
	const spec = SPEC[platform];
	if (!htmlArg || !spec) { console.error('usage: node render.cjs <banner.html> <x|li> [outDir]'); process.exit(1); }
	const htmlAbs = path.resolve(htmlArg);
	if (!htmlAbs.startsWith(REPO)) { console.error('banner HTML must live inside the repo'); process.exit(1); }
	const outDir = path.resolve(outArg || path.dirname(htmlAbs));
	fs.mkdirSync(outDir, { recursive: true });
	const name = path.basename(htmlAbs, '.html');

	const srv = await serve();
	const url = `http://127.0.0.1:${srv.address().port}/` + path.relative(REPO, htmlAbs).split(path.sep).join('/');
	// --disable-lcd-text: Windows otherwise bakes ClearType subpixel fringes into small text.
	const browser = await chromium.launch({ args: ['--disable-lcd-text'] });
	const page = await browser.newPage({ viewport: { width: spec.w, height: spec.h }, deviceScaleFactor: 2 });
	const failed = [];
	page.on('requestfailed', (r) => failed.push(r.url()));
	page.on('response', (r) => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url()); });
	page.on('console', (m) => { if (m.type() === 'error') console.log('console error:', m.text()); });
	await page.goto(url, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	await page.waitForTimeout(400);
	const fonts = await page.evaluate(() => [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.style}: ${f.status}`));
	const overflow = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, sh: document.documentElement.scrollHeight }));
	const shot2x = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: spec.w, height: spec.h } });
	await browser.close();
	srv.close();

	// mitchell, not lanczos3: lanczos rings a bright halo around dark glyphs on paper.
	const png1x = await sharp(shot2x).resize(spec.w, spec.h, { kernel: 'mitchell' }).png().toBuffer();
	fs.writeFileSync(path.join(outDir, `${name}@2x.png`), shot2x);
	fs.writeFileSync(path.join(outDir, `${name}.png`), await sharp(png1x).png({ compressionLevel: 9 }).toBuffer());
	fs.writeFileSync(path.join(outDir, `${name}.jpg`), await sharp(png1x).jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer());
	fs.writeFileSync(path.join(outDir, `${name}-overlay.png`), await overlay(png1x, spec));
	fs.writeFileSync(path.join(outDir, `${name}-desktop.png`), await mock(png1x, spec, 'desktop'));
	fs.writeFileSync(path.join(outDir, `${name}-mobile.png`), await mock(png1x, spec, 'mobile'));

	console.log('fonts:', fonts.join(' | ') || 'none declared');
	if (overflow.sw > spec.w || overflow.sh > spec.h) console.log(`WARN page overflows the ${spec.w}x${spec.h} frame: ${overflow.sw}x${overflow.sh}`);
	if (failed.length) console.log('WARN failed requests:', failed.join(', '));
	const kb = (f) => Math.round(fs.statSync(path.join(outDir, f)).size / 1024) + 'KB';
	console.log(`wrote ${outDir}\\${name}{.png ${kb(name + '.png')}, .jpg ${kb(name + '.jpg')}, @2x.png, -overlay.png, -desktop.png, -mobile.png}`);
})();
