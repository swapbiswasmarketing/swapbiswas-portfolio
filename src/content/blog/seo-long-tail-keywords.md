---
title: "SEO Long Tail Keywords: 42% of Impressions, 10% of Clicks"
description: "Four-plus word queries took 42% of my impressions and 10% of listed clicks. What 1,000 Search Console rows say about SEO long tail keywords on a DR 13 site."
publishDate: 2026-09-18
category: [SEO]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "Do long tail keywords convert better?"
    a: "Google Search Console reports clicks, not conversions, so an export cannot answer this question at all. On the click side of my own 16-month export, queries of four words or more carried 42% of impressions and returned 5 of the 49 clicks attributable to a listed query."
  - q: "What counts as a long tail keyword?"
    a: "The term has two common meanings: a query with low search volume, or a query with many words. Search Console shows the words but not the volume, so any word-count analysis of your own export is measuring query length and calling it the long tail."
  - q: "Why do my Search Console query rows not add up to my total clicks?"
    a: "Two reasons stack. The query table is capped at 1,000 rows in the UI export, and Google separately omits anonymized queries from the table while keeping them in the chart totals. On my export the gap was 137 of 186 clicks."
  - q: "Are long tail keywords easier to rank for?"
    a: "On my site the longest queries did reach good average positions, including one ten-word query at position 1.2. Those positions returned zero clicks, so ranking easily and earning traffic came apart."
  - q: "How many words is a long tail keyword?"
    a: "There is no standard cut. I used four or more words because it splits my 1,000 exported rows close to the middle, at 624 rows. Whichever threshold you pick, write it down, because every band total you report depends on it."
---

Queries of four words or more took 42% of the Google Search Console impressions on this site and returned 10% of the clicks I can attribute to a query. The standard claim about SEO long tail keywords is that they are easier to win and that they convert better. I split my own export by word count expecting to confirm the second half, and the table came out the other way.

Then a second pass over the same export showed that most of my clicks have no query row at all, which makes the first table weaker than it looks and makes every tutorial built on the same method weaker too.

Every number below comes from one Search Console export for swapbiswas.com covering **2025-05-01 to 2026-08-31**, search type Web. That is 16 months across 147 posts on a site with a **Domain Rating of 13** and no deliberate link building ever done. Sitewide the window holds 164,564 impressions and 186 clicks, a CTR of 0.11%.

