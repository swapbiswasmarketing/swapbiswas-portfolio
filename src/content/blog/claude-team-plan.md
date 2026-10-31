---
title: "Claude Team Plan: Seat Prices, Premium Seats and the Math"
description: "Claude Team plan as of 31 October 2026: Standard and Premium seat prices, worked bills for 2 to 50 seats, where the $500 API credit cap binds, and Premium vs Max."
publishDate: 2026-10-31
category: [AI, Tools]
img: /assets/stock-7.webp
img_alt: "Renaissance-style still life of sealed letters, a quill and an open ledger by a window, one red wax seal"
faqs:
  - q: "How much is the Claude Team plan?"
    a: "As of 31 October 2026, a Standard seat costs $25 a month billed monthly or $20 a month billed annually, and a Premium seat costs $125 or $100. Prices are for US customers and exclude tax. The smallest Team, two Standard seats on annual billing, comes to $40 a month, billed as $480 for the year."
  - q: "What is the difference between a Standard and a Premium seat?"
    a: "Anthropic's help center gives a Standard seat 1.25x the Pro plan's per-session usage allowance and a Premium seat 6.25x, which is 5x a Standard seat. Premium seats include Fable models up to 50% of the weekly limit, while Standard seats run Fable on usage credits, and each Premium seat adds $100 to the monthly API credit pool against $20 for a Standard seat."
  - q: "Does the Claude Team plan include Claude Code?"
    a: "Yes, on both seat types. Claude Code draws from the same usage limits as chat, and the monthly API credits that come with Team do not cover interactive Claude Code in the terminal, IDE, desktop or web."
  - q: "What is the minimum number of users for Claude Team?"
    a: "Two members. A Team plan supports up to 150 seats, each seat belongs to one named individual, and an organization that needs more than 150 seats moves to Enterprise."
  - q: "Is Claude Team better than Claude Max for one person?"
    a: "A person working alone cannot use Team, because it needs two members and each seat is for one named individual, so a solo user picks an individual plan instead: Pro, Max at $100 a month, or Ultra at $200. For two people, one Premium and one Standard seat on annual billing cost $1,440 a year, against $1,400 for Max plus an annual Pro plan."
---

