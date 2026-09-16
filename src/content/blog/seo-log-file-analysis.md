---
title: "SEO Log File Analysis When the Log File Does Not Exist"
description: "Most SEO log file analysis guides assume a raw access log on disk. On Vercel, Netlify and Cloudflare it is not there. Here is what each host gives you instead."
publishDate: 2026-09-14
category: [SEO]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "Can you do log file analysis without server access?"
    a: "Partly. Search Console's Crawl Stats report covers the past 90 days and breaks crawling down by response, file type, crawl purpose and Googlebot type, which answers volume and waste questions. It does not give you a per-URL crawl count or let you verify a bot's IP, so those questions still need a log."
  - q: "Does Netlify let you download raw access logs?"
    a: "Netlify's current documentation lists no raw access log download. The documented route to site traffic logs is Log Drains, which the docs state is available on Enterprise plans, and the drained records are posted to an endpoint you run rather than offered as a file."
  - q: "How long does Vercel keep runtime logs?"
    a: "Vercel documents 1 hour on Hobby, 1 day on Pro, 3 days on Enterprise, and 30 days with Observability Plus on either Pro or Enterprise. Within that 30-day window you can view up to 14 consecutive days."
  - q: "Is Search Console Crawl Stats a replacement for log files?"
    a: "No. Crawl Stats stops at 90 days, reports aggregates rather than individual URLs, and only covers Google. A log file records every requester, including Bingbot and AI crawlers, for as long as you keep the file."
  - q: "How do I verify Googlebot in a log file?"
    a: "Run a reverse DNS lookup on the IP from the log line, confirm the name ends in googlebot.com, google.com or googleusercontent.com, then run a forward lookup on that name and check it returns the same IP. Google also publishes its crawler IP ranges as JSON in CIDR format."
---

