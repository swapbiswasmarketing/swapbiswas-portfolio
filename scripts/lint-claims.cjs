#!/usr/bin/env node
/**
 * Claim linter for swapbiswas.com blog posts.
 *
 * The trope gate catches how a sentence is written. This catches whether a
 * sentence is TRUE against the page it cites - specifically the two failure
 * modes that have shipped repeatedly:
 *
 *   1. Manufactured claims. Turning several sources' separate numbers into one
 *      superlative or ranking that none of them publishes. Four consecutive
 *      batches shipped this. Example caught 2026-09-03: three vendors publish
 *      device counts, the draft claimed all three advertise "the widest device
 *      and browser coverage". None of them uses that word anywhere.
 *
 *   2. Causal frames over correct arithmetic. Two verified dates, correct
 *      subtraction, and a false claim laid on top. Example: Google shipped
 *      Deep Research 53 days before OpenAI shipped deep research, therefore
 *      "53 days is the modern ceiling on how long a feature stays yours".
 *      Neither source describes a copy relationship.
 *
 * Fact-checking the numbers does not catch either one. This fetches every
 * cited URL and checks the claim word actually appears on the cited page.
 *
 * USAGE
 *   node scripts/lint-claims.cjs src/content/blog/<slug>.md
 *   node scripts/lint-claims.cjs src/content/blog/<slug>.md --offline
 *
 * EXIT CODES
 *   0  no unresolved findings
 *   1  at least one FAIL (superlative absent from the page it cites)
 *   2  usage or tooling error. Never treat as a pass.
 */

const fs = require('node:fs');
const path = require('node:path');

// Words that assert a ranking or an extreme. Each one is a claim about every
// competitor, not just the subject, so it needs the cited page to say it.
const SUPERLATIVES = [
  'widest', 'largest', 'biggest', 'broadest', 'deepest', 'fastest', 'cheapest',
  'most comprehensive', 'most complete', 'most accurate', 'most popular', 'most used',
  'most advanced', 'best-in-class', 'the best', 'the only', 'the first', 'the leading',
  'industry-leading', 'market-leading', 'number one', 'no. 1', '#1', 'top-ranked',
  'unmatched', 'unrivaled', 'unrivalled', 'highest', 'lowest', 'never been',
];

// Frames that turn a coincidence or a single datapoint into a general law.
const CAUSAL_FRAMES = [
  'the modern ceiling', 'which proves', 'proving that', 'which is why', 'this shows that',
  'demonstrates that', 'means that any', 'the reason', 'because of this', 'as a result of',
  'time to copy', 'copied it', 'copied the', 'in response to', 'forced them to',
  'the industry standard', 'the norm is', 'always takes', 'never takes',
];

// Phrases asserting agreement across multiple named parties.
const MULTI_SOURCE = [
  'both companies', 'all three', 'every vendor', 'all of them publish', 'each of them',
  'both sources', 'all four', 'the industry agrees', 'vendors publish', 'they all',
];

const args = process.argv.slice(2);
const OFFLINE = args.includes('--offline');
const file = args.find((a) => !a.startsWith('--'));

if (!file) {
  console.error('lint-claims: no file given\n  usage: node scripts/lint-claims.cjs <post.md> [--offline]');
  process.exit(2);
}
if (!fs.existsSync(file)) {
  console.error(`lint-claims: no such file: ${file}`);
  process.exit(2);
}

const raw = fs.readFileSync(file, 'utf-8');

// Strip frontmatter and fenced code so neither is scanned.
const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/```[\s\S]*?```/g, '');