A Claude Team plan needs at least two members, and the smallest one, two Standard seats on annual billing, costs **$40 a month** ($480 for the year) on [Anthropic's pricing page](https://claude.com/pricing). What those two seats get that two Pro subscriptions do not is a monthly API credit of $20 per Standard seat, $40 a month between them, because Anthropic's [monthly API credits article](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans) says "Free, Pro, and Enterprise plans aren't eligible."

Anthropic announced that credit on 7 October 2026, per the help center's [release notes](https://support.claude.com/en/articles/12138966-release-notes), and it changes the arithmetic. On annual billing each Team seat now returns its own fee as API credit every month until the pool hits a $500 cap, and each seat buys a Pro-sized session allowance for $16, against $16.67 on annual Pro and $20 on monthly Pro and Max. So I would size a Team by two things only: how many people you are sure of for twelve months, and which of them hit limits.

Prices change often, and the help center says they "are subject to change at Anthropic's discretion", so treat every figure here as of 31 October 2026 and check it again before you buy. For the full lineup of individual plans, my [comparison of every Claude plan](/blog/claude-plans/) is the hub; this page covers Team only.

## What Is the Claude Team Plan?

The Claude Team plan is Anthropic's paid plan for organizations of 2 to 150 people. Each member gets a Standard or a Premium seat, billed monthly or annually, with Claude Code, central billing, single sign-on and a pooled monthly API credit. Usage limits apply per member, and an organization can mix seat types on one bill.

| Seat | Billed monthly | Billed annually | Usage, as Anthropic states it | Monthly API credit |
|---|---|---|---|---|
| Standard | $25 per seat a month | $20 per seat a month | 1.25x the Pro plan's per-session allowance, plus a weekly limit | $20 |
| Premium | $125 per seat a month | $100 per seat a month | 6.25x the Pro plan's per-session allowance, plus a weekly limit | $100 |

Sources: the pricing page and Anthropic's [What is the Team plan?](https://support.claude.com/en/articles/9266767-what-is-the-team-plan) article, both read 31 October 2026. The article adds that "Prices shown are for US customers and exclude applicable taxes."

The rules that shape the bill, from the same article and Anthropic's [seat management article](https://support.claude.com/en/articles/12004354-purchase-and-manage-seats-on-team-plans):

- Minimum and maximum: "Team plans require a minimum of two members", and "Team plans support up to 150 seats." Past 150, the article sends you to Enterprise.
- One person per seat: "Each seat on a Team plan is assigned to one named individual, and only that person may use it." Unused usage on one seat "can't be transferred to another user."
- Limits are per member: if one person hits their seat's limit, "it does not affect the limits of other team members."
- Mixing seats: "Organizations can mix and match seat types", and an Admin can move a member between Standard and Premium within the seats the plan owns.
- Seat visibility: only Admins and above see each member's seat type, in the Tier column of Organization settings > Members; members "can't see their own seat type anywhere in Claude."
- Claude Code: the seat article lists Claude Code access for Standard seats, and Premium seats include "Everything in Standard." The pricing FAQ says Claude Code "shares the same usage limits as the rest of your plan."
- Fable: the pricing page lists Fable at "50% of weekly limits" on Premium seats; on Standard seats, Anthropic's [Fable article](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan) says Fable models "run on pay-as-you-go usage credits from the start." How those weekly shares are counted is in [my guide to Claude usage limits](/blog/claude-usage-limits/).

When a member runs out, an Owner or Primary Owner can turn on usage credits, which Anthropic's [Team usage credits article](https://support.claude.com/en/articles/12005970-manage-usage-credits-for-team-and-seat-based-enterprise-plans) says are "billed at standard API pricing rates", with spend limits for the organization and for each user.

## Claude Team Plan Pricing: Seat Mixes Worked Out

Every row below multiplies the list prices above; none of these bills is published by Anthropic. The credit column applies the rule in the API credits article: $20 per Standard seat and $100 per Premium seat, "pooled into one monthly balance, capped at $500." Tax is extra.

| Seat mix | Seats | Annual billing, per month | Annual billing, paid up front | Monthly billing, per month | Pooled API credit per month | Credit as a share of the annual seat fee |
|---|---|---|---|---|---|---|
| 2 Standard | 2 | 2 x $20 = **$40** | $480 | 2 x $25 = $50 | $40 | 100% |
| 1 Standard + 1 Premium | 2 | $20 + $100 = **$120** | $1,440 | $25 + $125 = $150 | $120 | 100% |
| 4 Standard + 1 Premium | 5 | $80 + $100 = **$180** | $2,160 | $100 + $125 = $225 | $180 | 100% |
| 8 Standard + 2 Premium | 10 | $160 + $200 = **$360** | $4,320 | $200 + $250 = $450 | $360 | 100% |
| 25 Standard | 25 | 25 x $20 = **$500** | $6,000 | 25 x $25 = $625 | $500, the cap | 100% |
| 20 Standard + 5 Premium | 25 | $400 + $500 = **$900** | $10,800 | $500 + $625 = $1,125 | $500 (uncapped: $900) | 56% |
| 45 Standard + 5 Premium | 50 | $900 + $500 = **$1,400** | $16,800 | $1,125 + $625 = $1,750 | $500 (uncapped: $1,400) | 36% |

- On annual billing the per-seat credit equals the per-seat fee, $20 against $20 and $100 against $100, so the pool matches the seat bill exactly until it reaches $500. On monthly billing the same credit covers 80% of the fee ($20 of $25, $100 of $125).
- The pool reaches the $500 cap once $20 x Standard seats + $100 x Premium seats equals $500: at 25 Standard seats, at 5 Premium seats, or at a mix such as 20 Standard + 1 Premium. Past that point a new seat adds nothing to the pool.

Anthropic's own example in the credits article matches the rule: "a team with three Standard seats and two Premium seats receives $260 a month", and one more Premium seat would raise the next cycle to $360.

<img src="/assets/blog/claude-team-plan/seat-fees-vs-credit-pool.webp" alt="Bar chart of Claude Team plan monthly seat fees on annual billing against the pooled API credit, as of 31 October 2026: 2 Standard seats $40 and $40; 4 Standard plus 1 Premium $180 and $180; 8 Standard plus 2 Premium $360 and $360; 25 Standard $500 and $500; 20 Standard plus 5 Premium $900 against a credit capped at $500; 45 Standard plus 5 Premium $1,400 against a credit capped at $500" title="Claude Team seat fees vs the API credit pool" width="1200" height="703" loading="lazy" decoding="async" />

### Team API Credits: Covered and Not Covered

The credit is real money only for work you build on the Claude Platform. In the API credits article's words:

| Covered | Not covered |
|---|---|
| The Claude API (Messages API and Message Batches API) | "Interactive Claude Code in the terminal, IDE, desktop, or web" |
| The Playground in the Claude Console | "Extra usage in Claude, Claude Code, or Claude Cowork" |
| Claude Managed Agents | Claude on Amazon Bedrock, Google Cloud Vertex AI or Microsoft Foundry |
| The Claude Agent SDK, including `claude -p` run with an API key from the linked Console organization | Runs started by the Claude Code GitHub Action, an IDE extension or the Claude desktop app, "even with -p" |

Claiming and spending the credit:

- One Primary Owner or Owner claims it by linking a single Claude Console organization, and "You can't change the linked organization yourself."
- A new Team plan has to be active for seven days before the claim appears.
- On annual plans "credits arrive monthly", and "Unused credits expire at the end of each billing cycle."
- Everyone with an API key in the linked organization draws from the same balance; per-project or per-person limits are set as workspace spend limits in the Console.
- When the credit runs out and the organization has no other credits, "API requests stop until your next monthly credits arrive." Usage is never charged to the Claude plan.

If nobody on the team writes code against the API, the credit is worth nothing to you, and the plan should be judged on seat fees and usage alone. What those API calls cost per model is in [my Sonnet vs Opus price comparison](/blog/claude-sonnet-vs-opus/).

## Claude Team Premium Seat vs Max vs Ultra vs Pro

On the multiples Anthropic publishes, a Premium seat on annual billing costs $16 for each Pro-sized session allowance, against $20 on Max. Ultra's 10x is weekly only, so it has no per-session figure to compare. The comparison holds only for the window each multiple describes, and Anthropic describes different windows for different plans:

| Plan or seat | Price per month | Multiple of Pro, as stated | Which limit the multiple describes | Dollars per Pro-sized unit |
|---|---|---|---|---|
| Pro, monthly | $20 | 1x | Baseline | $20 |
| Pro, annual | $17 ($200 billed up front) | 1x | Baseline | $200 / 12 = $16.67 |
| Team Standard, annual | $20 | 1.25x | Per-session allowance | $20 / 1.25 = $16 |
| Team Standard, monthly | $25 | 1.25x | Per-session allowance | $25 / 1.25 = $20 |
| Team Premium, annual | $100 | 6.25x | Per-session allowance | $100 / 6.25 = $16 |
| Team Premium, monthly | $125 | 6.25x | Per-session allowance | $125 / 6.25 = $20 |
| Max | $100, monthly only | 5x | "every five hours and every week" | $100 / 5 = $20 |
| Ultra | $200, monthly only | 10x | "every week", no five-hour limit for verified accounts | $200 / 10 = $20 per Pro-sized week (not comparable per session) |

Sources: the Team article for the 1.25x and 6.25x, the [Max plan article](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) and the [Ultra plan article](https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan) for theirs, all read 31 October 2026. Max and Ultra are "currently available as a monthly subscription only."

Where the comparison stops:

- Team seats have "a weekly usage limit that applies across all models", but the Team article gives no multiple of Pro for that weekly limit. Max's 5x covers both windows, so a Premium seat can be ranked against Max per session, not per week. Ultra has no five-hour limit and only a weekly multiple, and Team has no published weekly multiple, so Premium and Ultra cannot be ranked on the same window.
- I would not convert Ultra's weekly 10x into a per-session figure; Anthropic publishes no conversion.
- Fable sits at up to 50% of the weekly limit on a Premium seat, on Max and on Ultra alike, per the Fable article. Standard seats and Pro pay for Fable with usage credits.

### Is Claude Team Better Than Max for One Person?

A person working alone cannot buy Team for themselves: the plan needs two members and each seat is for one named individual, so a solo user picks Pro, Max or Ultra. The question becomes real for two people where one is a heavy user:

| Two people, one heavy | Year at list price | Per-session allowance, as stated | Monthly API credit |
|---|---|---|---|
| Team: 1 Premium + 1 Standard, annual | 12 x $120 = **$1,440** | 6.25x and 1.25x Pro | $120, pooled |
| Max (monthly) + Pro (annual), two accounts | 12 x $100 + $200 = **$1,400** | 5x and 1x Pro | $100 on Max, none on Pro |
| Two people, both light: Team, 2 Standard, annual | 12 x $40 = **$480** | 1.25x Pro each | $40, pooled |
| Two people, both light: two Pro plans, annual | 2 x $200 = **$400** | 1x Pro each | None |

For $40 more a year, the Team pair gets a larger stated session allowance on both seats, $20 more a month in API credit, one bill and the Team admin controls. For two light users the gap is $80 a year for 0.25x more per session, $40 a month of API credit and the controls. Max is billed month to month; an annual Team seat count only drops at renewal.

The data terms differ too: the pricing page lists "No model training on your content by default" for Team, and [my note on consumer vs commercial Claude accounts](/blog/claude-code-api-key-vs-subscription/) covers which side of that line a Team seat sits on.

## Monthly or Annual Team Billing: What Seat Changes Cost

Annual billing takes 20% off each seat ($5 a month on Standard, $25 on Premium) and charges the year up front, per the pricing FAQ: "When you choose to pay annually, you're billed once up front for the year." Seat changes are billed per the seat article and the [Team billing article](https://support.claude.com/en/articles/9267289-how-is-my-team-plan-bill-calculated):

| Change | When it is billed or takes effect |
|---|---|
| Add a seat | "prorated based on your billing cycle and charged immediately" |
| Upgrade a Standard seat to Premium | Prorated, with the price difference charged immediately |
| Remove a member | No credit or refund; "The seat becomes available to assign to another member" |
| Reduce the seat count | Takes effect at the next renewal, "on the annual renewal date for annual plans", with "no prorated refund" |
| Move a member from Premium to Standard | Also at the next renewal, with no prorated refund |
| Switch from monthly to annual | Unused time is credited toward the first annual invoice, per the pricing FAQ |

Anthropic's billing article works two examples. On an annual plan with 10 Standard seats ($2,400 for the year), upgrading five seats to Premium with 275 days left costs "$3,616.44". On a monthly plan with 10 Standard seats ($250 a month), the same upgrade on 15 January with 16 days left costs "$258.06."

My rule from those terms: put the seats you are sure of for a year on annual billing, start on monthly when headcount is uncertain, and switch once it settles, since the switch credits unused time. An annual plan bought for 10 people that shrinks to 6 stays paid for 10 seats, with no prorated refund, until the renewal date.

## Claude Team vs Enterprise Self-Serve

Enterprise self-serve has been on sale online since 12 February 2026, with "a single seat type", per the release notes. Its seat fee matches a Standard Team seat on annual billing, and the difference is what the fee includes:

| | Team | Enterprise, self-serve |
|---|---|---|
| Seat price | Standard $20 or Premium $100 a month billed annually; $25 or $125 billed monthly | "US$20/seat/month, billed annually, 20 seat minimum" |
| Usage | Included per seat, then optional usage credits at API rates | "the seat fee covers access only, and all usage is billed separately at API rates" ([Enterprise plan article](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan)) |
| Seats | 2 to 150 | 20 minimum |
| Billing cycle | Monthly and annual | Annual |
| Payment | Credit card | Credit card or ACH |
| Monthly API credits | Up to $500 | No |
| SCIM, audit logs, Compliance API, custom data retention | No | Yes |

At 20 people the seat fees are the same, 20 x $20 = $400 a month on both plans, but on Team that buys each member an included allowance plus a $400 API credit pool, while every Enterprise prompt is billed on top. So I read Enterprise as the plan you move to for SCIM, audit logs, the Compliance API or more than 150 seats, and Team as the cheaper bill for a group that needs none of those.

Two of Anthropic's pages disagree on Team controls. The Team article lists "Role-based permissioning" and "Domain Capture" among Team features, while the pricing page's comparison table marks "Role-based access" and "Domain capture" as "No" for Team. If either control decides your purchase, ask Anthropic which page is current before you pay.

Discounts exist for nonprofits and for research groups. The Max article says eligible nonprofits "can get discounted pricing on Team and Enterprise plans", and research groups led by a verified principal investigator have [a Team plan for scientists](/blog/claude-student-discount-india/) with its own seat prices. The credits article gives both the same $20 and $100 per-seat API credit.

## Team Pricing in India

Fetched logged out from an Indian connection on 31 October 2026, claude.com/pricing served Team prices in dollars ($20 and $25 for a Standard seat, $100 and $125 for Premium) and Enterprise as "US$20/seat/month", with no rupee figure anywhere in the page. The Team article says "Pricing, currency, and tax handling vary by region" and points to claude.ai/upgrade "to see current pricing for your location", which needs a signed-in account.

The rupee Team prices in print come from the press, not from Anthropic. [Open magazine, updated 14 July 2026](https://openthemagazine.com/technology/claude-ai-gets-india-pricing-in-rupees-heres-what-pro-max-team-plans-cost), reported:

| Seat | Open magazine's figure | Open magazine's monthly billing figure |
|---|---|---|
| Standard | "Rs 2,399 per user per month, including GST" | "Rs 2,999 per user" |
| Premium | "Rs 11,999 per user per month, including GST" | "Rs 14,999" |

The report does not label the lower figure as the annual-billing rate, though each line sets it against a separate monthly billing price. Treat these as a July 2026 snapshot and read the price at your own checkout; [my Claude price guide for India](/blog/claude-pro-price-in-india/) covers the web, App Store and GST differences.

## Claude Team Plan: Buy the Seats You Are Sure Of

Claude Team plan seats pay off on annual billing only for people who stay the year and, for the credit, only if someone calls the API. The credit is worth nothing to a team that never calls the API, and the annual price works against a team that shrinks mid-year, because seat cuts wait for renewal. Count the people who will hold a seat for twelve months, give Premium only to those who hit limits, and put everyone else on Standard.
