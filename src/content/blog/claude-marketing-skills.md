---
title: "Claude Marketing Skills: 14 Vetted Picks by Marketing Job"
description: "Claude marketing skills sorted by job, from Corey Haines' 50-skill library to Anthropic's own, each with its maintainer, license, install steps and one caveat."
publishDate: 2026-09-26
category: [AI, Marketing]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "What are the best Claude skills for marketing?"
    a: "For broad copy, CRO and SEO work, start with Corey Haines' marketingskills library, which holds 50 MIT-licensed skills. Add Anthropic's marketing plugin for campaign plans and brand reviews, Claude SEO or GEO-SEO Claude for site audits, and Anthropic's pptx and docx skills for decks and documents."
  - q: "How do I install marketing skills in Claude?"
    a: "In Claude Code, run npx skills add with the repo name and the skill you want, or add the repo as a plugin marketplace with /plugin marketplace add and then /plugin install. In the Claude app, zip the skill folder and upload it under Customize > Skills, with code execution and file creation turned on."
  - q: "Do Claude marketing skills work in the Claude app or only in Claude Code?"
    a: "Both, with limits. The Claude app accepts a zipped skill folder only if its SKILL.md frontmatter sticks to six fields (name, description, license, compatibility, metadata and allowed-tools), per the Claude Code docs, and it has Anthropic's Word, Excel, PowerPoint and PDF skills built in. Audit skills that install a Python environment or a browser, such as Claude SEO, give install steps for Claude Code only."
  - q: "Are Claude skills free?"
    a: "Anthropic's help center lists skills on the Free, Pro, Max, Team and Enterprise plans, with code execution enabled. Most skills in this guide are MIT or Apache 2.0 licensed. Anthropic's document skills are source-available under a proprietary license, and a few third-party skills call paid APIs, such as Enception's."
  - q: "Is Claude Code for marketers or only for developers?"
    a: "It works for marketers. Installing a skill takes one npx skills add command or one folder copy, and every skill's instructions are a readable SKILL.md file, though audit skills such as Claude SEO also set up Python tooling and bundle scripts you should read before running them. I am a product marketer, and I built this site with Claude Code, running it inside VS Code on Windows 11."
---

Pick Claude marketing skills by the job first, because a copy library and an SEO audit skill are judged on different things:

| Marketing job | Skill type that fits | What a good one does |
|---|---|---|
| Copy and campaigns | A library of task skills that share one product-context file | Reads your positioning before it writes a line of copy |
| SEO and AI search | An audit skill that bundles its own scripts | Fetches and parses your pages instead of answering from memory |
| Brand and design | Design-direction skills, plus a brand skill holding your colors and fonts | Pushes landing pages and visuals away from template defaults |
| Documents and decks | File-format skills with a theme skill on top | Produces real .pptx, .docx and .xlsx files you can edit |
| Building your own | A skill-authoring skill that runs evals | Tests whether your skill triggers and whether it helps |

Page one for this search mixes GitHub repos with vendor listicles, and my view is that stars and roundups show what is popular, while the facts to check before installing are who maintains a skill, what license it ships under and what it will run on your machine. Each of the 14 picks below, or its section intro, lists those facts plus the install command, the job it fits and one caveat, all checked on the pick's own repo or docs page on 26 September 2026.

## The Best Claude Skills for Marketing at a Glance

