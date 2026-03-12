# Project Memory - swapbiswas.com Portfolio

> **This file is synced with Claude's persistent memory.**
> Update both this file AND `C:\Users\swapnilb\.claude\projects\c--Website-portfolio\memory\MEMORY.md` when making changes.

## Project Overview
- Astro 5 static site (portfolio + blog) at `c:\Website\portfolio`
- Deployed at swapbiswas.com
- Dark theme with purple/orange brand gradient

## Key Files
- Blog posts: `src/content/blog/{slug}.md`
- Blog template: `src/pages/blog/[...slug].astro` (TOC, author bio, related posts, copy button, share buttons)
- Blog preview: `src/components/BlogPreview.astro` (card with date, reading time, category tags)
- OG image generator: `src/pages/og/[...slug].png.ts` (Satori + resvg)
- Content schema: `src/content.config.ts`
- Blog instructions: `BLOG_INSTRUCTIONS.md` (comprehensive guide for writing blogs)
- Meta head: `src/components/MainHead.astro`

## Blog Writing Conventions
- **No emdashes** - use hyphens with spaces or rewrite
- **Fact-check every stat** against cited URL before publishing
- **Images: WebP only** - design as SVG, convert to WebP via resvg + sharp (render at 1800px)
- **SEO:** Target keyword in title, first paragraph, 2+ H2s, and conclusion
- **OG images** auto-generate at build time - no manual action needed
- Frontmatter: title, description, publishDate, category (array), img, img_alt

## Blog Post Features
- Reading time (word count / 220, auto-calculated)
- Publish date display
- Table of contents (sticky sidebar desktop, collapsible mobile)
- Copy button on code blocks
- Author bio section
- Related posts (by shared categories, max 3)
- Share buttons
- Breadcrumb schema

## Diagram Design System (for SVG source files)
- Background: `#0d1117` to `#161b22`
- Cards: `#151b23` fill, `#30363d` border, rx 16
- Use LIGHT accent colors: `#f5a0a1`, `#c084fc`, `#60a5fa`, `#fb923c`, `#5eead4`, `#d98ee0`, `#b388f2`
- Never use dark purple (#7611a6) on dark backgrounds - unreadable
- Font: Segoe UI, Title `#f0f6fc` 38px 700, Heading 28px 600, Body `#c8cfd8` 21px, 32px line spacing
- ViewBox: 1400px wide, render at 1800px for sharp WebP
- Save WebP to `public/assets/blog/{slug}/`

## User Preferences
- Thorough fact-checking is critical - verify every claim
- Prefers practical, actionable content with data citations
- Direct, no-filler writing style
- Wants comprehensive instructions documented for repeatability
- **WebP only for all blog images** - no SVGs in final output
- Keep a copy of memory file in repo at `.claude/MEMORY.md`
