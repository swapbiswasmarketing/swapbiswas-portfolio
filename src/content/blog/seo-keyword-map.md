---
title: "SEO Keyword Map: Retrofitting 147 Published Posts"
description: "Most SEO keyword map guides start from a blank sheet. Mine started from 147 live posts and a Search Console export. Here is the real page distribution."
publishDate: 2026-09-21
category: [SEO]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "What is an SEO keyword map?"
    a: "An SEO keyword map is a table with one row per URL and a named target query in each row, so every page on the site has a query it is responsible for and no query has two pages chasing it. On a site that is already published, the target column is filled from what Search Console shows the page already ranks for rather than from a keyword research list."
  - q: "How do you create a keyword map for an existing website?"
    a: "Start from the page-level Search Console export rather than a keyword tool. Band every URL by average position, separate the pages with no impressions from the pages ranking deep, and treat those two groups as different problems before you assign a single target query."
  - q: "Can you build a keyword map from a Google Search Console export?"
    a: "Only partly. A bulk export returns pages and queries as separate tables with no key joining them, so it will tell you which URLs rank deep but not which query each URL ranks for. Filling the target column needs a page-filtered query pull, one URL at a time."
  - q: "How many keywords should you map to one page?"
    a: "The convention is one primary target per URL, with secondary variants allowed on the same page. I have not measured whether pages on this site with a single clear target outrank pages without one, so treat that as a working rule and not a finding."
  - q: "Does keyword mapping fix keyword cannibalization?"
    a: "A keyword map is how you spot two URLs assigned the same target, which is the usual first step. Detecting cannibalization in live data needs query data joined to page data, which a bulk Search Console export does not give you."
---

Twenty-three of the 147 posts on this site have never earned a single Google impression, over a 16-month window in which the same domain recorded 164,564 of them. I found that while building an SEO keyword map for a site that was already 147 posts deep, and the number changed what I thought the map was for.

Every keyword mapping guide I read teaches the greenfield version. List your keywords, group them by intent, assign one to each page you are about to write. That works when the pages do not exist yet. Mine do. All 147 are published and indexed, and the ones that rank are ranking for queries I mostly did not choose. The work was not assignment. It was reverse-engineering what Google had already decided about each URL, and then arguing with it.

All the site numbers here come from one Google Search Console export covering 2025-05-01 to 2026-08-31, search type Web, property swapbiswas.com. The domain is Ahrefs Domain Rating 13, re-measured 2026-09-12, and I have never done any deliberate link building on it. One property, 147 posts, no control group. Nothing below generalises to your site on its own, and where I could not measure something I say so.

## What an SEO Keyword Map Is

An SEO keyword map is a table with one row per URL and a named target query in each row. The point of it is coverage and exclusivity at the same time: every page is responsible for something, and nothing has two pages chasing it.

The greenfield version fills the target column from keyword research, before the page exists. The retrofit version fills it from Search Console, because the page has already been answering queries for months and the ranking is evidence about what Google thinks the page is. Same table, opposite direction of travel.

That distinction matters because the retrofit carries a step the greenfield version does not: deciding whether to accept Google's read of a page or overrule it. That decision needs data about the page as it stands, which is where this starts.

## Why Keyword Mapping for an Existing Site Is a Different Job

On a blank site, the cost of a wrong mapping is a post you write badly. On a published site, the cost is a post you already wrote, already linked to, and already spent a year letting Google form an opinion about. Remapping it means changing the title, the H1, the opening and often the whole argument, and then waiting for a re-crawl to find out whether you made it worse.

That asymmetry is why I wanted the distribution before the map. A blank keyword map treats all 147 rows as equivalent work. The export says they are not: some of these URLs have an audience Google is already showing them to, some have none, and the two groups need opposite interventions.

## The Page-Level Distribution That Replaced My Blank Keyword Map

Here is what the page-level export actually returned, banded by each URL's average position.

| Average position band | URLs | Impressions | Clicks |
|---|---:|---:|---:|
| 1-3 | 1 | 2 | 0 |
| 4-10 | 37 | 20,356 | 42 |
| 11-20 | 48 | 48,630 | 50 |
| 21-50 | 31 | 73,328 | 24 |
| 51+ | 7 | 10,174 | 1 |
| No impressions at all | 23 | 0 | 0 |

The banded rows cover the 124 posts that earned at least one impression in the window; the export itself returned 157 URL rows, because it counts every URL on the property including the homepage and the tool pages, not only blog posts. And "average position" is an average, so a URL in the 21-50 band has been at 12 on some days and 60 on others.

The shape is the finding. Impressions and clicks do not sit in the same band. The 21-50 band holds more impressions than any other band on this site and returns 24 clicks, while the 4-10 band holds less than a third of those impressions and returns 42.

