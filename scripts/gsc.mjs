#!/usr/bin/env node
/**
 * Google Search Console CLI for swapbiswas.com
 *
 * First-party search data, free and effectively unlimited, replacing the
 * exhausted Ahrefs / Semrush units.
 *
 * SETUP (once):
 *   1. https://console.cloud.google.com/ -> create a project
 *   2. APIs & Services -> Library -> enable "Google Search Console API"
 *   3. APIs & Services -> OAuth consent screen -> External -> add yourself as a Test user
 *   4. Credentials -> Create credentials -> OAuth client ID -> Desktop app
 *   5. Download the JSON, save it as   .gsc/client_secret.json
 *   6. node scripts/gsc.mjs auth
 *
 * USAGE:
 *   node scripts/gsc.mjs auth                     Run the OAuth flow, cache the token
 *   node scripts/gsc.mjs sites                    List properties this account can read
 *   node scripts/gsc.mjs perf     [--days 90]     Totals + daily trend
 *   node scripts/gsc.mjs queries  [--days 90]     Top queries  -> CSV
 *   node scripts/gsc.mjs pages    [--days 90]     Top pages    -> CSV
 *   node scripts/gsc.mjs striking [--days 90]     Positions 5-25, the fastest wins
 *   node scripts/gsc.mjs coverage [--limit 250]   Per-URL index status via URL Inspection
 *
 * Common flags:  --site sc-domain:swapbiswas.com   --days N   --limit N   --out path.csv
 */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { exec } from 'node:child_process';
import { fileURLToPath } from 'node:url';
// The targeted client, not the full `googleapis` umbrella package: same capability,
// 252 KB instead of 213 MB, and Vercel installs devDependencies on every build.
import { searchconsole } from '@googleapis/searchconsole';
import { OAuth2Client, GoogleAuth } from 'google-auth-library';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GSC_DIR = path.join(ROOT, '.gsc');
const SECRET_PATH = path.join(GSC_DIR, 'client_secret.json');
const TOKEN_PATH = path.join(GSC_DIR, 'token.json');
const SA_PATH = path.join(GSC_DIR, 'service_account.json');
const EXPORT_DIR = path.join(GSC_DIR, 'exports');
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];
const DEFAULT_SITE_MATCH = 'swapbiswas.com';

// ---------------------------------------------------------------- args

function parseArgs(argv) {
  const cmd = argv[2];
  const flags = {};
  for (let i = 3; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) { flags[key] = next; i++; }
      else flags[key] = true;
    }
  }
  return { cmd, flags };
}

const { cmd, flags } = parseArgs(process.argv);
const DAYS = Number(flags.days || 90);
const LIMIT = Number(flags.limit || 1000);

// ---------------------------------------------------------------- utils

function die(msg) {
  console.error(`\n  ERROR  ${msg}\n`);
  process.exit(1);
}

function ensureDirs() {
  fs.mkdirSync(GSC_DIR, { recursive: true });
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
}

/** GSC data lags ~2 days; end the window 3 days back so the tail is not half-empty. */
function dateRange(days) {
  const end = new Date(Date.now() - 3 * 86400000);
  const start = new Date(end.getTime() - days * 86400000);
  const iso = (d) => d.toISOString().slice(0, 10);
  return { startDate: iso(start), endDate: iso(end) };
}

