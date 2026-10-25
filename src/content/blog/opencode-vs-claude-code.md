---
title: "OpenCode vs Claude Code: What You Already Pay For Decides"
description: "OpenCode vs Claude Code, checked 25 October 2026: whether a Claude Pro or Max plan works in OpenCode, which providers each accepts, and what OpenCode Go costs."
publishDate: 2026-10-25
category: [AI, Tools]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "Can I use my Claude Pro or Max subscription in OpenCode?"
    a: "No. Anthropic's legal and compliance page reserves Claude plan sign-in for Claude Code and Anthropic's own apps, and OpenCode's providers page says Anthropic explicitly prohibits the plugins that did it. OpenCode removed its Anthropic OAuth plugin in version 1.3.0, released on 22 March 2026 (UTC). An Anthropic API key or OpenCode's pay-as-you-go models still give you Claude in OpenCode."
  - q: "Is OpenCode free?"
    a: "The app is open source under the MIT License, and OpenCode's docs call both Go and its pay-as-you-go service optional. You pay the model provider you connect. On 25 October 2026, OpenCode also listed several models as free for a limited time."
  - q: "How much does OpenCode Go cost?"
    a: "OpenCode Go costs $10 a month and Go Plus $40 a month, as listed on 25 October 2026. Each model carries a monthly usage limit in dollars, and you can spend 20% of it in any five hours and 50% in any week."
  - q: "Is OpenCode better than Claude Code?"
    a: "It depends on what you already pay for. Of these two, a Claude Pro or Max plan works only in Claude Code, while a ChatGPT Plus or Pro or GitHub Copilot plan works only in OpenCode. This comparison covers payments, providers and published prices, not speed or code quality."
  - q: "Does OpenCode work with Claude models?"
    a: "Yes. You can connect an Anthropic API key, use Claude models on OpenCode's pay-as-you-go service (Claude Sonnet 5.5 was $2 input and $10 output per million tokens on 25 October 2026), use Claude Haiku 5.5 on OpenCode Go, or go through Amazon Bedrock or Google Vertex AI."
---

OpenCode and Claude Code are both harnesses: the app you type a coding task into. The model provider that answers sits one layer below, and on 25 October 2026 Claude Code's docs listed Claude plans, Anthropic Console keys, Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry and LLM gateways, while OpenCode's docs listed 75+ providers, among them Anthropic API keys, ChatGPT and GitHub Copilot sign-ins, and OpenCode's own Go and Zen. In OpenCode vs Claude Code, the payment you already have decides between them before any feature does: a Claude Pro or Max plan works in only one of them, and a ChatGPT or Copilot plan works in only the other.

Every OpenCode fact below comes from opencode.ai's docs, its Go and Zen pages and its GitHub releases, and every Claude Code fact from Anthropic's docs at code.claude.com, all read on 25 October 2026. I build this site with the Claude Code extension in VS Code on Windows 11, and [my Claude vs Claude Code guide](/blog/claude-vs-claude-code/) covers that side, including what each Claude plan includes. Prices and model lists on both sides change without notice, so check the dates against the pages linked here before you pay.

## OpenCode vs Claude Code at a Glance (25 October 2026)

| | Claude Code | OpenCode |
|---|---|---|
| Licence | "All rights reserved", use subject to Anthropic's terms | MIT License |
| Where it runs | Terminal, IDE extensions, desktop app, browser | Terminal, desktop app, web app (V2 docs); IDE extension (V1 docs) |
| Pay-per-token providers | Anthropic Console, Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, LLM gateways | 75+, including Anthropic, Amazon Bedrock, Google Vertex AI, OpenRouter and local models |
| Its maker's own model plans | Claude plans | OpenCode Go ($10 or $40 a month) and Zen (pay as you go) |

