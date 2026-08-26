---
description: Research a low-KD keyword and write a fully SEO-optimized, fact-checked blog post for swapbiswas.com
argument-hint: [topic or keyword] (optional - omit to pull the next item from the keyword backlog)
---

# Write a New Blog Post for swapbiswas.com

You are writing a new, publish-ready blog post for the **swapbiswas.com** portfolio + blog (Astro 5 static site, single author: Swapnil Biswas, a Senior Product Marketing Manager). Work through this pipeline end to end.

**`BLOG_INSTRUCTIONS.md` is the source of truth** for every writing, formatting, image, schema, and fact-check rule. This pipeline adds the *process* around it (research gates, differentiation, quality audits) that `BLOG_INSTRUCTIONS.md` does not cover. If the two ever conflict, `BLOG_INSTRUCTIONS.md` wins.

**Topic:** $ARGUMENTS
_(If the line above is empty, this is a backlog run: pull the next uncovered item per Step 3 and honor the Step 5 checkpoint.)_
_Optional modes (plain-language, not a strict parser): lead `$ARGUMENTS` with **"research only"** to run Steps 0-4 and stop at the Step 5 report (write nothing), or **"discovery"** to run only the Step 3 discovery routine + the Step 14 backlog refill. Append **"--no-dist"** to skip Step 15. To improve a named existing post, run the companion **`/swapblog-optimize`** command._

Run autonomously. **Immediately seed a TodoWrite list with one item per step (0-15)** and mark each done as you finish it. Only stop at the one checkpoint marked below, or when a genuine fork needs the user's judgment.

## Context (auto-loaded before you plan)
The two source-of-truth files are injected here - read them in full before planning:
@BLOG_INSTRUCTIONS.md
@.claude/MEMORY.md

---

## Step 0 - Read the rules first
- Read the two files auto-injected above in full: `BLOG_INSTRUCTIONS.md` (source of truth for writing/formatting/image/schema/fact-check) and repo `.claude/MEMORY.md` (hard conventions: no em-dashes, WebP-only images, stock-1..4 hero rule, View-Transition script pattern, analytics events, and the **SEO organic strategy** - DR 11, ~0 traffic, so target winnable low-KD long-tails and lean on AEO).
- Read the keyword backlog at `~/.claude/projects/c--Website-portfolio/memory/project_keyword_backlog.md` (Claude persistent-memory dir, **NOT** the repo - it does not exist under `c:\Website\portfolio`). Its opportunity tiers and footprint table (Step 6) drive backlog runs.
- Pre-flight: the pipeline needs `SEMRUSH_API_KEY` (Semrush) and, only for the browser-cloud fact-check fallback, `LT_USERNAME` + `LT_ACCESS_KEY`. If a key is missing, fall back per each step's tool-priority order rather than failing.

## Step 1 - Niche-fit gate
Answer in one sentence: **"Why is swapbiswas.com / a working PMM a credible voice on this topic?"**
Acceptable: product marketing, GTM, SEO, AEO/GEO, demand gen, sales enablement, competitive intel, marketing careers, or marketing-adjacent craft the author actually practices.
Not acceptable: "the keyword has volume" or "it's trending" alone.
If the topic is off-brand (e.g. generic consumer finance, unrelated tech tutorials), say so and propose a better-fit angle **before** spending research units. Do not write off-brand filler - it will not rank without authority and it dilutes the site's topical focus.

## Step 2 - Existing-coverage gate (MANDATORY dedup before spending anything)
Do NOT do this loosely or from memory - run the check mechanically and read the output before spending any research. For each head term of the candidate (the 2-3 core words, e.g. `win loss`, `gtm engineer`, `product marketing metrics`), run:

```
grep -ril "<head term>" src/content/blog/ src/pages/tools/
```

**Both directories, always.** Greping only `src/content/blog/` is how two keywords collided with existing `/tools/` pages that already ranked for them - a tool page is a competing URL for the same term exactly like a post is. Current tool slugs (re-list with `ls src/pages/tools/` rather than trusting this line to stay current):
`battlecard-generator` | `buyer-persona-generator` | `campaign-name-generator` | `case-study-template` | `go-to-market-strategy-template` | `product-launch-plan-template` | `product-one-pager-template` | `value-proposition-canvas-generator`
If the candidate keyword is a `template`/`generator`/`checklist` term, assume a tool page owns it until the grep proves otherwise, and read the Step 4 `route-to-tools` verdict before writing prose.