function csvCell(v) {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function writeCsv(file, headers, rows) {
  ensureDirs();
  const out = file.includes(path.sep) ? file : path.join(EXPORT_DIR, file);
  const body = [headers.join(','), ...rows.map((r) => r.map(csvCell).join(','))].join('\n');
  fs.writeFileSync(out, body, 'utf-8');
  return out;
}

function pct(n) { return `${(n * 100).toFixed(2)}%`; }
function openBrowser(url) {
  const cmds = { win32: `start "" "${url}"`, darwin: `open "${url}"` };
  exec(cmds[process.platform] || `xdg-open "${url}"`, () => {});
}

// ---------------------------------------------------------------- auth

function loadClientSecret() {
  if (!fs.existsSync(SECRET_PATH)) {
    die(
      `No OAuth client file at .gsc/client_secret.json\n\n` +
      `  1. https://console.cloud.google.com/ -> create a project\n` +
      `  2. Enable "Google Search Console API"\n` +
      `  3. OAuth consent screen -> External -> add yourself as a Test user\n` +
      `  4. Credentials -> Create OAuth client ID -> Desktop app\n` +
      `  5. Download the JSON to  ${SECRET_PATH}\n` +
      `  6. Re-run: node scripts/gsc.mjs auth`
    );
  }
  const raw = JSON.parse(fs.readFileSync(SECRET_PATH, 'utf-8'));
  const conf = raw.installed || raw.web;
  if (!conf) die('client_secret.json has neither an "installed" nor a "web" block. Re-download it as a Desktop app client.');
  return conf;
}

/** Interactive consent, then cache the refresh token. */
async function runAuthFlow() {
  const conf = loadClientSecret();
  ensureDirs();

  const server = http.createServer();
  const port = await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server.address().port));
  });
  // Google's loopback flow wants the literal IP. Newer desktop clients reject
  // "localhost" with a bare 400, so 127.0.0.1 is the form that actually works.
  const redirectUri = `http://127.0.0.1:${port}`;
  const client = new OAuth2Client(conf.client_id, conf.client_secret, redirectUri);

  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: SCOPES,
  });

  console.log('\n  Opening your browser to authorise Search Console access.');
  console.log('  Sign in with the Google account that owns swapbiswas.com.');
  console.log('\n  If the browser does not open, paste this URL:\n');
  console.log(`  ${authUrl}\n`);
  openBrowser(authUrl);

  const code = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timed out after 5 minutes waiting for consent.')), 300000);
    server.on('request', (req, res) => {
      const url = new URL(req.url, redirectUri);
      const c = url.searchParams.get('code');
      const err = url.searchParams.get('error');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(
        `<html><body style="font-family:system-ui;padding:3rem;background:#f6f4ef;color:#15130f">
         <h2 style="color:${c ? '#2a7347' : '#b53b15'}">${c ? 'Authorised.' : 'Authorisation failed.'}</h2>
         <p>${c ? 'You can close this tab and return to the terminal.' : String(err || 'No code returned.')}</p>
         </body></html>`
      );
      clearTimeout(timer);
      server.close();
      c ? resolve(c) : reject(new Error(err || 'No authorisation code returned.'));
    });
  });

  const { tokens } = await client.getToken(code);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2), 'utf-8');
  console.log(`  Token cached at ${path.relative(ROOT, TOKEN_PATH)}`);
  if (!tokens.refresh_token) {
    console.log('  NOTE: no refresh token returned. Revoke the app at');
    console.log('  https://myaccount.google.com/permissions and re-run auth if access expires.');
  }
  return client;
}

