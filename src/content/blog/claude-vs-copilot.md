---
title: "Claude vs Copilot: Claude Now Runs Inside Both Copilots"
description: "Claude vs Copilot, from vendor pages read on 31 October 2026: Claude now runs inside both Copilots, so compare three routes by price, who switches it on and fit."
publishDate: 2026-10-31
category: [AI, Tools]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "Is Claude better than Copilot?"
    a: "Neither wins outright: Claude models now run inside both Microsoft Copilot and GitHub Copilot. Pick Claude's own app and Claude Code for Anthropic's full feature set on your own plan, Microsoft Copilot if your employer licenses it and you need answers grounded in Microsoft 365 data, and GitHub Copilot if your code lives on GitHub."
  - q: "Does Copilot use Claude?"
    a: "Yes, both Copilots offer Claude models. Microsoft lists Claude in licensed experiences such as Researcher and Copilot in the Microsoft 365 apps, and GitHub's docs list 11 Claude models, with Opus and Fable from Copilot Pro+ up, as of 31 October 2026."
  - q: "Can you use Claude inside Microsoft Copilot?"
    a: "Yes, with a Microsoft Copilot license in a tenant where Anthropic models are switched on. Outside the EU, EFTA and UK they are on by default for most commercial customers; inside those regions an AI Administrator or Global Administrator has to opt in. Users can then select Claude in Researcher or Edit with Copilot."
  - q: "Claude vs GitHub Copilot: which is better for coding?"
    a: "It depends where the work starts. Claude Code works in your project folder from a terminal, IDE, desktop app or browser and comes with any paid Claude plan. GitHub Copilot works across GitHub and your editor; its Pro plan lists Claude Sonnet and Haiku models, and Opus starts at Pro+."
  - q: "Is Claude cheaper than Copilot?"
    a: "For picking a Claude model yourself, GitHub Copilot Pro at $10 a month costs less than Claude Pro at $20, but Pro gets no Opus. Microsoft's Copilot Business add-on is $18 per user a month on a first-year promotion (list $21) and needs an eligible Microsoft 365 Business plan, as of 31 October 2026."
---