For every file it returns, inspect that file's own H2s and FAQ questions (`grep -nE "^#|q: " src/content/blog/<match>.md`) - a near-synonym buried as a **section or FAQ inside a broader post** is the exact cannibalization this catches, and it will NOT show up as a slug/title match (a "12 questions" section inside a "what is win-loss" pillar is the real example that slipped through once). When a Semrush key is available, also run `node scripts/semrush.mjs domain swapbiswas.com us 50 <keyword-stem>` to see whether the domain already ranks a URL for the term. Then decide:
- **Already covered / ~60%+ topical overlap** on the same intent - including a dedicated section or FAQ inside another post - -> STOP. Recommend **optimizing that existing post** instead (keeps its links/equity; a new post splits and cannibalizes it) - run the companion **`/swapblog-optimize`** command on it. Name the file and escalate.
- **Adjacent but different primary keyword** (a legitimate pillar/spoke) -> proceed ONLY if the new post targets a **distinct primary keyword AND goes deeper** than the existing section; plan the hub -> spoke interlink (Steps 8 + 12) and note it in the Step 14 report.
- **Not covered** -> proceed.
Never create a reskin of an existing post with a swapped palette/angle.

## Step 3 - Keyword research (low-KD, long-tail, winnable at DR 11)
Tools, in priority order:
1. **Semrush** via `node scripts/semrush.mjs <cmd>` (needs `SEMRUSH_API_KEY` in env; never on the command line, never committed): `balance` first, then `batch "kw1;kw2;..."` (volume + KD for up to ~100 candidates, sorted by KD - the screening workhorse), `overview "<kw>"`, and `broad`/`related`/`questions "<seed>"` for discovery (volume only; filter out LLM-junk phrases). Volumes are **exact-match US** and read low; CPC is USD - label the source.
2. **Ahrefs MCP** (`keywords-explorer-overview`, `select: keyword,volume,difficulty`) only if the Semrush key is absent - check `subscription-info-limits-and-usage` first (50-unit minimum per call; often exhausted).
3. If both are down, **live SERP analysis** via WebSearch - who ranks + their authority is the best free predictor of rankability.

- If a topic was given, expand it into 15-30 long-tail candidates and KD-screen with `semrush.mjs batch`. If no topic, this is a backlog run: take the top uncovered item from the keyword backlog (`~/.claude/projects/c--Website-portfolio/memory/project_keyword_backlog.md`). **Re-validation is mandatory, not optional** - re-run `overview` (exact volume + KD) and the Step 4 live-SERP verdict before writing any backlog item; never write it on its stored numbers alone (the backlog is a point-in-time Semrush snapshot, and a low stored KD can hide a high-DR live SERP). If it now fails, skip it and take the next.
- **If the "write next" tier is empty** (do not dead-end), in order: (a) surface any post past its Step 14 review date for a **refresh** at the Step 5 checkpoint - at DR 11 a refresh of a striking-distance post usually beats a new URL; (b) else **promote a conditional item** from the "authority-building later" tier that passes a fresh Step 4 live-SERP check; (c) else **run discovery** (`semrush.mjs related/questions/broad` off top posts or the backlog seeds), KD-screen <= ~15, pass survivors through Step 1 + Step 2, file them into the correct tier, and write the lowest-KD winnable survivor. Only stop if nothing clears the gate.
- **KD target (DR-11 site, near-zero referring domains - KD is a strong prior, not a soft nicety):** default to genuinely winnable long-tails at **KD <= ~15 (ideal 0-10)**. Treat **KD ~15-30 as conditional** - pursue only if the Step 4 SERP check shows weak/personal sites on page 1 or a rising/unconsolidated topic, and record that justification in the Step 14 report. Do not queue KD 20-30 head-ish terms as default "write next" work just because KD < 30 (the backlog reflects this: KD 19-29 items sit in an "authority-building later" tier, not "write next"). The screening number here is **Semrush KD**, a different scale from Ahrefs KD - anchor the final call on live SERP composition (Step 4), not the number alone.
- **The KD trap (read this before trusting any low number).** A low KD is **not evidence that a keyword is winnable**. It is only evidence that the pages *currently ranking* have few backlinks pointing at those specific URLs. Ahrefs KD counts referring domains to the **ranking URLs**, not to the **domains** that own them, so a SERP that is wall-to-wall DR 80+ brands reads as **KD 0-4** whenever those brands rank with fresh or lightly-linked pages. That is the single most expensive failure mode in this pipeline: on the last audited run, **6 of 12 keywords picked at KD 0-4 died on the live-SERP check**. KD screens candidates IN for a look; only Step 4 screens them IN for writing. A KD of 0 on a SERP owned by HubSpot, Gartner, and Salesforce means "these giants have not bothered to build links to these pages", not "this is open".
- **Target the cluster, not one term.** Group the KD-screened survivors into their topic cluster and anchor the post on the **lowest-KD winnable term as the PRIMARY keyword**; list the sibling long-tails it will also cover as **secondary keywords** and map them to H2s and FAQs, so the page's ceiling is the whole cluster, not one exact-match phrase. If a chosen term has an obvious broader parent that is still low-KD, target the parent. When Ahrefs units are available, confirm the primary term's Parent Topic via `keywords-explorer-overview` (`select: keyword,volume,difficulty,parent`) and prefer the parent when it is winnable.
- **Volume/effort floor:** a standalone post needs exact volume **>= ~50**, OR a combined cluster potential **>= ~150**, OR a demonstrated PAA/snippet AEO opportunity. Below that, fold the term into an existing post as an H2/FAQ rather than minting a new URL.
- **Prefer question/PAA-shaped keywords** whose LIVE SERP (verify in Step 4) actually shows a featured snippet or People-Also-Ask box - at DR 11, snippet/PAA/AI-Overview capture is the realistic near-term win. Skip the answer-box play for keywords whose SERP shows no snippet/PAA opportunity.
- Volumes default to the **US** database; for a geo-sensitive topic, sanity-check volume by country (Ahrefs `keywords-explorer-volume-by-country` or a Semrush db switch) and pick the database matching the intended audience.

