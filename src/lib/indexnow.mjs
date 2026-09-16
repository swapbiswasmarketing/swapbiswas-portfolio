/**
 * IndexNow: pick the URLs a deploy changed, prove ownership, announce them.
 *
 * Every function here is pure or takes its effects as arguments (`fetchImpl`, `now`,
 * `env`), which is what lets scripts/test-indexnow.mjs cover the whole module with no
 * network and no clock. Nothing in this file reads process.env or calls fetch on its
 * own - the callers (the astro.config.mjs hook and scripts/indexnow.mjs) inject both.
 *
 * Order of operations for a production deploy:
 *   1. resolveDeployContext() - is this a production deploy at all?
 *   2. parseSitemapEntries()  - read dist/sitemap-0.xml
 *   3. selectFreshUrls()      - keep URLs whose lastmod is inside the window
 *   4. verifyKeyFile()        - is the origin already serving the key?
 *   5. submitUrls()           - chunk, POST, classify
 *
 * Step 4 is the one that looks redundant and is not. See verifyKeyFile().
 */

import {
	ENDPOINT,
	HOST,
	INDEXNOW_KEY,
	KEY_LOCATION,
	KEY_PATTERN,
	MAX_URLS_PER_REQUEST,
	REQUEST_TIMEOUT_MS,
	SITE_ORIGIN,
} from '../config/indexnow.mjs';

// ---------------------------------------------------------------- key

/**
 * @param {unknown} key
 * @returns {boolean} true if `key` is a syntactically valid IndexNow key.
 */
export function isValidKey(key) {
	return typeof key === 'string' && KEY_PATTERN.test(key);
}

/**
 * The public path the key file must be served at, derived from the key itself so the
 * two can never be edited apart.
 *
 * @param {string} key
 * @returns {string} e.g. "/abc123.txt"
 */
export function keyFilePath(key) {
	return `/${key}.txt`;
}

// ---------------------------------------------------------------- deploy gate

/**
 * Decide whether this build should announce anything.
 *
 * Returns a reason string in both directions so the build log always says WHY it did
 * or did not submit - a silent skip is indistinguishable from a broken integration.
 *
 * INDEXNOW_FORCE=1 exists for testing the real path from a local machine. It is
 * checked before the Vercel gate but after the kill switch, so DISABLE always wins.
 *
 * @param {Record<string, string | undefined>} env
 * @returns {{ shouldSubmit: boolean, reason: string }}
 */
export function resolveDeployContext(env) {
	const e = env || {};
	if (e.INDEXNOW_DISABLE === '1') {
		return { shouldSubmit: false, reason: 'kill switch set (INDEXNOW_DISABLE=1)' };
	}
	if (e.INDEXNOW_FORCE === '1') {
		return { shouldSubmit: true, reason: 'forced (INDEXNOW_FORCE=1)' };
	}
	const onVercel = e.VERCEL === '1' || typeof e.VERCEL_ENV === 'string';
	if (!onVercel) {
		return { shouldSubmit: false, reason: 'not a production deploy (local build)' };
	}
	if (e.VERCEL_ENV !== 'production') {
		return {
			shouldSubmit: false,
			reason: `not a production deploy (VERCEL_ENV=${e.VERCEL_ENV || 'unset'})`,
		};
	}
	return { shouldSubmit: true, reason: 'production deploy (VERCEL_ENV=production)' };
}

// ---------------------------------------------------------------- sitemap

/**
 * Pull <loc>/<lastmod> pairs out of a sitemap.
 *
 * A regex rather than an XML parser on purpose: the input is not arbitrary XML, it is
 * a file this repo generated 40 lines earlier in the same build, and adding a parser
 * dependency for it would be the only dependency this feature needs. Entries with no
 * <lastmod> are returned with lastmod null rather than dropped, so callers can tell
 * "no date" apart from "old date".
 *
 * @param {string} xml
 * @returns {Array<{ loc: string, lastmod: string | null }>}
 */
