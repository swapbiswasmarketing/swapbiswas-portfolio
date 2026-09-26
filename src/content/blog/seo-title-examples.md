---
title: "SEO Title Examples: 95 Real Rewrites and What They Cut"
description: "See 95 real SEO title examples from one site: each original title, its rewrite under a 60-character cap, and what was cut to fit, sorted by page type."
publishDate: 2026-09-26
category: [SEO]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "What is a good SEO title example?"
    a: "'How to Conduct a Technical SEO Site Audit: The 8-Step Guide' is one from my own site, at 59 characters. The keyword phrase leads, and 'The 8-Step Guide' replaced the vaguer 'The Complete Step-by-Step Guide' when the title was cut to fit a 60-character cap."
  - q: "How long should an SEO title be?"
    a: "60 characters or fewer is the cap I hold every title on my site to, checked by a script. Google sets no maximum length for the title element and truncates the title link in results to fit the device width, while asking site owners to avoid unnecessarily long or verbose titles, so 60 is my house rule rather than a number Google publishes."
  - q: "Is a meta title the same as a title tag?"
    a: "Yes. 'Meta title' is the everyday name for the HTML title element. Google calls the clickable headline in results a title link and builds it from several sources, including the title element, the main visible title, H1 headings and og:title, so the headline it shows can differ from the tag you wrote."
  - q: "Should I put the year in my SEO title?"
    a: "Only if you will update the page every year and the title still fits with it. Google's title link documentation treats a title with an outdated year as obsolete and may swap in the date shown on the page. When I cut 87 over-long titles, the year went from 55 and stayed in the 20 where it still fit."
  - q: "Does Google change your SEO title?"
    a: "It can. Google's documentation lists nine sources it draws on for title links and gives examples of replacing half-empty titles such as '| Site Name', titles with an outdated year, repeated boilerplate and inaccurate titles. A title element free of those problems removes the specific triggers Google documents."
---

These are SEO title examples with the draft still attached. Here is the longest title this site carried on 2026-08-26, next to the rewrite that still ships today:

- **Before, 85 characters:** How to Create a Competitive Battlecard: Template, Examples, and Best Practices (2026)
- **After, 56 characters:** [Competitive Battlecard Template: Examples That Win Deals](/blog/competitive-battlecard-template/)

Both strings come from one git commit, and that commit holds 94 more pairs like them. A crawl audit that day found 95 titles over 60 characters. In git they are 87 of the 125 blog posts and all 8 free tool pages, 95 of 133. Every one of them was rewritten in that commit, and no blog title on the site is over 60 today.

The pages ranking for this search are mostly galleries of other sites' finished titles and SEO tool guides. I think the draft next to the fix teaches more, because the fix shows you what to delete, and deletion did most of the work here: 50 of the 87 blog rewrites added no new word at all. Below are all 95 pairs, sorted by page type, with a count of every kind of cut and the order to make them in.

## SEO Title Examples: 12 Before-and-After Pairs

Twelve pairs chosen to cover every kind of cut in the set. Character counts include spaces and punctuation.

| Original | Chars | Rewrite | Chars | What was cut |
|---|---:|---|---:|---|
| How to Create a Competitive Battlecard: Template, Examples, and Best Practices (2026) | 85 | Competitive Battlecard Template: Examples That Win Deals | 56 | "How to Create a", "Best Practices" and the year; keyword moved to the front |
| Good Better Best Pricing in 2026: How to Build the Three Tiers (With Actual Numbers) | 84 | Good Better Best Pricing: How to Build the Three Tiers | 54 | The inline year and the bracketed phrase |
| Competitive Product Analysis: A Step-by-Step Framework for Product Marketers (2026) | 83 | Competitive Product Analysis: A 7-Dimension PMM Framework | 57 | "Step-by-Step" swapped for a count; the audience shortened to "PMM"; the year |
| House of Brands vs Branded House: Which One Your Next Launch Actually Needs (2026) | 82 | House of Brands vs Branded House: The Per-Launch Decision | 57 | A seven-word promise compressed to three words; the year |
| Free Product One-Pager Template \| Build a Polished Product One-Pager in 5 Minutes | 81 | Product One-Pager Template: Free Builder, Done in 5 Minutes | 59 | "Free" moved behind the keyword; the repeated product name |
| What Is a Value Proposition? Definition, Examples, and How to Write One (2026) | 78 | What Is a Value Proposition? Examples and How to Write One | 58 | "Definition", which the question already promises; the year |
| 12 B2B Lead Generation Email Templates (With Subject Lines That Get Replies) | 76 | 12 B2B Lead Generation Email Templates That Get Replies | 55 | "With Subject Lines" and the brackets |
| Ecommerce Marketing Automation: Workflows That Actually Drive Revenue (2026) | 76 | Ecommerce Marketing Automation: Workflows That Drive Revenue | 60 | "Actually" and the year |
| 9 Proven Strategies to Improve Brand Visibility in AI Search Engines (2026) | 75 | Improve Brand Visibility in AI Search Engines: 9 Strategies | 59 | "Proven" and the year; the count moved behind the keyword |
| How Much Does an SEO Audit Cost in 2026? Real Pricing, Tiers & Hidden Fees | 74 | How Much Does an SEO Audit Cost? Real 2026 Pricing Tiers | 56 | "Hidden Fees"; the year moved out of the question into the promise |
| ChatGPT Prompts for Marketing: 50+ Ready-to-Use Templates (2026) | 64 | ChatGPT Prompts for Marketing: 20 Ready-to-Use Templates | 56 | "50+" corrected to the 20 prompts on the page; the year |
| ABM vs Inbound Marketing: How to Choose and Combine Both (2026) | 63 | ABM vs Inbound Marketing: How to Choose and Combine Both | 56 | The year and nothing else |

