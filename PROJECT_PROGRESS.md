# Swapnil Biswas Portfolio - Project Progress

## Overview

Migration of **swapbiswas.com** from WordPress + old Astro template to a new Astro 5 portfolio site based on the "deeply-debris" theme. The site is a personal portfolio for Swapnil Biswas - an AI, Product & Digital Growth Marketer.

**Live URL:** https://swapbiswas.com
**GitHub:** https://github.com/swapbiswasmarketing/swapbiswas-portfolio.git
**Branch:** `main`
**Framework:** Astro 5.18+ (static site generation)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Astro 5 | Static site generator |
| Satori + @resvg/resvg-js | Build-time OG image generation |
| @astrojs/rss | RSS feed |
| @astrojs/sitemap | Sitemap generation |
| Google Fonts (Rubik, Public Sans) | Typography |
| FormSubmit.co | Contact form (AJAX POST) |
| CSS Custom Properties | Light/dark theming |

---

## Project Structure

```
c:\Website\portfolio\
├── public/
│   ├── robots.txt
│   ├── favicon.png / .ico / .svg
│   └── assets/
│       ├── portrait.jpg / .webp        # Profile photo
│       ├── ogimage.jpg                 # Default OG image (non-blog pages)
│       ├── stock-1.jpg to stock-4.jpg  # Gradient art used as OG backgrounds
│       ├── backgrounds/                # Site background images (light/dark)
│       ├── brands/                     # Brand logos for "Trusted By"
│       ├── projects/                   # Work case study images
│       └── blog/                       # Blog post inline images
├── src/
│   ├── content/
│   │   ├── blog/          # 5 blog posts (Markdown)
│   │   └── work/          # 8 work case studies (Markdown)
│   ├── components/        # 16 Astro components
│   ├── layouts/           # BaseLayout.astro
│   ├── pages/             # All routes
│   ├── styles/            # global.css
│   └── content.config.ts  # Content collection schemas
├── astro.config.mjs       # Site config (site: https://swapbiswas.com)
├── package.json           # name: swapbiswas-portfolio
└── tsconfig.json
```

---

## Content

### Blog Posts (7 total)

| Slug | Title | Category |
|------|-------|----------|
| `do-google-reviews-help-seo` | Do Google Reviews Help SEO? The Ultimate Guide (2025 Edition) | SEO |
| `will-marketing-be-replaced-by-ai` | Will Marketing Be Replaced By AI? | Marketing, AI |
| `how-does-marketing-research-help-managers` | How Does Marketing Research Help Managers? | Marketing |
| `increase-interactivity-in-your-emails` | 7 Most Productive Ways to Increase Interactivity in Your Emails | Marketing |
| `kerala-winter-experiences` | Five Winter Experiences You Cannot Miss in God's Own Country | Travel |
| `wordpress-to-astro-netlify-migration` | How I Moved My Website from WordPress to Astro and Saved ₹12,000/Year | Marketing |
| `marketers-ai-maturity-curve` | The Marketer's AI Maturity Curve: Where Are You on It? | AI, Marketing, Thought Leadership |

### Work Case Studies (8 total)

