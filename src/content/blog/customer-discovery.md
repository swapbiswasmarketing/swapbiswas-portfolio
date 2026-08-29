---
title: "Customer Discovery for Teams That Already Have Customers"
description: "Customer discovery for established B2B teams: how to recruit without leading the witness, a copy-paste interview template, and how many interviews to run."
publishDate: 2026-08-29
category: [Product Marketing, Marketing]
img: /assets/stock-4.webp
img_alt: "Renaissance-style study of an orrery and geometric instruments on a scholar's table, a red thread tracing an orbit"
faqs:
  - q: "What is customer discovery?"
    a: "Customer discovery is structured research into how customers currently get a job done and what constrains them, run before you commit to building or positioning anything. It comes from Steve Blank's customer development model, where discovery is the first of four stages. The evidence it collects is stories about past behaviour, not opinions about future features."
  - q: "How many customer discovery interviews do you need?"
    a: "Nielsen Norman Group recommends starting with a small representative sample of 5 to 6 and analysing as you go, and warns that 5 participants are too few for many exploratory studies. The saturation estimates it cites range from 12 interviews in Guest, Bunce and Johnson's 2006 study to Griffin and Hauser's 1993 finding that 20-30 interviews uncover 90-95% of customer needs. NN/g also cautions that recruiting five people per persona can produce more interviews than necessary. My own rule is to treat each segment as its own saturation question, which pushes the total up."
  - q: "What is the difference between customer discovery and market research?"
    a: "Customer discovery asks how a job gets done today and what breaks, using 8 to 20 targeted conversations about past behaviour. Market research sizes an opportunity and describes who is in it, using surveys, panels and analyst data at statistically meaningful sample sizes. Discovery tells you what to build. Research tells you how many people might buy it."
  - q: "What questions should I ask in a customer interview?"
    a: "Open with a request for one story: walk me through the last time you had to do this, starting from the morning it came up. Follow the story with what happened next, who else got involved, how long it took, and what you did when that failed. Avoid anything hypothetical, including would you use this and how much would you pay."
  - q: "Can you do customer discovery with existing customers?"
    a: "Yes. Once a company has customers, they are the most available source of discovery interviews, and that convenience is exactly where the risk comes from. Existing customers know you, want to keep the relationship pleasant, and answer as account holders rather than as people doing a job. Recruit against your hypothesis, exclude accounts with open escalations, and ask for stories rather than views on your roadmap."
---

One question carries most of a customer discovery interview, and it says nothing about your product: "Walk me through the last time you had to do this. Start from the morning it came up."

The example below is illustrative rather than a transcript, but it is the structure a good answer takes. A B2B SaaS team with a few hundred paying accounts wants to build bulk editing, because bulk editing sits third on the feedback board.

The customer starts her answer on a Tuesday morning, with a compliance review. She exports the record set to a spreadsheet, edits it there, gets a colleague in Risk to sign off inside the sheet, then re-imports the file. Asked why she does not edit inside the product, she says the Risk reviewer has no seat, and a seat needs procurement approval that takes six weeks.

That answer moves the roadmap item. The request was bulk editing. The job was getting a non-user to approve a change without issuing them a login. Bulk editing would have shipped, been used, and left the export-to-spreadsheet workflow completely intact.

