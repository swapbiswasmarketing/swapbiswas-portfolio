# Project Memory - swapbiswas.com Portfolio

> **This file is synced with repo copy at `.claude/MEMORY.md`.**
> Update both files when making changes.

## Linked Memory Files
- [User Role](user_role.md) - Senior Product Marketing Manager at LambdaTest (promoted Apr 2026); prior role + education history
- [No em-dashes](feedback_no_emdash.md) - never use `—`; default to ` - ` or rewrite; applies to all output including chat
- [Semrush research tooling](semrush_research_tooling.md) - `scripts/semrush.mjs` keyword-data fallback when Ahrefs MCP is out of units; broad-match vs exact-volume + KD gotcha
- [Signal homepage redesign](redesign_signal_homepage.md) - in-progress award-targeted homepage revamp on branch `redesign/signal-homepage` (GSAP+Lenis, theme-aware, prototypes in `prototypes/`)
- [Self-verify visual work](feedback_self_verify_visual.md) - for UI/design work, render & inspect the page myself (testmuai browser-cloud / kane-cli), don't rely on user screenshots
- [SEO organic strategy](project_seo_organic_strategy.md) - site gets ~0 Google traffic (DR 11, 3 keywords) despite 75 posts; strategy = optimize existing low-KD pages first, AEO angle, build authority; NOT in Ahrefs GSC
- [Gradient-text shadow gotcha](reference_gradient_text_shadow_gotcha.md) - text-shadow/filter (incl. INHERITED from parent heading) darkens a `background-clip:text` gradient word by ~half in Chrome; set `text-shadow:none` on the word, get contrast from a scrim behind it
- [Astro scoped CSS vs JS-created elements](reference_astro_scoped_css_js_elements.md) - Astro scopes `<style>` with `data-astro-cid`; JS-created elements lack it so scoped CSS never applies (bit Solari tiles + the concept-library hover iframe); fix = inline styles / `is:global` / build in markup
- [Medium cross-posting](reference_medium.md) - which blogs are on Medium, the import prompt, 2-stories/24h rate limit; always set canonical to original
- [Cross-posting tracker](reference_crossposting.md) - Dev.to / HackerNoon / Hashnode syndication status tables + import prompts; canonical + index-first rules

## Project Overview
- Astro 5 static site (portfolio + blog) at `c:\Website\portfolio`
- Deployed at swapbiswas.com
- Dark theme with purple/orange brand gradient
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
- Background: `#0d1117` to `#161b22`
- Cards: `#151b23` fill, `#30363d` border, rx 16
- Use LIGHT accent colors: `#f5a0a1`, `#c084fc`, `#60a5fa`, `#fb923c`, `#5eead4`, `#d98ee0`, `#b388f2`
- Never use dark purple (#7611a6) on dark backgrounds - unreadable
- Font: Segoe UI, Title `#f0f6fc` 38px 700, Heading 28px 600, Body `#c8cfd8` 21px, 32px line spacing
- ViewBox: 1400px wide, render at 1200px max for WebP
- Save WebP to `public/assets/blog/{slug}/`

## User Preferences
- Thorough fact-checking is critical - verify every claim
- Prefers practical, actionable content with data citations
- Direct, no-filler writing style
- Wants comprehensive instructions documented for repeatability
- **WebP only for all blog images** - no SVGs in final output
- Keep a copy of memory file in repo at `.claude/MEMORY.md`
- Uses Nano Banana for AI image generation
