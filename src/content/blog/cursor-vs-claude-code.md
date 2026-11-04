---
title: "Cursor vs Claude Code: Which Bill Gets You Claude Models"
description: "Cursor vs Claude Code as of 4 November 2026: Claude in Cursor now bills at API list price on a $30 plan, and Claude Code's extension installs in Cursor instead."
publishDate: 2026-11-04
category: [AI, Tools]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "Can you use Claude in Cursor?"
    a: "Yes, two ways. On Cursor Premium ($30 a month) and above, Claude models are available in Cursor at API list price, paid from prepaid credit or through your own Anthropic API key. Or install Anthropic's Claude Code extension in Cursor and sign in with a paid Claude plan. Cursor's Free and Plus plans include no Claude models."
  - q: "Is Claude Code better than Cursor?"
    a: "For someone who mainly wants Claude models, Claude Code is the cheaper bill as of November 2026: Claude Pro at $20 a month includes it, while Cursor charges for Claude tokens on top of a $30 Premium plan. Cursor's own agent, Cloud Agents and Bugbot are reasons to pay Cursor. This comparison covers prices and documented features, not speed or code quality."
  - q: "How do I use Claude Code in Cursor?"
    a: "Click Install for Cursor on Anthropic's Claude Code VS Code documentation page, or search for Claude Code in Cursor's Extensions view. Open the panel from the Spark icon, click Sign in, and authorize with a paid Claude plan or a Claude Console account. Running claude in Cursor's terminal also needs the standalone CLI."
  - q: "Does Cursor Pro include Claude?"
    a: "The legacy Cursor Pro plan ($20 a month) includes an Other Models pool that third-party models such as Claude draw from. The plans sold since 12 October 2026 on The X Subscription do not: Premium and above bill Claude at API list price from prepaid credit, and Cursor says switching from a legacy plan is permanent."
  - q: "Do Cursor and Claude Code have usage limits?"
    a: "Yes, of different kinds. Cursor's paid plans include a weekly pool of Grok and Composer models, and Premium and above bill Claude per token outside that pool. Claude plans set limits every five hours and every week that Claude Code draws on, with Ultra listing no five-hour limit for verified accounts."
---

You want Claude Sonnet 5.5 or Claude Opus 5.5 writing code in your editor, and two companies will sell you that. Cursor's Models and Pricing docs list both models, and Anthropic includes Claude Code, which runs in a terminal or as an editor extension, in every paid Claude plan. For that reader, Cursor vs Claude Code comes down to which company to pay, and how to avoid paying both for the same model.

## Cursor vs Claude Code: Which Should You Pay For?

If Claude models are what you want, pay Anthropic: Claude Pro costs **$20 a month** billed monthly, includes Claude Code, and Claude Code's extension installs into Cursor. Pay Cursor when you want its own agent, Cloud Agents and Grok usage pool; on Premium (**$30 a month**) and above, Claude then bills separately at API list price.

