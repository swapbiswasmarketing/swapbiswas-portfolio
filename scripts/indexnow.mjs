#!/usr/bin/env node
/**
 * IndexNow CLI for swapbiswas.com
 *
 * The deploy hook in astro.config.mjs handles the normal case automatically. This is
 * for the cases it deliberately does not cover: checking the key is live, announcing a
 * URL by hand, re-announcing after a failed deploy, and seeing what the next deploy
 * would submit without submitting it.
 *
 * USAGE:
 *   node scripts/indexnow.mjs verify              Is the origin serving the key file?
 *   node scripts/indexnow.mjs status [--days N]   What WOULD be submitted (no network)
 *   node scripts/indexnow.mjs submit [--days N]   Announce fresh URLs from the sitemap
 *   node scripts/indexnow.mjs submit --url URL    Announce one URL
 *   node scripts/indexnow.mjs submit --all        Announce every URL in the sitemap
 *   node scripts/indexnow.mjs key                 Print the key and its public location
 *
 * Flags:
 *   --days N     override the freshness window (default: FRESH_WINDOW_DAYS)
 *   --url URL    submit exactly this URL, repeatable
 *   --all        ignore lastmod, submit everything in the sitemap
 *   --dry-run    print the payload, make no request
 *   --sitemap P  read a sitemap from P instead of dist/sitemap-0.xml
 *
 * `status` and `--dry-run` never touch the network, so they are safe to run anywhere.
 * `submit` is the only command that announces anything, and it refuses to run until
 * `verify` passes - announcing against a key the origin is not serving earns a 403.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  ENDPOINT,
  FRESH_WINDOW_DAYS,
  HOST,
  INDEXNOW_KEY,
  KEY_LOCATION,
  SITE_ORIGIN,
  SITEMAP_FILE,
} from '../src/config/indexnow.mjs';

import {
  buildPayload,
  parseSitemapEntries,
  selectFreshUrls,
  submitUrls,
  verifyKeyFile,
} from '../src/lib/indexnow.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_SITEMAP = path.join(ROOT, 'dist', SITEMAP_FILE);

// ---------------------------------------------------------------- args

function parseArgs(argv) {
  const cmd = argv[2];
  const flags = {};
  const urls = [];
  for (let i = 3; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (key === 'url') {
      if (next && !next.startsWith('--')) { urls.push(next); i++; }
      continue;
    }
    if (next && !next.startsWith('--')) { flags[key] = next; i++; }
    else flags[key] = true;
  }
  return { cmd, flags, urls };
}

const { cmd, flags, urls: explicitUrls } = parseArgs(process.argv);
const WINDOW_DAYS = flags.days === undefined ? FRESH_WINDOW_DAYS : Number(flags.days);
const SITEMAP_PATH = flags.sitemap ? path.resolve(String(flags.sitemap)) : DEFAULT_SITEMAP;

// ---------------------------------------------------------------- output

/**
 * Abort the command with a message.
 *
 * Throws rather than calling process.exit(), and the top-level handler sets
 * process.exitCode instead. THIS IS NOT STYLE. Calling process.exit() while an undici
 * socket from fetch() is still open aborts the process on Windows:
 *   Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), file src\win\async.c
 * and the shell sees exit code 127, not 1. Every failure path in this CLI is reached
 * immediately after a fetch, so that assertion is the NORMAL outcome of `verify`
 * against a site that is not yet serving the key - which is exactly the state this
 * command exists to report. Setting exitCode lets the loop drain and exits 1 cleanly.
 */
class CliError extends Error {}

function die(msg) {
  throw new CliError(msg);
}

function ok(msg) {
  console.log(`\n  OK  ${msg}\n`);
}

/**
 * Read the sitemap, or return null if it is not there.
 *
 * Whether a missing sitemap is fatal is the CALLER's decision, not this function's:
 * `submit` cannot proceed without one, but `status` reporting "you have not built yet"
 * is an answer rather than an error.
 */
function readSitemapIfPresent() {
  if (!fs.existsSync(SITEMAP_PATH)) return null;
  return parseSitemapEntries(fs.readFileSync(SITEMAP_PATH, 'utf8'));
}

/**
 * The URL list a command should act on: explicit --url flags win, then --all, then
 * the freshness window.
 *
 * `status` and `submit` MUST both resolve through this one function. They used to
 * differ: status gated the call on having read a non-empty sitemap, but the --url
 * branch below returns before the sitemap is ever read, so `status --url X` answered
 * "0 URLs would be submitted" while `submit --url X` announced it. A preview command
 * that disagrees with the command it previews is worse than no preview, and it
 * disagreed in the dangerous direction - it under-reported.
 */
function resolveUrls({ requireSitemap = true } = {}) {
  if (explicitUrls.length) {
    return { urls: explicitUrls, source: `${explicitUrls.length} --url flag(s)` };
  }
  const entries = readSitemapIfPresent();
  if (entries === null) {
    if (requireSitemap) {
      die(`no sitemap at ${SITEMAP_PATH}\n         Run \`npm run build\` first, or pass --sitemap <path>.`);
    }
    return { urls: [], source: 'no sitemap built yet' };
  }
  if (flags.all) {
    return { urls: entries.map((e) => e.loc), source: `every URL in ${path.basename(SITEMAP_PATH)}` };
  }
  const fresh = selectFreshUrls(entries, new Date(), WINDOW_DAYS);
  return { urls: fresh, source: `lastmod within ${WINDOW_DAYS} day(s)` };
}