## Step 4 - SERP analysis + winnability/intent verdict ("Our angle")
WebFetch the top 2-3 ranking pages. Note their structure, depth, and any stats. Then build:

| What ALL of them cover | What NONE cover well | Our angle |
|---|---|---|

The **"Our angle" column is the article's reason to exist** - usually the first-hand PMM operator's view (what actually happens on a real team), a sharper framework, or a cleaner decision rule. If you cannot fill it concretely, pick a different keyword.

**Citability sub-check:** note whether the angle yields at least one standalone, extractable asset an AI engine or another writer could lift and cite - an original stat you compiled, a small original framework/table, or a free template/checklist (a genuine reusable methodology counts; a dressed-up Capitalized label does NOT - that collides with the Step 8 anti-invented-label rule). Soft gate: if none exists, add one before writing or record `linkable asset: none` in the Step 14 report.

**Winnability + intent/format gate (record exactly one verdict).** From page 1, assess:
- **Authority (hard gate, not a vibe check).** List page 1 as a table of `position | domain | rough DR | is it pulling real traffic?` before writing any verdict. **A `winnable` verdict requires at least ONE page-1 result from a sub-DR-40 domain that is actually pulling traffic** (a real ranking page, not a forum thread, a scraper, a job board, or a dead 2018 post). That page is the existence proof that Google will seat a small site on this SERP. **No such page means the SERP is closed to a DR 11 site: the verdict is `reframe` or `drop`, no matter how low the KD reads.** A low stored KD in the backlog does NOT override a high-DR live SERP - re-check the live SERP even for backlog picks (including any "open window" note) and let SERP evidence set the verdict. Record the sub-DR-40 proof page (URL + rough DR) in the Step 14 report; if the field is empty, the verdict may not be `winnable`.
- **Intent:** informational / commercial-investigation / transactional / navigational.
- **Format:** article, interactive tool/calculator, downloadable or gated template, listicle, or product/category page. **A blog markdown post can only win an article-format SERP.** If page 1 shows a **featured snippet, record its shape** (paragraph / numbered-list / bulleted-list / table) - Google lifts the shape it already displays, so Step 8 will match it.

Record one verdict and carry it into Step 5 and the Step 14 report:
- **winnable** - the sub-DR-40 proof page exists, weak spots exist, and the winning format is an article; proceed head-on. (No proof page = not `winnable`, whatever the KD says.)
- **reframe** - high-DR or borderline SERP, but a narrower long-tail / AEO / featured-snippet angle can still earn placement; proceed on that angle and state the reframed keyword.
- **route-to-tools** - intent genuinely wants a tool or template; the site already ships template/generator tools, so route it to the `TOOL_INSTRUCTIONS.md` `/tools` pipeline instead of writing prose. Do not duplicate that format as an article.
- **drop** - wall-to-wall high-DR, non-article format, no viable long-tail/AEO reframe; pick the next candidate.

## Step 5 - Checkpoint (only if no explicit topic was given)
If invoked **with** a specific topic, proceed straight to Step 6. If invoked **without** one (backlog/auto pick) or the top candidates are close, present a short summary - chosen keyword (vol + KD + source), the Step 4 **verdict**, the differentiation angle, and the archetype - and get a quick confirm before writing.
**Pre-authorized runs:** if the operator already said to run autonomously ("run the backlog", "write the next N", "test with some posts"), that satisfies this checkpoint - proceed without pausing, but still fold the summary into the Step 14 report. Only actually stop when the pick is genuinely close or ambiguous and no pre-authorization was given.

