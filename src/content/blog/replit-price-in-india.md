---
title: "Replit Price in India: Core by Checkout and Break-Even Rate"
description: "At Rs 84.70 a dollar if the web adds 18% tax, or Rs 99.95 if not, the Replit price in India is the same on Apple's App Store (Rs 1,999) and replit.com ($20 a month)."
publishDate: 2026-10-10
category: [AI, Tools]
img: /assets/stock-4.webp
img_alt: "Renaissance-style study of an orrery and geometric instruments on a scholar's table, a red thread tracing an orbit"
faqs:
  - q: "Is Replit free in India?"
    a: "Yes. Replit's Starter plan is free with no time limit and includes daily Agent credits and one published app, whose link goes down after 30 days. Core, the first paid plan, was $20 a month on replit.com and ₹1,999 on Apple's India App Store on 10 October 2026."
  - q: "Can I pay for Replit with UPI in India?"
    a: "Yes. Replit's changelog of 10 April 2026 says builders in India can pay with UPI and cards through Razorpay, with e-mandate support for recurring subscriptions, and Razorpay says Indian users pay in INR. In the iPhone or Android app, Apple or Google handles billing, per Replit's billing help."
  - q: "Is there a Replit Premium plan?"
    a: "No. The Replit subscription plans on replit.com/pricing are Core at $20 a month, Pro at $100 a month and Enterprise at a custom price, and Premium Support is a feature on the Pro card. Apple's India App Store sells Core only, at ₹1,999 and ₹22,900."
  - q: "What is the Replit Agent 3 price in India?"
    a: "Replit's pricing page and docs list no price for an Agent version. Its docs date Agent 4 to 11 March 2026, the pricing page says a subscription includes full Agent 4 access, and Agent work is billed through the Free Mode allowance, plan credits and effort-based pricing."
  - q: "Is Replit free for students in India?"
    a: "Starter is free for everyone. Replit's student page, read on 10 October 2026, lists Core at $10 a month with a .edu email, half the $20 price, and does not mention Indian college domains such as .ac.in."
---

Replit Core costs the same in Apple's India App Store as on replit.com when a US dollar costs **₹84.70** with 18% tax added to the web price, or **₹99.95** with no tax added. Both rates come from prices I read on 10 October 2026, ₹1,999 on Apple's India listing and $20 a month on replit.com, and where your own dollar rate sits against them decides which Replit price in India is lower for you.

