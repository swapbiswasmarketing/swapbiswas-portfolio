---
title: "Price Increase Announcement: Templates by Segment (2026)"
description: "How to run a price increase announcement end to end: the segmentation matrix, notice periods by contract, email templates per tier, and a 90-day scorecard."
publishDate: 2026-08-15
category: [Product Marketing, Marketing]
img: /assets/stock-2.webp
img_alt: "Renaissance-style still life of a craftsman's bench with a finished astrolabe, sketches and a red ribbon"
faqs:
  - q: "How do you announce a price increase to customers?"
    a: "Segment the book first, then send one message variant per segment. Give annual enterprise accounts 90 days notice on a live call, annual mid-market and SMB 60 days by email from a named human, and monthly self-serve 30 days by email plus in-app. Every version states the current price, the new price, the effective date, what shipped since the last change, and one route to reply."
  - q: "How much notice should you give for a price increase?"
    a: "Match notice to contract length and switching cost: 90 days for annual and multi-year enterprise, 60 days for annual mid-market and SMB, 30 days for monthly self-serve. Check the contract first. Many MSAs specify a minimum notice window, and for consumer or self-serve plans California's amended Automatic Renewal Law requires a fee-change notice no less than 7 and no more than 30 days before the change takes effect."
  - q: "How do you justify a price increase?"
    a: "Justify it with what the customer received, not with what your inputs cost. Name the specific capabilities shipped since the last price change, the limits raised, and the support or security commitments added. Cost-based reasoning invites a cost-based negotiation, and the customer always has more time to argue about your costs than you do."
  - q: "Should you grandfather existing customers when you raise prices?"
    a: "Grandfathering is a pricing decision, not a courtesy. Permanent grandfathering builds a low-price cohort you can never move and distorts renewal economics for years. A time-boxed hold - the old price for one more renewal cycle, then the new price - captures most of the goodwill without the permanent liability."
  - q: "How do you raise prices without losing customers?"
    a: "Cap the increase per account, give enough notice that customers can plan rather than react, brief the CSM before the customer sees anything, and set a concession ceiling so the save desk cannot discount past the point where the increase stops paying for itself. Most churn after a price increase is a surprise problem rather than a price problem."
howTo:
  name: "How to run a price increase announcement"
  steps:
    - name: "Lock the segmentation matrix"
      text: "Segment the book by contract type, ARR band, and account health, then fix the notice period, channel, message owner, and concession ceiling for each tier."
    - name: "Set the concession ceiling"
      text: "Agree with finance the maximum retention discount per tier before the save desk starts improvising, and model what each ceiling does to realized uplift."
    - name: "Run internal enablement"
      text: "Ship CS talk tracks, sales objection handling, support macros, and billing changes on a dated countdown so every internal team is ready before any customer is told."
    - name: "Send the announcement"
      text: "Send one template variant per segment tier, in tier order, from a named human, stating the current price, the new price, the effective date, and one route to reply."
    - name: "Read the 30/60/90 scorecard"
      text: "Track pricing-tagged tickets, downgrade rate, concession depth, voluntary churn delta by price band, realized versus modeled uplift, and net revenue retention."
---

