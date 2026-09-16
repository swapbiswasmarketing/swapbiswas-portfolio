---
title: "Message Testing Examples: Survey Questions and Scoring"
description: "Message testing examples plus a copy-paste survey instrument, a four-axis scoring rubric, and a B2B sizing table for what 12, 40 or 120 respondents prove."
publishDate: 2026-09-12
category: [Product Marketing, Marketing]
faqs:
  - q: "Is copy testing the same as message testing?"
    a: "The terms are used interchangeably, with one working distinction. Copy testing evaluates a finished execution in its media format, which is why it is also called ad pretesting or creative pretesting. Message testing evaluates the strategic claim before anyone writes the ad. Run the message test first, because a well-made ad for the wrong claim still loses."
  - q: "What questions should a message testing survey include?"
    a: "An unaided comprehension open-end asked before any rating scale, twelve five-point agreement items covering clarity, relevance, differentiation and believability, a forced rank across variants with no ties, and one open-ended objection question. The full question bank is printed in this post and can be copied as is."
  - q: "How many people do you need for a B2B message test?"
    a: "Twenty per audience cell is the practical floor, and it resolves a gap of about 0.62 points on a five-point scale. Nine to twelve moderated interviews tell you whether a message is understood but cannot rank variants against each other. Below twenty per cell, report direction and leave the rank order out."
  - q: "What is the difference between message testing and concept testing?"
    a: "Concept testing evaluates a described product. Ipsos defines a concept test as presenting a detailed description of a product and its attributes and benefits to prospective customers. Message testing holds the product fixed and varies only the words used to describe it, so the thing under test is the wording rather than the offer."
  - q: "What is monadic testing and when should B2B teams use sequential monadic instead?"
    a: "Monadic testing shows each respondent a single variant, which keeps the score uncontaminated but needs a separate cell of people per variant. Qualtrics recommends no more than four concepts per person and makes you pick a number between two and four, and sequential monadic is usually the right call in B2B because one scarce qualified respondent can rate every variant."
img: /assets/stock-7.webp
img_alt: "Renaissance-style still life of sealed letters, a quill and an open ledger by a window, one red wax seal"
---

Two people read the same product headline in the same week. The one who signs the contract reads a line like "ship 40% faster with confidence" and hears a number that survives a budget meeting. The engineer who will run the thing reads the identical line, looks for the mechanism behind the number, finds none, and files the page under marketing. Both of them scored your message. Their scores point in opposite directions, and a pooled average from a single recruited audience reports neither one. That split is the failure the message testing examples below are built to catch.

Most published sets of message testing examples I have worked from take their habits from consumer research: one audience, a few hundred monadic respondents, a benchmark database to grade against. B2B hands you none of that. You get maybe forty people who would qualify, half of them technical, and a decision due on Thursday.

A test at that size is still worth running and still defensible, once you stop asking it to do the things forty people cannot do. This post prints the survey instrument verbatim, a scoring rubric, and a table of what each achievable B2B sample size can and cannot prove. It closes on the rule I apply to every stated-preference method: a message test tells you which wording scores best, lost-deal notes tell you which wording stopped a sale, and when the two disagree the deals win.

## What Are Message Testing Examples?

Message testing is the practice of putting two or more wordings of the same offer in front of qualified buyers and scoring their reactions on fixed criteria before the wording ships. These are the eight test types that cover almost everything a B2B team needs.

- **Headline rank.** Three homepage headlines, rotated, ranked by which would most get the respondent into a meeting.
- **Comprehension test.** One value proposition, no scales, asked back in the respondent's own words.
- **Category-line test.** Two competing category descriptions, scored on which shelf the buyer puts you on.
- **Proof-point swap.** Identical headline, three different proof lines underneath: a customer name, a benchmark number, a changelog link.
- **Objection line test.** Three versions of the paragraph that answers your top loss reason.
- **Pricing framing test.** The same price described three ways, scored on believability rather than appeal.
- **Sales email opener test.** Three first lines, ranked on whether the respondent would reply.
- **Register test.** One claim written twice, once in marketing voice and once as a mechanism sentence, scored separately by the buyer cell and the technical cell.

The register test is the one that surfaces the split described above, because it treats marketing voice as a variable inside the test instead of a wrapper around it. Each example stresses a different diagnostic axis, which is what the next section defines.

