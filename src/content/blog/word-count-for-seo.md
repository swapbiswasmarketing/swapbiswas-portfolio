---
title: "Word Count for SEO: What 147 Posts on One Domain Show"
description: "Word count for SEO is always measured across sites, where domain authority confounds it. I held the domain constant over 147 posts and the correlation vanished."
publishDate: 2026-09-13
category: [SEO]
faqs:
  - q: "Does word count affect SEO rankings?"
    a: "Google's SEO Starter Guide states that the length of the content alone does not matter for ranking purposes and that there is no word count target, minimum or maximum. On my own 147-post site, word count explained 0.5% of the variance in average Search Console position across the 71 posts with at least 100 impressions, and the result was not statistically significant."
  - q: "What is the ideal blog post length for SEO?"
    a: "There is no length that ranks by itself. The widely quoted figures describe what already ranks rather than what caused it: Backlinko reports a mean of 1,447 words across Google top 10 results, and HubSpot publishes 2,100 to 2,400 words without stating a sample size or method on the page. Both are averages of pages that also differ by domain authority."
  - q: "Is 1,000 words enough for SEO?"
    a: "It can be. Ahrefs found that 53.4% of pages cited by AI Overviews are under 1,000 words, and Google's documentation sets no minimum. The question that decides length is how much a reader needs to finish the task the query describes, which for a definition query is a few hundred words and for a comparison query is more."
  - q: "Why do word count studies disagree with each other?"
    a: "Because they measure across many sites at once, so domain authority varies alongside length and nothing separates the two. Search Engine Land describes these domain-level influences as a black box when you only observe the SERP. My own within-site result changed sign from -0.141 to +0.046 based purely on which impression threshold I used to filter pages."
  - q: "Should I add words to a page that is not ranking?"
    a: "John Mueller of Google, quoted by Search Engine Journal, said that blindly adding more and more text to a page does not make it better. If a page is stuck, the more useful checks are whether it answers the query the impressions are actually arriving on and whether anything links to it."
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
---