## Step 6 - Pick archetype + vary the footprint (persisted)
Match the site's proven archetypes to intent: **"X vs Y"** comparison / **"What is X"** definitional (strong AEO) / **"How to X"** guide / **"X template / checklist / examples"**.
Read the **Footprint log table at the bottom of the backlog file** (`~/.claude/projects/c--Website-portfolio/memory/project_keyword_backlog.md`, the `## Footprint log` section; columns: `slug | archetype | opening-hook | answer-box y/n | origin`). Read the last 3 rows and pick an **archetype** AND an **opening hook** (stat-led / problem-led / scenario-led) that each differ from at least the last 2 logged posts; also make the **answer-box/TL;DR decision** (Step 8) differ from the recent run. Do not open every post with a stat. If the table is missing or empty, seed it by scanning the 3 newest posts in `src/content/blog/` first.

**Intra-batch anti-sameness (MANDATORY when more than one post is written in a single run).** The footprint log varies style *across* batches and does nothing *within* one, which is how 6 of 10 posts written on the same day all opened with a near-identical "here is the claim I will defend for the rest of this post" thesis, and two interlinked posts opened with the same minute-stamped scenario device. Readers and crawlers see those posts side by side on the blog index, so sameness inside a batch is more visible than sameness across months. Before dispatching any writer:
1. Build a **batch assignment table** up front and keep it in context for the whole run: `slug | archetype | opening device | answer-box y/n`.
2. **Every opening device in the batch must be distinct.** Assign a specific device per post, not just a category - e.g. `cold-open scenario (no timestamp)`, `contrarian claim`, `single compiled stat`, `reader question`, `concrete artifact walkthrough`, `before/after`, `definition correction`. Two posts may share the archetype; they may not share the device.
3. **Pass every writer the full batch table, not just its own row**, with the instruction: *these devices are taken by other posts in this batch - you may not use any of them, and you may not use a minute-stamped or clock-stamped scenario ("9:14am on a Tuesday") if another post in the batch was assigned a scenario opener.*
4. **The Step 8 "state the angle in the intro" rule is what mechanically produces the sameness** - it is still required, but the angle must be *placed and phrased differently per post*. Vary where it lands (first line vs after a concrete example vs closing the intro) and forbid the literal template "here is the claim I will defend". Spot-check the finished batch: read the first 3 sentences of every post in one pass; if two read as the same move, rewrite one before Step 13.
5. Append every post's row to the footprint log at Step 14 as usual, so the batch also varies against future batches.

**Writer-agent scope (hard boundary).** A writer agent working one post creates **ONLY** its own post file (`src/content/blog/<slug>.md`) and its own assets folder (`public/assets/blog/<slug>/`). It must **NOT**: create or edit any page under `src/pages/` (a writer agent once invented an unrequested `/tools` page entirely outside its brief), edit any other post, edit shared files (`LINKEDIN_POSTS.md`, the backlog, `MEMORY.md`, `FIRST_HAND_UPGRADES.md`), or run `npm run build`. Reciprocal link edits (Step 12), backlog and shared-file updates (Step 14), distribution (Step 15), and the single build (Step 13) are the **orchestrator's** job, run once after all writers finish - concurrent writers editing shared files corrupt each other's work. If a writer believes a tool page or an edit to another post is warranted, it **reports that as a recommendation** in its handoff and does not act on it.

## Step 7 - Gather + verify source material
- Collect stats **only from primary sources < 5 years old**.
- **Verify every stat by fetching its exact URL** (WebFetch); confirm the number is on that page. If WebFetch returns a nav/shell, use `node scripts/testmu-fetch.cjs <url>` (needs `LT_USERNAME` + `LT_ACCESS_KEY`).
- Discard anything unverifiable on its exact page: zombie stats, paywalled Gartner/Forrester, secondary sources misquoting primaries. Fewer accurate stats beat many impressive-but-unverifiable ones.

