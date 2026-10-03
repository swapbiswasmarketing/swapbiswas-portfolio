---
title: "Claude Sonnet vs Opus vs Haiku: Costs and When to Use Each"
description: "A 2,000-word draft costs about 6 cents on Sonnet 5.5 and 12 on Opus 5.5. Compare Claude Sonnet vs Opus vs Haiku on price and specs, with a rule for picking one."
publishDate: 2026-09-26
updatedDate: 2026-10-03
category: [AI, Tools]
img: /assets/stock-4.webp
img_alt: "Renaissance-style study of an orrery and geometric instruments on a scholar's table, a red thread tracing an orbit"
faqs:
  - q: "Is Claude Opus better than Sonnet?"
    a: "Opus 5.5 is the more capable model and Anthropic's recommended starting point for most workloads, and Anthropic says it remains clearly stronger than Sonnet 5.5 at complex, open-ended work. As of October 2026 it costs twice as much per uncached token as Sonnet 5.5 ($4 and $20 against $2 and $10 per million input and output tokens, with cache reads at $0.20 on both). Per finished job the gap can move either way, since Opus 5.5 cost less per solved coding task than Sonnet 5 in Anthropic's runs while Anthropic says Sonnet 5.5 at lower effort costs less per task than Opus 5.5, so set effort explicitly and price a sample of your own jobs."
  - q: "What is the difference between Claude Haiku and Sonnet?"
    a: "Haiku 4.5 is the lowest-priced current Claude model at $1 and $5 per million input and output tokens, with a 200K context window and a February 2025 reliable knowledge cutoff. Sonnet 5.5 costs $2 and $10, has a 1M context window and a June 2026 reliable knowledge cutoff. Anthropic positions Haiku for high-volume work with checkable outputs rather than long agent loops."
  - q: "Which Claude model is best for writing?"
    a: "For drafts, emails and rewrites, start with Sonnet 5.5: Anthropic's model selection matrix lists content creation among its example uses, Anthropic's models overview rates its latency Fast against Opus 5.5's Moderate, and its launch post says it writes more clearly than Anthropic's previous generation of models. The price gap on a one-off 2,000-word draft is about six cents, so move a draft to Opus 5.5 when it carries figures, citations or a synthesis of many sources, or when Opus drafts need less of your editing."
  - q: "Which Claude model does Claude Code use by default?"
    a: "As of October 2026, the default model in Claude Code is Opus 5.5 on Pro, Max, Team, Enterprise and Anthropic API accounts, from version 2.1.280 onward. Switch in a session with /model sonnet (Sonnet 5.5 on the Anthropic API from version 2.1.284), /model haiku or /model fable, or at launch with claude --model followed by the alias."
  - q: "What is the best Claude model?"
    a: "Claude Fable 5.1 is the most capable model Anthropic offers to all customers, but Anthropic recommends starting most workloads on Opus 5.5 and moving to Fable only when Opus at xhigh or max effort still falls short on demanding work. For marketing work the best Claude model depends on volume and steps: Haiku 4.5 for bulk jobs you can spot-check, Sonnet 5.5 for single-pass writing and repeated jobs, and Opus 5.5 for multi-step or figure-heavy work."
---

Tagging 10,000 customer reviews by theme costs about **$2.66 on Claude Haiku 4.5, $7.20 on Sonnet 5.5, $14.40 on Opus 5.5 and $36.00 on Fable 5.1** at Anthropic's API list prices as of October 2026, with 150 words in and 10 out per review at about 1.8 tokens per word (1.33 on Haiku's older tokenizer). One 2,000-word blog draft costs about 6 cents on Sonnet and 12 cents on Opus, so for a single draft the Claude Sonnet vs Opus price gap is six cents.

Those figures are my arithmetic from Anthropic's [per-token pricing](https://platform.claude.com/docs/en/about-claude/pricing), not measured runs, and they leave out thinking tokens. The cost table further down shows the working for every job.