async function getClient() {
  // A service-account key wins when present: no consent screen, no test users,
  // no verification. Access is granted inside Search Console instead.
  if (fs.existsSync(SA_PATH)) {
    const sa = JSON.parse(fs.readFileSync(SA_PATH, 'utf-8'));
    if (!sa.client_email) die('service_account.json has no client_email. Re-download the JSON key.');
    const auth = new GoogleAuth({ keyFile: SA_PATH, scopes: SCOPES });
    return auth.getClient();
  }
  if (!fs.existsSync(TOKEN_PATH)) {
    die(
      `No credentials found.\n\n` +
      `  Either add a service-account key at  .gsc/service_account.json\n` +
      `  (then grant its client_email Full access in Search Console ->\n` +
      `   Settings -> Users and permissions), which is the reliable route,\n\n` +
      `  or run the interactive flow:  node scripts/gsc.mjs auth`
    );
  }
  const conf = loadClientSecret();
  const client = new OAuth2Client(conf.client_id, conf.client_secret, 'http://localhost');
  client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8')));
  client.on('tokens', (t) => {
    const merged = { ...JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8')), ...t };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(merged, null, 2), 'utf-8');
  });
  return client;
}

/** Resolve the property, preferring an explicit --site, else the swapbiswas.com match. */
async function resolveSite(api) {
  if (flags.site) return flags.site;
  const { data } = await api.sites.list();
  const entries = data.siteEntry || [];
  if (!entries.length) die('This Google account has no Search Console properties.');
  const match =
    entries.find((s) => s.siteUrl === `sc-domain:${DEFAULT_SITE_MATCH}`) ||
    entries.find((s) => s.siteUrl.includes(DEFAULT_SITE_MATCH));
  if (!match) {
    console.error('\n  Could not find swapbiswas.com. Properties available:');
    entries.forEach((s) => console.error(`    ${s.siteUrl}  (${s.permissionLevel})`));
    die('Pass one explicitly with --site');
  }
  return match.siteUrl;
}

/** Page through searchanalytics.query, which caps each response at 25k rows. */
async function queryAll(api, siteUrl, body, cap) {
  const rows = [];
  const pageSize = Math.min(cap, 25000);
  for (let start = 0; rows.length < cap; start += pageSize) {
    const { data } = await api.searchanalytics.query({
      siteUrl,
      requestBody: { ...body, rowLimit: pageSize, startRow: start },
    });
    const batch = data.rows || [];
    rows.push(...batch);
    if (batch.length < pageSize) break;
  }
  return rows.slice(0, cap);
}

// ---------------------------------------------------------------- commands

async function cmdSites() {
  const api = searchconsole({ version: 'v1', auth: await getClient() });
  const { data } = await api.sites.list();
  console.log('\n  Search Console properties on this account:\n');
  (data.siteEntry || []).forEach((s) => console.log(`    ${s.siteUrl.padEnd(45)} ${s.permissionLevel}`));
  console.log('');
}

async function cmdPerf(api, siteUrl) {
  const range = dateRange(DAYS);
  const { data } = await api.searchanalytics.query({
    siteUrl,
    requestBody: { ...range, dimensions: [], searchType: 'web' },
  });
  const t = (data.rows || [])[0];

  console.log(`\n  ${siteUrl}   ${range.startDate} to ${range.endDate}  (${DAYS} days)\n`);
  if (!t) {
    console.log('  No data at all in this window. The property may be new, or it may be');
    console.log('  the wrong property type (URL-prefix vs Domain).\n');
    return;
  }
  console.log(`    Clicks .............. ${t.clicks}`);
  console.log(`    Impressions ......... ${t.impressions}`);
  console.log(`    CTR ................. ${pct(t.ctr)}`);
  console.log(`    Average position .... ${t.position.toFixed(1)}\n`);

  const daily = await queryAll(api, siteUrl, { ...range, dimensions: ['date'], searchType: 'web' }, 1000);
  const file = writeCsv('gsc-daily.csv', ['date', 'clicks', 'impressions', 'ctr', 'position'],
    daily.map((r) => [r.keys[0], r.clicks, r.impressions, r.ctr.toFixed(4), r.position.toFixed(2)]));
  console.log(`  Daily trend -> ${path.relative(ROOT, file)}  (${daily.length} days)\n`);
}

async function cmdQueries(api, siteUrl) {
  const range = dateRange(DAYS);
  const rows = await queryAll(api, siteUrl, { ...range, dimensions: ['query'], searchType: 'web' }, LIMIT);
  if (!rows.length) return console.log('\n  No query data in this window.\n');

  const file = writeCsv(flags.out || 'gsc-queries.csv', ['query', 'clicks', 'impressions', 'ctr', 'position'],
    rows.map((r) => [r.keys[0], r.clicks, r.impressions, r.ctr.toFixed(4), r.position.toFixed(2)]));

  console.log(`\n  ${rows.length} queries  ${range.startDate} to ${range.endDate}`);
  console.log(`  -> ${path.relative(ROOT, file)}\n`);
  console.log('  Top 25 by impressions:\n');
  console.log(`    ${'query'.padEnd(52)} ${'clk'.padStart(5)} ${'impr'.padStart(7)} ${'pos'.padStart(6)}`);
  [...rows].sort((a, b) => b.impressions - a.impressions).slice(0, 25).forEach((r) => {
    const q = r.keys[0].length > 50 ? r.keys[0].slice(0, 49) + '…' : r.keys[0];
    console.log(`    ${q.padEnd(52)} ${String(r.clicks).padStart(5)} ${String(r.impressions).padStart(7)} ${r.position.toFixed(1).padStart(6)}`);
  });
  console.log('');
}

async function cmdPages(api, siteUrl) {
  const range = dateRange(DAYS);
  const rows = await queryAll(api, siteUrl, { ...range, dimensions: ['page'], searchType: 'web' }, LIMIT);
  if (!rows.length) return console.log('\n  No page data in this window.\n');

  const file = writeCsv(flags.out || 'gsc-pages.csv', ['page', 'clicks', 'impressions', 'ctr', 'position'],
    rows.map((r) => [r.keys[0], r.clicks, r.impressions, r.ctr.toFixed(4), r.position.toFixed(2)]));

  console.log(`\n  ${rows.length} pages earned at least one impression  ${range.startDate} to ${range.endDate}`);
  console.log(`  -> ${path.relative(ROOT, file)}\n`);
  console.log('  Top 25 by impressions:\n');
  [...rows].sort((a, b) => b.impressions - a.impressions).slice(0, 25).forEach((r) => {
    const p = r.keys[0].replace(/^https?:\/\/[^/]+/, '');
    const s = p.length > 50 ? p.slice(0, 49) + '…' : p;
    console.log(`    ${s.padEnd(52)} ${String(r.clicks).padStart(5)} ${String(r.impressions).padStart(7)} ${r.position.toFixed(1).padStart(6)}`);
  });
  console.log('');
}

/** Queries ranking 5-25: already visible, closest to a real traffic win. */
async function cmdStriking(api, siteUrl) {
  const range = dateRange(DAYS);
  const rows = await queryAll(api, siteUrl, { ...range, dimensions: ['query', 'page'], searchType: 'web' }, 25000);
  const hits = rows
    .filter((r) => r.position >= 5 && r.position <= 25 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions);

  if (!hits.length) {
    console.log('\n  Nothing ranking between positions 5 and 25 with 3+ impressions.');
    console.log('  That means there is no striking-distance layer yet: the issue is');
    console.log('  visibility, not ranking refinement.\n');
    return;
  }

  const file = writeCsv(flags.out || 'gsc-striking.csv', ['query', 'page', 'clicks', 'impressions', 'ctr', 'position'],
    hits.map((r) => [r.keys[0], r.keys[1], r.clicks, r.impressions, r.ctr.toFixed(4), r.position.toFixed(2)]));

  console.log(`\n  ${hits.length} striking-distance opportunities (position 5-25)`);
  console.log(`  -> ${path.relative(ROOT, file)}\n`);
  hits.slice(0, 30).forEach((r) => {
    const q = r.keys[0].length > 44 ? r.keys[0].slice(0, 43) + '…' : r.keys[0];
    console.log(`    ${q.padEnd(46)} pos ${r.position.toFixed(1).padStart(5)}  ${String(r.impressions).padStart(6)} impr  ${String(r.clicks).padStart(4)} clk`);
  });
  console.log('');
}

/**
 * Per-URL index status via the URL Inspection API.
 * Quota: 2000 inspections/day, 600/minute. Serialised with a small delay.
 */
async function cmdCoverage(api, siteUrl) {
  console.log('\n  Fetching sitemap...');
  const res = await fetch('https://swapbiswas.com/sitemap-0.xml');
  if (!res.ok) die(`Could not fetch sitemap (HTTP ${res.status}).`);
  const xml = await res.text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const urls = all.slice(0, LIMIT === 1000 ? 250 : LIMIT);
  console.log(`  ${all.length} URLs in sitemap, inspecting ${urls.length}.`);
  console.log('  Roughly 1 second each, so expect a few minutes.\n');

  const results = [];
  const tally = {};
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const { data } = await api.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl },
      });
      const r = data.inspectionResult?.indexStatusResult || {};
      const verdict = r.verdict || 'UNKNOWN';
      const state = r.coverageState || 'unknown';
      results.push([url, verdict, state, r.robotsTxtState || '', r.indexingState || '', r.lastCrawlTime || '']);
      tally[state] = (tally[state] || 0) + 1;
      process.stdout.write(`\r  ${i + 1}/${urls.length}  ${state.slice(0, 46).padEnd(46)}`);
    } catch (e) {
      const msg = e?.errors?.[0]?.message || e.message;
      results.push([url, 'ERROR', msg, '', '', '']);
      tally['ERROR'] = (tally['ERROR'] || 0) + 1;
      if (/quota|rate/i.test(msg)) {
        console.log(`\n\n  Quota hit after ${i} URLs. Partial results kept.\n`);
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 350));
  }

  const file = writeCsv(flags.out || 'gsc-coverage.csv',
    ['url', 'verdict', 'coverageState', 'robotsTxtState', 'indexingState', 'lastCrawlTime'], results);

  console.log(`\n\n  Index coverage across ${results.length} URLs:\n`);
  Object.entries(tally).sort((a, b) => b[1] - a[1]).forEach(([state, n]) => {
    const share = ((n / results.length) * 100).toFixed(1);
    console.log(`    ${String(n).padStart(4)}  ${share.padStart(5)}%   ${state}`);
  });
  console.log(`\n  -> ${path.relative(ROOT, file)}\n`);
}

