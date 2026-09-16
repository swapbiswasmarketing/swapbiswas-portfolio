---
title: "Alt Text and SEO: 159 Posts, Only 8 Alt Strings"
description: "Alt text and SEO advice checks whether the attribute exists. My 159 posts all pass that test, and they share 8 alt strings, one of them on 52 pages."
publishDate: 2026-09-15
category: [SEO, Design]
faqs:
  - q: "Does alt text help SEO?"
    a: "Google's image documentation states that it reads alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image. That is a claim about image understanding, and it is the whole of what the documentation promises. It does not say alt text moves a page's position in web results, and I have no data from my own site that would show one."
  - q: "How do you write alt text for a chart?"
    a: "Put the finding in the page text and let the short alt identify the chart. W3C WAI splits a complex image's alternative into a short description that identifies the image and a long description that carries the information the image encodes. A string saying the image is a bar chart has described the file format, not the result."
  - q: "What should the alt text be for a decorative image?"
    a: "An empty alt attribute. The W3C WAI decision tree gives that answer for images that are purely decorative, and WCAG 2.2 carves out non-text content that is pure decoration or used only for visual formatting so assistive technology can ignore it."
  - q: "Is duplicate alt text across pages an SEO problem?"
    a: "I cannot show a ranking cost, because 8 strings across 159 pages leaves no variation to test against. The cost I can show is the accessibility one: 52 of my pages announce a painting that has nothing to do with the article underneath it."
  - q: "How do you audit alt text across a whole site?"
    a: "Count unique values rather than missing ones. A crawler reporting full alt coverage is answering a different question. If a content directory has far more pages than distinct alt strings, something automated is writing them."
img: /assets/stock-2.webp
img_alt: "Renaissance-style still life of a craftsman's bench with a finished astrolabe, sketches and a red ribbon"
---

Every one of the 159 posts on this site carries alt text on its hero image. I counted the values on 2026-09-16 and they resolve to 8 unique strings. One of them sits on 52 posts:

> Renaissance-style painting of a walled hill town at dawn with market stalls, a red banner rising above the square

None of those 52 posts is about a hill town. They cover pricing, launch planning, account prioritization in ABM and email design; one of them is my breakdown of [SaaS pricing models](/blog/saas-pricing-models/). Advice about alt text and SEO is built around the missing `alt` attribute, and against that test my corpus scores 159 out of 159. The defect I actually have is the other shape: alt text that is present, valid, descriptive, free of keyword stuffing, and worthless on the page it sits on.

The cause is mine. `scripts/assign-blog-covers.cjs` picks one of the stock cover paintings by the post's category and writes the matching `img_alt` into the frontmatter. It knows the category and it knows the painting. It has never read the article.

That generalizes past my own script. Alt text produced by a system describes the system's idea of the image, because the image is what the system was handed. Mine describes a painting accurately. What it does not describe is the page, and the page is what someone listening to a screen reader was trying to reach.

Numbers below come from two measurements. The alt text audit is a count taken from `src/content/blog/*.md` on 2026-09-16. The Search Console figures come from a Web-search export for swapbiswas.com covering 2025-05-01 to 2026-08-31, 488 days, 164,564 impressions and 186 clicks at a 0.11% sitewide CTR. The domain is Domain Rating 13, re-measured on the Ahrefs free endpoint on 2026-09-12. One small site, no link building ever done.

## The Audit: 159 Posts, 8 Unique Alt Strings

The whole audit is one line:

```bash
grep -h "^img_alt:" src/content/blog/*.md | sort | uniq -c | sort -rn
```

This is what it returned on 2026-09-16.

| Alt string, ranked by use | Posts carrying it |
|---|---:|
| 1st | 52 |
| 2nd | 47 |
| 3rd | 23 |
| 4th | 13 |
| 5th | 11 |
| 6th | 7 |
| the 2 remaining strings combined | 6 |

Six strings account for 153 of the 159 values. Two strings account for 99 of them.

These totals changed after I added 12 posts and re-ran `scripts/assign-blog-covers.cjs` over the corpus, and running it again will change them again.

Any check counting empty `alt` attributes passes this corpus cleanly. Every page has a value, no value is blank, no value is stuffed with keywords, none of them opens with "image of". The markup is correct and the content is wrong, a state that no attribute-level check is built to report.

## Where Alt Text and SEO Advice Stops Short

The standard guidance is four rules: describe the image, keep it short, skip "picture of", do not stuff keywords. My 8 strings pass all four. They were written by a program holding a category name and a painting, and they read like what they are, captions for a painting.

