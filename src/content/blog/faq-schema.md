---
title: "FAQ Schema in 2026: What Google Dropped, What Still Works"
description: "FAQ schema markup still validates, but Google stopped showing FAQ rich results on 7 May 2026. This guide dates each step, shows a JSON-LD example and audits page 1."
publishDate: 2026-10-16
category: [SEO, Tools]
img: /assets/stock-8.webp
img_alt: "Renaissance-style study of an open library with globes and folios, a red bookmark in the open volume"
faqs:
  - q: "Does FAQ schema still work in 2026?"
    a: "It still validates as schema.org FAQPage markup, but Google stopped showing FAQ rich results, also called FAQ rich snippets, on 7 May 2026, and the markup no longer changes how a page looks in Google Search."
  - q: "Is FAQ schema deprecated?"
    a: "Google deprecated the FAQ rich result in a changelog entry dated 8 May 2026 and removed its FAQ documentation on 15 June 2026. The FAQPage type is still defined on schema.org, so the markup itself is still valid."
  - q: "Should I remove FAQ schema from my site?"
    a: "You do not have to. Google wrote in 2023 that you can drop FAQ structured data but there is no need to proactively remove it. Do take out any question in the markup that a reader cannot see on the page: Google's and Bing's guidelines both rule out marking up content that is not visible."
  - q: "Does FAQ schema help AI Overviews or chatbots?"
    a: "Google says no special schema.org structured data is needed to appear in AI Overviews or AI Mode. Bing's guidelines say structured data may support clearer grounding but does not guarantee visibility, and the crawler pages OpenAI and Anthropic publish do not mention structured data."
  - q: "How do I validate FAQ schema now?"
    a: "Use the Schema Markup Validator at validator.schema.org, which checks a URL or a pasted code snippet against schema.org. The help page for Google's Rich Results Test no longer lists FAQ among the rich result types the test supports."
---

222 of the 239 posts on this site carry FAQ schema, by a git count of the committed files on 16 October 2026, and Google stopped showing FAQ rich results on 7 May 2026. That markup is still schema.org FAQPage, built from the same frontmatter list that prints the visible questions after the body of each of those posts. What it cannot do is put a list of expandable questions under a Google result, for any site, including the well-known government and health sites that kept the feature after 2023.

Ranking advice has not caught up with Google's dated pages: of the ten pages in Semrush's US top 10 for "faq schema" (queried 15 October 2026), **four** still describe FAQ rich results as something Google shows, and one says they are gone. My view is that the markup now has to be judged as a plain description of the questions a page visibly answers, by whether that description is accurate and whether anything you care about reads it. Google's display is no longer part of that judgment.

## Does FAQ Schema Still Work?

