import fs from 'node:fs';
import path from 'node:path';

/**
 * Adds srcset, sizes, dimensions and lazy loading to the hand-authored blog diagrams.
 *
 * Two node shapes have to be handled and they are not interchangeable. Astro registers
 * user rehype plugins BEFORE rehype-raw (see the parser assembly in
 * node_modules/@astrojs/markdown-remark/dist/index.js), which means:
 *   - an image written as markdown ![]() is already a hast <img> element, and arrives
 *     with only src, alt and title. No width, no height, no loading.
 *   - an image written as a literal <img> tag is still an unparsed {type: 'raw'} string
 *     and has to be rewritten textually.
 * Checked against the real pipeline: a plugin that only visits elements silently misses
 * the 23 raw tags, and one that only rewrites strings misses the other 143.
 *
 * Astro's own image handling never touches these. remark-collect-images skips any URL
 * starting with "/", so rehype-images returns early and cannot overwrite what we set.
 *
 * The raw-tag regex is safe against code: rehype-shiki runs BEFORE user rehype plugins,
 * so a fenced or inline code block containing "<img" is already a <pre>/<code> element
 * with text children by the time this walk runs, and only nodes of type 'raw' are
 * rewritten. The one shape the regex could not survive is a '>' inside an attribute
 * value; no post in the corpus has one.
 */

// Derived from the layout, not guessed. .content-column is max-width min(66ch, 100%)
// inside .wrapper (max-width 83rem, padding-inline 1.5rem), and the >=72em grid still
// hands it min(66ch, calc(100% - 32rem)), so 66ch is the ceiling at every breakpoint.
// 66ch of Inter at 17px measures 658px, which is what PSI reported for these images.
// One knowing trade: @media print sets .content-column to max-width:100% !important, so
// a printed diagram now comes from the 660w file. Accepted rather than engineered around.
const CONTENT_SIZES = '(min-width: 45em) 660px, calc(100vw - 3rem)';

const MANIFEST_PATH = path.join(process.cwd(), 'src', 'data', 'image-manifest.json');

let manifest = null;
function getManifest() {
	if (manifest) return manifest;
	try {
		manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
	} catch {
		// No manifest yet, e.g. a fresh clone before `npm run img:variants`. Degrade to
		// today's markup rather than emitting srcset entries that would 404, because a
		// failed srcset candidate does not fall back to src - the image just breaks.
		manifest = {};
	}
	return manifest;
}

function buildSrcset(src, entry) {
	// An entry without real dimensions would serialise as "... undefinedw", which is a
	// malformed srcset: the browser breaks the image instead of falling back to src.
	// Degrade to today's markup instead.
	if (!entry || !entry.w || !Array.isArray(entry.v) || !entry.v.length) return null;
	const stem = src.replace(/\.webp$/, '');
	return [...entry.v.map((w) => `${stem}-${w}w.webp ${w}w`), `${src} ${entry.w}w`].join(', ');
}

function decorateElement(node, m) {
	const props = node.properties || (node.properties = {});
	const src = typeof props.src === 'string' ? props.src : '';
	const entry = m[src];
	if (!entry || props.srcSet) return;

	const srcset = buildSrcset(src, entry);
	if (srcset) {
		props.srcSet = srcset;
		props.sizes = CONTENT_SIZES;
	}
	// These arrive with no dimensions at all, which is both a layout-shift risk and the
	// reason 143 diagrams (8.0 MB across the corpus, 379 KiB on the worst post) loaded
	// eagerly. The hero above them is the LCP element and is already eager with
	// fetchpriority=high, so nothing in the content column should compete with it.
	if (props.width == null && entry.w) props.width = entry.w;
	if (props.height == null && entry.h) props.height = entry.h;
	if (props.loading == null) props.loading = 'lazy';
	if (props.decoding == null) props.decoding = 'async';
}

const IMG_TAG = /<img\b([^>]*?)(\s*\/?)>/gi;

function decorateRaw(value, m) {
	return value.replace(IMG_TAG, (tag, attrs, close) => {
		if (/\bsrcset=/i.test(attrs)) return tag;
		const src = attrs.match(/\bsrc="([^"]+)"/i)?.[1];
		const entry = src && m[src];
		if (!entry) return tag;
		const srcset = buildSrcset(src, entry);
		if (!srcset) return tag;
		return `<img${attrs} srcset="${srcset}" sizes="${CONTENT_SIZES}"${close}>`;
	});
}

export default function rehypeResponsiveImages() {
	return (tree) => {
		const m = getManifest();
		// Hand-rolled walk rather than unist-util-visit: that package is only a transitive
		// dependency here, and visit does not descend into raw nodes any more usefully.
		const walk = (node) => {
			if (node.type === 'element' && node.tagName === 'img') decorateElement(node, m);
			else if (node.type === 'raw' && node.value.includes('<img')) node.value = decorateRaw(node.value, m);
			if (node.children) node.children.forEach(walk);
		};
		walk(tree);
	};
}