Backlinko analyzed 11.8 million Google search results and published the sentence that every word count for SEO article quotes: "Overall, the average word count of a Google top 10 result is 1,447 words" ([Backlinko](https://backlinko.com/search-engine-ranking)). The same page, from the same dataset, also says this: "Pages with higher word count appear to have the same chance of ranking highly on the first page compared to pages with a lower word count."

The first sentence became the benchmark. The second sits in the same study, reporting no relationship between length and position inside page one.

That gap is a method problem, not an editing accident. Benchmarks like these are cross-site correlations: take a set of SERPs, record how long each page is, record where it sits, correlate the two. The variable that most obviously separates those pages is absent from the model, and Backlinko names it on the same page: "We found that a website's overall link authority (measured using Ahrefs Domain Rating) correlates to higher first page Google rankings."

So I ran the version of the test that removes the domain. Across 147 posts on this site, all on one Domain Rating 13 domain, over the Search Console window 2025-05-01 to 2026-08-31, word count explains **0.5% of the variance in average position** (Pearson r = -0.072, p = 0.55, 95% CI -0.30 to 0.16, n = 71). The sharper result is what happens when I change one defensible filter: the correlation flips sign from -0.141 to +0.046.

## Why Cross-Site Word Count for SEO Studies Are Confounded

A confounder is a variable that affects both the cause and the outcome you are studying. Byrnes and Dee define it in Ecology Letters as "variables affecting both a cause and outcome of interest", and describe leaving one unmeasured as how spurious correlations get published ([Ecology Letters, January 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11750058/)).

Domain authority fits that shape for length and rank. It is a measurable cross-site correlate of position: Ahrefs, analyzing "the top 1,000,000 keywords with the most search volume from the US", reports a Spearman correlation of 0.131 between Domain Rating and ranking position, with backlinks at 0.248 and referring domains at 0.255 ([Ahrefs, January 2025](https://ahrefs.com/blog/links-matter-less-but-still-matter/)).

The other half of the confound is the link between domain size and article length, and I have not measured that link. My reasoning is that a 4,000-word researched piece takes a budget, and budgets sit at the same companies that have link profiles, so length and authority are not randomly assigned across domains. That is an argument, not a number I can show you.

Search Engine Land reaches the same caution from the SEO side and uses this exact example: "Sometimes, what looks like a correlation might be explained by another factor entirely. For instance, we might see a correlation between word count and rankings, but this could be because longer content tends to be more comprehensive and valuable, not because Google has a 'word count' factor." The same piece adds that "since we're only looking at the SERP itself and individual page factors, these domain-level influences act as a black box" ([Search Engine Land, July 2024](https://searchengineland.com/seo-decision-making-correlation-analysis-443925)).

Holding the domain constant closes that black box by brute force. Every page in my sample carries the same Domain Rating, because they are all on the same domain.

## How I Tested Word Count for SEO on a Single Domain

The corpus is 147 markdown files in `src/content/blog/`. They share one Astro template, one author, one publishing standard, and one link profile: no deliberate link building has ever been done on this site.

The Search Console export covers 2025-05-01 to 2026-08-31, web search, property swapbiswas.com. Over those 16 months the site recorded 164,564 impressions and 186 clicks, a sitewide CTR of 0.11%, at an average position of 25.4 on desktop and 29.3 on mobile. 124 of the 147 posts picked up at least one impression.

I matched each post's word count, counted from the file on disk on 2026-09-16, to that post's average position in the export, then ran Pearson and Spearman correlations.

The corpus is live, so the descriptive figures below drift as I publish and edit. Re-counting after a later editing pass moved the median by about 25 words and the coefficient by about 0.02, which changes none of the conclusions here. If you reproduce this on my site you will get numbers near these rather than identical to them.

The one judgment call is the impression floor. A post with nine impressions has an average position resting on nine data points, which is noise dressed as a measurement. My primary cut is **71 posts with at least 100 impressions**, and the next section shows what happens when that number changes.

There is enough spread in the corpus to detect an effect if one existed:

| Word count | Value |
|---|---:|
| Shortest post | 913 |
| 25th percentile | 1,755 |
| Median | 2,106 |
| 75th percentile | 2,757 |
| Longest post | 6,292 |
| Mean | 2,459 |

The longest post is 6.9 times the shortest. That is a wider range than most editorial calendars produce on purpose.

## The Result: Word Count Explains 0.5% of Position Variance

| Measure | Value |
|---|---|
| Pearson r | -0.072 |
| Spearman rho | -0.132 |
| r squared | 0.5% |
| p (two-tailed) | 0.55 |
| 95% confidence interval | -0.30 to 0.16 |
| n | 71 posts |

A p-value of 0.55 means a correlation this size turns up in random data more than half the time. The confidence interval spans zero and covers both a moderate negative relationship and a small positive one, which is another way of saying the data does not know.

For scale, my Spearman of -0.132 is roughly the size of the Domain Rating correlation Ahrefs measured across a million keywords, and Ahrefs attaches this caveat to its own numbers: "These are generally considered weak correlations or even very weak correlations on the Spearman scale, but that doesn't mean that these things aren't important." Their coefficient comes from a million keywords across the open web; mine comes from 71 pages on one small site. The magnitudes are close and the evidentiary weight is not.

## The Sign Flips Depending on Where I Cut

The impression floor is the only arbitrary choice in this method, and every value in the first column below is defensible. Here is what each one returns:

| Impression floor | n | Word count vs position (r) |
|---|---:|---:|
| 0 | 124 | -0.141 |
| 10 | 112 | -0.180 |
| 50 | 86 | -0.085 |
| 100 | 71 | -0.072 |
| 250 | 50 | +0.038 |
| 500 | 35 | +0.046 |

At a floor of 10 impressions, longer posts rank better. At a floor of 500, longer posts rank worse. Same corpus, same window, same export, opposite headline. None of these coefficients is significant at this sample size.

If I wanted to publish "longer content ranks better on my site", I would cut at 10 and never mention the alternative. For the opposite headline I would cut at 500. Neither would be fraud, and both would be worthless. A relationship that survives only one arbitrary filter setting is not a relationship.

## Word Count Bands Against Average Position

Correlations assume a straight line, so the bands are worth checking separately. These are the same 71 posts at the 100-impression floor:

| Band | n | Median position | Mean position |
|---|---:|---:|---:|
| Under 1,500 | 11 | 24.3 | 29.7 |
| 1,500-2,000 | 34 | 17.9 | 20.1 |
| 2,000-2,500 | 18 | 18.8 | 19.9 |
| 2,500-3,000 | 7 | 12.0 | 28.6 |
| 3,000+ | 1 | 30.2 | 30.2 |

The 2,500-3,000 band has a median of 12.0 and a mean of 28.6, which means seven posts split into two groups 16.6 positions apart, so do not treat that band as evidence of anything. The 3,000+ band is a single post. And the middle of the table, 1,500 through 2,500 words, moves by less than one position across 52 posts.

The individual posts are more instructive than the bands. My longest post in the cut is [the guide to checking SEO rankings](/blog/how-do-i-check-my-seo-ranking/) at 3,225 words: 10,588 impressions at average position 30.2. The shortest in the cut is [a piece on how marketing research helps managers](/blog/how-does-marketing-research-help-managers/) at 966 words, sitting at position 29.8. The two differ by 3.3x in length and by half a position in the export.

The best-positioned post on the site is [the sales enablement checklist](/blog/sales-enablement-checklist/) at 1,924 words, average position 5.8 over 832 impressions. Close behind is [the product-led growth examples post](/blog/product-led-growth-examples/) at 1,875 words, position 7.5, and it earned 13 clicks, more than any other blog URL in the export. Both sit under the corpus median length. The worst position in the cut belongs to [a post asking whether AI will replace marketing](/blog/will-marketing-be-replaced-by-ai/) at 1,011 words and position 74.5, which reads to me as a query competition problem rather than a length problem.

## Does Content Length Affect Rankings?

Not in any way I could detect on this domain, and Google's documentation says the same in its own voice. The SEO Starter Guide states: "The length of the content alone doesn't matter for ranking purposes (there's no magical word count target, minimum or maximum, though you probably want to have at least one word)" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), last updated 2025-12-10).

Google's helpful content documentation names writing to a target as the anti-pattern, in the form of a self-assessment question: "Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

John Mueller of Google, quoted by Search Engine Journal, put it as "From our point of view the number of words on a page is not a quality factor, not a ranking factor", and in the same answer rejected the obvious workaround: "Just blindly adding more and more text to a page doesn't make it better" ([Search Engine Journal, February 2021](https://www.searchenginejournal.com/word-count-not-a-quality-factor/397288/)).

My measurement does not prove Google's statement. It is consistent with it, on one small domain, at n = 71.

## Ideal Blog Post Length Numbers and Where They Come From

Three numbers circulate: 1,447, 2,100 and 2,400. Each is worth tracing.

Backlinko's 1,447 is explicitly a mean, under the heading "The Mean Word Count of a Google First Page Result Is 1,447 Words". A mean describes the pages that are already there. It does not describe what put them there, which is why the same study's no-relationship finding is not a contradiction of it.

HubSpot publishes "a blog post should be about 2,100-2,400 words long for SEO" ([HubSpot](https://blog.hubspot.com/marketing/blog-search-engine-optimization)), while a second HubSpot page states "the ideal blog post length is roughly 2,100 words" ([HubSpot](https://blog.hubspot.com/marketing/anatomy-perfect-blog-post)). Neither page states a sample size, a date for the underlying analysis, or which outcome was measured. The range on one page and the single figure on the other cannot both be the same finding stated precisely.

Ahrefs has published a word-count coefficient, and it sits near zero: "The Spearman correlation between word count and citation position is 0.04 - essentially zero", measured over 174,048 pages drawn from AI Overview citations ([Ahrefs, December 2025](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/)). That measures position among AI Overview citations rather than classic organic rank, so it is not a substitute for my measurement. The same study reports that "53.4% of pages cited by AI Overviews are under 1,000 words."

Ahrefs also states the mechanism I find most plausible for why the averages look the way they do: "Length could simply be a byproduct of quality, not the driver. Yet, as SEOs, we copy the format, not the value" ([Ahrefs, April 2025](https://ahrefs.com/blog/long-form-content/)).

## Limits of This Word Count for SEO Test

The limits of this test matter as much as the result, so here they are without softening.

I did not measure clicks against length. The site has 186 clicks across the entire 16-month window, which cannot support a correlation. I did not run a before-and-after: no post in this corpus was lengthened or shortened and then re-measured, so nothing here speaks to what happens when you edit a live page. I did not control for keyword difficulty or competition, and that is the largest omission, because the queries these posts land on differ far more than the posts do.

I did not measure content quality, reader satisfaction, or whether any of these posts answer their query well. And I did not measure the distribution of article length across domains, which is the mechanism I proposed for the confound in the first place.

The sample is 71 posts on one Domain Rating 13 site with no link building. Anyone reading this as "word count does not matter" is over-reading it. The correct reading is narrower: on one domain where authority is held constant, the length signal behind Backlinko's 1,447-word average did not survive, and the answer I got depended on a filter setting I chose myself.

## How to Decide How Long Your Next Post Should Be

Pick the length from the job. A definition query is finished in a few hundred words; a comparison query needs the table, the exceptions and the decision rule, and that runs longer because the reader has more to decide, not because a target says so.

Then check the thing that actually moves position. On this site the largest single pool of stranded impressions sits at positions 21 to 50: 31 URLs holding 73,328 impressions and returning 24 clicks. Those pages do not need more words. They need to be closer to the top, which is what [the striking distance keywords method](/blog/striking-distance-keywords/) is for. Open Search Console, sort by impressions, and read what those pages are ranking for before you open the word processor.