Sources: the licence files in [Claude Code's repository](https://github.com/anthropics/claude-code/blob/main/LICENSE.md) and [OpenCode's repository](https://github.com/anomalyco/opencode/blob/dev/LICENSE), [Claude Code's overview](https://code.claude.com/docs/en/overview) and [setup page](https://code.claude.com/docs/en/setup), and [OpenCode's V2 intro](https://opencode.ai/v2/docs/) and [V1 intro](https://opencode.ai/docs/).

## Can You Use a Claude Subscription in OpenCode?

No: Anthropic reserves Claude plan sign-in for Claude Code and its own apps, and OpenCode's providers page says Anthropic "explicitly prohibits" the plugins that used a Pro or Max plan in OpenCode. Here is each side in its own words, as read on 25 October 2026:

| Source | What it says |
|---|---|
| [Anthropic, Claude Code legal and compliance](https://code.claude.com/docs/en/legal-and-compliance) | "OAuth authentication is intended exclusively for purchasers of Claude Free, Pro, Max, Team, and Enterprise subscription plans and is designed to support ordinary use of Claude Code and other native Anthropic applications." |
| Same page | "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, or Max plan credentials on behalf of their users." |
| Same page | "Anthropic reserves the right to take measures to enforce these restrictions and may do so without prior notice." |
| [OpenCode V1 providers page](https://opencode.ai/docs/providers/) | "There are plugins that allow you to use your Claude Pro/Max models with OpenCode. Anthropic explicitly prohibits this." |
| Same page | Previous versions came bundled with those plugins, which is "no longer the case as of 1.3.0" |
| [OpenCode v1.3.0 release notes](https://github.com/anomalyco/opencode/releases/tag/v1.3.0), published 22 March 2026 (UTC) | "Removed anthropic oauth plugin" |

OpenCode's [V2 providers page](https://opencode.ai/v2/docs/providers/) lists sign-in steps for a ChatGPT plan and for GitHub Copilot and has no Claude account sign-in; Claude appears there only as a model ID routed through OpenRouter.

The routes to Claude models that OpenCode documents all bill per token or through OpenCode's own plans:

- An Anthropic API key: run `/connect`, pick Anthropic, and paste a key from the Anthropic Console. A Claude plan doesn't include API access, and [my Claude Code API key vs subscription guide](/blog/claude-code-api-key-vs-subscription/) covers that billing split.
- OpenCode's pay-as-you-go models (Zen), which list Claude Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5 among others.
- OpenCode Go, where Claude Haiku 5.5 is the one Claude model on the list.
- Amazon Bedrock or Google Vertex AI, both in OpenCode's provider directory.

If the plan you already pay for is Claude Pro or Max, the plan's usage only reaches you through Claude Code and Anthropic's apps. When you run short on it, [the four ways back from a Claude usage limit](/blog/claude-usage-limits/) are the options Anthropic offers.

## OpenCode vs Claude Code by What You Already Pay For

<img src="/assets/blog/opencode-vs-claude-code/payment-decides-harness.webp" alt="Matrix of seven payments a reader may already have, from a Claude Pro or Max plan to no paid plan, showing whether Claude Code and OpenCode can use each one; the Claude plan is the one payment OpenCode cannot use" title="Which harness can use what you already pay for" width="1200" height="806" loading="lazy" decoding="async" />

Each row below carries the sentence it rests on, read on 25 October 2026:

| You already have | Claude Code | OpenCode | Source sentence |
|---|---|---|---|
| Claude Pro or Max plan | Yes, sign in with `/login` | No | Anthropic: OAuth is "designed to support ordinary use of Claude Code and other native Anthropic applications"; OpenCode: "Anthropic explicitly prohibits this" |
| Anthropic API key | Yes | Yes | Claude Code "requires a Pro, Max, Team, Enterprise, or Console account"; OpenCode: "Create an API key in the Anthropic Console and enter it when prompted" |
| Amazon Bedrock or Google Cloud account | Yes | Yes | Anthropic lists Amazon Bedrock, Google Cloud's Agent Platform and Microsoft Foundry on its [enterprise deployment page](https://code.claude.com/docs/en/third-party-integrations); OpenCode's directory lists Amazon Bedrock and Google Vertex AI |
| ChatGPT Plus or Pro | No | Yes | OpenCode: "Use a ChatGPT Plus or Pro plan instead of an OpenAI API key"; Anthropic's setup, authentication and deployment pages name no OpenAI sign-in |
| GitHub Copilot | No | Yes | OpenCode: Copilot "supports device OAuth", and "The connected account needs Copilot Chat access" |
| OpenCode Go | Partly: Claude Haiku 5.5, Kimi K3, DeepSeek V4, MiniMax M3 and Qwen models | Yes | OpenCode's [Claude Code harness page](https://opencode.ai/v2/docs/console/harnesses/claude-code/): "Claude Code can only use models that accept Anthropic Messages" |
| No paid plan or key | No | Yes, on the free models | Anthropic: "The free claude.ai plan does not include Claude Code access"; OpenCode lists models that are free "for a limited time" |

Anything billed per token, an Anthropic key or a cloud account, works in both, so pick the harness on install route, licence and surfaces.

## Install Routes and Accounts, From Each Tool's Docs

| | Claude Code | OpenCode |
|---|---|---|
| How its maker describes it | "Available in your terminal, IDE, desktop app, and browser" (overview) | "an open source AI coding agent" (V2 intro) |
| Install on macOS or Linux | `curl -fsSL https://claude.ai/install.sh \| bash`, or `brew install --cask claude-code` | `curl -fsSL https://opencode.ai/v2/install \| bash`, or `npm install -g @opencode/cli` |
| Install on Windows | `irm https://claude.ai/install.ps1 \| iex` in PowerShell, or `winget install Anthropic.ClaudeCode` | `npm install -g @opencode/cli`, a standalone binary or the desktop build; the V2 intro says "Windows package managers are not supported" |
| Account needed | A Pro, Max, Team, Enterprise or Console account, or a third-party provider | "API keys for the LLM providers you want to use" (V1 intro), or one of the plan sign-ins above |
| Versions to watch | One CLI, auto-updating on the native install | OpenCode 1 and 2 "cannot be installed side by side under their default command" |

The V1 and V2 split matters for this topic: the sentence about Anthropic's prohibition sits on the V1 providers page, and the V2 providers page drops it while still listing no Claude sign-in. On the Claude Code side, the CLI and the VS Code extension read the same settings files, and [my Claude Code in VS Code vs terminal guide](/blog/claude-code-in-vs-code-vs-terminal/) maps which features only one of them has.

## OpenCode Go and Zen Pricing on 25 October 2026

For individuals, OpenCode sells two things on top of the free app (plus a quote-based Enterprise offer): a subscription (Go) and a pay-as-you-go model list (Zen, which the V2 docs file under OpenCode Console as "Models"). Both are optional: the [Go docs](https://opencode.ai/v2/docs/console/go/) call Go "completely optional", and the models page says the same of the pay-as-you-go service.

### OpenCode Go

| | Go | Go Plus |
|---|---|---|
| Price | **$10 a month** | **$40 a month** |
| Claude Haiku 5.5 monthly limit | $15 | $60 |
| GLM-5.3 monthly limit | $15 | $120 |
| MiniMax M3 monthly limit | $60 | $180 |
| GLM-5.3-Flash monthly limit | $60 | $180 |
| Workspace | One member | One member |

The limits are dollar amounts of usage priced at each model's listed token rates, and "Token pricing is the same for Go and Go Plus." Each model allows 20% of its monthly limit in any five hours and 50% in any week. Go is for a single-member workspace: "A workspace with a Go subscription cannot invite members." The model list "may change", and the [Go page](https://opencode.ai/go) shows the same $10 and $40 prices.

### Zen, Pay as You Go

[OpenCode's models page](https://opencode.ai/v2/docs/console/models/) prices each model per million tokens. A sample of the rows:

| Model | Input | Output | Cached read |
|---|---|---|---|
| Claude Sonnet 5.5 | $2.00 | $10.00 | $0.20 |
| Claude Opus 5.5 | $4.00 | $20.00 | $0.20 |
| Claude Haiku 5.5 (up to 100K tokens) | $0.10 | $0.50 | $0.01 |
| GLM 5.3 | $1.40 | $4.40 | $0.26 |
| Big Pickle and other free models | Free | Free | Free |

On top of token prices, "A processing fee of 4.6% + $0.31 is added to each credit purchase". The [Zen page](https://opencode.ai/zen) adds that a refund is possible "if the charge was made within the last 14 days and you have not used the credits from that purchase". For what the same Claude models cost from Anthropic directly, [my Claude Sonnet vs Opus cost guide](/blog/claude-sonnet-vs-opus/) has Anthropic's price table; I quote only OpenCode's rates here.

### One Worked Cost Line, Fee Included

A $20 top-up with the fee, then one session on Claude Sonnet 5.5 at OpenCode's listed rates, with no cache hits:

1. Fee on $20: 4.6% x $20 = $0.92, plus $0.31 = **$1.23**, so the card is charged $21.23. The Zen page states the same figure: "$1.23 per $20 balance top-up".
2. Session: 2,000,000 input tokens x $2.00 per million = $4.00, plus 200,000 output tokens x $10.00 per million = $2.00, for **$6.00** of balance.
3. With the fee spread across the top-up, each balance dollar costs $21.23 / $20 = $1.0615, so the session costs about **$6.37** on the card.

Cached reads bill at $0.20 per million on Sonnet 5.5 and cache writes at $2.50, so a session that rereads the same files several times can cost less than step 2. On Go, Claude Haiku 5.5's $15 monthly limit works out to $3.00 per five hours (20%) and $7.50 per week (50%).

### Is OpenCode Free?

Yes, the app is: it is MIT-licensed, and Go and Zen are optional. What costs money is the model provider you connect, unless you stay on the models OpenCode marks free "for a limited time". The models page's privacy notes say some of those free models may use collected data to improve the model during the free period.

## Running OpenCode's Models Inside Claude Code

The OpenCode Go row in the diagram also works the other way round. OpenCode's Claude Code harness page, cited in the table above, sets Claude Code up against OpenCode's gateway:

- Set `ANTHROPIC_BASE_URL` to `https://opencode.ai/inference/anthropic` for pay-as-you-go, or `https://opencode.ai/inference/go/anthropic` for Go, and `ANTHROPIC_AUTH_TOKEN` to an OpenCode key, in the `env` block of `~/.claude/settings.json`.
- Use `ANTHROPIC_AUTH_TOKEN`, not `ANTHROPIC_API_KEY`, and "If you are signed in to a Claude account, run /logout first so Claude Code doesn't send that login to Console."
- On Go, the models Claude Code can reach are Claude Haiku 5.5, Kimi K3, DeepSeek V4, MiniMax M3 and Qwen models; "GPT, Gemini, and most open models are not available in Claude Code yet."

Anthropic's enterprise deployment page documents the same `ANTHROPIC_BASE_URL` variable for LLM gateways. Which credential Claude Code uses when a gateway token and a claude.ai login are both present, and what you lose, is in the API key vs subscription guide linked above.

## OpenCode vs Claude Code: Let the Payment Pick

The payment you already have is the first filter in OpenCode vs Claude Code, and the docs make it a short one:

- A Claude Pro or Max plan: Claude Code. OpenCode's own docs say Anthropic prohibits using that plan in OpenCode.
- A ChatGPT Plus or Pro or GitHub Copilot plan: OpenCode, which signs in to both.
- An Anthropic key or a Bedrock or Google Cloud account: either harness; pick on install route, licence and surfaces from the table above.
- No paid plan yet: OpenCode on its free models, then Go from $10 a month if you start paying.

If OpenAI's Codex is your third candidate, [my Claude vs ChatGPT comparison](/blog/claude-vs-chatgpt/) sets Claude Code beside Codex, and a ChatGPT plan also signs in to OpenCode. Recheck Anthropic's legal page and OpenCode's providers and Go pages before you switch: OpenCode dropped its Claude plan plugin in March 2026, and OpenCode says its model list "may change". Start from the plan on your last card statement.