| Example | Primary axis it stresses | What a bad result tells you |
| --- | --- | --- |
| Headline rank | Relevance | You are describing a problem nobody has this quarter |
| Comprehension test | Clarity | The offer cannot survive a five-second read |
| Category-line test | Differentiation | Buyers are sorting you onto a shelf you did not choose |
| Proof-point swap | Believability | The claim is fine and the evidence behind it is not |
| Objection line test | Believability | The rebuttal reads as defensive rather than specific |
| Pricing framing test | Believability | The price is credible and the value story is not |
| Sales email opener test | Relevance | The trigger you assumed is not the trigger they feel |
| Register test | Clarity, split by audience | One audience is being written out of the page |

## The Four Axes a Message Test Should Score

Clarity, relevance, differentiation and believability. Four axes, scored independently, because a message can pass one and fail another in ways a single "which do you prefer" question will never separate.

| Axis | The question it settles | The failure it predicts |
| --- | --- | --- |
| Clarity | Can they say what the product does without help? | Traffic that bounces off the hero and never reaches pricing |
| Relevance | Is this a problem they have, now, in their role? | High comprehension and no pipeline |
| Differentiation | Would they know this from the last three vendors they saw? | Deals that stall in a bake-off nobody wins |
| Believability | Would they repeat the claim to their manager unsoftened? | A champion who likes you and will not spend capital on you |

Clarity is the gate. If a respondent cannot restate the offer, their scores on the other three axes are describing something they invented in their own head, which is why the instrument below asks the open-ended comprehension question before it shows a single rating scale. The same ordering logic sits behind the five-second test in my guide to [what a value proposition is](/blog/what-is-a-value-proposition/), and it applies here for the same reason.

Differentiation is the axis I see skipped most often, because it is uncomfortable to score. It is also the one that predicts the deals that die in comparison rather than in discovery, which is the failure I break down in [how to differentiate when competitors copy your features](/blog/how-to-differentiate-your-product-when-competitors-copy-your-features/).

## Message Testing Survey Questions You Can Copy

This is the instrument. Copy it into your survey tool, replace the bracketed placeholders, and change nothing about the order of the sections.

```text
SECTION 0 - SCREENER  (ask before showing any message)

S1. Which best describes your role when your company buys tools like [category]?
    a) I approve the budget
    b) I evaluate and recommend, but I do not approve budget
    c) I would use the tool day to day
    d) None of the above                        [TERMINATE]

S2. In the last 12 months, have you evaluated or bought a product in [category]?
    Yes / No                                    [TERMINATE on No]

S3. How many people work at your company?
    1-50 / 51-200 / 201-1000 / 1001-5000 / 5000+

ROUTING: send (a) to the ECONOMIC BUYER cell and (b) plus (c) to the
TECHNICAL EVALUATOR cell. Keep the two cells separate in every table
you produce afterwards. Do not merge them to make the base look bigger.


SECTION 1 - UNAIDED COMPREHENSION  (one variant on screen, no scales yet)

Q1. In your own words, what does this product do?
    [Open text, required, 10-character minimum]

Q2. Who do you think it was built for?
    [Open text, required]

Q3. What would you need to know next before you would try it?
    [Open text, required]


SECTION 2 - THE FOUR AXES  (same 12 items for every variant)

Scale for all 12 items:
  1 Strongly disagree  2 Disagree  3 Neither  4 Agree  5 Strongly agree

CLARITY
  C1. I understood what this product does on the first read.
  C2. I could explain this to a colleague without re-reading it.
  C3. There were no words or phrases here I had to guess at.

RELEVANCE
  R1. This describes a problem my team has.
  R2. Solving this would matter to me in the next three months.
  R3. This reads as though it was written for someone in my role.

DIFFERENTIATION
  D1. This says something the other tools I know do not say.
  D2. I could tell this apart from the last three vendors I looked at.
  D3. With the brand name removed, I would still know which product this is.

BELIEVABILITY
  B1. I believe this product can do what this says.
  B2. The claim here is specific enough that I could check it.
  B3. I would repeat this claim to my manager without softening it.


SECTION 3 - FORCED RANK  (only after every variant has been rated)

Q4. Put these [3] statements in order, from the one that would most get you
    to take a meeting to the one that would least. No ties.

Q5. Why did your first choice go first?          [Open text]

Q6. What in your last choice put you off?        [Open text]


SECTION 4 - THE OBJECTION

Q7. If your company decided not to buy this, what would the reason be?
    [Open text, required]
```

Four rules govern how the instrument is fielded, and breaking any of them costs more than a small sample does:

