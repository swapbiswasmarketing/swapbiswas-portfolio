#!/usr/bin/env node
/**
 * Semrush Standard API wrapper — BACKUP SEO/keyword data when Ahrefs MCP is unavailable.
 * Key is sourced from the SEMRUSH_API_KEY env var (or CONTENT_AGENT.md if present); never on the command line.
 *
 * Usage (run from repo root):
 *   SEMRUSH_API_KEY=xxxx node scripts/semrush.mjs <command> [args...]
 *
 * Commands:
 *   overview <keyword> [db]              volume, difficulty, CPC, competition  (Ahrefs: keywords-explorer-overview)
 *   related  <keyword> [db] [limit]      related keywords (noisy - sanity-filter)  (Ahrefs: keywords-explorer-related-terms)
 *   questions <keyword> [db] [limit]     question keywords (FAQ fodder)        (Ahrefs: matching-terms terms=questions)
 *   broad    <keyword> [db] [limit]      broad-match keywords (best for secondaries)  (Ahrefs: keywords-explorer-matching-terms)
 *   serp     <keyword> [db] [limit]      organic results / competitors         (Ahrefs: serp-overview)
 *   domain   <domain> [db] [limit] [kw]  domain organic keywords + positions; optional [kw] keeps only keywords
 *                                        CONTAINING that term — required for cannibalization checks (Ahrefs: site-explorer-organic-keywords)
 *   url      <url> [db] [limit]          exact-URL organic positions           (Ahrefs: site-explorer-organic-keywords mode=exact)
 *   balance                              remaining API units
 *
 * db defaults to "us". Output is JSON to stdout. CPC is in USD (Semrush returns dollars, unlike Ahrefs cents).
 * Note: Semrush volume/difficulty differ from Ahrefs — always label the source in the research summary.
 */

import { readFileSync } from "fs";

