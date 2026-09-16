---
title: "How Many H2 Tags Per Page? The Rule Has No Source"
description: "How many H2 tags per page is right? Google says there is no ideal heading count, and across 147 of my posts H2 count explains 0.7% of ranking position."
publishDate: 2026-09-13
category: [SEO]
faqs:
  - q: "How many H2 tags per page is best for SEO?"
    a: "There is no set number. Google's SEO Starter Guide states there is no ideal amount of headings a page should have, and across 147 posts on my own site the H2 count explains 0.7% of the variation in average Search Console position, at p = 0.47. Use one H2 for each section a reader would go looking for."
  - q: "Are multiple H2s bad for SEO?"
    a: "No. Multiple H2 tags are the ordinary structure for an article, and Google's documentation sets no upper limit on headings. Every post on my site carries at least 5 H2 tags, and 137 of the 141 URLs I submitted are indexed."
  - q: "Is there a real rule of one H2 every 250 to 500 words?"
    a: "The ratio circulates widely and has no primary source behind it. The pages that publish it cite other content-marketing blogs, and the nearest thing to an origin is the Yoast SEO subheading distribution check, a WordPress readability feature that recommends 250 to 350 words after each subheading and cites no research."
  - q: "Does the order of H2 and H3 tags matter for Google?"
    a: "Google's SEO Starter Guide states that semantic heading order is valuable for screen readers but does not matter from a Google Search perspective. Keep the hierarchy correct for accessibility rather than for ranking."
  - q: "Should I add more H2 tags to rank higher?"
    a: "Nothing in my data supports that. Across the 71 posts I measured with at least 100 impressions, posts with 9 to 10 H2 tags had a worse median position than posts with 5 to 6, and the correlation changes sign depending on which impression floor I pick."
img: /assets/stock-8.webp
img_alt: "Renaissance-style study of an open library with globes and folios, a red bookmark in the open volume"
---

The 147 posts on this site carry between 5 and 19 H2 tags each, at a median of 8. I ran that spread against every post's average position in Google Search Console, and H2 count accounts for **0.7% of the variation in position**, at a two-tailed p of 0.47. That is what a non-effect looks like when you measure it on real pages.

The published answers to how many H2 tags per page you should use are far more confident than that. The most repeated one is a ratio: one H2 every 250 to 500 words. I followed its citations to the end, and they terminate in a WordPress plugin's readability check that cites no research at all, while Google's live documentation states there is no ideal heading count in the first place.

Everything first-hand here comes from one property: swapbiswas.com, Domain Rating 13, 147 posts, no deliberate link building ever done. The Search Console window is 2025-05-01 to 2026-08-31, search type Web, and the corpus was measured from `src/content/blog/*.md` on 2026-09-16. A single small site cannot prove that a ranking factor does not exist, so the limits get their own section rather than a footnote.

## How Many H2 Tags Per Page Should a Post Have?

There is no correct count. Use one H2 for each section a reader would go looking for, and stop when you run out of sections.

Google's SEO Starter Guide, last updated 2025-12-10, puts it in Google's own voice: "There's also no magical, ideal amount of headings a given page should have. However, if you think it's too much, then it probably is" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). The same page removes the other half of the usual heading advice: "Having your headings in semantic order is fantastic for screen readers, but from Google Search perspective, it doesn't matter if you're using them out of order."

Both quotes are generic to headings rather than specific to H2 tags, and Google has published nothing about H2 counts in particular, so do not read either line as an H2 ruling. The order quote makes heading hierarchy an accessibility requirement instead of a ranking one, which is a reason to keep your order correct and not a reason to stop caring about it.

## Where the One H2 Per 250 to 500 Words Rule Comes From

The ratio has a paper trail, and the trail runs out.