## The 31 URLs at Position 21 to 50 Hold 73,328 Impressions

Thirty-one URLs, 73,328 impressions, 24 clicks between them. That is 0.03% of the impressions converting, on the single biggest pool of demand the site has.

Those impressions are not nothing, and they are not quite what they look like either. Google's own documentation says an impression is counted "whenever an item appears in the current page of results, whether or not the item is scrolled into view, as long as the user need not click to see more results (such as being required to click "see more" to see the link)", per [Search Console's impressions and position help page](https://support.google.com/webmasters/answer/7042828). So a position-30 impression implies somebody loaded a page of results deep enough to contain it. It does not imply they read that far down it.

The same page warns that "a position number can mean different things in different situations, and so you should not make simple assumptions". Position 30 is not reliably "page three". Treating the band as a proxy for depth is my inference, not Google's documented meaning, and I am flagging it as one.

What the band is good for is triage. A URL sitting at 21-50 with thousands of impressions is a page Google has already accepted as a candidate for something and then ranked badly. That is a mapping question before it is a content question: either the page is aimed at a query it cannot win at DR 13, or it is aimed at nothing in particular and is being surfaced on the fringe of a topic it half-covers. Both are fixed by changing the target, not by adding words.

A URL at 4-10, by contrast, is mapped correctly. Whatever is wrong there is a title, a snippet or a SERP feature problem, and the keyword map is not the tool. I banded the click side of this curve separately in the post on [striking distance keywords](/blog/striking-distance-keywords/), where positions 1-3 earned 5.01% CTR against 0.050% at 4-10 on this property, though that top-three figure rests on 20 queries and is dominated by one branded search for my own name.

## The 23 URLs That Have Never Earned an Impression

Twenty-three posts do not appear in the page-level export at all. No impressions means Google never returned them for anything, for any query, in 488 days.

The obvious explanation is indexing, and the numbers do not support it. Search Console reports 137 of 141 submitted URLs as indexed, so at most four URLs on the whole property are unindexed, which cannot account for 23 silent posts. The rest are indexed and still never surface.

That makes them a mapping failure rather than a technical one. Each was written against a query it was never going to be a candidate for, or against no query at all. A zero-impression post is the cheapest thing on this list to fix, because there is no ranking history to protect and no traffic to risk. Nothing is lost by retargeting it outright, folding it into a URL that does have impressions, or letting it go.

I have not run a link audit on these 23 to see how many are also poorly linked internally, so I cannot say how much of the silence is targeting and how much is crawl priority. That is the next measurement, not a conclusion I get to draw here.

## Top Pages: 34,303 Impressions and One Click

The per-page table makes the argument harder to dodge than the bands do.

| Page | Impressions | Clicks | Average position |
|---|---:|---:|---:|
| /blog/what-is-seo-report/ | 34,303 | 1 | 44.5 |
| /blog/how-much-does-an-seo-audit-cost/ | 18,866 | 7 | 12.0 |
| /blog/what-is-cross-network-in-google-analytics/ | 13,244 | 11 | 9.1 |
| /blog/how-do-i-check-my-seo-ranking/ | 10,588 | 1 | 30.2 |
| /blog/competitive-battlecard-template/ | 9,259 | 8 | 15.9 |
| /blog/what-does-chatgpt-stand-for/ | 9,164 | 4 | 15.6 |
| /blog/do-google-reviews-help-seo/ | 6,542 | 0 | 54.8 |
| /blog/product-launch-checklist/ | 5,476 | 4 | 21.5 |
| /blog/product-led-growth-examples/ | 2,885 | 13 | 7.5 |
| / (homepage) | 920 | 58 | 4.35 |

My single biggest page by impressions, [the SEO report post](/blog/what-is-seo-report/), sits at average position 44.5 and has one click to show for 34,303 impressions. My ninth biggest, on product-led growth, turns 2,885 impressions at position 7.5 into thirteen clicks. Position, rather than impression volume, is what separates them.

Ranked by impressions, the SEO report post is my most important asset and deserves the most work. Ranked by position, it is a page targeting something a DR 13 site is not going to win, and the honest move is to remap it at a narrower query rather than keep feeding it. The same reading applies to [the Google reviews post](/blog/do-google-reviews-help-seo/) at position 54.8 with zero clicks on 6,542 impressions.

Sitewide this adds up to 186 clicks on 164,564 impressions, a 0.11% CTR. Ahrefs, measuring whole-site CTR across 422,421 sites with anonymised Search Console data, [puts the median for the DR 10-20 band at 0.56%](https://ahrefs.com/blog/what-is-a-good-ctr/) as of its June 2026 data month, and states that "a sub-1% CTR isn't a failure, it's the norm when you're under DR 40". So 0.11% is roughly a fifth of the median for my DR band: low, and inside a range where low is ordinary. Their figure is whole-site clicks divided by impressions, refreshed monthly, which is why it is comparable to my 0.11% and not to any position-1 benchmark.

## What a Keyword Map From a Search Console Export Cannot Do

My own map is still unfinished, because of a limit in the export itself.

A bulk Search Console export gives pages and queries as two separate tables. There is no key joining them. I can tell you that /blog/what-is-seo-report/ averages position 44.5 and that the query "seo optimization report" averages position 34.8 with 1,192 impressions, and I cannot tell you from this export that those two facts are about each other. The query dimension and the page dimension are reported independently.

That leaves the target column of the map empty. Everything above is triage: which URLs need attention and in what order. The assignment itself, one named query per URL, needs a page-filtered query pull, done one URL at a time in the interface or through a per-page API call. For 147 posts that is 147 pulls, and I have not run them.

The query table is also capped at 1,000 rows, so the tail is cut off before you see it. And the Performance report does not show all data, for privacy reasons: Google says it "might not track some queries that are made a very small number of times or those that contain personal or sensitive information", on its [About Search Console data page](https://support.google.com/webmasters/answer/96568). Even a perfect per-page pull returns an incomplete query list.

The diagnosis this most obviously blocks is cannibalization. Two URLs competing for one query is the thing a keyword map exists to prevent, and spotting it in live data requires exactly the query-to-page join this export withholds. I can see two of my posts both sitting around position 20. I cannot see whether they are sitting there on the same query. Anyone telling you to find cannibalization in a bulk export is describing a join that is not in the file.

## How to Build an SEO Keyword Map From a Search Console Export

The order matters, because each step changes which URLs the next step has to look at.

1. Export the Pages report for the longest window your property has, with no filters. Sixteen months is what Search Console retains; take all of it, since a narrow window makes low-volume pages look like zero-volume pages.
2. Left-join your full URL list onto it. The URLs with no matching row are your zero-impression set. Mine was 23 of 147, and it does not show up at all if you start from the export instead of from the site.
3. Band the rows that matched by average position, using the same bands as the table above. The counts, not the averages, are the output.
4. Check the index coverage number against the zero-impression count before blaming targeting. Four unindexed URLs cannot explain 23 silent posts, but four unindexed URLs on a smaller site might explain all of them.
5. For the deep-ranking band only, pull page-filtered queries one URL at a time. This is the slow step and the only one that fills the target column, so spend it on the 31 URLs with an impression pool rather than on all 147.
6. Write the target query into the map, and write the date and position you observed next to it. The map is a snapshot, and an undated snapshot gets treated as a fact six months later.

Steps one to four are an afternoon. Step five is the project. Doing them in that order means the project is 31 URLs instead of 147, which is the only reason I finished the triage at all.

## Which URLs to Remap, Merge, or Leave Alone

| What the export shows | What it means | Action |
|---|---|---|
| No impressions in the full window, page indexed | No query has ever treated this URL as a candidate | Retarget outright or merge into a URL with impressions |
| Position 21-50, large impression pool | Google accepts the topic and rejects the page | Remap to a narrower query, then rewrite to it |
| Position 21-50, few impressions | Weak signal, small stakes | Leave it until the band above is cleared |
| Position 11-20, steady impressions | Mapping is plausible, ranking is the gap | Out of scope for the map; this is a content and links problem |
| Position 4-10 | Mapped correctly | Do not touch the target; work the title and snippet |
| Two URLs at similar positions on one topic | Possible cannibalization | Unprovable from this export; needs per-page query pulls first |

The bottom row is a rule I apply without evidence from this dataset, and I would rather label it that way than let it read as a finding. Every other row follows from the distribution table.

One caveat over the whole table: these are 147 posts on one DR 13 domain with no link building behind them. The bands would sit at different positions on a stronger domain, and the 4-10 row in particular would carry clicks that mine does not. If you want the ordering logic, take the ordering logic. Do not take my thresholds as benchmarks.

## Run the Distribution Before You Write Anything New

A blank SEO keyword map template assumes the expensive question is which query to target. On a published site the expensive question is which of your existing URLs is worth the argument, and the page-level export answers it in about twenty minutes. Band your URLs by position, count the zeroes, and start with the band holding impressions you are not converting.

For the pages that band flags, the work after remapping is ordinary on-page and technical cleanup, which is what [my SEO audit checklist](/blog/seo-audit-checklist/) covers, and the re-check afterwards is the same rank-tracking routine as in [how to check your SEO ranking](/blog/how-do-i-check-my-seo-ranking/). My own next step is 31 page-filtered query pulls, which is the column this export could not fill.
