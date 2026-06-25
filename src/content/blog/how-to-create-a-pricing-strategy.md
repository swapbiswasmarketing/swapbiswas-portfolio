---
title: "How to Create a Pricing Strategy: A PMM Playbook (2026)"
description: "How to create a pricing strategy step by step: research, model selection, packaging, testing, and the PMM workflow that turns price into a growth lever."
publishDate: 2026-05-30
updatedDate: 2026-05-30
category: [Product Marketing, Marketing]
img: /assets/stock-2.webp
img_alt: Pricing strategy framework showing six steps from value research through model selection, packaging, testing, rollout, and ongoing optimization
faqs:
  - q: "How do you create a pricing strategy?"
    a: "Start with willingness-to-pay research, pick a pricing model that matches your value-delivery pattern (subscription, usage, per-seat, value-based), design packaging that creates clear upgrade paths, test before full rollout, and treat price as an ongoing experiment - not a one-time decision."
  - q: "What are the main types of pricing strategy?"
    a: "Cost-plus, competitive (matching the market), penetration (low to grab share), skimming (high to extract early), value-based (priced to the value delivered to the customer), and dynamic (price changes with demand or context). Most SaaS companies use a hybrid - value-based anchoring with competitive sanity checks."
  - q: "How often should you change your pricing?"
    a: "Most B2B SaaS companies revisit pricing every 12-18 months. The trigger for a faster revisit is a clear signal: discount rates climbing above 20%, win rates dropping in a key segment, or a new tier of customer that does not fit the current packaging."
  - q: "What is value-based pricing?"
    a: "Value-based pricing sets price as a fraction of the economic value the customer receives - typically 10-20% of the value delivered. It requires knowing what the customer would otherwise pay (time, headcount, missed revenue) to solve the problem your product solves. The discipline is research-heavy but produces materially higher prices than cost-plus."
  - q: "Should you publish your pricing on your website?"
    a: "Transparent pricing helps self-serve and SMB segments because it removes friction. It can hurt enterprise sales motions that need price discovery. The right answer depends on segment mix. The wrong answer is hiding pricing because you do not know what to charge - that signals weakness, not premium positioning."
---

