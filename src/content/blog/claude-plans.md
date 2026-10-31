---
title: "Claude Plans: Free, Pro, Max vs Ultra, Team Compared"
description: "Claude plans as of 31 October 2026: Free, Pro, Max, Ultra, Team and Enterprise prices, usage against Pro, what replaced Max 20x and which plan fits your work."
publishDate: 2026-10-31
category: [AI, Tools]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "What are the Claude plans?"
    a: "As of 31 October 2026 Anthropic sells Free ($0), Pro ($20 a month, or $200 a year), Max ($100 a month), Ultra ($200 a month), Team (per seat, for 2 to 150 people) and Enterprise ($20 per seat a month billed annually, plus usage at API rates, 20-seat minimum). Every paid plan includes Claude Code."
  - q: "What is the difference between Claude Max and Ultra?"
    a: "Max costs $100 a month and gives 5x Pro's usage every five hours and every week. Ultra costs $200 a month, gives 10x Pro's usage every week and has no five-hour limit once Anthropic has verified the account. Ultra also carries $200 a month in API credits against Max's $100."
  - q: "Is Claude Pro worth it?"
    a: "Pro is worth $20 a month if you need something the Free plan leaves out, such as Claude Code, Opus, Research, usage credits, more than 5 Projects, or Claude in Chrome and Microsoft 365. If you only ask everyday questions, Free covers that, in Anthropic's words."
  - q: "Does Claude Ultra have a five-hour limit?"
    a: "Not for verified accounts. Anthropic verifies Ultra accounts automatically from factors such as account and payment history, and a temporary limit applies until then. If Settings > Usage shows no Current session bar, the account is verified."
  - q: "What happened to Claude Max 20x?"
    a: "Anthropic renamed it. Its Ultra plan article says the Max 20x plan is now called Ultra, and existing Max 20x subscribers move to Ultra automatically with no price change. Max is now a single $100 tier."
---