**Customer discovery is structured research into how customers currently get a job done and what constrains them, run before you commit to building or positioning anything.** Steve Blank named the practice inside his customer development model, and its first principle is blunt: "There are no facts inside the building so get the heck outside" ([Steve Blank, April 2020](https://steveblank.com/2020/04/07/customer-discovery-in-the-time-of-the-covid-19-virus/)).

Customer validation and market research both get filed under discovery, and each answers a different question:

| Dimension | Customer discovery | Customer validation | Market research |
| --- | --- | --- | --- |
| Question it answers | How does this job get done today, and what breaks? | Will this specific thing sell as built? | How big is the market, and who is in it? |
| Evidence it collects | Stories about past behaviour | Orders, activation, conversion | Surveys, panels, analyst data |
| Typical sample | 8 to 20 targeted conversations | Enough deals to see a repeatable pattern | Statistically sized |
| It fails when | You describe your solution | You count opinions as commitments | You act on it having spoken to nobody |
| Output | A problem worth solving | A repeatable sales motion | A sized opportunity |

Most of the best-known writing on customer discovery is aimed at a founder with no product and no customers, working from the same few pages of lean startup canon. That leaves out the people who run discovery most often. **At an established B2B company, the hardest part of customer discovery is hearing something that contradicts the roadmap you already wrote.** Getting customers onto a call is a calendar problem. Getting an answer that changes your mind is a design problem, and everything below is aimed at the second one.

<img src="/assets/blog/customer-discovery/discovery-loop.webp" alt="Five-step customer discovery loop: frame the decision, recruit against it, ask about last time, write one snapshot, stop at saturation" title="The customer discovery loop for established teams" width="1200" height="711" loading="lazy" decoding="async" />

## What Is Customer Discovery?

Customer discovery is the first stage of Steve Blank's customer development model, which runs discovery, validation, creation, and company building. Three of the key principles of customer development, as he restated them in April 2020, are that there are no facts inside the building, that everything you hold is a series of untested hypotheses, and that you test those hypotheses through experiments with potential customers. He adds a fourth for remote work: in-person interviews are not the only way to run the test.

Stripped of the startup framing, discovery is a research method with these properties:

- It studies behaviour that already happened, because past behaviour is the only thing a customer can report accurately.
- It runs before commitment, while the decision is still reversible and cheap.
- It is conducted by the people who will act on it, rather than handed over as a report.
- It ends in a written decision with a date on it.

In that same 2020 piece, Blank draws the line that matters most for anyone working inside a company with a sales team: "Remember - at this point you're testing hypotheses - not selling."

### Discovery Is Not the Same as Your Existing Feedback Channels

Established companies already collect a lot of customer input. Almost none of it is discovery.

NPS verbatims give you sentiment at a point in time. Support tickets show where the product broke for people motivated enough to complain. Feature boards return what your most engaged users can articulate. Sales calls capture what a buyer will say while being sold to. All four are aggregate signals, and they belong in a [voice of the customer](/blog/what-is-voice-of-the-customer/) program.

Discovery is the causal layer under them. A ticket says the import failed. Discovery tells you the import exists because a reviewer without a licence has to approve the change, which is a different problem with a different solution.

## Why Customer Discovery Is Harder When You Already Have Customers

Teresa Torres's inaugural Continuous Discovery Habits benchmark survey was completed by [1,999 people between September and November 2022](https://www.producttalk.org/measure-product-and-team-performance/), most of them working in product management and reached through her own courses, community and social networks. Among those respondents, **45.3% said they had talked to a customer in the past week, while 16.3% had conducted a story-based interview** in that same week. Of the people who had interviewed that week, 28.6% had a streak of four weeks or more ([Product Talk, March 2023](https://www.producttalk.org/2023/03/adoption-of-discovery-habits/)).

That is a population already sold on discovery, which makes the split a generous read rather than a pessimistic one. Torres names the gap directly: for many respondents, talking to a customer "often means getting pulled into a sales call or being consulted on a support ticket," and those are not a replacement for interviews.

The same gap shows up inside established companies, where access is abundant and uncontaminated evidence is scarce. What goes wrong compounds:

- **The sample selects itself.** The accounts that answer fastest are the ones with an open escalation or a champion who loves you. Both give you a distorted read, in opposite directions.
- **The interviewer owns the conclusion.** A PMM who wrote the positioning is a poor person to test it alone. The follow-up questions drift toward the parts that confirm the deck.
- **Customers answer as account holders.** They know the renewal date, they have asked for things before, and they will use the call to lobby. That is rational behaviour, and it is not what you came for.
- **Existing data crowds out new data.** With a dashboard already open, the temptation is to use interviews to explain the dashboard rather than to find what the dashboard cannot see.
- **The roadmap is already committed.** Discovery run after a commitment becomes evidence gathering for a decision that is not in play, which is a slower way of doing nothing.

Every one of those is a design choice you can reverse before the first invite goes out.

## How to Recruit Customer Discovery Interviews Without Leading the Witness

Recruiting is where most discovery is won or lost, because the sample decides the answer before anyone speaks.

Start by writing the decision the research will change and the answer you are hoping to hear. Then build the sample around the second sentence. If you are hoping to hear that mid-market teams need bulk editing, the sample has to include mid-market teams who have never asked for it, plus accounts that solved it elsewhere and stopped caring.

Build the sample out of these groups, weighted by what the decision needs:

| Group | What they tell you | Interviews |
| --- | --- | --- |
| Heavy users of the current workaround | The real job, and its cost in hours | 3 to 5 |
| Recently onboarded accounts, under 90 days | What the job looked like before you | 2 to 3 |
| Churned or downgraded accounts | Which constraint you failed to remove | 2 to 3 |
| Prospects who evaluated and chose someone else | The alternative you are actually measured against | 2 to 3 |
| Non-users inside a customer account | The approver, the reviewer, the person with no seat | 1 to 2 |

That last row is the one established teams skip, and it is where the bulk-editing example came from. If the person who blocks the workflow has no login, they appear in no product analytics and no NPS response, so nothing in your existing feedback stack will ever surface them.

Screen against your own thesis rather than for it. In practice that means defining the segment by a behaviour you can verify in your own data, not by a persona label. "Accounts that exported more than 500 records last quarter" is a sampling frame. "Ops leaders at growth-stage companies" is a [buyer persona](/blog/b2b-buyer-persona/), which is useful for messaging and useless for recruiting.

### The Recruiting Email

Priming starts in the invite. An email that says "we are exploring improvements to bulk editing" guarantees that every conversation is about bulk editing.

```
Subject: 45 minutes on how your team handles [job]

Hi [Name],

I work on the product side at [Company] and I am spending this month
talking to people who own [job] - including people who do most of it
outside our product.

I am not selling anything and there is no demo. I want 45 minutes to
hear how the work actually runs on your side, especially the parts
you have had to work around.

Any time on [day] or [day] works, or send me a slot that suits you.

I will share a two-page summary of what I learn across all the
conversations. That is usually the more useful half.

[Your name]
```

The subject line names the job rather than the product. The second paragraph removes the sales frame explicitly, because the recipient will assume one otherwise. The summary offer is the incentive worth leading with in B2B, because it costs you nothing you were not already producing and it does not have to clear an expense policy the way a gift card does.

I have no benchmark to offer on reply rates, and they swing hard with list quality and how recently the account last heard from you. Size the list from an assumption you write down, then correct it. Assume one reply in four from a warm customer list and less from churned accounts, and twelve conversations need roughly fifty names. Measure the real rate on the first batch and resize before week three.

## How to Get Account Access When Sales Owns the Relationship

The account executive who says no is protecting a renewal, and they have probably watched someone from product raise a bug on a customer call before.

Give them a written brief that removes the specific risks they are carrying:

```
To: [AE or CSM]
Subject: Research request - [Account]

What I want: 45 minutes with [name or role] at [Account].

Why this account: they are the clearest example of [pattern], which
is the assumption I most expect to be wrong about.

What I will not do: raise pricing, commit to a roadmap date, or
open anything that is currently a live support ticket.

What you get: my notes within 48 hours, plus a list of what they
raised that you can use on the renewal call.

You are welcome to join and listen. If you join, I will ask you not
to answer on their behalf.

If this is the wrong account, tell me who is closer and I will take
that one instead.
```

The clause that unlocks most of these requests is the third one. If the AE is protecting a specific open issue, naming it as off limits costs you nothing, because a live escalation makes a bad interview anyway.

If the AE joins the call, brief them once beforehand: they observe, they do not answer, and they do not correct the customer's description of how the product works. A customer describing the product wrongly is a finding.

When access still stalls, work down this ladder rather than arguing:

- Customer-success-led accounts, which carry no quota risk.
- Your community, user group, or customer advisory group, where the conversation is already expected.
- Former customers, who owe nobody a pleasant answer and are the most direct source you will find. Their reasons overlap heavily with the [win-loss interview questions](/blog/win-loss-analysis-questions/) you should already be asking.
- Practitioners who have never been your customer, sourced through a recruiting panel. Expensive per head, and free of every relationship bias above.

Discovery blocked at the sales gate for more than two weeks is a leadership problem, and it should be escalated as one rather than absorbed as a personal failure.

## Customer Interview Template You Can Copy

The script below is a 45-minute customer interview template built for someone with existing customers and existing opinions. It spends a third of the session on a single story, because one detailed story beats six shallow ones.

<img src="/assets/blog/customer-discovery/interview-arc.webp" alt="The 45-minute customer interview arc showing five blocks: set the frame in 5 minutes, the last-time story in 15, the workaround map in 10, the constraint probe in 10, and the close in 5" title="The 45-minute customer interview arc" width="1200" height="729" loading="lazy" decoding="async" />

```
CUSTOMER DISCOVERY INTERVIEW - 45 MINUTES

0:00  SET THE FRAME (5 min)

"Thanks for the time. Two things before we start. I am not selling
anything and there is nothing to demo. I want to understand how
[job] actually works on your side, including the ugly parts.
Second, is it alright if I record this so I am not typing while
you talk?"

"Tell me what your team owns, and where [job] sits inside that."

0:05  THE LAST-TIME STORY (15 min)

"Walk me through the last time you had to [do the job]. Start from
the morning it came up."

Follow-up ladder. Use in order, only when the story stalls:
  1. "What happened next?"
  2. "Who else got involved at that point?"
  3. "How long did that part take?"
  4. "What did you do when that did not work?"
  5. "Was that a normal week, or an unusual one?"

If they switch from story to opinion, ask for a date:
  "When was the last time that actually happened?"

0:20  THE WORKAROUND MAP (10 min)

"What do you do today when [product] cannot do that?"
"Can you share your screen and show me?"
"Who built that, and how long has it been running?"
"What breaks when the person who owns it is on leave?"

0:30  THE CONSTRAINT PROBE (10 min)

"Who else had to approve or review this?"
"What made the whole thing take [the duration they gave]?"
"What did you try before this that did not work out?"
"If this stayed exactly as it is for another year, what happens?"

0:40  THE CLOSE (5 min)

"What should I have asked about and did not?"
"Who else on your team lives with this every week?"
"Can I come back to you when I have something to show?"

NEVER ASK
  "Would you use a feature that ..."
  "How much would you pay for ..."
  "Do you think this is a good idea?"
  "Would that be useful?"
```

Rob Fitzpatrick's book [The Mom Test](https://www.momtestbook.com/) is the shortest useful reference on why those last four questions fail. Its subtitle, printed on the book's own site, is the whole argument: "How to talk to customers & learn if your business is a good idea when everyone is lying to you." The three rules on its opening page are to talk about their life instead of your idea, to ask about specifics in the past instead of opinions about the future, and to talk less and listen more.

Applying those rules to the questions people actually ask on customer discovery interviews produces the rewrites below:

| The question people ask | Why it fails | Ask this instead |
| --- | --- | --- |
| "Would you use a bulk edit feature?" | Politeness. Almost nobody says no to a hypothetical. | "Show me the last time you edited more than ten records." |
| "How much would you pay for this?" | Prices a thing that does not exist, against a budget nobody has defended. | "What are you paying for today to work around this?" |
| "What features are missing?" | Returns a wish list ranked by whoever spoke most recently. | "What did you do the last time the product could not do it?" |
| "Is this a big problem for you?" | Every problem sounds big during an interview. | "How many times did this come up last month?" |
| "Do you like the current workflow?" | An opinion about something they have already adapted to. | "Which parts of it did your team build yourselves?" |

## Running the Interview: Roles, Recording, and Silence

Two people run a good discovery call. One asks questions and never types. One takes notes and asks nothing until the last five minutes. Blank's own version of this is narrower: record the session, and if the customer says no, "make sure a team member is online to take notes" ([Steve Blank, April 2020](https://steveblank.com/2020/04/07/customer-discovery-in-the-time-of-the-covid-19-virus/)). I would staff both roles even when the recording is running, because an interviewer typing is an interviewer not listening.

Record with consent, and give the reason in the same sentence you ask. "So I am not typing while you talk" makes the request about the quality of their answer rather than about your records, which is a much easier yes to give.

The mechanics of the call matter as much as the script:

- Count to seven after they finish a sentence. The most useful half of an answer usually arrives in the silence you were about to fill.
- Never open the product. A demo converts the remaining time into feedback on your interface, which is a different study.
- Deflect the roadmap question honestly: "I do not know yet, and if I told you now it would change what you tell me next. Ask me again in five weeks."
- Stop at the scheduled time. Running over trains the account to decline the second interview, and the second interview is where the pattern shows up.

If the customer asks what you are building three separate times, they have told you something about their priority. Note it and keep going.

## Turning Feature Requests Into Jobs

The gap between what a customer asks for and what they are trying to accomplish is the entire value of doing this work in person.

Writing on Steve Blank's blog, Anthony Ulwick and Ted Thayer of Strategyn put jobs-to-be-done at the front of the process rather than the end. Their argument is that all markets "can be described by what job the user wants to get done," and that a market defined that way "is stable over time. It does not go away when different solutions or technologies come along" ([Ulwick and Thayer on Steve Blank's blog, November 2021](https://steveblank.com/2021/11/04/market-definition-its-the-front-end-of-customer-discovery/)). The same move works one level down, on a single request.

| What they asked for | The follow-up that opens it | The job underneath, often |
| --- | --- | --- |
| Bulk edit | "Show me the last batch of edits you made." | Getting a reviewer with no seat to sign off |
| More dashboards | "Who reads the one you have, and when?" | Proving the team's value in a meeting they do not run |
| An API | "What are you moving, and where does it end up?" | Getting data into the system their manager looks at |
| Single sign-on | "What made this urgent in the last month?" | Passing a security review that is holding a renewal |
| Faster support | "Walk me through the last ticket you filed." | Not explaining the same configuration twice |

The right-hand column is a hypothesis for the next interview rather than a conclusion. Two customers giving you the same request for two different jobs is the normal case, and catching it before scoping is the difference between building one thing and building two.

The strongest signal in any of this is a workaround. A spreadsheet, an automation, a shared inbox rule, or a person whose job is moving data between two systems, each represents a cost a customer already agreed to pay. That cost sets the ceiling on what your solution is worth, and it feeds directly into [positioning](/blog/what-is-market-positioning/) work later.

## How Many Customer Discovery Interviews Are Enough?

Between 6 and 36, depending on how many distinct segments the decision touches, and you stop when new interviews stop producing new themes.

Nielsen Norman Group's guidance is to "start with a small representative sample (say 5-6), and analyze your interviews as you go," and it warns explicitly that "for many exploratory-research studies, 5 participants are too few," because the widely repeated five-user number came from usability testing rather than interview research. The saturation estimates it cites are much older than the article itself: **12 interviews in Guest, Bunce and Johnson's 2006 analysis, and 20-30 interviews for 90-95% of customer needs in Griffin and Hauser's 1993 work**, both listed in NN/g's references ([Nielsen Norman Group, October 2021](https://www.nngroup.com/articles/interview-sample-size/)).

NN/g defines the stopping point as saturation: "a point where themes emerging from the research are fleshed out enough such that conducting more interviews won't provide new insights that would alter those themes."

The same article cautions against the obvious workaround, noting that recruiting five people per persona "can result in many more interviews than necessary." I still treat saturation per segment rather than once for a pooled sample: three segments covered by a pooled count of twelve gives you four interviews each, under the floor for all three. The two positions reconcile if you keep segments and personas apart. A segment here is a group doing a different job, not a group with a different job title.

| What you are deciding | Segments to cover | Per segment | Total |
| --- | --- | --- | --- |
| Whether one feature idea is worth scoping | 1 | 6 to 8 | 6 to 8 |
| Whether a second segment has the same job | 2 | 8 to 10 | 16 to 20 |
| Whether to reposition an existing product | 3, covering won, lost and churned | 8 to 10 | 24 to 30 |
| Whether to enter an adjacent market | 2 to 3 | 10 to 12 | 20 to 36 |

I would want two conditions to hold together before calling it:

- The last two interviews produced no theme that was not already in the notes.
- You can predict roughly what the next person will say before the call starts.

Predicting the answer correctly twice is the honest stopping signal. Predicting it wrongly means the sample was never as homogeneous as the segment label suggested.

A PMM running discovery for the first time inside a company with a mature product tends to carry most of the conditions NN/g says push the count higher:

- A broad, exploratory research goal, which is one of the two large factors it names.
- A diverse study population, which is the other.
- An inexperienced interviewer, which it lists among the smaller factors.

## How to Synthesize Customer Discovery Interviews Into Decisions

Discovery dies in the gap between the last interview and the decision. The remedy is one fixed artefact written within 24 hours, before the memory gets overwritten by the next call.

Write one snapshot per interview, in the same shape every time:

- Who they are, described by behaviour rather than by title.
- The story, in five sentences, with the dates and tools they named.
- The workaround, and what it costs in time or headcount.
- The constraint that made the workaround necessary.
- One verbatim quote you would put in front of an engineer.
- What this interview changed about your hypothesis, including "nothing".

Tag by the job, not by the feature that was requested. Feature tags recreate the feature board you already had. Job tags let two different requests collapse into one problem, which is the point of the exercise. Six months of notes tagged "bulk edit" produce a bulk edit feature. Six months tagged "approval without a seat" produce a guest reviewer link, which is cheaper and closes more of the requests.

When the evidence is in, rank it before you act on it:

| Evidence level | What you have | What it entitles you to do |
| --- | --- | --- |
| Anecdote | One story from one account | Write a hypothesis and go find three more |
| Pattern | The same story from four accounts across different segments | Scope an option and price the cost of the workaround |
| Decision | A pattern you can also see in product data or in revenue | Commit roadmap or positioning to it |

The common failure is promoting an anecdote straight to a decision because the story was vivid, and vividness is not evidence.

Write the decision memo in four parts:

1. The decision, in one sentence, phrased as a commitment rather than a finding.
2. What changed your mind, naming the interviews that did it.
3. What did not change, and which parts of the thesis survived.
4. The strongest argument against what you concluded.

That last section is the one senior stakeholders read first, and including it is the cheapest credibility you will ever buy. Feed the output into the rest of the [product marketing framework](/blog/product-marketing-framework/) rather than leaving it in a research folder.

Discovery run against a live product also gives you a cleaner read on [product-market fit](/blog/what-is-product-market-fit/) than any survey, because you are hearing which constraint each segment still cannot get past.

## Four Ways Discovery Fails Inside an Established Company

1. The work is outsourced and comes back as a deck. A central research team runs the calls, writes the synthesis, and presents it. Teresa Torres puts the opposite condition at the centre of her definition: the team building the product has to do the talking, because the useful part of an interview is the unplanned follow-up. Keep the person who owns the decision on every call, even when a trained researcher is asking the questions.
2. The interview gets bolted onto a call that already has a commercial agenda. Adding twenty minutes to a QBR or a renewal call saves the customer a meeting and costs you the evidence, because the customer is managing that agenda in every answer they give. Book discovery as its own meeting with its own invite, even when you are speaking to the same person about the contract next week.
3. The findings reach exactly one function. The memo goes to the product manager and never to sales, support, docs, or whoever owns pricing, so a different team re-runs the same interviews two quarters later. Send it with a named recipient per function and two lines on what it changes for each of them.
4. The same three accounts get called every quarter. They answer fast, they are pleasant, and over four quarters they turn into an unofficial advisory panel that knows your roadmap better than your sample does. Keep a list of who you have already interviewed, cap any account at one interview per research question, and spend the recruiting effort on the accounts that have never picked up.

## A Six-Week Customer Discovery Plan

Six weeks is long enough to reach saturation in two segments and short enough that the decision it feeds is still open.

| Week | What happens | What exists at the end |
| --- | --- | --- |
| 1 | Write the decision, the hypothesis, and the answer you are hoping for. Define segments by behaviour and pull the list. | A one-page brief and a 50-name recruiting list |
| 2 | Send invites, brief the AEs and CSMs, book the first block. Run two pilot interviews and fix the script. | 12 to 14 slots held, a script that survived contact |
| 3 | Six interviews. Snapshot each one within 24 hours. | Six snapshots and a first pass at tags |
| 4 | Six more, weighted toward the segment giving you the least comfortable answers. | Twelve snapshots, tags collapsed into jobs |
| 5 | Four to eight more, filling whichever groups came in thin, usually churned accounts and non-users. Stop when two consecutive interviews add nothing. | Sixteen to twenty snapshots and a saturation call you can defend |
| 6 | Write the decision memo. Present it with the counter-argument section. | A decision, and a list of what to test next |

After week six, the cadence matters more than the project. Teresa Torres defines [continuous discovery](https://www.producttalk.org/glossary-discovery-continuous-discovery/) as weekly touchpoints with customers by the team building the product, conducting small research activities in pursuit of a desired outcome, with the team itself doing the talking rather than reading somebody's report.

Weekly is the target. Fortnightly is the realistic floor for a PMM who also owns launches, and it still beats a quarterly research project by a wide margin, because the questions stay small and the answers arrive while the decision is live.

## Your First Six Customer Discovery Interviews

Pick the decision you are least certain about, name the answer you are hoping for, and build the sample out of the people most likely to contradict it. Six is the floor for a single-segment decision, and which six you call matters more than the number does. A sample built to confirm the roadmap will confirm it, however many people you speak to.

Book the first one this week. Open a shared doc titled with the decision, not the feature.
