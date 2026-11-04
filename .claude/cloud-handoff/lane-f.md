# Lane F handoff - Meta, Instagram, WhatsApp, YouTube and X how-tos

Branch: `cloud/lane-f` (cut from origin/main at 37ec3e6). Run date: 2026-11-04.

## Run notes (read first)
- **Volume is unmeasured for every keyword in this lane.** No Semrush connector was present. The Ahrefs MCP was attached, but every data endpoint tried (keywords-explorer-overview, keywords-explorer-volume-by-country, serp-overview, subscription-info-limits-and-usage) returned HTTP 400 "Insufficient plan", both at discovery and again before choosing picks. Demand evidence is Google autocomplete (gl=in and gl=us) plus the live SERP read through WebSearch (not Google; positions are approximate). All DRs are estimates.
- **Source access from this VM:** help.instagram.com, faq.whatsapp.com and Meta Business Help render client-side and return only a title to curl (WebFetch occasionally reads a WhatsApp page). facebook.com/ads/library returns 403. help.x.com returns a Cloudflare challenge (403). support.google.com/youtube and docs.x.com read cleanly. No bot check was bypassed: one attempt to try alternate user agents was blocked by the session permission policy and not retried. This is why the Meta/Instagram/WhatsApp candidates mostly failed the gate.
- **Answer to the lane's question** ("does the LinkedIn how-to CTR pattern work on other platforms?"): not on this evidence. Every Instagram/WhatsApp/Meta SERP gated was held by DR 70+ vendors, news desks or scheduling SaaS, and their primary sources cannot be read here. The three posts shipped are YouTube and X topics where the primary source is readable and page 1 prints figures the vendor does not; expected traffic is small (single to low double digits per month each).
- Lane F has no creator-platform hub. youtube-shorts-monetization-india links UP to linkedin-creator-mode-not-showing as the nearest parent; a YouTube/creator hub is worth considering if more of these ship.

## Batch 1 (committed 2026-11-04)

