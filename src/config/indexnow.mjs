/**
 * Central IndexNow configuration - the one place the key and endpoint live.
 *
 * THE KEY BELOW IS PUBLIC BY DESIGN. DO NOT MOVE IT TO AN ENVIRONMENT VARIABLE.
 * IndexNow has no shared secret and no account. Ownership is proven by serving the
 * key back from the site's own origin: a submission carries `key` and `keyLocation`,
 * and the search engine fetches that URL and checks the file contains the same string.
 * Anyone can read https://swapbiswas.com/<key>.txt, and that is the mechanism working,
 * not a leak. The only thing the key authorises is "ask Bing to recrawl a swapbiswas.com
 * URL", which is also all a stranger could do with it. Hiding it in an env var would
 * break the protocol, because public/ is how the file gets served in the first place.
 *
 * The matching file is public/186c7bd9a60eb4e362935792942b0001.txt. Astro copies
 * public/ to dist/ verbatim, so the file ships at the origin root. Changing the key
 * means renaming that file and editing INDEXNOW_KEY in the same commit - they are a
 * pair, and verifyKeyFile() in src/lib/indexnow.mjs fails loudly if they drift.
 *
 * The file has NO trailing newline. The spec says the file contains the key; Bing
 * tolerates a trailing newline in practice, but an exact-bytes file removes the
 * question entirely, and the test suite asserts the exact length.
 */

/**
 * The key. 32 hex characters, well inside the spec's 8-128 range.
 * Must equal the basename of the .txt file in public/.
 */
export const INDEXNOW_KEY = '186c7bd9a60eb4e362935792942b0001';

/** Bare hostname, no scheme. This is the `host` field of the payload. */
export const HOST = 'swapbiswas.com';

/** Origin used to build the key location and to sanity-check every submitted URL. */
export const SITE_ORIGIN = 'https://swapbiswas.com';

/**
 * Where the engine will look for the key file.
 *
 * Deliberately at the origin root rather than a subdirectory: a key served from a
 * subdirectory is only trusted for URLs under that subdirectory, which would silently
 * scope submissions to part of the site.
 */
export const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;

/**
 * The shared endpoint, which forwards to every participating engine (Bing, Yandex,
 * Seznam, Naver). Submitting to https://www.bing.com/indexnow instead would reach
 * Bing only. Google does not participate in IndexNow at all - this integration does
 * nothing for Google, and the sitemap remains the only signal there.
 */
export const ENDPOINT = 'https://api.indexnow.org/indexnow';

/** Protocol cap on a single JSON submission. Larger sets are chunked. */
export const MAX_URLS_PER_REQUEST = 10000;

/**
 * How far back a lastmod can be and still count as "new or edited".
 *
 * This window IS the change-detection mechanism, and it is deliberate. The obvious
 * alternative - keep a state file of what was already submitted - does not survive
 * the place this actually runs: Vercel builds in a fresh container from a clean git
 * checkout, so a state file written during build #1 does not exist during build #2.
 * Committing it back would need a bot push on every deploy. Reading git history is
 * no better, because Vercel's clone is shallow.
 *
 * lastmod is already the right signal and it is already correct: the sitemap-lastmod
 * hook derives it from each post's updatedDate, falling back to publishDate, so
 * editing a post and bumping updatedDate is exactly what moves a URL into this window.
 * Re-announcing an unchanged URL for a few consecutive deploys is harmless - IndexNow
 * is explicitly idempotent and the engines dedupe - whereas missing an edit is not.
 */
export const FRESH_WINDOW_DAYS = 7;

/** Spec-allowed key charset and length. Used to reject a typo before any network call. */
export const KEY_PATTERN = /^[a-zA-Z0-9-]{8,128}$/;

/**
 * Per-request timeout. The build must not hang on a slow endpoint: this is a
 * best-effort notification, so a timeout is logged and the build still succeeds.
 */
export const REQUEST_TIMEOUT_MS = 15000;

/**
 * Sitemap file the URL list is read from, relative to the build output directory.
 * The indexnow-submit hook runs after sitemap-lastmod has injected <lastmod>, so by
 * the time this is read every blog URL carries a date.
 */
export const SITEMAP_FILE = 'sitemap-0.xml';