// ---------------------------------------------------------------- commands

async function cmdVerify() {
  console.log(`\n  Checking ${KEY_LOCATION}`);
  const result = await verifyKeyFile({ fetchImpl: fetch });
  if (!result.ok) {
    die(
      `${result.message}\n` +
      `         If this is the first deploy that added the key file, this is expected:\n` +
      `         the file is in dist/ but the production domain still serves the previous\n` +
      `         deployment. Re-run after the next deploy.`
    );
  }
  ok(result.message);
}

function cmdStatus() {
  // The sitemap line describes the FILE; the selection lines describe what would be
  // submitted. Keeping them separate is why an existing-but-empty sitemap now reports
  // "(0 URLs)" rather than "(not built)" - the file was read, it was just empty.
  const entries = readSitemapIfPresent();
  const { urls, source } = resolveUrls({ requireSitemap: false });
  console.log('');
  console.log(`  key           ${INDEXNOW_KEY}`);
  console.log(`  keyLocation   ${KEY_LOCATION}`);
  console.log(`  host          ${HOST}`);
  console.log(`  endpoint      ${ENDPOINT}`);
  console.log(`  sitemap       ${SITEMAP_PATH}${entries ? ` (${entries.length} URLs)` : ' (not built)'}`);
  console.log(`  window        ${WINDOW_DAYS} day(s)`);
  console.log(`  selection     ${source}`);
  console.log('');
  console.log(`  ${urls.length} URL(s) would be submitted:`);
  for (const url of urls.slice(0, 50)) console.log(`    ${url}`);
  if (urls.length > 50) console.log(`    ... and ${urls.length - 50} more`);
  console.log('');
}

async function cmdSubmit() {
  const { urls, source } = resolveUrls();
  if (!urls.length) {
    ok(`nothing to submit (${source})`);
    return;
  }

  console.log(`\n  ${urls.length} URL(s) selected by: ${source}`);

  if (flags['dry-run']) {
    const payload = buildPayload({ host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urls });
    console.log(`\n  POST ${ENDPOINT}`);
    console.log(JSON.stringify(payload, null, 2));
    ok('dry run, nothing submitted');
    return;
  }

  // Refuse to announce against a key the origin is not serving: the endpoint would
  // answer 403 for the whole batch, and the failure would look like a code bug.
  const check = await verifyKeyFile({ fetchImpl: fetch });
  if (!check.ok) die(`${check.message}\n         Run \`npm run indexnow:verify\` for detail.`);
  console.log(`  key file verified: ${check.message}`);

  const result = await submitUrls({ urls, fetchImpl: fetch });
  for (const batch of result.batches) {
    console.log(`  batch of ${batch.count}: HTTP ${batch.status ?? 'n/a'} - ${batch.message}`);
  }
  if (result.dropped.length) {
    console.log(`  dropped ${result.dropped.length} URL(s) not on ${SITE_ORIGIN}`);
  }
  if (!result.ok) die(result.message);
  ok(result.message);
}

function cmdKey() {
  console.log('');
  console.log(`  key           ${INDEXNOW_KEY}`);
  console.log(`  file          public/${INDEXNOW_KEY}.txt`);
  console.log(`  keyLocation   ${KEY_LOCATION}`);
  console.log('');
  console.log('  This key is public by design. The protocol proves ownership by serving');
  console.log('  it back from this origin, so it belongs in the repo, not an env var.');
  console.log('');
}

function usage() {
  console.log(`
  IndexNow CLI - swapbiswas.com

    verify              Is the origin serving the key file?
    status [--days N]   What WOULD be submitted (no network)
    submit [--days N]   Announce fresh URLs from the sitemap
    submit --url URL    Announce one URL (repeatable)
    submit --all        Announce every URL in the sitemap
    key                 Print the key and its public location

  Flags: --days N  --url URL  --all  --dry-run  --sitemap PATH
`);
}

// ---------------------------------------------------------------- main

const commands = {
  verify: cmdVerify,
  status: cmdStatus,
  submit: cmdSubmit,
  key: cmdKey,
};

const handler = commands[cmd];
if (!handler) {
  usage();
  // An unknown command is an error; a bare invocation asking for help is not.
  process.exitCode = cmd ? 1 : 0;
} else {
  try {
    // Checked here rather than at parse time so the failure goes through the CLI's own
    // error path. `--days abc` is Number() -> NaN, and a NaN window would select every
    // dated URL in the sitemap instead of none, so a typo must stop the command dead.
    if (!Number.isFinite(WINDOW_DAYS) || WINDOW_DAYS < 0) {
      die(`--days must be a non-negative number, got "${flags.days}"`);
    }
    await handler();
  } catch (error) {
    const detail = error instanceof CliError ? error.message : error?.stack || error?.message || String(error);
    console.error(`\n  ERROR  ${detail}\n`);
    process.exitCode = 1;
  }
}