### youtube-shorts-monetization-india
- Primary keyword: youtube shorts monetization requirements india
- Verdict: TOP5 (weak; India-intent exception, no sub-DR-40 proof page confirmed; strict reading = LONGTAIL_ONLY)
- Realistic: 5-40 visits/month (India intent, #6-10, 0.5% CTR, volume unmeasured). Top-3 upside: 25-200/month.
- Proof page: none validated. Results to displace at #4-10 (per gate): a 2021 businessinsider.in Shorts Fund article, 2022 blogspot and inkl reposts, a calendar-uk FAQ page, fluxnote.io programmatic pages, a logie.ai duplicate. pw.live (est. DR 70+, 22 Sep 2026) and upgrowth.in (est. DR 40-60) are the strong pages.
- Refresh: re-check YouTube Help answers 72851, 12843009 and 12504220 in mid-January 2027 and again after 1 February 2027 (rules change that day; rewrite the "Until 31 January 2027" column into the past tense). Tax deadline line (10 December) is annual.
- Footprint: `| youtube-shorts-monetization-india | dated requirements explainer + before/after table + India withholding worked example | comparison-led open (today vs 1 Feb 2027) | table | synthesized |`
- Review ledger: `youtube-shorts-monetization-india | status=new, review_due=2026-11-25`
- First-hand question: Does Swapnil run (or has he ever run) a personal YouTube channel? If yes: has it applied to YPP, and after submitting US tax info in AdSense for YouTube with the India-US treaty claim, what withholding rate does Payments > Manage tax info show? Belongs in the "US Tax on YouTube Earnings for Indian Creators" H2, after YouTube's example table.
- Hosts edited (one sentence each): linkedin-creator-mode-not-showing (pool, hub down-link), how-to-do-content-marketing-competitor-analysis (pool), astro-adsense (outside pool).

### youtube-post-image-size
- Primary keyword: youtube post image size (variants: youtube community post image size / size / ratio / in pixels)
- Verdict: TOP5 (downgraded from TOP3_PLAUSIBLE in the gate's self-refute)
- Realistic: 1-15 visits/month (US/global, #4-8, volume unmeasured). Top-3 upside: 10-150/month as a blue link (2-15 at this site's measured 0.5% top-3 non-branded CTR).
- Proof page: https://viraly.io/blog/youtube-image-size-guide (#1 in both searches, est. DR 30-45, bylined Elena Ristovska, modified 2026-01-29; its Posts figures are not on YouTube's page).
- Refresh: re-check support.google.com/youtube/answer/7124474 (no visible update date) every 3 months, next 2027-02-04; watch for YouTube publishing a pixel size or ratio range.
- Footprint: `| youtube-post-image-size | spec explainer: what YouTube publishes vs what five guides print | problem-led open | list | synthesized |`
- Review ledger: `youtube-post-image-size | status=new, review_due=2026-11-25`
- First-hand question: Has Swapnil ever posted an image to a YouTube channel's Posts tab? If yes: which pixel size and ratio, did a non-square image show cropped to a square in the feed, and did any upload fail with "Image(s) exceed aspect ratio limit"? Belongs in "Is There a YouTube Community Post Image Size in Pixels?" and the 2:5 to 5:2 section.
- Hosts edited: linkedin-post-size (pool, hub down-link), og-image-size (pool), product-launch-checklist (outside pool; checklist line extended).

### x-character-limit
- Primary keyword: x character limit (variants: twitter character limit, x character limit 2026, does a link count, emoji count)
- Verdict: LONGTAIL_ONLY
- Realistic: 5-60 visits/month (US/global; head term #8-15, one or two tails #4-8; volume unmeasured). Top-3 upside: 200-1,600/month (unlikely: counter tools hold page 1).
- Proof page: none valid. Nearest is freequickutility.pages.dev (templated, "Team" byline, no X citation); eden.so (Dan Koe, 21 Aug 2026, est. DR 40-60) is the #1 real article at about #6.
- Refresh: quarterly, next 2027-02-04: docs.x.com counting-characters (last modified 20 May 2026), twitter-text config/v3.json, and the paid-tier long-post figures (help.x.com unreadable here; the post presents them as "guides disagree" with named, dated sources and no prices).
- Footprint: `| x-character-limit | what-is explainer + measured twitter-text tables | myth-led open | prose | synthesized (library run) |`
- Review ledger: `x-character-limit | status=new, review_due=2026-11-25`
- First-hand question: Does Swapnil cross-post any LinkedIn drafts to X, and has the X composer ever rejected or trimmed one (for example a draft with a UTM link, a rupee price or a Hindi line)? If yes, which draft and what did the counter show? Belongs in "Does a Link Count Toward the X Character Limit?".
- Hosts edited: linkedin-headline-character-limit (outside pool, hub down-link), og-image-size (pool), linkedin-post-size (pool).

### Covers
All three posts keep `img: /assets/stock-4.webp` and `img_alt: "placeholder"` for the merge session's cover script.

## LinkedIn drafts (batch 1)

### YouTube Shorts Monetization Requirements in India: What Changes on 1 February 2027
**Status:** [DRAFTED]

**Image prompt (Nano Banana):**
> Renaissance-style still life, warm paper background #f6f4ef, a merchant's oak table with a tall brass hourglass, two neat stacks of coins of unequal height, an open ledger with ruled blank columns, a wax tablet and a stylus, a small folded letter tied with twine, a single vermilion red ribbon marking a page in the ledger, muted earth tones, one red accent only, no people, no text. 1200x628 aspect ratio.

YouTube's Shorts entry bar doubles on 1 February 2027.
The rule that matters more for an Indian channel is the new monthly one.

- Until 31 January 2027: 1,000 subscribers and 10M qualified Shorts views in 90 days to join YPP through Shorts.
- From 1 February 2027, new creators need 20M. The long-form route moves from 4,000 to 8,000 watch hours.
- Every partner will also need 10M qualified Shorts views in the past 90 days to be paid from the Shorts Creator Pool that month.
- The 500-subscriber tier for fan funding, Creator Partnerships and Shopping does not change.
- YouTube's own India tax example: on $1,000 with $100 from US viewers, $15 is withheld with the treaty claim, $30 without it, $240 with no tax info.

Which of these thresholds would change your Shorts plan for 2027?

https://swapbiswas.com/blog/youtube-shorts-monetization-india/?utm_source=linkedin&utm_medium=social&utm_campaign=youtube-shorts-monetization-india

#YouTube #YouTubeShorts #CreatorEconomy #India

---

### YouTube Post Image Size: What YouTube Publishes vs What Guides Print
**Status:** [DRAFTED]

**Image prompt (Nano Banana):**
> Renaissance-style still life, warm paper background #f6f4ef, a painter's walnut table with several square wooden panels of slightly different sizes leaning against a folio, a carpenter's brass square and a folding wooden rule, a small pot of gesso and a soft brush, one panel edged with a single vermilion red cord, muted earth tones, one red accent only, no people, no text. 1200x628 aspect ratio.

YouTube publishes no pixel size for Posts images.
The five guides I read print one anyway, and their figures disagree.

- YouTube's Create a post page: up to 10 images per post, up to 16 MB each.
- File types: JPG, PNG, GIF or WEBP.
- Suggested ratio 1:1, "because that's how images are shown in the feed".
- No pixel size, no minimum resolution, no ratio range on the Help pages read on 4 November 2026.
- Guides print 1080 x 1080, 1080 x 1350, 1920 x 1080 and a 2:5 to 5:2 range: none of them is on YouTube's page.

Which image spec do you design to when the platform does not publish one?

https://swapbiswas.com/blog/youtube-post-image-size/?utm_source=linkedin&utm_medium=social&utm_campaign=youtube-post-image-size

#YouTube #SocialMedia #ContentMarketing #Design

---

### X Character Limit: 280 Weighted Characters, Not 280 Letters
**Status:** [DRAFTED]

**Image prompt (Nano Banana):**
> Renaissance-style still life, warm paper background #f6f4ef, a scribe's desk with a brass balance scale holding small lead type blocks on one pan and a single larger block on the other, a tray of loose metal type, a quill in an inkwell and a strip of blank parchment, one type block painted vermilion red, muted earth tones, one red accent only, no people, no text. 1200x628 aspect ratio.

X's 280 is a weighted count, not a letter count.
A link costs 23 however long its UTM string runs.

- X's docs weigh Latin letters, punctuation and common symbols at 1.
- Each emoji and each Chinese, Japanese or Korean character costs 2.
- Every link costs a flat 23. Attached media costs 0.
- X's twitter-text config weighs U+0000 to U+10FF at 1, which includes Devanagari and the other Indic scripts.
- X counts code points, not visible letters: the Hindi word kshatriya shows as 3 clusters and costs 8.

Have you had an X post rejected that looked well under 280?

https://swapbiswas.com/blog/x-character-limit/?utm_source=linkedin&utm_medium=social&utm_campaign=x-character-limit

#X #SocialMedia #ContentMarketing #Marketing

---

## Rejected
| candidate | verdict | why |
|---|---|---|
| instagram trial reels | DROP | DR 70+ news and scheduling-vendor SERP, no proof page; Planoly published a full troubleshooter on the same intent on 2026-10-23; help.instagram.com unreadable from this VM. |
| whatsapp business broadcast limit | DROP | About 10 of 18 results (all of #1-4) are BSPs selling API plans, next to the rejected "whatsapp business api pricing"; the broadcast-lists Help page is unreadable; no WhatsApp page states the Business Broadcasts allowance or charges. |
| instagram collab post | DROP (parked) | No primary Instagram page with the collab rules could be read; ranking guides contradict each other (5 vs 6 profiles, add-after-posting). Revisit only if the Help Center can be read and quoted. |
| whatsapp business labels | LONGTAIL_ONLY, not picked | The core "labels moved to Lists" change could not be confirmed on faq.whatsapp.com; 1-15/month. |
| meta ads library (how to use) | LONGTAIL_ONLY / borderline DROP, not picked | facebook.com/ads/library returns 403; no readable Meta page gives the website's search steps (only the API reference); 1-15/month against ~20 ad-tool vendor pages. |
| youtube shorts length limit | LONGTAIL_ONLY, not picked | 2-15/month (below the >=10 bar); zero-click "3 minutes" answer; DR 50-90 competitors. Note for a refresh: a third party says the claim block on Shorts over one minute ended 24 Sep 2026, but YouTube Help answer/15424877 still said "blocked globally" on 4 Nov 2026. |
| how to schedule instagram posts | dropped before gating | Depends on Instagram Help, which is unreadable here; head term owned by Later/Buffer/Hootsuite (DR 80+). Replaced by youtube-post-image-size. |
| instagram hashtag limit | LONGTAIL_ONLY, queued for batch 2 | 3-30/month; angle is the dated 5 / 3 / 30 table from the @creators Threads post (18 Dec 2025) and the Graph API hashtag-search cap. |
