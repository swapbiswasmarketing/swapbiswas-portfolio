---
title: "Bing AI Performance Report: What Each Metric Measures"
description: "The Bing AI Performance report counts citations and grounding queries, not clicks. Every metric, Bing's own caveats and the 2026 changes, as of November 2026."
publishDate: 2026-11-04
category: [SEO, Tools]
img: /assets/stock-4.webp
img_alt: "placeholder"
faqs:
  - q: "Does Bing's AI Performance report show clicks?"
    a: "Bing's announcement posts for the report, from February, June and October 2026, describe no click metric. It counts citations, cited pages and grounding queries. Clicks from Bing search results are in the separate Search Performance report."
  - q: "What are grounding queries in Bing Webmaster Tools?"
    a: "Bing defines them as the key phrases the AI used when retrieving content that was referenced in AI-generated answers. The report shows a sample of them, and because they are the AI's retrieval phrases, they can differ from the prompt a person typed."
  - q: "What is Citation Share in Bing Webmaster Tools?"
    a: "Citation Share is the percentage of citations attributed to your site out of all citations shown across all sites for the same grounding query. Bing added it in preview on 16 June 2026 and calls it an observational metric, not a ranking or a measure of traffic share."
  - q: "Why can't I see Topics Portfolio in Bing Webmaster Tools?"
    a: "Bing says the Topics Portfolio tab appears if there is sufficient data for your site. Its October 2026 post says smaller sites may see a shorter list or may not see the feature at all."
  - q: "Which AI surfaces does Bing Webmaster Tools AI Performance cover?"
    a: "Microsoft Copilot, AI-generated summaries in Bing, and select partner integrations, per Bing's February 2026 launch post. Bing does not name the partners, and the report has no filter for a single surface."
---