The full set of 95 pairs is also available as a [CSV file](/assets/blog/seo-title-examples/seo-title-rewrites.csv) with the page type, both titles, both lengths and the title each page carries today.

## How I Pulled 95 Title Pairs Out of Git

All 95 rewrites landed in one commit, `b623785`, titled "SEO fixes" and dated 2026-08-26. I compared that commit with its parent in four steps:

1. Listed the markdown posts on both sides: 125 in each.
2. Read the frontmatter `title` field from both versions of every post and kept the ones that changed.
3. Did the same for the `const title` line in the 8 tool pages, which are Astro files rather than markdown.
4. Counted characters as JavaScript string length, so spaces and punctuation count.

| Measure | Blog posts | Tool pages |
|---|---:|---:|
| Pages in the commit | 125 | 8 |
| Titles over 60 characters before | 87 | 8 |
| Titles rewritten | 87 | 8 |
| Titles over 60 characters after | 0 | 0 |
| Median length before (range) | 69 (61-85) | 67.5 (63-81) |
| Median length after (range) | 57 (51-60) | 56.5 (54-59) |
| Characters removed in total | 1,096 | 104 |

The site's other pages, such as "About | Swapnil Biswas" at 22 characters, already fit. A month later, 94 of the 95 rewrites still ship word for word. The exception is the SEO report post, which was retitled again on 2026-09-10.

I have no click or ranking data that isolates these rewrites, so none of the pairs proves that a shorter title earned more traffic. They show what a hard 60-character cap forces out of a title, and what survives it.

The audit that catches an over-long title is one line of awk. It reads markdown files whose YAML `title:` is bare or wrapped in single or double quotes, with Unix or Windows line endings, and prints every title over 60 characters, longest first. It prints nothing when every title fits. In an awk build without UTF-8 support, a title with non-ASCII characters counts a little long.

```bash
awk '{sub(/\r$/,"")} FNR==1{fm=0} /^---$/{fm++; next} fm==1 && /^title:/ {t=$0; sub(/^title: */,"",t); gsub(/^["\047]|["\047]$/,"",t); n=length(t); if (n>60) printf "%3d  %s\n", n, FILENAME}' src/content/blog/*.md | sort -rn
```

## What Changed in 87 Over-Long Blog Titles

<img src="/assets/blog/seo-title-examples/what-the-rewrites-cut.webp" alt="Bar chart of what changed in 87 over-long blog titles: year removed entirely 55, deletions only 50, at least one new word 37, year was the only change 19, a number in digits added 12, opening words cut so the keyword leads 8, the word Actually deleted 5" title="What changed in 87 over-long blog titles" width="1200" height="669" loading="lazy" decoding="async" />

A rewrite counts as "deletions only" when every word in the new title already appeared in the old one. The "new word" group includes small swaps, such as "&" becoming "and". One title can land in several rows.

