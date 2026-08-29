---
title: "SaaS Release Notes: 8 Rewrites That Drive Adoption"
description: "SaaS release notes are a product marketing asset, not a docs chore. Eight before-and-after rewrites, a distribution plan, and the metrics that prove adoption."
publishDate: 2026-08-29
category: [Product Marketing, Marketing]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "What are release notes?"
    a: "Release notes are the customer-facing record of what changed in a product and what the reader can now do about it. A working note names the job the change serves, says which customers it applies to, and points at the exact place in the product to go next. Version numbers and component names are supporting detail."
  - q: "What is the difference between release notes and a changelog?"
    a: "A changelog is the running dated list of every customer-visible change, usually one line per item. Release notes are the written explanation attached to a release, with context on who it is for and why it shipped. Plenty of SaaS companies publish both on one page, which works as long as the entries that matter get more than a line."
  - q: "Who should write release notes in a SaaS company?"
    a: "Engineering supplies what changed, product marketing writes the headline and the eligibility line, and support reviews the wording it will have to repeat in tickets. Handing the whole job to whoever merged the pull request is what produces changelogs full of component names and no reason to click."
  - q: "What are release notes best practices?"
    a: "Date every entry, lead with the job rather than the object that changed, name the plan or role the change applies to, flag breaking changes and deprecations with a migration date, link to the documentation, and cut the phrase various bug fixes and improvements. Then send the note somewhere your customers already read."
  - q: "How long should a release note be?"
    a: "One headline plus two to four sentences for a normal feature, and a single dated line for a minor fix. Anything longer than a screen belongs in the docs or a blog post that the note links to. The quality test is not length: it is whether a customer success manager can forward it to an account without editing it."
---

SaaS release notes tend to fail in one specific way. Here is one written to be bad, in the shape a lot of changelogs actually ship.

```text
v4.12.0 - 26 August 2026
- Added support for custom retention windows on the Audit Log API
- Various bug fixes and improvements
```

The same release, rewritten:

```text
26 August 2026 - Compliance
Keep audit logs for as long as your auditor asks

Workspace admins on Business and Enterprise can now set audit log
retention per workspace, anywhere from 30 days to 7 years. If your
last SOC 2 cycle meant exporting logs by hand every quarter, that
export job is finished.

Applies to: workspace admins on Business and Enterprise
Do this next: Settings > Compliance > Audit log retention
Docs: Setting audit log retention
```

Same code, same ship date, same engineer. The first version names the object that changed and leaves the reader to work out whether it matters to them. The second names a job the reader was already doing badly, says which accounts it applies to, and ends with a click. The second one also hands a customer success manager something they can send to a named account list on Monday morning without rewriting a word.

That difference is the whole argument. **SaaS release notes are a product marketing deliverable with a revenue job**: driving adoption of the feature that just shipped, and giving customer success and sales a dated reason to reopen an account conversation. Grade them on clarity alone, hand them to whoever owns the docs, and you get a tidy changelog that nobody outside engineering reads.

## What Are Release Notes?

Release notes are the customer-facing record of what changed in a product and what the reader can now do about it. A working note names the job the change serves, the customers it applies to, and the next click. Version numbers, component names and file lists are supporting detail rather than the content.

The phrase is almost always written in the plural, which is why "what is release notes" and "what are release notes" return the same set of pages. One entry is a release note; the body of published entries over time is a product's release notes.

Four artifacts get confused with each other, and the confusion is upstream of most arguments about release note quality.

| Artifact | Scope | Cadence | Written for | Fails when |
|---|---|---|---|---|
| Release note | One release or one change | Per release | The customer who could use the change | It describes the object instead of the job |
| Changelog | Every customer-visible change | Continuous, dated | Existing users and developers checking a date | It becomes a commit log with a stylesheet |
| Product announcement | One launch narrative | Tier 1 and Tier 2 launches only | Prospects and the market | It gets used for a bug fix |
| Documentation | How the thing works, in full | Updated on change | Someone already trying to do the task | It carries the news instead of the reference |

