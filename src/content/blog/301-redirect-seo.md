---
title: "301 Redirect SEO: What Your Host Actually Sends"
description: "Most 301 redirect SEO advice assumes your server emits a 301. Mine emits 308 on every permanent redirect. Here is the curl output and what Google does with it."
publishDate: 2026-09-15
category: [SEO]
img: /assets/stock-3.webp
img_alt: "Renaissance-style landscape with a lighthouse tower on a cliff guiding ships, one ship with a red sail"
faqs:
  - q: "Is a 308 redirect as good as a 301 for SEO?"
    a: "Google's redirects documentation lists 301 and 308 together as the permanent server-side redirects, and says permanent redirects show the new target in search results. The difference between the two codes is HTTP method handling, not search treatment."
  - q: "What is the difference between a 302 and a 301 redirect?"
    a: "A 301 is permanent and a 302 is temporary. Google says its indexing pipeline does not use a temporary redirect as a signal that the target should be canonical, so a 302 left in place after a permanent move keeps pointing search results at the old URL."
  - q: "How long does Google take to process a 301 redirect?"
    a: "Google publishes no processing time for a single 301. Its Site Moves page says a small to medium-sized website can take a few weeks for most pages to move, and that the move happens on a per-URL basis rather than as one event."
  - q: "Why does Chrome show a 307 redirect I never configured?"
    a: "That is the HSTS upgrade. Chromium rewrites an http URL to https before the request leaves the browser and synthesizes a 307 Internal Redirect, tagged with a Non-Authoritative-Reason of HSTS, to represent a hop no server ever sent."
  - q: "How long should I keep redirects after a site move?"
    a: "Google's Site Moves page says to keep them as long as possible, generally at least 1 year. The Search Console Change of Address tool asks for at least 180 days, which is also how long it forwards signals to the new site."
---

On 2026-09-16 I ran curl against my own site expecting to confirm a 301. Every permanent redirect it serves came back **308 Permanent Redirect**, and no 301 is configured anywhere in the repository. Most 301 redirect SEO advice opens by telling you to use a 301. It rarely tells you to check whether your host is willing to send one.

This site is 147 posts of Astro 5 static output on Vercel, at Domain Rating 13. Over the 2025-05-01 to 2026-08-31 Search Console window it recorded 164,564 impressions and 186 clicks. Those are small numbers, and they are not the evidence here. The evidence is five HTTP responses and a two-line config file.

## Every Permanent Redirect on This Site Comes Back 308

Measured live with curl on 2026-09-16:

| Request | Status | Location |
|---|---|---|
| `https://swapbiswas.com/blog/aeo-vs-seo` | **308 Permanent Redirect** | `/blog/aeo-vs-seo/` |
| `http://swapbiswas.com/` | **308** | `https://swapbiswas.com/` |
| `https://www.swapbiswas.com/` | **308** | `https://swapbiswas.com/` |
| `https://swapbiswas.com/Blog/aeo-vs-seo/` | 404 | no case-insensitive redirect |
| `https://swapbiswas.com/blog/does-not-exist/` | 404 | none |

The configuration that produced all of that is the entire contents of `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "trailingSlash": true
}
```

`trailingSlash: true` is the only routing instruction in the repo, and it accounts for row one. The http-to-https and www-to-apex rows are not in the file at all, so Vercel adds them on its own. Response headers on those 308s carry `Server: Vercel` and `Strict-Transport-Security: max-age=63072000`.

The trailing-slash behaviour is documented rather than accidental. Vercel's project configuration reference states that when `trailingSlash: true`, a path that does not end with a forward slash ["will respond with a 308 status code"](https://vercel.com/docs/project-configuration/vercel-json) and redirect to the path with a trailing slash, and it documents the mirror-image behaviour when the setting is false.

That table is evidence about what one edge platform emits for one static site. It is not a measurement of how long Google took to process anything; I did not run that experiment, and nothing below should be read as though I had.

## 301 vs 308: The Difference Is the Request Method