| Change | Rewrites | Example after the rewrite |
|---|---|---|
| Year removed entirely | 55 of 87 | Mobile SEO Checklist: 15 Fixes to Win Mobile-First Rankings |
| Deletions only, no new word | 50 of 87 | Competitive Analysis Examples: 5 Frameworks You Can Copy |
| At least one new word written in | 37 of 87 | House of Brands vs Branded House: The Per-Launch Decision |
| The year was the only change | 19 of 87 | Product Marketing Career Path: Levels, Salary, Timeline |
| Every word before the colon or question mark kept | 72 of the 78 that had one | What Is YMYL? Google's 'Your Money or Your Life' Explained |
| A number in digits added | 12 of 87 | How to Implement Marketing Automation: A 6-Phase Playbook |
| Opening words cut so the keyword leads | 8 of 87 | Increase Interactivity in Your Emails: 7 Proven Tactics |
| "Actually" deleted | 5 of the 8 that had it | Ecommerce Marketing Automation: Workflows That Drive Revenue |
| Bracketed phrase unwrapped or cut, excluding bare "(2026)" tags | 7 of the 8 that had one | SaaS Demand Generation: Build Pipeline, Not Just Leads |

Of the 6 colon or question-mark titles whose opening changed, all 6 kept the keyword phrase: 2 lost a leading "The", 2 lost an inline "in 2026", 1 dropped its "What Is" question, and the battlecard title moved its keyword to the front. A title lands in the "keyword leads" row when the words ahead of the keyword were cut or the keyword was reordered to open the title. Eight did: three leading "The", plus "How to Create a", "What Is", "9 Proven Strategies to", "7 Most Productive Ways to" and "How I Moved My Website from".

Five of the new digits replaced "Step-by-Step", which appeared in 7 titles: the rewrites that removed it put 8-Step, 6 Steps, 6-Phase, 7-Stage and 7-Dimension in its place, and the other 2 lost only the year. The 12 also include the "T-90" countdown label and one correction, where "50+ Ready-to-Use Templates" became the 20 prompts the page held.

Other intensifiers went too: "Complete" from 3 of the 5 titles that used it and "Proven" from both. One rewrite added "Proven" to a title that never had it: "7 Proven Tactics".

## The Year Stayed Only Where It Still Fit

Of the 87 over-long blog titles, 75 carried a year. The rewrite removed it from 55 and kept it in 20.

The split tracks length. Putting " (2026)" back onto any title that lost its year would push it past 60 characters again, and all 20 that kept a year fit with it. My style guide, updated in the same commit, is stricter than the rewrites were: it says "Drop the year stamp before trimming anything else", and its pre-publish checklist asks for "no year stamp". The rewrites kept the year wherever it fit, and when I counted on 2026-09-26, 54 of 169 post titles still carried one.

