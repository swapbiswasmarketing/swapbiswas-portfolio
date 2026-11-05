---
title: "Claude Internal Server Error: What a 500 Means and the Fix"
description: "A Claude internal server error is a failure inside Anthropic's API. What Claude Code already retried, what it kept, and your next step depend on when the 500 hit."
publishDate: 2026-11-05
category: [AI, Tools]
img: /assets/stock-7.webp
img_alt: "Renaissance-style still life of sealed letters, a quill and an open ledger by a window, one red wax seal"
faqs:
  - q: "What does API Error: 500 Internal server error mean in Claude Code?"
    a: "Anthropic's error reference says a 5xx from the API is an unexpected failure inside the API and is not caused by your prompt, settings or account. Check status.claude.com, wait a minute and send your message again; run /feedback if it persists with no posted incident."
  - q: "Is a Claude 500 error my fault?"
    a: "No. The Claude Code error reference says a 500 from the API itself is not caused by your prompt, settings or account. The exception is a 502 or other page title from a proxy or gateway you configured, which points at that gateway rather than Anthropic."
  - q: "What does Claude server error mid-response mean?"
    a: "A 5xx or overload arrived after Claude had completed a block of text or a tool call. Claude Code does not re-run the request, because that could run the same tool calls twice; it keeps the completed output and shows that the response above may be incomplete. Reply continue to pick up from the last completed block."
  - q: "Can a Claude API error 500 actually be a timeout?"
    a: "Anthropic's Platform docs say the API can return timeout_error with a 500 when a request reaches the server's time limit before the response starts. Check the error type in the JSON body; for long requests, use the streaming Messages API or Message Batches."
  - q: "Does Claude Code retry a 500 error automatically?"
    a: "Yes, when it arrives before any output has streamed: Claude Code retries transient failures up to 10 times with exponential backoff before showing an error. After thinking but before text or a tool call it retries up to two times (v2.1.284 or later). After a text block or tool call it does not re-run the request."
---

One 500 from the Claude API is a timeout wearing a server-error code. Anthropic's [Platform error reference](https://platform.claude.com/docs/en/api/errors#http-errors) says the API "also returns timeout_error with other status codes, such as a 500 when a request reaches the server's time limit before the response starts", and the fix for that one is a streaming request, not a retry. A second look-alike is the `API Error: 502 Bad Gateway` line Claude Code prints when a proxy or gateway you configured failed, not Anthropic. Every other Claude internal server error is what it says: an unexpected failure inside Anthropic's API.

My view, after reading both of Anthropic's error references end to end: a Claude internal server error is never your prompt or account, and the right move depends on when in the turn it hit, because Claude Code has already decided what to retry and what to keep before you see the message.

## What a Claude Internal Server Error Means

