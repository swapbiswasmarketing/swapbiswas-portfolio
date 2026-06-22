---
title: "Do You Need an llms.txt File? Google Says No, and the Data Agrees (2026)"
description: "Google says you don't need an llms.txt file, and 97% of the ones that exist never get read. Here's what llms.txt does and whether it's worth it in 2026."
publishDate: 2026-06-22
category: [SEO, AI]
img: /assets/stock-2.webp
img_alt: "Illustration comparing sites that publish an llms.txt file against the AI crawlers that actually read it"
faqs:
  - q: "What is an llms.txt file?"
    a: "An llms.txt file is a markdown file placed at the root of a domain (yoursite.com/llms.txt) that gives large language models a curated, easy-to-read map of your most important content. It was proposed by Jeremy Howard of Answer.AI in September 2024 as a voluntary convention, similar in spirit to robots.txt or sitemap.xml."
  - q: "Does Google use llms.txt for ranking or AI Overviews?"
    a: "No. Google's own documentation states that Google Search, including its generative AI features, does not use llms.txt files, and that adding one will not help or harm your rankings. Google's John Mueller has compared llms.txt to the long-dead keywords meta tag."
  - q: "Do AI search engines like ChatGPT and Perplexity read llms.txt?"
    a: "There is no public evidence that they do for ranking or citations. Ahrefs studied 137,210 sites and found that, among those that actually had an llms.txt file, 97% received zero requests in a single month. Of the files that were fetched, most requests came from SEO tools and crawlers rather than the AI systems that answer questions, and no major AI provider has committed to parsing the file."
  - q: "Should I create an llms.txt file in 2026?"
    a: "Skip it if your only goal is visibility in Google Search or AI answer engines. Consider it if you run developer or API documentation, since AI coding assistants can use llms.txt to load a tool's docs as clean context. For most sites it is a low-priority nice-to-have, not a ranking lever."
  - q: "Is llms.txt the same as robots.txt?"
    a: "No. robots.txt tells crawlers what they may and may not access and is an established, widely-honored standard. llms.txt is a newer, voluntary proposal that suggests which content is most useful for an LLM to read. Crawlers respect robots.txt; almost none currently request llms.txt."
---

