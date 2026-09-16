# Project Memory - swapbiswas.com Portfolio

> **This file is synced with repo copy at `.claude/MEMORY.md`.**
> Update both files when making changes.

## Linked Memory Files
- [User Role](user_role.md) - Senior Product Marketing Manager at LambdaTest (promoted Apr 2026); prior role + education history
- [No git branches](feedback_no_branches.md) - commit straight to `main` and push; no feature branches for this repo
- [No em-dashes](feedback_no_emdash.md) - never use `—`; default to ` - ` or rewrite; applies to all output including chat
- [Avoid AI-writing tropes](feedback_avoid_ai_tropes.md) - all 49 tropes.fyi tells banned in every output incl. chat (no "It's not X, it's Y" stacking, "quietly", "load-bearing", "Here's the thing", "In summary", bold-first-every-bullet); rulebook repo `.claude/writing-tropes.md`, gate `scripts/lint-tropes.cjs` must end `TROPE GATE: PASS` (`--baseline=` for optimize passes); carve-outs for keyword H2s, FAQ questions, Title Case H2s, "competitive landscape"
- [Semrush research tooling](semrush_research_tooling.md) - `scripts/semrush.mjs` keyword-data fallback when Ahrefs MCP is out of units; broad-match vs exact-volume + KD gotcha
- [Paper & Signal site revamp](project_paper_signal_redesign.md) - 2026-08-26 site-wide retheme, LIVE on main since 2026-08-27 (f5415ee): warm paper + ink + vermilion #b53b15, Bricolage/Inter/JetBrains Mono; spec in repo DESIGN.md; why blue/terracotta/Geist were rejected
- [Signal homepage redesign](redesign_signal_homepage.md) - in-progress award-targeted homepage revamp on branch `redesign/signal-homepage` (GSAP+Lenis, theme-aware, prototypes in `prototypes/`)
- [Self-verify visual work](feedback_self_verify_visual.md) - for UI/design work, render & inspect the page myself (testmuai browser-cloud / kane-cli), don't rely on user screenshots
- [No reskin duplicates](feedback_no_reskin_duplicates.md) - a "new" design must be an original layout + interaction mechanic, not a palette/font swap of an existing page (that reads as a duplicate)
- [SEO organic strategy](project_seo_organic_strategy.md) - **CORRECTED 2026-09-03 with real GSC data**: site gets 164k impressions / 186 clicks / 0.11% CTR, NOT ~0 traffic; problem is position (63% of impressions at pos 21+) not visibility; 64% of impressions are SEO/analytics topics not PMM; the 8 tools total 639 impressions and are dead; never diagnose this site from third-party tools again
- [Keyword backlog](project_keyword_backlog.md) - data-backed blog opportunities and the winnability gate. **THE NEW-URL WELL IS DRY AND NOW MEASURED: across 2026-09-10 and 2026-09-12, 84 candidates were gated and ZERO cleared the top-three bar** (0 agent errors both cycles, so this is a real result). **Site is DOMAIN RATING 13, not 11** - re-measured on the free endpoint. Two NEW structural reasons the bar fails: (a) **programmatic AI content silos are the new fake proof page** - a 250-400 URL templated site with an Organization schema author and no bylines (marqeable.com 255 posts, toolcolumn.com 371 URLs were both credited then correctly refuted), so ALWAYS fetch a sub-DR-40 page and pull its sitemap before crediting it; (b) **a dead URL can hold a stale index entry** (zinklar.com DR 35 at #7 returns 404 after the company deleted its blog). **ARGUMENT-LEVEL CANNIBALIZATION IS NOW THE #1 KILLER** - not synonym-level: is the thing this post would say already published here in another costume? It killed 3 of 5 slot-4 candidates (test automation roi = 5 instances incl. feature-adoption-rate.md 'The Denominator Problem'; product marketing vs product management = 6 instances incl. an exact FAQ already live in FAQPage schema; copy testing = 6). Run that check FIRST, it is free and kills fastest. **Semrush is the working keyword tool** (user supplied a key 2026-09-12, ~2.0M units, scratchpad only, never committed); Ahrefs resets 2026-09-21 and only `public-domain-rating-free` is free. Google/Bing/DDG direct fetches are ALL bot-blocked now, so WebSearch (200/session, shared with subagents) is the only reliable SERP source. **Written 2026-09-12: message-testing-examples, mql-to-sql-conversion-rate-benchmark, share-of-voice-vs-market-share, plus the /tools/share-of-voice-calculator/ tool** - all three posts are deliberate sub-top-three bets on the user's explicit call. Standing rules: the top-three bar (6.98% CTR at 1-3 vs 0.048% at 4-10), the KD trap, the reframe trap, hyphen-tolerant dedup greps covering `/tools`, and `scripts/assign-blog-covers.cjs` rewrites ~16 existing posts so check `git diff --name-only` after running it. **62 of 147 posts currently FAIL the trope gate** - pre-existing debt, a cleanup pass is worth more than another discovery batch. Upgrade questions in repo `FIRST_HAND_UPGRADES.md`.
- [GSC API setup](reference_gsc_api_setup.md) - `scripts/gsc.mjs` CLI works; OAuth needs 127.0.0.1 redirect + swapbiswas.marketing@gmail.com as test user; service-account route blocked by org policy; manual xlsx export is the working fallback
- [Gradient-text shadow gotcha](reference_gradient_text_shadow_gotcha.md) - text-shadow/filter (incl. INHERITED from parent heading) darkens a `background-clip:text` gradient word by ~half in Chrome; set `text-shadow:none` on the word, get contrast from a scrim behind it
- [Astro scoped CSS vs JS-created elements](reference_astro_scoped_css_js_elements.md) - Astro scopes `<style>` with `data-astro-cid`; JS-created elements lack it so scoped CSS never applies (bit Solari tiles + the concept-library hover iframe); fix = inline styles / `is:global` / build in markup
- [Medium cross-posting](reference_medium.md) - which blogs are on Medium, the import prompt, 2-stories/24h rate limit; always set canonical to original
- [Cross-posting tracker](reference_crossposting.md) - Dev.to / HackerNoon / Hashnode syndication status tables + import prompts; canonical + index-first rules
- [Sibling sites: raisekind + strictly.fyi](project_sibling_sites.md) - two owned + Vercel-deployed standalone sites (parenting blog + GTM brief) at `c:\Website\raisekind.com` / `strictly.fyi`; repos under `swapbiswasmarketing`; strictly.fyi trademark guardrails; `gh` authed as `swapbiswas` not `swapbiswasmarketing`
- [Concept gallery pipeline](reference_concept_gallery_pipeline.md) - add + thumbnail a new concept at /personal-website-examples/ (now 49; +Exchange/IDE/Passport/Arcade, +Assistant/SERP/Model/Brand marketing-AI set); counts derive from concepts.length; primed-hidden JS reveals need a safety-net timeout or they show empty/0
- [Perf build pipeline](project_perf_pipeline.md) - image-variant + font-subset build steps (2026-09-04); bump the font `s1` suffix on any re-subset, run `npm run img:variants` after adding a diagram; **deferring GTM/AdSense/Clarity was built then reverted on the user's call - do not re-propose it**
- [AdSense manual units](project_adsense_units.md) - slot ids live in `src/config/ads.mjs` (placeholders until pasted); **Astro hashes plugin OPTIONS not plugin CODE**, so placement rules edited inside `rehype-ad-slots.mjs` silently no-op against the content-layer cache

## Project Overview
- Astro 5 static site (portfolio + blog) at `c:\Website\portfolio`
- Deployed at swapbiswas.com
- **Domain Rating 13** (re-measured 2026-09-12; older notes saying DR 11 are stale). 147 posts, 9 tool pages.
- Visual system: "Paper & Signal" (warm paper, ink, vermilion #b53b15 accent; Bricolage Grotesque / Inter / JetBrains Mono) + Renaissance x nature AI paintings - spec in repo DESIGN.md, live since 2026-08-27
- GitHub: https://github.com/swapbiswasmarketing/

## Key Files
- Blog posts: `src/content/blog/{slug}.md`
- Blog template: `src/pages/blog/[...slug].astro` (TOC, author bio, related posts, copy button, share buttons, print styles)
- Blog preview: `src/components/BlogPreview.astro` (card with date, reading time, category tags, responsive srcset)
- OG image generator: `src/pages/og/[...slug].webp.ts` (Satori + resvg + sharp, Uint8Array response)
- Content schema: `src/content.config.ts`
- Blog instructions: `BLOG_INSTRUCTIONS.md` (comprehensive guide for writing blogs)
- Tool instructions: `TOOL_INSTRUCTIONS.md` (comprehensive guide for building free interactive tools at `/tools/{slug}/`)
- LinkedIn posts: `LINKEDIN_POSTS.md` (post copies, image prompts, UTMs, scheduling)
- Tools index: `src/pages/tools/index.astro` (lists live + planned tools)
- Tool pages: `src/pages/tools/{slug}.astro` (e.g., `battlecard-generator.astro`)
- Meta head: `src/components/MainHead.astro`
- About page: `src/pages/about.astro` (hero, stats, skills, experience timeline, education, certs, awards, brands)
- Contact page: `src/pages/contact.astro` (FormSubmit.co form, FAQ accordion)

## Blog Writing Conventions
- **No emdashes** - use hyphens with spaces or rewrite
- **No AI-writing tropes** - rulebook `.claude/writing-tropes.md`; gate `node scripts/lint-tropes.cjs src/content/blog/{slug}.md` must end `TROPE GATE: PASS`, every WARN fixed or defended, section D judgment audit answered in writing
- **Fact-check every stat** against cited URL before publishing
- **Images: WebP only** - design as SVG, convert to WebP via resvg + sharp (render at 1200px max)
- **SEO:** Target keyword in title, first paragraph, 2+ H2s, and conclusion
- **OG images** auto-generate at build time - no manual action needed
- Frontmatter: title, description, publishDate, category (array), img, img_alt

## Blog Post Features
- Reading time (word count / 220, auto-calculated)
- Publish date display
- Table of contents (sticky sidebar desktop, collapsible mobile)
- Copy button on code blocks
- Author bio section
- Related posts (by shared categories, scored by tag relevance, max 3)
- Share buttons (Twitter, LinkedIn, Facebook)
- Breadcrumb schema + visual breadcrumb
- Image lightbox with alt text
- Print-friendly styles (@media print)
- FAQ accordion (details/summary)

## Global CSS Gotchas
- **`html, body { overflow-x: clip }` (NOT `hidden`)** in `src/styles/global.css` - required for `position: sticky` to work anywhere on the site. Using `overflow-x: hidden` causes browsers to compute `overflow-y: auto` on body, making body a scroll container and breaking sticky.
- Don't change this without understanding the consequence.

## View Transitions / Script Pattern
- **CRITICAL:** Never use `DOMContentLoaded` - it doesn't fire on View Transition navigations
- Use `document.addEventListener('astro:page-load', initFunction)` for page-specific JS
- Use `_tracked` or `_init` flags on DOM elements to prevent duplicate event listeners
- For `is:inline` scripts that should only run once, use `window._guardName` pattern
- Click handlers on `document` (event delegation) survive View Transitions without re-init

## Analytics & Tracking
- GTM: `GTM-WGNTLP2R`
- GA4: `G-32PVYX6VRH`
- Microsoft Clarity: `myl5bf3yc1`
- Custom dataLayer events: `cta_click`, `share_click`, `social_click`, `newsletter_signup`, `blog_read_progress` (25/50/75/100%), `theme_toggle`
- GTM tags configured (Option A: one tag per event)
- GA4 custom dimensions needed for: cta_type, share_platform, signup_location, read_percent, blog_title, theme

## Performance Optimizations
- Responsive images with `srcset` (400w blog cards, 480w portrait)
- `fetchpriority="high"` on LCP portrait image
- `loading="lazy" decoding="async"` on all non-critical images
- Google Fonts loaded async via `preload`/`onload` pattern
- `preconnect` to fonts.googleapis.com, fonts.gstatic.com, googletagmanager.com, scripts.clarity.ms
- `dns-prefetch` to clarity.ms, api.kit.com

## Contact Form
- Uses FormSubmit.co (`https://formsubmit.co/swapbiswas.marketing@gmail.com`)
- AJAX submission with native form `action` as fallback
- Email verified with FormSubmit
- Redirects to `/contact/?success=true` on native submit

## LinkedIn Posting
- LinkedIn posts tracked in `LINKEDIN_POSTS.md`
- UTM format: `?utm_source=linkedin&utm_medium=social&utm_campaign={slug}`
- 3-4 posts/week optimal (Tue/Wed/Thu/Fri)
- Image prompts for Nano Banana included with each post
- Image size: 1200x628 for LinkedIn

## Medium Cross-Posting
- Blogs cross-posted to Medium via "Import a story" feature
- Always set canonical URL to original swapbiswas.com blog URL in Advanced Settings
- Tracking and import prompt stored in `memory/reference_medium.md`

## Diagram Design System (for SVG source files)
- Paper & Signal palette (replaces the old dark #0d1117 system; see repo DESIGN.md section 8)
- Background: `#f6f4ef`; cards: `#ffffff` fill, `#e4dfd6` 1px border, rx 12
- Ink `#15130f` for titles (Bricolage Grotesque 600, 38px), headings 26px 600; body `#3a3632` Inter 20px; muted `#6a645c`
- One accent element per diagram in vermilion `#b53b15`; "good" = `#2a7347`; never purple, never dark backgrounds
- ViewBox 1400px wide, render at 1200px max for WebP; save to `public/assets/blog/{slug}/`
## User Preferences
- Thorough fact-checking is critical - verify every claim
- Prefers practical, actionable content with data citations
- Direct, no-filler writing style
- Wants comprehensive instructions documented for repeatability
- **WebP only for all blog images** - no SVGs in final output
- Keep a copy of memory file in repo at `.claude/MEMORY.md`
- Uses Nano Banana for AI image generation