My read of both vendors' pages is that since Cursor moved to The X Subscription on 12 October 2026, wanting Claude in Cursor is a billing question before it is a features question. Cursor's [legacy plans page](https://cursor.com/docs/account/pricing/legacy-cursor-plans) says the old Pro, Pro+ and Ultra plans included third-party models through an "Other Models" pool, and that the new plans drop "the included third-party model allowance; third-party models are billed separately."

Every Cursor fact below comes from cursor.com's pricing page, docs and help center or xAI's launch post, and every Claude fact from Anthropic's pricing page and docs, all read on 4 November 2026. Prices on both sides exclude tax, and both vendors say they are subject to change. I build this site with the Claude Code extension in VS Code on Windows 11 and have not used Cursor, so this compares bills and documented features, not speed or code quality. Where Claude Code sits among Anthropic's other surfaces is in [my Claude vs Claude Code guide](/blog/claude-vs-claude-code/).

| | Cursor | Claude Code |
|---|---|---|
| What it is | An AI code editor with its own agent, a CLI and Cloud Agents | Anthropic's coding agent, "Available in your terminal, IDE, desktop app, and browser" |
| Sold by | X Subscription Corp, as part of The X Subscription with Grok and X | Anthropic, inside Claude plans |
| Cheapest plan that reaches Claude models | Premium, $30 a month, plus Claude tokens at API list price | Pro, $20 a month billed monthly or $17 a month billed annually |
| Claude usage in the plan price | None: "Third-party models like Claude, GPT, and Gemini aren't part of the included pool" | Included, within Pro's limits "every 5 hours and every week" |
| What the plan's pool covers | Grok 4.7, Grok 4.6, Grok 4.5 and Composer 2.5, refreshed weekly | Claude models, under the plan's usage limits |
| Free plan | $0, with "Limited agent requests" and no third-party models | $0, with no Claude Code |
| Works inside the Cursor editor | It is the editor | Yes: Anthropic's docs carry an "Install for Cursor" link |

Sources: [Cursor's Models and Pricing docs](https://cursor.com/docs/models-and-pricing), [Cursor's pricing page](https://cursor.com/pricing), [Claude's pricing page](https://claude.com/pricing), [Claude Code overview](https://code.claude.com/docs/en/overview) and [Claude Code in VS Code](https://code.claude.com/docs/en/vs-code).

## How Claude Models Bill Inside Cursor Since 12 October 2026

The [X Subscription launch post](https://x.ai/news/x-subscription), dated 12 October 2026, brought "Grok, Grok Bot, Cursor, and X Premium in one plan" and said third-party models stay available in Cursor "on Premium and above", with usage "billed separately at API list prices, through top-ups." Cursor's docs list the plans this way:

| Cursor plan | Monthly price | Annual price | Claude models in Cursor |
|---|---|---|---|
| Free | $0 | - | Not available |
| Plus | $8 | $80 a year | Not available: "Only Grok models are available on this plan" |
| Premium | $30 | $300 a year | API list price, from prepaid credit |
| Super | $100 | $1,000 a year | API list price, from prepaid credit |
| Ultra | $200 | $2,000 a year | API list price, from prepaid credit |
| Teams | $30, $100 or $200 per seat | - | API list price plus the Cursor Token Rate |

The per-token prices Cursor lists for Claude match Anthropic's own [API pricing page](https://platform.claude.com/docs/en/about-claude/pricing), per million tokens:

| Model | Input | Output | Cache read |
|---|---|---|---|
| Claude Haiku 5.5 (prompts up to 100,000 tokens) | $0.10 | $0.50 | $0.01 |
| Claude Sonnet 5.5 | $2 | $10 | $0.10 |
| Claude Opus 5.5 | $4 | $20 | $0.20 |
| Claude Fable 5.1 | $10 | $50 | $0.25 |

The rules on Cursor's pages that shape the bill:

- **Prepaid credit pays for Claude from the first request.** Cursor's [X Subscription help page](https://cursor.com/help/the-x-subscription/overview) says third-party models "aren't included in your plan" and are "billed at API list prices from the first use and paid from your prepaid credit." A monthly additional usage limit caps that spend.
- **Your own Anthropic key is the alternative.** Cursor's [API key help page](https://cursor.com/help/models-and-usage/api-keys) says you paste the key under Cursor Settings > Models, your provider "bills you directly", and on Premium, Super and Ultra those requests "don't draw from your included usage or prepaid credit." Cursor's Models and Pricing docs add that Plus allows no own API keys, and the help page that "Tab completion continues using Cursor's built-in models."
- **Teams pay a surcharge on Claude.** The Cursor Token Rate is **$0.25 per million tokens** on input, output and cached tokens for eligible third-party models; "Individual plans don't pay it." Models whose cache-read price is "strictly below $0.10 per million tokens" are exempt, which in the table above covers Claude Haiku 5.5 and leaves Sonnet 5.5 at exactly $0.10 inside the rate.
- **Legacy plans keep their Claude pool.** Pro ($20), Pro+ ($60) and Ultra ($200) still include the Other Models pool. Switching to The X Subscription "is optional and permanent", so a legacy Pro subscriber who mainly uses Claude in Cursor gives up included Claude usage by switching.

Cursor's India-only Start plan is legacy too; its rupee price and the student plan's closure are in [my Cursor student plan breakdown](/blog/cursor-student-plan/).

## What Claude Code Costs on Each Claude Plan

Claude Code comes with the plan, so within the plan's usage limits the plan price is the whole bill for an individual. From [Claude's pricing page](https://claude.com/pricing) on 4 November 2026:

| Claude plan | Price | Claude Code |
|---|---|---|
| Free | $0 | No |
| Pro | $20 a month billed monthly, or $17 a month billed annually ($200 up front) | Yes |
| Max | $100 a month, "5x Pro usage" | Yes |
| Ultra | $200 a month, "10x Pro usage every week", "No 5-hour limit" for verified accounts | Yes |
| Team, Standard seat | $25 per seat billed monthly, or $20 billed annually | Yes |
| Team, Premium seat | $125 per seat billed monthly, or $100 billed annually | Yes |

For a Cursor comparison, the details that matter:

- Max and Ultra include monthly API credits ($100 and $200), but Anthropic's [API credits page](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers) lists Claude Code as not covered and describes the credits as for building "your own applications and agents". I leave them out of the math below.
- Claude Code can also run on a Console API key billed per token. What a key switches off compared with a plan login is in [my Claude Code API key vs subscription guide](/blog/claude-code-api-key-vs-subscription/).

Which of these plans fits your workload is covered plan by plan in [my comparison of Claude plans](/blog/claude-plans/).

## Cursor vs Claude Code Pricing: One Worked Month

The assumption, stated so you can swap in your own numbers: one developer, one month, **20 million input tokens with no cache hits and 1 million output tokens**, all on one Claude model. Every rate comes from the tables above.

| Route | Plan | Claude tokens | Monthly total |
|---|---|---|---|
| Cursor Premium, Sonnet 5.5 from prepaid credit | $30 | 20 x $2 = $40, plus 1 x $10 = $10, so $50 | **$80** |
| Cursor Premium, Sonnet 5.5 on your own Anthropic key | $30 to Cursor | $50, billed by Anthropic | **$80** |
| Cursor Premium, Opus 5.5 from prepaid credit | $30 | 20 x $4 = $80, plus 1 x $20 = $20, so $100 | **$130** |
| Cursor Teams Premium seat, Sonnet 5.5 | $30 | $50, plus 21 x $0.25 = $5.25 Cursor Token Rate | **$85.25** |
| Claude Pro with Claude Code in Cursor | $20 billed monthly | Inside Pro's usage limits | **$20** |

<img src="/assets/blog/cursor-vs-claude-code/claude-in-cursor-routes.webp" alt="Three cards comparing routes to Claude Sonnet 5.5 in the Cursor editor for 20 million input and 1 million output tokens: Cursor Premium with prepaid credit at $80, Cursor Premium with your own Anthropic key at $80 split between Cursor and Anthropic, and Claude Pro with the Claude Code extension at $20 as a usage allowance; a footer notes that Cursor Free and Plus include no Claude models" title="Three ways to get Claude models in the Cursor editor" width="1200" height="669" loading="lazy" decoding="async" />

The last row is a different kind of number. Anthropic states Pro's allowance as "More usage than Free, every 5 hours and every week", with no token figure, so the $20 buys capped access rather than 21 million tokens. Reading the gap from each side:

- **Break-even on tokens:** at the same 20-to-1 input-to-output mix, $20 buys 8 million input and 0.4 million output tokens of Sonnet 5.5 (8 x $2 + 0.4 x $10). If you pay for Premium anyway, a month with fewer Claude tokens than that costs less through prepaid credit than adding Claude Pro would.
- **When Pro runs out:** you wait for the reset, turn on usage credits or move up to Max, and [the four ways back from a Claude usage limit](/blog/claude-usage-limits/) walks through each.

Prompt caching cuts the input line on every per-token route above: Anthropic's pricing page prices a cache hit on Sonnet 5.5 at $0.10 per million tokens, 5% of the input rate. Cursor bills the same cache-read price for Sonnet 5.5.

## How to Use Claude Code in Cursor

Anthropic documents the Cursor install on its [Claude Code in VS Code page](https://code.claude.com/docs/en/vs-code), whose prerequisites are an Anthropic account, "any paid Claude subscription (Pro, Max, Ultra, Team, or Enterprise) or a Claude Console account", with "no API key" required:

1. Open Anthropic's VS Code page and click **Install for Cursor**, or search for "Claude Code" in Cursor's Extensions view, the route the docs give for other VS Code forks (in VS Code itself the docs name `Ctrl+Shift+X` on Windows and Linux, `Cmd+Shift+X` on Mac). Anthropic publishes the extension to the Visual Studio Marketplace and the Open VSX Registry.
2. Open a file, then click the **Spark icon** in the Editor Toolbar; the docs say the icon "only appears when you have a file open". The Spark icon in the Activity Bar opens the sessions list.
3. Click **Sign in** and complete authorization in your browser with your Claude plan or Console account.
4. To run `claude` in Cursor's integrated terminal as well, install the standalone CLI: the docs say the extension bundles its own copy of the CLI for the chat panel, and the integrated terminal needs the standalone install.

The extension signs in to Anthropic, so its requests bill to the Claude plan or Console account you authorized. Which features only the extension or only the CLI has, and which settings files both read, are mapped in [my Claude Code in VS Code vs terminal guide](/blog/claude-code-in-vs-code-vs-terminal/).

## What Each Bill Buys Besides Claude

The Claude tokens are one line on each bill. The rest, from Cursor's pricing and docs pages and Claude's pricing page:

| Feature | Cursor Plus ($8) | Cursor Premium ($30) | Claude Pro ($20) |
|---|---|---|---|
| Cursor's Agent with Grok 4.7, 4.6, 4.5 and Composer 2.5 | Yes, at fixed settings | Yes, 4x Plus usage | No |
| Claude models in Cursor's own agent | No | Yes, billed per token | No; Claude Code's extension instead |
| Cloud Agents and Automations | No | Yes | No |
| AI code review with Bugbot, code hosting on Origin | No | Yes | No |
| Grok apps and X benefits | Yes | Yes | No |
| Claude Code in terminal, IDE, desktop app and browser | No | No | Yes |
| Claude app chat, Projects, Claude in Chrome | No | No | Yes |

A combined bill is possible: Cursor Plus at $8 for Cursor's agent on Grok models, plus Claude Pro at $20 for Claude Code in the same editor, comes to $28 a month before tax.

## Cheapest Route to Claude Models in Cursor, by What You Already Pay For

Start from the subscription already on your card statement. Each row uses only the prices and rules above, as of 4 November 2026:

| You already pay for | Cheapest route to Claude in the Cursor editor | Extra monthly cost |
|---|---|---|
| Claude Pro, Max or Ultra | Install Claude Code's extension in Cursor and sign in with the plan | Nothing more to Anthropic; its install prerequisites name no Cursor plan, and Cursor Free is $0 |
| Cursor Plus ($8) | Add Claude Pro and run the extension, or upgrade to Premium and pay for tokens | $20, or $22 plus tokens |
| Cursor Premium, Super or Ultra | Claude in Cursor's model picker from prepaid credit or your own key; consider Claude Pro once tokens pass about $20 a month | Tokens at API list price |
| Legacy Cursor Pro, Pro+ or Ultra | Keep the legacy plan: its Other Models pool covers Claude, and the switch cannot be undone | $0 until the pool runs out |
| Cursor Teams seat | Claude in Cursor at API list price plus $0.25 per million tokens, or Claude Team seats with Claude Code | Tokens plus the Cursor Token Rate, or $25 a seat monthly |
| A Claude Console API key | Paste it into Claude Code, or into Cursor Settings > Models on Premium and above | Tokens at API list price |
| Neither | Claude Pro with Claude Code in VS Code or Cursor | $20 billed monthly |

For a different harness on the same question, [OpenCode vs Claude Code](/blog/opencode-vs-claude-code/) runs the match by what each tool can bill.

## Cursor vs Claude Code: Price the Claude Tokens Before the Editor

On Cursor's current plans, Claude is a metered line on top of a $30 plan, and on Anthropic's it is included up to a usage limit, so the choice between Cursor and Claude Code for a Claude user is a billing decision first. Cursor's agent, Cloud Agents and Bugbot are what the Cursor bill buys beyond Claude, and the route table above shows when you need both bills.

Recheck Cursor's Models and Pricing page and Claude's pricing page before you subscribe: Cursor's plans changed on 12 October 2026, and both vendors say prices are subject to change. Before you buy Cursor Premium for Claude, multiply last month's Claude tokens by the rates in the price table.