FAQ schema still validates as schema.org FAQPage markup, but Google stopped showing FAQ rich results on 7 May 2026 and removed its FAQ documentation on 15 June 2026. Its [2023 post on the feature](https://developers.google.com/search/blog/2023/08/howto-faq-changes) says unused structured data "does not cause problems for Search, but also has no visible effects in Google Search."

Where FAQ stands in Google's Search Console Help pages:

| Google tool or page | What it shows on 16 October 2026 | Source |
|---|---|---|
| Rich Results Test | FAQ is absent from the rich result types the test supports | [Rich Results Test help](https://support.google.com/webmasters/answer/7445569?hl=en) |
| Search Console rich result reports | FAQ is absent from the supported reports | [Rich result report overview](https://support.google.com/webmasters/answer/7552505?hl=en) |
| Performance report search appearances | Lists "FAQ rich results" (`TPF_FAQ`) under "Deprecated fields": "For users of bulk data export, these fields appear in the BigQuery schema, but their values in recent dates is NULL". A [Wayback Machine copy of 3 June 2026](https://web.archive.org/web/20260603194028/https://support.google.com/webmasters/answer/17011259?hl=en) still listed it among "the supported Search appearance types" | [Dimensions and data groupings](https://support.google.com/webmasters/answer/17011259?hl=en) |
| Search Console help on impressions | Still says "FAQ is a rich result, and can be explicitly coded with structured data on your site." | [What are impressions, position, and clicks?](https://support.google.com/webmasters/answer/7042828?hl=en) |

Three of the four rows now match Google's June 2026 plan. The Rich Results Test and the report list no longer name FAQ, and the dimensions page has moved "FAQ rich results" into its "Deprecated fields" table, where "How-to rich results" (`TPF_HOWTO`) already sat in June. Neither that page nor the changelog dates the August 2026 step for the Search Console API, and the impressions page still carries the old wording.

## Is FAQ Schema Deprecated?

Only the search feature is: Google deprecated the FAQ rich result in a changelog entry dated 8 May 2026, and schema.org still defines the FAQPage type the markup uses. That [Search Central changelog](https://developers.google.com/search/updates#deprecating-the-faq-rich-result-feature) entry is headed "Deprecating the FAQ rich result feature", and a second one, dated 15 June 2026, is headed "Removing documentation for the FAQ rich result feature".

| Date | What Google did | In Google's words | Source |
|---|---|---|---|
| 8 Aug 2023 | Limited FAQ rich results | They "will only be shown for well-known, authoritative government and health websites" | Google Search Central Blog post of 8 August 2023 |
| 13 Sep 2023 | Ended How-to rich results on desktop too | "this result type is now deprecated" | The same post, updated 14 September 2023 |
| 7 May 2026 | Stopped showing FAQ rich results | "This feature will no longer appear in Google Search starting May 7, 2026." | Changelog entry dated 8 May 2026 |
| June 2026 (scheduled) | Set the FAQ search appearance, rich result report and Rich Results Test support to go | "We will be dropping the FAQ search appearance, rich result report, and support in the Rich results test in June 2026." | [Notice on the FAQ documentation, archived 11 June 2026](https://web.archive.org/web/20260611020214/https://developers.google.com/search/docs/appearance/structured-data/faqpage) |
| 15 Jun 2026 | Removed the FAQ documentation | "The FAQ rich result feature is no longer shown in Google Search results" | [Changelog entry dated 15 June 2026](https://developers.google.com/search/updates#removing-faq-rich-result) |
| August 2026 (scheduled) | Set FAQ support in the Search Console API to go | "support for the FAQ rich result in the Search Console API will be removed in August 2026" | The same archived notice |
| Checked 16 Oct 2026 (301 in every Wayback capture since 23 Jun 2026) | Redirected the old documentation URL | No Google wording: `developers.google.com/search/docs/appearance/structured-data/faqpage` returns a 301 to the 15 June 2026 entry | My request from an Indian connection, and the [Wayback Machine capture of 23 June 2026](https://web.archive.org/web/20260623135240/https://developers.google.com/search/docs/appearance/structured-data/faqpage) |

<img src="/assets/blog/faq-schema/faq-rich-results-timeline.webp" alt="Timeline of FAQ rich results in Google: limited to government and health sites on 8 Aug 2023, How-to deprecated 13 Sep 2023, FAQ results stop 7 May 2026, report and test support set to go in June 2026, documentation removed 15 Jun 2026, API support set to go in August 2026, old URL found redirecting when checked on 16 Oct 2026" title="FAQ rich results in Google, dated" width="1200" height="669" loading="lazy" decoding="async" />

Search Console's [Data anomalies page](https://support.google.com/webmasters/answer/6211453?hl=en) dates the reporting side: from 7 May 2026, "you will see a drop in the number of reported impressions for FAQ in the performance report." [Reading a Search Console impressions drop](/blog/google-search-console-impressions-drop/) works through that page and the other dated causes of a fall.

## What Is FAQ Schema? A Minimal JSON-LD Example

FAQ schema, also called FAQPage schema or FAQ structured data, means markup in schema.org's FAQPage type, written here as JSON-LD: a FAQPage whose `mainEntity` lists one `Question` per question on the page, each with an `acceptedAnswer` of type `Answer`. [Schema.org](https://schema.org/FAQPage) defines the type as "a WebPage presenting one or more 'Frequently asked questions'" and puts its usage at **1M - 10M domains**, "Based on monthly aggregations from Google's web index" for August 2026.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does FAQ schema still work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is still valid schema.org markup, but Google stopped showing FAQ rich results on 7 May 2026."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to remove FAQ schema?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Google wrote in 2023 that structured data it does not use causes no problems for Search."
      }
    }
  ]
}
</script>
```

Submitted to the [Schema Markup Validator](https://validator.schema.org/) as a code snippet on 16 October 2026, this block returned one FAQPage holding two Questions, with **0 errors and 0 warnings**. The validator accepted the two-item array in `mainEntity` too. The unanswered Stack Overflow question in the audit below asks whether that array is allowed, given that schema.org's [mainEntity page](https://schema.org/mainEntity) lists `Thing` as the expected type.

## The Template That Emits FAQPage on 222 Posts

This site's FAQPage markup comes from frontmatter. Each post can carry a `faqs` list of `q` and `a` pairs, and lines 109-120 of `src/pages/blog/[...slug].astro` at commit 89135ce turn that list into an object:

```js
const faqSchema = entry.data.faqs && entry.data.faqs.length > 0 ? {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": entry.data.faqs.map((faq) => ({
		"@type": "Question",
		"name": faq.q,
		"acceptedAnswer": {
			"@type": "Answer",
			"text": faq.a
		}
	}))
} : null;
```

- A line further down prints the object into a `<script type="application/ld+json">` tag next to the post's BlogPosting markup.
- The same `faqs` list renders the visible Frequently Asked Questions section after the article body, as `<details>` elements with the first one open, so the markup and the visible text come from one source.
- The block entered the template on 15 March 2026, in commit cbc3395.

Counted at the commit that published this post, from committed files only:

| Item | Count |
|---|---|
| Committed blog posts | 239 |
| Posts with a `faqs` list, so with FAQPage markup | 222 |
| Questions across those 222 posts | **1,068** |
| Posts with five questions | 185 |
| Posts with `howTo` frontmatter, which the template turns into HowTo markup | 10 |
| Tool pages that emit FAQPage | 9 of 9 |
| Other pages that emit FAQPage | 1, the contact page |

Run through the Schema Markup Validator by URL on 16 October 2026, [my AEO vs SEO comparison](/blog/aeo-vs-seo/) returned its FAQPage with six questions next to BlogPosting and BreadcrumbList markup, with 0 errors and 0 warnings. A validator reads one URL at a time; [the Claude Code audit of this repo](/blog/claude-code-seo-audit/) ran `JSON.parse` on every JSON-LD block in a build.

## Readers and Validators of FAQPage Markup in October 2026

Each row reports the vendor's own page as read on 16 October 2026.

| Reader or checker | What its page says or shows | Source |
|---|---|---|
| Google Search | No FAQ rich result for any site since 7 May 2026 | [Changelog entry dated 8 May 2026](https://developers.google.com/search/updates#deprecating-the-faq-rich-result-feature) |
| Google AI Overviews and AI Mode | "There's also no special schema.org structured data that you need to add"; the same page lists "Making sure your structured data matches the visible text on the page" among SEO best practices | [Google's AI features page](https://developers.google.com/search/docs/appearance/ai-features) |
| Bing, Copilot and Bing's grounding API | "Structured data may support clearer grounding but does not guarantee visibility or grounding traffic. Markup must accurately reflect visible content." | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a), which cover "Bing search experiences, Copilot, and grounding API results" |
| OpenAI's crawlers, including OAI-SearchBot | The page does not mention structured data or schema.org | [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) |
| Anthropic's crawlers, including Claude-SearchBot | The article does not mention structured data or schema.org | [Anthropic's help article on its crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Schema Markup Validator | Linked as "Validate" in schema.org's navigation; it checked the snippet above and a live post of this site by URL | validator.schema.org, linked above |

Neither Bing's guidelines nor Google's AI features page names FAQPage; both speak of structured data in general, so a claim that a chatbot gives FAQPage special weight goes beyond what these pages say. The tactics for earning citations sit elsewhere on this site: [what Google says it takes to be cited in AI Overviews](/blog/ai-overview-optimization/), and [getting cited by ChatGPT, Perplexity and Gemini](/blog/llm-optimization/).

## Keep, Remove or Fix: A Decision Table for FAQPage Markup

| Your situation | What the vendor pages support | Basis |
|---|---|---|
| The page shows the same questions and answers the markup lists | Keep it or drop it; Google says either is fine | Google, 2023: "While you can drop this structured data from your site, there's no need to proactively remove it." |
| The markup lists questions a reader cannot see on the page | Take those questions out of the markup, or show them on the page | Google's [general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): "Don't mark up content that is not visible to readers of the page." Bing: "Markup that is irrelevant, inaccurate, or misleading may be ignored and can affect trust and eligibility for enhanced features." |
| The FAQ block exists only to win the FAQ rich result | That result no longer appears; the 2023 quote in the top row covers dropping the markup | Changelog entry dated 8 May 2026 |
| You want to move the FAQ into QAPage, the markup behind Google's Q&A rich result | Only a page with one question and answers that users can submit qualifies | Google's [QAPage guidelines](https://developers.google.com/search/docs/appearance/structured-data/qapage): "Only use the QAPage markup if your page has information in a question and answer format, which is one question followed by its answers." |
| The page is your own FAQ, or a blog post that answers questions | QAPage is ruled out | The same guidelines: "Don't use QAPage markup for FAQ pages or pages where there are multiple questions per page". Their invalid uses include "An FAQ page written by the site itself with no way for users to submit alternative answers" and "A blog post that answers a question" |
| You report on the FAQ search appearance, report or API data | Move that reporting off FAQ: the FAQ report and Rich Results Test support are no longer listed in Google's help pages, and the dimensions page lists the FAQ appearance and `TPF_FAQ` under "Deprecated fields" | Google's archived notice, and the Search Console Help pages in the status table |
| You want AI Overview or AI Mode citations | No FAQ-specific markup is required | Google's AI features page |
| You want Bing or Copilot to ground answers on the page | Accurate structured data may help, with no guarantee | Bing Webmaster Guidelines |

## The Page-1 Audit: Ten Results Checked on 16 October 2026

How the sample was gathered and read:

- The ten URLs are the US top 10 for "faq schema" in Semrush's database as queried on 15 October 2026, identical in URLs and order to its 15 September 2026 snapshot. A ranking database is not Google's live page, so treat the list as a sample of what ranks.
- I fetched each page logged out from an Indian connection on 16 October 2026, and five pages loaded directly.
- Stack Overflow, infidigit and ToTheWeb answered with a 403 and Reddit served an empty shell. I read the Stack Overflow question through the public Stack Exchange API and the other three in a cloud browser session.
- similarweb timed out from the Indian connection and from the cloud browser, so I read it through the r.jina.ai reader proxy.
- Where a page shows only a relative date, the Date shown column adds the exact date from the page's markup or, for the plugin, from [WordPress.org's plugin API](https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request%5Bslug%5D=citable-geo-schema).

Labels in the Reading column:

- Live: the page says the markup can make Google show the questions, with no word of a change.
- Limited: the page presents the August 2023 government-and-health rule as current.
- Gone: the page says Google stopped showing FAQ rich results.
- No claim: the page says nothing about FAQ rich results in Google.

| # | Page | Date shown | What it says about FAQ rich results in Google | Reading |
|---|---|---|---|---|
| 1 | [similarweb: schema markup guide](https://www.similarweb.com/blog/marketing/seo/schema-markup/) | 17 Nov 2024, in page metadata | Says the markup "enables search engines like Google to display these questions and answers directly in search results" | Live |
| 2 | [Stack Overflow: "schema.org FAQPage and google"](https://stackoverflow.com/questions/78453007/schema-org-faqpage-and-google) | Asked 9 May 2024; 0 answers | Asks whether `mainEntity` can be an array, citing Google's FAQ doc, which now redirects | No claim |
| 3 | [Shopify Pakistan: ecommerce schema guide](https://www.shopify.com/pk/blog/ecommerce-schema) | Updated 2 Jul 2026 | Says the markup structures Q&A "in a format that AI systems parse directly" | No claim |
| 4 | [Nightwatch: traffic with schema markup](https://nightwatch.io/blog/how-to-get-more-traffic-with-schema-markup-and-structured-data/) | 30 Jun 2022, in page metadata | Says that with the markup "we can then have these questions and answers appear below our result in the SERPS" | Live |
| 5 | [infidigit: what is schema markup](https://www.infidigit.com/blog/introduction-to-schema-markup/) | Published 27 Feb 2025 | Says the markup lets search engines "display them directly in search results as rich snippets" | Live |
| 6 | [WordPress.org: Citable GEO Schema plugin](https://wordpress.org/plugins/citable-geo-schema/) | Last updated "2 months ago" (7 Aug 2026 in the plugin API), version 1.5.1 | Generates FAQPage and calls it, paired with a primary page type, one of the "highest-impact combinations for AI citations" | No claim |
| 7 | [Analytify: schema markup in WordPress](https://analytify.io/how-to-add-schema-markup-in-wordpress/) | Updated 4 Oct 2026 | "Google stopped showing FAQ rich results on May 7, 2026", while its opening line still lists FAQs among rich results | Gone |
| 8 | [Reddit r/DigitalMarketing: Shopify schema thread](https://www.reddit.com/r/DigitalMarketing/comments/1thjzr5/how_to_add_schema_markup_in_shopify_website/) | 19 May 2026 (shown as "5mo ago") | Says the site lacks "F&Q schema" and that Shopify's apps for it are paid or restricted | No claim |
| 9 | [ToTheWeb: free FAQPage generator](https://totheweb.com/learning_center/create-faq-schema-no-code-markup-tool/) | Published 5 Aug 2024; modified 2 Aug 2026, in page metadata | Tells readers to check for existing FAQPage markup with "Google's Rich Results Test", a link that goes to validator.schema.org | No claim |
| 10 | [Epic Notion: dedicated FAQ article](https://www.epicnotion.com/blog/faq-schema/) | 4 Mar 2025; modified 27 Apr 2026, in page metadata | Quotes Google's old doc: FAQ rich results for government and health sites, "available on desktop and mobile devices in all countries and languages" | Limited |

What the ten add up to:

- **4 of 10** still describe FAQ rich results as something Google shows: three as open to any site (#1, #4 and #5) and one as limited to government and health sites (#10).
- **1 of 10** says they are gone (#7), and the same page's opening line still lists FAQs among the rich results Google can use structured data for.
- **5 of 10** make no claim about FAQ rich results in Google (#2, #3, #6, #8 and #9). #9 names the Rich Results Test, whose help page no longer lists FAQ, although its link goes to the Schema Markup Validator.
- Five pages carry a date after 7 May 2026 on the page or in their metadata (#3, #6, #7, #8 and #9), and one of them mentions the change.
- Three of the ten are about FAQPage specifically (#2, #9 and #10); the rest are general schema guides, a plugin page and a forum thread.

## Judge the Markup by What the Page Shows

FAQ schema in 2026 is a description of the page. Google's and Bing's guidelines both rule out describing anything a reader cannot see, and of the readers listed above, only Bing's guidelines say accurate markup may support grounding. Where one template field prints both the markup and the visible questions, as the `faqs` list does on this site, one check covers every page that template builds; markup pasted in by hand needs a check per page. Put one page per template through the Schema Markup Validator and compare its questions with the page.
