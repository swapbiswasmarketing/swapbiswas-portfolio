---
title: "Codex vs Claude Code: What Each Price Tier Buys"
description: "Codex vs Claude Code, tier by tier from both pricing pages on 4 November 2026: what $0, $8, $20, $100, $200 and $500 buy, plus API keys and team seats."
publishDate: 2026-11-04
category: [AI, Tools]
img: /assets/stock-7.webp
img_alt: "Renaissance-style still life of sealed letters, a quill and an open ledger by a window, one red wax seal"
faqs:
  - q: "Can you use Codex for free?"
    a: "Yes. As of 4 November 2026, OpenAI's Codex pricing page lists ChatGPT Free at $0 with GPT-6 Luna at Standard speed in the desktop app, subject to rollout. Claude Code is not on Claude's Free plan; Anthropic's plan table marks it No on Free and Yes from Pro up."
  - q: "Does Claude Pro include Claude Code?"
    a: "Yes. Claude Pro costs $20 a month, or $17 a month billed yearly at $200, and includes Claude Code in the terminal, IDE, desktop app and web. Claude Code shares one usage pool with your Claude chats, with a five-hour limit plus a weekly limit."
  - q: "Which is cheaper, Codex or Claude Code?"
    a: "Codex is cheaper to start: it runs on ChatGPT Free and the $8 Go plan in the desktop app, where Claude Code starts at Pro. At $20 both are included, and Claude Pro drops to $17 a month on annual billing. Above that, neither pricing page puts a message count on the tiers, so usage cannot be compared per dollar."
  - q: "Can I use an API key with Codex or Claude Code?"
    a: "Yes, both. Codex with an API key works in the CLI, SDK and IDE extension at API prices but has no cloud features such as GitHub code review or Slack. Claude Code can run on a Claude Console account billed at standard API rates instead of a Claude plan."
  - q: "Do Codex and Claude Code both read AGENTS.md?"
    a: "Yes. Codex reads AGENTS.md files from the project root down to your working directory. Claude Code reads an AGENTS.md as project instructions when the repository has no CLAUDE.md, so one file can serve both agents."
---