// ---------------------------------------------------------------- main

const USAGE = `
  GSC CLI for swapbiswas.com

    node scripts/gsc.mjs auth                    Authorise (run this first)
    node scripts/gsc.mjs sites                   List readable properties
    node scripts/gsc.mjs perf     [--days 90]    Totals + daily trend
    node scripts/gsc.mjs queries  [--days 90]    Top queries  -> CSV
    node scripts/gsc.mjs pages    [--days 90]    Top pages    -> CSV
    node scripts/gsc.mjs striking [--days 90]    Positions 5-25
    node scripts/gsc.mjs coverage [--limit 250]  Per-URL index status

  Flags:  --site <property>  --days N  --limit N  --out <file.csv>
`;

async function main() {
  if (!cmd || cmd === 'help' || flags.help) return console.log(USAGE);
  if (cmd === 'auth') { await runAuthFlow(); console.log('\n  Done. Try:  node scripts/gsc.mjs perf\n'); return; }
  if (cmd === 'sites') return cmdSites();

  const api = searchconsole({ version: 'v1', auth: await getClient() });
  const siteUrl = await resolveSite(api);

  switch (cmd) {
    case 'perf': return cmdPerf(api, siteUrl);
    case 'queries': return cmdQueries(api, siteUrl);
    case 'pages': return cmdPages(api, siteUrl);
    case 'striking': return cmdStriking(api, siteUrl);
    case 'coverage': return cmdCoverage(api, siteUrl);
    default: console.log(USAGE); die(`Unknown command "${cmd}"`);
  }
}

main().catch((e) => {
  const msg = e?.response?.data?.error?.message || e.message;
  if (/invalid_grant/i.test(msg)) die('Cached token is no longer valid. Re-run:  node scripts/gsc.mjs auth');
  if (/insufficient|permission|403/i.test(msg)) die(`Access denied by Google: ${msg}\n\n  Check the account you authorised actually owns the property.`);
  die(msg);
});
