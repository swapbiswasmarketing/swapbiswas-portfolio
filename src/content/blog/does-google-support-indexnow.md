---
title: "Does Google Support IndexNow? No. What Google Uses Instead"
description: "Does Google support IndexNow? No. Google said in 2021 it would test the protocol and has not joined. What it reads instead, and the Astro hook I use for Bing."
publishDate: 2026-09-30
category: [SEO]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "Does Google use IndexNow?"
    a: "No. As of September 2026, Google is not among the participants indexnow.org lists, and it has not announced support since telling Search Engine Journal in November 2021 that it would test the protocol. An IndexNow submission reaches Bing, Yandex, Seznam.cz, Naver, Yep, Amazon and the Internet Archive."
  - q: "Is there a Google IndexNow API?"
    a: "No. Google's Indexing API is a separate API limited to pages with JobPosting or BroadcastEvent markup. For everything else, Google reads the lastmod dates in your sitemap when they are consistently accurate, and Search Console's URL Inspection tool lets you request indexing for a few URLs."
  - q: "How do I check that Bing received my IndexNow submission?"
    a: "Bing's IndexNow get-started page says to use Bing Webmaster Tools to verify if your URLs are received by search engines. The endpoint's status code does not confirm a crawl: indexnow.org documents a 200 as 'URL submitted successfully' and a 202 as 'URL received. IndexNow key validation pending', and its FAQ says the engine then evaluates whether it should crawl the URL."
  - q: "How do I add IndexNow to an Astro site?"
    a: "A ready-made option is the astro-indexnow package on npm; on Vercel, commit its .astro-indexnow-cache.json file or every build resubmits every page, and tie its enabled option to VERCEL_ENV so preview builds do not submit. To decide for yourself what counts as a change, put the key file in public/ and add an integration whose astro:build:done hook reads the built sitemap, picks new or changed URLs, checks that the live site serves the key file, and posts them to api.indexnow.org. Run it only on production deploys, and log errors instead of failing the build."
  - q: "What does IndexNow do?"
    a: "It lets a site tell participating search engines that a URL was added, updated or deleted, so they can prioritize crawling it. indexnow.org says a submission does not guarantee immediate indexing, and every submitted URL counts toward the site's crawl quota."
---

