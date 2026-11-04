# Lane E handoff - Search Console, GA4, GTM, Looker Studio, Clarity, Bing Webmaster Tools

Branch: `cloud/lane-e`. Run date: 2026-11-04.

Data note: no Semrush connector in this session, and the Ahrefs MCP answered every call (including the free subscription-info endpoint and the free `ahrefs` test keyword) with `{"error":"Insufficient plan"}`. Every volume below is UNMEASURED; demand evidence is Google autocomplete, SERP reads are WebSearch (not Google's own ranking), and every DR is an estimate. Re-check volumes and the top 8 with Ahrefs in the merge session before judging these posts.

## Batch 1 (publishDate 2026-11-04)

### soft-404
- Primary keyword: soft 404 (variants: soft 404 google search console, soft 404 meaning, soft 404 error, soft 404 vs 404)
- Verdict: TOP5 (downgraded from TOP3_PLAUSIBLE: WebSearch order is not Google's and left Google's own docs out)
- Traffic: realistic 3-15 visits/month at #6-10 (US/global, volume unmeasured, assumed 1,000-3,000 US cluster); top-3 upside ~10-80/month
- Proof page: https://blog.zibster.com/SEO/understanding-soft-404-errors-in-search-console (#3 in WebSearch, estimated DR under 40, dated 7 Jan 2025, thin)
- Refresh: 2027-05-04, or sooner if Google's crawling changelog moves the soft 404 docs again; the post's angle is that the Page indexing help's "Learn how to fix" link (answer/181708) 301s twice to a page with one soft 404 sentence (docs migrated 18 Dec 2025), and it publishes live curl output dated 4 Nov 2026 18:02 UTC.
- Footprint: `| soft-404 | what-is + how-to fix, Search Console status explainer + URL-type decision table | exception-first open | prose | synthesized |`
- Review ledger: `soft-404 | status=new, review_due=2026-11-25`
- First-hand question: Has swapbiswas.com's Page indexing report ever listed any URL under the Soft 404 reason (for example the built /404.html, which answers 200, or a /redesign/ meta-refresh stub)? If yes: which URL pattern, roughly how many, and the date range. Belongs at the end of "Check What a Not-Found URL Returns With Curl".
- Hosts edited (one sentence each): excluded-by-noindex-tag (hub down-link), how-often-should-you-do-an-seo-audit, 301-redirect-seo
- Keyword note: "soft 404" still appears 24 times in the body (cut from 34) because it is the Search Console row name and appears in Google quotes.

### bing-ai-performance-report
- Primary keyword: bing ai performance report (variants: bing webmaster tools ai performance, bing webmaster tools ai report, bing webmaster tools ai visibility)
- Verdict: TOP5
- Traffic: realistic 2-10 visits/month at #4-8 (US/global, volume unmeasured, assumed 300-1,500 cluster); top-3 upside 15-60/month, ~150 at #1
- Proof page: https://www.engageweb.co.uk/blog/bing-webmaster-tools-introduces-ai-performance-report-in-beta (#3 in WebSearch, estimated DR under 40, low confidence; launch news post dated 12 Feb 2026)
- Refresh: 2027-02-13. Bing has shipped a change about every four months (10 Feb, 23 Mar via the Microsoft Advertising blog, 16 Jun, 13 Oct 2026); Topics Portfolio and the June features are beta/preview.
- Footprint: `| bing-ai-performance-report | what-is reference + dated changelog + metric caveat table | myth-led open | list | synthesized |`
- Review ledger: `bing-ai-performance-report | status=new, review_due=2026-11-25`
- First-hand question: Is swapbiswas.com verified in Bing Webmaster Tools, and if so, does its AI Performance report show any citations, and does the Topics Portfolio tab appear for the site (yes/no, and on what date)? Belongs in the "If Your Site Is Small" section.
- Hosts edited: llm-optimization (hub; added a 4th item to "How to Measure LLM Citations" and changed "Three approximations" to "Four approximations"), ga4-ai-assistant-channel, does-google-support-indexnow
- Merge note: llm-optimization still opens that section with "There is no Google Search Console for LLMs yet." Consider rewording now that Bing's report and Google's Generative AI performance report both exist.
- Note: the post's myth-led opening names Embarque's glossary page as listing Clicks and CTR; confirmed on the live page on 4 Nov 2026. Re-check at refresh.

### microsoft-clarity-not-recording
- Primary keyword: microsoft clarity not recording (variants: microsoft clarity not working, not loading, no css, heatmap not working)
- Verdict: TOP5 (soft top 3 of unanswered Microsoft Q&A threads; no sub-DR-40 proof page)
- Traffic: realistic 1-5 visits/month at #5-8 (US/global, volume unmeasured, assumed 200-600 cluster); top-3 upside 10-35/month, ~60 at #1
- Proof page: none valid (closest is a June 2024 dev.to post at #3-5, user-generated on a DR ~90 platform)
- Refresh: 2027-02-04 (quarterly). Re-check Clarity's Google Consent Mode status ("coming soon" in the FAQ), the consent-platform list (17 on 4 Nov 2026, OneTrust "coming soon"; the Consent Mode page still names CookieYes only), the 100,000 sessions/day cap and the CSP domains.
- Footprint: `| microsoft-clarity-not-recording | how-to troubleshooter, symptom->cause->check->fix table + data-stage diagram | problem-led open | table | synthesized |`
- Review ledger: `microsoft-clarity-not-recording | status=new, review_due=2026-11-25`
- First-hand question: On swapbiswas.com's own Clarity project, when you open DevTools on a live post in a normal browser, do you see POST requests to clarity.ms/collect, and what does the `clarity('metadata', ...)` console check print for `consentStatus` before and after accepting the consent banner? (One dated screenshot or the exact output.)
- Hosts edited: google-analytics-alternatives (hub; Consent bullet of the Clarity H2), what-is-customer-journey-analytics (session-recording tools line), how-to-read-a-heatmap (the one host from outside the lane pool)

### LinkedIn drafts (batch 1)

#### soft-404

Google's "Learn how to fix a soft 404" link no longer goes to the fix.

It redirects twice and lands on a page that gives soft 404s one sentence.

Traced on 4 November 2026:

- support.google.com/webmasters/answer/181708 returns a 301, then a second 301, to Google's HTTP status codes page
- The full fix section still exists, at "Troubleshoot Google Search Crawling Errors", last updated 18 December 2025
- Google's crawling changelog for that date lists the status-code page among those migrated to the new crawling site
- A soft 404 is a URL that returns 200 while its content reads as an error, an empty page or "not found"; a real 404 sits under the Not found (404) row instead

The post has a table by URL type: what each one should answer, with Google's line behind it, plus a curl check you can run on your own 404 page.

🔗 https://swapbiswas.com/blog/soft-404/?utm_source=linkedin&utm_medium=social&utm_campaign=soft-404

#SEO #TechnicalSEO #GoogleSearchConsole #WebDevelopment

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, a scholar's desk with an old brass signpost whose two arms point to each other in a loop, a folded map beneath it, a single vermilion red thread tied around the one arm that points off the desk, muted earth tones, one red accent only, no text.

#### bing-ai-performance-report

Bing's AI Performance report does not show clicks.

Some guides list Clicks and CTR among its metrics. None of Bing's own announcement posts describes either one.

What it does count, from Bing's posts (February, June and October 2026):

- Total citations and average cited pages across Copilot, AI summaries in Bing and select partners
- Grounding queries: the phrases the AI used to retrieve your content, not what a person typed
- Citation Share (preview, 16 June 2026): your percentage of all citations for one grounding query
- Topics Portfolio (beta, 13 October 2026), which Bing says smaller sites may not see at all

The post sets every metric beside Bing's own caveat, with a dated changelog.

🔗 https://swapbiswas.com/blog/bing-ai-performance-report/?utm_source=linkedin&utm_medium=social&utm_campaign=bing-ai-performance-report

#SEO #AISearch #BingWebmasterTools #GenerativeEngineOptimization #ContentMarketing

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, an open ledger on a wooden table with tally marks in ink and a quill, a stack of sealed letters beside it, a single vermilion red wax seal on one letter, muted earth tones, one red accent only, no text.

#### microsoft-clarity-not-recording

An empty Microsoft Clarity dashboard has more than one possible cause.

The data can stop at one of four stages, and Microsoft documents a check for each.

From Microsoft's Clarity docs, read 4 November 2026:

- Script loading: look for POST requests to clarity.ms/collect in DevTools
- EEA, UK and Swiss visits: consent signals have been enforced since 31 October 2025
- Fewer recordings than sessions: the cap is 100,000 sessions per project per day
- Heatmap with low page views or no clicks: under 30 minutes since install, or a filter

The post has a symptom, cause, check and fix table, each check linked to its Microsoft page.

🔗 https://swapbiswas.com/blog/microsoft-clarity-not-recording/?utm_source=linkedin&utm_medium=social&utm_campaign=microsoft-clarity-not-recording

#Analytics #MicrosoftClarity #CRO #UXResearch #WebAnalytics

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, a brass hourglass and an empty glass jar on a stone ledge with four small stones lined up in a row, one stone painted vermilion red, muted earth tones, one red accent only, no text.

## Rejected (lane E, 2026-11-04)
- blocked due to access forbidden (403): LONGTAIL_ONLY, 0-3/mo. aioseo, seotesting and onely hold the top 3; the small article in the top 5 (contextbolt, Sep/Oct 2026) already publishes the CDN/firewall angle. Brief notes Google's HTTP status doc moved to developers.google.com/crawling/docs/troubleshooting/http-status-codes.
- tag assistant not connected / gtm preview mode not working: LONGTAIL_ONLY, 1-8/mo, below the 10/mo bar. analyticsmania (26 fixes, updated 12 Oct 2026) and Google's help likely hold the top.
- ga4 (not set) landing page: LONGTAIL_ONLY, 0-3/mo. InfoTrust, Tatvic and OptimizeSmart hold #1-4.
- robots.txt AI training control / google-extended (Google post of 30 Oct 2026): DROP. Draft-stage IETF proposal; Google says it plans to support it; angle already published by relevantaudience and rightblogger. OPTIMIZE instead: add a dated 3-5 line update to llm-optimization's robots.txt section (lines ~135-178) on the shared `__usage` policy token.
- indexed, though blocked by robots.txt: DROP. Every angle already on page 1 (DR 40+ through the top 8); the core fix is published at seo-interview-questions Q39, excluded-by-noindex-tag fix step 4 and vercel-google-indexing:99. OPTIMIZE instead: add an FAQ "What does Indexed, though blocked by robots.txt mean?" to excluded-by-noindex-tag.
- Cut at discovery (not gated): discovered currently not indexed (sibling of the rejected "crawled" status; SEO-tool SERP), search console multimodal (narrow; fold into a Generative AI report post), ga4 unassigned (MEDIUM cannibal with ga4-ai-assistant-channel:77 and campaign-naming-convention:126-138), microsoft clarity vs google analytics (HIGH: google-analytics-alternatives:140), consent mode v2 (CMP vendors; google-analytics-alternatives owns the site's consent setup), server error 5xx (lower fit).
- Gated TOP5, queued for batch 2: search-console-generative-ai-report (0-5/mo), looker-studio-data-set-configuration-error (0-3/mo).