// Key source of truth: SEMRUSH_API_KEY env var (shell or .env.local) if set, else the
// key hardcoded in a committed CONTENT_AGENT.md (stage-only) if one exists.
function keyFromDoc() {
  try {
    const doc = readFileSync(new URL("../CONTENT_AGENT.md", import.meta.url), "utf8");
    const m = doc.match(/SEMRUSH_API_KEY[`'":=\s]+([a-f0-9]{32})\b/i);
    return m ? m[1] : null;
  } catch { return null; }
}
const KEY = process.env.SEMRUSH_API_KEY || keyFromDoc();
if (!KEY) { console.error("ERROR: no Semrush key — set SEMRUSH_API_KEY or add it to CONTENT_AGENT.md."); process.exit(1); }

const BASE = "https://api.semrush.com/";
const [, , cmd, arg1, db = "us", limitRaw] = process.argv;
const filter = process.argv[6];           // optional keyword-substring filter (domain cmd, cannibalization scoping)
const limit = Number(limitRaw) || 15;

function parseCsv(text) {
  const t = text.trim();
  if (/^ERROR\s+\d+/i.test(t)) throw new Error("Semrush API: " + t.split("\n")[0]);
  const lines = t.split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(";");
  return lines.slice(1).map(line => {
    const cells = line.split(";");
    const row = {};
    headers.forEach((h, i) => { row[h] = cells[i]; });
    return row;
  });
}

async function call(params) {
  const qs = new URLSearchParams({ key: KEY, database: db, ...params });
  const res = await fetch(`${BASE}?${qs}`);
  const body = await res.text();
  if (!res.ok && !body.trim()) throw new Error(`HTTP ${res.status}`);
  return parseCsv(body);
}

try {
  let out;
  switch (cmd) {
    case "balance": {
      const r = await fetch(`https://www.semrush.com/users/countapiunits.html?key=${KEY}`);
      out = { apiUnitsRemaining: Number((await r.text()).trim()) };
      break;
    }
    case "overview": {
      const [ov] = await call({ type: "phrase_this", phrase: arg1, export_columns: "Ph,Nq,Cp,Co,Nr,Td" });
      const [kd] = await call({ type: "phrase_kdi", phrase: arg1, export_columns: "Ph,Kd" }).catch(() => [undefined]);
      out = {
        source: "semrush", database: db, keyword: arg1,
        volume: ov ? Number(ov["Search Volume"]) : null,
        difficulty: kd ? Number(kd["Keyword Difficulty Index"] ?? kd["Keyword Difficulty"]) : null,
        cpcUsd: ov ? Number(ov["CPC"]) : null,
        competition: ov ? Number(ov["Competition"]) : null,
        numResults: ov ? Number(ov["Number of Results"]) : null,
      };
      break;
    }
    case "batch": {
      // arg1 = "kw1;kw2;..." (up to ~100). Two API calls: phrase_this (vol/cpc/comp) + phrase_kdi (KD).
      // Returns merged rows; keywords with no data are omitted. Efficient for KD-screening candidate lists.
      const vol = await call({ type: "phrase_this", phrase: arg1, export_columns: "Ph,Nq,Cp,Co,Nr" });
      const kdi = await call({ type: "phrase_kdi", phrase: arg1, export_columns: "Ph,Kd" }).catch(() => []);
      const kdMap = new Map(kdi.map(r => [String(r["Keyword"]).toLowerCase(), Number(r["Keyword Difficulty Index"] ?? r["Keyword Difficulty"])]));
      out = {
        source: "semrush", database: db, count: vol.length,
        keywords: vol.map(r => {
          const key = String(r["Keyword"]).toLowerCase();
          return {
            keyword: r["Keyword"],
            volume: Number(r["Search Volume"]),
            kd: kdMap.has(key) ? kdMap.get(key) : null,
            cpcUsd: Number(r["CPC"]),
            competition: Number(r["Competition"]),
          };
        }).sort((a, b) => (a.kd ?? 999) - (b.kd ?? 999)),
      };
      break;
    }
    case "related":
      out = { source: "semrush", database: db, seed: arg1,
        keywords: await call({ type: "phrase_related", phrase: arg1, export_columns: "Ph,Nq,Cp,Co,Nr,Td", display_limit: limit, display_sort: "nq_desc" }) };
      break;
    case "questions":
      out = { source: "semrush", database: db, seed: arg1,
        questions: await call({ type: "phrase_questions", phrase: arg1, export_columns: "Ph,Nq,Cp,Co,Nr", display_limit: limit, display_sort: "nq_desc" }) };
      break;
    case "broad":
      out = { source: "semrush", database: db, seed: arg1,
        keywords: await call({ type: "phrase_fullsearch", phrase: arg1, export_columns: "Ph,Nq,Cp,Co,Nr", display_limit: limit, display_sort: "nq_desc" }) };
      break;
    case "serp":
      out = { source: "semrush", database: db, keyword: arg1,
        results: await call({ type: "phrase_organic", phrase: arg1, export_columns: "Dn,Ur", display_limit: limit }) };
      break;
    case "domain": {
      const p = { type: "domain_organic", domain: arg1, export_columns: "Ph,Po,Nq,Cp,Ur", display_limit: limit, display_sort: "nq_desc" };
      if (filter) p.display_filter = `+|Ph|Co|${filter}`;   // keep only keywords CONTAINING <filter> — cannibalization
      out = { source: "semrush", database: db, domain: arg1, filter: filter || null, keywords: await call(p) };
      break;
    }
    case "url":
      out = { source: "semrush", database: db, url: arg1,
        keywords: await call({ type: "url_organic", url: arg1, export_columns: "Ph,Po,Nq,Cp", display_limit: limit, display_sort: "nq_desc" }) };
      break;
    default:
      console.error("Unknown command. See header of scripts/semrush.mjs for usage."); process.exit(1);
  }
  console.log(JSON.stringify(out, null, 2));
} catch (e) {
  console.error("FAILED:", e.message);
  process.exit(1);
}