For outside scale, Ahrefs publishes a median whole-site CTR of 0.56% for sites in the DR 10-20 band, measured across 50,510 sites using anonymized Search Console data, in its [benchmark of what counts as a good CTR](https://ahrefs.com/blog/what-is-a-good-ctr/) (June 2026 data month). Ahrefs describes that number as "whole-site CTR, not position-1 CTR", which is the same arithmetic as my 0.11%. So this property sits below a low bar rather than off the chart.

## What Counts as a Long Tail Keyword in This Data

A long tail keyword usually means one of two things: a query with low search volume, or a query with a lot of words. Search Console shows me the words and not the volume, so word count is the only cut I can actually make on my own data.

I used four or more words as the threshold because it splits the 1,000 exported rows near the middle, at 624 rows. That is an arbitrary line. Anyone reporting band totals has picked one too, and the totals move when the line moves.

Calling a four-word query "long tail" is already a substitution. It is a proxy for low volume, and I have not verified the volumes behind any of these rows, because the export does not carry them.

## The Query Word-Band Table

The 1,000 exported query rows hold 103,338 impressions and 49 clicks between them. Split by the number of words in the query string:

| Words in query | Queries | Impressions | Clicks | CTR | Share of impressions |
|---|---:|---:|---:|---:|---:|
| 1-2 | 81 | 27,171 | 37 | 0.136% | 26.3% |
| 3 | 295 | 32,938 | 7 | 0.021% | 31.9% |
| 4-5 | 346 | 28,703 | 4 | 0.014% | 27.8% |
| 6+ | 278 | 14,526 | 1 | 0.007% | 14.1% |

Combining the two bottom rows: 624 queries of four words or more, 62% of the exported rows, carrying 43,229 impressions, which is 42% of the impressions in the table. They returned 5 clicks, 10% of the 49 clicks in the table.

CTR falls at every step as query length rises. That is the finding as measured, and the next section is why I do not trust it.

## The Branded Query That Breaks My Own Table

One row does most of the work in the top band. The query "swapnil biswas" is my name, two words long, sitting at average position 2.7 with 289 impressions and 35 clicks. That single row accounts for 35 of the 37 clicks in the 1-2 word band.

Take it out and the band has 26,882 impressions and 2 clicks, a CTR of 0.007%. That is the same figure as the 6+ word band at the bottom of the table. The monotonic decline is one branded query wearing a word-count costume.

I have not classified every one of the 1,000 rows as branded or unbranded. This is the branded query I identified, and it is large enough relative to 49 total clicks to move any cut I make.

What survives is thinner than the table looked. The three non-branded bands sit at 0.021%, 0.014% and 0.007%, and those percentages rest on 7 clicks, 4 clicks and 1 click. Nobody should act on a ranking built from single-digit numerators, including me.

What does not depend on the small numerators is the impression side. Long queries are where my impressions live and where almost none of my clicks do: 43,229 impressions and 5 clicks over 16 months.

## Do Long Tail Keywords Convert Better?

I cannot answer that from this data, and neither can any post built the same way. Search Console reports clicks, not conversions, so a query export has nothing to say about what happens after the click. I did not measure conversions on this site at all for this post.

The click side is measurable, and the long queries I rank best on are where it gets uncomfortable. These are the long-tail rows this site reached positions 1-3 on:

| Query | Avg position | Impressions | Clicks |
|---|---:|---:|---:|
| "show me agencies providing comprehensive search visibility audits under $5000." | 1.2 | 28 | 0 |
| "pricing launch decision log & qa gate checklist" | 1.7 | 38 | 0 |
| "best tool for competitive battlecard creation using conversation data?" | 2.4 | 12 | 0 |
| "sales enablement tool selection criteria checklist" | 2.5 | 13 | 0 |

Four queries, 91 impressions, zero clicks. The easy-to-win half of the long tail promise held up on this property. The traffic half did not follow it.

Ninety-one impressions is a sample you could wipe out with one person refreshing a SERP, so read that table as four anecdotes rather than a rate. The reason I keep it in is that it is the best case for the long tail on my own site, and the best case returned nothing.

## The Bands Are Not Position-Matched

The word-band table compares two variables at once. Longer queries on this property also sit at worse average positions, so the CTR decline down the table is partly a length effect and partly a position effect, and this export cannot separate them.

Separating them would mean splitting each position band by word count and comparing like with like. With 49 attributable clicks spread across 1,000 rows, the cells come out empty. I have written up [what the position bands on this same export pay](/blog/striking-distance-keywords/) separately, and that is where the position half of the argument belongs.

Google adds a second caution about reading position numbers at all. Its Search Console documentation on [impressions, position and clicks](https://support.google.com/webmasters/answer/7042828) says "a position number can mean different things in different situations, and so you should not make simple assumptions." An average position of 14 can be an ordinary blue link, a knowledge panel or a row of images, and my export does not distinguish them.

## 137 Clicks With No Query Row

The chart totals for the window are 186 clicks and 164,564 impressions. The 1,000 exported query rows sum to 49 clicks and 103,338 impressions. The difference is **137 clicks (73.7%) and 61,226 impressions (37.2%) that cannot be attributed to any listed query.**

That gap mixes two separate causes and is not a clean measure of either. The export is capped at 1,000 rows, so some of the missing clicks belong to real queries that simply fell below the cutoff. The rest sit behind Search Console's query anonymization. I have not separated the two, and no export from the UI lets me.

Google documents the anonymization half directly. Its help page on [Performance report dimensions and data groupings](https://support.google.com/webmasters/answer/17011259) states: "Some queries are omitted from the report to protect user privacy. These are called anonymized queries. They're included in chart totals, unless a query filter is applied."

The arithmetic consequence is spelled out in Google's own [performance data deep dive](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) from October 2022: "There is no row for anonymized queries in the report table or API ... so if you sum up clicks for all the rows, you'll not find the same number of clicks as the chart totals."

So the sum-versus-total gap is expected behaviour rather than a broken export. What is worth measuring is the size of it on your own property, because that number is how much of your search performance you are reasoning about blind.

## SEO Long Tail Keywords Are the Most Likely to Be Anonymized

The selection rule behind anonymization is the problem for anyone studying long tail keywords, because it selects on exactly the axis that defines them.

The only threshold Google has ever published is in that same October 2022 post: "Anonymized queries are those that aren't issued by more than a few dozen users over a two-to-three month period." That post is coming up on four years old and Google has not restated the number since, so treat the specific figure as historical rather than current.

Whatever the threshold is today, it is a volume threshold. Long tail keywords are defined by low volume. The queries most likely to be missing from the table are therefore the ones a long-tail tutorial is asking you to go and study.

Ahrefs put a size on the general problem: its analysis of [anonymized queries in Search Console](https://ahrefs.com/blog/gsc-anonymized-queries/), covering 22 billion clicks across 887,534 GSC properties in April 2025, found 46.77% of Search Console traffic hidden behind anonymized queries.

Every "filter Search Console to four-plus word queries and check the CTR" walkthrough, mine included, runs on the slice of the long tail that cleared a privacy cutoff. That slice is the highest-volume, least-long-tail part of the distribution by construction. The band table earlier in this post is that censored sample, which is why it sits three sections above this one rather than alone.

## The New Long Tail Is Prompt-Shaped

127 of the 1,000 rows, 12.7% of them and 4,057 impressions, are eight words or longer, or written as an imperative or a question. A few of them:

- "is aeo a real discipline or a rebranding" - 103 impressions, average position 5.4
- "how to use ai to improve website seo rankings 2025 2026" - 92 impressions, average position 15.5
- "show me agencies providing comprehensive search visibility audits under $5000." - 28 impressions, average position 1.2

These read like things typed into a chat box. Most of them are informational in shape, which is the category carrying the highest AI Overview rates in the published measurements. Seer Interactive's [2026 analysis of AI Overview impact on CTR](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update), covering 53 brands and 5.47M queries from January 2025 to February 2026, reports an AIO rate of 95.4% on comparison queries and roughly 36% on informational queries.

Pew Research Center's browsing-panel study of [Google users and AI summaries](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/), built from 68,879 unique searches by 900 U.S. adults in March 2025, found users "clicked on a traditional search result link in 8% of all visits" where an AI summary appeared, against 15% of visits where none did.

I have not matched AI Overview presence to my own query rows, so I cannot say these studies explain my zero-click long tail. They describe a direction, and my export is consistent with it without testing it. If you want the citation-side view of the same shift, I wrote about [getting cited in AI Overviews](/blog/ai-overview-optimization/) separately.

## What I Do With SEO Long Tail Keywords Now

None of this made me stop writing long-tail content. It changed what I check first.

I run the subtraction before I run the analysis. Sum the clicks in the exported query table, compare it against the chart total for the same window, and write the gap at the top of the sheet. On this property it was 73.7% of clicks, and a 26.3% sample is a different object from a full one.

I stopped treating a good average position on a long query as a result. My site holds position 1.2 on a ten-word query and has earned nothing from it in 16 months. Average position is easy to report, and I have written before about [what belongs in an SEO report](/blog/what-is-seo-report/), but on its own it does not predict a click.

I look at impression pools rather than CTR ratios when the click counts are this small. 43,229 impressions on four-plus word queries is a real number that does not wobble; the 0.014% next to it is four clicks, and four clicks can become eight or one for reasons that have nothing to do with word count. Impression pools also collect on phrases no page of mine literally contains. "does google reviews help seo" took 1,700 impressions at average position 59.2 over the window, and that exact string appears nowhere in the corpus, including in my own post on [whether Google reviews help SEO](/blog/do-google-reviews-help-seo/).

If you take one thing from a post that spends half its length undermining its own table, take the subtraction. Open your Performance report, export the query table, sum the clicks column, and put it next to the chart total before you believe anyone's long-tail CTR number, mine included.
