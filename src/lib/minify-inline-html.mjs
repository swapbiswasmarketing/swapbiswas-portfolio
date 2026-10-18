// Post-build pass over dist/**/*.html (wired up as the minify-inline-html integration in
// astro.config.mjs). It does two things Astro does not do on its own:
//  1. `<script is:inline>` bodies are emitted verbatim, comments and indentation
//     included, because Vite never sees them. They are minified here with esbuild,
//     whitespace and comments only, with no identifier mangling, so every global the
//     scripts define or read (window.__tagBoot, gtag, dataLayer...) keeps its name.
//     esbuild's printer still makes a few semantics-preserving rewrites even in this
//     mode: it folds adjacent string literals ('a' + 'b' -> 'ab'), prints {x: x} as
//     {x}, reprints numbers (0.16 -> .16, 1000 -> 1e3) and normalises quotes. Two
//     rewrites are NOT safe in an HTML page, so a body that gets one ships as authored:
//     a fold that re-joins a split '<!-' + '-' or '<scr' + 'ipt' (the tokenizer would
//     swallow the markup after the script), and the Annex B lowering of a sloppy-mode
//     block function (`{ function f(){} }` -> `let f2=function(){}; var f=f2`), whose
//     explicit var can collide with a global let/const from another classic script.
//  2. `<!-- -->` comments in .astro markup ship to every visitor. They are stripped,
//     except IE conditional comments.
// One left-to-right scan, like the HTML tokenizer: whichever of a comment or a
// script/style/textarea/pre block opens first wins, so a comment that mentions <pre>
// never opens a block, and a block body is never scanned for comments. JSON-LD and
// other non-JS script types are left exactly as authored.
//
// Why bother: on a blog post the comments and whitespace were ~6.7 KB of a ~46 KB
// brotli document. Lighthouse's simulated mobile network (initcwnd 10, 150ms RTT)
// fits ~43.8 KB in two TCP windows, so trimming them takes one round trip (~150ms)
// off simulated FCP and LCP on posts that cross that line.
//
// If Astro's built-in CSP (which hashes inline scripts while rendering) is ever turned
// on, this pass changes the hashed bytes afterwards: recompute the hashes or every
// inline script is blocked.
import { transformSync } from 'esbuild';

const TOKEN_RE = /<!--(?:-?>|[\s\S]*?-->)|<(script|style|textarea|pre)(?=[\s>/])([^>]*)>([\s\S]*?)<\/\1\s*>/gi;
const HTML_TOKENS = /<\/script|<!--|<script/i;
const ANNEX_B = /\bvar (\w+)=\1\d+[;,}]/;

function isExecutableInline(attrs) {
	if (/(?:^|\s)src\s*=/i.test(attrs)) return false;
	const type = attrs.match(/(?:^|\s)type\s*=\s*["']?([^"'\s>]+)/i);
	return !type || /^(text\/javascript|module)$/i.test(type[1]);
}

// Every page repeats the same handful of layout scripts, so memoise by source text.
const cache = new Map();
// Script occurrences shipped as authored (unparseable, not smaller, or an unsafe rewrite).
export const stats = { unminified: 0 };

function minifyJs(code, isModule) {
	const key = (isModule ? 'm:' : 'c:') + code;
	if (!cache.has(key)) cache.set(key, minifyJsUncached(code, isModule));
	return cache.get(key);
}

function minifyJsUncached(code, isModule) {
	let out;
	try {
		out = transformSync(code, {
			loader: 'js',
			format: isModule ? 'esm' : undefined,
			// minifySyntax would also drop function-expression names
			// (window.gtag = function gtag(){} -> function(){}), rewrite typeof checks and
			// fold constants. Whitespace and comments are ~99% of the saving.
			minifyWhitespace: true,
			// Keeps any future /*! */, @license or @preserve header. There are none today.
			legalComments: 'inline',
			charset: 'utf8',
		}).code.trim();
	} catch {
		return code; // unparseable: ship it as authored
	}
	if (out.length >= code.length) return code;
	if (HTML_TOKENS.test(out) && !HTML_TOKENS.test(code)) return code;
	if (ANNEX_B.test(out) && !ANNEX_B.test(code)) return code;
	return out;
}

export function minifyInlineHtml(html) {
	return html.replace(TOKEN_RE, (whole, tag, attrs, body) => {
		if (!tag) return whole.startsWith('<!--[if') ? whole : '';
		if (tag.toLowerCase() !== 'script' || !body.trim() || !isExecutableInline(attrs)) return whole;
		const isModule = /(?:^|\s)type\s*=\s*["']?module/i.test(attrs);
		const min = minifyJs(body, isModule);
		if (min === body) {
			stats.unminified++;
			return whole;
		}
		return `<script${attrs}>${min}</script>`;
	});
}
