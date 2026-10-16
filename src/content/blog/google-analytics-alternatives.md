---
title: "Google Analytics Alternatives: 10 Trackers Weighed (2026)"
description: "Ten Google Analytics alternatives compared on measured script weight, cookie banners, AI assistant traffic and free plans, from a site that runs GA4 and AdSense."
publishDate: 2026-10-16
category: [SEO, Tools]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "What is the best free alternative to Google Analytics?"
    a: "For a small site, start with Umami Cloud's Hobby plan, which Umami's pricing page listed on 16 October 2026 at $0 a month for up to 100K events, one website and six months of data. Cloudflare Web Analytics and GoatCounter are also free, and Matomo, Umami and Plausible Community Edition are free to self-host."
  - q: "Is there a Google Analytics alternative without cookies?"
    a: "Yes. Plausible, Fathom, Umami, Simple Analytics, Pirsch, Rybbit and GoatCounter each say they count visits without cookies, and Cloudflare says its Web Analytics script stores nothing in the browser. Matomo and PostHog use cookies by default and document settings that turn them off."
  - q: "Is Microsoft Clarity a replacement for Google Analytics?"
    a: "Treat it as a complement. Clarity is free with no traffic limits, but Microsoft's FAQ says its data is retained for site owners up to 30 days from the time of recording, and Microsoft's GA4 integration page says Clarity does not send its playback URL to GA4; the integration pulls GA data into Clarity instead."
  - q: "Do I still need a cookie banner if I switch from Google Analytics?"
    a: "Six cookieless vendors say their analytics needs no banner, though Matomo's consent FAQ says laws such as GDPR, PECR and TDDDG make consent mandatory for client-side analytics even when no personal data is processed. A banner you run for anything else stays: AdSense needs a Google-certified CMP to serve personalized ads in the EEA, the UK and Switzerland, and Microsoft Clarity has enforced consent signals for visits from those regions since 31 October 2025."
  - q: "Which analytics tools show AI assistant traffic?"
    a: "GA4 has an AI Assistant channel, Plausible an AI Assistants channel, Fathom an AI Source dimension, Matomo an AI Assistants report, PostHog an AI channel type, Rybbit an AI channel, Pirsch an AI channel whose documented list leaves out chatgpt.com, and Microsoft Clarity an AIPlatform channel. Umami's code has an LLM channel that its docs do not describe."
---

This site's GA4 tag, as Google Tag Manager (GTM) requests it, came down the wire at **179,904 bytes** on 16 October 2026, and Fathom's script, the lightest of the ten Google Analytics alternatives I measured the same way, at **2,090 bytes**. Script weight decides what a tracker's script costs a visitor to download and parse on an uncached page load; it decides nothing about whether you still need a consent banner, whether visits from ChatGPT get a row of their own, or how much of a GA4 setup you would have to rebuild.

Every alternative script I weighed came in under that GA4 tag, PostHog's default SDK bundle included, so swapping GA4's tag for any of these scripts cuts page weight and the choice between them turns on those other three questions. I run GA4 through Tag Manager on this site, alongside Microsoft Clarity and Google AdSense, and the site layout also loads Vercel's Web Analytics and Speed Insights components, in the repo since 11 May 2026. None of the ten alternatives to Google Analytics below loads here: the byte counts are my own measurements of each vendor's public script, and every feature claim comes from the vendor's own pages, read on the same day.

## What Are the Best Google Analytics Alternatives?

The best Google Analytics alternative depends on the job; each pick below was checked against the vendor's own pages on 16 October 2026:

- **Free and hosted:** Umami Cloud's Hobby plan, with Cloudflare Web Analytics and GoatCounter as the other no-cost picks.
- **Cookieless SaaS:** Fathom or Plausible, both of which label visits from AI assistants.
- **Open source and self-hosted:** Matomo, Umami, Plausible Community Edition or Rybbit.
- **Product analytics:** PostHog, when funnels and session replays matter more than script weight (replays add a 67,154-byte recorder script).
- **Beside GA4 rather than instead of it:** Microsoft Clarity, for heatmaps and session recordings.

