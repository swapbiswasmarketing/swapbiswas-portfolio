# Measurement Baseline

First-party Google Search Console data. Everything before this file was guesswork from
third-party tools; this is ground truth. Re-measure quarterly and append a new section
rather than overwriting, so movement stays visible.

Raw exports live in `.gsc/exports/` (gitignored). Re-pull with `npm run gsc:perf` once
the API credential is working, or export manually from Search Console.

---

## Baseline: 2026-09-03

**Window:** 2025-05-01 to 2026-08-31 (16 months, 488 days). Search type: Web.

### Headline

| Metric | Value |
| --- | --- |
| Impressions | 164,564 |
| Clicks | 186 |
| CTR | 0.11% |
| Average position | 25.4 desktop / 29.3 mobile |
| Pages indexed | 137 |
| Submitted pages not indexed | 4 |
| Pages earning >=1 click | 53 of 157 |
| Queries earning >=1 click | 13 of 1,000 |

**Indexing is not a problem.** 137 of 141 submitted pages are indexed. The 100 "not indexed"
under *All known pages* are the deliberately noindexed concept pages and category archives.

### Trend - impressions are growing fast

| Month | Clicks | Impressions |
| --- | ---: | ---: |
| 2026-03 | 5 | 1,666 |
| 2026-04 | 26 | 30,057 |
| 2026-05 | 19 | 17,561 |
| 2026-06 | 34 | 14,190 |
| 2026-07 | 34 | 46,348 |
| 2026-08 | 59 | 50,214 |

Last 90 days: 110,132 impressions vs 49,809 in the prior 90. **+121%.**

### The core problem: position, not visibility

| Avg position | Queries | Impressions | Clicks |
| --- | ---: | ---: | ---: |
| 1-3 | 12 | 516 | 36 |
| 4-10 | 141 | 8,359 | 4 |
| 11-20 | 206 | 25,781 | 5 |
| 21-50 | 373 | 36,292 | 2 |
| 51+ | 203 | 28,789 | 0 |

63% of impressions sit at position 21 or worse. The site ranks broadly and shallowly.

### Topic split - the strategic surprise

- **SEO / analytics / AI-explainer pages: 106,749 impressions (64%)**
- Everything else, including all B2B product-marketing content: 58,823 (36%)

The corpus is mostly PMM content. The impressions are mostly SEO content.

### Top pages by impressions

| Page | Impressions | Clicks | Position |
| --- | ---: | ---: | ---: |
| /blog/what-is-seo-report/ | 34,303 | 1 | 44.5 |
| /blog/how-much-does-an-seo-audit-cost/ | 18,866 | 7 | 12.0 |
| /blog/what-is-cross-network-in-google-analytics/ | 13,244 | 11 | 9.1 |
| /blog/how-do-i-check-my-seo-ranking/ | 10,588 | 1 | 30.2 |
| /blog/competitive-battlecard-template/ | 9,259 | 8 | 15.9 |
| /blog/what-does-chatgpt-stand-for/ | 9,164 | 4 | 15.6 |
| /blog/do-google-reviews-help-seo/ | 6,542 | 0 | 54.8 |
| /blog/product-launch-checklist/ | 5,476 | 4 | 21.5 |
| /blog/product-led-growth-examples/ | 2,885 | 13 | 7.5 |

### The tools programme has no traction

All 8 `/tools/` pages combined, over 16 months: **639 impressions, 2 clicks.**

| Tool | Impressions | Clicks | Position |
| --- | ---: | ---: | ---: |
| /tools/product-launch-plan-template/ | 376 | 1 | 43.1 |
| /tools/battlecard-generator/ | 106 | 0 | 15.4 |
| /tools/ | 85 | 0 | 28.2 |
| /tools/go-to-market-strategy-template/ | 21 | 0 | 11.9 |
| /tools/value-proposition-canvas-generator/ | 19 | 1 | 30.0 |
| /tools/case-study-template/ | 10 | 0 | 12.9 |
| /tools/product-one-pager-template/ | 10 | 0 | 37.0 |
| /tools/buyer-persona-generator/ | 9 | 0 | 40.2 |
| /tools/campaign-name-generator/ | 3 | 0 | 70.0 |

Any claim that battlecard-generator is a proven ranking asset is false. Do not build more
tools on that premise.

### CTR anomaly - unresolved

| Country | Impressions | Clicks | CTR |
| --- | ---: | ---: | ---: |
| United States | 110,088 | 53 | 0.05% |
| India | 7,850 | 91 | 1.16% |