cocacola, curoloy, everyday, not-pot, shuvashini, southpole, the-taxi, zimmer

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.astro` | Homepage with hero, latest posts, resume, stats, trusted-by, skills, CTA |
| `/about` | `about.astro` | About page |
| `/blog` | `blog.astro` | Blog listing (sorted by date) |
| `/blog/[slug]` | `blog/[...slug].astro` | Individual blog post with share buttons, OG image |
| `/work` | `work.astro` | Work/portfolio listing |
| `/work/[slug]` | `work/[...slug].astro` | Individual case study |
| `/contact` | `contact.astro` | Contact form (FormSubmit.co) |
| `/privacy` | `privacy.astro` | Privacy policy |
| `/404` | `404.astro` | Error page |
| `/rss.xml` | `rss.xml.js` | RSS feed |
| `/og/[slug].png` | `og/[...slug].png.ts` | Dynamic OG image generation |

---

## Components

| Component | Description |
|-----------|-------------|
| `MainHead.astro` | `<head>` with meta tags, OG image (absolute URLs via `Astro.site`), fonts, theme script, GA4, GTM, Clarity |
| `Nav.astro` | Navigation bar |
| `Footer.astro` | Footer with privacy policy link |
| `Hero.astro` | Reusable hero section |
| `BaseLayout.astro` (layout) | Wraps all pages, passes `title`, `description`, `image`, `breadcrumbs` to MainHead. BreadcrumbList JSON-LD schema. |
| `BlogPreview.astro` | Blog card using generated OG image as thumbnail |
| `PortfolioPreview.astro` | Work/project card |
| `ResumeSection.astro` | Tabbed resume (Skills, Experience, Education, Certifications, Awards) |
| `Skills.astro` | Skills display component |
| `ShareButtons.astro` | Twitter/LinkedIn/Facebook share buttons with SVG icons |
| `ContactCTA.astro` | Call-to-action for contact |
| `CallToAction.astro` | Generic CTA component |
| `Grid.astro` | Grid layout wrapper |
| `Pill.astro` | Tag/badge pill |
| `Icon.astro` / `IconPaths.ts` | Icon system |
| `ThemeToggle.astro` | Light/dark mode toggle |

---

## All Work Completed (Chronological)

### Phase 1: Initial Migration (Previous Session)

1. **Migrated content from WordPress/old Astro to new deeply-debris theme**
   - Transferred all work case study files (8 projects)
   - Transferred all blog posts (5 articles)
   - Migrated images (portraits, project images, blog images)
   - Updated content schemas in `content.config.ts`

2. **Added blog section to homepage**
   - Shows latest blog posts on the index page
   - Uses `BlogPreview.astro` component

3. **Created contact page**
   - Form powered by FormSubmit.co (AJAX POST)
   - Route: `/contact`

4. **Added RSS feed**
   - `@astrojs/rss` integration
   - Route: `/rss.xml`

5. **Added sitemap**
   - `@astrojs/sitemap` integration
   - Auto-generates `sitemap-index.xml`

6. **Pushed to GitHub**
   - Repository: https://github.com/swapbiswasmarketing/swapbiswas-portfolio.git

### Phase 2: Restructuring & Enhancements (Current Session)

7. **Removed deeply-debris folder nesting**
   - Moved all files from `deeply-debris/` up to `c:\Website\portfolio\`
   - Project root is now the Astro project directly

8. **Renamed package**
   - Changed `package.json` name from `deeply-debris` to `swapbiswas-portfolio`

9. **Git branch cleanup**
   - Renamed `master` branch to `main`
   - Force pushed to remote
   - Deleted remote `master` branch

10. **Added "My Resume" section to homepage**
    - Created `ResumeSection.astro` component
    - 5 tabs: Skills (with animated progress bars), Experience (6 entries), Education (2 entries), Certifications (10 entries), Awards (5 entries)
    - Timeline layout for Experience/Education
    - Card grid for Certifications/Awards
    - Skills bars animate on scroll via IntersectionObserver
    - Vanilla JS tab switching (no framework dependency)
    - Styled to match site theme (gradient-accent-orange for active tab)

11. **Added brand logos to "Trusted By" section**
    - Replaced plain text brand names with actual logo images
    - Brands: LambdaTest, Samsung, Lido Learning, MediLife, SocioWash, Appknox
    - Logo files stored in `public/assets/brands/`
    - Light theme: `filter: brightness(0) opacity(0.5)` (dark logos on light bg)
    - Dark theme: `filter: brightness(0) invert(1) opacity(0.6)` (white logos on dark bg)
    - Uses `:global(.theme-dark)` CSS selector for theme-aware styling

12. **Migration audit & gap fixes**
    - Created `public/robots.txt` (allows all, points to sitemap)
    - Created `src/pages/privacy.astro` (full privacy policy page)
    - Added privacy link to `Footer.astro`
    - Created `ShareButtons.astro` (Twitter/X, LinkedIn, Facebook with SVG icons)
    - Added share buttons to blog post template (`blog/[...slug].astro`)
    - Added Google Analytics placeholder in `MainHead.astro` (commented out, replace `G-XXXXXXXXXX`)

13. **Added stats/counter section to homepage**
    - Stats: 657K Leads Generated, 18.2M Website Traffic, 10x Conversion Results, 15+ People Mentored, 20+ AI Agents & Apps Created
    - Gradient text using `background-clip: text` with `--gradient-accent-orange`
    - Count-up animation on scroll (IntersectionObserver + requestAnimationFrame)
    - Cubic ease-out easing for smooth animation
    - Handles decimals (18.2M) and integer values
    - Desktop: 5 columns with vertical dividers
    - Mobile: 2-column grid, responsive layout

14. **Dynamic OG image generation for blog posts**
    - Created `src/pages/og/[...slug].png.ts` API route
    - Uses Satori to render markup → SVG, then @resvg/resvg-js → PNG
    - Generates one 1200x630 PNG per blog post at build time
    - Fetches Rubik font (400 + 600 weights) from Google Fonts, cached
    - Category-specific accent colors:
      - SEO → blue (#2563eb), uses `stock-3.jpg` (purple spheres)
      - Marketing → purple (#7611a6), uses `stock-1.jpg` (pink/teal marble)
      - Travel → teal (#0d9488), uses `stock-4.jpg` (pink/blue watercolor)
    - Design: stock gradient image visible at top, smooth dark gradient fade at bottom for text area
    - Elements: accent bar (top), category pill with colored dot, site branding, large title with text shadow, author avatar (SB initials), author name/role, accent bar (bottom)
    - Adaptive font sizing based on title length (3 tiers: >60 chars, >40, default)

15. **Wired OG images into blog pages**
    - `BlogPreview.astro`: card thumbnail uses `/og/{slug}.png` instead of static blog images
    - `blog/[...slug].astro`: hero image uses `/og/{slug}.png`, passes `image` prop to BaseLayout
    - `BaseLayout.astro`: accepts `image` prop, passes to MainHead
    - `MainHead.astro`: uses `image` prop for `og:image` meta tag (defaults to `/assets/ogimage.jpg`)
    - Non-blog pages still use the default `/assets/ogimage.jpg`

16. **Improved OG image overlay design**
    - Replaced heavy dark overlay (60-95% opacity) with a lighter approach
    - Top portion: stock image visible through a 25-35% subtle diagonal scrim
    - Bottom portion: smooth gradient fade from transparent → dark for text panel
    - Text content (category, title, author) pinned to bottom with natural "rising fog" effect
    - Stock gradient art is now the dominant visual element

17. **Updated portrait photo**
    - Added new professional portrait (`public/assets/portrait-new.jpg`) from user-provided WhatsApp image
    - Updated homepage hero (`index.astro`) to use new portrait
    - Updated about page hero (`about.astro`) to use new portrait
    - Old portraits (`portrait.webp`, `at-work.jpg`) still in assets but no longer referenced

18. **Added face avatar to OG images**
    - Cropped face from portrait using sharp (200x200px) → `public/assets/avatar-crop.jpg`
    - Replaced "SB" initials circle with actual photo avatar in OG image generator
    - Avatar rendered as 40px circular image with white border and shadow
    - Loaded as base64 data URI at build time (same pattern as stock backgrounds)

19. **Updated favicon to match live site**
    - Replaced `favicon.ico` with the one from live swapbiswas.com
    - Replaced default Astro rocket `favicon.svg` with "SB" monogram SVG (adapts to light/dark mode)
    - Kept existing `favicon.png` (already had SB monogram)
    - Added SVG favicon reference in `MainHead.astro` as preferred icon type

20. **SEO & meta tag improvements**
    - Added `<link rel="canonical">` to every page via `MainHead.astro` (uses `Astro.url.href`)
    - Added `og:type`, `og:url`, `og:site_name` Open Graph meta tags
    - Added Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`)
    - Added `<link rel="apple-touch-icon">` pointing to `/favicon.png` for iOS homescreen support
    - Reorganized meta tags in MainHead for clarity (grouped by purpose)