Among the top 500 players in SaaS and AI with transparent pricing, [there were more than 1,800 pricing changes in 2025 alone, or 3.6 per company](https://www.growthunhinged.com/p/2025-state-of-saas-pricing-changes), according to the PricingSaaS index published in Growth Unhinged. Price movement is now routine. The **price increase announcement** is the part almost nobody runs well.

Here is the point of view I will defend for the rest of this post: a price increase gets treated as a copywriting problem, and that is exactly why the templates keep failing. It is a GTM operations problem. The announcement is not the project, it is the artifact the project produces. Get the segmentation, the concession ceiling, and the internal enablement right and a plain email works. Get them wrong and no amount of empathetic phrasing saves the renewal.

So the templates are at the bottom of this post, where they belong, with one variant per segment tier. Everything above them is the work that decides whether they land.

## How to Announce a Price Increase: The Five-Step Sequence

1. **Lock the segmentation matrix.** Split the book by contract type, ARR band, and account health, then fix the notice period, channel, message owner, and concession ceiling for each tier.
2. **Set the concession ceiling with finance.** Decide the maximum retention discount you will grant per tier, in writing, before anyone is asked for one.
3. **Run internal enablement.** CS talk tracks, sales objection handling, support macros, and billing changes all ship before a single customer is told.
4. **Send the announcement.** One template variant per tier, in tier order, from a named human, with the current price, the new price, the effective date, and one route to reply.
5. **Read the 30/60/90 scorecard.** Pricing-tagged tickets, downgrade rate, concession depth, churn delta by price band, realized versus modeled uplift, and net revenue retention.

![Five-step operator sequence for a price increase announcement](/assets/blog/price-increase-announcement/operator-sequence.webp "The Price Increase Announcement Operator Sequence")

## What Is a Price Increase Announcement, and What Belongs in It

A price increase announcement is the formal notice a company sends existing customers before new pricing takes effect. It states the current price, the new price, the date the change applies, the reason for it, and how the customer can respond. In B2B SaaS it is usually an email, but for high-value accounts the email is the written record of a conversation that already happened.

Every version, regardless of segment, contains seven things:

- **The current price and the new price**, as numbers, for that specific account or plan
- **The effective date**, plus the first invoice or renewal it actually hits
- **What the customer received** since the last price change, in specifics they can verify
- **What is not changing** in their plan, limits, terms, or contacts
- **The notice window** and what happens if they do nothing
- **One named human** to reply to, from a monitored address
- **Their options**: annual prepay, a different tier, or the route to cancel

Four things do not belong in it. An apology, because apologizing invites a negotiation about whether the price should exist. Inflation as the headline reason, because that is your problem rather than theirs. A blanket "we hope you understand," which is filler. And an unprompted discount, which teaches the entire book that the list price is a suggestion.

One scope check before you write anything: if what is changing is the shape of the tiers rather than the number on an existing one, you are running a repackaging, and [restructuring a Good, Better and Best ladder](/blog/good-better-best-pricing/) comes with its own migration path for customers sitting on the old plans.

## The Price Increase Segmentation Matrix

"Segment your customers" is where most advice on this stops. Segmentation is only useful once it produces a decision, so here is the rule I use. Three axes - contract type, ARR band, and account health - collapse into five tiers, and each tier gets a fixed answer to five questions.

| Tier | Who it is | Notice | Channel and owner | Concession ceiling | Escalation trigger |
| --- | --- | --- | --- | --- | --- |
| **T1 Strategic** | Annual or multi-year, ARR above $100K | 90 days | Live call from the CSM with an exec sponsor, written confirmation same day | Up to half the increase, one cycle only | Customer routes you to procurement or legal |
| **T2 At risk** | Annual, $25K to $100K ARR, red health or open escalation | 90 days | Call from the CSM first, email after | Hold at the old price for one cycle, never a permanent discount | Champion has left, or renewal is inside 60 days |
| **T3 Healthy mid-market** | Annual, $25K to $100K ARR, green health | 60 days | 1:1 email from the named CSM, not a blast | Up to a quarter of the increase, one cycle | Two replies without resolution |
| **T4 SMB annual** | Annual, under $25K ARR | 60 days | Segmented email from a named human, plus in-app banner | Published policy only, no bespoke deals | Pricing-tagged ticket volume above your set trigger |
| **T5 Self-serve monthly** | Monthly billing, any ARR | 30 days | Email, in-app notice, and billing page | None. Offer annual prepay at the old rate instead | Cancel-flow completion rate rises above baseline |

Two notes on using it. Account health belongs on the axis because a red-health mid-market account behaves like an enterprise account during a price change, and treating it like a mail-merge recipient is how you lose it. And the owner column matters more than the channel column: an unowned tier is a tier where nobody notices the silence.

The matrix is also what makes the templates further down usable. Once a tier is assigned, the wording is nearly the last decision left.

## The Concession Ceiling: When a Save Discount Cancels the Increase

The question that actually gets asked internally is how much the save desk can give away before the increase stops paying for itself.

The arithmetic is simple enough to settle in one meeting. Take a $2M renewal book and a 12% list increase, which is $240K of gross uplift.

![Three concession scenarios modeled against a 12 percent list increase](/assets/blog/price-increase-announcement/concession-ceiling.webp "The Concession Ceiling on a Price Increase")

- Discount 10% of ARR by half the increase and you realize 11.4%
- Discount 30% of ARR by half the increase and you realize 10.2%
- Hold 30% of ARR flat entirely and you realize 8.4%

None of those are catastrophic on their own. The reason to set the ceiling anyway is compounding: next year's increase is calculated off the lower base, so a concession granted once is a permanent haircut on every future increase for that account. That is a finance decision, and it should be made once, at a tier level, rather than improvised account by account under renewal pressure.

The harder half of the ceiling is knowing when to let an account churn. If an account demands a concession deeper than its tier ceiling and is not strategically load-bearing - no reference value, no expansion path, no logo weight - the correct answer is to let the renewal lapse. Writing that down before the announcement goes out is what stops a save desk from quietly buying revenue at a loss.

## Price Increase Justification: Lead With What Shipped

Price increase justification is where most announcements go wrong, because the writer reaches for the reason that feels most defensible to them rather than the one that is persuasive to the customer.

Your costs are the weakest available argument. Any buyer of size has a procurement function whose job is to argue that your costs are your problem, and they have more time for that argument than you do. Vendor cost inflation is also visibly real to them: Vertice reports [SaaS inflation reached 16.4% in June 2026, up from 13.2% in Q1 2026, almost 4x the US CPI of 4.2%](https://www.vertice.one/insights/saas-inflation-rate), based on over $75bn of processed spend. Your customers read that number as evidence they are being squeezed, not as your justification.

Lead instead with what the account received:

- **Capabilities shipped** since the last price change, named, and ideally ones this account already uses
- **Limits raised**, with the before and after figures
- **Commitments added**, such as an uptime SLA, a security certification, or a support tier
- **Product surface removed from paid add-ons** and folded into their plan

The commercial reason to get this right is leverage. McKinsey's B2B pricing work notes that [on average, a 1 percent price increase translates into an 8.7 percent increase in operating profits, assuming no loss of volume](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/b2b-pricing-navigating-the-next-phase-of-the-ai-revolution). The whole game is the "no loss of volume" clause, and volume is preserved by a justification the customer can repeat internally without embarrassment.

If you are still deciding the number itself rather than how to land it, that is a different exercise. Start with [how to create a pricing strategy](/blog/how-to-create-a-pricing-strategy/) for willingness-to-pay research, packaging, and model selection, and with the [B2B SaaS pricing models](/blog/saas-pricing-models/) breakdown if your value metric is what is actually changing.

## Internal Enablement: The Two Weeks Before the Customer Email

The failure mode I keep seeing is a well-written price increase announcement landing in an organization that has not been told. A rep hears about the increase from a prospect. A support agent improvises a policy on the ceiling. Someone in billing sends the new invoice two days early.

Run the internal side on a dated countdown:

| When | Who | What ships |
| --- | --- | --- |
| T-21 days | Finance and PMM | Signed-off price file, per-account new prices, concession ceiling by tier |
| T-14 days | PMM and CS leadership | Talk track, matrix walkthrough, the three likeliest objections and the answers |
| T-10 days | PMM and Sales | Objection handling for in-flight deals, plus the rule for quotes already sent |
| T-7 days | Support and RevOps | Macros written, help-center article live, billing updated, invoice preview checked |
| T-3 days | Everyone | Dry run: one test send per tier, exec review of the named T1 account list |
| T-0 | PMM | Send in tier order, T1 calls first, then T2 and T3, then T4 and T5 |

Order matters more than content here. CS needs talk tracks before support needs macros, because CS will be in live conversations first. Sales needs the in-flight-deal rule before anything is public, because a prospect who learns about the increase mid-cycle from your own website will use it as leverage. If your enablement muscle is thin, the build order in the [sales enablement strategy](/blog/sales-enablement-strategy/) framework is the same shape: audit the gap, map it to a moment, ship in priority order.

## Price Increase Notification: Channel, Timing, and the Legal Floor

Three constraints set the timing, and only one of them is a marketing choice.

**The contract.** Most MSAs and order forms specify a minimum notice window for price changes at renewal, and some cap the annual uplift outright. Read the actual paper for your top accounts before you pick a date. A price increase notification that violates a contractual notice clause stops being a comms problem and becomes a breach.

**The law, if any of your book is consumer or self-serve.** California's amended Automatic Renewal Law requires that, before a fee change, the business provide notice [no less than 7 days and no more than 30 days before the fee change takes effect](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2863), and the amendments apply to contracts entered into, amended, or extended on or after July 1, 2025. Treat that window as a floor rather than a target, and as a reason to send self-serve notices on a tight, deliberate schedule rather than months ahead.

**Switching cost.** Give enough notice that a customer can plan a response, and not so much that the change stops feeling real. Ninety days lets an annual enterprise account get it into a budget cycle. Thirty days is right for a monthly plan, where a longer runway just extends the shopping window.

One channel rule worth holding: the announcement and the invoice must never arrive in the wrong order. Check the billing system's send dates against your announcement date before anything goes out.

## Price Increase Announcement Templates: One Email per Segment Tier

Copy these, then replace every bracket. Each one is a complete price increase announcement for its tier, and the differences between them are deliberate rather than stylistic: the matrix already fixed the notice period, the sender, and the ceiling.

**T1 Strategic - live call agenda, plus same-day written confirmation**

```
T1 CALL AGENDA (CSM + exec sponsor, 20 minutes)

1. Purpose, in the first 15 seconds:
   "Your renewal on [date] will reflect our new pricing. I wanted you to
   hear the number from me before it appears in a document."
2. The number: [$X] to [$Y] per year, a [Z]% change, effective [date].
3. What changed on your account since [last change date]:
   - [Capability shipped, one their team uses]
   - [Limit raised from A to B]
   - [SLA, security, or support commitment added]
4. What is not changing: [terms, SLAs, named contacts, integrations].
5. Their turn. Stop talking. Do not fill the silence with a discount.
6. Close with a commitment: "I will send this in writing today and hold
   [date] to work through anything your team raises."
```

**T2 At risk - CSM email sent after the call**

```
Subject: Your [Product] renewal on [date], and where [open issue] stands

[Name],

Your renewal on [date] moves from [$X] to [$Y] per year, a [Z]% change.
[Open issue] is still open, so I want to be straight with you on both.

On price: this is the first change to your account since [date]. Since
then you have [specific capability they use, with usage detail].

On [open issue]: [owner] has it. Current status is [status], and the
date I am holding myself to is [date].

I am not asking you to sign off on a new number while that is unresolved.
Can we take 20 minutes on [date] to work through both together?

[Name]
[Title]
```

**T3 Healthy mid-market - 1:1 email from the named CSM**

```
Subject: A change to your [Product] pricing at your [date] renewal

[Name],

Your [Product] contract renews on [date]. At that renewal your annual
price moves from [$X] to [$Y], a [Z]% change. Nothing else about your
plan, limits, or terms changes.

This is our first price change for your account since [date]. In that
time we shipped [capability], raised [limit] from [A] to [B], and added
[commitment].

If you would rather lock [$X] in for another 12 months, [multi-year or
annual prepay option] is open until [date]. Reply here and I will set
it up.

[Name], your CSM at [Company]
```

**T4 SMB annual - segmented email from a named human**

```
Subject: Your [Product] price is changing on [date]

Hi [First name],

On [date] the annual price for your [Plan] plan moves from [$X] to [$Y].
Your invoice on [date] will show the new amount. Nothing else about your
plan changes.

Why: since [date] we added [capability 1] and [capability 2], and raised
[limit] from [A] to [B]. Your team used [feature] [N] times last quarter.

What you can do:
- Nothing. Your plan continues as it is.
- Move to a plan that fits better: [link]
- Reply to this email. It reaches me, not a queue.

[Name], [Title]
```

**T5 Self-serve monthly - email, mirrored in-app**

```
Subject: Price change on your [Plan] plan, effective [date]

Hi [First name],

Starting [date], [Plan] is [$Y] per month, up from [$X]. The new rate
applies to your first billing cycle on or after [date].

What you get now that you did not get at [$X]: [capability 1],
[capability 2], and [limit] raised from [A] to [B].

Your options:
- Prepay 12 months before [date] and stay at [$X] for the year: [link]
- Change or cancel your plan at any time: [link]
- See full pricing: [link]

[Sender name], [Team] at [Company]
```

## How to Raise Prices Without Losing Customers

Most churn that follows a price change is a surprise problem rather than a price problem. Four controls do the heavy lifting.

- **Cap the per-account increase.** A percentage increase applied uniformly produces outliers, usually the accounts on the oldest, cheapest contracts. Cap the change any single account absorbs in one renewal, and stage the rest across the next cycle.
- **Time-box grandfathering.** Permanent grandfathering builds a low-price cohort you can never move, and it quietly distorts renewal economics for years. One more cycle at the old price, then the new price, captures most of the goodwill without the liability.
- **Never let a customer learn it from a third party.** That includes your own pricing page, your changelog, and a competitor's sales team. Public pages update on announcement day, not before.
- **Size the increase against what actually shipped.** Growth Unhinged's review of 2024 pricing moves flagged that [Docker raised the price of its Pro and Team plans by 80% and 67% respectively](https://www.growthunhinged.com/p/saas-pricing-changes-2025), which drew a visible wave of disgruntled customers to the Docker subreddit. A jump that size needs a value story of the same size, delivered to each account individually, and it is not something an email can carry alone.

The through-line is that customers accept price changes they can predict and explain to their own boss. They churn over ones that arrive unannounced, unexplained, or inconsistently applied across their peer group.

## The 30/60/90 Price Increase Announcement Scorecard

Most announcement advice stops at the send. Knowing whether the increase actually worked is the harder half, so here is the read I would run. Set the baseline before you send, otherwise everything after is anecdote.

| Metric | Read at | Healthy | Fail signal |
| --- | --- | --- | --- |
| Pricing-tagged CS and support tickets | Day 7 and day 30 | Spike in week one, back to baseline by day 30 | Still elevated at day 30, which means the message was unclear rather than the price being wrong |
| Downgrade rate on notified accounts | Day 30 and 60 | At or below your normal quarterly tier-change rate | Above it and concentrated in one tier, which means that tier is mispriced |
| Save-desk concession rate and depth | Day 30, 60, 90 | Inside the tier ceilings, on a minority of notified ARR | Ceiling breached, or reps granting the maximum by default |
| Voluntary churn delta by price band | Day 90 vs prior four quarters | Flat to modestly up, spread evenly | Concentrated in one band or one segment |
| Realized versus modeled uplift | Day 90 | Within a few points of the model | A wide gap, which means the concession assumptions were fiction |
| Net revenue retention delta | Day 90 and the next full renewal cohort | Up, since price increases flow into NRR | Flat or down, which means the increase was funded by churn |

The last row is the one that settles the argument. SaaS Capital's 2025 survey of private SaaS companies notes that [NRR "includes upsells, new product cross-sells, and price increases"](https://www.saas-capital.com/blog-posts/what-is-a-good-retention-rate-for-a-private-saas-company/), and that companies with ACVs between $25,000 and $50,000 show a median NRR of 102%, with the top quartile at 111% and the bottom quartile at 97%. If a well-run increase does not move your NRR toward the upper quartile of your ACV band within two renewal cohorts, the uplift was recycled back out through concessions and churn. Pair this scorecard with the wider set in [product marketing metrics](/blog/product-marketing-metrics/) so the pricing read sits next to everything else you report.

## What Predictably Breaks in a SaaS Price Increase

The list of things that go wrong is short and repeats:

- **Sales finds out from a customer.** In-flight deals get repriced badly, or reps discount defensively to close before the date.
- **Nobody owns the top 20 accounts by name.** "CS will handle it" is not an owner. A named person per T1 account, on a list an exec has read, is.
- **The ceiling was never written down**, so the save desk invents one under pressure and it is always deeper than the one finance would have approved.
- **Billing runs ahead of comms.** The invoice shows the new number before the email explains it.
- **The message comes from no-reply@.** For anything above self-serve, an unmonitored sender turns a manageable question into a support ticket or a cancellation.
- **The justification is about your costs**, which converts a value conversation into a procurement conversation.
- **No day-90 read was scheduled**, so the increase gets judged on the angriest reply anyone received in week one.

## Your Price Increase Announcement Is the Last 10 Percent

The reason most templates disappoint is not that the copy is bad. It is that a letter is being asked to do the work of a segmentation decision, a finance decision, and an enablement plan. A price increase announcement written on top of those three things can be flat and clinical and still land. Written without them, the most carefully worded version in the world just gives the customer a better-phrased thing to be surprised by.

If you do only three things: publish the segmentation matrix internally so every tier has an owner, agree the concession ceiling with finance in writing before the first call, and book the day-90 scorecard review into a calendar now. The templates then become what they should be - the output of the work, not a substitute for it.
