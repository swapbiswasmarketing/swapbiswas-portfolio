---
title: "Nofollow Links SEO: What Four Platforms Actually Stamp"
description: "Nofollow links SEO advice argues theory. I read the served HTML on Medium, Dev.to, HackerNoon and Hashnode: four platforms, five different rel strings."
publishDate: 2026-09-15
category: [SEO]
img: /assets/stock-5.webp
img_alt: "Renaissance-style painting of a printing workshop with a wooden press, type cases and a red inked sheet"
faqs:
  - q: "Do nofollow links help SEO?"
    a: "Google documents nofollow, sponsored and ugc as hints rather than directives. The announcement is dated 10 September 2019, and nofollow became a hint for crawling and indexing on 1 March 2020. A nofollowed link is therefore neither guaranteed to be discarded nor guaranteed to count, and Google publishes no figure for how often either happens."
  - q: "What is the difference between rel sponsored and rel ugc?"
    a: "Google recommends the sponsored value for paid and advertising links, and the ugc value for user-generated content such as comments and forum posts. Both are processed the same way nofollow is, as hints about which links to consider or exclude within Search."
  - q: "Are nofollow backlinks worth it?"
    a: "Judge a syndicated placement on referral reach, which you can measure in your own analytics, rather than on link value, which you cannot see. The four platforms I inspected all stamp something on outbound links, so a followed placement there is the exception rather than the plan."
  - q: "Does Medium nofollow the link back to my own site?"
    a: "On the story I inspected, yes. The in-article link back to the author's own canonical source carried the same noopener, ugc and nofollow tokens as every other external link on the page, and so did the profile website link."
  - q: "Does rel=canonical pass link value to the original?"
    a: "Google's documented wording is that a canonical helps search engines consolidate the signals they have for the individual URLs, such as links to them, into a single preferred URL. Google calls the canonical element a strong signal rather than a directive, so a platform canonical can be ignored."
---

Medium stamps `rel="noopener ugc nofollow"` on the in-article link that points from an author's story back to the original post on the author's own domain. The same article, by the same author, with the same destination URL, republished on Dev.to, carries `rel="noopener noreferrer"` and no nofollow at all.

Most nofollow links SEO writing argues about whether the attribute passes value. That argument cannot be settled from outside Google's index, and it skips the step that is entirely under your control: opening the page source of the page your link sits on. In September 2026 I opened the served HTML of one syndicated article on Medium, Dev.to and HackerNoon, and of nine more posts across those three plus Hashnode. Four platforms produced five different rel strings for the same kind of link.

## The Same Link, Five Different Rel Strings

Each row below is a literal string copied out of the served HTML, not a summary of platform policy.

| Platform | What I inspected | rel on an in-article outbound link |
|---|---|---|
| Medium | one story, including the link back to the author's own domain | `noopener ugc nofollow` |
| Dev.to | the same article, Markdown-rendered anchors | `noopener noreferrer` |
| HackerNoon | one story, with the href rewritten to append `?ref=hackernoon.com` | `noopener noreferrer ugc` |
| Hashnode on a free `*.hashnode.dev` subdomain | three separate blogs | `noopener noreferrer nofollow ugc` |
| Hashnode on a custom domain | two separate blogs | `noopener ugc` |