`vercel.json` in this repository is four lines long:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "trailingSlash": true
}
```

That is the entire file. It has no logging configuration in it because there is no origin server process to configure. The site is Astro 5 static output on Vercel, and when I went looking for a file to run SEO log file analysis against, there was nothing on disk to open.

The site is 147 blog posts at Domain Rating 13. Across the Search Console window I pulled, 2025-05-01 to 2026-08-31, it recorded 164,564 impressions and 186 clicks. 23 of those 147 posts have never registered a single impression. Whether Googlebot has fetched those 23 URLs at all, and how often, is the kind of question a raw access log settles with one grep. It is also the question I could not settle, and working out why took me through the current log documentation for Vercel, Netlify and Cloudflare.

Every plan tier and retention window below is quoted from the host's own docs. I have not bought a log drain and I have not run a log analysis on this site, so nothing here is a before-and-after. It is a map of what you can and cannot get.

## What SEO Log File Analysis Assumes About Your Stack

A raw access log has one line per request, carrying the client IP, the timestamp, the path, the status code, the referrer and the user agent string. Netlify's Log Drains reference lists those same fields for the traffic records it streams, down to "client_ip: IP address of the client" ([Netlify Log Drains docs](https://docs.netlify.com/manage/monitoring/log-drains/)).

Filter those lines to verified Googlebot and you can count how many times each URL was fetched, which status codes Googlebot actually received, which URLs it has never touched, and how much of the crawl went to images and scripts rather than HTML. Each of those answers depends on a process that sees every request and writes it down.

Apache and NGINX do that by default, and shared hosting control panels expose the resulting file as a download. A CDN handing back a prebuilt HTML file from an edge cache does not, unless the platform chooses to stream the records somewhere. Anyone running a [technical SEO site audit](/blog/how-to-conduct-a-technical-seo-site-audit/) on static hosting hits that split immediately.

## Server Logs for SEO on Vercel, Netlify, and Cloudflare

| Host | Documented route to request data | Plan needed | Retention |
|---|---|---|---|
| Vercel | Runtime Logs in the dashboard | Hobby | 1 hour |
| Vercel | Runtime Logs | Pro | 1 day |
| Vercel | Runtime Logs with Observability Plus | Pro or Enterprise | 30 days, 14 consecutive viewable |
| Vercel | Drains, Logs data type | Pro or Enterprise | your endpoint, billed per GB |
| Netlify | Log Drains, site traffic log output | Enterprise | your endpoint, near real time |
| Netlify | Function and edge function logs in the UI | not published per plan | up to 7 days |
| Cloudflare | Logpush | Enterprise | your destination |
| Cloudflare | Workers Trace Events Logpush | Workers Paid | your destination |

Sources for every row are quoted in the subsections below.

### Vercel: Runtime Logs and Drains

Vercel publishes runtime log retention as a plan table: "Hobby 1 hour of logs, Pro 1 day of logs, Pro with Observability Plus 30 days of logs, Enterprise 3 days of logs, Enterprise with Observability Plus 30 days of logs" ([Vercel Runtime Logs](https://vercel.com/docs/logs/runtime)). One hour covers watching a deploy finish. Every crawl question spans weeks, so Hobby retention is out of reach before you start.

The 30-day tier comes with a second limit: "With Observability Plus, you can view up to 14 consecutive days of runtime logs within a 30-day window" ([Vercel Runtime Logs](https://vercel.com/docs/logs/runtime)). Month-over-month crawl comparison is off the table at that granularity.

For a static site the sharpest line in that doc is about coverage rather than time. Vercel's runtime logs include "Only static request that serves cache; to get all static logs check Log Drains" ([Vercel Runtime Logs](https://vercel.com/docs/logs/runtime)). A site like mine is almost entirely static HTML. The requests I would want to analyse are the ones that page does not promise to record.

Drains are the documented route to full static logs, and they are paid. Vercel states that "Drains are available to all users on the Pro and Enterprise plans" and that Hobby or Pro Trial users must upgrade ([Vercel Drains](https://vercel.com/docs/drains)). The Logs data type is described as "Runtime, build, and static logs from your deployments", and Drains Volume is priced at $0.50 per GB on Pro ([Vercel Drains](https://vercel.com/docs/drains)). Vercel frames this plainly on the logs overview: "For longer log storage, you can use Log Drains" ([Vercel Logs](https://vercel.com/docs/logs)).

One Vercel log type does export cleanly, and it is the wrong one for SEO. "You can export up to 90 days of audit logs to a CSV file" ([Vercel Logs](https://vercel.com/docs/logs)), and the audit log records team activity, not requests.

### Netlify: Log Drains on Enterprise

Netlify's Log Drains doc opens with the plan requirement: "This feature is available on Enterprise plans" ([Netlify Log Drains docs](https://docs.netlify.com/manage/monitoring/log-drains/)). That doc page was last updated 11 September 2026, so this is the current position rather than an old restriction.

What a drain carries is access-log shaped. Netlify lists "site traffic log output: tracks visitor requests for assets and pages" alongside function, edge function, deploy and WAF output ([Netlify Log Drains docs](https://docs.netlify.com/manage/monitoring/log-drains/)). Delivery is a push, not a download: "Netlify batches the site's log records from our CDN and build system and posts them to an endpoint in JSON/NDJSON format in near real-time" ([Netlify Log Drains docs](https://docs.netlify.com/manage/monitoring/log-drains/)). You need somewhere to receive and store that stream before you have anything to analyse.

Below Enterprise, the Netlify UI offers deploy logs, function logs, edge function logs and audit logs, and the function logs cover "up to 7 days of activity (retention duration depends on your pricing plan)" ([Netlify logs docs](https://docs.netlify.com/manage/monitoring/logs/)). Netlify publishes no per-plan table under that sentence, so I am not going to guess the Free and Pro numbers.

Netlify's current documentation lists no raw access log download, and Log Drains is the documented route to site traffic logs. The explicit refusals are older. In December 2019 a Netlify staff member wrote that "We have put a lot of consideration into offering raw log download, and it is not practical for us at present" and gave privacy law as the cause, since the logs "would need to be scrubbed first, at a minimum" ([Netlify community thread](https://answers.netlify.com/t/download-raw-server-access-logs/6586)). That post is nearly seven years old and should be read as history, though it does explain the shape of what shipped later.

That privacy constraint survives into the product. In the drain configuration, `client_ip` is "Omitted if you selected Exclude personally identifiable information (PII)" ([Netlify Log Drains docs](https://docs.netlify.com/manage/monitoring/log-drains/)). Turn on PII exclusion and you lose the field bot verification runs on, which is covered further down.

The substitute Netlify points non-Enterprise users toward is its analytics product, where collection happens server-side and so "complies with the General Data Protection Regulation (GDPR), has no impact on site performance, is not stopped by ad blockers, and does not require any extra configuration" ([Netlify analytics docs](https://docs.netlify.com/manage/monitoring/project-analytics/overview/)). Charts default to the last 30 days ([Netlify analytics docs](https://docs.netlify.com/manage/monitoring/project-analytics/overview/)). Useful, and still an analytics product rather than a log. A `netlify.toml` is sitting in my repo from the [WordPress to Astro migration](/blog/wordpress-to-astro-netlify-migration/) I wrote up, which is how I know both sides of this comparison apply to the same site.

### Cloudflare: Logpush and Workers Trace Events

Cloudflare publishes Logpush availability as a grid: Free No, Pro No, Business No, Enterprise Yes ([Cloudflare Logpush docs](https://developers.cloudflare.com/logs/logpush/)). There is one route below Enterprise, and it is narrow: "Users without an Enterprise plan can still access Workers Trace Events Logpush by subscribing to the Workers Paid plan" ([Cloudflare Logpush docs](https://developers.cloudflare.com/logs/logpush/)).

Workers Trace Events Logpush "is available on the Workers Paid plan" ([Cloudflare Workers Logpush docs](https://developers.cloudflare.com/workers/observability/logs/logpush/)), and what it carries is Worker trace data: invocation metadata, console output, exceptions. A static asset served straight from cache never runs a Worker, so those hits are out of scope.

For Cloudflare Pages I could not find a page stating what request logging a static Pages project gets on Free, Pro or Business. The Pages debugging doc I opened covers build logs and routes you to "Deployments > View details > Build log" ([Cloudflare Pages debugging docs](https://developers.cloudflare.com/pages/configuration/debugging-pages/)). Absence of documentation is not a denial, so treat that as unknown rather than as a no.

## Crawl Stats Is the Fallback, and It Stops at 90 Days

Search Console's Crawl Stats report is the surface every log guide skips past, and on a static host it is the main one you have. Its boundary is stated in the first line of Google's own help page: "The Crawl Stats report shows you statistics about Google's crawling history on your website for the past 90 days" ([Google Search Console Help](https://support.google.com/webmasters/answer/9679690)).

What it reports is more than most people use. Total crawl requests counts "The total number of crawl requests issued for URLs on your site, whether successful or not" ([Google Search Console Help](https://support.google.com/webmasters/answer/9679690)), so failed fetches sit inside the number rather than hidden from it. The report breaks that total down by crawl response, file type, crawl purpose and Googlebot type, and it splits purpose into Discovery, where "The URL requested was never crawled by Google before", and Refresh ([Google Search Console Help](https://support.google.com/webmasters/answer/9679690)).

Host status is an availability signal rather than request data: it "describes whether or not Google encountered availability issues when trying to crawl your site", and a clean result reads "Google didn't encounter any significant crawl availability issues on your site in the past 90 days" ([Google Search Console Help](https://support.google.com/webmasters/answer/9679690)). Aggregation shows up elsewhere too. On a property with subdomains, "Only the top 20 child domains that received traffic in the past 90 days are shown" ([Google Search Console Help](https://support.google.com/webmasters/answer/9679690)).

If you are assembling a recurring report out of these numbers, the structure I use for that is in my [SEO report template](/blog/what-is-seo-report/).

## Crawl Stats Could Not Answer My Actual Question

My question was per-URL: have those 23 zero-impression posts ever been fetched. The breakdowns Google documents are by crawl response, file type, crawl purpose and Googlebot type. None of those is a list of URLs, so the report cannot be filtered down to one path.

Indexing is not where the wall is. Search Console shows 137 of 141 submitted pages indexed for this property, so most of those URLs are known to Google. What I want next is crawl frequency per URL over time, and that number lives in the file I do not have.

The rest of the distribution makes the question worth asking. Of 157 URL rows in the same export, 31 sit at average position 21 to 50 and hold 73,328 impressions between them, the largest impression pool on the site, and they return 24 clicks. Whether Googlebot is refreshing that group weekly or monthly is a reasonable input into whether rewriting them is worth the effort, and it is the same group I described as [striking distance keywords](/blog/striking-distance-keywords/) from the query side. URL Inspection will give me a last-crawl date one URL at a time. I have not measured how long inspecting 23 URLs by hand takes, because I have not done it yet.

Sample size discipline applies to every number in this section. This is one property at Domain Rating 13 with 186 clicks over 16 months, no deliberate link building, and 124 of 147 posts carrying any impressions at all. None of it generalises to your site. It is an existence proof that these surfaces stop where I say they stop.

## Crawl Budget Analysis Without Server Access

Several of the Crawl Stats breakdowns are directly usable for crawl budget analysis, even without a log.

- Crawl response: 404s and redirect responses in the mix are requests Google spent on something other than your content.
- File type: a total dominated by images, CSS and JavaScript is crawl spend not going to HTML.
- Crawl purpose: a site publishing regularly wants the Discovery share to move when new URLs ship, since Discovery means the URL was never crawled before.

What none of them tells you is which specific URL absorbed the waste. That gap shows up on my own site in a way I can demonstrate with curl but not measure. Running these requests on 16 September 2026 returned:

| Request | Status | Location |
|---|---|---|
| `https://swapbiswas.com/blog/aeo-vs-seo` | 308 Permanent Redirect | `/blog/aeo-vs-seo/` |
| `http://swapbiswas.com/` | 308 | `https://swapbiswas.com/` |
| `https://www.swapbiswas.com/` | 308 | `https://swapbiswas.com/` |
| `https://swapbiswas.com/Blog/aeo-vs-seo/` | 404 | no case-insensitive redirect |
| `https://swapbiswas.com/blog/does-not-exist/` | 404 | none |