If you want one free Google Analytics alternative, I would start with Umami Cloud's Hobby plan: its script was the lightest of the free hosted options I measured, and Umami's [pricing page](https://umami.is/pricing) lists it at $0 a month for up to 100K events, one website and six months of data retention, against 30 days of history on Simple Analytics' free plan.

Neither cookieless SaaS pick has a free hosted plan. On 16 October 2026, Fathom's [pricing page](https://usefathom.com/pricing) started at **$15 a month** for up to 100,000 monthly pageviews, and Plausible's Starter plan started at **$9 a month** for up to 10k monthly pageviews and $19 at 100k in its [pricing table](https://plausible.io/#pricing), both on monthly billing, with two months free if you pay yearly.

| Tool | Script on the wire (bytes) | Cookie banner, in the vendor's words | AI-assistant visits | Free option | Open source / self-host |
|---|---|---|---|---|---|
| GA4, this site via Tag Manager | 179,904 | [Uses cookies](https://developers.google.com/tag-platform/security/concepts/cookies); Google's [EU user consent policy](https://www.google.com/about/company/user-consent-policy/) requires consent "where legally required" | AI Assistant channel | [Free of charge](https://marketingplatform.google.com/about/analytics/) | No |
| Plausible | 2,489 | "[No cookie banner required](https://plausible.io/open-source-website-analytics)" | AI Assistants channel | 30-day trial, no card; Community Edition is free to self-host | Yes, AGPLv3 |
| Fathom | 2,090 | "[No cookies, so no consent banner for analytics](https://usefathom.com/docs/troubleshooting/cookies)" | AI Source dimension | [No free plan](https://usefathom.com/pricing); 7-day trial with a card | No; [the older Fathom Lite](https://github.com/usefathom/fathom) is MIT-licensed |
| Umami | 2,333 | "[No annoying cookie banner is required](https://umami.is/platform)" | LLM channel in its code, not its docs | Hobby plan at $0 | Yes, MIT |
| Simple Analytics | 3,854 | "[No consent required from your visitors](https://docs.simpleanalytics.com/)" | None documented | [Free plan with 30 days of history](https://www.simpleanalytics.com/pricing) | Its [tracking scripts](https://docs.simpleanalytics.com/script) are open source |
| Pirsch | 3,565 | "[Say goodbye to consent banners](https://pirsch.io/)" | AI channel | [30-day trial, no card](https://pirsch.io/pricing) | Open-source core ([AGPL-3.0](https://github.com/pirsch-analytics/pirsch)); on-premise on Enterprise |
| GoatCounter | 3,358 | "[Probably doesn't require a GDPR consent notice](https://www.goatcounter.com/help/gdpr)" | None documented | [Free for "reasonable public usage"](https://www.goatcounter.com/) | Yes, a [modified EUPL 1.2](https://github.com/arp242/goatcounter/blob/main/LICENSE) |
| Cloudflare Web Analytics | 10,264 | Its script "[does not store any data in the browser](https://developers.cloudflare.com/speed/observatory/rum-beacon/)"; banners not addressed | None documented | [Free](https://developers.cloudflare.com/web-analytics/about/) | Hosted service |
| Rybbit | 11,346 | "[You will not need to display a cookie consent banner](https://rybbit.com/)" | AI channel | [7-day trial](https://rybbit.com/pricing) | Yes, AGPL-3.0, with a Docker self-host |
| Matomo | 22,178 (core); 66,961 on Matomo Cloud's demo | [Depends on the law and your setup](https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-without-consent-or-cookie-banner/) | AI Assistants report | [On-Premise free; Cloud trial, no card](https://matomo.org/pricing/) | Yes, GPL-3.0 |
| PostHog | 105,562 (default bundle); 172,716 with the replay recorder | Use a banner if you use its cookies, per its [GDPR guide](https://posthog.com/docs/privacy/gdpr-compliance) | AI channel type | [1M analytics events a month, no card](https://posthog.com/pricing) | Yes, [MIT, self-hosting unsupported](https://posthog.com/docs/self-host) |

Prices, free tiers and scripts change with vendor releases, so treat every row as dated 16 October 2026.

## Tracker Script Weight, Measured One Way

The method, so anyone can rerun the numbers:

- Fetched on 16 October 2026, India time, from an Indian connection (Cloudflare's trace page returned `loc=IN`), logged out and with no cookies.
- One curl request per script, with a desktop Chrome user-agent string and `Accept-Encoding: gzip`; every server answered with gzip.
- Wire bytes are the compressed body as received, headers excluded, and decoded bytes are the same body after gunzip. Each script was fetched three times, and the table shows the median.
- Each URL is the script the vendor's current install snippet loads, read from its docs that day, with stand-ins for Plausible and Matomo explained under the chart.

| Script | URL the snippet loads | Wire bytes | Decoded bytes | Share of this GA4 tag |
|---|---|---|---|---|
| GA4, this site via Tag Manager | `www.googletagmanager.com/gtag/js`, as Tag Manager requests it for this site | 179,904 | 537,566 | 100% |
| PostHog | `us-assets.i.posthog.com/static/array.js` | 105,562 | 334,426 | 58.7% |
| Matomo, core 5.14.1 | `matomo.js` from the 5.14.1 release, via jsDelivr | 22,178 | 68,294 | 12.3% |
| Rybbit | `app.rybbit.io/api/script.js` | 11,346 | 34,777 | 6.3% |
| Cloudflare Web Analytics | `static.cloudflareinsights.com/beacon.min.js` | 10,264 | 31,853 | 5.7% |
| Simple Analytics | `scripts.simpleanalyticscdn.com/latest.js` | 3,854 | 7,515 | 2.1% |
| Pirsch | `api.pirsch.io/pa.js` | 3,565 | 11,842 | 2.0% |
| GoatCounter | `gc.zgo.at/count.js` | 3,358 | 9,213 | 1.9% |
| Plausible | `plausible.io/js/pa-*.js`, the script plausible.io serves | 2,489 | 5,972 | 1.4% |
| Umami Cloud | `cloud.umami.is/script.js` | 2,333 | 4,810 | 1.3% |
| Fathom | `cdn.usefathom.com/script.js` | 2,090 | 6,981 | 1.2% |

<img src="/assets/blog/google-analytics-alternatives/script-weight.webp" alt="Bar chart of tracker script weight on the wire in bytes, measured with gzip from India on 16 October 2026: this site's GA4 tag via Tag Manager 179,904, PostHog 105,562, Matomo core 22,178, Rybbit 11,346, Cloudflare Web Analytics 10,264, Simple Analytics 3,854, Pirsch 3,565, GoatCounter 3,358, Plausible 2,489, Umami Cloud 2,333 and Fathom 2,090" title="Tracker script weight on the wire, in bytes" width="1200" height="729" loading="lazy" decoding="async" />

Read the table with these caveats:

- Plausible's [script update guide](https://plausible.io/docs/script-update-guide) says it introduced an updated tracking script in October 2025 and that "Each site now has its own snippet", so the row is the script plausible.io serves its own pages. The legacy `script.js`, which older installs still load, came down at 1,283 bytes, lighter than Fathom's, but a new install gets the per-site script.
- PostHog's `array.js` is its default product-analytics bundle, so its row is not a like-for-like pageview counter. With session replay on, it also fetches a recorder script that PostHog's [session replay troubleshooting page](https://posthog.com/docs/session-replay/troubleshooting) says "is not included in the default posthog-js to minimize the default bundle size". The bundle loads it as `lazy-recorder.js`, which came to 67,154 bytes on the wire, bringing PostHog to 172,716 bytes, 96% of this GA4 tag. Other features add files of their own, since PostHog's [content security policy page](https://posthog.com/docs/advanced/content-security-policy) says the SDK "will dynamically load extra JavaScript assets as necessary": `surveys.js` came to 33,149 bytes, which takes PostHog with replays and surveys to 205,865 bytes, past this GA4 tag.
- Matomo On-Premise runs on your own server, which sets its compression. The Matomo Cloud demo account's `matomo.js` came down at 66,961 bytes, and its code names plugins for heatmaps and session recording, form, media and crash analytics, and A/B testing.
- The GA4 row is the `gtag/js` URL that Tag Manager requested on five of six loads of a post on this site in headless Chrome: this site's ID, `cx=c` and a `gtm=` parameter. On the sixth load it asked with a different `gtm=` value, and that URL returned a 179,956-byte tag, 0.03% heavier. Requested as a standalone tag, it came to 179,899 bytes, and Tag Manager's own container file, a second request, is not counted.
- With the Accept-Encoding header Chrome sent when it loaded that post (gzip, deflate, br, zstd), Google answered with zstd at 179,836 bytes, within 0.1% of the gzip figure. Eight of the ten alternatives came back larger than their gzip figures, from 0.3% (PostHog) to 9.2% (Fathom), while Cloudflare and Rybbit answered with gzip again. So the gzip column understates most rows, but the order does not change, and Plausible, Umami and Fathom each stay under 1.5% of the GA4 tag.
- A CDN edge can compress the same file to a slightly different size. Later runs on 16 October 2026 returned Plausible's script at 2,487 bytes, Simple Analytics' at 3,885 and Matomo core at 22,286, each with an identical decoded file, so a rerun can miss the table by up to half a percent without changing the order.
- Vendors print their own GA4 figures. Plausible's [lightweight analytics page](https://plausible.io/lightweight-web-analytics) says "The Google Analytics script is 135KB gzipped". Rybbit's homepage puts its own script at about 11KB "against GA4's 150KB, both compressed", in a FAQ answer that sits in the page's structured data and not in the FAQ visitors see.

## Which Google Analytics Alternatives Label AI Assistant Visits?

Six of the ten document a label for visits from AI assistants, Umami has one in its code that its docs do not describe, and three document none. GA4's own label is its AI Assistant channel, and I compared [which assistants Google's Help pages name for that channel](/blog/ga4-ai-assistant-channel/) in a separate post.

| Tool | Label | What the vendor's page says it counts |
|---|---|---|
| Plausible | [AI Assistants channel](https://plausible.io/docs/top-referrers) | "Source is a known AI assistant tool such as ChatGPT, Claude, Perplexity, Gemini, Copilot and others" |
| Fathom | [AI Source dimension](https://usefathom.com/docs/features/sources), plus an [AI.csv export](https://usefathom.com/docs/features/exporting) | ChatGPT "includes chatgpt.com, chat.openai.com and links tagged utm_source=chatgpt.com" |
| Matomo | [AI Assistants, under Acquisition](https://matomo.org/faq/reports/what-are-ai-assistants-in-matomo/) | Visits from "a recognised AI assistant domain", with separate AI Agents and AI Chatbots reports |
| PostHog | [AI channel type](https://posthog.com/docs/data/channel-type) | "A link from an AI assistant, e.g. ChatGPT, Claude, Gemini, Perplexity, or Copilot." |
| Rybbit | [AI channel](https://rybbit.com/blog/track-chatgpt-traffic), per a 13 September 2026 post | A referrer on its list, a utm_source naming an assistant, or a utm_medium such as ai, llm or ai-assistant |
| Pirsch | [AI channel](https://docs.pirsch.io/get-started/statistics) | A list of nine domains that names perplexity.ai and openai.com but not chatgpt.com |
| Umami | LLM channel, in [its v3.4.0 source](https://github.com/umami-software/umami/blob/v3.4.0/src/lib/constants.ts) only | chatgpt.com, claude.ai, copilot.microsoft.com, gemini.google.com, meta.ai and perplexity.ai |
| Simple Analytics, GoatCounter, Cloudflare | None documented | No AI-assistant label in Simple Analytics' 115 docs pages, GoatCounter's 27 help pages or Cloudflare's Web Analytics docs |

Umami's docs, all 288 pages in its sitemap on 16 October 2026, mention ChatGPT only for its MCP server, which lets an assistant query your stats. In its dashboard code the channel's label is "LLM", so look for "LLM", not "AI", where Umami lists channels.

These labels work from the referrer or the tags on a click. Fathom's sources page puts the limit plainly: "If an AI tool sends neither a referrer nor a utm_source, we cannot tell the visit came from AI, and it shows as Direct." If ChatGPT sends you more visits than any other assistant, check where Pirsch files chatgpt.com before you trust its AI row.

## Do You Still Need a Cookie Banner If You Switch?

For the analytics tag alone, six vendors say no on their own pages: Plausible, Fathom, Umami, Simple Analytics, Pirsch and Rybbit. Keep the banner for anything else on the page that needs consent:

- AdSense personalized ads for visitors in the EEA, the UK and Switzerland, and Microsoft Clarity's consent signals for the same regions, both covered in the next section.
- GA4 itself, for as long as it runs beside the new tool.
- PostHog or Matomo with their default cookies on. PostHog's GDPR guide says "If you use PostHog with cookies on your website (for logged out users), you should also use a cookie banner", and Matomo documents a `disableCookies` call in its [cookieless FAQ](https://matomo.org/faq/general/faq_157/).

Matomo's consent FAQ, linked in the table, also sorts privacy laws into categories. Its "Strict (ePrivacy-type)" group, with GDPR, PECR and TDDDG as examples, is one where "Consent is mandatory for client-side analytics tracking, even if no personal data is processed", and it lists France, Spain, Italy and the Netherlands as countries that exempt some forms of website analytics under conditions. So each "no banner" line in the table is the vendor's own reading of the law, and Matomo's FAQ reads laws such as GDPR and PECR differently; check the rule in the countries your visitors come from.

## If Your Site Runs AdSense

Google's [consent management requirements page](https://support.google.com/adsense/answer/13554116?hl=en) says AdSense publishers are "required to use a consent management platform (CMP) that has been certified by Google and integrates with the IAB's Transparency and Consent Framework (TCF) when serving personalized ads":

| Visitors in | Certified TCF CMP required from |
|---|---|
| The EEA and the UK | 16 January 2024 |
| Switzerland | 31 July 2024 |

Google does not rule out ads for traffic from a CMP it has not certified: "Traffic from a non-certified CMP may be eligible for non-personalized ads or limited ads (including programmatic limited ads) where supported." The word analytics does not appear on that page. If you are weighing GA4 alternatives for an AdSense site that wants personalized ads for EEA, UK and Swiss visitors, the site needs the certified CMP whichever analytics tool it runs.

Microsoft Clarity adds its own rule: "Starting October 31, 2025, Clarity begins enforcing consent signal requirements for page visits originating from the European Economic Area (EEA), United Kingdom (UK), and Switzerland (CH)" ([Microsoft Learn](https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-mode)).

On this site, consent runs through the shared head and layout:

- A Consent Mode v2 default, set before Tag Manager's script is requested, starts `ad_storage`, `ad_user_data`, `ad_personalization` and `analytics_storage` as denied, with a 500 ms `wait_for_update`, for 39 region codes: the 30 EEA countries, the UK, Switzerland and seven territories with codes of their own. Visitors elsewhere get no default.
- Google's own CMP updates Consent Mode for Google's tags.
- A consent bridge reads the CMP's ad and analytics storage choices and passes them to Clarity's `consentv2` call, since, in the code comment's words, what Google's CMP "never does is tell Microsoft Clarity".

The loader, the ad units and the client-router handling are in [my Astro AdSense setup](/blog/astro-adsense/).

## Is Microsoft Clarity a Google Analytics Alternative?

Treat Clarity as a complement to GA4: Microsoft documents a Google Analytics integration for it, and its [Clarity FAQ](https://learn.microsoft.com/en-us/clarity/faq) says the data "is retained for the webmaster's consumption up to 30 days from the time of recording". From the same FAQ and Microsoft's other Clarity pages:

- Price: "Clarity is a free service forever", with no traffic limits.
- History: the **30-day** window above; recordings also last 30 days, though favourites and a random sample are kept for up to nine months.
- GA link: Microsoft's [GA integration guide](https://learn.microsoft.com/en-us/clarity/ga-integration/ga-integration) says connecting a property lets Clarity "pull data from your Google Analytics and display it directly in the Clarity experience", while its [GA4 page](https://learn.microsoft.com/en-us/clarity/ga-integration/ga4-integration) says "Clarity doesn't send playback URL to GA4" and "Currently, Clarity doesn't support segments in GA4."
- AI label: an AIPlatform channel that "currently focuses on direct AI chat platforms like ChatGPT, Claude, Gemini, and Perplexity".
- Consent: the 31 October 2025 enforcement above, plus first-party cookies such as `_clck` and `_clsk` and a third-party `CLID` cookie ([Clarity cookie list](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies)).
- Weight, measured the same way: a 731-byte loader from clarity.ms, then version 0.8.72-beta of `clarity.js` at 27,004 bytes on the wire and 75,485 decoded.

For me the 30-day window ends the comparison, because a year-on-year traffic report needs history that Clarity does not keep. What Clarity adds is a view of behaviour on the page, and [reading its click and scroll heatmaps](/blog/how-to-read-a-heatmap/) is a different job from reading GA4's channel reports.

## What You Would Rebuild If You Left Google Analytics 4

On this site a switch involves six pieces, five of them in code that I read from the repo on 16 October 2026:

| Piece | What it does on this site | What a replacement needs |
|---|---|---|
| Nine custom event names | `cta_click` (email, phone and call-to-action links), `share_click`, `social_click`, `newsletter_signup` (footer, pop-up, homepage, 404 page and every tool page), `blog_read_progress` at 25, 50, 75 and 100%, `theme_toggle`, `tool_copy`, `tool_download` and a diagnostic `consent_misconfigured`, all pushed into the dataLayer | Each push rewritten as the new tool's own call, such as `umami.track()` in [Umami's tracker functions](https://docs.umami.is/docs/tracker-functions) or the `plausible()` function in [Plausible's custom events docs](https://plausible.io/docs/custom-event-goals) |
| Soft-navigation re-init | The newsletter-form listeners and read-progress tracking re-attach on `astro:page-load`, because DOMContentLoaded does not fire on a soft navigation (read on Astro 5.18.0, untested on later majors) | Keep the re-init and point its calls at the new tool; separately, pick a tracker that counts soft navigations as page views: [Umami's FAQ](https://docs.umami.is/docs/faq) says it "automatically tracks page navigations in SPAs", and [Cloudflare's script](https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/) tracks them by default |
| Consent default ahead of Tag Manager | Runs before `gtm.js` is requested, because, per the code comment, "the container replays dataLayer from index 0" | Wherever Tag Manager still loads, it has to stay ahead of `gtm.js` |
| Clarity consent bridge | Passes Google's CMP choices to Clarity | Keep its Clarity calls, which read the CMP without touching GA4; only its diagnostic `consent_misconfigured` push, one of the nine event names above, moves to the new tool |
| One copy of the library | The code comment records that loading Tag Manager plus a standalone gtag.js "shipped two ~166 KiB copies of the same library and cost ~138ms of long tasks", measured on this site when both were loaded (an earlier reading; the tag measured 179,904 bytes on 16 October 2026) | Load the replacement once, from one place, and check the network panel for a second copy |
| History | Lives in GA4, not the repo: the site's past reports, which a new tool starts without | Check whether the new tool imports GA4 data before you rely on it for trends: [Plausible's docs](https://plausible.io/docs/google-analytics-import) say it can "import your historical stats from Google Analytics 4 (GA4)", and Umami's pricing table, linked above, lists Data import as not included on Hobby |

Channel rules move with you only in part. Pirsch's statistics docs say its channels "are defined exactly as they are in Google Analytics 4", though its AI list, above, leaves out chatgpt.com. Plausible's channel list keeps a Cross-network row for a medium of cross-network, while GA4's own Cross Network channel also reads Google Ads campaign types such as Performance Max, as [the Cross Network explainer](/blog/what-is-cross-network-in-google-analytics/) sets out. Compare your top channels in both tools before you trust a trend line that crosses the switch. [My list of marketing tools](/blog/marketing-tools-you-need/) pairs GA4, Search Console and Clarity as one free analytics stack; Search Console, Clarity and the two Vercel components stay after a switch, though Clarity's Google Analytics integration, which pulls GA data into Clarity, depends on GA4. If you verified Search Console with the Google Analytics tracking code, add another verification method before you remove the tag: [Google's verification help](https://support.google.com/webmasters/answer/9008080?hl=en) says Search Console "periodically checks if your verification token is still present and valid".

Weight is the settled part of this decision: in its default setup, each of the ten Google Analytics alternatives above ships less script than this GA4 tag, and only PostHog with replays and surveys both switched on goes past it. Shortlist the two whose cookie and AI-assistant rows fit your site, and check your custom events against each one's event call. Then run your pick beside GA4 for 30 days before you remove the tag.