| Page | Published | What it says about heading count | What it cites for that |
|---|---|---|---|
| [Up North Media](https://upnorthmedia.co/blog/how-many-h-2-tags-per-page) | 07.22.2026 | "about one H2 per 250 to 500 words, depending on depth and granularity" | Hello Digital, BlogPros, W3Era and an "Incremys 2026 guide" |
| [Hello Digital](https://www.hellodigital.ie/blog/how-many-h2-tags-per-page-is-best-for-seo) | May 2025 | "For blog posts or service pages under 1,000 words, two or three H2 tags is usually enough" | no citation on the page |
| [Yoast subheading distribution check](https://yoast.com/wordpress/plugins/seo/subheading-distribution-check) | December 11, 2025 | "The text following a subheading should be 250-350 words" | no study, no Google guidance |
| [Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) | 2025-12-10 | "There's also no magical, ideal amount of headings a given page should have" | Google's own documentation |

Yoast's subheading distribution check is a readability feature inside a WordPress plugin. Its job is to stop a block of running text from getting too long for a reader to hold, and the page attaches no ranking claim and no study to its 250 to 350 number. Somewhere between that readability check and a 2026 SEO blog post, the heuristic picked up a ranking rationale nobody ever tested.

## How Many H2 Tags Per Page This Site Publishes

Measured from the markdown source of all 147 posts on 2026-09-16:

| H2 count across 147 posts | Value |
|---|---:|
| Minimum | 5 |
| 25th percentile | 7 |
| Median | 8 |
| 75th percentile | 10 |
| Maximum | 19 |
| Mean | 8.4 |

None of that was planned against a ratio. I wrote sections and counted nothing, and the median landed on 8 H2 tags.

Manufacturing agreement with the rule is easy from here. The median post on this site is 2,106 words and the median post has 8 H2 tags, so dividing one median by the other gives about 263 words per heading, which sits neatly inside Yoast's 250 to 350 band. That number is arithmetic on two separate medians rather than a median of ratios, and it is exactly the sort of figure that gets quoted as validation. It validates nothing, because I never targeted it.

## H2 Count Against Ranking Position on 71 Posts

The cut is 71 posts with at least 100 Search Console impressions in the window. Below 100 impressions an average position rests on a handful of impressions and reports noise, so those posts are out of the correlation.

| Statistic | H2 count vs average position |
|---|---|
| Pearson r | +0.086 |
| Spearman rho | +0.097 |
| r squared | 0.7% |
| p (two-tailed) | 0.47 |
| 95% confidence interval | -0.15 to +0.31 |

Position is a number where smaller is better, so a positive coefficient here means more H2 tags went with slightly worse average position. Nobody should act on that. The confidence interval covers zero, the p value is 0.47, and 0.7% of variance explained means H2 count tells you close to nothing about where these 71 pages sit.

For scale, set it against a published cross-site coefficient. Ahrefs analysed the top 1,000,000 US keywords by search volume in January 2025 and reported a Spearman correlation of 0.131 between Domain Rating and ranking position, with the caveat that its own numbers are "generally considered weak correlations or even very weak correlations on the Spearman scale" ([Ahrefs](https://ahrefs.com/blog/links-matter-less-but-still-matter/)). My H2 rho of +0.097 sits under the figure Ahrefs itself labels weak, on 71 pages instead of a million keywords.

## The H2 Bands Run Backwards

Grouping the same 71 posts by how many H2 tags they carry:

| H2 band | Posts | Median position | Mean position |
|---|---:|---:|---:|
| 5-6 H2 | 16 | 16.5 | 21.5 |
| 7-8 H2 | 36 | 18.9 | 22.0 |
| 9-10 H2 | 16 | 24.5 | 23.5 |
| 11+ H2 | 3 | 23.2 | 28.9 |

Median position gets worse from the 5-6 band to the 9-10 band, then improves again at 11+, which is not a curve anyone can act on. The 11+ band holds three posts. The medians and the means disagree about which band is worst. Had this table pointed the other way, it would be quoted as proof that more headings rank better, on the same three-post band.

The individual pages say it louder. My strongest average position in the cut belongs to the [sales enablement checklist](/blog/sales-enablement-checklist/), at 5.8 across 832 impressions, and it has 7 H2 tags. Next is [product-led growth examples](/blog/product-led-growth-examples/) at 7.5 across 2,885 impressions, with 6 H2 tags. The longest post in the cut, [how to check your SEO ranking](/blog/how-do-i-check-my-seo-ranking/), also has 7 H2 tags, spread across 3,225 words, and sits at position 30.2 on 10,588 impressions. The weakest position in the cut, [will marketing be replaced by AI](/blog/will-marketing-be-replaced-by-ai/), has 5 H2 tags and sits at 74.5.

## Move the Impression Floor and the H2 Correlation Flips

The impression floor used to define the cut is a judgement call, and every plausible value of it produces a different answer.

| Minimum impressions | Posts in cut | H2 count vs position (r) |
|---|---:|---:|
| 0 | 124 | -0.010 |
| 10 | 112 | -0.053 |
| 50 | 86 | +0.041 |
| 100 | 71 | +0.086 |
| 250 | 50 | +0.220 |
| 500 | 35 | +0.258 |

Every row is defensible. Include every URL that ever drew an impression, or demand enough impressions that the average position carries meaning. The sign of the correlation depends on which line of reasoning you pick, and the magnitude at a 500-impression floor is three times the magnitude at 100. None of the six values is statistically significant at this sample size.

A real effect does not behave like that. Choose the floor after seeing the answer and you can publish either headline from the same 124 URLs, which is a fair description of how content-attribute studies get written.

## A Within-Site Correlation Cannot Settle a Ranking Question

The design has one real advantage, worth naming because a cross-site study cannot claim it. Every page in my cut sits on the same domain, with the same Domain Rating, the same internal linking pattern and the same author, so domain authority is held constant instead of floating unobserved. Search Engine Land describes the unobserved version as a black box: "Since we're only looking at the SERP itself and individual page factors, these domain-level influences act as a black box" ([Search Engine Land](https://searchengineland.com/seo-decision-making-correlation-analysis-443925)). Ahrefs' 0.131 coefficient above shows that box is not empty. Byrnes and Dee, writing in Ecology Letters, give the general definition: a confounder is one of the "variables affecting both a cause and outcome of interest" ([Ecology Letters](https://pmc.ncbi.nlm.nih.gov/articles/PMC11750058/)).

Holding the domain constant removes that confounder and leaves a smaller one behind. The same Search Engine Land piece warns that "Sometimes, what looks like a correlation might be explained by another factor entirely", and on my corpus the untested candidate is topic: I did not check whether the posts carrying more H2 tags cluster into particular subjects.

The limits, stated plainly:

- n = 71 on one domain at Domain Rating 13, with no link building ever done. Nobody should generalise from that.
- Search Console "average position" is averaged across every query a URL appeared for, so it moves when the query mix moves and not only when the ranking moves.
- The measurement is observational. I have not changed the H2 count on any page and watched what happened, so there is no before and after here.
- I counted headings and nothing else. I did not measure what the H2 text says, whether it matches a query, how long each heading is, or how H3 nesting is used.

What the data supports is narrow: on 147 posts at Domain Rating 13, heading count carried no usable signal about position, and the direction of the relationship was unstable across reasonable analysis choices. It cannot tell you that H2 count is inert on a DR 80 domain, and I have not measured that.

## H2 Best Practices That Survive the Evidence

- Give every H2 a section a reader would scroll to find. If two headings answer the same question, merge the sections and delete one.
- Write the heading in the words a reader would use to ask the question. A heading is a navigation label before it is anything else.
- Keep H2 and H3 nesting semantically correct for screen readers, since Google states the order does not matter for Search while assistive technology depends on it.
- Delete an H2 instead of writing filler underneath it to satisfy a words-per-heading ratio.
- Diagnose a page by query rather than by structure. When one of my pages underperforms, the check I run is the [striking distance keyword](/blog/striking-distance-keywords/) pass, which looks at where the URL already ranks and for what.

## Are Multiple H2s Bad for SEO?

No. Multiple H2 tags are the ordinary structure of an article, and a page with exactly one H2 is the unusual case. Google's documentation sets no upper bound on headings, and the caution attached to it is a judgement about the reader rather than a limit for the crawler.

On this site, every one of the 147 posts uses at least 5 H2 tags and 137 of the 141 URLs I submitted are indexed, so multiple H2s kept nothing out of the index here. Indexation is not ranking, and I have not tested a single-H2 version of any page against its current one, so treat that as evidence about crawling rather than about position.

The band table above says the reverse claim fails too. I cannot tell you that fewer H2 tags rank better, because the direction reverses when I move the impression floor by one step.

## Decide How Many H2 Tags Per Page by Counting Sections

Open the page you were about to add a heading to and read its H2 tags as a list on their own, with the body text hidden. If that list reads like the questions a reader arrived with, the count is right, whatever the number turns out to be. If two entries answer the same question, merge them. If a section has no question behind it, delete the section rather than the heading.

This post has ten H2 tags. I did not pick a ratio and then fill it; I picked the sections and counted afterwards, which is the method the evidence here supports. Count the sections, then stop.