Three redirect hops exist by design, and the 308s come from the platform rather than from my config. The `trailingSlash: true` line quoted at the top of this post is the entire redirect configuration in the repository. No 301 is written anywhere in it, and Vercel issued 308. The response headers on those redirects carry `Server: Vercel` and `Strict-Transport-Security: max-age=63072000`.

A capitalised path returns 404 instead of redirecting, so any external link that arrives with `/Blog/` is a dead request.

Here is the honest limit on all of it. I can see that each of these responses exists. I cannot see how many times Googlebot hit them last month, because that count is a property of the request stream, and nothing on this stack writes the request stream down. Crawl Stats will tell me the site-wide share of crawl requests that ended in a redirect or a 404. It will not attribute a single one of them to `/Blog/aeo-vs-seo/`.

## How to Verify Googlebot in a Log File

If you do get logs, the user agent string is not the evidence. Google documents a verification procedure, and the manual version starts with DNS: "Run a reverse DNS lookup on the accessing IP address from your logs, using the host command" ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot)). The name that comes back has to check out: "Verify that the domain name is either googlebot.com, google.com, or googleusercontent.com" ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot)), and then you confirm it with a forward lookup.

```bash
# 1. reverse lookup the IP from the log line
host <ip-from-your-log>

# 2. the name must end in googlebot.com, google.com or googleusercontent.com
# 3. forward lookup the name from step 1 and confirm it returns the same IP
host <name-from-step-2>
```

