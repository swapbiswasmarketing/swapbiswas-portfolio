# Blog Writing & Publishing Instructions

Reference guide for creating blog posts on swapbiswas.com. Follow these steps every time.

## 1. Content File Setup

- **Location:** `src/content/blog/{slug}.md`
- **Slug:** Use the target keyword as the slug, hyphenated (e.g., `free-ai-tools-for-marketing.md`)
- **Frontmatter schema:**

```yaml
---
title: "Title With Target Keyword (Year)"
description: "150-160 char meta description with target keyword naturally included"
publishDate: YYYY-MM-DD
category: [Category1, Category2]
img: /assets/blog/{existing-image}.webp
img_alt: Descriptive alt text
---
```

- **Categories used so far:** AI, SEO, Marketing, Tools, Product Marketing, Career, Email, Design, Travel
- **Images available for reuse:** `ai-marketing.webp`, `google-reviews-seo.webp`, `marketing-research.webp`, `email-interactivity.webp`, `kerala-winter.webp`

## 2. Writing Standards

### Structure
- Open with a compelling stat or hook (not "In today's digital landscape...")
- Use H2 for main sections, H3 for subsections
- Keep paragraphs short (2-3 sentences max)
- Include practical, actionable takeaways in every section
- End with a clear conclusion/CTA section

### Style
- **No emdashes.** Use hyphens with spaces (` - `) or rewrite the sentence
- **No filler phrases:** "In this article", "It's no secret", "Let's dive in"
- Direct, confident tone. Write like you're explaining to a smart colleague
- Use bold for key stats and important terms
- Use tables for comparisons and data
- Use code blocks for prompts and technical examples

### Data & Citations
- **Every stat must be verifiable.** Check the cited URL actually contains the claimed data
- Use markdown link format: `([Source Name](URL))`
- Prefer primary sources over aggregator sites
- If a stat can't be verified, either remove it or state it without specific numbers
- **Common traps to avoid:**
  - Stats that sound too clean/round (often fabricated)
  - Secondary sources misattributing original research
  - Outdated tool pricing/feature limits (check before publishing)
  - Gartner/Forrester stats that are behind paywalls and unverifiable

### SEO Optimization
- Target keyword in: title, H1, first paragraph, at least 2 H2s, conclusion
- Use the exact-match keyword phrase 4-6 times naturally throughout
- Include related/semantic keywords naturally
- Add internal links to other blog posts where relevant
- Keep URLs clean and keyword-rich

## 3. SVG Diagrams

Create branded SVG diagrams for visual frameworks, processes, and checklists.

### Design System
```
Background:     #0d1117 to #161b22 (linear gradient)
Card fill:      #151b23 (slightly lighter than bg for separation)
Card border:    #30363d
Card shadow:    feDropShadow dx=0 dy=4 stdDeviation=8 flood-opacity=0.4
Border radius:  rx="16" for cards, rx="24" for outer container
Font:           Segoe UI, system-ui, sans-serif
Title text:     #f0f6fc, 38px, weight 700
Heading text:   #f0f6fc, 28px, weight 600
Body text:      #c8cfd8, 21px (32px line spacing minimum)
Subtitle text:  #9ca3af, 24px
Step labels:    accent color, 20px, weight 700, letter-spacing 0.08em
Tool hints:     accent color, 19px, weight 500
```

### Brand Colors (for accent bars, dots, highlights)
Use LIGHTER variants that contrast well against #0d1117 dark background.
Never use dark purple (#7611a6, #5b0d80) directly on dark backgrounds - unreadable.
```
Salmon/pink:    #f5a0a1
Light purple:   #d98ee0
Purple:         #c084fc
Violet:         #b388f2
Blue:           #60a5fa
Teal:           #5eead4
Orange:         #fb923c
Red:            #f87171
```

### Gradient Accent (for special elements)
```
#ca7879 -> #7611a6 -> #e05d22
```

### File Location & Format
- Design diagrams as SVGs, then **convert to WebP** before publishing (no SVGs in final output)
- Save WebP files to `public/assets/blog/{post-slug}/filename.webp`
- Reference in markdown as `![Alt text](/assets/blog/{post-slug}/filename.webp "Title")`
- ViewBox: typically `0 0 1400 680-800` (wide format, large for readability)

### SVG to WebP Conversion
```js
const { Resvg } = require('@resvg/resvg-js');
const sharp = require('sharp');
const fs = require('fs');

const svg = fs.readFileSync('input.svg', 'utf8');
const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1800 } });
const png = resvg.render().asPng();
await sharp(png).webp({ quality: 90 }).toFile('output.webp');
```

### Examples
- `public/assets/blog/ai-maturity-curve/maturity-stages.svg` - Staircase chart with curve
- `public/assets/blog/ai-maturity-curve/spar-framework.svg` - 4 cards in a row with arrows
- `public/assets/blog/ai-seo-strategy/workflow.svg` - 2x3 grid of step cards
- `public/assets/blog/technical-seo-audit/checklist.svg` - 2x4 grid with priority colors
- `public/assets/blog/product-marketing/positioning-framework.svg` - Radial layout with center

## 4. OG Images

OG images are auto-generated at build time via `src/pages/og/[...slug].png.ts` using Satori.

- Each blog post gets a branded OG image at `/og/{slug}.png`
- Design: dark background, purple gradient accent bar, title, category pill
- No manual action needed - just publish the blog post and the OG image generates automatically
- The blog page template at `src/pages/blog/[...slug].astro` already passes `image={/og/${entry.id}.png}` to the layout

## 5. Blog Page Features

The blog post template (`src/pages/blog/[...slug].astro`) includes:
- **Table of Contents:** Auto-generated from H2/H3 headings (sticky sidebar on desktop, collapsible on mobile)
- **Share buttons:** Below the content
- **Schema markup:** BlogPosting JSON-LD auto-generated
- **Breadcrumbs:** Auto-generated in BaseLayout
- **Content styling:** Tables, code blocks, blockquotes, images all have dark-theme styles

## 6. Pre-Publish Checklist

- [ ] Target keyword in title, first paragraph, and 2+ H2s
- [ ] All stats fact-checked against cited URLs
- [ ] No emdashes anywhere in the file
- [ ] All external links have descriptive anchor text
- [ ] Internal links to 2-3 other blog posts
- [ ] SVG diagram(s) created for key frameworks/processes
- [ ] Frontmatter complete (title, description, publishDate, category, img, img_alt)
- [ ] Run `npx astro build` to verify no errors
- [ ] Check OG image generates correctly at `/og/{slug}.png`

## 7. Content Schema Reference

From `src/content.config.ts`:
```
title: string (required)
description: string (required)
publishDate: date (required)
category: string[] (required)
img: string (required)
img_alt: string (optional)
```

## 8. Memory File

A project memory file is kept in sync at two locations:
- **Repo copy:** `.claude/MEMORY.md` (committed to git)
- **Claude persistent memory:** `C:\Users\swapnilb\.claude\projects\c--Website-portfolio\memory\MEMORY.md`

When updating project conventions, update **both** files simultaneously.
