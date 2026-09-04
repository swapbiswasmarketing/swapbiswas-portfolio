#!/usr/bin/env node
/**
 * Emits downscaled WebP siblings for the hand-authored blog diagrams, and writes a
 * manifest of their real intrinsic sizes for the rehype plugin to read.
 *
 * Why: every diagram under public/assets/blog/ is authored at 1200px or 1800px wide,
 * but .content-column caps the article body at 66ch (measured 658px), so a DPR-1
 * desktop downloads two to three times the pixels it paints. Measured on two of the
 * largest diagrams, a 660px WebP is about 65% smaller than the file served today
 * (durability-scorecard.webp: 57.9 KiB -> 20.3 KiB; segment-score.webp: 49.3 -> 17.4).
 *
 * The manifest also carries width and height, which the rehype plugin needs for a
 * second reason: an image written with markdown ![]() syntax reaches the HTML with
 * only src, alt and title, so 143 diagrams across 115 posts were unsized and eagerly
 * loaded - a layout-shift risk on every one of them.
 *
 * Idempotent, and staleness is decided by a content hash rather than by whether the
 * variant file exists. That distinction matters: redrawing a diagram in place used to
 * leave the PREVIOUS drawing on disk as its -660w sibling while the manifest recorded
 * the new source's dimensions, so every DPR-1 reader was served the old image squashed
 * into the new aspect ratio, and only a retina screen (which picks the full-size
 * original) showed the redraw. mtime cannot stand in for the hash - a fresh CI checkout
 * stamps every file with the same time.
 *
 * A repeat run with nothing changed only hashes and reads headers, about a second.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SRC_DIR = path.join(PUBLIC_DIR, 'assets', 'blog');
const MANIFEST = path.join(process.cwd(), 'src', 'data', 'image-manifest.json');

// 660 is the DPR-1 slot (66ch = 658px). 1320 is the DPR-2 slot. Quality 82 matches the
// OG card encoder and keeps thin diagram type legible.
// minSource is the smallest source a rung is worth emitting for: a 1320w copy of a
// 1200w original is just a second full-size file on disk.
const RUNGS = [
	{ width: 660, minSource: 740 },
	{ width: 1320, minSource: 1400 },
];
const QUALITY = 82;

const VARIANT_RE = /-\d+w\.webp$/;

function walk(dir, out = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else if (entry.name.endsWith('.webp') && !VARIANT_RE.test(entry.name)) out.push(full);
	}
	return out;
}

if (fs.existsSync(SRC_DIR)) {
	// The previous run's manifest carries the hash each variant was built from.
	let prev = {};
	try {
		prev = JSON.parse(fs.readFileSync(MANIFEST, 'utf-8'));
	} catch {
		prev = {};
	}

	const manifest = {};
	const live = new Set();
	let written = 0;
	let skipped = 0;

	for (const file of walk(SRC_DIR)) {
		const bytes = fs.readFileSync(file);
		const { width, height } = await sharp(bytes).metadata();
		// A header we cannot read must not reach the manifest: the rehype plugin would
		// build a srcset ending in "undefinedw", which is malformed and breaks the image
		// outright rather than degrading to the original.
		if (!width || !height) {
			console.warn(`image variants: skipping ${file}, no readable dimensions`);
			skipped++;
			continue;
		}

		const url = '/' + path.relative(PUBLIC_DIR, file).split(path.sep).join('/');
		const hash = crypto.createHash('sha1').update(bytes).digest('hex').slice(0, 16);
		const stale = prev[url]?.hash !== hash;
		const variants = [];

		for (const rung of RUNGS) {
			if (width < rung.minSource) continue;
			const out = file.replace(/\.webp$/, `-${rung.width}w.webp`);
			// Rebuild when the variant is missing OR the source changed since the run that
			// produced it. existsSync alone would keep the previous drawing on disk while
			// the manifest advertised the new one's dimensions.
			if (stale || !fs.existsSync(out)) {
				await sharp(bytes).resize({ width: rung.width }).webp({ quality: QUALITY, effort: 5 }).toFile(out);
				written++;
			}
			variants.push(rung.width);
			live.add(out);
		}

		manifest[url] = { w: width, h: height, v: variants, hash };
	}

	// Drop variants whose source was deleted or shrank below a rung's minSource. Nothing
	// references them and they would otherwise be mistaken for current output.
	let removed = 0;
	(function sweep(dir) {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) sweep(full);
			else if (VARIANT_RE.test(entry.name) && !live.has(full)) {
				fs.unlinkSync(full);
				removed++;
			}
		}
	})(SRC_DIR);

	fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
	fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, '\t') + '\n');
	console.log(
		`image variants: ${written} written, ${removed} removed, ${skipped} skipped, ` +
			`${Object.keys(manifest).length} sources in manifest`
	);
}
