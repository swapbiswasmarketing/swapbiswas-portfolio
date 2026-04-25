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

### Hero Images (Blog Cards + OG Images)

Only use these 4 stock images for the `img` frontmatter field:
```
/assets/stock-1.webp
/assets/stock-2.webp
/assets/stock-3.webp
/assets/stock-4.webp
```

**Rules:**
- No two adjacent posts on the blog listing page should use the same image
- Posts are sorted by `publishDate` descending; posts with the same date sort alphabetically by filename
- When adding a new post, check what image the most recent post uses and pick a different one
- The OG image generator reads this `img` field and uses the matching stock background automatically
- **Do NOT use any other images** (e.g., `ai-marketing.webp`, `kerala-winter.webp`) for the hero - only `stock-1` through `stock-4`

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
- **Sources must be less than 5 years old.** Do not cite studies, reports, or data older than 5 years. Find a recent equivalent or rewrite without the specific number
- **Every number needs a source where it makes sense.** Stats, percentages, dollar amounts, and data points should have an inline citation link. Exceptions: obvious/general numbers (e.g., "3-5 emails", "under 40 characters") that aren't research claims
- Prefer primary sources over aggregator sites
- If a stat can't be verified, either remove it or state it without specific numbers
- **Verification means visiting the exact cited URL.** Confirming a stat "exists on the internet" is NOT verification. You must open the linked URL and confirm the exact number appears on that specific page. If the number is real but not on the page you linked, find the correct URL or use the actual primary source
- **Common traps to avoid:**
  - "Zombie stats" - numbers repeated across hundreds of blogs but with no traceable primary source (e.g., Annuitas Group "47% larger purchases"). If you cannot find the original study/report page, do not use the stat
  - Stats that sound too clean/round (often fabricated)
  - Secondary sources misattributing original research (e.g., Sender.net citing Omnisend data - link to Omnisend, not Sender)
  - Outdated tool pricing/feature limits (check official pricing pages before publishing)
  - Gartner/Forrester stats that are behind paywalls and unverifiable
  - Competitor homepage headlines and taglines change frequently - verify on the day of publishing

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
Title text:     #f0f6fc, 40-44px, weight 700
Heading text:   #f0f6fc, 26-32px, weight 600
Body text:      #c8cfd8, 22-24px (34px line spacing minimum)
Supporting text:#9ca3af, 20-22px (for secondary labels, bullet lists, "replaces" lines)
Subtitle text:  #9ca3af, 24-26px
Step labels:    accent color, 20-22px, weight 700, letter-spacing 0.08em
Tool hints:     accent color, 20-22px, weight 500
```

**Why these minimums:** blog content images display at ~700-800px effective width inside the article column on desktop (even though they're rendered at 1200px). Anything under 20px body text is hard to read once the image is scaled down. Bump sizes if a diagram has few text elements and can breathe.

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
- **Max render width: 1200px** - blog images must not exceed 1200px wide. Render SVGs at 1200px via resvg.
- **Mobile responsiveness:** All blog content images automatically scale to `max-width: 100%` via CSS. No extra attributes needed in markdown. If an image appears too wide on mobile, the blog template handles it.

### SVG to WebP Conversion

Use the reusable utility at `scripts/convert-svg-batch.cjs`. It renders each SVG at 1200px width and writes a WebP alongside the source.

```bash
node scripts/convert-svg-batch.cjs public/assets/blog/{slug}/diagram.svg
# or multiple at once:
node scripts/convert-svg-batch.cjs public/assets/blog/{slug}/*.svg
```

Internally: `Resvg` renders at `fitTo: { mode: 'width', value: 1200 }`, then `sharp` encodes to WebP at quality 90.

### Arrows & Connectors Between Cards
- **Color:** Use `#5eead4` (teal) for all arrows - never use `#484f58` (nearly invisible on dark bg)
- **Stroke width:** `2.5` minimum for lines
- **Arrowheads:** Use polygon triangles (14px wide, 14px tall) in the same teal color, e.g. `<polygon points="428,213 442,220 428,227" fill="#5eead4"/>`
- **Horizontal arrows:** Place a `<line>` + `<polygon>` in the gap between cards. Never overlap card boundaries
- **Row transitions (e.g. step 3→4):** Draw from the bottom-center of the source card, go down, across horizontally, then down into the top-center of the target card. Use 3 separate `<line>` elements + 1 downward `<polygon>`
- **Never use:** SVG `<marker>` definitions (resvg renders them inconsistently), tiny triangles, curved `<path>` arrows, or `#484f58` colored arrows
- **Flow must be logical:** Arrows connect sequential steps only (1→2→3→4...). No skip connections, no iterate loops unless the blog content explicitly describes one

### Text Overflow Prevention
SVG text does NOT auto-wrap or auto-shrink. Every text element must be manually checked against its container.
- **Circle containers:** Text must fit within the circle diameter. For `r="65"` circles (130px wide), limit subtitle text to ~12 characters at `font-size="12"`. Shorten labels (e.g., "Clean PM + integrations" → "PM + integrations")
- **Rectangular cards:** Measure text width roughly as `character_count × font_size × 0.55`. If wider than the card, either shorten the text, split into two `<text>` lines, or widen the card
- **Arrow/connector labels:** Never place labels at the same y-coordinate as adjacent card tops - they will overlap. Place labels above the cards (e.g., `y="132"` when cards start at `y="140"`) or centered in the gap between cards
- **Long sentences in cards:** Split into two `<text>` elements on separate lines (e.g., y="280" and y="300") rather than one long line. Increase the card height to fit
- **Bottom text/footer:** If a bottom summary box has long text, widen the box (use 600-800px width) and split text across 2-3 lines

### Padding for Border-Radius Clipping
The blog template applies `border-radius: 1.5rem` to content images. To prevent clipping:
- Title text should start at `y="62"` minimum (not `y="52"`)
- First row of cards should start at `y="130"` minimum (not `y="115"`)
- Add `40-60px` bottom padding below the last content element
- ViewBox height should accommodate this padding

### Visual Verification Checklist
After converting SVG to WebP, **always view the WebP image** to verify:
- [ ] No text overflows its container (circles, cards, boxes)
- [ ] No text is clipped at image edges (especially right and bottom)
- [ ] Arrow labels are not hidden behind adjacent cards
- [ ] Bottom footer text is fully visible and not cut off
- [ ] All text is readable at the rendered size (minimum 17px for supporting text, 19px for body)
- [ ] If the SVG source was updated (e.g., pricing changes), the WebP was re-rendered

### Examples
- `public/assets/blog/ai-maturity-curve/maturity-stages.svg` - Staircase chart with curve
- `public/assets/blog/ai-maturity-curve/spar-framework.svg` - 4 cards in a row with arrows
- `public/assets/blog/ai-seo-strategy/workflow.svg` - 2x3 grid of step cards
- `public/assets/blog/technical-seo-audit/checklist.svg` - 2x4 grid with priority colors
- `public/assets/blog/product-marketing/positioning-framework.svg` - Radial layout with center

## 4. OG Images

OG images are auto-generated at build time via `src/pages/og/[...slug].webp.ts` using Satori + resvg + sharp (PNG → WebP conversion).

- Each blog post gets a branded OG image at `/og/{slug}.webp`
- **The OG image background matches the blog card hero image** - it reads the `img` field from frontmatter and uses the corresponding stock `.jpg` file
- Mapping: `stock-1.webp` -> `stock-1.jpg`, `stock-2.webp` -> `stock-2.jpg`, etc. (handled by `getStockFromFrontmatter()` in the generator)
- No manual action needed - set the `img` field in frontmatter and both the blog card and OG image use the same stock background
- The blog page template at `src/pages/blog/[...slug].astro` already passes `image={/og/${entry.id}.webp}` to the layout

## 5. Blog Page Features

The blog post template (`src/pages/blog/[...slug].astro`) includes:
- **Table of Contents:** Auto-generated from H2/H3 headings (sticky sidebar on desktop, collapsible on mobile)
- **Share buttons:** Below the content
- **Schema markup:** BlogPosting JSON-LD auto-generated
- **Breadcrumbs:** Auto-generated in BaseLayout
- **Content styling:** Tables, code blocks, blockquotes, images all have dark-theme styles

## 6. Post-Write Fact-Checking (Mandatory)

After writing a blog post, **every single fact, number, quote, and claim must be verified** before publishing. This step is non-negotiable.

### Process
1. Extract every stat, number, percentage, dollar amount, and factual claim from the post
2. Visit each cited URL and verify the exact data point exists on that page
3. For any stat that cannot be verified:
   - **Remove it entirely**, or
   - **Replace with a verifiable alternative**, or
   - **Rewrite the sentence without the specific number**
4. Check tool pricing against official pricing pages (pricing changes frequently)
5. Verify company names, product names, and feature descriptions are current
6. Confirm all external links are not broken (return 200, not 404)

### Common Fact-Checking Failures
- Stats that are AI-hallucinated (no source exists)
- Stats from secondary sources that misquote the original
- Outdated pricing or feature information
- Paywalled sources (Gartner, Forrester) cited as if publicly accessible
- Rounding or misattributing percentages
- Citing a source that says something different from what you claim

### What to Do When a Stat Fails Verification
Do NOT leave unverified stats in the post. Either find a real source or rewrite the sentence to make the point without a specific number. A post with fewer stats that are all accurate is better than a post full of impressive-sounding numbers that can't be verified.

### When WebFetch Returns Nav/Archive Instead of Article Body
Some pages (JS-rendered SPAs, dynamic docs sites) return only shell HTML to WebFetch. Use the TestMu AI browser-cloud wrapper to render the page in a real browser and extract markdown:

```bash
node scripts/testmu-fetch.cjs https://example.com/page
```

Requires `LT_USERNAME` and `LT_ACCESS_KEY` env vars. Output is JSON with `title`, `content`, `markdown`, `url`, and `metadata`. Grep the output for the exact phrase you need to verify.

## 7. Pre-Publish Checklist

- [ ] Target keyword in title, first paragraph, and 2+ H2s
- [ ] **All stats fact-checked against cited URLs (Section 6)**
- [ ] No emdashes anywhere in the file
- [ ] All external links have descriptive anchor text
- [ ] Internal links to 2-3 other blog posts
- [ ] SVG diagram(s) created for key frameworks/processes
- [ ] Frontmatter complete (title, description, publishDate, category, img, img_alt)
- [ ] Hero image uses only `stock-1` through `stock-4.webp` and doesn't duplicate adjacent posts
- [ ] Run `npx astro build` to verify no errors
- [ ] Check OG image generates correctly at `/og/{slug}.webp` (should match the hero image)
- [ ] FAQ schema added for question-based or high-value posts (Section 8)

## 8. FAQ Schema (Optional)

Add FAQ structured data to blog posts that target question-based queries or cover topics where FAQ rich results would boost SERP visibility.

### When to Add FAQs
- Posts with question-based titles ("What is...", "How to...", "Do X help Y?")
- High-value posts targeting competitive keywords
- Posts that naturally answer common questions in the topic area

### How to Add
Add a `faqs` array to the post's frontmatter:

```yaml
faqs:
  - q: "What is product marketing?"
    a: "Product marketing is the function that connects a product to its market. It owns positioning, messaging, go-to-market strategy, competitive intelligence, and sales enablement."
  - q: "What does a PMM do?"
    a: "A PMM defines positioning, launches products, creates sales enablement materials, conducts competitive analysis, and gathers customer insights."
```

### Guidelines
- 3-5 FAQs per post (Google may ignore posts with too many)
- Questions should be real queries people search for, not made-up filler
- Answers should be concise (1-3 sentences) and directly answer the question
- The FAQ schema auto-generates as `FAQPage` JSON-LD at build time via `src/pages/blog/[...slug].astro`
- Posts without `faqs` in frontmatter simply don't get FAQ schema - no action needed

### Posts with FAQ Schema
- `what-is-product-marketing.md` (4 FAQs)
- `will-marketing-be-replaced-by-ai.md` (3 FAQs)
- `do-google-reviews-help-seo.md` (3 FAQs)
- `icp-vs-buyer-persona.md` (3 FAQs)
- `how-much-does-an-seo-audit-cost.md` (4 FAQs)
- `what-does-a-product-marketing-manager-do.md` (4 FAQs)
- `how-to-use-chatgpt-for-sales-and-marketing.md` (4 FAQs)
- `how-to-implement-marketing-automation.md` (5 FAQs)
- `how-to-launch-a-saas-product.md` (5 FAQs)
- `what-is-b2b-demand-generation.md` (5 FAQs)
- `what-is-market-positioning.md` (5 FAQs)
- `what-is-sales-enablement-software.md` (5 FAQs)

## 9. Content Schema Reference

From `src/content.config.ts`:
```
title: string (required)
description: string (required)
publishDate: date (required)
updatedDate: date (required)
category: string[] (required)
img: string (required)
img_alt: string (optional)
faqs: { q: string, a: string }[] (optional)
```

## 10. Memory File

A project memory file is kept in sync at two locations:
- **Repo copy:** `.claude/MEMORY.md` (committed to git)
- **Claude persistent memory:** `C:\Users\swapnilb\.claude\projects\c--Website-portfolio\memory\MEMORY.md`

When updating project conventions, update **both** files simultaneously.