Google gives a concrete reason to be careful. Its [title link documentation](https://developers.google.com/search/docs/appearance/title-link) describes an obsolete title as one on a page "used year-after-year for recurring information" whose title element "didn't get updated to reflect the latest date". Its example is a page titled "2020 admissions criteria - University of Awesome" with a visible heading for 2021, where Google may detect the mismatch and use the 2021 date from the visible title in the title link.

If a page will not be refreshed every January, leave the year out. If the year is the point, as in a pricing post, put it inside the promise the way the audit cost title does: "Real 2026 Pricing Tiers".

## Good SEO Title Examples by Page Type

The other 83 SEO page title examples are below, grouped by the kind of page, and the 12 from the table at the top are not repeated. The 18 rewrites where the year was the only change are listed together at the end of this section. Each group opens with the pattern its rewrites landed on, which is the part to copy. The Chars column reads before to after.

### How-To Titles

Pattern: `How to [task]: The [N]-Step Guide` or `How to [task] in [N] Steps`. Three of these rewrites replaced a vague method phrase with a number.

| Before | After | Chars | What changed |
|---|---|---|---|
| How to Check a Competitor's Email Marketing (Without Guessing) | How to Check a Competitor's Email Marketing Without Guessing | 62 to 60 | The brackets only |
| How to Conduct a Technical SEO Site Audit: The Complete Step-by-Step Guide | How to Conduct a Technical SEO Site Audit: The 8-Step Guide | 74 to 59 | "Complete Step-by-Step" became "8-Step" |
| How to Do Content Marketing Competitor Analysis: A Step-by-Step Framework | How to Do Content Marketing Competitor Analysis in 6 Steps | 73 to 58 | "A Step-by-Step Framework" became "in 6 Steps" |
| How to Implement Marketing Automation: A Step-by-Step Playbook (2026) | How to Implement Marketing Automation: A 6-Phase Playbook | 69 to 57 | "Step-by-Step" became "6-Phase"; year |
| How to Prioritize Accounts in ABM: A Fit-and-Intent Framework (2026) | How to Prioritize Accounts in ABM: Fit-and-Intent Framework | 68 to 59 | "A"; year |
| How to Read a Heatmap: A Practical Guide With Examples (2026) | How to Read a Heatmap: Click, Scroll, and Move Maps (2026) | 61 to 58 | Generic "Practical Guide" became the three map types; year kept |
| How to Use ChatGPT for Sales and Marketing: 10 Proven Workflows (2026) | How to Use ChatGPT for Sales and Marketing: 10 Workflows | 70 to 56 | "Proven"; year |

### Definition Titles

Pattern: `What Is [term]? [two or three things the page delivers]`. The usual cut was the list after the question mark, either trimmed or replaced with a single promise. The SEO report post was retitled again on 2026-09-10 and now reads "SEO Report Example, Metrics, and Reporting Template", with the question form gone.

| Before | After | Chars | What changed |
|---|---|---|---|
| What Is Customer Enablement? Definition, Components, and Where It Fits (2026) | Customer Enablement: Definition, Components, Where It Fits | 77 to 58 | "What Is" question form, "and"; year |
| What Are Brand Guidelines? + Brand Book and Brand Voice Examples (2026) | What Are Brand Guidelines? Brand Book and Voice Examples | 71 to 56 | The "+" and the second "Brand"; year |
| What Is Cross Network in Google Analytics? GA4 Channel Grouping Explained | What Is Cross Network in Google Analytics? The GA4 Channel | 73 to 58 | "Grouping Explained" cut; "The" added |
| What Is Customer Journey Analytics? Tools, Frameworks & Examples (2026) | What Is Customer Journey Analytics? Frameworks and Tools | 71 to 56 | "Examples"; year |
| What Is Lifecycle Marketing? The Complete Framework with Examples (2026) | What Is Lifecycle Marketing? The Complete Framework (2026) | 72 to 58 | "with Examples"; year kept |
| What Is Market Positioning? Frameworks, Examples & a Workshop (2026) | What Is Market Positioning? Frameworks and Examples (2026) | 68 to 58 | "a Workshop"; year kept |
| What Is Sales Enablement Software? Categories, Features & a Buyer's Guide (2026) | What Is Sales Enablement Software? A Buyer's Guide (2026) | 80 to 57 | "Categories, Features"; year kept |
| What Is an SEO Report? A Complete Guide to SEO Reporting (2026) | What Is an SEO Report? Metrics, Template, and Tools (2026) | 63 to 58 | "A Complete Guide" became three deliverables; year kept |
| What Is Win-Loss Analysis? Templates, Questions, and Examples (2026) | What Is Win-Loss Analysis? The 6-Stage Process for PMMs | 68 to 55 | Content list became "The 6-Stage Process"; year |
| What Is YMYL? Google's 'Your Money or Your Life' Pages Explained (2026) | What Is YMYL? Google's 'Your Money or Your Life' Explained | 71 to 58 | "Pages"; year |

### X vs Y Comparison Titles

Pattern: `[X] vs [Y]: [the decision or the difference]`. The "vs" phrase was never touched. Four more comparison titles appear in the year-only list, and the ABM and House of Brands pairs are in the table at the top.

| Before | After | Chars | What changed |
|---|---|---|---|
| Branding vs Positioning: The Difference and How They Work Together (2026) | Branding vs Positioning: The Difference and How to Align | 73 to 56 | "How They Work Together" became "How to Align"; year |
| Demand Generation vs Lead Generation: The Real Difference (2026) | Demand Generation vs Lead Generation: Which One You Need | 64 to 56 | "The Real Difference" became "Which One You Need"; year |
| ICP vs Buyer Persona: What's the Difference and Why You Need Both (2026) | ICP vs Buyer Persona: The Difference and Why You Need Both | 72 to 58 | "What's the" became "The"; year |

### Question Titles

Pattern: `[The exact question]? [The short answer or the method]`. One rewrite answered the question in the title itself: "Yes, and Here Is How".

| Before | After | Chars | What changed |
|---|---|---|---|
| Do Google Reviews Help SEO? The Ultimate Guide (2025 Edition) | Do Google Reviews Help SEO? Yes, and Here Is How (2026) | 61 to 55 | "The Ultimate Guide (2025 Edition)" became a direct answer |
| Do You Need an llms.txt File? Google Says No, and the Data Agrees (2026) | Do You Need an llms.txt File? Google Says No (2026) | 72 to 51 | "and the Data Agrees"; year kept |
| What Does a Product Marketing Manager Do? The 2026 Role Explained | What Does a Product Marketing Manager Do? The Role in 2026 | 65 to 58 | "The 2026 Role Explained" became "The Role in 2026" |
| What Does ChatGPT Stand For? The Full Meaning Explained (2026) | What Does ChatGPT Stand For? The Acronym Explained (2026) | 62 to 57 | "Full Meaning" became "Acronym"; year kept |

### Template and Checklist Titles

Pattern: `[Thing] Template: [N] [format] That [outcome]`. Counts already in these titles stayed, and three titles gained one: 4 Templates, 3 Fill-in-the-Blank Frameworks and 7-Stage.

| Before | After | Chars | What changed |
|---|---|---|---|
| Competitive Analysis Template: A Free Framework PMMs Actually Use (2026) | Competitive Analysis Template: A Free Framework PMMs Use | 72 to 56 | "Actually"; year |
| Customer Onboarding Template: A Step-by-Step Framework (Free, 2026) | Customer Onboarding Template: The Free 7-Stage Framework | 67 to 56 | "Step-by-Step" became "7-Stage"; "(Free, 2026)" |
| Customer Success Story Template: Copy It, Then Get It Approved (2026) | Customer Success Story Template: Copy It, Get It Approved | 69 to 57 | "Then"; year |
| Ecommerce SEO Checklist: Audit Your Store From Category to Cart (2026) | Ecommerce SEO Checklist: Audit Your Store, Category to Cart | 70 to 59 | "From"; year |
| Product Launch Email Sequence: Best Practices and Templates (2026) | Product Launch Email Sequence: 4 Templates That Convert | 66 to 55 | "Best Practices and Templates" became "4 Templates That Convert"; year |
| The Sales Enablement Checklist: 40+ Items PMMs Actually Ship (2026) | Sales Enablement Checklist: 40+ Items PMMs Actually Ship | 67 to 56 | Leading "The"; year |
| Value Proposition Template: Fill-in-the-Blank Frameworks That Work (2026) | Value Proposition Template: 3 Fill-in-the-Blank Frameworks | 73 to 58 | "That Work" became the count "3"; year |

### Numbered List and Examples Titles

Pattern: `[Keyword]: [N] [items]`, with the number moved behind the keyword unless the keyword phrase starts with the count.

| Before | After | Chars | What changed |
|---|---|---|---|
| Best AI Tools for Affiliate Marketing: 15+ Tools That Actually Work (2026) | Best AI Tools for Affiliate Marketing: 15 Picks for 2026 | 74 to 56 | "15+ Tools That Actually Work" became "15 Picks"; year kept |
| 7 Most Productive Ways to Increase Interactivity in Your Emails | Increase Interactivity in Your Emails: 7 Proven Tactics | 63 to 55 | "Most Productive Ways to"; count moved behind the keyword |
| 21 Product Marketing Interview Questions, With Strong Answers (2026) | 21 Product Marketing Interview Questions and Answers (2026) | 68 to 59 | "With Strong" became "and"; year kept |
| Competitive Analysis Examples: 5 Real Frameworks You Can Copy | Competitive Analysis Examples: 5 Frameworks You Can Copy | 61 to 56 | "Real" |
| Product Marketing OKRs: 15 Ready-to-Use Examples for PMM Teams (2026) | Product Marketing OKRs: 15 Ready-to-Use Examples (2026) | 69 to 55 | "for PMM Teams"; year kept |

### Framework and Playbook Titles

Pattern: `[Topic] Framework: The [N]-[Stage, Step or Phase] [Model]`. Named, counted structures replaced adjectives like "Practical" and "Full".

| Before | After | Chars | What changed |
|---|---|---|---|
| Brand Messaging Framework: The Full Structure and Matrix (2026) | Brand Messaging Framework: Five Layers, Matrix, Hierarchy | 63 to 57 | "The Full Structure" became "Five Layers" and "Hierarchy"; year |
| Campaign Naming Convention: A Four-Field System You Can Retrofit (2026) | Campaign Naming Convention: The Four-Field System (2026) | 71 to 56 | "You Can Retrofit"; year kept |
| Content Marketing Framework for B2B: Map Content to the Buyer Journey (2026) | Content Marketing Framework for B2B: Map the Buyer Journey | 76 to 58 | "Content to"; year |
| Go-to-Market Strategy for Startups: A Practical Framework (2026) | Go-to-Market Strategy for Startups: The 7-Step Framework | 64 to 56 | "A Practical" became "The 7-Step"; year |
| Marketing Strategy for New Product: The Complete Launch Playbook (2026) | Marketing Strategy for New Product: The Launch Playbook | 71 to 55 | "Complete"; year |
| The Product Marketing Framework I Use to Run the Whole Function (2026) | Product Marketing Framework: The 6 Stages I Use (2026) | 70 to 54 | Leading "The"; promise became "The 6 Stages I Use"; year kept |
| Product Sunset: A 90-Day Playbook for Sunsetting a Product (2026) | Product Sunset: A 90-Day Playbook and Comms Plan (2026) | 65 to 55 | "for Sunsetting a Product" became "and Comms Plan"; year kept |
| Rebranding Rollout Plan: The Countdown, the Systems List and the Comms Tiers (2026) | Rebranding Rollout Plan: The T-90 Countdown and Comms Tiers | 83 to 59 | "the Systems List"; "T-90" added; year |
| SaaS Demand Generation: A Playbook to Build Pipeline (Not Just Leads) | SaaS Demand Generation: Build Pipeline, Not Just Leads | 69 to 54 | "A Playbook to" and the brackets |

### Topic Guide Titles

Pattern: `[Topic]: [one specific promise]`, where the promise names what the reader gets, such as "Setup, Scorecard, 5 Ways It Dies".

| Before | After | Chars | What changed |
|---|---|---|---|
| AI and the Future of SEO: What Changes (and What Doesn't) in 2026 | AI and the Future of SEO: What Changes and What Doesn't | 65 to 55 | The brackets and "in 2026" |
| AI Overview Optimization: How to Get Cited in Google AI Overviews (2026) | AI Overview Optimization: How to Get Cited by Google (2026) | 72 to 59 | "in Google AI Overviews" became "by Google"; year kept |
| B2B Buyer Persona: How to Build One That Sales Actually Uses (2026) | B2B Buyer Persona: Build One Sales Actually Uses (2026) | 67 to 55 | "How to", "That"; year kept |
| The B2B Lead Generation Funnel: Stages, Metrics, and Fixes (2026) | B2B Lead Generation Funnel: Stages, Metrics, Fixes (2026) | 65 to 57 | Leading "The", "and"; year kept |
| B2B SaaS Pricing Psychology: Anchors That Survive a Buying Committee (2026) | B2B SaaS Pricing Psychology: Anchors for Buying Committees | 75 to 58 | "That Survive a" became "for"; year |
| Competitive Intelligence Analysis: How to Track and Outmaneuver Competitors | Competitive Intelligence Analysis: How to Track Competitors | 75 to 59 | "and Outmaneuver" |
| Customer Advisory Board: The Setup, the Scorecard, and 5 Ways It Dies (2026) | Customer Advisory Board: Setup, Scorecard, 5 Ways It Dies | 76 to 57 | "The", "the", "and"; year |
| LLM Optimization: How to Get Cited by ChatGPT, Perplexity, and Gemini (2026) | LLM Optimization: Get Cited by ChatGPT, Perplexity, Gemini | 76 to 58 | "How to", "and"; year |
| Product-Led Marketing: How to Market a Product That Sells Itself (2026) | Product-Led Marketing: How to Make a Product Sell Itself | 71 to 56 | "Market a Product That Sells" became "Make a Product Sell"; year |
| Product Positioning: How to Define Where Your Product Stands in the Market | Product Positioning: Framework, Statement, and Examples | 74 to 55 | Ten-word how-to became "Framework, Statement, and Examples" |
| Sales Enablement KPIs: The 12 Metrics That Actually Prove Impact (2026) | Sales Enablement KPIs: 12 Metrics That Move Revenue (2026) | 71 to 58 | "The", "Actually Prove Impact" became "Move Revenue"; year kept |
| Why an SEO Audit Is Important (and What It Catches Before It Costs You) | Why an SEO Audit Is Important (and What It Catches Early) | 71 to 57 | "Before It Costs You" became "Early" |
| How I Moved My Website from WordPress to Astro and Saved ₹12,000/Year | WordPress to Astro Migration: How I Cut Hosting to Zero | 69 to 55 | First-person story became the keyword; rupee figure dropped |

### Tool Page Titles

Pattern: `[Tool keyword]: Free [output] in [time]`. Five of the 8 tool pages moved "Free" out of the first word and swapped the pipe for a colon, which put the keyword first. The battlecard, buyer persona and campaign name generators kept "Free" first.

| Before | After | Chars | What changed |
|---|---|---|---|
| Free Sales Battlecard Generator \| Build a Competitive Battlecard in 2 Minutes | Free Sales Battlecard Generator \| Build One in 2 Minutes | 77 to 56 | "a Competitive Battlecard" became "One" |
| Free Buyer Persona Generator \| Build a B2B Persona in 2 Minutes | Free Buyer Persona Generator \| B2B Persona in 2 Minutes | 63 to 55 | "Build a" |
| Free Campaign Name and UTM Builder \| Four-Field Naming Convention | Free Campaign Name Generator and UTM Builder \| No Signup | 65 to 56 | "Generator" added; "Four-Field Naming Convention" became "No Signup" |
| Free Case Study Template \| Build a B2B Case Study in 10 Minutes | Case Study Template: Free B2B Case Study in 10 Minutes | 63 to 54 | "Free" moved behind the keyword; "Build a" |
| Free Go-to-Market Strategy Template \| Build a GTM Strategy in 10 Minutes | Go-to-Market Strategy Template: Free GTM One-Pager Builder | 72 to 58 | "Free" moved behind the keyword; promise rewritten |
| Free Product Launch Plan Template \| Build a Launch Plan in 5 Minutes | Product Launch Plan Template: Free One-Pager in 5 Minutes | 68 to 57 | "Free" moved behind the keyword; promise rewritten |
| Free Value Proposition Canvas Generator \| Build a VPC in 10 Minutes | Value Proposition Canvas Generator: Free Osterwalder Tool | 67 to 57 | "Free" moved behind the keyword; time promise cut |

### Year-Only Rewrites

These 18 titles, like the ABM pair at the top, changed nothing but the year. Each line shows the title that ships, with the character count before and after:

- What Is Customer Onboarding? Frameworks That Reduce Churn (64 to 57)
- What Is Voice of the Customer? Program, Methods & Examples (65 to 58)
- Customer Marketing vs Product Marketing: Who Owns What (61 to 54)
- Growth Marketing vs Performance Marketing: The Difference (64 to 57)
- Product Marketing vs Growth Marketing: The Real Difference (65 to 58)
- Top-Down vs Bottom-Up Market Sizing: When They Disagree (62 to 55)
- How Do I Check My SEO Ranking? 7 Free and Paid Methods (61 to 54)
- Go-To-Market Strategy Template: A Step-by-Step Framework (65 to 56)
- Marketing Automation Workflows: 12 Ready-to-Use Templates (66 to 57)
- Mobile SEO Checklist: 15 Fixes to Win Mobile-First Rankings (66 to 59)
- Product Launch Checklist: 50+ Items for a Launch That Lands (66 to 59)
- Product-Led Growth Examples: 10 Companies That Nailed PLG (65 to 57)
- Marketing Automation Strategy: A Step-by-Step Framework (64 to 55)
- SaaS Product Marketing Strategy: The Complete PMM Playbook (65 to 58)
- Sales Enablement Strategy: A PMM's Build-Order Framework (63 to 56)
- B2B Customer Onboarding Best Practices That Drive Retention (66 to 59)
- Free AI Tools for Marketing: The Only List You Actually Need (67 to 60)
- Product Marketing Career Path: Levels, Salary, Timeline (62 to 55)

## Title Tag Examples for Homepages, Product and Local Pages

The rewrite set holds no product or local pages, because this site has none, and its blog category archives are noindexed with short titles in the form "[Category] Articles | Swapnil Biswas". Here is what it does have, then the patterns Google's guidance points to for the rest.

The homepage title is "Swapnil Biswas: AI, Product & Digital Growth Marketer", at 53 characters: the name first, then what I do. My name is also the query behind this site's top-three clicks: over a 16-month Search Console window, [35 of the 36 clicks in the top three positions](/blog/seo-without-link-building/) came from it, out of 186 clicks in total.

Utility pages follow "About | Swapnil Biswas" and "Contact | Swapnil Biswas": the page name, a pipe, then the brand. Google's title link documentation suggests "including just your site name at the beginning or end of each `<title>` element, separated from the rest of the text with a delimiter such as a hyphen, colon, or pipe", and warns against vague descriptors like "Home" for a home page.

| Page type | Starting pattern | Filled-in example | Source of the pattern |
|---|---|---|---|
| Homepage | `[Brand]: [what you do, for whom]` | ExampleSocialSite, a place for people to meet and mingle | Google's title link documentation |
| Sign-up or account page | `[Brand]: [the action]` | ExampleSocialSite: Sign up for a new account. | Google's title link documentation |
| Product page | `[Product name] [defining attribute] - [Brand]` | Merino Trail Socks, Cushioned Heel - [Brand] | The keyword-first habit from the 87 rewrites |
| Category page | `[Category] for [use or buyer] - [Brand]` | Running Shoes for Wide Feet - [Brand] | Google warns that titling every page "Cheap products for sale" makes pages impossible to tell apart |
| Local service page | `[Service] in [City] - [Business name]` | Emergency Plumber in Austin, TX - [Business name] | The keyword-first habit, with the city as part of the keyword |

These patterns come from Google's guidance and from the rewrites above. The product, category and local examples are illustrations, not pages I run, and I have not measured the patterns on pages of these types. Local pages also need more than a title, and my [local SEO checklist](/blog/local-seo-checklist/) puts titles at step 15 of 20.

## Meta Title and Description Examples

"Meta title" is the everyday name for the HTML `<title>` element. Google calls the headline it prints a title link, and its documentation lists nine sources it draws on: the `<title>` element, the main visual title on the page, heading elements such as `<h1>`, `og:title` meta tags, other large and prominent text, other text on the page, anchor text on the page, text in links pointing to the page, and `WebSite` structured data. Your `<title>` element is one input among nine, which is why Google can show a different headline from the one you wrote.

Descriptions work the same way. Google's [snippet documentation](https://developers.google.com/search/docs/appearance/snippet) says snippets are "primarily created from the page content itself", that Google may use the meta description "if we think it gives users a more accurate description than would be possible purely from the on-page content", and that "There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width."

I hold descriptions to a 140-165 character band with the same kind of check, and every post description on the site sits inside it. Four title and description pairs from the site:

| Title (chars) | Meta description (chars) |
|---|---|
| How to Conduct a Technical SEO Site Audit: The 8-Step Guide (59) | Run a technical SEO site audit in 8 steps, from crawlability to Core Web Vitals. Free tools, real benchmarks, and the exact fix for every issue you find. (153) |
| Top-Down vs Bottom-Up Market Sizing: When They Disagree (55) | Top-down vs bottom-up market sizing run on one real market, plus a reconciliation worksheet that names which input broke when the two numbers disagree. (151) |
| How Much Does an SEO Audit Cost? Real 2026 Pricing Tiers (56) | How much does an SEO audit cost? Real prices by audit type and hourly rate, technical versus full, one-time versus retainer, and how to check a quote. (150) |
| What Is YMYL? Google's 'Your Money or Your Life' Explained (58) | YMYL (Your Money or Your Life) is the content Google holds to its highest quality bar. Here is what YMYL means, the 4 categories, and how to optimize for it. (157) |

In each pair the title makes one promise and the description repeats the keyword early, then lists what the page contains. Google's documentation makes a similar point with a product example, contrasting the bare description "Mechanical pencil" with one that names the self-sharpening feature, the 2B lead, two colors and a free-shipping threshold.

## How Long Should an SEO Title Be?

60 characters or fewer is the cap I hold every title on this site to. Google sets no maximum length for a title element and truncates the title link to fit the device width, so 60 is a house rule rather than a Google number, and whether length tracks rankings here is measured in [my H1 and title tag analysis](/blog/h1-tag-seo/).

## The Cut Order for Rewriting an SEO Title

<img src="/assets/blog/seo-title-examples/title-cut-order.webp" alt="Six-step cut order for an over-long SEO title: keep the keyword, drop the year, delete filler words, unwrap the brackets, swap vague words for a count, rewrite the promise" title="The cut order for an over-long SEO title" width="1200" height="634" loading="lazy" decoding="async" />

Run these in order and stop as soon as the title fits:

1. Keep the keyword phrase, and put it first. If the page targets a [long-tail keyword](/blog/seo-long-tail-keywords/), keep the whole phrase together rather than trimming it back to the head term.
2. Drop the year, unless the page is refreshed every year and the title still fits with it.
3. Delete filler: "Actually", "Complete", "Proven", "Ultimate", and a "Definition" that a "What Is" question already promises.
4. Unwrap or cut bracketed phrases: "(Not Just Leads)" became ", Not Just Leads".
5. Replace vague method words with the real count: "A Step-by-Step Playbook" became "A 6-Phase Playbook".
6. If it still does not fit, rewrite the promise shorter instead of truncating mid-phrase. "Which One Your Next Launch Actually Needs" became "The Per-Launch Decision".

Google's title link documentation also names what to avoid: keyword stuffing, for which its example is "Foobar, foo bar, foobars, foo bars", and repeated boilerplate text across many pages.

I would not expect a title edit alone to move much traffic on a small site. Fix over-long titles because truncation hides the promise, and treat them as one line of a wider on-page pass like the one in my [SEO audit checklist](/blog/seo-audit-checklist/).

## Run the Cut Order on Your Longest Title

Most of the 95 SEO title examples above follow one habit: the keyword phrase stayed and the filler around it went. Run the awk audit, or sort your titles by length in a spreadsheet, take the longest one, and apply the six cuts in order until it fits.