The rule the guidance leaves out is that alt text has to be about this page. Any writer working from the image file alone, whether that is a script like mine or a vision model handed a JPEG, produces a caption. On a page where the image is decoration, a caption is the wrong output, and no amount of polish on the caption fixes it.

This is the same defect class as generated markup that validates and still sends the wrong thing to a crawler. I went through [what a crawler actually receives from a generated site](/blog/vibe-coded-website-seo/) in a separate post; the pattern repeats here, where the thing a tool emits is syntactically perfect and unrelated to the document.

## WCAG Asks for Equivalent Purpose, Google Asks for Subject Matter

WCAG 2.2 Success Criterion 1.1.1 requires non-text content to have "a text alternative that serves the equivalent purpose" ([W3C](https://www.w3.org/TR/WCAG22/#non-text-content)). Purpose, not appearance. The same criterion carves out decoration: non-text content that is pure decoration, is used only for visual formatting, or is not presented to users can be implemented so assistive technology ignores it.

Google's image documentation points somewhere else. It says "Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image", and it warns against "filling `alt` attributes with keywords (also known as keyword stuffing) as it results in a negative user experience and may cause your site to be seen as spam" ([Google Search Central](https://developers.google.com/search/docs/appearance/google-images)). The example it labels "Best" on that page is `alt="Dalmatian puppy playing fetch"`.

Put the two targets side by side and my 52 duplicates land somewhere odd. They are accurate about the image, which is what Google's sentence asks for. They fail the WCAG test, because the purpose that painting serves on a page about pricing models is decoration, and announcing decoration as content is not an equivalent purpose. The W3C WAI decision tree gives the fix for that case in four words: "Use an empty `alt` attribute" ([W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)).

So the honest reading of my audit is not that I wrote bad descriptions. I wrote good descriptions of the wrong object, 159 times, and shipped them into an attribute whose job is something else.

## Does Alt Text Help SEO?

Google states that it uses alt text together with computer vision and the page contents to work out what an image shows. That is a documented use, and it is the limit of what the documentation claims. Nothing on that page says alt text lifts a page's position in web results.

On this property I cannot test it either way, and the constraint is worth stating exactly. Alt text here is a variable with 8 values across 159 pages, and pages sharing a value share a category, so any comparison between groups confounds alt text with topic. There is no experiment to run on a corpus shaped like that, and I did not run one.

What the export does show is the shape of the traffic these pages get. Across the window, the 169 queries where this site averaged positions 4 through 10 returned 5 clicks on 9,917 impressions, a CTR of 0.050%. Image markup is not the variable deciding that number; position is, and on a Domain Rating 13 site with 159 posts the sample behind any single-factor ranking claim is small enough that I would not act on it.

My case for fixing alt text here rests on the 52 pages, not on rankings.

## How to Write Alt Text When the Image Is Decoration

The check takes about ten seconds per page: read the alt text aloud in place of the image and ask whether that sentence belongs to this article. Say "Renaissance-style painting of a walled hill town at dawn with market stalls, a red banner rising above the square" in front of an article about lead funnels and the answer arrives on its own.

Three outcomes follow from that read:

- The image carries information the body text does not. Describe what it shows in the context of this page, in a sentence a reader could act on without seeing it.
- The image repeats something the page already states. Keep the alt short and let the body text do the work rather than writing a second, competing description.
- The image is decoration. Empty `alt` attribute.

My hero images are the third case, and I have not shipped that fix. The blocker is structural: on this site `img_alt` is a frontmatter field, and one value feeds the blog card, the article header and the generated Open Graph image. An empty string there is not the same edit as an empty `alt` in hand-written markup, and I have not worked out what each of those three consumers should get. Saying that is more useful than implying the audit ended in a deploy.

A generator can be made page-aware cheaply, and mine is not. It already opens each post file to read the category, and the same frontmatter block holds that post's title and description. An alt string built from those would at least be a sentence about the article rather than about a painting. It would still be the wrong answer for a decorative cover image, which is the more interesting half of the problem: better inputs produce a better caption, and a caption is not what that slot is for.

Counting unique alt values belongs in the same pass as counting missing titles and broken canonicals. The longer sequence I use is in [how to conduct a technical SEO site audit](/blog/how-to-conduct-a-technical-seo-site-audit/), and this check is one more line inside it.

## Alt Text for Charts: Carry the Finding, Not the Chart Type

Charts are where the accessibility guides and the SEO guides each answer half the question. W3C WAI splits a complex image's text alternative in two. "The first part is the short description to identify the image and, where appropriate, indicate the location of the long description." The second part is the long description, which the same tutorial describes as a textual representation of the essential information conveyed by the image ([W3C WAI](https://www.w3.org/WAI/tutorials/images/complex/)).

The tutorial's own bar chart example makes the division concrete. It says the long description "can point out the declining values for site 1, consistent values for site 2, and increasing values for site 3 that are encoded in the bar chart". Three series, three movements, stated in words.

Read the short half of that same example and it complicates the rule in a useful way. The alt attribute on the tutorial's chart reads "Bar chart showing monthly and total visitors for the first quarter 2025 for sites 1 to 3", which names the chart type before anything else. That is right, and the surrounding markup is what makes it right: a long description sits on the same page, so the alt only has to say which figure the description belongs to. Move that same string onto a page carrying no long description and it becomes the entire text alternative, and then it delivers a chart type and nothing else.

Apply that to my own data. If the duplication table above had shipped as a bar chart, the alt text any generator has enough information to write is "Bar chart showing alt text duplication across 159 blog posts". Someone listening to that has learned a chart exists. The information in the chart is that six strings cover 153 of 159 posts and the top string covers 52 on its own, and that sentence is the alternative text. The chart type is packaging.

The practical consequence is an ordering rule: write the paragraph before you draw the chart. The W3C WAI decision tree's route for complex information is to "include the information contained in the image elsewhere on the page" ([W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)). Once the finding is a sentence in the body, the short alt can identify the figure and stop, and nobody is depending on a one-line attribute to carry a five-series comparison.

Heatmaps are the clearest case of this. The image is a color field and the finding is where attention stops. Working through [how to read a heatmap](/blog/how-to-read-a-heatmap/), every sentence that mattered was about the scale and the drop-off point rather than about the picture. Those sentences are what the alt text owes a reader.

This post ships no diagram, on the same logic. The audit is seven numbers in a table. A bar chart of seven numbers would add a picture and no information, and then it would need alt text carrying the seven numbers back.

## Long Descriptions Belong in the Page Body

Deciding that a chart needs a long description leaves the harder question of where to put it. The W3C WAI tutorial gives three placements: a text link to the long description next to the image, a description of the long description's location written into the alt attribute itself, and the `aria-describedby` attribute pointing at an element elsewhere on the same page ([W3C WAI](https://www.w3.org/WAI/tutorials/images/complex/)).

The third one carries a trap the tutorial flags directly. "The element referenced by `aria-describedby` is treated as one continuous paragraph of text. Screen readers and other assistive technology do not have access to structural information, such as any headings and tables." A data table describing a chart, referenced through `aria-describedby`, arrives as a run of values with the row and column relationships stripped out.

That pushes the practical answer back toward the plainest option. Put the numbers in a real table or a real paragraph in the body of the page, visible to everyone, and link to it or place it adjacent to the figure. The version that works for a screen reader is the same version that works for a reader who opens the page on a phone and never zooms into the chart, and it is the version a search engine can read as text rather than inferring from pixels.

## Image Alt Text Best Practices Worth Keeping

Rules that survived the audit, each paired with something you can check.

| Rule | The check |
|---|---|
| Alt describes the image in the context of this page | Read it aloud in place of the image and ask if it belongs to this article |
| Decorative images get an empty alt attribute | Ask whether the page loses information when the image is removed |
| No keyword stuffing | Google's own failing example is 15 dog-related keywords in one attribute |
| Audit uniqueness, not coverage | Count distinct alt strings against page count; a large gap means a program is writing them |
| Charts put the finding in the body text | The paragraph beside the chart should still make the point with the image deleted |

The fourth rule is the one I did not have before this week, and it is the one that would have caught my own defect.

## Limits of the Alt Text Audit

The limits here are real and the sample is one small site, so the list matters as much as the finding.

- **Image search.** The export is Search type Web. I have no Google Images impression data for these 159 pages and cannot say whether any of them appears there at all.
- **A ranking effect from alt text.** No variation across the corpus, so no test, so no number. Anyone claiming to have measured one on a 159-page site should show the design.
- **Content images inside articles.** This audit read the frontmatter `img_alt` field, which is the hero image only. Diagrams embedded in post bodies were not counted, and those are where the chart problem above shows up on this site.
- **The fix.** Nothing is deployed. The count is from 2026-09-16 and the frontmatter still reads the same way.
- **Everything outside this domain.** 159 posts, Domain Rating 13, 164,564 impressions and 186 clicks over 488 days, no link building. A site with a different size, authority or image strategy will not behave like this one.

## Fixing Alt Text and SEO on My Own Site

Most advice about alt text and SEO tells you to fill the attribute, and filling it is the easy half. My corpus has been full for 159 posts and has been describing paintings the whole time.

Coverage counts tell you whether the attribute exists. Uniqueness counts tell you whether a person wrote it. Run `uniq -c` over your own content directory this week and see how many distinct strings come back.
