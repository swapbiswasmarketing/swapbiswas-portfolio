---
description: Diagnose and fix the ONE highest-leverage gap on an existing swapbiswas.com post to move it up the SERP (the "optimize before writing new" strategy)
argument-hint: [slug] (optional - omit to pick the best prize page or an overdue Review ledger row)
---

# Optimize an Existing Post for swapbiswas.com

At DR 11, optimizing an existing page that targets a winnable keyword beats writing a new URL - it is the **#1 lever in the SEO strategy** (the page already exists, it just is not ranking). This command finds the single highest-leverage fix on one existing post, applies it, re-verifies, and logs the outcome. It is the read-side companion to `/swapblog`.

**`BLOG_INSTRUCTIONS.md` is the source of truth** for writing, formatting, image, schema, and fact-check rules. This command adds the diagnose-and-fix process around it.

**Target:** $ARGUMENTS

## Context (auto-loaded)
@BLOG_INSTRUCTIONS.md
@.claude/MEMORY.md

Run autonomously with a TodoWrite list (steps 0-7). Stop only if the pick is ambiguous or the page cannot be won at current authority.

## Step 0 - Read the rules + the ledger
- Read the two auto-injected files. Read the backlog + **Review ledger** at `~/.claude/projects/c--Website-portfolio/memory/project_keyword_backlog.md` and the SEO strategy memory `project_seo_organic_strategy.md`.
- Pre-flight: `SEMRUSH_API_KEY` (Semrush) and `LT_USERNAME` + `LT_ACCESS_KEY` (browser-cloud fact-check fallback). Ahrefs MCP is frequently out of units - check `subscription-info-limits-and-usage` before relying on it.

## Step 1 - Pick ONE target
- If a slug was given, use it (confirm `src/content/blog/<slug>.md` exists).
- If empty, choose the highest-leverage candidate from: (a) **Review ledger rows past `review_due`**, and (b) the strategy doc's **prize pages** that already exist and target winnable (KD < 15) terms - `aeo-vs-seo` (already ~position 31 for "seo vs aeo", closest to a breakthrough), `product-positioning` (KD 7), `what-is-product-marketing` (KD 10), `marketing-automation-workflows` (KD 1), `competitive-analysis-examples` (KD 6, high traffic potential), `what-is-b2b-demand-generation` (KD 6).
- Prefer the page in **striking distance** (position 11-30): the smallest push for the biggest gain. State the pick and why.

## Step 2 - Get live rank (no GSC)
swapbiswas.com is **NOT** in the Ahrefs GSC workspace, so use third-party rank:
- Ahrefs `site-explorer-organic-keywords` with `target` = the exact URL, `mode: exact`, `select: keyword,volume,difficulty,position`; find the primary keyword and any striking-distance keywords (position 11-30).
- If Ahrefs is out of units, fall back to `node scripts/semrush.mjs url https://swapbiswas.com/blog/<slug>/ us` (exact-URL positions), or a live WebSearch of the primary keyword to see where the page sits.
- Record the current position. If the page ranks nowhere in the top 100, the gap is authority/relevance, not an on-page tweak - see the Guardrails.

## Step 3 - Diagnose the ONE gap
WebFetch the current top-3 ranking pages for the primary keyword and compare. Identify the **single highest-leverage gap** (do NOT rewrite the whole post):
- **Thin/missing section** the top-3 all cover and this post lacks.
- **Missing schema** - no `faqs:` (FAQPage), or no `howTo:` for a genuine ordered procedure.
- **Stale/unverifiable stat** - a number now wrong or older than 5 years.
- **Weak title/description CTR** - vague or missing the keyword; a sharper title lifts clicks at the same rank.
- **Missing/mismatched answer box** - no snippet-shaped lead for a keyword whose live SERP shows a featured snippet or PAA (match the snippet shape: paragraph/list/table).
- **Under-linked** - not wired into its topic cluster (no hub up-link, few inbound spokes).
Pick ONE and state it explicitly.

## Step 4 - Apply the fix (per BLOG_INSTRUCTIONS)
- Make the single targeted change; preserve the existing voice and structure.
- Any NEW or CHANGED stat must be verified on its exact source URL (WebFetch, or `node scripts/testmu-fetch.cjs <url>` if bot-blocked) and must NOT already anchor another post - grep the number across `src/content/blog/*.md`.
- If adding a diagram, follow the `/swapblog` Step 9 rules (design system, `convert-svg-batch.cjs`, view the WebP, keep it under ~100 KB).

## Step 5 - Freshness gate (CRITICAL - never fake recency)
- Set `updatedDate: <today>` **ONLY if a substantive content change shipped this pass** (new section, new/updated stat, materially rewritten answer).
- **Never** bump `updatedDate` for a cosmetic, schema-only, link-only, or title-only edit, and **never** touch `publishDate` (immutable once set). Faking freshness trips Google's search-engine-first-content guidance and is the exact failure the strategy doc warns about.

## Step 6 - Verify + build
- Punctuation gate (**Bash tool**, not PowerShell): `LC_ALL=C.UTF-8 grep -nP "[\x{2012}-\x{2015}\x{2018}\x{2019}\x{201C}\x{201D}\x{2190}-\x{2194}]" src/content/blog/<slug>.md` - exit 1 = clean; exit 0 = fix the flagged chars; exit 2 = tooling error, not a pass.
- Every internal-link slug resolves.
- `npm run build` completes with no errors (Pagefind included). Confirm `dist/blog/<slug>/index.html`; view the OG image only if the title changed.

## Step 7 - Log the outcome + report
- Update the Review ledger row: `status` -> `optimized` (or `reviewed` if no change was warranted), `last_checked` = today, `last_pos` = current position. Keep the `MEMORY.md` pointer in sync in **both** locations if anything summary-level changed.
- Report: URL, primary keyword + current position, the ONE gap fixed, whether `updatedDate` was bumped (and why), and the build result. **Do not commit** unless the user explicitly asks.

## Guardrails
- **Optimize, do not rewrite** - change only the diagnosed gap.
- The Step 5 freshness gate is non-negotiable; canonical and dates are never gamed.
- No fabricated or reused stats.
- If the page targets a keyword it cannot win at current authority (ranks nowhere, DR-70+ SERP), say so and recommend a **reframe or a distribution/authority play** (`/swapblog` Step 15) instead of futile on-page edits.
- Never write a Semrush/Ahrefs API key into a committed file - env only.