No. Google has not joined IndexNow as of September 2026. It told [Search Engine Journal](https://www.searchenginejournal.com/google-will-be-testing-indexnow/426602/) in November 2021 that it would test the protocol, and nothing since has changed the answer to "does Google support IndexNow". A submission reaches Bing and the other [participants indexnow.org lists](https://www.indexnow.org/faq); Google learns about changes from your sitemap and links.

IndexNow is the protocol Microsoft Bing and Yandex launched in October 2021 so a site can tell search engines when a URL is created, updated or deleted. indexnow.org names its participants in three places: the support line on its [home page](https://www.indexnow.org/), the endpoint list in its FAQ, and a machine-readable [searchengines.json](https://www.indexnow.org/searchengines.json). On 30 September 2026 the three lists do not fully match, and none of them includes Google:

| Engine or crawler | Receives IndexNow submissions? | Listed on indexnow.org in | How to notify it |
|---|---|---|---|
| Google | No | None of the three | Sitemap `<lastmod>`, plus Request indexing for a few URLs |
| Microsoft Bing | Yes | Home page, FAQ, searchengines.json | One submission to any listed endpoint |
| Yandex | Yes | Home page, FAQ, searchengines.json | The same submission |
| Seznam.cz | Yes | Home page, FAQ, searchengines.json | The same submission |
| Naver | Yes | Home page, FAQ, searchengines.json | The same submission |
| Yep | Yes | Home page, FAQ, searchengines.json | The same submission |
| Amazon (Amazonbot) | Yes | FAQ, searchengines.json | The same submission |
| Internet Archive | Yes | searchengines.json only | The same submission |

The [2023 post](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping) in which Google retired its own sitemap ping calls the sitemap `<lastmod>` "a signal for scheduling crawls to URLs that we previously discovered". That makes lastmod the field to get right, and I built my IndexNow hook as a second reader of it. On this site's Astro build, one hook writes the dates Google reads and a second hook reads the same dates to decide what to submit to Bing and the rest, so a wrong date misleads both readers at once.

## Does Google Support IndexNow?

Google's guide to [asking Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), last updated on 10 December 2025, names the URL Inspection tool and sitemaps and never mentions IndexNow.

| Date | What happened | Source |
|---|---|---|
| 18 Oct 2021 | Bing launches IndexNow, "a new protocol created by Microsoft Bing and Yandex" | [Bing Webmaster Blog](https://blogs.bing.com/webmaster/2021/10/IndexNow-Instantly-Index-your-web-content-in-Search-Engines/) |
| 9 Nov 2021 | A Google spokesperson tells Search Engine Journal that Google "will be testing the potential benefits of this protocol" | Search Engine Journal (linked above) |
| 26 Jun 2023 | Google deprecates its sitemaps ping endpoint; after six months, pings "will result in a 404 error" | Google Search Central Blog (linked above) |

## What Google Uses Instead of IndexNow

Google documents six routes to a new or changed URL, listed here as of 30 September 2026.

| Route | What Google's documentation says | When to use it |
|---|---|---|
| Sitemap `<lastmod>` | Used "if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate"; `<priority>` and `<changefreq>` are ignored ([sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)) | Every deploy, generated by your build or CMS |
| Sitemap submitted in Search Console or named in robots.txt | Submitting is "merely a hint: it doesn't guarantee that Google will download the sitemap" (same guide) | Once per sitemap |
| Request indexing in the URL Inspection tool | "There is a daily limit to how many index requests you can submit" ([Search Console Help](https://support.google.com/webmasters/answer/9012289?hl=en)) | A few important URLs after a launch or a fix |
| Indexing API | It "can only be used to crawl pages with either `JobPosting` or `BroadcastEvent` embedded in a `VideoObject`" ([Indexing API quickstart](https://developers.google.com/search/apis/indexing-api/v3/quickstart)) | Job postings and livestream pages only; Gary Illyes said in April 2024 that it might still work for other content, but he "wouldn't be surprised if suddenly it stopped working for unsupported verticals overnight" ([Search Engine Roundtable](https://www.seroundtable.com/google-indexing-api-unsupported-content-37260.html)) |
| Internal links | Pages are "discovered when Google extracts a link from a known page to a new page" ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)) | Every new page, linked from a page Google already crawls |
| WebSub, for an RSS or Atom feed | "If you use Atom or RSS, you can use WebSub to broadcast your changes to search engines, including Google" (sitemap guide) | Sites that already publish a feed |

The same 2023 post retired the sitemap ping: old code and plugins that still call the endpoint "will not cause problems for Google Search", but "using the endpoint will also not do anything useful", so a "ping Google" step in an old deploy script can come out. It also defines lastmod as the "last significant modification" (changed primary text, structured data or links, not a sidebar or footer tweak), and says of dates that drift from reality: "eventually we're not going to believe you anymore".

If Google is not indexing your pages at all, a faster signal will not fix it: start with the sitemap and index coverage checks in my [technical SEO audit walkthrough](/blog/how-to-conduct-a-technical-seo-site-audit/), or the indexation step of my [SEO audit checklist](/blog/seo-audit-checklist/).

## How I Added IndexNow to an Astro Site on Vercel

The setup on this site, as of 30 September 2026:

- A static Astro 5 build, deployed on Vercel from `main`, so every push to `main` is a production deploy.
- The IndexNow FAQ's CMS list does not include Astro, and the one CDN it names is Cloudflare; on this site the submission happens in the build. A third-party package, [astro-indexnow](https://www.npmjs.com/package/astro-indexnow) on npm, also submits after an Astro build, and the comparison under the build steps below shows how it differs from this site's hook.
- On 16 September 2026 I added an `indexnow-submit` integration after the existing `sitemap-lastmod` integration in `astro.config.mjs`, and both run on `astro:build:done`.
- Astro's [Integration API reference](https://docs.astro.build/en/reference/integrations-reference/) says "All integrations are run in the order that they are configured", which matters here because the second hook reads what the first one writes.

Astro's official sitemap integration has no way to know on its own when a post last changed. Its [documentation](https://docs.astro.build/en/guides/integrations-guide/sitemap/) says it "can't analyze a given page's source code", so its `lastmod` option applies "on a site-wide basis", and per-page values go through a `serialize` function you write; the docs' `serialize` example sets `item.lastmod = new Date().toISOString()`, which is the build time.

Applied to every page, that re-dates the whole site on each build, which Google's 2023 post warns against. You can make `serialize` look up a real per-page date; this site instead injects the dates after the build, with a `sitemap-lastmod` hook that reads each post's `updatedDate`, falls back to `publishDate`, and writes the result into `sitemap-0.xml`.

```js
// astro.config.mjs, trimmed: hook bodies replaced with comments
integrations: [
  sitemap({ /* filter drops noindexed routes */ }),
  {
    name: 'sitemap-lastmod',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // inject <lastmod> into sitemap-0.xml from each post's
        // updatedDate, falling back to publishDate
      },
    },
  },
  {
    // Google does not participate, so this changes nothing there;
    // Google still reads the sitemap's lastmod instead.
    // ORDER MATTERS: keep this after sitemap-lastmod.
    name: 'indexnow-submit',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        // production deploys only; diff against the live sitemap
        // plus a 7-day lastmod window; check the live key file;
        // POST to api.indexnow.org; log errors, never fail the build
      },
    },
  },
],
```

<img src="/assets/blog/does-google-support-indexnow/indexnow-build-hook.webp" alt="Diagram: an Astro build writes lastmod into the sitemap, an IndexNow hook compares it with the live sitemap and submits changed URLs, and Google reads the same sitemap dates" title="One Astro build, two readers of the same lastmod" width="1200" height="806" loading="lazy" decoding="async" />

Only blog posts carry a lastmod here; the homepage, tool pages and other static pages have none, which Google's 2023 post allows when it says to use lastmod "for all the pages in your sitemap, or just the ones you're confident about". Google's sitemap guide says the Sitemaps report in Search Console lets you "see when Googlebot accessed the sitemap", so you can confirm Google fetched it after your last deploy.

The IndexNow hook works through six steps on every build, starting with whether to submit at all.

| Step | What it does | Why |
|---|---|---|
| Gate | Submits when `VERCEL_ENV` is `production`; local and preview builds skip unless an `INDEXNOW_FORCE=1` test override is set, and `INDEXNOW_DISABLE=1` switches it off and overrides everything | [Vercel sets `VERCEL_ENV`](https://vercel.com/docs/environment-variables/system-environment-variables) to production, preview or development, and a preview build can list pages production does not serve yet |
| Read | Parses the `sitemap-0.xml` the build just wrote, dates included | The dates are the change signal |
| Select | Takes the union of URLs that differ from the live sitemap and URLs whose lastmod is within 7 days | While the build runs, the live site still serves the previous deploy, so its sitemap records what was published last time |
| Check key | Fetches the key file from the live site and compares it with the key; if the file is missing or different, logs why and skips the submission | The IndexNow FAQ says that if the key file "is missing, mismatched, or blocked, IndexNow submissions will not be accepted" |
| Submit | POSTs to `https://api.indexnow.org/indexnow` in batches of up to 10,000 URLs, with the key file at the site root | The [protocol documentation](https://www.indexnow.org/documentation) caps a POST at 10,000 URLs, and a key file in a subfolder only covers URLs under that folder |
| Fail soft | Logs any error and lets the build finish | The pages ship either way; a missed submission means the engines find the change by crawling |

Each batch goes out as one POST in the JSON shape the protocol documentation gives. The minimal version below sends that request with the 7-day window alone: no live-sitemap diff, no key check and one batch. It is a starting point, not the code this site deploys, and it needs a per-page lastmod in `sitemap-0.xml` and a `<key>.txt` file in `public/`.

```js
// indexnow-minimal.mjs: 7-day lastmod window only, no live-sitemap diff.
// In astro.config.mjs, list it after the integration that writes lastmod:
// indexNowMinimal({ site: 'https://example.com/', key: process.env.INDEXNOW_KEY })
import { readFile } from 'node:fs/promises';

export default function indexNowMinimal({ site, key, windowDays = 7 }) {
  return {
    name: 'indexnow-minimal',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (process.env.VERCEL_ENV !== 'production') return;
        try {
          const xml = await readFile(new URL('sitemap-0.xml', dir), 'utf8');
          const cutoff = Date.now() - windowDays * 86_400_000;
          const urlList = [...xml.matchAll(/<url>(.*?)<\/url>/gs)]
            .map(([, u]) => ({
              loc: u.match(/<loc>(.*?)<\/loc>/)?.[1],
              lastmod: u.match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
            }))
            .filter((u) => u.loc?.startsWith(site) && u.lastmod && Date.parse(u.lastmod) >= cutoff)
            .map((u) => u.loc)
            .slice(0, 10_000);
          if (urlList.length === 0) return logger.info('IndexNow: nothing new');
          const res = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
              host: new URL(site).host,
              key,
              keyLocation: new URL(`${key}.txt`, site).href,
              urlList,
            }),
            signal: AbortSignal.timeout(15_000),
          });
          logger.info(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
        } catch (err) {
          logger.warn(`IndexNow skipped: ${err.message}`);
        }
      },
    },
  };
}
```

How this hook differs from astro-indexnow, going by the README and source code of version 2.3.10, the current npm release as of September 2026:

| What differs | astro-indexnow | This site's hook |
|---|---|---|
| What counts as a change | A changed hash of the page's built `index.html`, so an edit to a shared footer flags every page | A URL that is new, or whose lastmod (from `updatedDate` or `publishDate`) differs from the live sitemap or falls inside 7 days |
| Where the previous state lives | `.astro-indexnow-cache.json`, which its README says to commit on Vercel and other builds that start in a fresh container; without it, every build resubmits every page | The live sitemap, which still serves the previous deploy while the build runs; nothing is committed |
| Preview builds | Runs on every build, previews included, unless its `enabled` option is `false`; wiring that to `VERCEL_ENV` is up to you | Skipped unless `VERCEL_ENV` is `production` |
| Submitted URL form | Page URLs without a trailing slash, per its README | The sitemap's own URLs, which end in a slash here; the slashless form [answers with a 308](/blog/301-redirect-seo/) |

Preview deployments raise a separate Google question on Vercel, covered in [how Vercel's defaults decide what Google can index](/blog/vercel-google-indexing/). The hook itself is one row in the post-launch setup of [how I built this site with Claude Code](/blog/build-a-personal-website-with-claude-code/).

### Diff Plus Window: What Each Signal Misses

Each signal alone misses a real change, in opposite directions, so the hook submits both sets:

| Change | Diff against the live sitemap | 7-day lastmod window |
|---|---|---|
| New post | Caught: the URL is not in the live sitemap | Caught |
| Edited post, `updatedDate` bumped, deployed the same week | Caught: the date differs | Caught |
| Edited post deployed 10 days after its `updatedDate` | Caught | Missed: the date is older than 7 days |
| Second edit to a post on the same day | Missed: lastmod is a date, so it does not change | Caught |
| New page with no lastmod, such as a tool page | Caught | Missed: no date to read |
| Edit to a tool page or another page with no lastmod | Missed: both sitemaps show no date | Missed: no date to read |
| Edit to a post with no new `updatedDate` | Missed | Missed once the date is older than 7 days |

For an edited page with no lastmod, `submit --url` in the CLI below sends the URL by hand. For a post, bump `updatedDate`: an edit that clears Google's "last significant modification" bar needs a new one anyway, or the sitemap gives Google no sign that the page changed and the hook does not submit it.

### Failure Modes and the Guard for Each

| Failure | What you would see | Guard |
|---|---|---|
| The two hooks in the wrong order | Every blog URL looks changed against the live sitemap (it has dates, the new build has none), so each deploy resubmits all of them, against the FAQ's crawl-quota guidance, and the log still reports success | `indexnow-submit` stays after `sitemap-lastmod` in the array |
| Key file not reachable | The build log says the submission was skipped; nothing is sent | The hook checks the live key file before every submission; the file sits in `public/`, which Astro copies into the build "untouched" ([project structure docs](https://docs.astro.build/en/basics/project-structure/)); the CLI's `verify` runs the same check by hand |
| Key file added in the same deploy as the hook | That deploy submits nothing: the live site still serves the previous deploy, so the key check fails and the log says the key is not live yet | The next deploy submits, and posts dated inside the 7-day window are still picked up then |
| Live sitemap cannot be fetched | If the failure were read as an empty sitemap, every URL would look new and the whole site would be submitted | The hook treats "could not read" differently from "empty" and falls back to the 7-day window alone; the fetch adds a cache-busting query so a stale CDN copy is not compared |
| More than 10,000 URLs in one POST | The FAQ warns this "may cause the request to fail or return an HTTP 422" | Batches of up to 10,000 |
| A URL on another host in the batch | The POST comes back 422, the code the protocol documentation gives for "URLs which don't belong to the host" | URLs not on the site's origin are dropped before posting |
| Endpoint slow or down | A deploy that waits on, or fails because of, a third party | Each request times out after 15 seconds; errors are logged; the build never fails |
| A URL submitted before production serves it | The hook runs inside the build, before Vercel promotes the deploy, so a new URL is submitted shortly before it is live, and a deploy that fails after the hook (Pagefind runs next) leaves URLs submitted but never served | Partial: the production-only gate keeps preview and local URLs out, and the CLI reads the live sitemap by default |

The 7-day window resubmits fresh posts: with a production deploy on every push, a post goes out again on each deploy until its lastmod is more than seven days old. The FAQ says to "Avoid submitting the same URL many times a day unless there are meaningful content changes", lists "Submitting unchanged URLs repeatedly" among common mistakes, gives "The same URL is being submitted repeatedly without meaningful changes" as a cause of a 422, and says every submitted URL "counts toward your site's crawl quota". The window accepts that cost for two catches the diff alone would miss: a same-day second edit, and fresh posts from a deploy whose submission was skipped. The more often you deploy, the shorter the window should be; at several deploys a day, submit from the diff alone and give up those catches.

### The CLI for What the Hook Skips

The hook covers the normal deploy. A small CLI, `scripts/indexnow.mjs`, covers the rest:

| Command | What it does |
|---|---|
| `verify` | Checks that the live site is serving the key file |
| `status` | Shows what would be submitted, without submitting it |
| `submit` | Checks that the key file is live, then submits URLs whose lastmod is inside the window, or the URLs you name with `--url` after confirming each one is served |
| `key` | Prints the key and where it is published |

It reads URLs from the live sitemap by default rather than from `dist/`, so a page that was built locally but never deployed is never submitted. The CLI is a plain Node script in the repo's `scripts/` folder, next to the Search Console and Semrush CLIs listed in [the Claude Code setup behind this site](/blog/claude-vs-claude-code/).

To confirm the engines received a submission, Bing's [IndexNow get-started page](https://www.bing.com/indexnow/getstarted) says to "use Bing Webmaster Tools to verify if your URLs are received by search engines". The endpoint's status code is not that confirmation: the protocol documentation defines a 200 as "URL submitted successfully" and a 202 as "URL received. IndexNow key validation pending".

## Does Google Support IndexNow Through a Plugin or CDN?

A plugin toggle or a CDN setting sends the same IndexNow submission, so Google still gets nothing from it: the IndexNow FAQ says each submission "will be shared across all IndexNow-enabled search engines", and Google is not one of them. The same FAQ lists these ready-made senders:

- 16 content management systems with native or plugin support, WordPress, Shopify and Wix among them
- Cloudflare, which "offers native IndexNow integration"; its [Crawler Hints](https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/) setting "uses Cloudflare cache signals to tell search engines when your content has likely changed", and as of September 2026 it sits on the Configuration page of the Cloudflare dashboard on Free, Pro, Business and Enterprise plans

## Is IndexNow Worth It If Google Doesn't Support It?

Usually yes, because one submission reaches every participating engine and many sites can send it without writing code. Where it sits in your order of work depends on the setup:

| Your setup | Worth it? | What to do |
|---|---|---|
| A CMS with an IndexNow setting or plugin, or a site behind Cloudflare | Yes | Turn it on; on Cloudflare that is Crawler Hints, which works from cache signals, so it does not depend on your lastmod |
| A static site deployed from git, with accurate lastmod | Yes | A build hook like the one above, on production deploys only |
| A build hook that reads lastmod, on a site with no lastmod or dates that change every build | Not yet | Fix the dates first, because a hook that reads them inherits the error |
| Job postings or livestream pages | Yes, plus the Indexing API | IndexNow for the participants, and the API for Google within its two page types |
| Nearly all your search clicks come from Google | Low priority | Spend the time on lastmod and internal links first |

Google indexing was not this site's bottleneck before the hook existed: [my Search Console numbers from a site with no link building](/blog/seo-without-link-building/), pulled on 3 September 2026, show Google had indexed 137 of the 141 URLs submitted.

## Start With Lastmod, Then Add IndexNow

Does Google support IndexNow yet? Recheck searchengines.json on indexnow.org before you act on this page; on 30 September 2026 it does not list Google. Today the sitemap date is the field Google reads, and it is the field my IndexNow hook reads too. Make it change on significant edits only, confirm in the Sitemaps report that Googlebot is fetching the sitemap, and let one submission per deploy cover Bing and the other participants.

Open your sitemap and check one post's lastmod against its last real edit.