So the choice turns on two things a price list does not show: how many times a job runs, and how many steps each run takes. Volume multiplies the 2x gap between the tiers. Steps can reverse it: in Anthropic's internal runs of a coding benchmark (a SWE-bench Pro subset), Opus 5.5 came out cheaper per solved task than Sonnet 5, the model Sonnet 5.5 replaced. Anthropic's cost guide has no Sonnet 5.5 figure for that subset, and the [Sonnet 5.5 launch post](https://www.anthropic.com/claude-sonnet-5-5) says Sonnet 5.5, run at lower effort settings, costs less per task than Opus 5.5.

My routing rule for marketing work follows from volume and steps, and it departs from Anthropic's Opus-first default for single-pass writing and for jobs repeated at volume:

**The rule:** Send checkable bulk jobs to Haiku 4.5. Run single-pass writing and jobs repeated at volume on Sonnet 5.5. Move to Opus 5.5 for multi-step jobs or work whose figures and sources must be right. Try Fable 5.1 only when Opus 5.5 at xhigh or max effort falls short.

If you are still choosing between vendors, [Claude vs ChatGPT](/blog/claude-vs-chatgpt/) covers that decision. This page assumes you have picked Claude and now have to pick a model.

## Claude Models Comparison: Sonnet vs Opus vs Haiku (October 2026)

Anthropic's [models overview](https://platform.claude.com/docs/en/models/overview) lists four current models, checked on October 3, 2026. Sonnet 5.5, released on September 28, 2026, replaced Sonnet 5 in that lineup, and Sonnet 5 moved to the page's list of legacy models that are still available. MTok means one million tokens.

| Model | Input / output price per MTok | Context window | Best for |
|---|---|---|---|
| Claude Fable 5.1 | $10 / $50 | 1M tokens | Hours-long agent runs and deep research, only after Opus falls short |
| Claude Opus 5.5 | $4 / $20 | 1M tokens | Multi-step agentic work, research synthesis, anything with figures |
| Claude Sonnet 5.5 | $2 / $10 | 1M tokens | Single-pass drafting and rewriting, repeated jobs at volume |
| Claude Haiku 4.5 | $1 / $5 | 200K tokens | Bulk tagging, extraction and sorting you can spot-check |

The "best for" column is my routing, built from Anthropic's [model selection matrix](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model), which says "most workloads start with Claude Opus 5.5". The Sonnet vs Opus section below explains where I follow that default and where I peel off from it.

In the Claude apps, the Free plan covers Sonnet and Haiku while Opus needs a paid plan and Fable access varies by plan, per Anthropic's [plans page](https://claude.com/pricing); the free tier is also on my list of [free AI tools for marketing](/blog/free-ai-tools-for-marketing/). On Pro, Fable bills to usage credits from the first request, while Max 5x and 20x can spend up to 50% of their weekly limits on Fable at no extra cost, per [my plan-by-plan table of Fable usage](/blog/claude-usage-limits/). Everything below uses API prices, because per-token prices are what let you price a job.

The rest of the spec sheet, from the same overview page:

| | Fable 5.1 | Opus 5.5 | Sonnet 5.5 | Haiku 4.5 |
|---|---|---|---|---|
| Latency (Anthropic's label) | Slower | Moderate | Fast | Fastest |
| Reliable knowledge cutoff | Jun 2026 | Jun 2026 | Jun 2026 | Feb 2025 |
| Max output | 128K tokens | 128K tokens | 128K tokens | 64K tokens |
| Thinking | Adaptive, always on | Adaptive, always on | Adaptive | Extended (manual) |
| Default effort (API) | high | medium | high | Not supported |
| Retirement, not sooner than | Sep 1, 2027 | Sep 22, 2027 | Sep 28, 2027 | Oct 15, 2026 |

The knowledge cutoff row tells you how recent a topic can be before you have to paste in sources. The thinking row decides how far a request can run above its visible-text cost, since thinking tokens are billed as output (next section).

## What One Marketing Job Costs on Each Claude Model

Stage 3 of [the marketer's AI maturity curve](/blog/marketers-ai-maturity-curve/) is where a team starts measuring what its AI output costs. This table does that on paper, per job, before you run anything.

The assumptions, so you can swap in your own:

- **Words to tokens.** Anthropic's models overview ([markdown version](https://platform.claude.com/docs/en/models/overview.md)) says 1M tokens is roughly 555,000 words on the current tokenizer, introduced with Claude Opus 4.7, while models before it fit about 750,000 words. That works out to about 1.8 tokens per word and 1.33 tokens per word. The pricing page says Claude 4.7 and later models use the newer tokenizer and Claude Sonnet 4.6 and earlier use the previous one, so Fable 5.1, Opus 5.5 and Sonnet 5.5 take the 1.8 figure and Haiku 4.5 takes 1.33. Anthropic's [what's new in Sonnet 5.5](https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5) page says Sonnet 5.5's tokenizer "is the same as Claude Sonnet 5's".
- **Visible text only.** Anthropic's [thinking documentation](https://platform.claude.com/docs/en/build-with-claude/thinking) says reasoning tokens "are billed as output tokens, even when the thinking text isn't returned to you". None are counted here, on any model, so treat every figure as a floor. Sonnet 5.5 thinks by default and, per the same what's new page, returns a 400 error for `thinking: {type: "disabled"}`; its lowest setting, `thinking: {type: "between_tools"}`, is accepted at `high` effort or below and returns only text on a request that uses no tools. Opus 5.5 returns an error if you try to turn thinking off ([what's new in Opus 5.5](https://platform.claude.com/docs/en/models/opus-5-5/whats-new-opus-5-5)) and Fable 5.1 always thinks.
- **List prices.** No prompt caching, no Batch API discount, global routing. The pricing page adds a 1.1x multiplier for US-only inference on Claude 4.6 and later models.
- **No long-context premium.** The pricing page says Claude 4.6 and later models bill the full 1M-token window at standard rates, so the large synthesis job pays the same per token as the small draft.

The jobs:

| Job | Words in | Words out |
|---|---|---|
| One blog draft | 6,000 (brief, source notes, style guide) | 2,000 |
| Research synthesis | 120,000 (20 interview transcripts of 6,000 words) | 2,500 |
| Rewrite 1,000 product descriptions | 300 per item (150 of instructions, 150 of original copy) | 120 per item |
| Tag 10,000 customer reviews | 150 per item (100 of instructions, 50 of review) | 10 per item |

What each one costs, calculated from Anthropic's per-token prices:

| Job | Haiku 4.5 | Sonnet 5.5 | Opus 5.5 | Fable 5.1 |
|---|---|---|---|---|
| One 2,000-word blog draft | $0.02 | $0.06 | $0.12 | $0.29 |
| Research synthesis of 20 transcripts | $0.18 | $0.48 | $0.95 | $2.39 |
| Rewrite 1,000 product descriptions | $1.20 | $3.24 | $6.48 | $16.20 |
| Tag 10,000 customer reviews | $2.66 | $7.20 | $14.40 | $36.00 |

The blog draft on Sonnet 5.5, worked through: 6,000 words x 1.8 = 10,800 input tokens, at $2 per million = $0.0216. Then 2,000 words x 1.8 = 3,600 output tokens, at $10 per million = $0.036. The total is $0.0576, which rounds to $0.06, and every other cell follows the same two lines with that model's prices and tokens-per-word figure.

<img src="/assets/blog/claude-sonnet-vs-opus/cost-per-job.webp" alt="Bar chart comparing the cost of one 2,000-word blog draft and of tagging 10,000 customer reviews on Claude Haiku 4.5, Sonnet 5.5, Opus 5.5 and Fable 5.1 at October 2026 list prices" title="What one marketing job costs on each Claude model" width="1200" height="651" loading="lazy" decoding="async" />

What the table shows:

- **Opus 5.5 costs exactly twice Sonnet 5.5 on every row.** The per-token prices are 2x apart and the two models share a tokenizer, so without caching the ratio never moves. Only the size of the job changes what 2x means in dollars.
- **Haiku 4.5 lands at about 37% of Sonnet's cost**, lower than its 50% sticker ratio. Its older tokenizer turns the same words into fewer tokens.
- **Fable 5.1 costs 2.5x Opus 5.5** on every row of this table.
- **Bulk jobs can run at half price.** The Batch API takes 50% off both input and output tokens in exchange for results within 24 hours, so the review-tagging job on Sonnet 5.5 drops to $3.60.

### Cheaper Moves Than Switching Models

Anthropic's [cost and intelligence guide](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence) sorts cost levers into "free wins" that cut spend without touching quality and tradeoffs such as model choice. Caching pays only when a long prefix repeats across requests, such as an agent loop or a long style guide sent with every draft. The minimum cacheable prompt is 512 tokens on Sonnet 5.5 and Opus 5.5 and 4,096 on Haiku 4.5 ([prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching)), so the 100-word tagging instructions in the table above, about 180 tokens on Sonnet 5.5 (133 on Haiku 4.5), are too short to cache.

1. **Prompt caching**, where the prefix qualifies. Cache reads cost 10% of the base input price (5% on Opus 5.5, 2.5% on Fable 5.1). In Anthropic's measured agent runs, the guide says caching "cut agent-loop cost by a factor of 2.7 to 5.3" and is "worth more than most model-choice decisions".
2. **Batch processing** for anything no one is waiting on, at 50% off.
3. **Effort.** This one is a tradeoff rather than a free win, but the guide's advice when "costs are too high; quality is fine" is to sweep effort down on your current model before changing models.

## Claude Sonnet vs Opus: Where the 2x Price Gap Matters

Per base input and output token, the Claude Sonnet vs Opus comparison is fixed: Opus 5.5 at $4 / $20 against Sonnet 5.5 at $2 / $10. Cache reads are the exception: Opus 5.5 reads its cache at 5% of its input price, so both models pay $0.20 per MTok for a cache hit.

Sonnet's rate is also settled. Anthropic's what's new in Sonnet 5.5 page says the model "has the same prices as Claude Sonnet 5, including prompt caching and batch processing rates", and the pricing page says Sonnet 5's $2 / $10 rate, first announced as introductory pricing through August 31, 2026, "is now the standard price", while the scheduled rise to $3 / $15 "will not occur".

Per finished job, the comparison moves. Anthropic's cost guide tells readers to "compare on cost per completed task, not per token", and publishes its own measurements:

| Benchmark (Anthropic's internal runs) | Model and effort | Score | Cost |
|---|---|---|---|
| SWE-bench Pro subset (coding) | Sonnet 5 (previous Sonnet), default | 77.4% | $0.84 per solved task |
| SWE-bench Pro subset (coding) | Opus 5.5, default (medium) | 92.8% | $0.22 per solved task |
| SWE-bench Pro subset (coding) | Opus 5.5, low | 87.4% | $0.12 per solved task |
| SWE-bench Pro subset (coding) | Fable 5.1, default | 92.3% | $1.19 per solved task |
| SWE-bench Pro subset (coding) | Fable 5.1, low | 88.6% | $0.54 per solved task |
| DeepResearch Bench II (research) | Sonnet 5 (previous Sonnet) | 56% | $1.20 per task |
| DeepResearch Bench II (research) | Fable 5.1, low | 66% | $4.66 per task |

Anthropic labels these internal results "directional, not guarantees". On the coding benchmark, Opus 5.5, at twice Sonnet 5's token price, cost about a quarter as much per solved task ($0.22 against $0.84), while Fable 5.1 at its default cost more than both ($1.19). Anthropic plots all five coding rows on one chart, with a footnote on problem sets: Sonnet 5 and Fable 5.1 at low effort ran on a 482-problem subset, and Opus 5.5 and Fable 5.1 at its default ran on 478 of those problems. The guide's explanation is that "a more capable model finishes a task with less work: fewer turns, less searching, less re-reading of its own context, and less backtracking."

Cache pricing also shrinks the gap in loops like these. Anthropic priced each request's earlier context in the cost guide's runs as a cache read, which costs $0.20 per MTok on both Opus 5.5 and Sonnet 5, and the guide says cache reads are "routinely the largest single component of task cost" across its measured runs.

For Sonnet 5.5, the per-job evidence so far is Anthropic's launch post, which plots cost per task on four other benchmarks (Terminal-Bench 4.0, FrontierCode, CursorBench and AA-Briefcase) and says Sonnet 5.5 "complements Opus 5.5 best when running at lower effort settings, where it costs less per task. At higher settings, it can perform comparably at a similar cost." The same post says "Opus 5.5 remains clearly stronger at complex, open-ended work requiring sustained judgment." So price your own loop on both models before assuming Opus 5.5 costs less per finished job.

A single-pass draft is one request with no turns to cut, so the per-token table above is the starting estimate for it. Sonnet 5.5 is half the price for the visible text, and the thinking on top depends on the effort each model runs at (on the API, Opus 5.5 defaults to medium and Sonnet 5.5 to high), so set effort explicitly on both before you compare, or send `thinking: {type: "between_tools"}` on Sonnet 5.5 for a short rewrite job.

A job that loops (an agent building a script, a research run that reads, searches and re-reads) is where Opus 5.5 can win back its price. On research the cost can climb instead: Fable 5.1 at low effort scored 10 points above Sonnet 5 on DeepResearch Bench II at about four times the cost per task, which the guide puts down to Fable running "a longer research loop over a larger context".

### Claude Opus vs Sonnet for Writing

Anthropic's selection matrix lists "content creation" among Sonnet 5.5's example uses, next to code generation, data analysis, visual understanding and agentic tool use, and the spec table above gives Sonnet 5.5 a "Fast" latency label against Opus 5.5's "Moderate". Opus 5.5's matrix examples are multi-hour coding agents, large refactors, complex systems engineering, vision-heavy workflows and computer use.

What Anthropic does claim for Opus 5.5 on written work sits in its [prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5): the model "is much less likely to state an incorrect figure or cite the wrong source", and "the spreadsheets, slides, and documents it produces need less editing before you share them." The guide describes differences from Opus 5 and never mentions Sonnet, so read both claims as the direction Opus moved rather than a ranking of the two tiers.

The Sonnet 5.5 launch post makes a matching claim for the cheaper tier: "Like Opus 5.5, Sonnet 5.5 writes more clearly than our previous generation of models". Anthropic's [Sonnet page](https://www.anthropic.com/claude/sonnet) adds that Sonnet 5.5's "drafts need less cleanup".

One marketer-run test worth reading is Lisa Peyton's [content-marketer showdown](https://lisapeyton.com/claude-4-1-opus-vs-claude-4-5-sonnet-a-real-world-showdown-for-content-marketers/), updated June 2026, which ran one newsletter prompt and the same sources through Opus 4.8, 4.7, 4.6 and Sonnet 4.6. She found that Sonnet 4.6 "wrote fluently and quickly, and for my particular voice rules it needed the most editing", and her verdict was that "there isn't a single winner right now".

Every model she tested predates Sonnet 5.5 and Opus 5.5, and it is one prompt from one writer, so treat it as a named example of the method rather than a result for today's lineup.

My writing rule from all of that:

- Draft blog posts, emails and landing page copy on Sonnet 5.5. The price is not the reason for a one-off draft, since the gap is six cents: if Opus 5.5 drafts need less editing against your own voice rules, draft there instead.
- Move a draft to Opus 5.5 when it carries figures, citations or a synthesis of many sources, since wrong figures and wrong sources are the failure Anthropic says Opus 5.5 improved on.
- Keep writing jobs that repeat at volume on Sonnet 5.5. A run of 1,000 product descriptions costs $3.24 there against $6.48 on Opus 5.5, before the batch discount.
- Run a voice pass yourself on either tier. No model knows your house rules until you write them down and hand them over.

One prompt habit to revisit on Opus 5.5 and Sonnet 5.5 is the chain-of-thought pattern in my [ChatGPT prompts for marketing](/blog/chatgpt-prompts-for-marketing/) templates. The Opus 5.5 prompting guide's section on safeguard refusals says requests that push the model to reproduce its internal reasoning in the response text "may be declined", and the [Sonnet 5.5 prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5) says instructions to include reasoning in the response "invite `reasoning_extraction` declines". Both guides tell you to remove prompt instructions that ask the model to write out its reasoning. Keep the steps that produce something you want to read, such as a topic list, and cut the ones that only ask it to show its work.

## Claude Haiku vs Sonnet: When the Cheapest Model Is Enough

The Haiku vs Sonnet decision has more spec differences than the Sonnet vs Opus one, because Haiku 4.5 predates the other three models and their newer tokenizer:

| | Haiku 4.5 | Sonnet 5.5 |
|---|---|---|
| Price per MTok (input / output) | $1 / $5 | $2 / $10 |
| Cost of the same text | About 37% of Sonnet, older tokenizer | Baseline |
| Context window | 200K tokens | 1M tokens |
| Max output | 64K tokens | 128K tokens |
| Reliable knowledge cutoff | Feb 2025 | Jun 2026 |
| Thinking | Extended thinking, set manually | Adaptive, on by default |
| Effort parameter | Not supported | Supported, default high on the API (medium in Claude Code and the Claude apps) |
| Anthropic's example uses | Real-time apps, high-volume processing, sub-agent tasks | Code generation, data analysis, content creation, visual understanding, agentic tool use |

Anthropic's cost guide draws the line on where Haiku stops. On the GPQA Diamond question set, Haiku 4.5 answered at about a fifth of Opus 5.5's cost per question, with 63% accuracy against 92%, and "fell much further behind on long coding tasks". The guide's summary: "It fits high-volume work with checkable outputs, not long agentic loops."

Marketing jobs where a person can spot-check a sample against a rule suit Haiku 4.5:

- Tagging reviews, support tickets or survey answers by theme and sentiment
- Pulling company name, role and use case out of form fills
- Normalising messy job titles in a lead list
- First-pass sorting of inbound requests before a person reads them

Keep Haiku away from anything that depends on events after February 2025 without sources in the prompt, from long agent loops, and from final copy. If a hand-checked sample of 50 Haiku outputs shows more errors than you will accept, rerun the same sample on Sonnet 5.5 before changing the whole job.

Haiku 4.5 is listed as active on Anthropic's [model deprecations page](https://platform.claude.com/docs/en/about-claude/model-deprecations), with retirement "not sooner than October 15, 2026", and Anthropic commits to at least 60 days' notice before retiring a publicly released model. Pin the model ID in any recurring job and check that page before you build on it. The Sonnet 5.5 launch post also says Claude Haiku 5.5 "will join the Claude 5.5 family in the coming weeks"; until Anthropic publishes its price and specs, every Haiku figure on this page is for Haiku 4.5.

## Claude Fable 5.1: The Tier Above Opus

Fable 5.1 is, in the words of Anthropic's model selection page, its "most capable model open to all customers". It costs $10 / $50 per MTok and carries Anthropic's "Slower" latency label.

Anthropic's own advice is to reach it through Opus: start on Opus 5.5, and if "evals at `xhigh` or `max` effort still fall short on demanding reasoning or long-horizon agentic work, move to Claude Fable 5.1." Two of the selection matrix's Fable examples describe marketing work: "multistep deep research, analysis carried through to a finished document, spreadsheet, or deck". A full competitive analysis that has to end as a deck fits that description.

Against Opus 5.5, the measured numbers argue for restraint. On the SWE-bench Pro subset, Opus 5.5 at its default matched Fable 5.1 at its default "for about a fifth of the cost per solved task ($0.22 against $1.19)".

Against Sonnet 5, the result flips: Fable 5.1 at low effort solved 88.6% for $0.54 per solved task, which the guide sums up as "11 more points for 35% less per solved task". On research, the guide concludes that "Fable 5.1 earns its price only at `low`" effort.

Claude Mythos 5.1 shares Fable 5.1's capabilities and prices but is open only to Project Glasswing participants, so for everyone else Fable 5.1 is the top of the ladder.

## Which Claude Model Should You Use for Marketing Work?

Hand checkable bulk jobs to Haiku 4.5, single-pass writing and repeated jobs to Sonnet 5.5, and multi-step or figure-heavy jobs to Opus 5.5. Anthropic's escalation order for when output is not good enough: "If you lowered effort, restore it; otherwise try the next tier up at `low` effort".

| Marketing job | Start on | Move up when | Why |
|---|---|---|---|
| Blog posts, emails, landing page drafts | Sonnet 5.5 | The draft carries figures or cites sources, or Opus drafts need less of your editing: Opus 5.5 | Content creation sits in Sonnet 5.5's row of Anthropic's matrix |
| Rewriting product descriptions or ad variants at volume | Sonnet 5.5, through the Batch API | Spot-checks keep failing: Opus 5.5 at low effort | One pass per item, and the batch discount cuts a 1,000-item Sonnet 5.5 run to $1.62 |
| Tagging reviews, tickets and survey answers | Haiku 4.5 | A hand-checked sample misses your error bar: Sonnet 5.5 | "Checkable outputs" is Anthropic's own description of where Haiku fits |
| Keyword clustering and content briefs, the first steps of [an AI SEO strategy](/blog/ai-seo-strategy/) | Sonnet 5.5 | Clusters span thousands of keywords and many sources: Opus 5.5 | Mostly single-pass structuring |
| Research synthesis across transcripts, reports and competitor pages | Opus 5.5 | Hours-long multi-source research still misses: Fable 5.1 at low effort | Figures and sources must be right |
| Competitive analysis carried through to a finished deck | Opus 5.5 | Output needs heavy rework: Fable 5.1 | Anthropic's Fable examples name the finished deck |
| Building scripts, tools and pages in Claude Code | Opus 5.5 (Claude Code's default) | Long autonomous tasks stall: Fable 5.1 | Long builds are open-ended work, where Anthropic rates Opus 5.5 above Sonnet 5.5 |
| Codebase search and exploration subagents | Haiku 4.5 | Explorations miss files you know exist: inherit the main model | Claude Code's docs suggest Haiku to control subagent costs |

<img src="/assets/blog/claude-sonnet-vs-opus/model-routing.webp" alt="Decision flow for choosing a Claude model: bulk checkable jobs other than writing go to Haiku 4.5, multi-step or figure-heavy jobs go to Opus 5.5 and then to Fable 5.1 if Opus at xhigh or max effort falls short, and single-pass drafts and rewrites go to Sonnet 5.5" title="Which Claude model for this marketing job" width="1200" height="583" loading="lazy" decoding="async" />

## Claude Code Model Settings: Default, /model and Subagents

I built this site, its nine free tools and its research scripts (a Search Console CLI, a Semrush keyword CLI and an IndexNow pusher) with Claude Code. Model choice there works differently from the API: the tool picks a default for you, and subagents can run on a different tier from the main session. Everything below comes from Anthropic's [Claude Code model configuration docs](https://code.claude.com/docs/en/model-config) as of October 2026.

**The default.** The `default` setting resolves to Opus 5.5 on Pro, Max, Team, Enterprise and Anthropic API accounts, and on Amazon Bedrock, Google Cloud's Agent Platform and Claude Platform on AWS. Microsoft Foundry defaults to Sonnet 4.5. Opus 5.5 needs Claude Code v2.1.280 or later, and before that version Pro and Team Standard accounts defaulted to Sonnet 5, so run `claude update` if your session header shows an older model. Sonnet 5.5 needs v2.1.284 or later.

**The aliases:**

| Alias | What it selects |
|---|---|
| `sonnet` | Latest Sonnet (Sonnet 5.5 on the Anthropic API) |
| `opus` | Latest Opus (Opus 5.5 on the Anthropic API) |
| `haiku` | Haiku, for simple tasks |
| `fable` | Fable 5.1, never the default on any plan |
| `best` | Fable where available to you, otherwise Opus |
| `opusplan` | Opus in plan mode, then Sonnet for execution |
| `default` | Clears any override and returns to your account's default |

**How to switch:**

1. In a session, run `/model sonnet` (or any alias). This also saves it as your default for new sessions; open the `/model` picker and press `s` on a row to switch for this session only.
2. At launch, run `claude --model haiku` to set the model for that session.
3. Permanently, set `"model": "sonnet"` in your settings file.
4. Check what you are on with `/status`. The same screen shows [whether Claude Code bills your plan or a Console organization](/blog/claude-code-api-key-vs-subscription/): an `API key` row in use means per-token billing at the API prices above, and a `Login method` row means your plan's usage limits apply.

In the VS Code extension, click the model name at the bottom of the prompt box instead; on models with effort levels it also shows an Effort row, and [my side-by-side of the VS Code extension and the terminal CLI](/blog/claude-code-in-vs-code-vs-terminal/) shows how any level except `max` is saved per model in the settings file both surfaces read.

**Effort.** `/effort` sets how much the model reasons. Claude Code starts Opus 5.5 and Sonnet 5.5 at `medium` and Fable 5.1 at `high`, so Sonnet 5.5 begins one level below its API default in the spec table above. The docs spell out the bill: "You are charged for all thinking tokens generated, even when collapsed or redacted". They also say the effort scale "is calibrated per model, so the same level name does not represent the same underlying value across models", which is one more reason to price a sample rather than compare settings by name.

**Subagents.** A custom subagent's definition can set `model:` to `sonnet`, `opus`, `haiku`, `fable`, a full model ID or `inherit`. Anthropic's [subagent docs](https://code.claude.com/docs/en/sub-agents) list "routing tasks to faster, cheaper models like Haiku" as one way subagents control costs.

A `/model` switch reaches subagents that inherit the main model. Since v2.1.198 the built-in Explore subagent inherits your main model too (capped at Opus on the Claude API), so to keep codebase exploration on Haiku you define your own subagent named `Explore` with `model: haiku`.

The full list of session commands, including `/model`, `/effort` and `/status`, is in my [Claude Code commands](/blog/claude-code-commands/) reference.

## Claude Sonnet vs Opus: Price the Job Before You Pick

The Claude Sonnet vs Opus decision gets easier once each job has a number on it. Take one recurring marketing job, write down its words in and words out, and price it on Sonnet 5.5 and Opus 5.5 with the 1.8 tokens-per-word figure above.

If it runs in a single pass, start on Sonnet 5.5. If it loops through many steps or ships figures, run a sample on both at a fixed effort level and keep the model with the lower cost per finished job.