A Claude internal server error (HTTP 500) is an unexpected failure inside Anthropic's API, and Anthropic's docs say it "is not caused by your prompt, settings, or account". Your first three actions: check [status.claude.com](https://status.claude.com/), wait a minute, then send the message again (typing "try again" is enough). If it repeats with no posted incident, run `/feedback`.

That answer comes from the [500 entry in the Claude Code error reference](https://code.claude.com/docs/en/errors#api-error-500-internal-server-error), read on 5 November 2026. The message Claude Code shows on the Anthropic API reads:

`API Error: 500 Internal server error. This is a server-side issue, usually temporary - try again in a moment. If it persists, check https://status.claude.com.`

(Anthropic's page uses a dash character outside plain ASCII; the wording is otherwise verbatim.) Three details on that entry change how you read the line:

- Claude Code "shows the status code and the API's error message for any 5xx response", so a 503 or 504 arrives in the same shape with a different number.
- The trailing sentence varies by provider: Amazon Bedrock, Google Cloud's Agent Platform and Microsoft Foundry configurations name that provider's status page, and a custom `ANTHROPIC_BASE_URL` names the gateway host. If the message names a host you recognise as your company's gateway, start there.
- A 500 and a 529 are different errors. A 529 means the API is at capacity; its causes, the `/model` switch and the retry variables are covered in [the 529 section of my Claude Code slowness guide](/blog/why-is-claude-code-so-slow/).

## API Error: 500 in Claude Code Depends on When It Hit

Claude Code does not treat every server error the same way. The [automatic retries section](https://code.claude.com/docs/en/errors#automatic-retries) opens with "Claude Code retries transient failures up to 10 times with exponential backoff before showing you an error", then splits the turn into stages. The table below is that split, row by row, with each version gate the docs state.

| Where in the turn the 500 hit | What you see | Retried automatically? | Your work | What to do |
|---|---|---|---|---|
| Before any of Claude's response has streamed | `API Error: 500 Internal server error ...` | Yes, inside the retry budget (10 by default) before the message appears | Nothing was produced, so nothing is lost | Check status, wait a minute, send again |
| After Claude finished thinking, before any text or tool call | The 500 message, once retries run out | Yes, "up to two times" (v2.1.284 or later; before that the turn ended with the error) | No text or tool call had started, so no output is lost | Send again; on an older build, update first |
| After Claude completed a block of text or a tool call | `API Error: Server error mid-response. The response above may be incomplete.` | No, because a re-send "could execute the same tool calls twice" | Completed blocks are kept and finished tool calls run (v2.1.199 or later) | Read what remains, then reply `continue` |
| After Claude finished the whole response | Nothing | Nothing to retry | The complete response is kept and the turn ends normally | Carry on |
| Behind a proxy, load balancer or gateway that returns an HTML error page | `API Error: 502 Bad Gateway`, or another status code plus the page's title | Depends on the code | As above, by stage | Check the gateway named in the message |

<img src="/assets/blog/claude-internal-server-error/500-timing.webp" alt="Three stages of a Claude Code turn and how a 500 error is handled at each: retried before output, retried up to two times after thinking, kept and not re-run after a text block or tool call" title="Where the 500 hit decides what Claude Code did" width="1200" height="617" loading="lazy" decoding="async" />

Two version gates in that table are worth checking against your install with `claude --version`:

- **v2.1.199**: before it, Claude Code "discarded the partial output and reported the whole turn as an error when a server error arrived mid-stream". On a current build you keep the work.
- **v2.1.284**: before it, a server error after thinking but before any text ended the turn instead of being retried.

If your version is older than either, [updating Claude Code](/blog/how-to-update-claude-code/) changes what a 500 costs you more than any setting does.

### The Mid-Response Variant

The [incomplete-response entry](https://code.claude.com/docs/en/errors#the-response-above-may-be-incomplete) defines the `Server error mid-response` notice as "a mid-stream overloaded or 5xx server error" and gives the reason Claude Code stops: "Re-sending the request could run the same tool calls twice". For a coding session that means a file edit or a shell command is not repeated behind your back.

What survives and what does not, per the same entry:

- In an interactive session, Claude Code keeps every block Claude completed before the error but "discards an interrupted final block when the turn ends", so the last sentences or tool calls may be missing. Reply `continue` and Claude picks up from its last completed block.
- In a non-interactive run such as `-p`, an Agent SDK run or a cloud session, Claude Code prompts Claude to continue on its own, "up to three times in a row", when the cut-off response has text but no tool calls. You see the notice only after those continuations are used up.

Before you type `continue`, check the last file Claude said it was editing. A tool call that finished has run; one that was interrupted has not.

## Gateway Errors and Timeouts That Look Like a 500

The two look-alikes from the top of this post need different fixes from a plain wait-and-retry.

| Look-alike | How to recognise it | Source | Fix |
|---|---|---|---|
| Gateway or proxy error page | `API Error: 502 Bad Gateway`, or a status code and an HTML page title; the trailing sentence names the gateway host when `ANTHROPIC_BASE_URL` is set | [Claude Code 500 entry](https://code.claude.com/docs/en/errors#api-error-500-internal-server-error) | Check the gateway first. Before v2.1.281, Claude Code dropped the status code when the page had a title, and printed raw markup when it had none |
| Every request fails behind an LLM gateway | The 500 on every message, not just one | Same entry | Confirm the gateway and its upstream accept tool search fields: Claude Code sends `defer_loading` tool fields and `tool_reference` blocks with the `anthropic-beta` header that enables them. Before v2.1.304, tool search was off behind a gateway unless `ENABLE_TOOL_SEARCH` turned it on |
| 500 that is a timeout | The JSON body's error type is `timeout_error` instead of `api_error` | [Platform error reference](https://platform.claude.com/docs/en/api/errors#http-errors) | The docs say to use the streaming Messages API for long requests, and recommend streaming or Message Batches "especially those over 10 minutes" |

If you route Claude Code through your own gateway or API key, the billing and sign-in side of that setup is in [my API key vs subscription guide](/blog/claude-code-api-key-vs-subscription/). The two gateway rows above are the only cases on this page where the cause sits on your side of the connection.

## Claude API Error 500 for Developers

If you call the API directly or through an SDK, the [Platform error reference](https://platform.claude.com/docs/en/api/errors) as of November 2026 says:

| Fact | What the docs say |
|---|---|
| Meaning | "500 - api_error: An unexpected error has occurred internal to Anthropic's systems." |
| Retry advice | "Retry the request with exponential backoff; if the error persists, contact support with the request ID." |
| SDK behaviour | The official SDK retries connection errors, rate limits and 5xx errors with exponential backoff, "twice by default"; `max_retries` configures or disables it |
| Streaming | Over server-sent events, "an error can occur after the API returns a 200 response", and it follows the Error events shape instead |
| Error body | JSON with a top-level `error` object carrying `type` and `message`, plus a `request_id` field |
| Request ID | Every response carries a `request-id` header; the Python and TypeScript SDKs expose it as `_request_id` |

For your own error handling:

- Log `error.type` as well as the status code, so a 500 `timeout_error` is not retried the same way as a 500 `api_error`.
- Log the request ID on every failure: support asks for it, and it is gone if you only logged the status line.

For Claude Code users, the equivalent of the request ID is `/feedback`. The 500 entry says it sends your request details "so Anthropic can investigate", and the reference has a [Report an error](https://code.claude.com/docs/en/errors) section for environments where `/feedback` is unavailable.

## The Status Page Address Older Guides Still Use

Anthropic's status page is status.claude.com. On 5 November 2026, `curl` showed status.anthropic.com ending at `https://status.claude.com/` with HTTP 200, so the old address still works, but it is not what Claude Code's own message names.

Two third-party guides to this error still lead with the old address. On 5 November 2026, the text of the [rapidevelopers guide](https://www.rapidevelopers.com/blog/claude-internal-server-error) named status.anthropic.com 8 times and status.claude.com once, and the [claudelog FAQ](https://claudelog.com/faqs/what-does-claude-code-internal-server-error-mean/) named status.anthropic.com once and status.claude.com not at all. Neither page mentions the mid-response notice, `timeout_error` or `/feedback`, which are the three places where the next step differs from waiting.

## Server Errors vs the Errors That Look Like Them

A 500 often gets confused with messages that have different causes and fixes. These are the neighbours, each owned by a post that covers it in full:

| Message | What it is | Where it is covered |
|---|---|---|
| `API Error: Repeated 529 Overloaded errors` | Capacity across all users; not your usage limit | The 529 section of the slowness guide linked above |
| `API Error: Server is temporarily limiting requests (not your usage limit)` | A short-lived throttle unrelated to your plan quota | [Claude usage limits by plan](/blog/claude-usage-limits/) |
| `Prompt is too long` | The conversation plus attached files exceeds the model's context window | [/compact vs /clear](/blog/claude-code-compact-vs-clear/) |

If Claude Code keeps hitting server errors in a script nobody is watching, the error reference says `CLAUDE_CODE_RETRY_WATCHDOG=1` on v2.1.199 or later "raises the default retry count for other transient errors, such as server errors, timeouts, and dropped connections, to 300, roughly three hours of backoff". The rest of the retry variables are in the slowness guide linked above.

## What to Do About a Claude Internal Server Error

A Claude internal server error is Anthropic's failure, and the next move depends on when in the turn it hit:

1. **Read which message you got.** `500 Internal server error` means the retries already failed. `Server error mid-response` means your completed work was kept. A `502` with a page title points at your gateway.
2. **Check the status page the message names**: status.claude.com, your cloud provider's page, or your gateway host.
3. **Wait a minute and send again.** Type "try again" rather than re-pasting a long prompt; the original is still in the conversation.
4. **After a mid-response error**, check the last file or command Claude touched, then reply `continue`.
5. **On the API**, log `error.type` and the request ID; switch long requests to streaming if the type is `timeout_error`.
6. **If it persists with no incident**, run `/feedback` in Claude Code, or contact support with the request ID.

Anthropic changes the retry rules and message wording often (the reference carries version gates up to v2.1.318 on 5 November 2026), so check the [Claude Code error reference](https://code.claude.com/docs/en/errors) against your `claude --version` before you rely on any row above.