The Medium string comes from an [article republished from the author's own blog](https://medium.com/@nfrankel/ai-assisted-genealogy-73da8c63350a), where the anchor to `gedcom.io` and the anchor to the author's own `blog.frankel.ch` original carry identical rel tokens. Medium does not exempt your canonical source from the treatment it gives any other outbound link. Internal Medium-to-Medium anchors on that same page carry `rel="noopener follow"` instead, 132 times.

The Dev.to string comes from [the same piece on Dev.to](https://dev.to/nfrankel/ai-assisted-genealogy-9cn). The anchor to `blog.frankel.ch` there has no nofollow token and no ugc token.

[HackerNoon's version of that story](https://hackernoon.com/how-i-used-ai-to-trace-12-generations-of-my-family-tree) applies ugc without nofollow, and rewrites the destination with a `?ref=hackernoon.com` query string, so the href in the markup is not the URL you gave it.

Hashnode produced two different answers. On a [free subdomain blog](https://navinvarma.hashnode.dev/2026-05-09-architecture-tradeoffs-agentic-spectrum), outbound anchors carry four tokens, including the anchor back to the author's own separate domain. On a [blog mapped to a custom domain](https://blog.greenroots.info/top-10-qa-automation-tools-for-startups-in-2026), outbound anchors carry two.

## What Google Documents About Nofollow, Sponsored and UGC

The primary source is the Search Central post dated 10 September 2019, which introduced the sponsored and ugc values. Its wording: "All the link attributes, sponsored , ugc , and nofollow , now work today as hints for us to incorporate for ranking purposes. For crawling and indexing purposes, nofollow will become a hint as of March 1, 2020" ([Evolving nofollow](https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify)). The same post says the attributes "are treated as hints about which links to consider or exclude within Search".

That is a seven-year-old announcement. The page holding the top result for this query when I checked was published in September 2019, never mentions the sponsored or ugc values, and describes nofollow as an instruction Google obeys.

Google's current documentation page on qualifying outbound links, last updated 10 December 2025, is worth reading alongside the announcement rather than instead of it. Its live wording is "Links marked with these rel attributes will generally not be followed" ([Qualify your outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)). I searched that page for the word hint and did not find it. The hints framing lives in the 2019 blog post, so anyone citing the current docs page for it is citing a page that does not carry the wording.

The same docs page explains the ugc token that keeps turning up in these strings. On it, Google recommends the ugc value for "user-generated content (UGC) links, such as comments and forum posts". Every platform above applies ugc somewhere. Read plainly, that markup files your syndicated article alongside a comment thread. None of the four publishes a statement saying that is the intent, so treat it as a reading of the HTML rather than a stated policy.

## Do Nofollow Links Help SEO?

Google's documented position is that the attribute is a hint for ranking, so a nofollowed link is neither guaranteed to be ignored nor guaranteed to count. Anyone offering you a percentage is inventing it.

What I did not measure matters more here than what I did. I ran no before-and-after test on any of these placements. swapbiswas.com sits at Domain Rating 13, carries 147 posts, and has never had a deliberate link-building campaign run on it. My Search Console window is 2025-05-01 to 2026-08-31: 164,564 impressions, 186 clicks, a sitewide CTR of 0.11%. Nothing in that dataset separates a syndicated placement from everything else that happened over those 16 months, and a single-domain time series with no control would not establish causation even if it moved.

This post reports markup, not outcomes. The markup is checkable by you in about ten seconds per page. The outcome is not checkable by anyone outside Google.

## Dev.to and Hashnode Are Not Internally Consistent

One rel string per platform is already the wrong mental model. Two of the four platforms gave me more than one answer.

On [one Dev.to article](https://dev.to/wiseai/i-built-a-version-bump-tool-in-rust-that-is-10000x-faster-than-its-python-counterparts-i6b), five body anchors carry `rel="nofollow noopener noreferrer"` while sixteen others on the same page, some pointing at the identical destination URL, carry only `rel="noopener noreferrer"`. The nofollowed set has attribute order href, rel, target. The followed set has href, target, rel. That pattern points at raw HTML anchors being sanitised through a different path from Dev.to's own Markdown-rendered ones. Dev.to documents none of this, so the mechanism is my inference from attribute ordering and nothing stronger.

Hashnode split along a different line. Three free-subdomain blogs gave `noopener noreferrer nofollow ugc` and two custom-domain blogs gave `noopener ugc`, five for five. I could not find Hashnode documentation stating that custom-domain mapping is the trigger, and I could not rule out a per-blog setting, an author-reputation rule, or a difference in the rendering pipeline. Five blogs is a correlation worth checking on your own blog, not a rule you can quote.

## The Canonical Element and the Body Link Disagree

On the Medium story with an external canonical, the head contains `<link rel="canonical" href="https://blog.frankel.ch/ai-assisted-genealogy/"/>` while the body anchor to that exact URL carries `rel="noopener ugc nofollow"`. The page names your original in one element and declines to vouch for it in another. The Hashnode free-subdomain post does the same thing.

These are two separate mechanisms with separate documentation. Google describes the canonical element as sitting "in the head section of HTML to indicate that another page is representative of the content on the page", and says it helps search engines "consolidate the signals they have for the individual URLs (such as links to them) into a single, preferred URL" ([Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)). Google also calls it "A strong signal that the specified URL should become canonical", which is the same grammar as a hint: a platform canonical can be ignored.

Note what that wording does not say. Google never describes a canonical as passing PageRank or link equity to the original. Consolidating signals is the documented behaviour and it is the phrasing I stick to. The same distinction runs through the canonical rules in the [ecommerce SEO checklist](/blog/ecommerce-seo-checklist/), where a filtered page that looks too different from its target gets its canonical ignored.

The canonical also has to be set, and the field is easy to leave blank. [One HackerNoon story](https://hackernoon.com/how-i-used-ai-to-trace-12-generations-of-my-family-tree) self-canonicalizes to hackernoon.com, even though the same text also ran on the author's own blog, on Dev.to and on Medium with an external canonical declared. HackerNoon documents the field in its help centre: "When you repost stories on HackerNoon, we offer canonical linking for individuals looking to grow their personal sites. All you need to do is add the link to the original story in this box in your story settings" ([Reposting and canonical linking](https://help.hackernoon.com/editing-protocal/4c-reposting-and-canonical-linking)). Filled in, it works: [another HackerNoon story](https://hackernoon.com/how-to-build-an-ai-agent-from-scratch) carries an external canonical in the head while its body anchors still carry `noopener noreferrer ugc`.

## How to Check the Rel Attribute on Any Page

Two commands settle it for any page you syndicate to. The first pulls every anchor pointing at your domain, with its rel attribute intact:

```bash
curl -s https://dev.to/nfrankel/ai-assisted-genealogy-9cn \
  | grep -o '<a[^>]*href="https://blog\.frankel\.ch[^"]*"[^>]*>'
```

The second reads the canonical element out of the head, which is a separate question with a separate answer:

```bash
curl -s https://dev.to/nfrankel/ai-assisted-genealogy-9cn \
  | grep -o '<link rel="canonical"[^>]*>'
```

Match on tokens rather than on the whole string. Medium sends its profile website link with `rel="noopener  ugc nofollow"`, a literal double space between the first two tokens, on a different code path from body links. That one came off [a second Medium story](https://medium.com/@hussnain-bashir/automata-theory-finally-make-sense-0d6c27dc8042). A grep for the exact string `rel="noopener ugc nofollow"` misses it. Grep for `nofollow` on its own.

Check a page that matches your case. HackerNoon's rel string held across the stories I opened, but Dev.to's varied within a single page, so one sample is a sample of one.

Expect some platforms to refuse you. Medium sits behind Cloudflare and returned HTTP 403 to every normal browser user-agent I tried from this machine, including Chrome desktop, Googlebot, bingbot and Twitterbot. The 200 response I inspected came back under a `facebookexternalhit/1.1` user-agent and contained the full server-rendered article: correct title, correct author, correct body anchors, correct canonical. The rel strings quoted here are what Medium served that agent. I could not re-confirm the identical markup under a logged-out browser user-agent, and that is the limit of the Medium finding.

If you would rather do this inside a crawl than at the command line, the directives view in a crawler covers the same ground, and the [technical SEO site audit](/blog/how-to-conduct-a-technical-seo-site-audit/) walks through the indexation and canonical checks that sit next to it.

## Which Rel Value to Stamp on Your Own Outbound Links

The platforms above make this decision for you. On your own site you make it, and the same Google page that produced the wording above carries the rules for all three values.

Paid placements take sponsored: "Mark links that are advertisements or paid placements (commonly called paid links) with the sponsored value." Comments and forum posts take ugc. Nofollow is the fallback for everything else you want to distance yourself from, in Google's phrasing "when other values don't apply, and you'd rather Google not associate your site with, or crawl the linked page from, your site" ([Google's link qualification guidance](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)).

The values stack, which is how the platform strings above reach four tokens: "You may specify multiple rel values as a space- or comma-separated list."

On a blog the decision is short. An editorial link you chose because the source is good gets no attribute at all. An affiliate or paid mention gets sponsored. An open comment field gets ugc. Those are among the few link decisions with documented answers, so there is no reason to guess at them.

## Are Nofollow Backlinks Worth It?

Worth it for what is the question that makes this decidable. A syndicated post reaches the readers on that platform whether or not its links are followed, and referral sessions show up in your own analytics the same week. That number is yours to measure. The link value is not.

Publish on your own domain first and let it get indexed before the copy goes up anywhere. Medium, Dev.to and HackerNoon each emitted a self-referential canonical on the post I checked where the original-source field was left blank, so the copy competes with you by default.

Set the canonical field in the platform's editor rather than assuming an import tool did it. The HackerNoon story above shows what a blank field produces, and I did not test whether Medium's import tool fills the field automatically or whether the author set it by hand.

Pick the platform for its audience, since you do not control its rel policy and it can change without telling you. That choice belongs in the same conversation as which [developer community platforms](/blog/developer-community-strategy/) are worth staffing, and reader reach does not move because of an attribute in the markup.

Run the same two commands against competitors who syndicate. It is a five-minute addition to any [content marketing competitor analysis](/blog/how-to-do-content-marketing-competitor-analysis/), and it tells you which of their placements are followed.

The honest summary of nofollow links SEO in 2026 is that the attribute is a hint, the platforms disagree with each other and sometimes with themselves, and the part you can verify is the markup. Open the page source of your last syndicated post and grep it for `nofollow`.