21. **Hidden Work section and pages (no final data yet)**
    - Commented out "Selected Work" section on homepage (`index.astro`)
    - Removed "Work" link from navigation (`Nav.astro`)
    - Added `noindex` support: `MainHead.astro` accepts `noindex` prop → renders `<meta name="robots" content="noindex, nofollow" />`
    - `BaseLayout.astro` passes `noindex` prop through to MainHead
    - Set `noindex={true}` on `work.astro` (listing) and `work/[...slug].astro` (detail pages)
    - Work pages still exist and build, but are hidden from nav and search engines
    - To re-enable: uncomment the Selected Work section in `index.astro`, uncomment Work in `Nav.astro` textLinks, remove `noindex` from work pages

22. **SEO & meta tag audit and fixes**
    - Added `<link rel="canonical">` to every page via `MainHead.astro` (uses `Astro.url.href`)
    - Added `og:type`, `og:url`, `og:site_name` Open Graph meta tags
    - Added Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`)
    - Added `<link rel="apple-touch-icon">` pointing to `/favicon.png` for iOS homescreen support
    - Reorganized meta tags in MainHead for clarity (grouped by purpose)

23. **Added analytics tracking (GA4, GTM, Microsoft Clarity)**
    - **Google Analytics GA4** (Measurement ID: `G-32PVYX6VRH`): async gtag.js script + config in `MainHead.astro`
    - **Google Tag Manager** (Container ID: `GTM-WGNTLP2R`): GTM script in `MainHead.astro` + noscript iframe fallback in `BaseLayout.astro` body
    - **Microsoft Clarity** (Project ID: `myl5bf3yc1`): Clarity tracking script in `MainHead.astro`
    - All three IDs carried over from the existing live WordPress site
    - All scripts use `is:inline` to prevent Astro from processing/bundling them

24. **Added "Get Updates" newsletter signup section to homepage**
    - Newsletter section placed between "Trusted By" and ContactCTA on homepage
    - Email input + Subscribe button with pill-shaped design
    - Integrated with **Kit (ConvertKit) V4 API** - two-step flow:
      1. `POST /v4/subscribers` to create subscriber
      2. `POST /v4/forms/9145889/subscribers` to add to form
    - API key: stored in Kit dashboard (V4, passed via `X-Kit-Api-Key` header)
    - Form numeric ID: `9145889`
    - Subscribers are stored in Kit dashboard (free up to 10,000 subscribers)
    - AJAX submission (no page reload)
    - Success/error status messaging with color-coded feedback
    - Gradient accent background with dark overlay, rounded card design (`border-radius: 1rem`)
    - Gradient text heading matching site design language
    - Responsive: stacked on mobile, inline on desktop

25. **Added blog post: "How I Moved My Website from WordPress to Astro and Saved ₹12,000/Year"**
    - File: `src/content/blog/wordpress-to-astro-netlify-migration.md`
    - Category: Marketing (purple OG accent)
    - ~2,800 words covering: why WordPress was dropped, the full tool stack, migration steps, before/after comparison, FAQs
    - Data-backed with citations: WordPress vulnerability stats, Core Web Vitals comparisons, bounce rate/conversion data
    - Tools table listing 12 free tools used in the migration
    - Performance comparison table (cost, Lighthouse, LCP, JS, CSS, SEO score)

26. **Added Table of Contents (TOC) sidebar to all blog posts**
    - Auto-generated from H2 and H3 headings using Astro's `render()` API (`{ Content, headings }`)
    - **Desktop (72em+):** Fixed sidebar on the left, inside `.wrapper` container
      - `position: fixed; top: 5rem` - stays perfectly still while scrolling
      - Left position calculated via JS based on wrapper's left edge (updates on resize)
      - Left-border indicator style: continuous `border-left: 2px solid var(--gray-800)` with active item highlighted in accent color
      - Scrollable TOC for long posts: `max-height: calc(100vh - 7rem); overflow-y: auto` with thin 3px scrollbar
      - Active TOC item auto-scrolls into view within the scrollable container
    - **Mobile:** Hidden (`display: none`) - sidebar layout doesn't work on small screens
    - **Scroll-spy:** JS tracks which heading is at the top of the viewport and highlights the corresponding TOC item with `.active` class (accent color + left border)
    - **Smart visibility:**
      - Starts hidden (CSS `opacity: 0`) - no flash on page load
      - Fades in when user scrolls past the content top (`contentRect.top < 80`)
      - Fades out when content bottom reaches `stickyTop + tocHeight` - never overlaps the CTA/footer section below
      - Smooth `opacity 0.3s ease` transition
    - Content stays perfectly centered (`max-width: 65ch; margin-inline: auto`) - TOC does not shift the content column
    - H3 items visually indented (`padding-left: 2rem`) with smaller font
    - Global CSS: `html { scroll-behavior: smooth }` + `scroll-margin-top: 5rem` on H2/H3 for anchor link offset
    - File modified: `src/pages/blog/[...slug].astro`
    - File modified: `src/styles/global.css` (smooth scroll)

### Phase 3: OG Fixes, Multi-Category, New Blog & Schema Markup (Session 5)

27. **Fixed broken OG images across all pages**
    - Root cause: OG image URLs were relative (`/og/home.png`) but social platforms need absolute URLs
    - Added `const absoluteImageUrl = new URL(image, Astro.site).href` in `MainHead.astro`
    - Used `absoluteImageUrl` in both `og:image` and `twitter:image` meta tags
    - Updated homepage default image to `/og/home.png`
    - SEO-optimized homepage meta description with "Swapnil Biswas" keyword

28. **Added `rehype-external-links` plugin for blog posts**
    - All external links in blog markdown now open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
    - Configured in `astro.config.mjs` under `markdown.rehypePlugins`

29. **Multi-category support for blog posts**
    - Changed `category` schema from `z.string()` to `z.array(z.string())` in `content.config.ts`
    - Updated blog template (`blog/[...slug].astro`) to render multiple category pills via `.map()`
    - Updated OG image generator to accept `categories: string[]` and render multiple pill badges
    - All 7 blog frontmatter files updated to array format (e.g., `category: [Marketing, AI]`)

30. **Improved OG image background selection**
    - Previously: all Marketing posts got the same stock image (mapped by category)
    - Now: title-based hash function cycles through all 4 stock images deterministically
    - Added `AI` and `Thought Leadership` category configs to OG generator:
      - AI: `#e05d22` (orange)
      - Thought Leadership: `#b45309` (amber)