"Microsoft enables Anthropic models on by default for most customers in commercial cloud (excluding EU/EFTA and UK)," reads Microsoft's [Learn page on Anthropic models](https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor), last updated 18 September 2026 and read on 31 October 2026, and it names Microsoft Copilot, Researcher, Copilot Studio and Copilot in the Microsoft 365 apps. With 11 more Claude models listed in GitHub Copilot's [supported-models reference](https://docs.github.com/en/copilot/reference/ai-models/supported-models), Claude vs Copilot means picking one of three routes to Claude: Anthropic's own app and Claude Code, Microsoft Copilot at work, or GitHub Copilot.

My advice is to start from the subscription you already have, because four things change from one route to the next: who pays, who has to switch Claude on, what Claude can see once it is on, and which agent does the work. Every row below comes from Anthropic's, Microsoft's or GitHub's own pages as read on 31 October 2026, and all three change their prices and model lists often, so check again before you buy.

Routes to Claude at a glance, as of 31 October 2026:

| Route | Entry price | Claude models | Who switches Claude on | What Claude can see | Agent |
|---|---|---|---|---|---|
| Claude app and Claude Code | Free $0; Pro $20 a month ($17 billed annually) for Claude Code | Sonnet, Haiku on Free; Opus from Pro | You | Connected apps; Excel, Word, PowerPoint on paid plans; your project folder | Claude Code |
| Microsoft Copilot | Copilot Business add-on $18 per user a month, first-year promotion (list $21), on an eligible Microsoft 365 Business plan | Opus 5.5, Sonnet 5.5; Fable-class models through admin settings | Your Microsoft 365 admin (regional defaults below) | Work files, meetings and chats through Work IQ | Researcher, Edit with Copilot, Copilot Cowork, Copilot Studio agents |
| GitHub Copilot | Pro $10 (Sonnet, Haiku); Pro+ $39 (adds Opus, Fable) | 11 Claude models, by plan | Your plan tier; an owner on Business and Enterprise | Your repository, issues and pull requests | Agent mode; Claude coding agent (preview) |

Sources: [Claude pricing](https://claude.com/pricing), [Claude Code docs](https://code.claude.com/docs/en/overview), [Microsoft Copilot pricing](https://www.microsoft.com/en-us/microsoft-365/copilot/pricing), the [Microsoft Copilot Blog of 30 September 2026](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-openais-gpt-6-1-sol-and-claude-sonnet-5-5-in-microsoft-copilot/4560801), [GitHub Copilot plans](https://github.com/features/copilot/plans) and [GitHub's third-party agent docs](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents). For every Claude plan from Free to Enterprise, with usage multiples and API credits, see [my guide to the Claude plans](/blog/claude-plans/).

## Is Claude Better Than Copilot?

Neither is better across the board: Claude models now run inside Microsoft Copilot and GitHub Copilot, so the choice is which route to Claude fits your work. Anthropic's own app and Claude Code give you every Claude feature on a plan you control; Microsoft Copilot puts Claude next to your organization's mail, meetings and files; GitHub Copilot puts Claude next to your repositories.

Everything I say about the two Copilots comes from Microsoft's and GitHub's documentation, and nothing here is a benchmark or a quality score. If you are weighing Claude against OpenAI's assistant instead, my [Claude vs ChatGPT comparison for marketing work](/blog/claude-vs-chatgpt/) runs that exercise job by job.

<img src="/assets/blog/claude-vs-copilot/three-routes.webp" alt="Three cards comparing routes to Claude as of 31 October 2026: Claude app and Claude Code at Free $0 or Pro $20 a month, switched on by you, seeing connectors, Excel, Word and PowerPoint on paid plans and your project folder, with Claude Code as the agent; Claude in Microsoft Copilot through a Copilot license such as $18 promotional or $21 list per user a month, switched on by your Microsoft 365 admin and off by default in the EU, EFTA and UK, seeing work data through Work IQ, with Researcher, Copilot Cowork and Copilot Studio agents; Claude in GitHub Copilot at Pro $10 for Sonnet and Haiku or Pro+ $39 adding Opus and Fable, set by plan tier or an owner, seeing your repository, with Copilot agent mode and the Claude coding agent in preview" title="Three ways to get Claude" width="1200" height="703" loading="lazy" decoding="async" />

## Name Your Copilot First

Microsoft sells Copilot as a free app, home plans, a chat included with work licenses and paid business add-ons, and only some of them reach Claude. Microsoft's [Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-overview), updated 28 October 2026, says "Anthropic subprocessors are available only in applicable Microsoft 365 licensed experiences and aren't available to all users by default", and it lists GitHub Copilot as a separate product licensed by your work organization. My [map of which Copilot edition you have and what it costs](/blog/copilot-vs-chatgpt/) sorts out the Microsoft side; this post covers only the routes that reach Claude.

## Claude in Microsoft Copilot: Who Has to Switch It On

Your admin holds the switch, and where your tenant sits decides its starting position. From Microsoft's [Anthropic models page](https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor):

- **On by default** for most commercial cloud customers outside the EU, EFTA and UK.
- **Off by default in the EU, EFTA and UK.** The setting shows "No users", and Anthropic models are "currently excluded from the EU Data Boundary". To opt in, someone with the AI Administrator or Global Administrator role goes to Microsoft 365 admin center > Copilot > Settings > View all > AI providers operating as Microsoft subprocessors, selects Anthropic, saves, then picks the users or groups. A separate setting added on 3 April 2026 lets admins there make Anthropic the default model for Copilot in Microsoft 365 apps.
- **Government clouds.** Non-federal GCC customers got a setting on 22 July 2026; Anthropic models are not available for federal GCC customers, GCC High, DoD or other sovereign clouds.
- **Fable-class models.** For certain organizations, Fable 5.1 runs with Anthropic as a subprocessor under Microsoft's Product Terms and DPA, with no extra terms and no retention of customer content by Anthropic.
- **Data Retention models.** Other advanced models such as Claude Fable 5 and Claude Mythos 5 come as "Anthropic models with Data Retention" and are "off by default for all scenarios". Turning them on means accepting Anthropic's commercial terms, and Anthropic "stores most inputs and outputs for up to 30 days before deleting them".
- **Where users pick Claude.** Microsoft Copilot shows UI indicators when Claude models are in use, and in Edit with Copilot in Microsoft 365 apps or in Researcher "users can select Claude".

Once Claude is on, Microsoft's blog says Work IQ grounds answers in "your organization's files, meetings, chats and business data, within your existing permissions". Limits apply on top of the license. It also says Claude Sonnet 5.5 rolls out to Word, Excel, PowerPoint and Chat "as part of the user subscription license (USL)", with limits under which users "are warned as they approach a limit" and can switch to Auto, the default mode in which Microsoft's router picks the model.

## Claude in GitHub Copilot: Which Plan Gets Which Model

GitHub's [supported-models reference](https://docs.github.com/en/copilot/reference/ai-models/supported-models) has a per-plan table, and it agrees with the plans page on which paid tier gets Opus and Fable. As read on 31 October 2026:

| Claude model | Copilot Pro ($10 a month) | Pro+ ($39), Max ($100), Business, Enterprise |
|---|---|---|
| Haiku 4.5, Haiku 5.5 | Included | Included |
| Sonnet 5, Sonnet 5.5 | Included | Included |
| Sonnet 4.6 | Annual Pro only | Annual Pro+ only; not on Max, Business or Enterprise |
| Opus 4.8, Opus 4.8 fast mode (preview), Opus 5, Opus 5.5 | Not included | Included |
| Fable 5, Fable 5.1 | Not included | Included; Anthropic retains prompts and outputs by default |

Points from the same docs page:

- Free and Student: "Copilot Student and Copilot Free users have access to models through auto model selection only", so you cannot pick a Claude model on either. Students in India have other Claude routes, which [my guide to every Claude option for a student in India](/blog/claude-student-discount-india/) maps.
- Sonnet 4.6 "was retired on September 1, 2026" but stays for individual subscribers on annual plans.
- On Business and Enterprise, Fable 5 and Fable 5.1 sit outside GitHub's data retention agreement and are disabled by default; an administrator "must still enable each model before users can access it".
- Usage draws on GitHub AI Credits; GitHub's plans page says "1 AI credit = $0.01 USD" and that usage varies by model.

GitHub's own pages disagree in three places, and I would plan around the Docs:

| Question | GitHub's plans page says | GitHub Docs say |
|---|---|---|
| Which Claude models on Free? | Claude Haiku 4.5 is marked included on Free, with the other Claude models struck through; its FAQ says Free users get "access to entry level models" | Free and Student get auto model selection only |
| Is Claude Sonnet 4 still offered? | Marked included on Pro, Pro+ and Max | Listed as retired on 1 May 2026 |
| Who gets the Claude coding agent? | "Delegate tasks to third-party coding agents like Claude by Anthropic and OpenAI Codex (Preview)" is ticked for Pro+, Max, Business and Enterprise, not Free or Pro | "Available for all paid Copilot plans" |

## Claude vs GitHub Copilot for Coding

For coding, the comparison is Copilot vs Claude Code, and both now run Claude models. The difference is where the work happens and how it is billed.

| | Claude Code | GitHub Copilot |
|---|---|---|
| What the vendor calls it | "an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools" | "AI coding agent for tasks, projects and automated work" |
| Where it runs | "your terminal, IDE, desktop app, and browser" | "Agent mode use in VS Code, Visual Studio, JetBrains, Eclipse, and Xcode", plus GitHub.com, the Copilot CLI and mobile |
| Models | Claude only | Claude, OpenAI, Google and other models, by plan |
| How usage is paid | Claude Code "shares the same usage limits as the rest of your plan", one pool with your chats ([Claude pricing FAQ](https://claude.com/pricing)) | GitHub AI Credits: Pro carries $10 of base credits plus a $5 flex allotment a month, Pro+ $39 plus $31 |
| Working inside GitHub | Claude Code GitHub Actions: "Mention @claude in a pull request or issue comment" ([Anthropic docs](https://code.claude.com/docs/en/github-actions)) | Assign an issue to the Claude coding agent, which "uses the Claude Agent SDK", "can be powered by your existing Copilot subscription" and consumes Actions minutes and AI credits |

Decision rules from those rows:

- Already on Copilot Pro and happy with Sonnet: you already have Claude in your editor. Opus needs Pro+.
- Want Claude Code itself, with its own sessions, memory and commands: Anthropic's docs say most of its surfaces "require a Claude subscription or Anthropic Console account". GitHub describes its Claude agent as built on the Claude Agent SDK and billed to your Copilot plan.
- Want Copilot models in a different harness: OpenCode signs in with a GitHub Copilot account, and [what OpenCode accepts that Claude Code does not](/blog/opencode-vs-claude-code/) has the provider list.

I build and maintain this site with Claude Code in VS Code, and [the setup behind it](/blog/claude-vs-claude-code/) is documented with the jobs it does. Nothing in this post compares the two from use; the Claude Code rows come from Anthropic's docs.

## Claude vs Copilot in Excel

Two different products put Claude in Excel, and they come from different vendors.

| | Claude for Excel (Anthropic) | Copilot in Excel with Claude (Microsoft) |
|---|---|---|
| Who sells it | Anthropic: "generally available on all paid Claude plans" ([Claude for Microsoft 365](https://claude.com/claude-for-microsoft-365)) | Microsoft, as part of a Microsoft Copilot license |
| How Claude gets in | "Sign in with a Claude account, or connect through your existing cloud provider" (Microsoft Foundry, Amazon Bedrock or Gemini Enterprise Agent Platform) | Anthropic models on by default for most commercial tenants (admin opt-in in the EU, EFTA and UK); Claude Sonnet 5.5 rolls out to Excel in phases under the user subscription license |
| What the vendor says it does | "Ask about any cell, update assumptions without breaking formulas, and build models from scratch." | "Analyze data, generate insights, create formulas and visuals" ([Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-overview)) |
| Reviewing changes | "highlighted cells in Excel" before anything is saved | Not stated on the pages I read |
| Context across apps | "Context carries from Outlook to Word to Excel to PowerPoint." | Work IQ grounding across your Microsoft 365 data |

If your company already pays for a Copilot license with Claude switched on, try Claude inside Copilot in Excel first. If you work on your own, Claude for Excel comes with any paid Claude plan and needs no Microsoft 365 admin.

## Is Claude Cheaper Than Copilot?

At the entry level, GitHub Copilot Pro at **$10 a month** costs less than Claude Pro at **$20** for picking a Claude model, but it stops at Sonnet and Haiku. The comparison by model tier, as of 31 October 2026:

| What you want | Claude's own plans | Microsoft Copilot | GitHub Copilot |
|---|---|---|---|
| Claude at no cost | Free: Sonnet and Haiku | No: Anthropic models are only in licensed Microsoft 365 Copilot experiences | Free: auto model selection only |
| Sonnet, chosen by you | Free | Copilot license, from $18 promotional ($21 list) per user a month plus the Business plan | Pro, $10 a month |
| Opus, chosen by you | Pro, $20 a month | Opus 5.5 is in model choice under the license | Pro+, $39 a month |
| Fable | See the Claude plans guide linked above | Fable 5.1 for eligible organizations with Anthropic models on; otherwise Data Retention models, which need admin opt-in under Anthropic's terms | Pro+, $39 a month |

Every Claude, Microsoft and GitHub price here is in USD before tax. Heavy use costs more on all three: Claude's plans have five-hour and weekly limits, Microsoft bills Copilot Cowork by usage, and GitHub draws AI Credits past your allowance.

## Copilot vs Claude by Reader

| If you are | Start with | Why, from the vendor pages |
|---|---|---|
| An office worker on a company Microsoft 365 Copilot license | The Claude option in Copilot's model picker | Usually on by default; grounded in your work data |
| An employee in the EU, EFTA or UK | Ask your Microsoft 365 admin | Off by default there; an AI Administrator or Global Administrator opts in |
| A solo marketer with no work Copilot license | Claude Pro | Claude for Excel, PowerPoint and Word on all paid plans, plus Claude Code, with no admin involved |
| A developer already on Copilot Pro | Keep Pro for Sonnet; move to Pro+ for Opus | GitHub's per-plan table puts Opus and Fable on Pro+ and above |
| A developer who wants Claude Code's own workflow | A Claude plan, then Claude Code GitHub Actions for pull requests | Claude Code is included in all paid Claude plans |
| A buyer in India | Compare the rupee checkout before the dollar list | GitHub's plans page showed US dollar prices when I fetched it from an Indian connection (Cloudflare reported `loc=IN`) on 31 October 2026; Claude's rupee prices differ by checkout, as [my web vs App Store vs Google Play price table](/blog/claude-pro-price-in-india/) shows, and Microsoft's rupee prices are in the Copilot editions guide linked above |

## Claude vs Copilot: Start From What You Already Pay For

With Claude models inside Microsoft Copilot and GitHub Copilot, Claude vs Copilot comes down to the subscription you already have and who controls it. If your employer or GitHub plan already pays for Copilot, open its model picker and look for Claude before you buy a second subscription. If you pay for nothing yet and work alone, Claude Pro is the entry plan that includes Claude Code and Claude for Excel without an admin.