A 23x CTR gap on the same pages. Pages at average position 4-10 earned 8,359 impressions
and 4 clicks, where 4-8% CTR would be normal. Leading hypothesis is AI Overviews absorbing
clicks on US informational SERPs. Treat "raise the position" as necessary but possibly not
sufficient until this is understood.

### Only branded search converts

`swapnil biswas` - 289 impressions, 35 clicks, position 2.7. That single branded query is
**19% of all site clicks.**

---

## Re-measure checklist

Run quarterly. Next due: **2026-12-03**.

1. Export GSC Performance, last 16 months, and drop into `.gsc/exports/`
2. Compare impressions, clicks and average position against the table above
3. Re-check the position distribution - the goal is impressions moving from the 21+ band into 4-20
4. Confirm whether the CTR anomaly has resolved
5. Append a new dated section here; do not overwrite this one

---

## Re-measure: 2026-10-25

**Windows:** last 28 days (2026-09-26 to 2026-10-23) against the previous 28 days, plus the last
16 months (2025-06-24 to 2026-10-23). Search type: Web. Exports in `.gsc/exports/*-2026-10-25.csv`.

### Headline

| Metric | Previous 28 days | Last 28 days |
| --- | ---: | ---: |
| Clicks | 76 | 555 |
| Impressions | 61,168 | 96,139 |
| CTR | 0.12% | 0.58% |

16 months: 812 clicks and 315,687 impressions.

| Month | Clicks | Impressions |
| --- | ---: | ---: |
| 2026-08 | 59 | 50,214 |
| 2026-09 | 99 | 62,519 |
| 2026-10 (to the 23rd) | 527 | 88,788 |

Daily clicks ran 44-63 from 19 to 23 October, against 59 for all of August.

### Where the clicks come from

| Cluster (page level, last 28 days) | Clicks | Impressions |
| --- | ---: | ---: |
| India pricing (14 pages) | 255 | 27,978 |
| Claude and Claude Code (30) | 115 | 19,670 |
| PMM and other (162) | 82 | 24,293 |
| LinkedIn (9) | 49 | 3,255 |
| SEO and analytics (50) | 23 | 13,415 |
| AI tools (15) | 19 | 20,747 |

Top page: `/blog/claude-student-discount-india/`, 92 clicks at position 5.7. The SEO and
analytics pages that held most impressions on 2026-09-03 are shrinking:
`how-much-does-an-seo-audit-cost` 14,337 to 6,141 impressions, `what-is-seo-report` 10,235 to
2,978 (position 21.9 to 29.1), `what-is-cross-network-in-google-analytics` 3,708 to 1,748.

| Country (last 28 days) | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| India | 302 | 33,130 | 0.91% | 6.7 |
| United States | 93 | 42,223 | 0.22% | 14.9 |
| United Kingdom | 17 | 2,649 | 0.64% | 14.8 |

Devices, last 28 days: desktop 344 clicks on 67,406 impressions (0.51%), mobile 205 on 28,290 (0.72%).

### CTR by average position (top 1,000 queries, last 28 days)

| Position | India-intent queries | Other non-branded |
| --- | ---: | ---: |
| 1-3.5 | 2.58% | 0.48% |
| 3.5-5.5 | 0.93% | 0.57% |
| 5.5-10.5 | 0.51% | 0.29% |
| 10.5-20.5 | 0% | 0.14% |

The 2026-09-03 anomaly (0 non-branded clicks at positions 1.5-5.5) has partly resolved, but
top positions still earn well under 1% outside India. Live SERP checks on 2026-10-25 found the
site cited inside AI Overviews rather than ranked in the blue links for several of these
queries, and GSC reports every AI Overview link at the AI Overview's position. The top 1,000
queries carry 138 of the 555 clicks; the rest are long-tail or anonymised.

### Indexing

99 of the 102 posts published between 2026-09-04 and 2026-10-24 drew impressions in the last 28
days. The three without any: `alt-text-and-seo`, `seo-keyword-map`, `saas-marketing-plan-template`.
224 of 251 posts drew impressions.

### Bing

Bing Webmaster Tools export (`.gsc/exports/bing-performance-2026-10-25.csv`): September 6 clicks
on 498 impressions, October to the 23rd 15 clicks on 2,101.

Next re-measure due: **2026-11-22** (four weeks, because the September and October changes are
still settling).