**$200 a month** now buys a coding plan with no five-hour limit from both vendors: Anthropic's Ultra plan, which its [pricing page](https://claude.com/pricing) lists with "No 5-hour limit" for verified accounts and "10x Pro usage every week", and OpenAI's $200 Pro plan, where the [Codex pricing page](https://learn.chatgpt.com/docs/pricing) says "Pro plans currently have no five-hour limit." A Codex vs Claude Code comparison I read on 4 November 2026 still calls Anthropic's $200 plan "Max 20x", a name Anthropic's Ultra help article, quoted below, says is now "the Ultra plan". Check any Claude Code vs Codex comparison's tier names against the two pricing pages.

Every price and limit below comes from those two pricing pages and the vendors' help and docs pages, read on 4 November 2026. I build this site with the Claude Code extension in VS Code on Windows 11, and the Codex column comes from OpenAI's documentation, so this page compares what each subscription buys, not output quality. My view: you should pick the agent that comes with the subscription tier you would pay for anyway, and a comparison written before the Max 20x rename is stale on exactly those tiers.

| Monthly price | Codex (ChatGPT plan) | Claude Code (Claude plan) |
|---|---|---|
| $0 | Free: GPT-6 Luna in the desktop app, subject to rollout | Not included on Free |
| $8 | Go: same as Free | No plan at this price |
| $20 | Plus: web, CLI, IDE extension and iOS | Pro: included ($17 a month billed yearly) |
| $100 | Pro: no five-hour limit | Max: 5x Pro, $100 a month in API credits |
| $200 | Pro: no five-hour limit | Ultra: 10x Pro weekly, no five-hour limit if verified, $200 in API credits |
| $500 | Pro: adds Ultrafast mode | No individual plan |

US list prices before tax, from the two pricing pages linked above (claude.com/pricing and learn.chatgpt.com/docs/pricing) on 4 November 2026. Both vendors change these plans often, so recheck the two pages before you pay.

## Is Codex Better Than Claude Code?

On price, Codex is cheaper to start, and Claude's $100 and $200 plans bundle API credits beside the agent; this page compares plans and documented features and does not test code quality. Choose the plan first: the tier map in the next section shows which plan includes which agent.

What each side's own pages say about the basics, as of 4 November 2026:

- **Where Codex runs:** on the web, in the CLI, in the IDE extension and on iOS from Plus up, per the pricing page's Plus card. Free and Go list only the desktop app.
- **Where Claude Code runs:** "your terminal, IDE, desktop app, and browser", per Anthropic's [Claude Code overview](https://code.claude.com/docs/en/overview), with a Claude subscription or Console account required on most surfaces.
- **Project instructions:** Codex reads AGENTS.md ([OpenAI docs](https://learn.chatgpt.com/docs/agent-configuration/agents-md)); Claude Code reads CLAUDE.md and falls back to an AGENTS.md when there is no CLAUDE.md ([Claude Code memory docs](https://code.claude.com/docs/en/memory)).

My earlier [Claude vs ChatGPT comparison](/blog/claude-vs-chatgpt/) covers the chat apps these agents ship with and my own Claude Code setup; this page stays on the coding plans.

## Codex vs Claude Code Pricing, Tier by Tier (4 November 2026)

<img src="/assets/blog/codex-vs-claude-code/tier-map.webp" alt="Grid of six monthly price tiers from $0 to $500 as of 4 November 2026, showing what each ChatGPT plan includes in Codex and what each Claude plan includes in Claude Code; at $200 both vendors sell a plan with no five-hour limit" title="What each price tier buys in each coding agent" width="1200" height="857" loading="lazy" decoding="async" />

### $0 and $8: Codex Only

OpenAI's pricing page gives the same one line for ChatGPT Free ($0) and Go ($8): "GPT-6 Luna at Standard speed in the desktop app, subject to rollout." Anthropic's plan comparison marks Claude Code "No" on Free, and Anthropic sells no plan between Free and Pro.

- If you want to try a coding agent without paying, Codex is the one of these two that lets you.
- The pricing page lists the same Codex line for Go as for Free; Go's other differences sit on the chat side, which I compared row by row in [ChatGPT Go vs Plus vs Pro](/blog/chatgpt-go-vs-plus/).

### $20: Both Agents, With Different Billing

| | ChatGPT Plus (Codex) | Claude Pro (Claude Code) |
|---|---|---|
| Price | $20 a month | $20 a month, or $17 a month billed yearly ($200 up front) |
| Surfaces | Web, CLI, IDE extension, iOS | Terminal, IDE, desktop app, web |
| Models | GPT-6.1 Sol and GPT-6 Luna, per the Plus card | Opus, Sonnet and Haiku; Fable "paid with usage credits" |
| Cloud features | "automatic code review and Slack integration" | Claude Code on the web runs long tasks in the browser with no local setup, per the overview |
| Usage rule | Five-hour estimates per model, which OpenAI says "are not fixed message limits" | A five-hour limit plus a weekly limit, shared with chat |

On the Plus side, the per-model message estimates live in [my guide to ChatGPT usage limits by plan](/blog/chatgpt-usage-limits/), which also shows where to read your reset time. Annual billing is the price difference you can count: 12 x $20 = $240 a year on monthly billing, against $200 for Claude Pro paid yearly.

### $100 and $200: No Five-Hour Limit vs Bundled API Credits

At $100 and $200 the two vendors sell different things:

- **Codex Pro, all three tiers:** "Pro plans currently have no five-hour limit." The Pro card lists "Everything in Plus" plus the three prices.
- **Claude Max ($100):** "5x Pro usage every 5 hours and every week", Fable "up to half your weekly limit", priority access at high traffic times and "$100 a month in API credits".
- **Claude Ultra ($200):** "No 5-hour limit" for verified accounts, "10x Pro usage every week" and "$200 a month in API credits, up from $100 on Max".

So at $100 the rule differs: Codex Pro drops the five-hour window, while Claude Max keeps it at five times Pro. At $200 both drop it, with one condition on Anthropic's side, covered below. Neither pricing page puts a message count on these tiers. For how each Pro tier's allowance compares with Plus, see the Pro section of my Go vs Plus vs Pro guide, linked above.

### $500: Codex Only

ChatGPT Pro at $500 is the one individual tier with "Ultrafast mode access", per the pricing page. Ultrafast is not free headroom: the same page says GPT-6 Astra and GPT-6.1 Sol Ultrafast use **8x** the included subscription usage of Standard mode, and Fast mode uses 2.5x. Anthropic's top individual plan is Ultra at $200.

## Extras in the $100 and $200 Tiers Beside the Agent

The two price ladders stop lining up on the extras. Read on 4 November 2026:

| Extra | Codex Pro | Claude Max / Ultra |
|---|---|---|
| Monthly API credits | None listed | $100 on Max, $200 on Ultra, for the Claude Platform |
| Do the credits extend the coding agent? | n/a | No: they "don't apply to" interactive Claude Code "in the terminal, IDE, desktop, or web" |
| Do unused credits roll over? | n/a | No: "Unused credits expire at the end of each billing cycle" |
| Model access against the $20 plan | The feature matrix marks the same models available on Plus and Pro | Fable included "up to half your weekly limit", where Pro pays for it with usage credits |
| Other extras | Computer History, unavailable on Plus; Composer predictions (beta), marked limited on Pro | Priority access at high traffic times; Max adds early access to advanced Claude features |

Sources: the [Codex pricing page](https://learn.chatgpt.com/docs/pricing) feature matrix, Anthropic's pricing page and its [monthly API credits article](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-ultra-and-team-plans).

The API credits only pay off if you also build something on the Claude API, such as a script or an app of your own. If all you do is code in Claude Code, a $200 Ultra plan buys the weekly allowance and, once the account is verified, no five-hour limit, not $200 of extra Claude Code time; the [side-by-side Claude plan lineup](/blog/claude-plans/) works out the yearly cost of each plan and the most API credit it can bring.

### Does Claude Ultra Have a Five-Hour Limit?

Only once Anthropic has verified the account. The [Ultra plan help article](https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan) says it verifies Ultra accounts automatically "using factors like your account and payment history", that "a temporary limit applies" until then, and that phone verification at checkout "doesn't remove this limit". To check, open Settings > Usage: no Current session bar means the account is verified. The same article confirms the rename that older comparisons miss: "The Max 20x plan is now called the Ultra plan."

## How Each Agent Meters Usage

Both agents share their allowance with other products, and both let you keep working past the limit for extra money:

| | Codex | Claude Code |
|---|---|---|
| What shares the allowance | "ChatGPT Work and Codex share usage" | "Your activity across Claude on web, desktop, mobile, and Claude Code all draws from the same pool" |
| Five-hour window | Plus and Standard Business: estimates per model; Pro: none | Pro and Max: yes; verified Ultra: none |
| Weekly limit | "Weekly limits may also apply" | On every paid plan |
| Mid-task at the limit | "The agent will be able to continue working on that turn, subject to fair use limits" | At the five-hour limit it "may keep working briefly" to finish the step, shown as "Usage limit reached - wrapping up" |
| Past the limit | Plus and Pro "can purchase additional credits"; or an API key at standard API rates | Usage credits at standard API rates, or a Console account |
| Where to check | The [usage dashboard](https://chatgpt.com/codex/settings/usage), or `/status` in the CLI | Settings > Usage |

Sources: the [Codex pricing page](https://learn.chatgpt.com/docs/pricing), the [Claude pricing page](https://claude.com/pricing) FAQ and Anthropic's [Claude Code plan article](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan). Anthropic's wrap-up message uses a middle dot where I wrote a hyphen.

The Claude side has more moving parts than one row can hold, from the Fable weekly limit to the free reset, and [the four ways back from a Claude usage limit](/blog/claude-usage-limits/) walks through each.

## Codex vs Claude Code With an API Key

Both agents run on pay-per-token billing instead of a subscription, and the Codex route gives up more:

| | Codex with an API key | Claude Code with a Console account |
|---|---|---|
| Where it runs | "Codex in the CLI, SDK, or IDE extension" | Claude Code "requires a Pro, Max, Ultra, Team, Enterprise, or Console account"; the desktop app needs a paid subscription |
| What you lose | "No cloud-based features (GitHub code review, Slack, etc.)"; "Codex cloud requires signing in with ChatGPT" | Plan usage: a set API key is used "instead of your Claude subscription", which means API charges |
| Billing | "standard API pricing instead of included ChatGPT plan credits" | "standard API rates (distinct from Pro/Max/Ultra plan pricing)" |
| Who it suits, per the vendor | "Great for automation in shared environments like CI" | "intensive coding sprints" |

Sources: the Codex pricing page and [Codex authentication docs](https://learn.chatgpt.com/docs/auth), and Anthropic's [Claude Code setup docs](https://code.claude.com/docs/en/setup), Claude Code plan article and overview.

Per-token list prices on 4 November 2026, standard rates per million tokens:

- **GPT-6.1 Sol:** $2 input, $10 output at short context ([OpenAI API pricing](https://developers.openai.com/api/docs/pricing)).
- **Claude Sonnet 5.5:** $2 input, $10 output; **Opus 5.5:** $4 input, $20 output ([Anthropic pricing](https://claude.com/pricing)).
- **GPT-6 Luna** (short context) and **Claude Haiku 5.5** (prompts up to 100K tokens) both list $0.10 input and $0.50 output.

One date matters on the Codex side: the pricing page says GPT-5.5 "retires from Codex with ChatGPT sign-in on October 14, 2026", while "Codex sessions authenticated with an API key aren't affected." On the Claude side, a stray key can bill you without your noticing, and [what an API key switches off in Claude Code](/blog/claude-code-api-key-vs-subscription/) shows how to tell which credential is active.

## Team Seats: Claude Team vs ChatGPT Business

The team prices match to the dollar:

| | ChatGPT Business (Codex) | Claude Team (Claude Code) |
|---|---|---|
| Seat price | "$20 / user / month", billed annually; "$25 per user per month when billed monthly" | Standard seat $20 billed annually, $25 monthly; Premium seat $100 or $125 |
| Team size | "2+ users" | "For teams of 2 to 150" |
| Usage per seat | Standard Business has the same five-hour estimates as Plus | Standard: "more usage than Pro"; Premium: "5x more usage than standard seats" |
| Credits | "Flexibly extend usage with ChatGPT credits" | "Up to $500 per month in pooled API credits" |
| Training on your data | "No training on your business data by default" | "No model training on your content by default" |

Sources: the Business card on the [Codex pricing page](https://learn.chatgpt.com/docs/pricing) and the Team block on [Anthropic's pricing page](https://claude.com/pricing).

On individual plans the training defaults differ. Anthropic marks model training "Opt-out" on Free through Ultra, and OpenAI's Codex feature matrix marks "No training on API or business data by default" as unavailable on Plus and Pro, available on Business, Enterprise and API keys. Seat-by-seat Claude bills, with the pooled credit, are in [my Claude Team plan breakdown](/blog/claude-team-plan/).

## Switching Between Codex and Claude Code

Moving a repository from one agent to the other is mostly a file question:

1. Keep your project instructions in an AGENTS.md. Codex reads it in every directory from the project root to where you work, and Claude Code reads it when there is no CLAUDE.md, per both vendors' docs linked above.
2. If you already have a CLAUDE.md, Codex can pick up another filename through its `project_doc_fallback_filenames` setting, which the [AGENTS.md docs](https://learn.chatgpt.com/docs/agent-configuration/agents-md) describe for a repository that already uses a different filename.
3. Reconnect your MCP servers in the new agent: the Codex matrix lists MCP on Plus, Pro, Business, Enterprise and API keys, and Claude Code supports it per its overview.
4. Move skills last: both use SKILL.md folders, and [my Codex and Claude Code skills comparison](/blog/chatgpt-skills/) lists which folders each one reads.

If you are weighing a third coding tool that accepts a ChatGPT login, [OpenCode vs Claude Code](/blog/opencode-vs-claude-code/) covers which subscriptions work where.

## Codex or Claude Code? A Decision Table by Reader Type

| You are | Pick | Why, from the vendors' pages |
|---|---|---|
| Curious, with no budget | Codex on ChatGPT Free | The only $0 route of the two; GPT-6 Luna in the desktop app, subject to rollout |
| Already paying Claude Pro for writing or chat | Claude Code | Included in Pro, drawing from the same pool as your chats |
| Already paying ChatGPT Plus | Codex | Included in Plus on web, CLI, IDE and iOS, with code review and Slack |
| Stopped by five-hour windows on a $100 budget | Codex Pro at $100 | No five-hour limit; Claude Max at $100 keeps the window at 5x Pro |
| A builder who also ships on the Claude API | Claude Max or Ultra | $100 or $200 a month in API credits, which do not cover interactive Claude Code |
| A team of two or more | Either | $20 a seat billed yearly on both; Claude Team adds pooled API credits and Premium seats |
| Running the agent in CI | Codex with an API key, or Claude Code on a Console key | Both bill at API rates; the Codex key route drops cloud features |
| Paying for speed above all | Codex Pro at $500 | The one individual plan with Ultrafast, which uses included usage at 8x |

For readers in India, rupee prices depend on where you check out, and I keep them in separate dated guides: [every ChatGPT plan in rupees](/blog/chatgpt-subscription-price-in-india/) and [Claude Pro by checkout](/blog/claude-pro-price-in-india/). The dollar tiers above are US list prices.

## Codex vs Claude Code: Start From the Plan You Already Pay For

The tier map comes back to the point I opened with: at $0 and $8 only Codex is on offer, at $20 the agent comes with the chat plan you prefer, at $100 the five-hour rule differs, and at $200 both remove it, with Claude adding API credits that do not cover interactive Claude Code. Anything you read about Codex vs Claude Code that still mentions "Max 20x" was checked before Anthropic's rename. Open both pricing pages, find the tier you already pay for, and start with the agent it includes.
