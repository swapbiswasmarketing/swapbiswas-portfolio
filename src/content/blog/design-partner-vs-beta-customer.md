---
title: "Design Partner vs Beta Customer: Which Program to Run"
description: "Design partner vs beta customer, plus pilot, POC and early access: a decision table with the trigger, cohort, exit rule and launch proof each program owes you."
publishDate: 2026-09-07
category: [Product Marketing, Marketing]
img: /assets/stock-4.webp
img_alt: "Renaissance-style study of an orrery and geometric instruments on a scholar's table, a red thread tracing an orbit"
faqs:
  - q: "What is a design partner?"
    a: "A design partner is an early customer who gets access to a product before it is finished and, in exchange, commits to scheduled feedback sessions and workflow access so the product can be shaped around their real work. Common Paper's standard Design Partner Agreement assigns ownership of that feedback to the provider and sets a fixed term, most often three or six months."
  - q: "What is the difference between a design partner and a beta customer?"
    a: "A design partner changes what gets built; a beta customer tests what has already been built. The design partner relationship is contracted individually with feedback obligations and a fixed term. Beta access is governed by the vendor's standard product terms rather than an individual contract, and some vendors write the ending into those terms: AWS states that beta access 'will automatically terminate upon the release of a generally available version'."
  - q: "Should design partners pay?"
    a: "Usually not. Common Paper's Contract Benchmark Report found that 25% of design partner agreements include fees, so three quarters of them are unpaid. A future discount is the more common exchange, appearing in 43% of agreements."
  - q: "How long should a design partner program run?"
    a: "Set a fixed term and let it expire. In Common Paper's benchmark data, 27% of design partner agreements run three months, 22% run six months and 19% run a year. The term is the exit mechanism, so pick one you can defend and put it in writing."
  - q: "What is the difference between a pilot and a proof of concept?"
    a: "Neither term has a published standard definition, so any split is an operating convention rather than an industry rule. Mine: a proof of concept answers one technical question that is blocking a deal, usually in a sandbox, against a criterion both sides name in advance. A pilot follows Common Paper's definition of a pilot agreement, a short-term contract that lets a prospective customer test the product before committing to a longer-term deal, run by real users with a decision date and a procurement path attached."
---

Write down the one decision the program has to settle, then pick its name. On **design partner vs beta customer**, that single question settles it: if what is still open is *what to build*, you want a design partner; if what is open is whether the thing you already built survives real data and real load, you want a beta customer. Pilot, proof of concept and early access each close a third kind of decision, and swapping the labels is how a company ends up running a design partner program that produces a bug list.