31. **Added blog post: "The Marketer's AI Maturity Curve: Where Are You on It?"**
    - File: `src/content/blog/marketers-ai-maturity-curve.md`
    - Category: AI, Marketing, Thought Leadership
    - ~3,500 words covering: 5-stage AI maturity model, SPAR framework, data table, honest takes
    - Data citations from: McKinsey, Gartner, Jasper, MIT Sloan, HubSpot, Sopro, Loopex Digital, All About AI
    - Two hand-crafted SVG diagrams (dark theme, matching site palette):
      - `public/assets/blog/ai-maturity-curve/maturity-stages.svg` (900x420, staircase curve with glowing dots, "Most teams here" callout)
      - `public/assets/blog/ai-maturity-curve/spar-framework.svg` (900x340, 4 color-coded cards with connector arrows)
    - Note: Hero image (`/assets/blog/ai-maturity-curve.webp`) not yet created - needs webp file for blog card

32. **Added structured data (JSON-LD) schema markup across all pages**
    - **WebSite + Person** on homepage (`index.astro`): `@graph` with site entity and author identity (jobTitle, worksFor, alumniOf, sameAs, knowsAbout)
    - **BlogPosting** on each blog post (`blog/[...slug].astro`): headline, description, image, datePublished, author, publisher, keywords
    - **BreadcrumbList** via BaseLayout prop (`BaseLayout.astro`): Home > Section > Page. Used on blog listing, blog posts, about, contact
    - **ProfilePage + Person** on about page (`about.astro`): full professional profile with education, social links, skills
    - **FAQPage** on contact page (`contact.astro`): maps existing `faqs` array to Question/Answer schema for rich results
    - All schemas use `@id` references for entity deduplication (e.g., `https://swapbiswas.com/#person`)
    - Validate at: https://search.google.com/test/rich-results