export function parseSitemapEntries(xml) {
	if (typeof xml !== 'string' || xml.length === 0) return [];
	const entries = [];
	const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
	for (const block of urlBlocks) {
		const loc = block.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
		if (!loc) continue;
		const lastmod = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]?.trim() || null;
		entries.push({ loc, lastmod });
	}
	return entries;
}

/**
 * Whole days between two instants, floored. Both arguments are Dates so the caller
 * owns the clock and the tests can pin it.
 *
 * @param {Date} then
 * @param {Date} now
 * @returns {number} negative if `then` is in the future
 */
export function daysBetween(then, now) {
	return Math.floor((now.getTime() - then.getTime()) / 86400000);
}

/**
 * The URLs a deploy should announce: those whose lastmod falls inside the window.
 *
 * A lastmod in the FUTURE counts as fresh. Posts are occasionally dated a day ahead
 * to schedule them, and treating that as stale would mean the one post most likely to
 * need announcing is the one silently skipped.
 *
 * Entries with no lastmod are skipped. Those are the static pages (/about/, /contact/)
 * that the sitemap-lastmod hook leaves alone because they have no frontmatter date -
 * they change rarely, and without a date there is no way to tell a changed one from
 * the other 140, so announcing all of them on every deploy would be noise.
 *
 * @param {Array<{ loc: string, lastmod: string | null }>} entries
 * @param {Date} now
 * @param {number} windowDays
 * @returns {string[]} URLs, in sitemap order, deduped
 */
export function selectFreshUrls(entries, now, windowDays) {
	// A non-finite window is rejected rather than tolerated. `age > NaN` is ALWAYS false,
	// so a NaN window silently selects every dated URL instead of none - which turns a
	// typo like `--days abc` into "announce the whole site". Failing loudly is the only
	// safe reading, because the quiet one is the destructive one.
	if (!Number.isFinite(windowDays) || windowDays < 0) {
		throw new TypeError(`windowDays must be a non-negative finite number, got ${windowDays}`);
	}
	const seen = new Set();
	const fresh = [];
	for (const entry of entries || []) {
		if (!entry || !entry.lastmod) continue;
		const parsed = new Date(entry.lastmod);
		if (Number.isNaN(parsed.getTime())) continue;
		const age = daysBetween(parsed, now);
		if (age > windowDays) continue;
		if (seen.has(entry.loc)) continue;
		seen.add(entry.loc);
		fresh.push(entry.loc);
	}
	return fresh;
}

// ---------------------------------------------------------------- payload

/**
 * Split a URL list into submission-sized batches.
 *
 * @param {string[]} urls
 * @param {number} size
 * @returns {string[][]} [] for an empty input, never [[]]
 */
export function chunkUrls(urls, size) {
	const limit = Math.max(1, Math.floor(size) || 1);
	const out = [];
	for (let i = 0; i < (urls || []).length; i += limit) {
		out.push(urls.slice(i, i + limit));
	}
	return out;
}

/**
 * Keep only URLs that actually belong to this origin.
 *
 * The endpoint answers 422 for a payload mixing hosts and rejects the WHOLE batch, so
 * one stray absolute URL would lose every real one alongside it. Filtering here turns
 * that into a logged drop.
 *
 * @param {string[]} urls
 * @param {string} origin
 * @returns {{ kept: string[], dropped: string[] }}
 */
export function filterUrlsForOrigin(urls, origin) {
	const kept = [];
	const dropped = [];
	for (const url of urls || []) {
		let ok = false;
		try {
			ok = new URL(url).origin === new URL(origin).origin;
		} catch {
			ok = false;
		}
		(ok ? kept : dropped).push(url);
	}
	return { kept, dropped };
}

/**
 * Build one IndexNow submission body.
 *
 * @param {{ host: string, key: string, keyLocation: string, urls: string[] }} input
 * @returns {{ host: string, key: string, keyLocation: string, urlList: string[] }}
 */