More than **one in four websites** now publish an llms.txt file, yet **97% of those files were never read** in a single month, according to [Ahrefs' analysis of 137,210 domains](https://ahrefs.com/blog/llmstxt-study/). That gap, between how many people are creating the file and how few machines are reading it, is the whole story of llms.txt in 2026.

The confusion got louder when people noticed an apparent contradiction. Google's documentation says you do not need to create special machine-readable files for AI. Then Google's own Chrome tooling quietly shipped a check that looks for an llms.txt file. So which is it?

This post answers the real question buried under the hype: do you actually need an **llms.txt file**, what does the evidence say, and what should you do instead to show up in AI search.

## What Is an llms.txt File, Exactly?

An llms.txt file is a plain markdown file you place at the root of your domain, at `yoursite.com/llms.txt`. It gives large language models a short, curated guide to your most important content, plus links to fuller markdown versions of those pages.

The idea came from **Jeremy Howard**, co-founder of Answer.AI, who [proposed the convention on September 3, 2024](https://www.answer.ai/posts/2024-09-03-llmstxt.html). His reasoning was practical: LLM context windows are too small to swallow an entire website, and raw HTML is full of navigation, ads, and scripts that waste tokens. A hand-curated file lets the site owner say "here is what matters."

The [llms.txt specification](https://llmstxt.org/) deliberately borrows the path-based approach of `/robots.txt` and `/sitemap.xml`. The file is meant to be read at **inference time**, the moment an AI answers a question, not used as training data. Only one part is technically required: an H1 with your project or site name.

A minimal file looks like this:

```markdown
# Acme Docs

> Acme is a developer tool for building X. This file points AI tools to the docs that matter most.

## Docs
- [Quickstart](https://acme.com/docs/quickstart.md): Get running in five minutes
- [API reference](https://acme.com/docs/api.md): Every endpoint, with examples

## Optional
- [Changelog](https://acme.com/changelog.md): Release history
```

Everything below the H1 is optional, and the section literally named `Optional` can be dropped when a tool needs to load a shorter version.

It is worth being precise about its status. llms.txt is a **voluntary community proposal**. It has never been ratified by a standards body, and no major AI vendor has formally adopted it. That single fact explains most of what follows.

## The Contradiction: Google Says No, But Lighthouse Checks for It

Here is the tension that set off the latest round of debate.

On one hand, Google's [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) could not be clearer:

> "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."

The same guide adds that adding an llms.txt file "won't harm (nor help) your visibility or rankings in Google Search, as Google Search ignores them."

On the other hand, Google's own **Chrome Lighthouse** tool [shipped a real, first-party audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt) that checks whether a site's llms.txt file can be fetched without a server error. It is genuine Google code, not a community plugin, though it only tests that the file is reachable, not that it follows the spec.

So is Google saying the file is useless while secretly rewarding it? No. The resolution is less dramatic but more useful to understand: **it depends which Google product you ask**, as [Search Engine Journal put it](https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/).

The Lighthouse check does not live in the Performance, SEO, or Best Practices categories that most people see. It sits inside a new, **experimental "Agentic Browsing" category** that grades a site for AI-agent readiness, a different job from search ranking. The [category's own code](https://github.com/GoogleChrome/lighthouse/blob/main/core/config/agentic-browsing-config.js) notes it "is still under development and subject to change," and it is not part of a standard Lighthouse scan.

This is not Google contradicting itself so much as two products doing two different jobs. The Lighthouse audit lives in a category built to test AI-agent readiness, not to grade search, and it treats the file as optional rather than expected. There is no hidden ranking benefit buried in the check, just an experiment running in a different lane.

## What Google Has Actually Said About llms.txt

Google's public stance has been remarkably consistent, and blunt.

In April 2025, Mueller [compared llms.txt to the keywords meta tag](https://www.searchenginejournal.com/google-says-llms-txt-comparable-to-keywords-meta-tag/544804/), the abandoned tag that search engines stopped trusting decades ago because site owners stuffed it. His point: an llms.txt file is a site's unverified claim about itself. He also noted that "you can tell when you look at your server logs that they don't even check for it."

He was more direct on Bluesky in June 2025: ["no AI system currently uses llms.txt,"](https://bsky.app/profile/johnmu.com/post/3lrshm4gggs2v) he wrote.

Google's Gary Illyes said the same from the stage at a [Search Central Live Deep Dive event](https://www.seroundtable.com/openai-crawling-llms-txt-files-39811.html): Google does not support llms.txt and is not planning to.

The deepest critique came in June 2026, when Mueller explained on the Search Off the Record podcast [why the format is structurally hard to trust](https://www.searchenginejournal.com/googles-mueller-says-llms-txt-cant-help-llms-differentiate-sites/579304/):

> "You're telling these systems, like, I have the best website ever. And here are all of the pages that everyone must go to ... by design, [an LLM] can't trust what is here as a way of differentiating between different websites."

That is the core problem. A file you write about yourself is a weak signal precisely because you wrote it.

## The Evidence: llms.txt Files Are Largely Unread

Opinions are one thing. Server logs are another. Multiple independent studies in 2025 and 2026 looked at whether AI bots actually fetch llms.txt, and the answer is consistent.

The biggest is the Ahrefs study of **137,210 domains**. Among its findings:

- **28%** of sites published an llms.txt file, "more than one in four."
- **97%** of those files received **zero requests** in May 2026.
- Of the fetches that did happen, **96% came from bots**, and **77% of those bots were not AI tools at all**.
- The single largest category of fetcher was **SEO audit tools at 21.7%**, more than any individual AI bot.
- All four kinds of AI bots combined (training crawlers, retrieval bots, assistants, and agents) added up to just **19.5% of all requests to these files**, and the retrieval bots that actually power answers in tools like ChatGPT were the smallest slice of all.

Ahrefs' own verdict: "If your goal is showing up in ChatGPT, Perplexity, or AI Overviews, an llms.txt file is largely decoration." [The same study](https://ahrefs.com/blog/llmstxt-study/) found that AI bots never even probe for llms.txt files on sites that do not have one. They simply do not go looking for it.

Other studies reached the same place from different angles:

| Study | Scope | Key finding |
| --- | --- | --- |
| [Ahrefs](https://ahrefs.com/blog/llmstxt-study/) | 137,210 domains | 97% of llms.txt files got zero requests in a month |
| [SE Ranking](https://seranking.com/blog/llms-txt/) | ~300,000 domains | Only 10.13% had the file; no correlation with AI citations |
| [Otterly.AI](https://otterly.ai/blog/the-llms-txt-experiment/) | 90-day log study | 84 of 62,100+ AI bot visits (~0.1%) hit /llms.txt |
| [Reboot Online](https://www.rebootonline.com/geo/llms-txt-experiment/) | Controlled orphan-page test | Zero AI bots visited pages linked only from llms.txt after 3 months |

The Reboot Online experiment is the most damning because it was controlled. They published test pages that were linked **only** from llms.txt, then watched for three months. No AI bots arrived, even though the same domains showed AI-bot activity on normally-linked pages. The file was not a discovery path.

SE Ranking studied a broader pool of nearly 300,000 sites and found a lower adoption rate, around 10% against Ahrefs' 28% among its more technical sample, but reached the same verdict on impact. Its model to predict AI citations found **no correlation** between having an llms.txt file and getting cited, and removing the variable actually made the model more accurate. It was, in their words, more noise than value.

## Who Publishes llms.txt vs Who Actually Reads It

If almost no AI engine reads the file, why are so many sites publishing it? Because **publishing an llms.txt file and AI systems consuming it are two completely different things**, and most of the "adoption" you hear about is the first, not the second.

![Who publishes an llms.txt file versus who actually reads it](/assets/blog/do-you-need-llms-txt/publish-vs-consume.webp "Publishing an llms.txt file is not the same as AI systems reading it")

A lot of the publishing is automatic. **Mintlify** [auto-generates an llms.txt file](https://www.mintlify.com/docs/ai/llmstxt) for every documentation site it hosts, instantly giving thousands of dev-tool docs the file with zero effort. The **Yoast SEO** plugin [added automatic llms.txt generation in version 25.3](https://developer.yoast.com/changelog/yoast-seo/25.3/) in June 2025. Cloudflare announced plans to generate one for customer domains too. Adoption numbers go up; reading numbers do not.

There is, however, one genuine, present-day use case: **developer documentation**. The file's whole design is to feed a tool's docs to an LLM as clean context, which is why companies with heavy developer audiences publish one. [Anthropic, for instance, serves an llms.txt](https://platform.claude.com/docs/llms.txt) that indexes its entire Claude developer documentation. When an AI coding assistant is already working inside a tool's docs, that curated file can help it navigate them efficiently.

That is the real boundary. llms.txt is a developer-docs convenience for coding assistants, not a discovery or ranking signal for public AI search engines. [No major LLM provider](https://ahrefs.com/blog/what-is-llms-txt/), not OpenAI, Anthropic, Google, or Meta, has formally adopted it as part of how its crawlers find or rank content.

## So Should You Create an llms.txt File?

The honest answer is that for most sites it is optional, low-stakes, and low-priority. Here is how to decide.

![A decision framework for whether to create an llms.txt file in 2026](/assets/blog/do-you-need-llms-txt/should-you-create.webp "Should you create an llms.txt file? Skip it or consider it")

**Skip it if:**

- Your only goal is visibility in Google Search or AI answer engines like ChatGPT and Perplexity. The data says it will not move that needle.
- You run a large site where keeping a curated file accurate is real maintenance work.
- Your core technical SEO and crawlability are not yet solid. Fix those first.

**Consider it if:**

- You publish developer or API documentation that AI coding agents read.
- You already see Claude, OpenAI, or other agent bots in your logs.
- You have a small site where creating the file takes a few minutes and the upside, however modest, is free.

The expert consensus lands in the same place. In [a podcast conversation](https://www.buzzstream.com/blog/lily-ray-podcast/), Lily Ray was blunt: asked whether llms.txt does anything for SEO or AI search visibility, her answer was "probably not," though she grants that if AI agents ever standardize on reading the file, "you should have one." Even the most prominent dissenter, Mike King of iPullRank, [frames it as a judgment call](https://ipullrank.com/google-ai-search-guidance) rather than a mandate: "Google doesn't process llms.txt in any special way. Other systems may. Make your own call."

In other words, it is a two-minute experiment at best, never a substitute for the work that actually drives AI visibility.

## What to Do Instead to Show Up in AI Search

If you want to be mentioned and cited by AI engines, skip the special files and do the fundamentals well. Google's [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) makes exactly this point: its generative AI features run on the same core ranking and quality systems as regular Search, so strong content and clean technical SEO are what get you surfaced. In practice that means:

- **Keep core content in crawlable HTML.** If important content only appears after heavy client-side JavaScript, some crawlers may never see it. Making it reachable in the initial HTML is far higher-leverage than any text file.
- **Add structured data.** Schema markup for articles, FAQs, and products translates your content into a format machines parse without guessing. See [AEO vs SEO](/blog/aeo-vs-seo/) for how answer-shaped formatting earns citations.
- **Allow AI crawlers.** Confirm `robots.txt` and your CDN actually let OAI-SearchBot, GPTBot, and PerplexityBot through. A blocked bot reads nothing.
- **Write answer-shaped, genuinely useful content** that leads with the answer. This is the heart of [AI Overview optimization](/blog/ai-overview-optimization/).
- **Build entity consistency and third-party citations** across the high-trust sources AI engines already lean on, the playbook in [9 strategies to improve brand visibility in AI search engines](/blog/improve-brand-visibility-in-ai-search-engines/).

For the bigger picture on where all of this is heading, [the future of SEO in an AI-first world](/blog/ai-future-of-seo/) and [LLM optimization](/blog/llm-optimization/) go deeper on the strategy.

## The Bottom Line

An llms.txt file is not a scam, and it is not a magic ranking lever. It is a thoughtful, voluntary convention that solved a real problem for AI coding agents and got swept up in AEO hype it was never built to carry.

Google says you do not need one for search, and the server logs agree: 97% of these files sit unread. If you run developer docs, publishing an llms.txt file is a reasonable, low-cost move. For everyone else chasing AI visibility, your time is far better spent on crawlable HTML, structured data, and content worth citing.

The signal that matters is not a file you write about yourself. It is whether the rest of the web, and the machines reading it, can find and trust what you actually publish.