## Step 8 - Write the post
Per `BLOG_INSTRUCTIONS.md`:
- **File:** `src/content/blog/<primary-keyword-hyphenated>.md`
- **Frontmatter:** `title` (see the hard ceiling below), `description` (see the hard band below), `publishDate` = today (**omit `updatedDate` on a new post** - it is optional in the Zod schema and the template only renders an "Updated" badge when `updatedDate` > `publishDate`, so setting it now is dead metadata and masks a later real refresh), `category` (existing set only: AI, SEO, Marketing, Tools, Product Marketing, Career, Email, Design, Travel), `img` (**stock-1..4 only**; enforce the no-adjacent-duplicate rule - since new posts get today's date and several existing posts already share it, list the top ~6 posts sorted by `publishDate` desc then filename asc, find where your filename inserts, and pick a `stock-N` that differs from the posts immediately before **and** after that slot), `img_alt`, and a `faqs:` array of **3-5 real-query FAQs** (drives FAQ schema; fold in the secondary cluster keywords). For a genuine **"How to X"** post where each H2 is a real sequential step, also populate the optional `howTo:` frontmatter object (`name` + ordered `steps` mirroring the H2s) so the template emits HowTo JSON-LD - a machine-readable/AEO signal and corpus schema consistency (3 of 9 how-to posts already set it). Skip it for conceptual how-to posts that are not literal step sequences.
- **`title` - HARD CEILING 60 CHARACTERS.** Not a target, not "aim for": **61 characters fails Step 13 and does not ship.** The blog template renders the frontmatter title verbatim into the `<title>` tag (`src/components/MainHead.astro` does `<title>{title}</title>` with **no site-name suffix**), so the frontmatter count IS the count Google truncates. Rules:
  - **Front-load the primary keyword** - it starts the title, ideally at character 1, and must sit fully inside the first 60 characters. A keyword pushed past the truncation point is the same as not having it.
  - **Descriptive, no exclamation marks.** If a listicle, the number in the title must equal the actual item count.
  - **The year is the first thing you drop.** `(2026)` costs 7 characters. When the title does not fit, **drop the year rather than truncating the keyword or the value proposition** - a year stamp is a nice-to-have freshness signal, the keyword is the reason the page exists. Never shorten by deleting the keyword to keep `(2026)`.
  - Drop next, in order: the trailing benefit clause, then the subtitle after the colon. Never sacrifice the front-loaded keyword.
  - This is the defect that put **95 of 142 indexable titles over 60 characters** and truncated them in Google. Count the characters before you move on; do not estimate.
- **`description` - HARD BAND 140-165 CHARACTERS.** Under 140 or over 165 fails Step 13. The old "150-160" guidance was advisory and was simply ignored, letting live descriptions drift from **32 to 183 characters** (including one post that shipped the literal placeholder `A brief description for SEO`). Write it as a real sentence that earns the click, with the primary keyword used naturally - never a placeholder, never a truncated fragment, never the first line of the post copy-pasted.
- **Body:** open with the chosen hook; H2/H3 structure; short 2-3 sentence paragraphs; a comparison table where it fits; **primary keyword in title, H1, first paragraph, 2+ H2s, and the conclusion**, used 4-6x naturally; bold key stats. The **Step 4 "Our angle" must appear as an explicit, stated point of view in the intro** (a claim the author will defend, not a neutral summary) and be returned to in the conclusion - if the draft would read the same with the angle removed, the angle was decorative; rewrite.
- **Scannability + citation (cheap AEO wins):** favor scannable structure - roughly **60-70% bullets/tables to 30-40% prose**, not wall-to-wall paragraphs. **Every H2 that makes a data claim carries at least one linked primary-source citation** (which then enters the Step 10 fact-check table). Both rules stay subordinate to `BLOG_INSTRUCTIONS.md` on any conflict.
- **Experience (E-E-A-T), the site's core differentiation:** write in the first-person PMM voice and lead with concrete, specific operator detail over voice-of-authority filler. Where genuine first-hand detail is available (author-supplied or drawn from an existing post), ground at least one point in a specific lived scenario - a named tool + exact outcome, or company stage + team size + what broke + what changed. **HARD RULE: never invent a personal campaign, metric, employer, tool outcome, or result the author did not actually provide** - fabricated first-hand experience is a worse failure than genericness and violates the fact-check discipline. If no genuine first-hand detail exists for this topic, use specific named public examples instead and record `first-hand artifact: none (synthesized)` in the Step 14 report so the user can add one.
- **NO HTML COMMENTS IN SHIPPED MARKDOWN - EVER.** Markdown comments are **not** stripped by the build; they pass straight through into production HTML and are readable in view-source. Placeholder slots such as `<!-- FIRST-HAND SLOT: ... -->` shipped to the live site this way and published the employer name and the internal content process to anyone who viewed source. There is no acceptable inline TODO, slot, note, or reminder in a `.md` file - not for first-hand gaps, not for anything.
  - **Record the first-hand gap in the side file instead:** append a `## <slug>` section to `FIRST_HAND_UPGRADES.md` at the repo root (it already exists and has the format) containing one specific question whose answer would upgrade the post from `synthesized` to `first-hand`, plus where in the post the answer belongs. That file is not part of the built site, so nothing leaks. Write the post so it **reads as complete without the answer** - the upgrade is an improvement, never a blocker, and never a visible hole.
  - In a multi-post batch this file is a **shared file**, so per the Step 6 scope rule the **orchestrator** appends these sections after the writers finish; a writer returns its question in its handoff.
  - Gate (Step 13): `grep -n "<!--" src/content/blog/<slug>.md` must return **nothing** (exit 1).
- **Answer box (archetype-conditional, footprint-tracked - NOT every post):** for **"what is", "X vs Y", and listicle** archetypes, lead the body with a snippet-liftable direct-answer / TL;DR box whose **format matches the Step 4 snippet shape** - a list snippet gets a compact lead list, a table snippet a small lead table, and a paragraph snippet (or no snippet) defaults to a **40-60 word prose box**. A prose box is structurally ineligible for a list/table snippet, so matching the shape is the difference between eligible and a guaranteed miss. Also phrase at least one H2 as the head question with a concise 1-2 sentence answer as its first sentence. Use it deliberately per the Step 6 footprint decision, not by default; for non-AEO archetypes keep the compelling-stat/hook opener from `BLOG_INSTRUCTIONS.md`.
- **Internal links:** 2-3+ contextual links to related existing posts - verify each slug exists in `src/content/blog/`. Link each source URL only once (first mention); no duplicate hrefs. **One forward link must point UP to the cluster hub** - the existing post targeting the Step 3 parent/broadest term - with a descriptive, varied anchor (never a forced exact-match keyword). If no post covers the parent term, do not invent one; flag it for Step 14.

**Avoid the AI-writing tells** (they read as machine-written and cheapen the voice):
- No em-dashes (hard rule) and no smart quotes or unicode arrows - plain ASCII only.
- No negative-parallelism crutch ("It's not X - it's Y") as a repeated device, no "Here's the kicker", "Let's dive in", "In today's digital landscape", "It's no secret".
- No self-posed drama questions ("But what does that mean? Well...") and no signposted filler ("In conclusion,").
- No invented, Capitalized concept-labels dressed up as established terms.
- **No vague authority attributions** - "studies show", "research suggests", "experts agree", "teams report", "many marketers find", "it's widely known", "most B2B teams". Each is both an AI tell and an E-E-A-T anti-signal (authority asserted with no traceable source and no first-hand basis), and it silently bypasses the Step 10 fact-check table. Rewrite each as EITHER a linked named primary source (which then enters the Step 10 table) OR an explicit first-person claim the author can stand behind ("In the launches I've run..."). This does not apply to obvious/general statements that make no research claim.
- Every sentence teaches something specific or helps the reader decide. Zero filler transitions.

## Step 9 - Branded diagram(s)
- Build **1+ SVG** per the `BLOG_INSTRUCTIONS.md` diagram design system (auto-injected above - see its **SVG Diagrams** section for exact colors, `rx`, arrow rules, minimum text sizes, and the `title y>=62` / `first row y>=130` padding). The most-violated rules: teal `#5eead4` arrows as `<line>` + `<polygon>` heads (never `<marker>`, never `#484f58`), and body text >= 20px. Save to `public/assets/blog/<slug>/`.
- Convert: `node scripts/convert-svg-batch.cjs public/assets/blog/<slug>/*.svg`
- **Size cap:** after conversion, confirm each output WebP on disk is under ~100 KB (`convert-svg-batch.cjs` encodes at quality 90 with no cap); if larger, re-encode at lower quality or simplify the diagram.
- **MANDATORY: read/view the output WebP** and run the BLOG_INSTRUCTIONS visual-verification checklist - no text overflow or edge-clipping, arrows connect the right cards and point the right way, all text readable. Fix the SVG and re-render until clean. Self-verify; never rely on the user to catch layout bugs.
- Reference as `![alt](/assets/blog/<slug>/<file>.webp "title")`.

## Step 10 - Fact-check table (mandatory, non-negotiable)
Before delivering, build and complete this table for every stat/number/price/claim:

| Claim | Source URL | On the exact page? | Action |
|---|---|---|---|

- WebFetch each URL and confirm the exact figure appears on it (web-search snippets are NOT verification). If WebFetch returns a shell/nav, use `node scripts/testmu-fetch.cjs <url>`.
- Trace to the primary source; never cite a blog quoting McKinsey when McKinsey is reachable.
- **Independent re-check:** for the 2-3 load-bearing stats, re-open each cited URL in a fresh pass (do not rely on your own notes) and confirm the exact number; for a critical claim, consider the `deep-research` skill to verify adversarially. Any stat that fails a clean re-fetch is **removed, not softened**.
- **Stat non-reuse:** grep the headline stat/number across `src/content/blog/*.md`; if it already anchors another post, pick a fresh primary stat so no single number leads two posts.
- Remove or rewrite anything that fails.

## Step 11 - People-First Audit (answer in writing, include in the report)
1. Who exactly is the reader? (role + company stage + the decision they're making - not "marketers")
2. What will they DO differently after reading? (a concrete action)
3. What original value does this add to the SERP? (the Step 4 "Our angle" - point to the **exact sentence(s)** in the body where it is asserted; if you cannot, it was not executed)
4. Will the reader need to search again? If yes, fix the gap.
Vague answers fail - revise and re-audit until all four are concrete.

## Step 12 - Reciprocal internal links (de-orphaning + hub-and-spoke)
Edit **at least 3 existing related posts** to add a contextual link TO the new post, so it is not orphaned and receives internal link equity. **Make one of these edits the hub -> new-spoke down-link** (the Step 8 cluster hub links down to this post), completing the cluster in both directions; the others are relevant de-orphaning links.

**HARD FLOOR: no new post may end this step below 3 inbound internal links.** The old "1-2" wording was a floor so low that pages stayed effectively orphaned - it left **16 pages sitting at 1-2 inbound links**, which is functionally invisible to internal PageRank. Three is the floor, not the target; 4-6 is better where genuinely relevant posts exist. Never manufacture a link from an irrelevant post to hit the number - if fewer than 3 genuinely relevant posts exist, that is a signal the cluster is too thin, so say so in the Step 14 report and link from the closest 3 with honest, varied anchors.

**Verify the count mechanically - do not assume the edits landed** (run in the Bash tool, from the repo root, using absolute paths if the shell's cwd is uncertain):
```
grep -rl "/blog/<slug>/" src/content/blog/ | grep -v "/<slug>.md$" | wc -l
```
Expected output: **`3` or greater**. If it prints 0-2, the edits did not land (wrong slug, wrong link format, or an edit silently failed) - fix and re-run before Step 13. The `grep -v` excludes the new post's own self-references so the number is true inbound links from *other* posts. To see which posts they are, drop the `| wc -l`. Keep the edits natural (one sentence in a relevant section). **Do NOT touch those posts' frontmatter dates** - a single contextual link is not a substantive refresh and must not bump `publishDate` or `updatedDate`. Note the hub used (or a "hub missing - candidate pillar: <parent term>" flag) and which posts you edited in the report.

## Step 13 - Pre-publish checks + build (verify loop, max 3 passes)
- Punctuation gate (broadened beyond the em-dash; **run in the Bash tool, not PowerShell** - PowerShell has no `grep` and prints nothing on error, a false pass): `LC_ALL=C.UTF-8 grep -nP "[\x{2012}-\x{2015}\x{2018}\x{2019}\x{201C}\x{201D}\x{2190}-\x{2194}]" src/content/blog/<slug>.md`. Interpret by **exit code**, never by "looks empty": exit 1 (no output) = clean pass; exit 0 (lines printed) = FAIL, fix each flagged em/en-dash, curly quote, or arrow and re-run; exit 2 or "command not found" = tooling error (wrong shell/locale), NOT a pass. The `LC_ALL=C.UTF-8` prefix is required or `grep -P` errors on a non-UTF-8 locale.
- **Title + description length gate (Step 8 ceilings, enforced not advised).** Run in the Bash tool from the repo root:
```
awk '/^---$/{n++; if(n==2) exit}
     /^title: /{t=$0; sub(/^title: /,"",t); gsub(/^"|"$/,"",t); print (length(t)<=60?"PASS":"FAIL")" title "length(t)}
     /^description: /{d=$0; sub(/^description: /,"",d); gsub(/^"|"$/,"",d); print (length(d)>=140&&length(d)<=165?"PASS":"FAIL")" description "length(d)}' src/content/blog/<slug>.md
```
  Expected output - exactly two lines, both starting `PASS`:
```
PASS title 57
PASS description 158
```
  Any `FAIL` line, or fewer than two lines, blocks publishing. A `FAIL title 68` means cut 8 characters per the Step 8 drop order (year first). Fewer than two lines means the field is missing or malformed - fix the frontmatter. The `n==2` guard stops the scan at the end of the frontmatter, so a `title:`/`description:` line inside a body code fence cannot produce a false reading. Because the punctuation gate above already guarantees plain ASCII, awk's byte count equals the character count.
- **HTML-comment gate (Step 8).** `grep -n "<!--" src/content/blog/<slug>.md` - interpret by **exit code**, same discipline as the punctuation gate: exit 1 (no output) = clean pass; exit 0 (lines printed) = FAIL, delete every comment and move any first-hand gap into `FIRST_HAND_UPGRADES.md`. Unfilled slot comments shipping into production HTML is a live, already-observed defect, not a hypothetical.
- **Inbound-link floor (Step 12).** Re-run the Step 12 count command and confirm it is **3 or greater** before building.
- Every internal-link slug (new post + reciprocal edits) resolves; no duplicate hrefs.
- `npm run build` completes with **no errors** - this runs `astro build` **and** the Pagefind search-index step the deployed site depends on (`npx astro build` alone skips it, so the new post would build but not be searchable).
- Confirm `dist/blog/<slug>/index.html` and `dist/og/<slug>.webp` exist, and **view the OG image** (must match the hero stock background).
- If anything fails: fix and re-run (max 3 passes). Still failing -> HALT and escalate. Never self-attest a pass to get unblocked.

## Step 14 - Update backlog + report
- Update the backlog at `~/.claude/projects/c--Website-portfolio/memory/project_keyword_backlog.md`: mark this keyword written, add new opportunities surfaced (into the correct tier - `write next` only for KD <= ~15, else the `authority-building later` tier), **append this post's footprint row** (`slug | archetype | opening-hook | answer-box y/n | origin`, where `origin` = `first-hand` only if the post carries a genuine operator artifact, else `synthesized`), and **append a Review ledger row** (`status=new, review_due=today+21d, last_pos blank`) so `/swapblog-optimize` can later trigger the "optimize existing pages first" strategy. Keep the `MEMORY.md` pointer in sync in **both** locations (persistent memory dir + repo `.claude/MEMORY.md`).
- **Corpus health:** if the last several logged posts are all `synthesized`, prefer a next topic where genuine first-hand experience exists (aim for roughly 1 in 4 posts `first-hand`).
- **Report (operator-facing skeleton):**
  - Header: `<slug> | <verdict> | KD <n> / vol <n> / <source>`
  - **Decisions:** niche-fit | angle (+ linkable asset) | intent+format | archetype+hook+answer-box | origin (first-hand/synthesized) | hub used or flag
  - **SERP proof (Step 4):** the sub-DR-40 page-1 URL + rough DR that justifies a `winnable` verdict, or `none - reframed/dropped`. A `winnable` verdict with this field empty is a KD-trap pick and must be re-checked.
  - **Gates (Step 13), as measured, not asserted:** `title <n> chars | description <n> chars | inbound internal links <n> | HTML comments: none`
  - **Output:** words | internal links (new N / reciprocal N) | staged distribution (LinkedIn + cross-post, or skipped) | build pass/fail + OG confirmed
  - **First-hand gap:** the `FIRST_HAND_UPGRADES.md` question appended for this slug, or `n/a (first-hand artifact supplied)`
  - Then the completed **Step 10 fact-check table** in full, then the four **Step 11 People-First answers** as a numbered list.
- **Do not commit** unless the user explicitly asks.

## Step 15 - Distribution handoff (stage assets, never auto-post; skip with --no-dist)
For a DR-11 site with near-zero backlinks, distribution is the real ranking lever. After the build passes, stage (do not publish) two assets while the verified angle and stats are still in context, then include them in the final report:
- **LinkedIn draft:** append ONE `[DRAFTED]` post to `LINKEDIN_POSTS.md` via its existing new-blog template block - a 2-line hook from the Step 4 angle, 3-5 bullets, the `?utm_source=linkedin&utm_medium=social&utm_campaign=<slug>` UTM, hashtags, and a Nano Banana image prompt. **Every stat must come from the Step 10 fact-check table** - no new claims. Honor the file's topic rotation.
- **Cross-post queue:** append ONE `Queued` row to the cross-posting tracker (`~/.claude/projects/c--Website-portfolio/memory/reference_crossposting.md`), routed by category per its own fit table (technical/AI -> Dev.to, startup/SaaS/GTM/growth -> HackerNoon, skip PAUSED Hashnode; Medium only per `reference_medium.md` if it fits). Set **canonical = the original `swapbiswas.com/blog/<slug>/` URL** and a post-after date a few days out (index the original first). Never same-day, never auto-publish, never mark Live.

## Guardrails
- **Writer-agent scope (restated from Step 6 because it was violated once).** A writer agent creates **ONLY** its own `src/content/blog/<slug>.md` and its own `public/assets/blog/<slug>/`. **No tool pages, no page under `src/pages/`, no edits to other posts, no edits to shared files, no build.** Anything outside that brief is a recommendation in the handoff, not an action. The orchestrator owns Steps 12-15 and the single build.
- **Nothing self-attests.** Every gate with a command (punctuation, title/description length, HTML comments, inbound-link count, build) is passed by running the command and reading its real output. Never report a gate as passed from memory, from intent, or because the edit "should have" worked.
- Never write the Semrush/Ahrefs API key into any committed file - env var only.
- Word-count targets are completeness floors, not padding goals.
- Year stamps only on genuinely current/researched content.
- **`publishDate` is immutable once set** (never back/forward-date); `updatedDate` is added only on a genuine later content refresh - never on a new post, never on a reciprocal-link edit.