---

## Key Design Decisions

- **Theming:** Light/dark mode via CSS custom properties + `.theme-dark` class on `<html>`. Theme preference stored in localStorage, with `prefers-color-scheme` fallback.
- **Fonts:** Rubik (brand, headings) + Public Sans (body). Loaded via Google Fonts CDN.
- **Colors:** Dark background `#090b11`, accent gradient `#ca7879 → #7611a6 → #1c0056` (gradient-accent-orange).
- **OG Images:** Build-time generated (not runtime). Stock gradient art backgrounds visible at top, smooth dark fade at bottom for text. Each category has a unique background image and accent color. Author's face photo used as avatar (cropped from portrait).
- **No JS frameworks:** All interactivity (tabs, animations, theme toggle) uses vanilla JavaScript with IntersectionObserver for scroll-triggered effects.
- **Static site:** Fully static output, no SSR. All pages pre-rendered at build time.

---

## Things to Note for Future Work

- **Analytics:** GA4 (`G-32PVYX6VRH`), GTM (`GTM-WGNTLP2R`), and Clarity (`myl5bf3yc1`) are all live in `MainHead.astro`. GTM noscript fallback is in `BaseLayout.astro`.
- **Stock images:** `stock-1.jpg` through `stock-4.jpg` are template defaults used as OG image backgrounds. They could be replaced with custom gradient art. Category-to-image mapping is in the `categoryConfig` object in `og/[...slug].png.ts`.
- **Portrait/Avatar:** `portrait-new.jpg` is the main portrait. `avatar-crop.jpg` is a 200x200 face crop used in OG images. If the portrait changes, re-crop the avatar using sharp (see build script pattern in the OG generator).
- **Favicon:** SVG favicon (`favicon.svg`) supports light/dark mode via `prefers-color-scheme`. ICO and PNG versions are static.
- **Blog images:** Original blog images (in `public/assets/blog/`) are still present but no longer used as thumbnails or hero images - the generated OG images replaced them. The inline images within blog post markdown content still reference these files.
- **Contact form:** Uses FormSubmit.co free tier (endpoint: `swapbiswas.marketing@gmail.com`). The endpoint email should be verified.
- **Newsletter signup:** Uses Kit (ConvertKit) V4 API. Form numeric ID `9145889`. Two-step flow: create subscriber → add to form. Subscribers managed at [app.kit.com](https://app.kit.com).
- **Future enhancements (user-identified):** Testimonials section, Download CV button - both deferred for later.
- **Resume data:** All resume content (skills, experience, education, certifications, awards) is hardcoded in `ResumeSection.astro` frontmatter. Update there for changes.
- **Brand logos:** Stored in `public/assets/brands/`. Add/remove brands by editing the `index.astro` trusted-by section.
- **Build:** `npx astro build` generates the full static site in `dist/`. OG images take a few seconds each due to font fetching + image encoding.
- **Dev server note:** OG images may appear cached in browser during development. Use `Ctrl+Shift+R` (hard refresh) or open the image URL directly to verify changes.

---

## How to Run

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

*Last updated: March 6, 2026 (Session 5 - item 32)*