[RBI's reference rate](https://www.rbi.org.in/scripts/ReferenceRateArchive.aspx) for 9 October 2026 was ₹96.6149 to the dollar, between the two. At that rate, before any card fee, the web is the cheaper checkout if no tax is added and the App Store is cheaper if 18% is, and Replit's [pricing page](https://replit.com/pricing) leaves the tax line open with a footnote: "*Prices are subject to tax depending on your location."

Replit is one of the app builders I use, and I read its price as a floor. Core buys $20 of monthly credits and a Free Mode allowance, and Agent work past both is billed as you go, up to any usage limit you set. I would pick the checkout by its tax line, then set that limit before the first paid run.

As of 10 October 2026, the Replit Core price in India is $20 a month on replit.com, or $18 a month billed annually, before any tax. Apple's India App Store lists Core at ₹1,999, plus a ₹22,900 item, probably yearly. Google Play India shows one range: ₹2,150.00 to ₹24,200.00 per item.

| Checkout | Price listed | What the page shows | Payment |
|---|---|---|---|
| replit.com, logged out from India | $20 a month, or $18 a month billed annually ($216 a year) | Dollars only, plus the tax footnote | UPI and cards through Razorpay, per [Replit's changelog of 10 April 2026](https://docs.replit.com/updates/2026/04/10/changelog), in INR per Razorpay's February 2026 announcement; neither gives an amount |
| [Apple App Store, India](https://apps.apple.com/in/app/replit-vibe-code-with-ai-fast/id1614022293) | ₹1,999 and ₹22,900 | "Replit Core" and "Replit Core (Hacker)" at each price, with no billing period and no tax wording | Apple handles billing |
| [Google Play, India](https://play.google.com/store/apps/details?id=com.replit.app&hl=en_IN&gl=IN) | No Core price; ₹2,150.00 to ₹24,200.00 per in-app item | One range for every in-app item and no plan name; the footer says "All prices include GST." | Google handles billing |
| Apple App Store, US, for reference | $20.00 and $219.99 | The same two names at each price | Apple handles billing |

Those dollar prices are what replit.com served me logged out on 10 October 2026 from an Indian connection (Cloudflare's trace returned loc=IN), with no cookies and no Replit login:

- I fetched the pricing page with curl and opened it in a fresh headless Chrome session set to the en-IN locale.
- The page opens on the Yearly toggle, with $20 struck through beside "$18 / month, billed annually", and the Monthly toggle shows "$20 / month".
- Neither view has a rupee sign, INR, GST, UPI or the word India anywhere in its text.

## Replit Price in India: The Break-Even Exchange Rate

The break-even rate is the App Store price divided by the web price, with the web price raised by the tax rate when tax is added.

<img src="/assets/blog/replit-price-in-india/break-even-rate.webp" alt="Two number lines of rupees per US dollar for Replit Core, read on 10 October 2026. Smaller App Store item, probably monthly: ₹1,999 against $20 a month on replit.com breaks even at ₹84.70 if 18% tax is added on the web and at ₹99.95 if no tax is added. Larger App Store item, probably yearly: ₹22,900 against $216 a year breaks even at ₹89.85 and ₹106.02. RBI's reference rate of ₹96.61 for 9 October 2026 sits between the two break-even rates on both lines, where the web tax line decides which checkout costs less." title="Replit Core in India: the break-even exchange rate" width="1200" height="789" loading="lazy" decoding="async" />

| Core item | App Store, India | replit.com | Break-even, no tax added on the web | Break-even, 18% added on the web |
|---|---|---|---|---|
| Smaller App Store item vs the web's monthly price | ₹1,999 | $20 a month | ₹99.95 (1,999 / 20) | ₹84.70 (1,999 / 23.60) |
| Larger App Store item vs the web's yearly price | ₹22,900 | $216 a year ($18 x 12) | ₹106.02 (22,900 / 216) | ₹89.85 (22,900 / 254.88) |

Apple's listing does not say which item is monthly and which is yearly, so the second row rests on my reading that the larger price is the year. On [Apple's US listing](https://apps.apple.com/us/app/replit-vibe-code-with-ai-fast/id1614022293) the same pair is $20.00 and $219.99, against the web's $20 a month and $216 a year.

At RBI's ₹96.6149, these are the checkouts in rupees. They are my conversions, not prices any page shows:

| Core item | App Store, India | Web, no tax added | Web, 18% added |
|---|---|---|---|
| Smaller item (probably monthly) | ₹1,999 | ₹1,932.30 | ₹2,280.11 |
| Larger item (probably yearly) | ₹22,900 | ₹20,868.82 | ₹24,625.21 |

On the smaller item, the web is ₹66.70 lower with no tax added and ₹281.11 higher with 18% added. To use the break-even on the day you pay:

- Razorpay says Indian users pay in INR, with Razorpay handling the foreign exchange, so a Razorpay checkout should show a rupee total: compare it with ₹1,999 directly.
- If the checkout shows dollars, your rupee cost is what your card statement posts for the full dollar total, tax line included, plus any foreign-currency markup fee your bank adds. With no tax added, the web's ₹66.70 lead at RBI's rate is gone once your card's rate and fees add more than 3.45% to the ₹1,932.30.
- Above ₹99.95 to the dollar, the App Store costs less even with no tax added on the web. Below ₹84.70, the web costs less even with 18% added.

If the ₹22,900 item is a year, as I read it, it saves less than the web's yearly price does:

| Over a year | App Store, India | replit.com |
|---|---|---|
| Twelve monthly payments | ₹23,988 | $240 |
| Larger item, or the yearly price | ₹22,900 | $216 |
| Saving on twelve monthly payments | ₹1,088, or **4.5%** | $24, or 10% |
| Eleven monthly payments | ₹21,989 | $220 |

Eleven App Store payments cost less than ₹22,900, so that item pays off only if you would have paid for a twelfth month. On the web, $216 is below eleven payments of $20.

## Does the Replit Price Include GST?

For Core, Replit does not say: its pricing-page footnote is the only tax line I found that covers Core. For Pro, Replit's [Pro Agreement](https://replit.com/pro-agreement) puts taxes on the customer.

| Replit page | What it says about tax, 10 October 2026 |
|---|---|
| replit.com/pricing | "*Prices are subject to tax depending on your location." |
| Pro Agreement, for the Pro plan | The customer "is solely responsible for all taxes, fees, duties and governmental assessments that are imposed or become due in connection with this Agreement" |
| [Terms of Service](https://replit.com/terms-of-service), last updated 3 August 2026 | No tax clause |
| [Docs, full text](https://docs.replit.com/llms-full.txt) | Taxes only in guides for the apps and businesses you build on Replit; no mention of GST, VAT, INR or rupees |
| Changelog entry on Razorpay payments for India | No currency, amount or tax line |

Both app stores put tax inside their rupee prices, by Google Play's India listing and Apple's pricing rule for developers, both quoted in [my Claude Pro price guide for India](/blog/claude-pro-price-in-india/), so the web's $20 is the one figure that can rise at checkout. The 18% in my what-if column is the IGST rate that the [GST Council's services rate chart](https://gstcouncil.gov.in/sites/default/files/2024-02/gstservicerates.pdf) gives heading 9984, telecommunications, broadcasting and information supply services. Replit names no rate for India, so read that column as a what-if until your checkout shows a tax line. Canva, by contrast, prints rupee prices on its own pricing page and says in its tax help that the advertised price includes sales tax outside the United States and Canada, as my [India price check on Canva Pro](/blog/canva-pro-price-in-india/) records.

## Paying for Replit From India: UPI, Razorpay and App Stores

Replit's changelog announced UPI payments on 10 April 2026, more than three years after a Replit blog post said it planned to. Razorpay, its payments partner, had already described UPI and card payments for Replit as live in beta in February 2026.

| Date | Source | What it says |
|---|---|---|
| 27 January 2023 | [Replit x India (Part 2)](https://replit.com/blog/replit-x-india-part-2), a Replit blog post by Anshul Bhide | "We have heard your feedback and plan to enable UPI to allow Indian users to pay" |
| 19 February 2026 | [Razorpay's announcement](https://razorpay.com/blog/razorpay-partners-with-replit/) of its partnership with Replit | "Indian users can now upgrade and subscribe on Replit using familiar payment methods like UPI and cards, in INR", with the partnership "currently live in beta" |
| 20 February 2026 | Replit's [changelog entry on a Razorpay MCP integration](https://docs.replit.com/updates/2026/02/20/changelog) | Connects Razorpay to a project so the app you build can accept payments; it is not a way to pay Replit |
| 10 April 2026 | Replit's changelog entry on Razorpay payments for India | "Builders in India can now pay with UPI and cards through Razorpay", with e-mandate support for recurring subscriptions "as required by the Reserve Bank of India"; existing subscribers in India "will soon be able to switch from Stripe to Razorpay" from the billing page |

The checkout also decides what you can buy and where extra usage is billed:

| Question | replit.com | App Store or Google Play |
|---|---|---|
| Which plans can you buy? | Core, Pro, or Enterprise through sales | Core only: "Pro isn't available for purchase in the mobile app; it must be purchased on replit.com." |
| Who bills you? | Replit | "Apple or Google handles billing" |
| Can you pay by UPI? | Yes, through Razorpay, per Replit's 10 April 2026 changelog | Apple and Google both list UPI among their payment methods in India; the Claude Pro guide linked in the GST section shows both lists |
| Usage past your credits, and credit packs | The payment method on your Replit account | Add a web payment method first; the in-app billing screen is "iOS in US only" |
| Credits missing after payment | n/a | Do not buy twice; send the App Store transaction ID to Replit Support |

The other rows come from Replit's [mobile app docs](https://docs.replit.com/features/platforms/mobile-app) and its [billing and refunds help](https://docs.replit.com/help/billing-and-refunds).

## Replit Core Credits: What $20 Covers Before Pay-As-You-Go

The FAQ on Replit's pricing page says each plan includes monthly credits, "$20 for Core, starting at $100 for Pro", and that "Additional usage beyond your monthly credits is billed as pay-as-you-go using our Effort-Based Pricing model."

<img src="/assets/blog/replit-price-in-india/core-credits-ladder.webp" alt="Four steps a Replit Core plan draws on, from Replit's docs read on 10 October 2026: Free Mode, for Agent work only, at no cost within an allowance that resets every five hours with weekly limits; $20 of monthly credits for Power and Max modes, publishing, databases and AI integrations, with no rollover on Core; optional credit packs of $100 to $1,000 of credits that expire in six months; and pay-as-you-go billed at each threshold, priced by effort, up to the usage limit you set. Steps 1 and 2 come with the Core price and steps 3 and 4 are billed on top." title="What a Replit Core plan draws on, from free to billed" width="1200" height="557" loading="lazy" decoding="async" />

In order, from free to billed:

1. **Free Mode allowance.** Free Mode "provides no-cost Agent work within each plan's allowance", and "The Core and Pro allowances reset every five hours and have weekly limits", per Replit's [pricing and plans help](https://docs.replit.com/help/pricing-and-plans). The Core card adds "Up to 30 hours of chat on Free Mode", and at the limit Replit's [Free Mode help](https://docs.replit.com/help/free-agent-mode) says to switch to a paid mode or wait for the reset.
2. **$20 of monthly credits.** They pay for Power and Max modes, publishing, databases and AI integrations, and "Core credits reset at the start of each billing cycle and don't roll over". Some Agent capabilities call paid third-party APIs behind the scenes (Replit names Claude, ChatGPT and Nano Banana / Gemini), billed "at the provider's public API rate, deducted from your Replit credits" ([Replit AI billing](https://docs.replit.com/billing/ai-billing)).
3. **Credit packs, if you buy them.** Packs add prepaid credits, discounted from the $300 size up, expire six months after purchase and do not renew, per [Managing your spend](https://docs.replit.com/billing/managing-spend). The same page says your usage limits apply only after any pack credits are used.
4. **Pay-as-you-go.** Usage past your credits is billed each time it reaches a billing threshold, rather than only at the end of the cycle, per the billing and refunds help. Paid Agent work is priced by effort, meaning request complexity, and the AI billing page says "Replit asks for confirmation before a paid action starts". A usage limit caps that spending: at the limit, "usage-based services are blocked until the next billing cycle or until you increase the limit", per Managing your spend.

| Credit pack | Price | Discount | Cost per $1 of credit (my arithmetic) |
|---|---|---|---|
| $100 | $100 | None | $1.00 |
| $300 | $290 | $10 off | $0.97 |
| $500 | $480 | $20 off | $0.96 |
| $1,000 | $950 | $50 off | $0.95 |

Publishing and databases draw on the same credits, and Replit cut its cloud rates from 1 August 2026, these two among them, per [Replit's cloud pricing update](https://docs.replit.com/billing/aug-cloud-billing-updates):

| Cloud rate | Before 1 August 2026 | From 1 August 2026 |
|---|---|---|
| Autoscale compute units, per million | $3.20 | $0.60 |
| Database storage, per GiB a month | $1.50 | $0.35 |

If all you need is a static site, building it with a coding agent and hosting it outside Replit keeps publishing off these credits; [this site is built that way, in Claude Code](/blog/build-a-personal-website-with-claude-code/).

## Replit Pricing in India by Plan: Starter, Core, Pro and Enterprise

| Plan | replit.com price, 10 October 2026 | Credits per month | Includes |
|---|---|---|---|
| Starter | Free, "with no time limit" | Daily Agent credits up to a monthly cap, plus limited monthly cloud credits | Lite build, one published app whose link "will automatically go down after 30 days", a "Made with Replit" badge |
| Core | $20 a month, or $18 a month billed annually | $20, no rollover | Full build, Plan Mode, connectors, up to 5 collaborators, unlimited published apps |
| Pro | $100 a month, or $90 a month billed annually; larger credit tiers up to $2,050 a month | From $100, rolled over for two months | 10 parallel agents, up to 15 collaborators, database rollback up to 28 days, Premium Support; web only |
| Enterprise | Custom | Custom | SSO/SAML, single-tenant environments, invoicing through sales |
| Premium | Not a plan | n/a | "Premium Support" is a line on the Pro card |
| Teams | Replaced by Pro | n/a | "The Pro plan replaced the former Teams plan," per Replit's [Teams billing overview](https://docs.replit.com/billing/teams-billing/overview) |

The plan rows come from Replit's pricing page, its pricing and plans help, its [Starter plan docs](https://docs.replit.com/billing/plans/starter-plan) and its mobile app docs.

For an app you want the builder to host and run, [the send-to table for Claude Design output](/blog/claude-design-vs-claude-code/) points to Replit or Lovable, and [Lovable AI's price in India](/blog/lovable-ai-price-in-india/) sets Lovable's web dollar prices against its iPhone rupee prices.

### Is Replit Free?

Yes. Starter "is free with no time limit", and Replit "doesn't offer a time-limited free trial for paid plans", per its pricing and plans help. If you want search traffic to a published app, check [whether search engines can read a vibe-coded site](/blog/vibe-coded-website-seo/) first.

## Is Replit Free for Students in India?

Starter is free for students as for anyone, and the student offer is a Core discount. On 10 October 2026, Replit's [student page](https://replit.com/edu/students) listed Core at "$10 / month with .edu email", marked "50% off with .edu verification".

- The page names a .edu address and does not mention Indian college domains such as .ac.in, so confirm your email qualifies before you plan around $10.
- It states no end date. [Replit's changelog of 19 September 2025](https://docs.replit.com/updates/2025/09/19/changelog) announced a different offer: "$15 off per month for the first six months" of Core with a student email.
- Replit's help page still sends students to replit.com/education, which returned a 404 on 10 October 2026. The live page is replit.com/edu.

## Stale Replit Prices Still Online

| Where | What it says | What Replit shows on 10 October 2026 |
|---|---|---|
| [Techjockey's Replit listing](https://www.techjockey.com/detail/replit) | Core "Starting at $25" and Teams "Starting at $40", each with "Request for Price" | Core at $20 a month; Teams replaced by Pro |
| Replit's own help page | "Core is $204/year." | $18 a month billed annually, which is $216 a year. At $204, the break-even against the ₹22,900 item would be ₹112.25 before tax |
| [Replit's changelog, 12 September 2025](https://docs.replit.com/updates/2025/09/12/changelog) | "This week, we launched Agent 3." | Agent 4 since 11 March 2026, per [Replit's docs on updating older projects](https://docs.replit.com/features/projects-and-artifacts/updating-projects-for-multiple-artifacts); its [Agent modes page](https://docs.replit.com/features/agent/agent-modes) adds "Economy Mode is no longer available. Power Mode replaces it at the same price." |

Replit lists no price for any Agent version, Agent 3 included: the pricing page's FAQ says a subscription includes "full Agent 4 access", and Agent work is billed through the Free Mode allowance and the credits above.

## Treat the Replit Price in India as a Floor

The Replit price in India on 10 October 2026 was ₹1,999 in Apple's India App Store and $20 a month on the web, with tax on the web left to your location. Whichever checkout you pick, usage past Core's credits is the part of the bill to cap.

Recheck these on the day you pay:

- Apple's India listing, for ₹1,999 and ₹22,900
- Google Play's India listing, if you pay on Android
- replit.com/pricing, for the dollar prices and the tax footnote
- The total on replit.com's checkout after you log in, the one figure no public page shows

Then set a usage limit under Settings > Account > Usage before your first paid Agent run.