At volume you match against the published ranges instead. Google publishes its crawler IP ranges as JSON, and the file covering Googlebot is now `common-crawlers.json`, sitting alongside `special-crawlers.json`, `user-triggered-fetchers.json`, `user-triggered-fetchers-google.json` and `user-triggered-agents.json`. Plenty of SEO posts still name an older `googlebot.json` file. The addresses inside are CIDR blocks: "IP addresses in the JSON files are represented in CIDR format" ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot)). That page was last updated on 20 March 2026, so the reverse DNS method has not been retired.

Now put that next to the Netlify PII switch. A drained traffic log with PII exclusion turned on has no `client_ip` field, and with no client IP there is no reverse DNS lookup to run. You would be back to trusting the user agent string, which is what the verification procedure exists to avoid.

## Can You Do SEO Log File Analysis Without Server Access?

Partly, and the split is clean enough to write down. Volume, response mix and crawl purpose survive the move to a hosted surface. Per-URL detail, bot verification and any history beyond 90 days do not.

| Question | Raw access log | Crawl Stats |
|---|---|---|
| How many crawl requests did Google make last month? | Yes | Yes, within 90 days |
| What share of crawl requests returned a 404? | Yes | Yes, by crawl response |
| How often is `/blog/x/` crawled? | Yes | No, the report is aggregated |
| Has Googlebot ever fetched this specific URL? | Yes | No, use URL Inspection per URL |
| Is this request really Googlebot? | Yes, by reverse DNS | Not applicable, all data is Google's |
| Is Bingbot or an AI crawler hitting the site? | Yes | No, Google-only report |
| What happened 14 months ago? | Yes, if you kept the file | No, 90-day limit |

The two rows that hurt on a content site are the per-URL ones. Orphan page discovery and crawl frequency by template, which is what a log analysis is usually commissioned to find, live in exactly those rows.

## What I Used Instead of Logs on This Site

Four surfaces, none of them a log, and I am naming what each one settled.

Search Console's Pages report gave me the indexed count, 137 of 141 submitted. Crawl Stats gave me the 90-day crawl volume and the response mix. The Search Console performance export gave me the per-URL impression and position table that produced the 23 zero-impression posts and the 31 URLs stuck at position 21 to 50. curl gave me status codes on demand, which covers the half of log analysis that asks what the server returns, while covering none of the half that asks who requested it.

A fifth check is worth running on any static or JavaScript-heavy site, and it needs no logs at all: fetch your own page with a plain HTTP client and read the HTML that comes back before any script runs. That is the failure mode behind [vibe-coded sites that never rank](/blog/vibe-coded-website-seo/), and it is visible in one request.

## The Decision Before You Pay for a Drain

SEO log file analysis is worth paying for when the question is per-URL, or when it reaches back further than 90 days. Mine is per-URL: 23 posts on this site have never taken an impression, and Crawl Stats aggregates by response, file type, purpose and Googlebot type, so no amount of reading it harder will tell me whether Googlebot has fetched them.

If your question is whether crawl requests are being burned on 404s and redirects, the crawl response breakdown answers it today, free, on any property you own, and a drain adds nothing to it.

Write the question down before you price the log. On this site the next step is URL Inspection on those 23 URLs.