export function buildPayload({ host, key, keyLocation, urls }) {
	return { host, key, keyLocation, urlList: [...(urls || [])] };
}

/**
 * Reject a payload the endpoint would reject, before spending a request on it.
 *
 * @param {{ host?: string, key?: string, keyLocation?: string, urlList?: string[] }} payload
 * @returns {{ ok: boolean, errors: string[] }}
 */
export function validatePayload(payload) {
	const errors = [];
	const p = payload || {};
	if (!p.host) errors.push('host is empty');
	if (!isValidKey(p.key)) errors.push('key is not 8-128 chars of [a-zA-Z0-9-]');
	if (!p.keyLocation) errors.push('keyLocation is empty');
	else if (p.key && !p.keyLocation.endsWith(keyFilePath(p.key))) {
		errors.push('keyLocation does not point at the key file for this key');
	}
	const urls = Array.isArray(p.urlList) ? p.urlList : null;
	if (!urls) errors.push('urlList is not an array');
	else if (urls.length === 0) errors.push('urlList is empty');
	else if (urls.length > MAX_URLS_PER_REQUEST) {
		errors.push(`urlList has ${urls.length} URLs, over the ${MAX_URLS_PER_REQUEST} cap`);
	}
	return { ok: errors.length === 0, errors };
}

// ---------------------------------------------------------------- responses

/**
 * Turn an HTTP status into a decision.
 *
 * 202 is a SUCCESS, not a pending failure: it means the URLs were accepted and the key
 * is still being validated. Treating it as an error would make every first submission
 * after a key change look broken.
 *
 * @param {number} status
 * @returns {{ ok: boolean, retryable: boolean, message: string }}
 */
export function classifyResponse(status) {
	switch (status) {
		case 200:
			return { ok: true, retryable: false, message: 'accepted' };
		case 202:
			return { ok: true, retryable: false, message: 'accepted, key validation pending' };
		case 400:
			return { ok: false, retryable: false, message: 'bad request - malformed payload' };
		case 403:
			return { ok: false, retryable: false, message: 'forbidden - key file not valid for this host' };
		case 422:
			return { ok: false, retryable: false, message: 'unprocessable - URLs do not match the host, or key mismatch' };
		case 429:
			return { ok: false, retryable: true, message: 'rate limited - too many requests' };
		default:
			if (status >= 500) return { ok: false, retryable: true, message: `server error (${status})` };
			return { ok: false, retryable: false, message: `unexpected status ${status}` };
	}
}

// ---------------------------------------------------------------- network

/**
 * fetch with a timeout, so a hung endpoint cannot hang a deploy.
 *
 * @param {Function} fetchImpl
 * @param {string} url
 * @param {object} options
 * @param {number} timeoutMs
 * @returns {Promise<any>}
 */
async function fetchWithTimeout(fetchImpl, url, options, timeoutMs) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), timeoutMs);
	try {
		return await fetchImpl(url, { ...options, signal: controller.signal });
	} finally {
		clearTimeout(timer);
	}
}

/**
 * Confirm the origin is already serving the key file, and that it contains this key.
 *
 * THIS IS WHY THE FIRST PRODUCTION DEPLOY SKIPS, AND THAT IS CORRECT.
 * The build hook runs DURING the build, before Vercel promotes the new deployment to
 * the production domain. On the deploy that first adds the key file, the file exists in
 * dist/ but swapbiswas.com is still serving the PREVIOUS deployment, which has no key
 * file - so this returns 404 and the hook skips with "not serving the key yet".
 * Submitting anyway would hand the engine a keyLocation that 404s, and the whole batch
 * would come back 403. The next deploy finds the key live and submits normally.
 *
 * @param {{ origin?: string, key?: string, fetchImpl: Function, timeoutMs?: number }} input
 * @returns {Promise<{ ok: boolean, status: number | null, message: string }>}
 */