- Section 1 runs before Section 2 on the first variant only. Once a respondent has seen the rating items, their open-ended comprehension answers are contaminated by your vocabulary.
- Rotate variant order per respondent. Without rotation the first variant carries a position advantage you will mistake for a message advantage.
- Cap the survey at three variants. Qualtrics recommends no more than four concepts per person and its concept testing solution requires the researcher to choose a number between two and four ([Qualtrics concept testing documentation](https://www.qualtrics.com/support/common-use-case/xm-solutions/concept-testing-program/)); in B2B, where the respondent is senior and busy, three is the ceiling I would field.
- Never show the brand name in Section 1 or Section 2. D3 stops working the moment the logo is on screen.

Where the message language itself comes from is a separate job, and skipping it produces three variants that are all the marketing team's guesses. The collection methods in my breakdown of [voice of the customer programs](/blog/what-is-voice-of-the-customer/) are the supply line for the wordings you put into this instrument.

## How to Score a Message Test

Each axis score is the mean of its three items, on a 1.00 to 5.00 scale. The composite is a weighted mean of the four axis scores, and the weights below are the default I would publish next to any result.

| Axis | Default weight | Why it carries that weight |
| --- | --- | --- |
| Clarity | 0.35 | Gates the other three; an uncomprehended message scores noise |
| Relevance | 0.25 | Decides whether the message earns a reply this quarter |
| Differentiation | 0.25 | Decides whether the message survives a competitive comparison |
| Believability | 0.15 | Correctable with better proof without rewriting the claim |

Two decision rules sit on top of the composite:

1. **The floor rule.** Any axis mean below 3.0 in any reported cell disqualifies that variant for that audience, whatever the composite says. A variant that averages 3.8 while its differentiation sits at 2.1 is a message that reads well and cannot be told apart.
2. **The split rule.** If the two audience cells differ by more than 0.6 on the composite, do not publish a pooled score. Report both cells. The 0.6 is rounded down from the 0.62 that the arithmetic in the next section gives for a 20-per-cell design, so the rule fires a fraction early on purpose. One assumption travels with it: the 1.0 spread behind that 0.62 is a per-item figure, and a weighted mean of twelve items varies less across respondents than any single item does, so 0.6 is a conservative threshold and not a tight one.

### An Illustrative Worked Example

The figures below are invented for this walkthrough so the arithmetic can be checked end to end. They are not a test I ran. Three variants, forty respondents, twenty in each audience cell, sequential monadic with rotated order.

Axis means, economic buyer cell (n = 20):

| Variant | Clarity | Relevance | Differentiation | Believability | Composite |
| --- | --- | --- | --- | --- | --- |
| A | 4.2 | 4.0 | 3.2 | 3.6 | 3.81 |
| B | 4.0 | 4.1 | 3.8 | 3.9 | 3.96 |
| C | 3.2 | 3.4 | 4.0 | 4.2 | 3.60 |

Axis means, technical evaluator cell (n = 20):

| Variant | Clarity | Relevance | Differentiation | Believability | Composite |
| --- | --- | --- | --- | --- | --- |
| A | 3.0 | 2.7 | 1.9 | 1.8 | 2.47 |
| B | 3.8 | 3.7 | 3.4 | 3.3 | 3.60 |
| C | 4.3 | 4.1 | 4.2 | 4.4 | 4.24 |

Variant A in the buyer cell works out as (0.35 x 4.2) + (0.25 x 4.0) + (0.25 x 3.2) + (0.15 x 3.6), which is 1.470 + 1.000 + 0.800 + 0.540, or 3.81. Every other composite above is the same calculation with its own row.

Now pool the cells, which is what a single-audience test effectively does:

| Variant | Buyer composite | Evaluator composite | Pooled (equal cells) | Split |
| --- | --- | --- | --- | --- |
| A | 3.81 | 2.47 | 3.14 | 1.34 |
| B | 3.96 | 3.60 | 3.78 | 0.36 |
| C | 3.60 | 4.24 | 3.92 | -0.64 |

<img src="/assets/blog/message-testing-examples/split-check.webp" alt="Flow diagram showing one message variant scored by an economic buyer cell and a technical evaluator cell, producing composites of 3.81 and 2.47 and a 1.34 split that fails the split check" title="Scoring one message across two audiences" width="1200" height="669" loading="lazy" decoding="async" />

Read the pooled column alone and variant C wins at 3.92. Read the cells and C is the wording the economic buyer likes least of the three. Variant A dies on the floor rule before the split is even discussed, because its differentiation of 1.9 and believability of 1.8 in the technical cell are both under 3.0. Variant B is nobody's favourite and the only one inside the split threshold at 0.36, which makes it the wording for surfaces both audiences land on: the homepage hero, the pricing page, the outbound opener. C's split of 0.64 fires the split rule and sits just above the 0.62 this design can resolve, so it is a real split and a narrow one.

C is not discarded, and a narrow split decides how C is used rather than whether it is used. C becomes the technical-surface message, on the documentation landing page, the README and the developer hub, where the economic buyer is not the reader. Because the gap sits so close to the resolution limit, that routing is provisional: re-test C against the buyer cell before it moves onto anything the buyer reads. One test, two published messages, and a written reason for both.

## B2B Message Testing: What 12, 40 and 120 Respondents Prove

Consumer copy testing assumes a panel you can refill and a vendor stack built on top of one. Kantar sells LINK+ as a survey-based creative evaluation and diagnostic solution spanning social, retail media, audio, in-game, trailer and influencer formats ([Kantar, 6 May 2025](https://www.kantar.com/press-center/kantar-broadens-link-creative-effectiveness-solutions-to-include-more-media-formats)). No comparable respondent supply exists for a B2B team selling to release engineers at mid-market software companies, so the honest response is to size the claim to the sample.

Start with what the arithmetic allows. For a difference between two independent cell means on a five-point scale, the approximate 95% half-width is 1.96 times the standard deviation times the square root of (1/n + 1/n). At a standard deviation of 1.0, which is a normal spread for agreement items, that gives:

| Respondents per cell | Smallest mean gap the design can resolve | Smallest gap in share-ranked-first it can resolve |
| --- | --- | --- |
| 6 | 1.13 points | 57 points |
| 10 | 0.88 points | 44 points |
| 15 | 0.72 points | 36 points |
| 20 | 0.62 points | 31 points |
| 30 | 0.51 points | 25 points |
| 60 | 0.36 points | 18 points |
| 100 | 0.28 points | 14 points |

That is the independent-cells form of the interval, and it is the right one for the split rule, where two different groups of people are being compared. Two variants rated by the same respondents is a paired comparison, and the paired interval is narrower whenever a respondent's two ratings correlate, so reading a within-respondent gap off this table errs toward caution rather than toward a false winner.

The right-hand column uses the same formula on a proportion at p = 0.5, the widest case. At twenty per cell, a variant that 55% rank first and a variant that 45% rank first are the same variant as far as your data is concerned. Publishing that ten-point gap as a winner is how a small B2B message test misleads without anybody noticing.

That table turns into a sizing decision:

| Achievable sample | Design that fits | What you can conclude | What you cannot conclude | When to stop |
| --- | --- | --- | --- | --- |
| Fewer than 9 qualified people | Do not field a survey | Nothing quantitative | Anything at all about ranking | Spend the week on lost-deal notes instead |
| 9-12 moderated interviews | One variant at a time, think-aloud, open-ended only | Whether the message is understood, which words get misread, which objection fires first | Which variant wins, or how big any gap is | Two consecutive interviews producing no new comprehension error |
| 40-60 panel respondents, 2 cells | Sequential monadic, 3 variants, rotated | Rank order when the gap clears 0.62 at twenty per cell, or 0.51 at thirty; whether an axis breaches the 3.0 floor; whether the two audiences split | A winner separated by less than the resolvable gap for your actual cell size; any cut below twenty people | The pre-registered n, not the point where the result turns favourable |
| 120+ across 4 cells | Monadic, or sequential monadic with planned subgroups | Gaps around 0.5; cuts by role and company size you powered for in advance | Segments you did not define before fielding | The pre-registered n per cell, all cells |
| 400+ | Monadic with a norms database | Small differences and trends against prior tests | Nothing the design excluded | When the norms stabilise |

Between the interview band and the panel band, at thirteen to thirty-nine people, you can still field the instrument; you just cannot rank with it. Fifteen per cell puts the resolvable gap at 0.72, which is a wide bar for three variants of the same offer to clear, so report only what survives that width: comprehension errors, floor breaches, the objection answers, and a between-cell split large enough to pass it. Leave the rank order out of the deck.

The 9-12 interview band comes from the saturation literature rather than from habit. Hennink and Kaiser identified 23 articles assessing saturation, 17 of them using empirical data and 6 using statistical modeling, and reported that the studies using empirical data "reached saturation within a narrow range of interviews (9-17) or focus group discussions (4-8)", particularly those with relatively homogenous study populations and narrowly defined objectives ([Social Science and Medicine, 2022](https://pubmed.ncbi.nlm.nih.gov/34785096/)). A message test is about as narrow an objective as qualitative research gets, which puts you at the bottom of that 9-17 range and not the top. Recruiting for it without leading the witness is its own discipline, covered in my guide to [customer discovery interviews](/blog/customer-discovery/).

Pre-register the sample size and the decision rule in writing before the first response lands, because a test that runs until the preferred variant leads has stopped being a test. Then define your cells from a segmentation you can actually count, which is the qualifying discipline in [B2B customer segmentation](/blog/b2b-customer-segmentation/); a cell you cannot define is a cell you cannot report.

## Message Testing Methods: Monadic, Sequential Monadic and Forced Rank

Three designs cover the field, and the choice between them is mostly a question of how scarce your respondents are.

| Method | How it works | Respondents needed | Bias it avoids | Bias it introduces |
| --- | --- | --- | --- | --- |
| Monadic | Each respondent sees one variant only | Highest: a full cell per variant | Comparison effects; scores are absolute | None from order, but cells can differ by composition |
| Sequential monadic | Each respondent rates every variant in turn, rotated | Lowest: one cell rates everything | Cell composition differences | Order and carryover, partly fixed by rotation |
| Forced rank or paired choice | Respondent orders variants against each other | Low | Everyone scoring everything a 4 | Says nothing about whether any variant is good |

Qualtrics describes monadic tests as "shorter surveys with more respondents" and sequential monadic as "longer surveys" that "have fewer respondents" and suit earlier stages of concept development ([Qualtrics, concept testing documentation](https://www.qualtrics.com/support/common-use-case/xm-solutions/concept-testing-program/)). That trade lands differently in B2B than in consumer research. When the constraint is qualified people rather than survey minutes, the design that gets every variant rated by every scarce respondent is the one that fits, and the instrument above runs sequential monadic with a forced rank bolted on at the end for exactly that reason.

Run the forced rank last and never alone. On its own it tells you the order of three variants and nothing about whether the best of them clears a bar. Paired with the twelve scale items it tells you the order and the level, and the floor rule needs the level.

## Copy Testing vs Message Testing: Execution or Positioning

Copy testing and message testing describe the same practice at different stages, and practitioners who separate them draw the line at execution. Copy testing evaluates a finished creative in the format it will run in, and ad pretesting and creative pretesting are the other names for the same activity. Kantar's survey-based creative solutions test assets as social media formats, retail media, audio ads, gaming ads, trailers and influencer content ([Kantar, 6 May 2025](https://www.kantar.com/press-center/kantar-broadens-link-creative-effectiveness-solutions-to-include-more-media-formats)). Message testing evaluates the claim before anyone has decided what it looks like.

The practical consequence is sequencing. A copy test on a beautifully produced ad for a claim that fails the differentiation axis returns a clean result about the wrong thing. Test the claim, then test the execution of the winning claim.

| | Message testing | Copy testing |
| --- | --- | --- |
| What varies | The claim and its wording | The execution: art, voiceover, layout, format |
| Stimulus | Plain text statements, unbranded | Finished or near-finished creative |
| Usual buyer | Product marketing | Brand or demand generation |
| Also called | Messaging research, claims testing | Ad pretesting, creative pretesting |
| Comes first | Yes | No |

### Message Testing vs Concept Testing

Concept testing evaluates a described product. Ipsos defines a concept test as the stage "where a detailed description of a product (and its attributes and benefits) is presented to prospective customers or users, to assess their attitudes and intentions toward the product" ([Ipsos Encyclopedia](https://www.ipsos.com/en-hk/ipsos-encyclopedia-concept-testing)). The product itself is the variable.

In a message test the product is fixed and only the words move. If your three variants describe three different capability sets, you have accidentally run a concept test and your result cannot be applied to copy.

### Brand Message Testing vs Marketing Message Testing

Brand message testing evaluates the statements that sit above every product: the category line, the company promise, the positioning statement. It changes rarely, moves slowly, and is the wrong test to run when one launch underperforms.

Marketing message testing evaluates the campaign-level and product-level wording underneath it: headlines, proof points, email openers, feature descriptions. It changes per launch and per segment. Which layer is broken is a diagnosis worth running before you field anything, and the five layers that separate them are mapped in my [brand messaging framework](/blog/brand-messaging-framework/).

## Message Testing Examples for a Technical Audience

When the evaluating audience is technical, how you test messaging changes in one structural way: marketing register becomes a variable inside the test, with its own cell, instead of packaging applied to a message after it has been chosen.

A technical evaluator arrives having read a different corpus all week. Reference docs, changelogs, stack traces and issue threads are declarative and specific, and none of them ask to be believed: they state what a thing does, what it does not do, and what breaks. A marketing headline dropped in front of that reading habit registers as a different genre before its claim is assessed at all, which shows up on the clarity axis and not the believability axis, because the reader has stopped reading for content and started reading for category. The evaluator is also rarely the person whose budget is at risk, which leaves the two audiences applying different standards to the same sentence without either being wrong.

When engineers are in the sample, change these:

- Screen for role before anything else and route to separate cells. S1 in the instrument does this.
- Field a mechanism variant. At least one of the three should state how the product works in a sentence, with no adjectives.
- Report D3, the brand-name-removed item, separately by cell. Generic copy is penalised harder in the technical cell, and the gap between cells on that one item is a usable diagnostic on its own.
- Read the Q1 comprehension answers before you read any mean. Technical respondents restate offers precisely, and their wording is often better than the variant they were shown.
- Never publish the pooled composite once the split rule fires. Two cells and two numbers.
- Treat B2, "specific enough that I could check it", as the believability item that matters in this cell. A claim an engineer cannot verify is a claim they discount to zero.

The output of that split is usually two published messages rather than one compromise, mapped to surfaces by who reads them. Turning the winners into the durable set of claims the whole team works from is the job of [messaging pillars](/blog/messaging-pillars/).

## Follow the Deals When a Message Test Disagrees

A message test measures a stated response from a recruited respondent with nothing at stake. A lost deal measures a revealed response from a buyer who spent political capital and then stopped. That split between stated and revealed is not special to messaging, and I make the same call in my walkthrough of [the Van Westendorp price sensitivity meter](/blog/van-westendorp-price-sensitivity-meter/), where discount bands and win rates by list price outrank any price a survey respondent names. What is specific to message testing is what the disagreement diagnoses, and it is not a level.

The disagreement shows up in a recognisable shape. Your test says variant B wins on relevance and believability, and your closed-lost notes from the same quarter keep naming a comparison you never tested against. That combination means the test was scored inside a frame the market does not use, and no amount of extra sample fixes a frame problem.

So run both, and run the cheap one first. The Twenty-Deal Check in [positioning vs messaging](/blog/positioning-vs-messaging/) pulls the last ten closed-won and ten closed-lost opportunities and records the alternative each buyer considered in the buyer's own words. That takes an afternoon, costs nothing, and tells you which alternatives belong in the differentiation items of your instrument. Fielding a message test before you have done it means guessing at the comparison set, and the differentiation axis is only as good as the comparison the respondent has in mind.

When the two sources agree, ship the winner and move on. When they disagree, rewrite the variants using the language from the lost deals and field again. The survey is a filter for wording; the deals are the record of what the market already decided.

## Message Testing Best Practices Worth Keeping

- Field the same instrument every quarter, because a rewritten questionnaire resets your ability to compare one launch against the last.
- Ask comprehension before scales, on every study, without exception.
- Publish the axis weights beside the composite so anyone can recompute the score from the raw means.
- Enforce a floor on every axis so a good average cannot hide a broken one.
- Store the exact stimulus text next to every score; a result without its stimulus cannot be reused six months later.
- Report the resolvable gap alongside the result, so the next reader knows what the number cannot say.
- Keep the losing variant. A message that fails for one audience is often the right message for a surface the other audience never visits.

A list of methods was never the hard part here. Deciding what forty people are allowed to prove is, which is why this post carries an instrument, a rubric and a sizing table instead of a longer catalogue of designs.

## Your First Message Test, Scoped to One Week

All eight message testing examples above fit inside a week at forty respondents. Pick the one page where a wrong message costs you the most, usually the homepage hero or the top-of-funnel email. Write three variants, one of them a mechanism sentence with no adjectives. Copy the instrument above, screen into two cells, and field to whatever qualified people you can reach. If that is twelve, run the instrument as an interview guide and report comprehension and objections instead of a rank. Score the four axes, apply the floor rule, check the split, and write the resolvable gap on the same slide as the result.

Then open the last twenty deals and see whether the winner is the wording that was missing from the ones you lost.