Claude's Free plan leaves out Claude Code, Opus, Fable, Research, usage credits, Claude Science, Claude Dashboards (beta), Claude in Chrome, Claude for Microsoft 365 and Outlook, and handing off or scheduling tasks, and it caps Projects at 5, per [Anthropic's pricing page](https://claude.com/pricing) as I read it on 31 October 2026. Pro, at $20 a month, removes every one of those limits except Fable, which Pro reaches only through pay-as-you-go usage credits; Max, at $100, is the cheapest of the individual Claude plans with Fable inside the plan's own limits and the first individual plan with monthly API credits.

Prices and limits below are from claude.com/pricing and Anthropic's Pro, Max, Ultra and API-credit help articles as of 31 October 2026. Anthropic changes these plans often: it added monthly API credits on 7 October 2026, per its [release notes](https://support.claude.com/en/articles/12138966-release-notes), and it has turned Max 20x into Ultra, a change those release notes carry no dated entry for.

Above Pro, the choice turns on which limit stops you, and I would pick by that rather than by price. Max buys five times Pro inside the same five-hour window. Ultra drops that window for verified accounts and meters you only by the week, at the same $20 a month per Pro-sized week of allowance that Max charges.

| Plan | Monthly price | Usage relative to Pro | Claude Code |
|---|---|---|---|
| Free | $0 | "Limited" every 5 hours and every week | No |
| Pro | $20, or $17 a month billed annually ($200 up front) | 1x, the baseline | Yes |
| Max | $100 | 5x every 5 hours and every week | Yes |
| Ultra | $200 | 10x every week, no 5-hour limit for verified accounts | Yes |
| Team | Standard seat $25, Premium seat $125 ($20 and $100 billed annually) | Standard: more than Pro; Premium: 5x Standard | Yes |
| Enterprise | $20 per seat billed annually, plus usage at API rates | Usage billed at API rates | Yes |

Source for every cell: Anthropic's pricing page, 31 October 2026. Prices exclude tax.

## What Are the Claude Plans?

The Claude plans are Free, Pro, Max and Ultra for individuals, plus Team and Enterprise for organizations. Every paid plan includes Claude Code, and the pricing FAQ says it "shares the same usage limits as the rest of your plan, so your work in the terminal and your chats draw from one pool."

The full matrix, with each usage claim quoted from Anthropic's pricing page and the [monthly API credits article](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans):

| Plan | Billing | Usage, in Anthropic's words | Opus | Fable | Monthly API credits |
|---|---|---|---|---|---|
| Free | n/a | "Free covers everyday questions" | No | No | None |
| Pro | Monthly or annual | "at least 5x more usage per 5-hour session than Free" | Yes | Usage credits only | None |
| Max | Monthly only | "5x the usage of Pro every 5 hours and every week" | Yes | Up to half the weekly limit | $100 |
| Ultra | Monthly only | "10x the weekly usage of Pro, with no 5-hour limit for verified accounts" | Yes | Up to half the weekly limit | $200 |
| Team (2 to 150 users) | Monthly or annual | "Standard seats give more than Pro and Premium seats give 5x more than Standard" | Yes | 50% of weekly limits on Premium seats | $20 per Standard seat, $100 per Premium seat, pooled and capped at $500 |
| Enterprise (20-seat minimum) | Annual only | "Usage cost scales with model and task" | Yes | Yes | Not eligible |

The Fable and Team cells carry conditions:

- Fable on Pro and on Team Standard seats "run on pay-as-you-go usage credits from the start", per Anthropic's [Fable models on your plan](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan) article. On Max and Ultra, the half-the-week share sits inside the weekly limit: "you can never use more than your weekly limit."
- Max and Ultra each carry a separate weekly limit for Fable alongside the general weekly limit, per the [Max plan article](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) and the [Ultra plan article](https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan).
- Team gets one row because Standard and Premium seats can be mixed on one plan. For the seat types, worked bills by seat mix and where the pooled credit stops growing, see [my seat-by-seat math for Claude Team](/blog/claude-team-plan/).

The per-token prices behind Enterprise usage and usage credits are model by model, and I keep [Sonnet, Opus, Haiku and Fable token prices](/blog/claude-sonnet-vs-opus/) in a separate comparison.

<img src="/assets/blog/claude-plans/plan-meters.webp" alt="Grid of Claude plans as of 31 October 2026: Free at $0 with limited usage every 5 hours and every week; Pro at $20 a month at 1x; Max at $100 a month at 5x Pro every 5 hours and every week with $100 in monthly API credits; Ultra at $200 a month with no 5-hour limit for verified accounts, 10x Pro every week and $200 in API credits" title="What each Claude plan meters, relative to Pro" width="1200" height="669" loading="lazy" decoding="async" />

## Claude Max vs Ultra: What Changed When Max 20x Became Ultra

Ultra is the old Max 20x under a new name and a new meter. The Ultra article says: "The Max 20x plan is now called the Ultra plan. Existing Max 20x subscribers move to Ultra automatically, with no price change." Max is now one $100 tier, and its article describes only that tier.

| | Max 20x (before) | Ultra (as of 31 October 2026) |
|---|---|---|
| Price | $200 a month at launch, with "20x higher rate limits" than Pro ([TechCrunch, 9 April 2025](https://techcrunch.com/2025/04/09/anthropic-rolls-out-a-200-per-month-claude-subscription/)) | "$200 per month", web price; mobile pricing "may vary" |
| How usage is defined | 20 times Pro's per-session allowance, as the Max article worded it on 2 October 2026 | "Get 10 times the Pro plan's usage every week." |
| Five-hour limit | Yes, the per-session allowance was the unit | None for verified accounts; a temporary limit until then |

I cited that 2 October article in [my guide to each way back from a Claude usage limit](/blog/claude-usage-limits/), which also prices the waits, resets and usage credits that come before an upgrade. The Ultra article gives no conversion between the old per-session multiple and the new weekly one, so I would not read the 20 and the 10 as a cut or a raise: they count different windows.

Side by side today, from the two plan articles, the [Claude Code with Pro, Max or Ultra article](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan) and the pricing page:

| | Max | Ultra |
|---|---|---|
| Price | $100 a month, monthly billing only | $200 a month, monthly billing only |
| Five-hour limit | Yes, at 5x Pro | No, for verified accounts |
| Weekly limit | 5x Pro, plus a separate Fable limit | 10x Pro, plus a separate Fable limit |
| Claude Code wrap-up allowance at a five-hour limit | Can apply "each time you reach a five-hour session limit, within your weekly limit" | Does not apply to verified accounts, which have no five-hour limit |
| Usage credits, if enabled, take over after | The five-hour limit, the weekly limit or the Fable limit | The weekly limit or the Fable limit |
| Monthly API credits | $100 | $200 |
| Priority access at high traffic times | Yes | Yes |
| Moving between them | Max to Ultra is charged "on a prorated basis for the remainder of your billing cycle", and if you have already claimed monthly API credits, prorated credits arrive right away | Moving down takes effect at the end of the billing period, per the pricing FAQ |

### Does Claude Ultra Have a Five-Hour Limit?

Not once your account is verified. The Ultra article says "we automatically verify Ultra accounts using factors like your account and payment history", and until that happens "a temporary limit applies".

- Verifying your phone number at checkout "is a separate step and doesn't remove this limit."
- To check, open Settings > Usage: "If you don't see a Current session bar, your account is verified."
- Anthropic removes the temporary limit automatically, "so there's nothing you need to do."
- An unverified Ultra account in Claude Code gets the same wrap-up allowance as Max "until the limit is removed", per Anthropic's Claude Code plan article.

One naming trap for anyone searching "Claude ultra plan": Claude Code once had an `/ultraplan` command, a research preview that sent a planning task to a cloud session. Anthropic's [commands reference](https://code.claude.com/docs/en/commands) now lists it as "Removed. Use plan mode instead." It has nothing to do with the Ultra subscription.

## Claude Pro vs Max

Max is Pro with five times the allowance in both windows, Fable inside the plan, priority access at high traffic times and $100 a month in API credits, for $80 a month more. Anthropic's Claude Code article tells Pro users to "Consider upgrading to the Max plan if you consistently hit limits and need more capacity for larger repositories."

| | Pro | Max |
|---|---|---|
| Price | $20 a month, or $200 a year up front | $100 a month; no annual option |
| Five-hour and weekly allowance | 1x | 5x |
| Fable | Usage credits from the first request | Included, up to half the weekly limit |
| Claude Code wrap-up allowance | "up to once per weekly usage period" | Each time you hit a five-hour limit, within the weekly limit |
| Monthly API credits | None; Pro "does not include API usage through the Claude Console" | $100 |
| Priority access at high traffic times | No | Yes |

If you move from an annual Pro plan to Max mid-year, any remaining Pro balance larger than the Max price comes back as "a credit to your account", per the Max article, provided the billing address matches the Pro subscription's.

If an `ANTHROPIC_API_KEY` environment variable is set on your machine, the help center says Claude Code uses that key "rather than using your subscription's included usage", and [what an API key changes in Claude Code](/blog/claude-code-api-key-vs-subscription/) covers that route before you pay for a bigger plan.

## What a Year of Each Claude Plan Costs at List Price

Every figure below is a list price from the pricing page multiplied out by me, before tax. API credits are counted as Anthropic states them, with its caveat: they cover the Claude API, the Console Playground, Claude Managed Agents and the Claude Agent SDK, and they do not cover "Interactive Claude Code in the terminal, IDE, desktop, or web", per the monthly API credits article.

| Plan and billing | A year at list price | API credits in a year, at most | Price per Pro-sized week of allowance, per month |
|---|---|---|---|
| Pro, monthly | 12 x $20 = **$240** | $0 | $20 |
| Pro, annual | **$200**, billed up front | $0 | $16.67 |
| Max, monthly | 12 x $100 = **$1,200** | 12 x $100 = $1,200 | $100 / 5 = $20 |
| Ultra, monthly | 12 x $200 = **$2,400** | 12 x $200 = $2,400 | $200 / 10 = $20 (weekly; no five-hour window) |
| Enterprise, 20-seat minimum | 20 x $20 x 12 = **$4,800** in seat fees, before usage | Not eligible | Not comparable: usage billed at API rates |

Rules that shrink the credit column in practice, all from the same article:

- New subscribers can claim "once they've been on an eligible plan for seven days."
- Credits do not roll over: "Unused credits expire at the end of each billing cycle."
- You can link only one Console organization, and you cannot change it yourself.
- The credits are "Separate from your plan limits", so they buy no extra chat or Claude Code time.

On monthly billing, Pro, Max and Ultra all charge $20 a month for each Pro-sized week of allowance, and only Pro's annual price undercuts that. An upgrade buys more allowance at the same rate, plus whatever comes with the tier: Fable and API credits at Max, the missing five-hour window at Ultra.

## Is Claude Pro Worth It? A Decision Table by Reader Type

Pro is worth $20 a month as soon as you need one thing on the Free plan's exclusion list; past that, pick the tier whose limit matches the way you work. My routing, each row tied to a line on Anthropic's pages:

| Reader | Plan | The one reason |
|---|---|---|
| Writer who asks Claude everyday questions a few times a week | Free | The pricing FAQ says "Free covers everyday questions", and Claude Design, Slides and Docs are on Free |
| Writer drafting daily who needs Projects past 5, or Research | Pro, annual if you will stay a year | Annual billing works out to $16.67 a month per Pro-sized week, the lowest figure in my yearly table |
| Occasional Claude Code user, a few sessions a week | Pro | Claude Code is included and shares the one pool with chat |
| Daily Claude Code builder who keeps hitting the five-hour limit | Max | 5x Pro in both windows, and Anthropic's own advice to Pro users who "consistently hit limits" |
| Max user whose long sessions stop at the five-hour limit with weekly allowance left | Ultra | The only individual plan with no five-hour limit, once verified |
| Builder who also runs their own apps on the Claude API | Max or Ultra | $100 or $200 a month in API credits, which expire monthly and do not cover interactive Claude Code |
| Small team of 2 to 150 | Team | Mixed Standard and Premium seats on one bill, pooled API credits up to $500 a month |
| Organization of 20 or more that needs SCIM, audit logs or custom retention | Enterprise | Those controls are listed for Enterprise, at $20 per seat plus usage at API rates |

Is Claude Max worth it over Pro? Only if a limit is what stops you, or you want Fable without paying usage credits for it. If you hit a limit once a fortnight, compare the $80 a month that Max adds with a free wait for the reset, or usage credits, which you prepay and which then draw down at standard API rates up to a monthly spend limit you set ([Anthropic's usage credits article](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans)).

## Claude Plans and Pricing: Rupees, Students and Other Questions

- Price in India: the rupee amount depends on whether you check out on the web, the App Store or Google Play, and [my checkout-by-checkout Claude price table for India](/blog/claude-pro-price-in-india/) sets them side by side. The Max and Ultra articles add that their dollar prices are "for web subscriptions only."
- Students: the Max and Pro articles say "We don't offer standard discounted pricing for individual plans (Pro, Max, and Ultra)", and [the routes a student in India can actually take](/blog/claude-student-discount-india/) are mapped one by one.
- Claude Pro next to ChatGPT Plus at the same $20: [the plan-by-plan comparison of Claude and ChatGPT](/blog/claude-vs-chatgpt/).
- Claude in chat or Claude Code: every paid plan includes both, and [which jobs need Claude Code rather than the Claude app](/blog/claude-vs-claude-code/) is the hub for that question.
- Cancelling: the pricing FAQ says Pro, Max and Ultra accounts move to the Free plan when the period ends, and your chats, projects and files stay.

## Claude Plans: Pick by the Limit That Stops You

The four individual Claude plans differ by which window they count: Free and Pro limit you every five hours and every week, Max multiplies both by five, and Ultra counts only the week for verified accounts. Since Pro, Max and Ultra each price a Pro-sized week at the same $20 on monthly billing, the useful question before upgrading is which bar in Settings > Usage fills first. Open that page before you pay for a bigger plan.