A glossary page from the agency [Embarque](https://www.embarque.io/glossary/what-is-the-bing-ai-performance-report-in-bing-webmaster-tools) lists **Clicks** and **CTR** among the metrics of Bing's AI report and describes filters for country and device. Bing's own posts announcing the Bing AI Performance report, in February, June and October 2026, describe no click metric and neither of those filters. The report counts citations: how often AI answers show your pages as sources.

Two independent write-ups say the same. Ann Smarty at [Practical Ecommerce](https://www.practicalecommerce.com/bings-improved-ai-performance-section) wrote on 22 June 2026 that the report shows how often each page is cited "but not the number of views or clicks", and Momentic's [first look at the report](https://momenticmarketing.com/blog/bing-wmt-ai-performance-report) puts it as "There are no clicks."

I read the report as a citation log that ships with its own disclaimers. Bing attaches a sentence to almost every metric saying what the number does not mean, and those sentences are the part I would read before any chart. That is why each metric here sits next to its disclaimer, with the date Bing added it, so you can read a number without asking it a question Bing says it cannot answer.

## What Is the Bing AI Performance Report?

The Bing AI Performance report is the Bing Webmaster Tools report that counts how often AI answers in Microsoft Copilot, Bing and select partner integrations cite your pages, and as of November 2026 it carries these metrics:

- **Total Citations:** citations of your site shown as sources in AI answers in the date range.
- **Average Cited Pages:** unique pages of yours cited per day, averaged over the range.
- **Grounding queries:** a sample of the phrases the AI used to retrieve the content it cited.
- **Page-level citation activity:** citation counts for each of your URLs.
- **Visibility trends:** citation activity plotted over time.
- **Intent:** a category label on each grounding query (preview, June 2026).
- **Topic:** a thematic cluster label on each grounding query (preview, June 2026).
- **Citation Share:** your percentage of all citations for one grounding query (preview, June 2026).
- **Compare:** an earlier period laid over the current one (preview, June 2026).
- **Topics Portfolio:** Topic Size, Sites Cited, Queries and Opportunity Queries (beta, October 2026).

Bing's [February 2026 launch post](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) calls the release "an early step toward Generative Engine Optimization (GEO) tooling in Bing Webmaster Tools". The June features are labelled preview, and Topics Portfolio is labelled beta.

## Does the Bing AI Performance Report Show Clicks?

No. None of Bing's announcement posts for the report describes a click, impression or traffic metric, and the June post says Citation Share does not "represent traffic share". I searched the text of all three posts and the March 2026 Microsoft Advertising post for "click", "impression", "country" and "device" on 4 November 2026: the only hits are the instruction "Click any topic", a "click here" link and site navigation.

> **Correction:** if a guide shows Clicks, CTR or Impressions for AI Performance, check it against Bing's posts. Clicks from Bing's blue links are in a different report.

Here is how the claims in circulation line up against Microsoft's own pages:

| Claim you may read | What Microsoft's posts say | Source |
|---|---|---|
| The report shows Clicks and CTR from AI citations | No click or CTR metric is described | Feb, [Jun](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/), [Oct](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/) posts |
| It has country and device filters | No filter of either kind is described | Same three posts |
| Citation Share is your share of AI traffic | It "does not expose competitor domains, represent traffic share, or assign quality scores to content" | Jun post |
| Bing Webmaster Tools has no click data at all | The Search Performance report tracks "impressions, clicks, and average position across pages and keywords using up to 16 months of data" | [Bing, June 2025](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/) |

For the sessions that do arrive from an assistant, the record is in your analytics. GA4 has a channel for it, and [my comparison of Google's AI Assistant channel pages](/blog/ga4-ai-assistant-channel/) shows which assistants Google names for that row.

## Which AI Surfaces the Report Covers

The launch post says AI Performance shows "how publisher content appears across Microsoft Copilot, AI-generated summaries in Bing, and select partner integrations". The wording leaves gaps, and the write-ups that tested the report fill some of them:

| Question | Answer | Source |
|---|---|---|
| Can I see Copilot alone? | No. Practical Ecommerce found "no option to filter by a single channel" | Practical Ecommerce |
| Who are the partners? | Not named. Practical Ecommerce found "no way to identify the partners" | Same page |
| Does it include Google AI Overviews or AI Mode? | No. Momentic's post says "This is also not Google" | Momentic |
| Does it include ChatGPT or Perplexity? | Bing does not say, because the partners are unnamed | Feb post |
| Does Bing honour robots.txt for these answers? | Bing's note: it "respects all content owner preferences expressed through robots.txt and other supported control mechanisms" | Feb post |

For ChatGPT, Perplexity and Gemini you still need the manual prompt checks and third-party trackers listed in [the measurement step of my AI visibility strategies](/blog/improve-brand-visibility-in-ai-search-engines/).

## Every Metric: What It Measures and What It Does Not

This is the table I would keep open next to the report. The middle column paraphrases or quotes Bing; the right-hand column quotes the disclaimer Bing published with the metric. Wording read on 4 November 2026.

| Metric | Added | What it measures, per Bing | What Bing says it does not tell you |
|---|---|---|---|
| Total Citations | 10 Feb 2026 | Citations displayed as sources in AI answers in the date range | It counts them "without indicating placement or presentation within a specific answer" |
| Average Cited Pages | 10 Feb 2026 | Average number of unique pages of yours cited per day | It "does not indicate ranking, authority, or the role of any page within an individual answer" |
| Grounding queries | 10 Feb 2026 | "the key phrases the AI used when retrieving content that was referenced in AI-generated answers" | "The data shown represents a sample of overall citation activity" |
| Page-level citation activity | 10 Feb 2026 | Citation counts for each URL on your site | "This reflects how often pages are cited, not page importance, ranking, or placement" |
| Visibility trends | 10 Feb 2026 | Citation activity over time across supported AI experiences | No caveat published; it plots the same citation counts |
| Grounding query to page mapping | 23 Mar 2026 | Which pages are cited for a grounding query, and which grounding queries cite a page | "one grounding query may be mapped to multiple pages and vice versa" |
| Intents | 16 Jun 2026 | A category for each grounding query: "Informational, Commercial, Navigational, Learn and Solve, Research, Creation, Local, and more" | Built on "evolving AI/ML classification systems" |
| Topics | 16 Jun 2026 | Grounding queries grouped into thematic clusters | "some labels may still be broad", especially for niche domains |
| Citation Share | 16 Jun 2026 | Your citations as a percentage of all citations across all sites for the same grounding query | "not a ranking system or a competitive scoreboard"; no competitor domains, traffic share or quality scores |
| Compare | 16 Jun 2026 | A previous period laid over the current view, such as the prior 30 days or a custom range | Citation activity "can be influenced by many factors including evolving AI models, competing content, freshness signals, and shifts in user demand" |
| Topics Portfolio | 13 Oct 2026 | Topic, Topic Size, Sites Cited, Queries, plus Opportunity Queries | Numbers are "directional signals for planning, not as a precise ledger" |

Sources: Bing's February, June and October posts, linked above, and the [March 2026 Microsoft Advertising post](https://about.ads.microsoft.com/en/blog/post/march-2026/the-ai-performance-dashboard-your-view-into-where-your-brand-appears-across-the-ai-web) for the mapping row.

## AI Performance Changelog, February to October 2026

The report has four dated milestones in 2026, and Microsoft published a post for each:

<img src="/assets/blog/bing-ai-performance-report/ai-performance-timeline.webp" alt="Timeline of Bing's AI Performance report in 2026: public preview on 10 February, grounding query to page mapping on 23 March, Intents, Topics, Citation Share and Compare on 16 June, Topics Portfolio beta on 13 October" title="AI Performance report milestones in 2026" width="1200" height="754" loading="lazy" decoding="async" />

| Date | Change | Status | Post |
|---|---|---|---|
| 10 Feb 2026 | AI Performance launches with Total Citations, Average Cited Pages, grounding queries, page-level citations and trends | Public preview | Bing Webmaster Blog |
| 23 Mar 2026 | Grounding Query - Page Mapping links the queries view and the pages view | New capability | Microsoft Advertising Blog |
| 16 Jun 2026 | Intents, Topics, Citation Share and Compare, plus an in-dashboard feedback control | Preview, rolling out globally | Bing Search Blog |
| 13 Oct 2026 | Topics Portfolio tab with Opportunity Queries and thumbs up/down feedback | Beta | Bing Webmaster Blog |

One date detail: the launch post itself is dated 10 February 2026, while the Related Stories box on the June and October posts lists it as 11 February. I use the post's own date.

As of 4 November 2026, the Bing Webmaster Blog index lists the October Topics Portfolio post as its newest entry. Re-check the index before you rely on this table, because the report has gained a feature every few months.

## Grounding Queries Are the AI's Phrases, Not Your Visitors'

Grounding, in the June post's words, "refers to the source material and web evidence the system uses to support and cite its response". A grounding query is the phrase the AI searched with while assembling that evidence. That changes how you read the column:

- **It can differ from what a person typed.** Bing says the phrases are what "the AI used when retrieving content". Practical Ecommerce reads them as "the fan-out terms of Bing's AI agents", which is that site's interpretation rather than Bing's wording.
- **It is a sample.** Bing says the data "represents a sample of overall citation activity" and that it "will continue to refine this metric".
- **It maps to pages in both directions.** Since March 2026 you can select a grounding query to see its cited pages, or a page to see its grounding queries.

Intent labels sit on top of these phrases. The June post lists Informational, Commercial, Navigational, Learn and Solve, Research, Creation and Local "and more". Practical Ecommerce's read of the live report adds Conversational and Comparison to that list, so expect labels Bing's post does not name.

Topics group the phrases. Bing's example: "solar panels", "solar energy efficiency" and "residential solar installation" may all map into a topic like Solar Energy.

## Citation Share and Compare, Added in June 2026

Citation Share answers how much of the citation space your site took for one grounding query. Bing's definition is "the percentage of citations attributed to your site out of all citations shown across all sites for that same grounding query".

What it will not give you, per the June post:

| You might want | Citation Share gives you |
|---|---|
| The names of the other cited sites | Nothing: it "does not expose competitor domains" |
| Your share of AI-referred visits | Nothing: it does not "represent traffic share" |
| A quality score for the page | Nothing: it does not "assign quality scores to content" |
| A rank position | Nothing: Bing calls it "an observational metric" |

Compare lays a previous period over the current one. Bing's example is the current 30 days against the prior 30 days, and custom ranges are allowed. Bing lists "evolving AI models, competing content, freshness signals, and shifts in user demand" among the causes of a change, so a dip in Compare is a prompt to look, with no cause attached.

## Topics Portfolio (Beta): The October 2026 Tab

Topics Portfolio groups the grounding queries where your site appears into broad themes. Bing's October post says it appears as a tab next to Citations & Pages "if there is sufficient data for your site", and that "Everything in this view is personalized to your site."

The landing table has four columns:

| Column | Bing's definition |
|---|---|
| Topic | A broad thematic cluster of related grounding queries where your site appears |
| Topic Size | The approximate total citations across all sites for this topic over the selected period |
| Sites Cited | The approximate number of sites appearing for queries in this topic |
| Queries | The approximate number of distinct grounding queries in this topic |

Below it, **Top Opportunity Queries** lists queries across your portfolio "where other sites appear and yours does not", with citation volumes "shown as ranges rather than exact numbers". Clicking a topic opens a detail page with three cards (Topic Size, your citations in the topic, the number of queries) and two tables: Your Grounding Queries and Opportunity Queries.

Bing lists these limits before you start:

1. Topic classification "is AI-generated and can occasionally be imperfect".
2. Topics with too little site presence or activity are hidden.
3. Branded queries can appear as opportunity queries, including a competitor's brand name.
4. Topic Size, Sites Cited and Queries are approximate, and opportunity volumes are ranges on purpose.

The time window is one, two or three months. The post names the tab "Topics Portfolio" in one paragraph and says to "select the Topics tab" in its getting-started paragraph, so look for either label.

## If Your Site Is Small

Bing's October post says it plainly: "smaller sites may see a shorter list or may not even see this feature". Bing ties the tab to "sufficient data for your site", so a missing Topics Portfolio tab points first to that data condition. Bing does not describe it as an error.

| What you see | What it means, per Bing | What to read instead |
|---|---|---|
| No Topics Portfolio tab | Not enough data for your site | Citations & Pages: grounding queries and cited URLs |
| A short topic list | Topics with insufficient presence are not shown | The topics that do appear, and the grounding queries inside them |
| A competitor's brand as an opportunity | Branded queries can appear there | Skip it; Bing gives the example of a rival's brand name shown as an opportunity |
| Few grounding queries overall | The column is a sample | The page-level counts, which show which URLs get cited at all |

Bing states a data threshold only for Topics Portfolio, so on a small site start with the page-level counts and come back to the Topics view when the tab appears.

## How to Open the Report

1. Sign in at bing.com/webmasters. Bing's June 2025 setup guide, linked in the clicks table above, accepts a Microsoft, Google or Facebook account.
2. Add your site. If it is verified in Google Search Console, the same guide says you "can import your verified ownership directly".
3. Wait for data. Practical Ecommerce's advice is to "Allow roughly 24 hours for Bing to collect and report the data" after an import; Bing's posts give no figure.
4. Navigate to AI Performance, which is the October post's instruction, and start in Citations & Pages.
5. Open Topics Portfolio if the tab is there, and pick a one-, two- or three-month window.

Practical Ecommerce also reports that the whole report can be exported to a spreadsheet. Bing's three posts do not mention an export.

Google's counterpart is a different report: Search Console's Generative AI performance report has no queries tab, as [my guide to Search Console's branded queries filter](/blog/search-console-branded-queries/) notes with a link to Google's help page. Grounding queries are the column Bing offers that Google's AI report does not.

## Acting on Each Number With Bing's Own Advice

Bing's posts carry their own advice for acting on the data. This table pairs each reading with the line it comes from:

| If the report shows | Do this | Bing's line behind it |
|---|---|---|
| Pages indexed but rarely cited | Rework headings, add a table or an FAQ section, fill gaps | "Clear headings, tables, and FAQ sections help surface key information" |
| A cited page whose facts are dated | Update it and notify Bing | "Regular updates help ensure AI systems reference the most current version of your content" |
| A grounding query mapped to two of your pages | Decide which page owns the query and link the other to it | "one grounding query may be mapped to multiple pages and vice versa" (March post) |
| Low Citation Share on a query you care about | Read the query's cited pages, then improve yours; do not report it as a rank | "an observational metric" |
| An opportunity query inside a topic you already own | Brief a section or a page on it | Opportunity Queries list queries "where other sites appear and yours does not" |
| A local business with thin citations | Keep address, hours and contact details current in Bing Places for Business | Bing names Bing Places for Business for local AI visibility |

For the notify step, the launch post recommends IndexNow; [my write-up on Google and IndexNow](/blog/does-google-support-indexnow/) covers which engines a submission reaches. For FAQ markup, [my FAQ schema breakdown](/blog/faq-schema/) quotes Bing's guideline that structured data "may support clearer grounding" and what it does not guarantee.

Bing's report also fills a gap in the measurement section of my [guide to getting cited by LLMs](/blog/llm-optimization/), which lists GA4, manual prompt tests and third-party trackers: for Copilot and Bing's AI summaries, a first-party citation count now exists.

## Reading the Bing AI Performance Report as a Citation Log

The report tells you where Copilot, Bing's AI summaries and Bing's unnamed partners cited you, for which retrieval phrases, and how that moved. It does not tell you who clicked, what you ranked, or which rival took the rest of the citations: Bing's caveats rule out rank and competitor names, and none of its posts describes a click count. Re-read the Bing Webmaster Blog when a new feature lands, since the four entries above arrived in eight months.

Start with the page-level citation counts, and keep the caveat column of the metric table beside them.