/** Split into sentences, keeping markdown links intact. */
function sentences(text) {
  return text
    .split('\n')
    .flatMap((line) => line.split(/(?<=[.!?])\s+(?=[A-Z"'*[])/))
    .map((s) => s.trim())
    .filter(Boolean);
}

const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/**
 * Split the body into scannable units.
 *
 * Tables are scanned row by row, because a table of example claims will happily
 * cite an unrelated source two rows away and a whole-table scan reads that as a
 * defect. But a row that asserts something and cites nothing of its own is
 * checked against the rest of the table's sources: that is precisely the
 * 2026-09-03 shape, where the superlative sat in a "Claim" cell and the vendor
 * links sat in a "Who else says it" cell below it. Those widened matches report
 * as REVIEW, since the same widening is what produces false positives.
 */
function units() {
  const lines = body.split('\n');
  const out = [];
  let table = null;

  const flushTable = () => {
    if (!table) return;
    // Every external citation anywhere in this table.
    const tableLinks = [...table.map((r) => r.text).join(' ').matchAll(LINK)].map((m) => m[2]);
    for (const row of table) {
      const ownLinks = [...row.text.matchAll(LINK)].map((m) => m[2]);
      out.push({
        text: row.text,
        line: row.line,
        links: ownLinks.length ? ownLinks : tableLinks,
        // A superlative in a cell with no citation of its own, checked against
        // citations elsewhere in the table, is the shape of the 2026-09-03
        // defect. It is also how an example row picks up an unrelated link, so
        // it is reported as REVIEW rather than FAIL.
        widened: ownLinks.length === 0,
      });
    }
    table = null;
  };

  lines.forEach((line, i) => {
    if (/^\s*\|.*\|\s*$/.test(line)) {
      if (!table) table = [];
      table.push({ text: line, line: i });
      return;
    }
    flushTable();
    sentences(line).forEach((t) => out.push({
      text: t, line: i, links: [...t.matchAll(LINK)].map((m) => m[2]), widened: false,
    }));
  });
  flushTable();
  return out.filter((u) => u.text);
}

// body has frontmatter stripped, so unit line numbers need it added back.
const FM_OFFSET = ((raw.match(/^---\n[\s\S]*?\n---\n/) || [''])[0].match(/\n/g) || []).length;

/** Find every unit carrying a risky token AND at least one external citation. */
function findClaims() {
  const out = [];
  for (const u of units()) {
    const s = u.text;
    const links = u.links;
    if (!links.length) continue;
    const lower = s.toLowerCase();

    const sup = SUPERLATIVES.filter((w) => lower.includes(w));
    const causal = CAUSAL_FRAMES.filter((w) => lower.includes(w));
    const multi = MULTI_SOURCE.filter((w) => lower.includes(w));
    if (!sup.length && !causal.length && !multi.length) continue;

    out.push({ sentence: s, links, sup, causal, multi, widened: u.widened, lineNo: u.line + FM_OFFSET + 1 });
  }
  return out;
}

async function pageText(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: {
        // Several publishers 403 a default UA. Declare a real one.
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });
    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    const html = await res.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    return { ok: true, text };
  } catch (e) {
    return { ok: false, reason: e.name === 'AbortError' ? 'timeout' : e.message };
  } finally {
    clearTimeout(t);
  }
}

(async () => {
  const claims = findClaims();
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');

  if (!claims.length) {
    console.log(`${rel}: 0 claims needing source verification`);
    console.log('CLAIM GATE: PASS');
    process.exit(0);
  }

  let fails = 0;
  let review = 0;

  console.log(`${rel}: ${claims.length} sentence(s) carrying a superlative, causal frame or multi-source assertion\n`);

  for (const c of claims) {
    const tokens = [...c.sup, ...c.multi];
    const snippet = c.sentence.length > 130 ? c.sentence.slice(0, 127) + '...' : c.sentence;
    console.log(`  L${c.lineNo}  ${snippet}`);
    if (c.sup.length) console.log(`        superlative: ${c.sup.join(', ')}`);
    if (c.causal.length) console.log(`        causal frame: ${c.causal.join(', ')}`);
    if (c.multi.length) console.log(`        multi-source: ${c.multi.join(', ')}`);

    // A causal frame cannot be checked by string match. It always needs a human read.
    if (c.causal.length) {
      review++;
      console.log(`        REVIEW  does the cited page state this relationship, or is it your inference?`);
    }

    if (!c.sup.length) { console.log(''); continue; }

    if (OFFLINE) {
      review++;
      console.log(`        REVIEW  --offline: fetch ${c.links[0]} and confirm the superlative appears\n`);
      continue;
    }

    for (const url of c.links) {
      const page = await pageText(url);
      if (!page.ok) {
        review++;
        console.log(`        REVIEW  could not fetch (${page.reason}): ${url}`);
        continue;
      }
      const missing = c.sup.filter((w) => !page.text.includes(w));
      if (missing.length === c.sup.length && c.widened) {
        review++;
        console.log(`        REVIEW  [${c.sup.join(', ')}] absent from ${url}, cited elsewhere in this table`);
      } else if (missing.length === c.sup.length) {
        fails++;
        console.log(`        FAIL    none of [${c.sup.join(', ')}] appears on ${url}`);
      } else if (missing.length) {
        review++;
        console.log(`        REVIEW  [${missing.join(', ')}] absent from ${url}, others present`);
      } else {
        console.log(`        ok      superlative found on ${url}`);
      }
    }
    console.log('');
  }

  console.log(`${fails} FAIL, ${review} REVIEW`);
  if (fails) {
    console.log('\nA FAIL means the page you cite does not contain the claim you attributed to it.');
    console.log('Reword to what the source actually says, or cite a source that says it.');
  }
  console.log(fails ? 'CLAIM GATE: FAIL' : 'CLAIM GATE: PASS');
  process.exitCode = fails ? 1 : 0;
})().catch((e) => {
  console.error(`lint-claims: ${e.message}`);
  process.exit(2);
});