export async function verifyKeyFile({
	origin = SITE_ORIGIN,
	key = INDEXNOW_KEY,
	fetchImpl,
	timeoutMs = REQUEST_TIMEOUT_MS,
}) {
	const url = `${origin}${keyFilePath(key)}`;
	let response;
	try {
		response = await fetchWithTimeout(fetchImpl, url, { method: 'GET' }, timeoutMs);
	} catch (error) {
		return { ok: false, status: null, message: `could not reach ${url}: ${error?.message || error}` };
	}
	if (!response.ok) {
		const detail = response.status === 404 ? 'not serving the key yet' : `HTTP ${response.status}`;
		return { ok: false, status: response.status, message: `${detail} at ${url}` };
	}
	const body = (await response.text()).trim();
	if (body !== key) {
		return {
			ok: false,
			status: response.status,
			message: `key file at ${url} contains "${body.slice(0, 32)}", expected "${key}"`,
		};
	}
	return { ok: true, status: response.status, message: 'key file is live and matches' };
}

/**
 * POST one batch.
 *
 * @param {{ payload: object, endpoint?: string, fetchImpl: Function, timeoutMs?: number }} input
 * @returns {Promise<{ ok: boolean, status: number | null, retryable: boolean, message: string }>}
 */
export async function submitBatch({ payload, endpoint = ENDPOINT, fetchImpl, timeoutMs = REQUEST_TIMEOUT_MS }) {
	let response;
	try {
		response = await fetchWithTimeout(
			fetchImpl,
			endpoint,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				body: JSON.stringify(payload),
			},
			timeoutMs
		);
	} catch (error) {
		return { ok: false, status: null, retryable: true, message: `request failed: ${error?.message || error}` };
	}
	const verdict = classifyResponse(response.status);
	return { ...verdict, status: response.status };
}

/**
 * The whole submission path: validate, chunk, POST each batch, summarise.
 *
 * Never throws. A failed announcement must not fail a deploy - the pages are already
 * live and the sitemap still carries them, so the worst case of a failure here is that
 * Bing finds the change on its own schedule instead of immediately.
 *
 * @param {{
 *   urls: string[],
 *   fetchImpl: Function,
 *   key?: string,
 *   host?: string,
 *   keyLocation?: string,
 *   origin?: string,
 *   endpoint?: string,
 *   maxPerRequest?: number,
 *   timeoutMs?: number,
 * }} input
 * @returns {Promise<{ ok: boolean, submitted: number, dropped: string[], batches: Array<object>, message: string }>}
 */
export async function submitUrls({
	urls,
	fetchImpl,
	key = INDEXNOW_KEY,
	host = HOST,
	keyLocation = KEY_LOCATION,
	origin = SITE_ORIGIN,
	endpoint = ENDPOINT,
	maxPerRequest = MAX_URLS_PER_REQUEST,
	timeoutMs = REQUEST_TIMEOUT_MS,
}) {
	const { kept, dropped } = filterUrlsForOrigin(urls, origin);
	if (kept.length === 0) {
		return { ok: true, submitted: 0, dropped, batches: [], message: 'nothing to submit' };
	}

	const batches = [];
	let submitted = 0;
	let allOk = true;

	for (const group of chunkUrls(kept, maxPerRequest)) {
		const payload = buildPayload({ host, key, keyLocation, urls: group });
		const check = validatePayload(payload);
		if (!check.ok) {
			allOk = false;
			batches.push({ count: group.length, ok: false, status: null, message: check.errors.join('; ') });
			continue;
		}
		const result = await submitBatch({ payload, endpoint, fetchImpl, timeoutMs });
		batches.push({ count: group.length, ...result });
		if (result.ok) submitted += group.length;
		else allOk = false;
	}

	const message = allOk
		? `submitted ${submitted} URL${submitted === 1 ? '' : 's'} in ${batches.length} batch${batches.length === 1 ? '' : 'es'}`
		: `submitted ${submitted} of ${kept.length} URLs; ${batches.filter((b) => !b.ok).length} batch(es) failed`;

	return { ok: allOk, submitted, dropped, batches, message };
}