[OpenView's 2023 SaaS Benchmarks Report](https://openviewpartners.com/2023-saas-benchmarks-report/) found that **78% of SaaS companies modified their pricing and packaging in 2023, but 52% spent less than a month planning the change**. That gap - between how often companies move pricing and how little thought they put into it - is why **a pricing strategy** is the highest-leverage thing most product marketers can own.

It is not a number on a website. It is a decision about how the company captures the value it creates - and getting it right or wrong moves more money than any messaging refresh ever will.

What follows: how to create a pricing strategy step by step, the six pricing models PMMs need to know, the packaging logic that drives upgrades, the testing workflow, and the ongoing operating cadence that keeps price aligned with value.

## What Is a Pricing Strategy?

A pricing strategy is the rationale and method for how a company prices its products. It covers four decisions:

- **Model** - how price is structured (subscription, usage-based, per-seat, perpetual, hybrid)
- **Level** - what the headline price is in each tier
- **Packaging** - how features are bundled into tiers
- **Discount and discount control** - how price flexes for segments, deals, promotions

A strategy is not a number. It is the answer to "why this price, this model, this packaging, for this customer, today." Companies that cannot answer that question give pricing away in deal cycles by default.

## Why Pricing Strategy Matters More Than Most PMMs Realize

The mechanics are unforgiving in pricing's favour. A 1% lift in price - holding volume constant - increases operating profit by far more than a 1% lift in volume, because volume carries variable cost while price does not. The exact multiplier depends on margin structure, but for a typical software company with 70%+ gross margin, the leverage is roughly an order of magnitude greater than equivalent volume gains.

That asymmetry is why a pricing strategy refresh that lifts realised price by even **3-5% can outperform a year of conversion-rate optimization work**. PMMs who treat pricing as inherited leave that lift on the table.

## The Six Pricing Models PMMs Need to Know

| Model | How it works | Best when | Watch out for |
|---|---|---|---|
| Cost-plus | Cost of production + target margin | Commodity, manufacturing, regulated industries | Ignores value. Underprices differentiation |
| Competitive | Match or anchor to market reference price | Mature category, undifferentiated | Race to the bottom. Removes pricing as a lever |
| Value-based | Price as fraction of value delivered to customer | Differentiated product, measurable ROI | Requires research investment. Hard to defend without proof |
| Penetration | Low entry price to grab share fast | Network-effect products, two-sided markets, viral PLG | Sets a price ceiling hard to raise later |
| Skimming | High initial price, lowered over time | New category, premium positioning, scarcity | Invites competitor entry below your price |
| Dynamic | Price flexes with demand, time, or context | Marketplaces, travel, ad inventory, energy | Customer trust and transparency tradeoffs |

Most B2B SaaS companies end up with a **hybrid** - value-based positioning anchored against competitive references, with penetration tactics in specific segments. Pure single-model pricing is rare in practice.

## How to Create a Pricing Strategy: The Six-Step Workflow

![Six-step pricing strategy framework from research through model selection, packaging, testing, rollout, and optimization](/assets/blog/how-to-create-a-pricing-strategy/pricing-workflow.webp "How to Create a Pricing Strategy: The Six-Step Workflow")

### Step 1: Research Willingness to Pay

You cannot price what you have not measured. Three research methods every PMM should know:

**Van Westendorp Price Sensitivity Meter.** Ask four price-anchor questions to current users and prospects:

1. At what price would the product be a bargain?
2. At what price would it start to feel expensive but you would still consider it?
3. At what price would it be so expensive you would not consider it?
4. At what price would it be so cheap you would question the quality?

Plot the responses. The intersections give you a defensible range - the optimal price point, the price of indifference, and the upper and lower bounds.

**Gabor-Granger.** Iteratively test specific price points - "would you buy at $X? At $Y?" - and chart the demand curve. Tighter than Van Westendorp for setting a specific number.

**Conjoint analysis.** Forces respondents to choose between bundles of feature+price combinations. Highest fidelity for packaging decisions, expensive to run, requires sample sizes of 200+ to be useful.

For early-stage products without a research budget, [structured customer interviews](/blog/what-is-voice-of-the-customer/#customer-interviews) using "what would you have paid" and "what budget line does this come from" questions get you 70% of the way there. Run 15. The answers cluster.

### Step 2: Pick a Pricing Model

The model should match how you deliver value:

- **Subscription** - if value is continuous (CRM, email, analytics)
- **Usage / consumption** - if value scales with use (API calls, compute, AI tokens, sent emails)
- **Per-seat** - if value scales with user count and seat addition is a natural growth path
- **Tiered / packaged** - if different customer segments derive different feature value
- **Hybrid** - usage + platform fee, base + add-ons, seat + usage

Get the model right first. Pricing the wrong model perfectly is worse than pricing the right model imperfectly. The model decision is the strategy decision.

### Step 3: Design Packaging

Packaging is how the model becomes specific tiers. The principles:

- **Three tiers is the sweet spot.** Two tiers gives no room to anchor. Four+ creates analysis paralysis. The middle tier should be the one you want most customers to pick.
- **Each tier needs a value driver, not a feature pile.** "Pro adds advanced reporting" is weaker than "Pro is for teams that need to report to leadership."
- **The top tier exists for anchoring and rare customers.** It makes the middle tier look reasonable.
- **Per-seat caps drive upgrade.** A 5-seat starter that becomes 10-seat pro that becomes unlimited business creates a natural upgrade path tied to growth.
- **Avoid the trap of giving away your differentiator at the bottom.** If your unique feature is in the free tier, you cannot charge for it later.

### Step 4: Set Prices

Now the number. Anchor it against:

- The willingness-to-pay research
- The competitive landscape (a sanity check, not the decision)
- Your value delivery - aim for 10-20% of the economic value the customer receives
- Round numbers that signal premium ($99, $299), or precision that signals fair ($297) - both work for different audiences. The choice is signaling.

For self-serve SaaS, end prices in 9 if the segment is price-sensitive, in 0 if the segment is premium. The convention matters less than internal consistency across tiers.

### Step 5: Test Before Rollout

Test mechanisms ranked by signal quality:

1. **Live A/B test on real prospects.** Highest signal. Only feasible for self-serve PLG.
2. **Sales-led trial.** Run new pricing on a sample of new opportunities. Track win rate, deal size, sales cycle length.
3. **Conjoint or simulation.** Useful when you cannot run a live test - for example, in regulated industries or with named-account enterprise pricing.
4. **Customer advisory board review.** Lowest signal but useful to surface objections you would not anticipate.

The mistake to avoid: skipping the test step because the pricing committee already aligned. Internal consensus is not market evidence.

### Step 6: Roll Out and Operate

Pricing rollout has three modes:

- **Grandfathering** - existing customers keep old price; new customers get new price. Customer-friendly, slow to capture lift.
- **Phased increase** - existing customers move to new pricing over 6-12 months with notice. Captures lift faster, requires communication discipline.
- **Immediate uplift with cap** - all customers move to new pricing at next renewal, with a cap (no more than X% increase in any one renewal). Most common in SaaS.

After rollout, pricing becomes an ongoing operating discipline:

- **Discount control** - monitor average discount, sales-rep variance, deal-size-vs-discount correlation
- **Price realization** - what percentage of list price you actually capture
- **Win rate by tier** - which tiers are winning, which are getting pushed back
- **Churn by price band** - early signal that a tier is mispriced

Most companies revisit pricing every **12-18 months**. The trigger for a faster revisit: **discount rates climbing past 20%**, a clear win-rate drop in a target segment, or a new customer type that does not fit the current packaging.

## Value-Based Pricing: The Deep Dive

Value-based pricing is the model PMMs should default to whenever the product is differentiated. The work:

1. **Identify the value driver.** Hours saved, revenue gained, risk avoided, headcount displaced. One primary driver.
2. **Quantify the value per customer segment.** Talk to 10 customers per segment. Ask what they would have paid in the alternative - higher headcount, an agency, a different tool, time lost.
3. **Set price at 10-20% of value.** Below 10% leaves money on the table. Above 25% creates resistance even when defensible.
4. **Build the ROI case.** Sales and marketing teams need a defensible model: "Customers like you typically save X hours per week, worth $Y, against a list price of $Z."
5. **Train sales on value selling.** Without training, sales reps fall back on competitive pricing. The pricing strategy collapses at the deal table.

Companies that talk about value-based pricing but cannot defend it to a customer in one sentence are doing cost-plus with a marketing veneer.

## Pricing Strategy Examples

**HubSpot.** Tiered subscription with per-contact pricing add-ons. The tier structure pushes upgrades as contact lists grow, which they do over the life of the customer. The free tier exists to seed pipeline, not capture revenue.

**Notion.** Per-seat with a free personal tier and team tiers. The free personal tier seeds bottom-up adoption. The team tier captures revenue when admins consolidate workspaces.

**OpenAI API.** Usage-based pricing per token, with tiers for sustained capacity. Matches value to delivery - more usage means more value extracted means more revenue.

**Slack.** Per-seat subscription with engagement-based active-user billing. Customers only pay for users who actually log in, which reduces buyer risk and signals confidence.

The pattern: each company's pricing model maps cleanly to how it delivers value. The model is the strategy.

## Pricing Strategy for Product Launches

If you are pricing a new product, the workflow shortens but does not disappear:

- **Skip the elaborate research.** Use 8-12 customer interviews to anchor willingness-to-pay.
- **Pick a model that matches the most plausible scale.** Wrong model is the most expensive mistake at launch.
- **Price slightly high.** It is easier to discount than to raise.
- **Plan the first review in 90 days.** Real adoption and conversion data is the only honest signal.

This is the bridge from a pricing strategy to a [product launch playbook](/blog/product-launch-checklist/) - the pricing decision should be made before the launch readiness review, not at it.

## Common Pricing Strategy Mistakes

| Mistake | Why it happens | Fix |
|---|---|---|
| Anchoring to competitor pricing | Easier than value research | Use competitor pricing as a sanity check, not the source of truth |
| Too many tiers | Trying to capture every segment | Three tiers, clear value drivers |
| Hidden pricing on the website | Fear of getting it wrong | Publish unless the enterprise motion genuinely requires discovery |
| Discounting without controls | No discount governance | Approval thresholds by discount band, monthly discount review |
| Treating price as a one-time decision | "We priced it last year" | Quarterly pricing review, annual deeper revisit |
| Free tier giving away the differentiator | Pressure to drive adoption | Free tier solves a smaller problem, paid tier owns the differentiator |
| Pricing decided by committee in isolation | No customer input | Every pricing decision requires customer evidence |

## How Pricing Connects to PMM Work

Pricing is one of the four core PMM mandates - positioning, messaging, pricing, and launch. Done well, it shows up in:

- **[Win-loss analysis](/blog/what-is-win-loss-analysis/)** - price comes up in deals; the data tells you whether the issue is price or value framing
- **Competitive battlecards** - how to handle price objections vs each competitor
- **Sales enablement** - the ROI calculator, the value framing, the discount guardrails
- **Launch readiness** - pricing decisions made before launch, not after

For more on the full PMM mandate, see [what does a product marketing manager do](/blog/what-does-a-product-marketing-manager-do/) and [SaaS product marketing strategy](/blog/saas-product-marketing-strategy/).

## Conclusion

A working pricing strategy is the highest-leverage thing a product marketer can own. It moves more money than any campaign, refines positioning faster than any rebrand, and signals confidence to customers in a way messaging alone cannot.

Build it on customer evidence, not internal opinion. Pick a model that matches your value delivery, design packaging that creates clear upgrade paths, and test before rollout.

Then operate it as an ongoing discipline, not a one-time decision. Companies that treat pricing as inherited give the lift away every quarter. Companies that treat it as a strategic muscle compound it.