I am writing this from the product marketing seat rather than the founder seat, which changes the brief. Most guidance on this topic is aimed at a founder hunting the first three logos. At a company that already has customers, the work is program design: choosing the structure that fits the decision in front of you, instrumenting it, and settling in advance what it owes back on the day it ends. That last question has a published answer. In [Common Paper's Contract Benchmark Report](https://commonpaper.com/resources/contract-benchmark-2024-Q1), 45% of design partner agreements carry a case study commitment and 42% name the partner as a reference, and both are agreed at signature rather than asked for at the end.

An early-customer program is a marketing instrument with a contract attached. The reference and the case study are checkboxes you tick on the cover page before the program starts, not favours you go asking for in week twelve. [Common Paper's standard Design Partner Agreement](https://commonpaper.com/standards/design-partner-agreement/) puts both there, alongside permission to name the account in public and private customer lists.

## The Early Customer Program Decision Table

Six programs, six columns. The first table covers when to run each one and what closes it. The second covers the exchange on both sides. What each program owes your launch gets its own table further down, because that is the column teams skip.

| Program | Product-maturity trigger | Cohort size | Duration | Exit condition |
|---|---|---|---|---|
| Design partner | Problem understood, workflow not; the design is still changeable | 3 to 8 accounts | 3 or 6 months | The agreed term expires |
| Beta customer | Feature built but unproven against real data and load | 20 to 50 accounts | Until the GA gate is met | The feature reaches general availability |
| Proof of concept | One technical objection is blocking a live deal | 1 account | 2 to 4 weeks | The named criterion passes or fails |
| Pilot | Fit looks plausible; the buyer wants to use it before signing | 1 account | 30 to 90 days | The evaluation window closes and procurement decides |
| Early access program | The build works; you need breadth of usage, not depth | Everyone who opts in | Until GA | The capability ships to every account |
| Customer advisory board | The product is GA and needs direction, not a verdict | 8 to 15 members | 12-month member terms | The member term expires and seats rotate |

| Program | What the customer owes | What you owe |
|---|---|---|
| Design partner | Scheduled feedback sessions, workflow access, data access | Early access, real influence on the design, usually a future discount |
| Beta customer | Real usage in a non-critical environment, defect reports | A support path, a rollback, an honest scope of what breaks |
| Proof of concept | A named technical owner and a test environment | Scoped engineering time against exactly one criterion |
| Pilot | A named business owner, agreed success criteria, a procurement path | The product, onboarding and a decision date |
| Early access program | Nothing beyond opting in | A changelog and an easy way to leave |
| Customer advisory board | Attendance, candour, a signed NDA | Roadmap visibility, executive time, a peer network |

What a table cannot show is where these sit relative to each other, and that is what drives most of the mislabelling. Programs get confused with their neighbours on the maturity line, so it is worth seeing which pairs actually touch.

<img src="/assets/blog/design-partner-vs-beta-customer/program-map.webp" alt="Timeline showing design partner running before the design is frozen, beta customer and early access program overlapping before general availability, customer advisory board starting after it, and proof of concept and pilot floating free because they are tied to a deal rather than a build stage" title="Where each early-customer program sits on the product maturity line" width="1200" height="686" loading="lazy" decoding="async" />

### Numbers in Those Tables I Could Not Trace

Two columns above are my defaults, not published benchmarks, and the difference matters if you plan to quote them.

- **Cohort size.** No primary source I could find publishes a benchmark. Common Paper's report covers obligations, discounts, fees and term length for design partner agreements and does not report a cohort size at all. The [design partner guide published by founder coach Dmitry Trofimets](https://dowhatmatter.com/guides/design-partner-program) is asked the question directly and answers without a number: "Use founder capacity and learning quality as the constraint. A small number of deeply engaged, well-matched partners is usually more useful than a larger group of passive participants." Read "founder capacity" as the capacity of whoever actually synthesises the feedback, which at a company past seed stage is usually the PMM rather than a founder.
- **Duration for pilots and POCs.** These are operating defaults I would set, with no published source behind them. The design partner row is sourced: Common Paper's benchmark reports term lengths of three months in 27% of agreements, six months in 22% and one year in 19%. The advisory board row has a published anchor too, in HubSpot's 12-month membership term, which is where my default comes from. The 8-to-15 membership range is my convention rather than a published figure.

Three things about the Common Paper numbers, since twelve figures in this post come from that one report. It states its denominator once, for the report as a whole: "the contracts of more than 1,000 companies using the Common Paper platform", covering its cloud service agreement, design partner and NDA templates together. It does not publish how many design partner agreements sit behind the design partner percentages. It also states no collection window; the only dated series anywhere in it run through Q4 2023, and the URL marks it Q1 2024. And Common Paper describes its own Design Partner Agreement as a template for early-stage startups working with their first users, so these are early-stage market data rather than a benchmark drawn from your segment.

Treat the sourced numbers as market data and the unsourced ones as a starting position to argue with.

## What Is a Design Partner?

A design partner is an early customer who gets access before the product is finished and, in exchange, commits to structured feedback and access to the workflow you are trying to serve. The dowhatmatter guide defines the program as "a time-bound collaboration with selected early customers or prospects to shape a product around a real workflow, validate value, and create a path toward a pilot, paid use, or commercial reference."

What separates it from an enthusiastic customer who enjoys talking to product managers:

- **The feedback is contracted, not hoped for.** Common Paper's benchmark found regular feedback participation in 72% of design partner agreements, most often twice monthly (46%) or once monthly (36%).
- **The IP question is settled up front.** Section 6.2 of the standard terms reads, in full: "Provider owns all Feedback. Partner hereby assigns to Provider all its right, title, and interest in and to Feedback and will reasonably cooperate with Provider as needed to establish, prove, or defend Provider's ownership of Feedback."
- **It expires.** Nearly half of signed agreements run three or six months, which turns the ending into a calendar event rather than an awkward conversation.

Design partnership sits after discovery, not instead of it. If you have not yet established that the problem is real and that a segment of accounts shares it, you are doing [customer discovery](/blog/customer-discovery/) and should not be signing anyone up to shape a build. Design partners are for the stage where the problem is settled and the shape of the answer is not.

## Design Partner vs Beta Customer: Where the Line Falls

The one-line version of this is that a design partner shapes the product and a beta tester tests it. True, and too short to act on. Here is where the line actually falls.

| | Design partner | Beta customer |
|---|---|---|
| What is still open | The design of the thing | The defect list and the operational envelope |
| Who sets the session agenda | Both sides, in a scheduled cadence | You, through release notes and support tickets |
| Individually contracted | Yes, with feedback obligations and a term | Rarely; standard product terms usually cover it |
| Feedback ownership | Assigned to the provider in the agreement | AWS claims it in its terms; the other beta policies I read are silent |
| What ends it | The agreed term | The feature reaching general availability |
| What it proves | That the design is right | That the build holds |

Parts of the beta side of that table are published rather than asserted, and the wording is worth reading directly. [AWS Service Terms section 2](https://aws.amazon.com/service-terms/) defines a Beta Service as features "that are not yet generally available", states that "Service Level Agreements do not apply to Beta Services or Beta Regions", takes the feedback in section 2.3 ("AWS will own and may use and evaluate all Test Observations for its own purposes"), and sets the exit in the contract itself: access "will automatically terminate upon the release of a generally available version of the applicable Beta Service or Beta Region or upon notice of termination by AWS".

[GitLab's feature support policy](https://docs.gitlab.com/policy/development_stages_support/) is equally blunt about what a beta customer is signing up for. Beta features "might not be ready for production use" and are "supported on a commercially-reasonable effort basis, but with the expectation that issues require extra time and assistance from development to troubleshoot". The same page adds a rule worth stealing: "Features must not be enabled by default during Experimental or Beta stages."

[Vercel's release phases](https://vercel.com/docs/release-phases) put the same idea in one sentence: "Products in a Beta state, are not covered under the Service Level Agreement (SLA) for Enterprise plans."

Two rows in that table are mine rather than any vendor's. Who sets the session agenda, and whether beta access is individually contracted, are how beta programs work in my experience; none of the five beta and preview policies cited in this post documents either one. AWS is also the only one of the five that says who owns the feedback, and the only one that ends access automatically at general availability. Azure goes as far as requiring customers to stop using preview containers once a GA version exists; the rest say nothing about the GA date at all.

Those documents govern exposure, support and blast radius, because that is the decision a beta closes. A design partner agreement governs feedback, ownership and term, because that is the decision a design partnership closes. Read together, they explain why running one program under the other's name goes wrong: a beta customer who was told they are shaping the roadmap will send you design opinions about a build you have already frozen, and a design partner who was handed a support SLA will file tickets instead of showing you their workflow.

If your launch plan already calls for a private beta of a few dozen accounts, keep it. The point is to not also call those accounts design partners. My [SaaS launch playbook](/blog/how-to-launch-a-saas-product/) puts the private beta in the pre-launch phase for the right reason, which is that it is a readiness gate. It also calls that cohort design partners, and that is the conflation this post is arguing against. Twenty to fifty accounts exercising a build you have already frozen are beta customers, whatever the playbook labels them.

## Design Partner vs Pilot: The Same Publisher Draws the Line

Common Paper publishes both a Design Partner Agreement and a [Pilot Agreement](https://commonpaper.com/standards/pilot-agreement/), and the one-line descriptions on its [standards index](https://commonpaper.com/standards/) do the separating for you. The Design Partner Agreement is for teams that want to "Collaborate with your first users and customers as an early-stage startup." The Pilot Agreement is to "Offer a trial to evaluate fit before the sale."

Collaboration versus evaluation. That is the whole distinction, and these consequences fall out of it.

- **Money.** Design partnerships are mostly free: 25% of agreements include fees, and 43% offer a discount on a future long-term subscription. Those two figures come from separate sections of the report and it does not publish how they overlap. A pilot is a pre-sale motion, so pricing is either live or explicitly deferred to the contract that follows.
- **Success criteria.** A design partnership succeeds if you learn something that changes the build. A pilot succeeds if the buyer's named criteria are met. The pilot agreement exists to make that second thing checkable.
- **Who is being tested.** In a design partnership, your assumptions are on trial. In a pilot, your product is, and the buyer has a procurement process waiting on the answer.

A design partnership can graduate into a pilot. The dowhatmatter guide describes the exit review as deciding "whether the account moves to a pilot, paid use, or no-fit decision". What it should not do is become one by drift, with the partner still believing they are co-designing while your sales team forecasts them. Graduation is a decision taken at the exit review, and it changes the paperwork on both sides.

## Proof of Concept vs Pilot: Scope, Environment and Who Signs

A proof of concept and a pilot both sit inside a live deal, which is why they get used interchangeably and then run badly. Neither term has a published standard definition I could find, so the table below is my operating split rather than an industry one. The pilot half has an anchor: Common Paper's Pilot Agreement, linked in the previous section, defines a pilot as "a short-term contract that allows a prospective customer to test a product or service before committing to a longer-term deal", which is where the decision date and the procurement column come from.

| | Proof of concept | Pilot |
|---|---|---|
| The question | Can it do this specific technical thing in our setup? | Is this worth buying for this team? |
| Environment | Sandbox, test account, isolated dataset | Something close to production |
| Participants | One or two engineers | A real team doing real work |
| Success test | One named criterion, agreed in writing beforehand | Business outcomes across the evaluation window |
| Who signs off | The technical evaluator | The economic buyer, via procurement |
| Typical failure | Scope grows until it is an unpaid implementation | It never ends and nobody owns the decision date |

Write the pass criterion before the work starts and get the evaluator to agree to it in the same message. A POC without a written criterion converts into an open-ended engineering favour. Put a decision date in the pilot plan and name the person who makes the call, because a pilot with no decision date is a free trial with extra meetings.

## Early Access Program: A Toggle or an Invitation

"Early access" covers two programs that behave nothing alike, and the difference is whether the customer let themselves in or you invited them.

The self-serve version is a switch. [Sentry's early adopter documentation](https://docs.sentry.io/product/accounts/early-adopter-features/) tells organisations they "can turn your organization's Early Adopter status on/off in Settings > General Settings", and is explicit that this is a separate thing from the invite-only tiers: "Alphas, closed betas, or limited availability features that require manual opt-in are not included."

The invited version is a contract. [Microsoft's Azure preview terms](https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/) cover "optional, early-stage preview capabilities" designated frontier, early access, private preview, research or experimental, and attach real obligations: "Your use of Early Access Previews is confidential and subject to the terms of your non-disclosure agreement with Microsoft", "You may not use Early Access Previews in production or in a 'live' operating environment", and "You may not provide, share or publish the Early Access Previews to any third party."

Vercel names three points on that spectrum and describes the access rule for each: Private Beta, where "some customers may have access, this access sometimes includes a Non-disclosure agreement (NDA)"; Limited Beta, "publicly announced" but "potentially available to a limited number of customers"; and Public Beta, "available to the public without special invitation".

Pick one deliberately, because they produce opposite evidence. A self-serve toggle gives you adoption volume and a large pool of users to mine for quotes, with the trade that you learn little about why anyone enabled it. An NDA-bound invite list gives you depth, named accounts and quotable detail, with the trade that nothing can be published until the embargo lifts. For a developer audience the toggle version also doubles as a distribution channel, which is one of the things that makes [developer marketing](/blog/developer-marketing/) run on different mechanics from the rest of B2B.

## Every Program Owes Your Launch a Named Deliverable

Every early-customer program is generating launch evidence whether or not anyone is collecting it, and the collection is cheapest at signature.

Common Paper's Design Partner Agreement cover page has a section headed "As part of the Program, Partner will:", with these options to tick:

- Participate in [ # ] Feedback sessions per [ month | quarter | year | term ]
- Provide case study that can be shared with others
- Appear as a customer in private customer lists
- Appear as a customer on Provider's website and public customer lists
- Serve as a reference for prospective customers
- [ other: fill in details ]

Four of those six are marketing deliverables, sitting in a legal document, decided before the relationship starts. The first is the feedback obligation the program runs on, and the last is a blank line for whatever else you negotiate. The benchmark data says how often teams tick the four marketing ones: 64% of agreements allow the partner to appear in a private customer list, 61% allow public listing, 45% include a case study and 42% name the partner as a reference. The report does not say how those four overlap, so the share of agreements carrying none of them is not something the data settles.

Here is what I would attach to each program before it starts.

| Program | Secure at signature | Collect during | Publish at |
|---|---|---|---|
| Design partner | Case study commitment, logo rights, reference willingness | Session notes with quotable language, before-and-after workflow detail | GA, with the partner named as a co-designer |
| Beta customer | Permission to cite anonymised usage | Adoption and defect metrics, one quote per account | Launch day, as a readiness proof point |
| Proof of concept | Permission to reuse the technical result anonymously | The criterion, the method, the number | Battlecard and technical sales collateral |
| Pilot | Reference willingness conditional on conversion | Success criteria results, the win reason | After the contract signs |
| Early access | Nothing; opt-in terms cover it | Enablement volume, retention of enabled accounts | GA announcement |
| Advisory board | NDA plus a standing quote-approval path | Directional positioning language | Ongoing, in positioning and analyst material |

The mechanics of turning that into publishable material are the same as any reference story, and the approval ladder is where most of them die. My [customer success story template](/blog/customer-success-story-template/) covers the metric fallbacks and the approval path for exactly this situation, where the customer is willing but their legal team has never seen the request before.

One practical detail: ask for reference rights in the same document as the feedback obligations, never in a separate email later. A partner who has already signed a feedback commitment reads a case study checkbox as part of the same exchange. The same request made three months later reads as a new ask, and gets routed to a person who was not in the original conversation.

## How to Instrument an Early Customer Program

A program you cannot measure cannot be ended on evidence, which is how design partnerships drift into permanent unpaid consulting.

**Participation.** Sessions held against sessions contracted, per account. Common Paper's cover page turns this into a number you agreed to, so track it as a number. An account that has missed two of four sessions is telling you something before the exit review does.

**Decision yield.** Count the product or positioning decisions that changed because of the program, with a date and a name attached to each. This is the metric that distinguishes a design partnership from a support relationship, and it belongs alongside the rest of your [product marketing metrics](/blog/product-marketing-metrics/) rather than in a separate deck.

**Exit gates.** Write the condition that ends the program before it starts. Vercel publishes theirs for the beta-to-GA transition: "Fully load tested", "All bugs resolved", "Security analysis completed", "At least 10 customers have been on-boarded". Whether ten is right for you matters less than the fact that it is written down, countable and public.

For a design partnership, my three gates are: the workflow has been observed end to end at least twice, the design question that opened the program has a documented answer, and the marketing deliverable named at signature has been produced or formally waived. Miss all three at the term date and the program did not work.

## How to End a Design Partner Program Without Burning the Account

The term is the exit. That is what it is for, and it is why the fixed-duration convention in the benchmark data is worth copying rather than treating as boilerplate. An ending lands in one of three places, and all of them are legitimate.

- **Graduate.** The partner becomes a paying customer, usually on the discount that 43% of agreements already promise. Convert the reference commitment at the same time, while goodwill is high and the collaboration is fresh.
- **Retire.** The design question is answered and there is nothing more to learn from this account. Say so, hold a proper exit review, publish the case study you agreed to, and leave the relationship as a warm reference rather than a lapsed obligation.
- **Stop early.** Participation has collapsed or the account turned out not to represent the segment. End it at the next scheduled session with the cause stated plainly. Letting it drift to a stop costs you the reference too.

The platform contracts model the clean version of this. AWS writes the termination into the terms rather than leaving it to a conversation, and adds that content used in a beta "may be deleted or inaccessible" once the generally available version ships. The customer agreed to the ending when they opted in, so nobody has to open the subject later.

What you should not do is let a design partnership convert into an informal advisory relationship by default. If the account is worth ongoing strategic input, move them into a structured program with its own charter and terms. That is what a [customer advisory board](/blog/customer-advisory-board/) is for, and it fails in predictable ways when membership is inherited from an expired program instead of being selected against criteria.

## How Two Loud Accounts Capture the Roadmap

Past seed stage, this is the failure mode I would guard against first. Two engaged, articulate, well-liked design partners generate more feedback than everyone else combined, their requests are specific and well argued, and within two quarters the roadmap is shaped around two accounts that may or may not represent the segment you sell to.

Countermeasures, in the order I would apply them:

- **Do not contract the roadmap.** Common Paper's benchmark found that a promise to build specific functionality appears in only 17% of design partner agreements. Keep yours in the other 83%. Commit to the collaboration and to the term, and leave what gets built to your own prioritisation.
- **Weight feedback by segment coverage, not volume.** Before a request enters prioritisation, record which segment it came from and how many accounts in that segment have raised it. Feedback from a single account is a hypothesis. Doing this properly assumes you have already defined the segments, which is the work in [B2B customer segmentation](/blog/b2b-customer-segmentation/).
- **Cap the cohort at what one person can synthesise.** The dowhatmatter guide gets this right: "If you cannot maintain cadence, synthesize feedback, and pursue buyer access, you likely have too many." A cohort you cannot summarise across is a cohort where the loudest voice wins by default.
- **Separate the request log from the decision log.** Every request gets recorded; only decisions get dated, named and communicated back. A partner who can see that their input was read and consciously not actioned will usually accept the answer, which is not true of a partner who gets no answer at all.

Design partnership works because the partner has real influence, bounded to the design question the program was opened to answer.

## Design Partner vs Beta Customer: Start With the Decision

The comparison people search for, **design partner vs beta customer**, has a short answer and a long one. The short answer is that a design partner changes what you build and a beta customer tests what you built. The long answer is the six columns in the tables at the top of this page, and the thing those columns exist to enforce: every early-customer program has a trigger, a term, an exit and a piece of launch evidence it owes you, and the ones that go wrong are the ones where nobody wrote those four things down.

Choose by what is actually blocking you, not by the program that sounds most committed. Run as many at a time as you have capacity for, but never two under the same name, which is what produces the partner who believes they are co-designing a build you froze last month.

Pick one program you are running today and fill in its four fields. If you cannot name the exit condition or the deliverable, you have found the gap.