1. **[Marketing Skills (Corey Haines)](https://github.com/coreyhaines31/marketingskills)** - 50 skills for copy, CRO, SEO, email, ads and launches, all reading one product-marketing context file.
2. **[Marketing plugin (Anthropic)](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing)** - content drafts, campaign plans, brand reviews, competitive briefs and performance reports, built primarily for Cowork.
3. **[claude-marketing (Rebecca Rae Barton)](https://github.com/thatrebeccarae/claude-marketing)** - 56 skills with packs for Google, Meta and Microsoft Ads, Klaviyo, Shopify and GA4.
4. **[OpenClaudia Skills](https://github.com/OpenClaudia/openclaudia-skills)** - 78 skills across SEO, content, email, ads and analytics, some of which send and publish as well as draft.
5. **[Claude SEO (Agrici Daniel)](https://github.com/AgriciDaniel/claude-seo)** - technical, content, schema and GEO audits run by 26 sub-skills and 19 agents.
6. **[GEO-SEO Claude (Zubair Trabzada)](https://github.com/zubair-trabzada/geo-seo-claude)** - AI-search audits: citability scoring, AI crawler checks, llms.txt and PDF reports.
7. **[brand-guidelines (Anthropic)](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines)** - applies a fixed palette and type system to anything Claude makes.
8. **[frontend-design (Anthropic)](https://github.com/anthropics/skills/tree/main/skills/frontend-design)** - aesthetic direction and a quality floor for new landing pages and UI.
9. **[Taste Skill (Leon Lin)](https://github.com/Leonxlnx/taste-skill)** - anti-slop frontend rules plus image-generation skills for reference boards.
10. **[Emil Kowalski's skills](https://github.com/emilkowalski/skills)** - animation and interface-polish rules drawn from his work at Vercel and Linear.
11. **[pptx, docx, xlsx and pdf (Anthropic)](https://github.com/anthropics/skills)** - create and edit real Office files and PDFs.
12. **[theme-factory (Anthropic)](https://github.com/anthropics/skills/tree/main/skills/theme-factory)** - 10 preset color and font themes for decks, docs and landing pages.
13. **[doc-coauthoring (Anthropic)](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring)** - a three-stage workflow for proposals, specs and decision docs.
14. **[skill-creator (Anthropic)](https://github.com/anthropics/skills/tree/main/skills/skill-creator)** - builds new skills and runs evals on whether they trigger and help.

The facts behind each pick, as of 26 September 2026:

| # | Pick | Maintainer | License | Last commit | Claude app route |
|---|---|---|---|---|---|
| 1 | Marketing Skills | Corey Haines | MIT | 5 Sep 2026 | ZIP upload per skill |
| 2 | Marketing plugin | Anthropic | Apache 2.0 | 21 Sep 2026 | Cowork plugin directory |
| 3 | claude-marketing | Rebecca Rae Barton | MIT | 14 May 2026 | ZIP upload after deleting origin, author and author_url from frontmatter |
| 4 | OpenClaudia Skills | Quanlai Li and contributors | MIT | 18 Sep 2026 | ZIP upload per skill (6 need frontmatter edits) |
| 5 | Claude SEO | Agrici Daniel | MIT | 23 Sep 2026 | Install steps cover Claude Code only |
| 6 | GEO-SEO Claude | Zubair Trabzada | MIT | 19 Sep 2026 (last non-bot commit) | Install steps cover Claude Code only |
| 7 | brand-guidelines | Anthropic | Apache 2.0 | 20 Apr 2026 | Example skill toggle |
| 8 | frontend-design | Anthropic | Apache 2.0 | 3 Sep 2026 | Example skill toggle |
| 9 | Taste Skill | Leon Lin | MIT | 23 Sep 2026 | ZIP upload per skill |
| 10 | Emil Kowalski's skills | Emil Kowalski | MIT | 23 Sep 2026 | ZIP upload per skill (3 need frontmatter edits) |
| 11 | pptx, docx, xlsx, pdf | Anthropic | Proprietary, source-available | 17 Jul 2026 (pdf: 6 Feb 2026) | Built in |
| 12 | theme-factory | Anthropic | Apache 2.0 | 20 Apr 2026 | Example skill toggle |
| 13 | doc-coauthoring | Anthropic | None in its folder | 4 Dec 2025 | Example skill toggle |
| 14 | skill-creator | Anthropic | Apache 2.0 | 20 Apr 2026 | Example skill toggle |

For pick 2 and Anthropic's skills, the date is the last commit to that plugin or skill folder, and for pick 6 it skips a bot that commits a star-history chart update every day. ZIP upload is the help center's route for a skill folder, but claude.ai rejects any `SKILL.md` whose frontmatter uses fields beyond name, description, license, compatibility, metadata and allowed-tools ([Claude Code docs](https://code.claude.com/docs/en/skills#using-skill-frontmatter-outside-claude-code)). On 26 September 2026, skills in picks 2 through 6 and pick 10 carried such fields, while Corey Haines' library, Taste Skill and the anthropics/skills repo used only allowed ones.

## What Are Claude Marketing Skills?

Claude marketing skills are `SKILL.md` instruction folders that teach Claude a marketing job such as copywriting, an SEO audit or a campaign plan. Claude keeps each skill's name and description in context and loads the full instructions only when the skill is invoked, by you or by Claude when a task matches; bundled scripts are run, not loaded into context, per the [Claude Code skills documentation](https://code.claude.com/docs/en/skills#control-who-invokes-a-skill).

The file anatomy and how to write one are covered in [what a Claude skill is and how to build one](/blog/what-is-a-claude-skill/). If you are still choosing a chat assistant rather than extending one, start with [free AI tools for marketing](/blog/free-ai-tools-for-marketing/) instead.

## Copy and Campaign Skills

This is where the big libraries sit. Pick one of them as your base rather than installing all four, because their skills overlap on copy, email and SEO.

### 1. Marketing Skills by Corey Haines

Corey Haines' library holds 50 skills covering CRO, copywriting, cold email, SEO, AI SEO, paid ads, pricing, launches and sales enablement. Its README calls `product-marketing` the foundation: every other skill checks it first to understand your product, audience and positioning.

- Maintainer: Corey Haines, whose agency Conversion Factory is linked from the README. The README says disclosed Verified Partners fund the work and do not influence what the core skills recommend.
- Claude Code: `npx skills add coreyhaines31/marketingskills --skill copywriting cro -a claude-code`, or `/plugin marketplace add coreyhaines31/marketingskills` then `/plugin install marketing-skills`.
- Start with: `product-marketing`, then `copywriting`, `copy-editing` and `cro`.
- Caveat: version 2.0 renamed 17 skills and merged `page-cro` and `form-cro` into `cro`, so a v1 install leaves stale folders beside the new ones. The README includes the cleanup command.

### 2. Anthropic's Marketing Plugin

Anthropic's marketing plugin drafts blog posts, social posts, newsletters, landing pages and press releases, and it builds campaign briefs, brand reviews, competitive briefs, performance reports, SEO audits and email sequences. It is built primarily for Cowork and also works in Claude Code, with connectors listed for Slack, Canva, Figma, HubSpot, Amplitude, Notion, Ahrefs, Similarweb, Klaviyo and Supermetrics. Since 16 September 2026, Anthropic has been merging Cowork into the Claude app, starting with Pro and Max plans ([Claude Cowork and chat are now one Claude](https://claude.com/blog/cowork-is-now-claude)).

- Claude Code: `claude plugin marketplace add anthropics/knowledge-work-plugins` then `claude plugin install marketing@knowledge-work-plugins`.
- Start with: configure your brand voice, style guide and personas in the plugin's local settings first, so `brand-review` checks against your rules instead of a generic review.
- Caveat: the plugin README lists five skills and seven commands, but on 26 September 2026 the `skills` folder held eight folders: one per command plus `content-creation`, and none for the other four README skills. Read the folder, not the README.

### 3. claude-marketing by Rebecca Rae Barton

The claude-marketing README counts 56 skills, and each ships three files: `SKILL.md` for frameworks, `REFERENCE.md` for benchmarks and API schemas, and `EXAMPLES.md` for worked prompts. Six packs group them, including a Paid Media Pack for Google, Meta and Microsoft Ads and a DTC pack for Klaviyo, Shopify, GA4 and Looker Studio.

- Claude Code: `git clone https://github.com/thatrebeccarae/claude-marketing.git`, then copy one skill with `cp -r claude-marketing/skills/google-ads ~/.claude/skills/`.
- Fits: paid media and e-commerce marketers who run Google Ads, Meta Ads or Klaviyo accounts.
- Caveat: the last public commit was over four months before this check, and it reads "Sync from upstream". Check the dates in any `REFERENCE.md` before trusting a benchmark or an API limit.

### 4. OpenClaudia Skills

The OpenClaudia README counts 78 skills, covering SEO, content, email, ads, analytics and growth, installed together with `npx openclaudia install --all` or one at a time.

- Claude Code: `npx skills add OpenClaudia/openclaudia-skills --skill seo-audit`.
- Claude app: six skills (ai-image-gen, brand-research, i18n, organize-skills, podcast-edit and stock-images) carry `argument-hint` or `user_invocable` in their frontmatter, which the upload rejects.
- Caveat: several API-powered skills need your own third-party keys or accounts, including a Semrush API key, a prepaid Glasser account and an Enception API key (paid, with a free tier) for AI-citation reports, and some act rather than draft. The README's own example sends an email sequence through Resend and posts to Discord. Read each `SKILL.md` before you give it credentials.

## SEO and AI Search Skills

Audit skills automate the technical-audit part of an [AI SEO strategy](/blog/ai-seo-strategy/), and a dedicated one earns its place when you run audits often. If you only need one now and then, pick 1 already carries `seo-audit`, `ai-seo`, `schema` and `programmatic-seo`, and pick 2 has an `seo-audit` skill too.

### 5. Claude SEO by Agrici Daniel

Claude SEO runs 26 sub-skills and 19 specialist agents across technical SEO, E-E-A-T, Schema.org markup, GEO, local, e-commerce and international SEO. `/seo audit <url>` runs a full site audit, and `/seo content-brief <topic>` writes a brief with target keywords, an outline and internal links.

- Maintainer: Agrici Daniel. The README describes the project as having a single maintainer.
- Claude Code: `/plugin marketplace add AgriciDaniel/claude-seo`, then `/plugin install claude-seo@agricidaniel-claude-seo`, then `/seo setup`.
- Caveat: `/seo setup` creates an isolated Python environment and installs Playwright Chromium before the first audit. Early-access features sit in a membership-only community mirror, while the public repo gets the MIT releases.

### 6. GEO-SEO Claude by Zubair Trabzada

GEO-SEO Claude puts AI search first. `/geo audit` runs a full GEO and SEO audit with parallel subagents, `/geo citability` scores content for AI citation readiness, `/geo crawlers` checks robots.txt for AI crawlers, and `/geo report-pdf` builds a PDF report with charts.

- Claude Code: `git clone https://github.com/zubair-trabzada/geo-seo-claude.git`, then `cd geo-seo-claude` and `./install.sh` (Python 3.8 or later; on Windows, Git Bash and `install-win.sh`).
- Caveat: the headline one-command install pipes a remote script straight into bash. Use the manual clone route so you can read `install.sh` before it runs.

If the citation side is new to you, my guide to [getting cited by ChatGPT, Perplexity and Gemini](/blog/llm-optimization/) explains what these AI-search audits are scoring.

## Brand and Design Skills for Landing Pages

Picks 7, 8 and 11 through 14 all come from Anthropic's skills repo. In Claude Code, add it with `/plugin marketplace add anthropics/skills` and install `example-skills@anthropic-agent-skills`, which brings 12 skills, 7 of them outside this list. To add only the ones you want, run `npx skills add anthropics/skills --skill brand-guidelines --skill frontend-design -a claude-code`. In the Claude app, the [help center](https://support.claude.com/en/articles/12512180-use-skills-in-claude) lets Free, Pro, Max and Team users toggle example skills on under Customize > Skills, and Enterprise users once an owner enables skills.

### 7. brand-guidelines (Anthropic)

This skill applies a fixed palette and type system to anything Claude produces. Out of the box it holds Anthropic's own brand: dark `#141413`, an orange accent `#d97757`, Poppins for headings and Lora for body text.

- Fits: anyone producing decks, one-pagers or social graphics in a house style.
- Caveat: it is a template. Fork it and swap in your colors, fonts and logo rules, or it will style your work in Anthropic's colors. If your rules live only in a PDF, write [brand guidelines](/blog/what-are-brand-guidelines/) a skill can read first.

### 8. frontend-design (Anthropic)

Its own description promises guidance on aesthetic direction, typography and choices that "don't read as templated defaults". It also sets a quality floor: responsive down to mobile, visible keyboard focus and reduced motion respected.

- Fits: marketers who ship their own landing pages and campaign microsites.
- Caveat: its `SKILL.md` says nothing about search indexing. Check separately how the finished page renders for Google, which is where [a vibe-coded site can fail to rank](/blog/vibe-coded-website-seo/).

### 9. Taste Skill by Leon Lin

Taste Skill pushes AI-built interfaces toward stronger layout, typography, motion and spacing. It also includes image-generation skills for web, mobile and brand-kit reference boards, which you run with ChatGPT Images or a similar generator and then hand to Claude Code to build from.

- Maintainer: Leon Lin, with sponsors listed in the README.
- Claude Code: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`.
- Caveat: install by the `name:` field in the frontmatter, not the folder name. The default `design-taste-frontend` is now v2, which the README labels experimental and a substantial rewrite; v1 stays available as `design-taste-frontend-v1`.

### 10. Emil Kowalski's Skills

Emil Kowalski's set covers animation and interface polish: `emil-design-eng`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-vocabulary`, `apple-design` and `pick-ui-library`, among others. The README says they draw on his years at companies like Vercel and Linear.

- Claude Code: `npx skills@latest add emilkowalski/skills`.
- Claude app: `review-animations`, `pick-ui-library` and `prototype` set `disable-model-invocation` in their frontmatter, which the upload rejects.
- Caveat: the set mixes web skills with native ones such as `write-swift` and `animate-expo`. Run in a terminal, the CLI asks which to install, so tick only the web ones; run from inside a Claude Code session or with `-y`, it installs all 13.

## Document and Deck Skills

### 11. pptx, docx, xlsx and pdf (Anthropic)

These four are the skills behind Claude's file creation. They create, read and edit PowerPoint decks (including .potx templates and speaker notes), Word documents with tracked changes, Excel files with formulas and charts, and PDFs you need to merge, split, fill or OCR.

- Claude Code: `/plugin install document-skills@anthropic-agent-skills` after adding the `anthropics/skills` marketplace.
- Claude app: built in. The help center says that with Code execution and file creation on, Claude uses the Excel, Word, PowerPoint and PDF skills automatically when a request needs them.
- Caveat: the proprietary license bars derivative works and redistribution, so you cannot fork the pptx skill into a company deck skill. Put your deck rules in a separate skill of your own.

### 12. theme-factory (Anthropic)

It offers 10 preset color and font themes, Ocean Depths and Arctic Frost among them, shown in a `theme-showcase.pdf`, and applies the chosen one to slides, docs, reports or HTML landing pages. It can also generate a new theme when none fit.

- Fits: pairing with pick 11 so a deck comes out styled instead of default.
- Caveat: the workflow shows the showcase and waits for you to pick, so it runs as an interactive step rather than a batch styler.

### 13. doc-coauthoring (Anthropic)

It guides you through a three-stage workflow for proposals, technical specs and decision docs: context gathering, refinement and structure, then reader testing. For a marketer that maps to launch briefs, positioning docs and campaign proposals.

- Caveat: its folder holds only `SKILL.md`, with no license file, and the repo README says only that "many" of its skills are Apache 2.0. Check Anthropic's terms before you redistribute an edited copy.

## Build Your Own Claude Marketing Skills

Libraries cover the generic jobs. Your positioning, ICP, voice rules and approval steps are the part no public repo can know, and that is where writing your own skill pays off.

### 14. skill-creator (Anthropic)

skill-creator builds new skills, edits existing ones and measures them. Per the [Claude Code docs on running evals with skill-creator](https://code.claude.com/docs/en/skills#run-evals-with-skill-creator), it stores test prompts, runs each case in its own subagent, grades assertions, benchmarks with-skill against without-skill, runs a blind A/B between two versions, and proposes description edits so the skill triggers on the right requests.

- Claude Code: `/plugin install skill-creator@claude-plugins-official`, or through `example-skills` from `anthropics/skills`.
- Caveat: the benchmark records token count and duration next to pass rate, so budget usage before a full eval loop.

For a public example of a marketing skill worth building, Emily Kramer of MKT1 [tells marketers to build a /marketing-strategy skill](https://newsletter.mkt1.co/p/build-marketing-strategy-skill-in-claude-code): one central file that collects the outputs of 7 strategy exercises, from ICP prioritization and positioning to revenue levers and big-bet campaigns. If you already use custom slash commands, [my guide to Claude Code commands](/blog/claude-code-commands/) shows where those files live.

## How to Install Claude Code Marketing Skills

1. Pick the scope. The [Claude Code docs on where skills live](https://code.claude.com/docs/en/skills#where-skills-live) list `~/.claude/skills/` for all your projects on one machine and `.claude/skills/` for one repository, which you commit so your team gets it too. Personal skills do not load in Cowork or cloud sessions.
2. Install with the CLI, one skill at a time. The [vercel-labs/skills CLI](https://github.com/vercel-labs/skills) installs from any GitHub repo: `npx skills add <owner/repo> --skill <name>`, with `-g` for the personal folder. Naming each skill keeps the rest of a 50-skill library out of the skill listing, which costs context on every turn. Pass `-a claude-code` when you run it from inside a Claude Code session; Corey Haines' README warns that the non-interactive mode may otherwise install only to `.agents/skills/`, which Claude Code does not read.
3. Or install a plugin: run `/plugin marketplace add <owner/repo>`, then `/plugin install <plugin>@<marketplace>`. Plugin skills run namespaced as `/plugin-name:skill-name`.
4. Or copy the folder: clone the repo and copy one skill folder into either skills directory.
5. In the Claude app, upload a ZIP. Turn on Code execution and file creation, go to Customize > Skills, click "+", then "Create skill" and "Upload a skill". Remove any frontmatter field outside the six listed above before you zip the folder.
6. Keep them current: `npx skills update` updates everything the CLI installed, and `npx skills update -p` limits it to project skills.

## How to Vet a Claude Skill Before You Install It

| Check | Where to look | What should make you pause |
|---|---|---|
| License | LICENSE file, or the `license:` line in the frontmatter | No license in the skill's folder, or proprietary terms |
| Maintainer | README author section and GitHub profile | A single maintainer, or early features held back for members |
| Last commit | Commit history for the skill's own folder, skipping bot commits | Months without a human commit on a skill that cites API limits or benchmarks |
| What it runs | `SKILL.md`, the `scripts/` folder and any `allowed-tools` line | Scripts that send, post or publish, or broad pre-approved tools |
| Install method | The README's install section, plus the frontmatter if you will upload to the Claude app | A one-liner that pipes a remote script into bash, or fields the Claude app upload rejects |
| Context cost | `/skill-doctor` in Claude Code | Skills that cost context on every turn and rarely get used |

<img src="/assets/blog/claude-marketing-skills/vetting-findings.webp" alt="What the six vetting checks found across the 14 picks on 26 September 2026: proprietary or missing licenses in picks 11 and 13, a single maintainer in pick 5, stale folders in picks 3 and 13, scripts that send and post in pick 4, a curl-to-bash install in pick 6 and rejected frontmatter fields in picks 2 to 6 and 10, and 50 to 78 skill libraries in picks 1, 3 and 4" title="What the Six Checks Found in These 14 Picks" width="1200" height="686" loading="lazy" decoding="async" />

Anthropic's docs back the fourth and sixth checks. A skill's `allowed-tools` field grants listed tools without per-use approval for the turn that invokes it, and the docs tell you to [review the allowed-tools of skills checked into a repository](https://code.claude.com/docs/en/skills#pre-approve-tools-for-a-skill) before you run Claude Code there. The docs also say every skill in the listing [adds to your context on every turn](https://code.claude.com/docs/en/skills#find-unused-skills) whether or not Claude uses it, and `/skill-doctor` (Claude Code v2.1.252 or later) shows what each skill costs and how often it gets used.

## Which of These Skills Are in My Setup

I build this site with Claude Code, the same way I [moved it off WordPress to Astro](/blog/wordpress-to-astro-netlify-migration/). Of the 14 picks, Taste Skill, seven of Emil Kowalski's skills and skill-creator are installed in that setup; the marketing libraries in this guide are vetted from their repos and docs, not from my own installs.

## Install the Skill for Your Biggest Job First

The Claude marketing skills worth installing are the ones whose maintainer, license and scripts you have read. Pick the job that takes most of your week and install the one skill for it by name. Then read its `SKILL.md` before the first run.