The best-known published convention here is the [Keep a Changelog specification](https://keepachangelog.com/en/1.1.0/), which sets out six change types (Added, Changed, Deprecated, Removed, Fixed, Security) and opens with the principle that "Changelogs are for humans, not machines." It names the failure mode directly too: "Using commit log diffs as changelogs is a bad idea: they're full of noise." That spec settled the structure question for engineering teams. What it does not do, because it was never trying to, is tell you what a customer should feel or do after reading an entry.

## Why SaaS Release Notes Belong to Product Marketing

Feature adoption is the number the release note moves, and the baseline is low. Userpilot puts [the average core feature adoption rate for SaaS products at 24.5%](https://userpilot.com/blog/feature-adoption-metrics/), a figure it draws from its [2024 product metrics benchmark report across 547 SaaS companies](https://userpilot.com/blog/product-metrics-benchmark-report/). Core features are the easy case. Whatever shipped last sprint is competing for attention well below that line.

The seat-level picture is worse. Zylo's [2026 SaaS Management Index](https://zylo.com/news/2026-saas-management-index), built on more than 40 million SaaS licenses and $75 billion in spend under management, found that organizations "leave an average of 36% of their SaaS licenses unused." A buyer looking at that number at renewal is not asking whether your changelog is well formatted. They are asking what they got this year.

Most releases never get a campaign. In the tiering model I use for [launching a SaaS product](/blog/how-to-launch-a-saas-product/), Tier 1 launches run two to four times a year and Tier 2 runs six to twelve. Everything else is Tier 3, and for a Tier 3 release the note is the entire go-to-market motion. If the note is a documentation artifact, then the majority of what a company ships each year gets no marketing at all.

Docs ownership and product marketing ownership give different answers to the same questions, and each answer changes the output.

| Question | Answer when docs own it | Answer when product marketing owns it |
|---|---|---|
| Who writes the headline? | Whoever merged the change | The person accountable for adoption of it |
| What is the unit of content? | The object that changed | The job the customer can now finish |
| Who is it addressed to? | Everyone on the page | The plan, role or segment that is eligible |
| Where does it go? | The changelog page | Changelog, in-app, CS account list, sales channel, digest |
| What proves it worked? | Pageviews | Adoption among the accounts that saw it |

None of that removes engineering from the loop. The technical detail has to come from the people who wrote the code, and a note that gets the behaviour wrong is worse than no note at all. The split I would defend is that engineering owns accuracy, product marketing owns the framing and the distribution, and support owns the sentence they will have to repeat in every ticket the change generates.

This is the same boundary problem I worked through in [customer marketing versus product marketing](/blog/customer-marketing-vs-product-marketing/), where release notes sit as a shared artifact between product, PMM and customer marketing. The tie-breaker is the metric each function rolls up to. If the number attached to the note is feature adoption in the installed base, the note belongs with whoever is graded on that number.

## The Anatomy of a Release Note That Gets Used

Six parts. A minor fix uses three of them and takes one line. A meaningful feature uses all six and still fits on a phone screen.

- **The date, first and unambiguous.** Write it out (26 August 2026), because numeric formats read differently on either side of the Atlantic. Version numbers go next to the date when your customers pin versions, and get dropped when they do not.
- **A headline that names the job.** "Keep audit logs for as long as your auditor asks" rather than "Configurable audit log retention". The headline is the only part most readers will ever see, so it carries the value or nothing does.
- **The eligibility line.** Which plan, which role, which region, which integration. A reader who cannot tell in two seconds whether this applies to them will assume it does not.
- **Two to four sentences of what changed.** Include what it replaces, because the reader has an existing workaround and it is the workaround that has to die for adoption to happen.
- **The next click.** An exact path, a deep link, or a button. "Settings > Compliance > Audit log retention" beats "available in your settings", because one of them is a route and the other is a hint.
- **The reference and the feedback route.** A link to the documentation for the person who wants depth, and somewhere to reply for the person who has a problem with it.

<img src="/assets/blog/saas-release-notes/release-note-anatomy.webp" alt="Six-part anatomy of a SaaS release note: date, job headline, eligibility line, what changed, next click, and docs plus feedback route" title="Anatomy of a Release Note That Gets Used" width="1200" height="669" loading="lazy" decoding="async" />

The test I would apply before publishing: can a CSM forward this entry to a named account, unedited, and have it read as a useful message from a person rather than a system notification? If the answer is no, the note is documentation.

## 8 Release Note Rewrites: Before and After

Every example below is written by me for this post. The patterns are common in published changelogs; the specific wording is not lifted from any company's.

### 1. The Bug Fix That Says Nothing

**Before**

```text
- Various bug fixes and improvements
```

**After**

```text
Fixed: CSV exports over 50,000 rows timed out on shared
infrastructure. Exports now stream and finish. If you built a
2am workaround export to dodge the timeout, you can retire it.
```

The first version is invisible to the one customer who filed the ticket and to the CSM who has been apologising for it. The second is a reason for that CSM to close the loop with a named account. That opening phrase is the first line I would cut from any changelog.

### 2. The Object Instead of the Job

**Before**

```text
Added a metadata field to the Webhooks API.
```

**After**

```text
Route webhooks without a second lookup
Webhook payloads now carry a metadata object you set at
subscription time, so your handler can route on your own
account ID instead of calling us back to resolve it.
```

The first sentence is accurate and answers nothing. The rewrite names the round trip the developer was making and states that it is gone. Accuracy and usefulness are separate tests, and the original only passes one of them.

### 3. The Internal Vocabulary Leak

**Before**

```text
Refactored the ingestion pipeline for improved throughput.
```

**After**

```text
Imports finish while you are still on the page
Files up to 2GB now import in under a minute for most accounts,
down from the multi-minute wait that pushed large imports to
overnight jobs.
```

"Ingestion pipeline" is a name from an internal architecture diagram, and no customer has that diagram. The rewrite converts an engineering improvement into the observation a user will make ten seconds after clicking upload.

### 4. The Breaking Change Buried in Politeness

**Before**

```text
Minor updates to the Reports endpoint.
```

**After**

```text
BREAKING - Reports API: date fields move to ISO 8601 on 1 Dec 2026
The created and updated fields on /v2/reports return ISO 8601
strings from 1 December 2026. Unix timestamps keep working until
then. Test against the 2026-12-01 preview version now.
Migration guide: /docs/reports-date-migration
```

A breaking change hidden under "minor updates" costs trust in every other entry on the page, because the reader now has to assume any polite line could be hiding one. The rewrite leads with the word BREAKING, names the date, and gives a migration path with a preview to test against. Stripe does the structural version of this by carrying a breaking-change flag on every row of its API changelog.

### 5. The Feature Dump With No Reader

**Before**

```text
Release 8.4
- New dashboard widgets
- SSO improvements
- Improved search relevance
- Custom fields on contacts
- Bulk edit
- Performance improvements
- Updated icons
```

**After**

```text
For admins: SSO now supports SCIM group sync, so removing someone
from your IdP removes their access here within 5 minutes.
For everyone: bulk edit is live on contacts and companies. Select
up to 500 records and change owner, stage or tags in one pass.
Also in 8.4: custom fields on contacts, better search relevance,
new dashboard widgets, refreshed icons.
```

Seven equal bullets tell the reader that the company itself cannot say which of these matters. The rewrite promotes two items with an audience label and demotes the rest to one line. Ranking is a marketing decision, and refusing to rank is the failure that costs the most for the least effort to fix.

### 6. The Announcement About the Company

**Before**

```text
We are thrilled to announce that our team has been working hard
to bring you an exciting new experience in the reporting module!
```

**After**

```text
Build a report without asking your data team
The report builder now runs on saved segments, so anyone with a
Standard seat can slice by plan, region or lifecycle stage without
SQL. The old builder stays available until 15 October 2026.
```

The first version is about the vendor's feelings and the vendor's effort. The rewrite is about what the reader can do this afternoon, and it names the sunset date for the thing being replaced so nobody is surprised later.

### 7. The Deprecation Nobody Sees Coming

**Before**

```text
The legacy exporter has been sunset.
```

**After**

```text
Legacy exporter retires 31 January 2027
The v1 exporter stops accepting new jobs on 31 January 2027 and
goes read-only on 28 February 2027. Scheduled jobs migrate
automatically; custom column mappings do not and need to be
recreated once in Exports > Templates.
If you are on an annual contract renewing before that date, your
CSM has the account-specific list.
```

Past tense on a deprecation means the customer found out after the decision affected them. The rewrite gives two dates, separates what migrates from what does not, and routes the hard cases to a human. Retiring something is a comms event with its own sequence, which I set out separately in the [product sunset](/blog/product-sunset/) playbook.

### 8. The Note With No Way In

**Before**

```text
Improved keyboard shortcuts throughout the app.
```

**After**

```text
Jump to any record with Cmd+K
The command palette now searches records, not just pages. Press
Cmd+K (Ctrl+K on Windows) from anywhere and type an account name.
Full shortcut list: /docs/shortcuts. Missing one you want? Reply
to this note and it goes on the list.
```

The original has no entry point, so a reader who agrees it sounds good still does nothing. The rewrite gives the keystroke inside the note itself, which means adoption can happen before the reader closes the tab.

## How Seven SaaS Companies Actually Write Release Notes

Reading published changelogs is the cheapest research in this job, and the good ones disagree with each other in useful ways. Every entry below was on the live page on 29 August 2026.

| Company | What the page does | Worth copying |
|---|---|---|
| [Stripe](https://docs.stripe.com/changelog) | API changelog versioned by dated release train (2026-08-26.dahlia), with a breaking-change flag and affected products on every row | Machine-readable discipline where the reader is a developer with a deploy pipeline |
| [Linear](https://linear.app/changelog) | Long-form dated entries with a product image, opening on context rather than the object. The 13 August 2026 entry opens: "Initiatives are Linear's way to manage product strategy and high-level planning across projects." | A headline entry plus a bulk fixes list underneath, so the big thing is not buried by twenty small ones |
| [Notion](https://www.notion.com/releases) | Short benefit-shaped headlines with video. The 28 August 2026 entry is titled "Ask your agent to suggest edits" | Titles written as things the reader can do, in the imperative |
| [GitHub](https://github.blog/changelog/) | Every entry carries a product label and a type: Release, Improvement, or Retired | Typing entries, so a reader scanning for deprecations can find them |
| [Figma](https://www.figma.com/release-notes/) | Dated entries with product and area tags, plus filtering and an RSS feed | Letting the reader subscribe to only the surface they use |
| [Vercel](https://vercel.com/changelog) | Benefit-led headline, one-paragraph body, named authors on each entry. The 28 August 2026 CLI entry opens: "The Vercel CLI now provides dedicated commands for managing DNS records, domains, and projects." | Bylines, which make the note a message from people rather than from a build system |
| [Slack](https://slack.com/release-notes/mac) | Per-platform version notes with What's New, Bug fixes and Security guidance sections. The Bug fixes section of version 4.51.191 on 17 August 2026 opens: "Nothing major to report this week. Nothing minor to report either, as it turns out..." | A voice consistent enough to survive a week with nothing to say |

Every one of the seven dates every entry, which sounds obvious until you audit your own page. And the two that put a change type on the entry itself, Stripe with its breaking-change column and GitHub with its Retired label, keep that flagging plain no matter how conversational the rest of the page gets.

Slack's empty week is the one I would defend hardest to a nervous stakeholder. Publishing "nothing shipped" on schedule is what makes readers trust the page enough to keep checking it, and a changelog with gaps teaches people to stop looking.

## Release Notes Best Practices: The Rules I Would Not Break

The anatomy covers the shape of one entry, and the eight rewrites cover the judgment calls inside it. What is left sits outside any single entry, in the system that has to exist around the page for the entries to be worth writing at all.

1. Publish on a fixed rhythm rather than when someone remembers, because ad hoc publishing makes subscribing pointless.
2. Keep a permalink per entry so support and sales can link to one specific change from a ticket or an email.
3. Give readers a way to subscribe to a slice, by product area or by type, the way Figma's tagged feed does.
4. Ship the documentation update the same day. A note pointing at a stale reference page costs more trust than no note.
5. Never let a release note be the first time a customer-facing team hears about a change. The internal sequence comes first, which is the point of a [product launch communication plan](/blog/product-launch-communication-plan/).
6. Attach one number to every entry that matters, decided before it ships.

The internal-first rule is the one I would guard hardest, and it is not really a release-notes problem. When support reads the changelog at the same moment customers do, the note becomes the thing that generates tickets rather than the thing that prevents them.

## How to Distribute SaaS Release Notes Beyond the Changelog Page

A public changelog is a destination, and destinations only work for people who already decided to visit. The note has to travel to where each audience already is, in a version shaped for that surface.

<img src="/assets/blog/saas-release-notes/release-note-distribution.webp" alt="Distribution map showing one release note fanning out to changelog page, in-app announcement, documentation update, customer success brief, sales enablement channel, monthly customer digest and developer feed" title="Where One Release Note Goes" width="1200" height="795" loading="lazy" decoding="async" />

| Surface | Reaches | Owner | Shape it takes |
|---|---|---|---|
| Changelog page | Anyone checking, plus search and AI answer engines | Product marketing | Full entry with a permalink and a date |
| In-app announcement | Logged-in users who match the eligibility rule | Product marketing with lifecycle | Headline plus the button that starts the task |
| Documentation update | Someone mid-task looking for the reference | Product with technical writing | Reference content, no news framing |
| Customer success brief | CSMs, with a list of accounts the change is relevant to | Product marketing to CS | Two sentences plus the account list and a suggested opener |
| Sales enablement channel | AEs in live cycles and renewal conversations | Product marketing | One line on what it unblocks and which objection it answers |
| Monthly customer digest | The installed base, including people who rarely log in | Customer marketing | Three to five ranked items, not a full month of entries |
| Developer feed or RSS | Integrators and platform partners | Product marketing with product | Machine-readable, versioned, breaking changes flagged |

Send per-release only to the accounts the eligibility line names, and batch everything else into the monthly digest. Then rank inside the digest, because a customer who opens a list of thirty undifferentiated items learns to stop opening it.

The customer success row is the one that turns a note into revenue conversations. A CSM holding a two-sentence brief and the list of eligible accounts has a reason to open those accounts this week, which is a very different thing from a link to a changelog. That handoff belongs on the [product launch checklist](/blog/product-launch-checklist/) as a named line with an owner rather than an assumed follow-up.

## How to Measure Whether SaaS Release Notes Worked

Changelog pageviews are the vanity metric here. They confirm a page was loaded and say nothing about whether anyone did anything differently afterwards.

The measurement that answers the question is a cohort split. Tag the accounts that saw the note (opened the in-app announcement, clicked from the digest, or sat on the CS outreach list), then compare feature usage in that group against eligible accounts that did not see it, over a fixed window such as 30 days. That is the gap between a number about content and a number about behaviour.

| Metric | Definition | Read it as |
|---|---|---|
| Eligible-account adoption | Share of accounts matching the eligibility rule that used the feature within 30 days | The headline number for the release |
| Reader versus non-reader gap | Adoption among accounts that saw the note minus adoption among those that did not | Whether the note moved anything |
| Time to first use | Median days from publish to first use, per account | Whether the next click was clear enough |
| Depth after first use | Share of first users who came back within 14 days | Whether the note oversold the feature |
| CS conversations sourced | Account conversations opened off the release brief | Whether the internal distribution worked |
| Ticket volume on the change | Support tickets referencing the feature in week one | Whether the note prevented or created work |
| Digest engagement by rank | Click share by position in the monthly digest | Whether your ranking judgment is any good |

Set the target before the release ships rather than after you see the number. For a Tier 3 improvement I would set something modest and honest, such as a stated share of eligible accounts using it within 30 days, and treat a miss as information about the note rather than about the feature. These sit alongside the rest of the [product marketing metrics](/blog/product-marketing-metrics/) a PMM team reports on, and they are among the few that connect a writing task directly to product usage.

One warning about the reader-versus-non-reader gap: it flatters you. Accounts that read release notes are likely to be more engaged to begin with, so the gap partly measures who reads rather than what the note did. Use it to compare your notes against each other over time, not as proof of what any single note caused.

## Release Note Ownership and the 24-Hour Review Loop

A note that ships three weeks after the feature has already missed the window when adoption was cheap. The process has to keep up with the deploy schedule, which makes the review loop more important than the template.

The version I would run keeps one day of slack in it.

1. The engineer or PM opening the pull request fills a three-line stub: what changed, who it affects, what it replaces. This lives with the code, not in a separate tracker.
2. Product marketing rewrites the stub into the six-part note and picks the tier, which decides how many surfaces it goes to.
3. Support reviews for the sentence they will repeat in tickets and flags anything that will generate confusion.
4. It publishes on the next scheduled slot. Weekly beats ad hoc, because a rhythm is what makes subscribing worth it.

Nobody outside those three roles gets an approval gate on a Tier 3 note. A missing review after 24 hours counts as approval. And the stub is required to merge, which is the enforcement mechanism I would bet on, because it puts the cost on the person who already has the context.

Escalation is the exception worth writing down. A breaking change, a pricing-adjacent change, or anything touching security gets the full internal sequence first: support, then customer success, then sales, then customers. That ordering logic governs any launch comms plan, and it exists because the people who face customers need to be ready before the customers arrive.

## Three Release Note Templates You Can Copy

Paste these into your stub template and fill the brackets.

Tier 3, a fix or a small improvement:

```text
[DD Month YYYY] - [Product area]
[Verb-led headline: what the reader can now do]

[One or two sentences: what changed and what it replaces.]

Applies to: [plan / role / region]
Do this next: [exact path or keystroke]
```

Tier 2, a feature with an audience worth naming:

```text
[DD Month YYYY] - [Product area]
[Headline naming the job, not the object]

[Two to four sentences. Sentence one is the job. Sentence two is
what it replaces. Sentence three is the constraint or limit worth
knowing before someone tries it.]

Applies to: [plan / role / region]
Do this next: [deep link or exact path]
Docs: [link]
Questions: [reply route or channel]
```

Breaking change or deprecation:

```text
BREAKING - [What changes] on [DD Month YYYY]
[One sentence: the exact behaviour change.]

Timeline
  [DD Month YYYY] - [new behaviour available to test]
  [DD Month YYYY] - [old behaviour stops accepting new requests]
  [DD Month YYYY] - [old behaviour removed]

What migrates automatically: [list]
What you have to redo: [list]
Migration guide: [link]
Affected accounts: your [CSM / support contact] has the account list.
```

The breaking-change template is the one to over-invest in. It is the only release note where getting it wrong costs a renewal conversation instead of an adoption point.

## Where to Start With SaaS Release Notes

Open your changelog and read the last ten entries the way a customer would. Count how many name a job rather than an object, how many say who they apply to, and how many end with a click. A low count is an ownership problem more than a writing problem, and the fix is deciding that adoption of shipped features is somebody's number.

Then rewrite one entry from last week using the six-part anatomy and send it to the CSMs covering the accounts it applies to. Ask them how many conversations it opened.

The next release ships anyway. Give it a note somebody can act on.