For search, Google puts the two codes in one bucket. Its redirects documentation states that ["The 301 and 308 status codes mean that a page has permanently moved to a new location"](https://developers.google.com/search/docs/crawling-indexing/301-redirects), and the same page says permanent redirects ["Show the new redirect target in search results"](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

The split between them is an HTTP question, not a ranking one. [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html), the current HTTP Semantics specification, allows a user agent following a 301 to change the "request method from POST to GET for the subsequent request", and points at 308 for cases where that rewriting is undesired. Its Section 15.4 preamble describes 307 and 308 as codes "later added to unambiguously indicate method-preserving redirects".

One precision point, because a lot of 301 redirect SEO writing overstates it: the "MUST NOT change the request method" sentence in RFC 9110 sits in the 307 definition, not the 308 one. Section 15.4.9 mirrors the 301 text with the POST-to-GET note removed, and the method-preserving property of 308 is asserted in the Section 15.4 preamble instead. Write the difference as "301 permits POST-to-GET rewriting, 308 does not" and you are on the text.

On a blog that is all GET requests, the distinction changes nothing you can see. It starts to matter the moment a form action, an API path or a webhook endpoint moves, because that is where a rewritten method turns a POST into a GET and drops the body.

## 302 vs 307: The Same Split on the Temporary Side

The temporary codes repeat the pattern. Google's redirects page lists ["HTTP 302 (found)"](https://developers.google.com/search/docs/crawling-indexing/301-redirects) alongside 303 and 307 as the temporary server-side redirects, and spells out the indexing consequence: ["Googlebot follows the redirect, but the indexing pipeline doesn't use the redirect as a signal that the redirect target should be canonical."](https://developers.google.com/search/docs/crawling-indexing/301-redirects) A 302 left in place after a permanent move keeps the old URL as the one shown.

RFC 9110 gives 302 the identical method-rewriting allowance it gives 301, and names 307 as the strict alternative for when that ["behavior is undesired, the 307 (Temporary Redirect)"](https://www.rfc-editor.org/rfc/rfc9110.html) code applies. Section 15.4.8 is explicit that a user agent following a 307 ["MUST NOT change the request method"](https://www.rfc-editor.org/rfc/rfc9110.html).

Platform defaults decide which of the four you actually ship, and they do not agree with each other:

- A `redirects` entry in `vercel.json` takes a `permanent` boolean. The docs say it toggles ["between permanent and temporary redirect (default `true`). When `true`, the status code is [308]"](https://vercel.com/docs/project-configuration/vercel-json). The temporary value there is 307, not 302.
- The bulk-redirect table on that same Vercel page documents `permanent` as defaulting to false. Both statements are live on one page dated 2026-08-14, so treat "a vercel.json `redirects` entry defaults to 308" as the rule and do not carry it across to other Vercel redirect mechanisms.
- Netlify goes the other way for configured rules. Its redirect options doc says ["You can specify the HTTP status code for any redirect rule. If left unspecified, the default is 301"](https://docs.netlify.com/manage/routing/redirects/redirect-options/), and the redirects overview repeats it for the `netlify.toml` status field.

There is a gap I could not close. Netlify handles trailing slashes before rules run, stating that ["Our CDN edge nodes do URL normalization before the redirect rules kick in"](https://docs.netlify.com/manage/routing/redirects/redirect-options/) and that ["You cannot use a redirect rule to add or remove a trailing slash"](https://docs.netlify.com/manage/routing/redirects/redirect-options/). No official Netlify page I opened names a status code for that normalization. This repo still carries a `netlify.toml` from an earlier deploy, but the site is not served from it, so I have no curl output for Netlify and I am not going to put a number on it.

## The Redirect You Serve Most Often Is Your Own Internal Link

Row one of that table is worth separating from the rest, because it is not a migration artefact. `https://swapbiswas.com/blog/aeo-vs-seo` returns a 308 to the slashed form, and that response fires every time anyone links to this site without the trailing slash: a tweet, a newsletter, a sloppy internal link in a post I wrote myself.

Each of those is a full round trip to the edge before the HTML request even starts. A migration redirect fires once per old URL and then decays as the web updates its links. A normalization redirect fires forever, because nothing about it is temporary and there is no old URL to retire.

Another rule does not fix this. Writing the canonical form into the link does, which means picking one convention, slash or no slash, and matching it to whatever your host's normalization setting already enforces. On this site the setting is `trailingSlash: true`, so an internal link without the slash is a self-inflicted hop, and the same logic applies to canonical tags, sitemap entries and anything a crawler treats as an address.

## Chrome's 307 Internal Redirect Comes From HSTS

Open DevTools on the http version of an HSTS-protected URL and you will see a `307 Internal Redirect` in the network panel. No server sent it.

[RFC 6797](https://www.rfc-editor.org/rfc/rfc6797.html), the HSTS specification, makes the upgrade a client-side rewrite: "The UA MUST replace the URI scheme with" https before the load. Chromium implements that rewrite as a synthesized response, and the source comment in `url_request_http_job.cc` gives the choice of code away: ["Use status code 307 to preserve the method, so POST requests work."](https://raw.githubusercontent.com/chromium/chromium/main/net/url_request/url_request_http_job.cc) A sibling file, `redirect_util.cc`, builds the fake status line and the header you see next to it, ["HTTP/1.1 %i Internal Redirect"](https://raw.githubusercontent.com/chromium/chromium/main/net/url_request/redirect_util.cc) with a `Non-Authoritative-Reason` field.

Two limits on that. It is Chromium behaviour, so attribute it to Chrome and not to browsers generally; I have not verified how Firefox or Safari surface the same upgrade. And Chromium main-branch source carries no publish date and moves, so it is primary evidence rather than a dated document.

The practical consequence shows up in audits. My curl run saw a real 308 on `http://swapbiswas.com/` because the request left for the origin. A Chrome tab that has already received `Strict-Transport-Security: max-age=63072000` from this host never issues that request at all, and shows a 307 instead. When a crawler or a screenshot of DevTools tells you your homepage answers http with a temporary redirect, check whether you are looking at your server or at the browser in front of it. That is the same mistake as trusting the browser's rendered view over what the server returns, the failure behind [a vibe-coded site that looks finished and still never ranks](/blog/vibe-coded-website-seo/).

## How Long Does Google Take to Process a 301 Redirect?

Google publishes no processing time for a single 301. What it publishes is a range for a whole site move, and the range is weeks.

The Site Moves documentation, updated 2026-08-20, says that ["for medium-sized websites, it can take a few weeks or more for Google to gradually start showing the new URLs instead of the old ones (and for larger sites, even longer)"](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), and restates it later as ["a small to medium-sized website can take a few weeks for most pages to move, and larger sites take longer"](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

The same page explains why no single number exists: ["There are no fixed crawl frequencies; how fast Googlebot crawls depends on the size of your site, and the speed of crawling that's possible. The move takes place on a per-URL basis."](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) A move drains as a queue of URLs at whatever rate crawl allows, which leaves no single completion date to publish.

Two behaviours follow from that, both documented, both regularly misreported:

- The old URL does not disappear. Google ["keeps track of both the redirect source (the old URL) and the redirect target (the new URL)"](https://developers.google.com/search/docs/crawling-indexing/301-redirects), and says that after a domain move ["it's very likely that Google will continue to occasionally show the old URLs in the results, even though the new URLs are already indexed. This is normal"](https://developers.google.com/search/docs/crawling-indexing/301-redirects).
- Ranking movement during the window is expected. Google's note is that ["the visibility of your content in Search may fluctuate temporarily during the move. This is normal and a site's rankings will settle down over time."](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

Retention is a separate instruction from processing. The Site Moves page asks you to keep redirects ["generally at least 1 year"](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), and gives the purpose plainly: that window ["allows Google to transfer all signals to the new URLs, including recrawling and reassigning links on other sites that point to your old URLs"](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). A year of retention is not a year of processing.

I have not measured Google's processing time on this property, and I am not going to estimate it from a status code. Every duration figure above is Google's own published language, quoted from a dated page.

## Where the Six-Month Number in 301 Redirect SEO Advice Came From

"Google takes about six months to process a 301" is repeated across enough posts to feel settled. I searched Google's own domains and opened both current Google pages that discuss redirect timing, and found no current Google page that states it. The duration language Google publishes today is "a few weeks or more" for medium sites.

There is a six-month figure in Google's current documentation, and it belongs to a different mechanism. The Search Console Change of Address tool runs on a 180-day clock: ["These actions continue for 180 days after you start migration in Search Console"](https://support.google.com/webmasters/answer/9370220?hl=en), and afterwards ["Google does not recognize any relationship between the old and new sites, and treats the old site as an unrelated site, if still present and crawlable."](https://support.google.com/webmasters/answer/9370220?hl=en) That is a signal-forwarding window, not a processing time. Its own retention instruction is ["Maintain the redirects for at least 180 days"](https://support.google.com/webmasters/answer/9370220?hl=en), which is half the year the Site Moves page asks for.

The same help page also kills a related piece of folklore, that the old URLs get pulled from the index once the redirect is processed: ["Google does not erase the old site from the index, and URLs from the old site can continue to be shown in Search results if they are available and don't have an equivalent page on the new site."](https://support.google.com/webmasters/answer/9370220?hl=en)

One caveat on my own sourcing: the Change of Address help page carries no visible publish or update date, so I can vouch for its content as the live linked tool documentation but not for its age. The two Site Moves quotes come from a page dated 2026-08-20 and the redirects quotes from one dated 2026-04-14.

## Case Sensitivity Is the Redirect Nobody Writes

`https://swapbiswas.com/Blog/aeo-vs-seo/` returns 404. One capital letter, same path, dead. `trailingSlash: true` normalizes the slash and nothing in the repo normalizes case, so a mis-cased inbound link gets exactly the treatment `/blog/does-not-exist/` gets, which is also a 404.

I have not measured whether any external link to this site uses the wrong case, and I have no data on how often it happens anywhere. What I can state is the shape of the exposure: there is no rule in this repository that would catch one, and the 404 is indistinguishable from a link to a page that never existed. That is the kind of finding a crawl surfaces in minutes and a keyword tool never will, which is why status-code checks belong in [a technical SEO site audit](/blog/how-to-conduct-a-technical-seo-site-audit/) rather than in a content review.

## 301 Redirect SEO Checks You Can Run in Five Minutes

Four curl commands reproduce the table above against any host, and a fifth counts the hops:

```bash
curl -sI https://example.com/blog/some-post        | head -1
curl -sI http://example.com/                       | head -1
curl -sI https://www.example.com/                  | head -1
curl -sI https://example.com/Blog/some-post/       | head -1
curl -sIL https://example.com/blog/some-post -o /dev/null \
  -w '%{num_redirects} hops, ends at %{url_effective}\n'
```

Read the results against four questions. Which permanent code does the host emit, 301 or 308, and is it the same one your redirect plugin or config claims to set? Does the http URL reach https in a single hop, or does it chain through www first? Does a wrong-case path 404 or redirect? And does the final command report more than one hop for a URL that should need none?

Anything you find here is a server fact that anyone can reproduce, and it does not depend on a ranking theory being right. Pair it with the crawl and indexation items in [a standing SEO audit checklist](/blog/seo-audit-checklist/) so the codes get re-read after every platform change, because a host can change its defaults without touching your repository. When I moved this site [off WordPress and onto a static build](/blog/wordpress-to-astro-netlify-migration/), the redirect behaviour changed hands entirely: it stopped being a plugin setting and became a property of the edge.

The two lines in my `vercel.json` are the whole 301 redirect SEO configuration on this site, and they produce 308s I never asked for. Run `curl -sI` against your trailing-slash URL, your http URL and your www URL, and write down the three status codes that come back. If one of them is a 302 or a 307 you did not intend, fix that rule first.
