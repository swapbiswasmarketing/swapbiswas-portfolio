# swapbiswas.com Design System - "Paper & Signal"

Single source of truth for the 2026 visual revamp. Every page, component, tool, OG image, and blog diagram follows this. If a rule here conflicts with older docs (BLOG_INSTRUCTIONS.md diagram palette, TOOL_INSTRUCTIONS.md), this file wins.

## 1. Concept

Warm paper, ink, and one vermilion signal. The site reads like a well-set editorial sheet: bone-white ground, near-black ink type, hairline rules, white panels, and a single warm accent used sparingly for eyebrows, links, the homepage strand, and small marks. Premium comes from restraint, big tight display type, and generous space - never from gradients, glass, glows, or drop shadows.

References that shaped it: testmuai-redesign.vercel.app (bone paper, hairline rules, ink buttons), elevenlabs.io (near-monochrome, light-weight display, pill CTAs), fin.ai / intercom.com (warm white, numbered sections, one orange accent, grotesk + serif), saaspo.com 2025-26 gallery trends (warm off-white grounds, warm near-black ink, mono eyebrows, hairlines over shadows, warm-black dark modes).

What it is NOT: purple anything, gradient buttons, gradient text, glassmorphism panels, blurred aura blobs, 999px pills on controls, white "halo" shadows in dark mode, Space Grotesk + Public Sans.

## 2. Color tokens (src/styles/global.css)

Light is the `:root` default; dark lives under `:root.theme-dark`. Keep the existing token names so the whole site retheme is token-driven.

### Light

| Token | Value | Role |
|---|---|---|
| `--gray-999` | `#F6F4EF` | page ground (paper) |
| `--sg-panel` / `--surface-panel` | `#FFFFFF` | cards, inputs, raised panels |
| `--gray-900` | `#EEEBE4` | cream: tinted bands, active nav chip, code block bg, skill track |
| `--gray-800` / `--sg-hair` | `#E4DFD6` | hairline borders and rules |
| `--gray-700` | `#CEC8BE` | strong hairline (hover border) |
| `--gray-600` | `#ACA69C` | disabled text, placeholder, decorative numerals |
| `--gray-500` | `#8A847B` | decorative only (fails AA as body text) |
| `--gray-400` / `--sg-muted` | `#6A645C` | muted text, meta, captions (4.9:1 on cream, 5.3:1 on paper) |
| `--gray-300` | `#55504A` | nav links, footer text |
| `--gray-200` / `--sg-lede` | `#3A3632` | body text (10.9:1) |
| `--gray-100` | `#262320` | headings |
| `--gray-0` / `--sg-text` | `#15130F` | ink: h1, strongest text, primary button fill |
| `--accent-regular` | `#B53B15` | the signal: eyebrows, links, active states, accent fills (paper text on it = 5.3:1) |
| `--accent-text` / `--link-color` | `#B53B15` | accent used AS TEXT (dark-safe alias, see dark) |
| `--accent-dark` | `#8F2E0F` | accent hover / pressed |
| `--accent-light` | `#F3DCD2` | accent TINT for backgrounds only - never as text |
| `--accent-overlay` | `hsla(14, 78%, 40%, 0.12)` | selection / hover wash |
| `--accent-subtle-overlay` | `hsla(14, 78%, 40%, 0.07)` | very light wash |
| `--accent-text-over` | `#F6F4EF` | text on accent or ink fills |
| `--sg-ok` | `#2A7347` | status green (availability dot, success) |
| `--sg-warm` | `#8F2E0F` | deep accent for stat suffixes and small marks |

### Dark (warm charcoal, not navy)

| Token | Value |
|---|---|
| `--gray-999` | `#151311` |
| `--sg-panel` / `--surface-panel` | `#1D1A17` |
| `--gray-900` | `#262220` |
| `--gray-800` / `--sg-hair` | `#2E2A26` |
| `--gray-700` | `#3B3631` |
| `--gray-600` | `#57514A` |
| `--gray-500` | `#7A7268` |
| `--gray-400` / `--sg-muted` | `#998F82` |
| `--gray-300` | `#B0A89C` |
| `--gray-200` / `--sg-lede` | `#CFC8BD` |
| `--gray-100` | `#DED8CE` |
| `--gray-0` / `--sg-text` | `#F4F0E8` |
| `--accent-regular` | `#E85C33` (fill; ink text on it = 5.3:1) |
| `--accent-text` / `--link-color` | `#FF7A50` (7.2:1 on ground) |
| `--accent-dark` | `#FF9470` (hover, brighter - repo convention: dark's "accent-dark" is the light one) |
| `--accent-light` | `#4A1D0F` (deep tint for backgrounds only) |
| `--accent-text-over` | `#151311` |
| `--sg-ok` | `#5FCB86` |
| `--sg-warm` | `#FF9470` |

Rules:
- `color: var(--accent-regular)` is only valid in LIGHT. Anywhere accent is text (links, eyebrows, TOC active, icons, hover text) use `var(--accent-text)` so dark mode stays AA.
- `--accent-light` is a tint. Its three old text consumers (BlogPreview tag hover, blog.astro topic hover, Pill focus ring) move to `--accent-text` / `--accent-dark`.
- Gradients: `--gradient-accent`, `--gradient-accent-orange`, `--gradient-subtle`, `--gradient-stroke` still exist for backward compatibility but resolve to FLAT fills (ink button, panel, hairline). Do not add new gradient usage. Gradient text (`background-clip: text`) is banned.
- Shadows: `--shadow-sm` is a 1px ink ring, `--shadow-md`/`--shadow-lg` are reserved for FLOATING surfaces only (nav dropdown, newsletter popup, lightbox, mega-menu). Cards and buttons at rest have no shadow.
- Off-system Tailwind colors (`#22c55e`, `#f97316`, `#34d399`, `#f87171`, `#2563eb`...) are gone. Success = `--sg-ok`; error = `--accent-text` text on `--accent-subtle-overlay` with a 2px `--accent-regular` left rule (never a filled red banner).

## 3. Typography

| Token | Family | Use |
|---|---|---|
| `--font-display` (alias `--font-brand`) | Bricolage Grotesque (opsz 12..96, wght 400..800) | h1-h3, stat numerals, wordmark, hero, section titles |
| `--font-body` | Inter (opsz 14..32, wght 400..600, italic 400) | everything else: body, nav, buttons, inputs, card titles h4+ |
| `--font-mono` | JetBrains Mono 400/500 | eyebrows, dates, reading time, category labels, index numbers `[ 01 ]`, HUD, code |

Google Fonts URL (MainHead.astro, keep the preload/onload pattern + noscript):
`https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:ital,opsz,wght@0,14..32,400..600;1,14..32,400&family=JetBrains+Mono:wght@400;500&display=swap`

OG images (Satori) use the static TTFs in `src/assets/fonts/`: `bricolage-600.ttf`, `bricolage-700.ttf`, `inter-400.ttf`, `inter-500.ttf`, `inter-600.ttf`, `jbmono-500.ttf`.

Scale and weights:
- h1: display 600, `clamp(2.75rem, 6.5vw, 5rem)`, line-height 1.0, letter-spacing -0.03em. Homepage `.signal-h1` may go to `clamp(3.5rem, 9vw, 7rem)` at 600 (never 700+; never faux-bold).
- h2: display 600, `clamp(2rem, 4vw, 3rem)`, line-height 1.05, letter-spacing -0.02em.
- h3: display 600, 1.5-1.75rem, line-height 1.15, letter-spacing -0.01em.
- h4/h5 and card titles: body (Inter) 600, 1.125-1.25rem, line-height 1.3, letter-spacing -0.01em.
- Two-tone heading trick allowed: first line `--gray-400`, second line ink.
- Body: Inter 400, 1rem/1.6 site-wide; blog `.content` 1.0625rem (17px) / 1.65, max-width 66ch; lede 1.25rem `--gray-200`.
- UI (nav, buttons, chips, form): Inter 500, 0.9375rem (15px).
- Eyebrow (`.section-eyebrow`): mono 500, 0.72rem, uppercase, letter-spacing 0.12em, `--accent-text`.
- Meta (dates, reading time): mono 400, 0.8125rem, `--gray-400`.
- `font-synthesis: none` on all headings. Never request a weight the font is not loaded at.

## 4. Shape, surfaces, motion

Radius scale (tokens in global.css): `--radius-xs: 4px` (tags, inline code, chips), `--radius-sm: 8px` (buttons, inputs, nav chip, filter controls), `--radius-md: 12px` (cards, TOC box, images in content, tool cards), `--radius-lg: 16px` (portrait, hero media, newsletter panel). `999px` survives ONLY on the availability status badge, the theme-toggle track, and category dots.

Surfaces: page = paper. Any card/panel = `--sg-panel` fill + `1px solid var(--sg-hair)` border, no shadow at rest. Hover: border to `--gray-700`, `transform: translateY(-2px)`, 200ms `cubic-bezier(.22,1,.36,1)`. Tinted bands use `--gray-900` cream with hairline top/bottom rules. Section dividers are 1px `--sg-hair` rules. No frosted glass except the sticky nav (`backdrop-filter: blur(12px)` over 88% paper).

Buttons:
- Primary: ink fill (`--gray-0`), `--accent-text-over` text, radius `--radius-sm`, padding 0.7rem 1.25rem, Inter 500 15px. Hover: `--gray-100` fill, translateY(-1px). Dark mode: paper fill (`--gray-0` is paper there) with ink text - it inverts automatically.
- Secondary: panel fill, 1px `--gray-700` border, ink text. Hover: border `--gray-0`.
- Optional accent arrow: an arrow glyph inside the primary button may sit in a 28px `--accent-regular` square (radius 6px). Use once per page at most (hero CTA).
- No gradient, no mix-blend hover overlay, no shadow.

Links in running text: `--link-color`, underline 1px, `text-underline-offset: 0.15em`, `text-decoration-color: color-mix(in srgb, currentColor 55%, transparent)`; hover: `--accent-dark` + full-strength 2px underline. Underline must be visible at rest (accent vs body text is only 2:1, so color alone is not a cue).

Inputs: panel fill, 1px `--gray-700` border, radius `--radius-sm`, ink text, placeholder `--gray-600`. Focus: border `--accent-regular` + `box-shadow: 0 0 0 3px var(--accent-overlay)`.

Chips/tags: cream fill, 1px hair border, `--gray-300` text, radius `--radius-xs`, mono 0.72rem. Active filter chip: ink fill + paper text.

Nav: paper bar, 1px hair bottom rule, wordmark in display 600 with a small ink logo square (no rocket gradient icon), links Inter 500 15px `--gray-300`, hover ink, current = ink text on a cream chip (radius `--radius-sm`). No glass pill, no gradient ring, no shadow. Mobile dropdown: panel fill, hair border, `--shadow-lg` (floating = allowed).

Images: `--radius-md` on content images and cards; portrait `--radius-lg`, no grayscale filter, no soft-light overlay, no glow shadow.

Stats: numerals in display 600, ink, with the suffix (K, M, x, +) in `--accent-text`; label mono `--gray-400`. No gradient text, no glow.

Skill bars: flat `--accent-regular` fill on a cream track, 4px tall, radius 2px. Timeline dots: 8px ink dot with a 1px paper ring; timeline line is a hairline.

Icons: `currentColor` only. Remove the Icon `gradient` prop usage (Nav wordmark, Skills, About).

Motion: keep existing reveal-on-scroll, count-ups, marquees, Signal choreography, all under `prefers-reduced-motion`. Card hover = lift 2px + border; button hover = lift 1px. No image zoom-on-hover in blog cards. Durations 180-260ms, easing `cubic-bezier(.22,1,.36,1)`.

## 5. Homepage Signal effects (src/pages/index.astro)

The strand stays as the signature but becomes a drawn ink line with a vermilion head, not a purple beam.

Light (index.astro `is:global` block + SVG fallback attrs on `#sg0-#sg3`, `#sp-*`):
- strand gradient: `#sg0 #B53B15` (0%) -> `#sg1 #6A3A2A` (45%) -> `#sg2 #15130F` (75%) -> `#sg3 #B53B15` (100%)
- `--sg-strand-opacity: 0.9; --sg-strand-w: 2.2; --sg-pkt-w: 3.2`
- packets / flare / dot: `#B53B15`; filament `rgba(181,59,21,0.4)`; ring `rgba(21,19,15,0.55)`; dot shadow `rgba(181,59,21,0.3)`
- `--sg-aura-op: 0.07` (auras tinted `#F3DCD2` and `#EEEBE4`, no purple); `--sg-constellation-op: 0.22` with node/link color `21,19,15`
- `--sg-bgword-stroke: rgba(21,19,15,0.07)`; `--sg-bloom: #B53B15`

Dark:
- strand gradient: `#FF7A50` -> `#B08A70` -> `#F4F0E8` -> `#FF7A50`
- `--sg-strand-opacity: 0.8; --sg-strand-w: 2.0; --sg-pkt-w: 3.0`
- packets / flare / dot: `#FF9470`; filament `rgba(255,148,112,0.45)`; ring `rgba(244,240,232,0.55)`; dot shadow `rgba(255,122,80,0.45)`
- `--sg-aura-op: 0.14` (auras `#4A1D0F` and `#262220`); constellation node `244,240,232`, link `153,143,130`
- `--sg-bgword-stroke: rgba(244,240,232,0.05)`; `--sg-bloom: #FF9470`

Every hard-coded `rgba(197, 97, 246, *)`, `rgba(118, 17, 166, *)`, `#ffe3c2`, `#ca7879`, `rgba(46,198,168,*)` in index.astro is replaced with the token equivalents above. Loader, cursor, HUD, marquee, magnetic buttons keep their ids/classes and JS untouched.

## 6. OG images (src/pages/og/*.webp.ts)

Paper background `#F6F4EF`, ink title in Bricolage 600 (tight tracking), Inter 400 description in `--gray-300`, mono category chip (accent text on cream), a 6px vermilion rule, avatar + name in the footer row. Category colors are all derived from the single accent (no Tailwind blues/teals). Fonts: the TTFs listed in section 3.

## 7. Artwork layer - "Renaissance x nature" (AI-generated paintings)

The imagery is the personality of the site: oil-painting studies in the manner of High Renaissance masters (warm umber, bone, olive, sfumato light, craquelure) with exactly one vermilion note in each - which ties every painting to the site accent. Nature and studio subjects only (landscapes, gardens, scholar's desks, instruments, doves, ruins), no people.

Pipeline (all in `scripts/`):
- `art-slots.json` - the slot list: id, file, aspect, prompt, and for blog covers the category + alt text. The shared `style` and `negative` strings are appended to every prompt. Edit prompts here.
- `generate-art.cjs` - calls Gemini's image model (`gemini-3-pro-image`, 2K) for each slot and writes raw files to `tmp/art-raw/<id>.jpg`. Needs `GEMINI_API_KEY` in the environment; never write the key to a file. Re-runs skip existing raws; `FORCE=1 node scripts/generate-art.cjs <id>` re-rolls one slot.
- `grade-art.cjs` - grades raws to the palette (saturation 0.82, blacks lifted toward umber, fine grain) and exports: blog covers to `src/assets/stock-N.webp` + `public/assets/stock-N.webp` (1472x871) + `-400w`; section art to `public/assets/art/<name>.webp` (max 2000px / 1600px tall) + `<name>-800.webp`.
- `assign-blog-covers.cjs` - maps every post to a cover by category (`category_map` in art-slots.json), balancing usage, and rewrites `img` + `img_alt` in the frontmatter. Run it after adding posts or covers.

Slots: `hero-landscape` (home, light) / `hero-landscape-dusk` (home, dark), `about-garden` (3:4), `contact-window`, `tools-workshop`, `newsletter-dove`, `notfound-ruins`, and covers `stock-1..8` (Marketing, Product Marketing, SEO, AI, Tools, Career, Email, Thought Leadership).

Placement rules: paintings sit in a panel frame (object-fit cover, `--radius-md`, 1px `--sg-hair`, no shadow, no filter) beside text, never under text without a paper scrim. The homepage hero is the one full-bleed use: the landscape behind the right column, feathered into paper with CSS masks (the sitter-before-a-landscape Renaissance portrait convention), swapped to the dusk painting in dark mode. Use srcset (800w / 2000w), width/height attributes, lazy loading below the fold. OG images reuse the post's cover as the right-hand panel.

## 8. Diagrams for blog posts (replaces the old dark diagram system)

Background `#F6F4EF`, cards `#FFFFFF` with `#E4DFD6` 1px border, radius 12; title ink `#15130F` Bricolage 600 38px, headings 26px 600, body `#3A3632` Inter 20px; accent `#B53B15` for one emphasized element per diagram, `#2A7347` for "good", `#6A645C` for muted. ViewBox 1400 wide, export WebP at 1200px.

## 9. Hard constraints (do not break)

- `html, body { overflow-x: clip }` stays `clip` (sticky TOC depends on it).
- All page JS inits on `astro:page-load` with idempotent guards; never `DOMContentLoaded`.
- Theme = `theme-dark` class on `<html>`, localStorage key `theme`, blocking inline script in MainHead; light is the `:root` default.
- Keep every Signal id/class the GSAP/Lenis script queries; keep `astro:before-swap` teardown.
- Keep print styles, Pagefind search markup/classes, analytics selectors (`.cta`, `.share-btn`, form ids), skip-link, focus-visible ring, `sr-only`, forced-colors fallbacks, reduced-motion guards.
- JS-created elements (lightbox, copy button, heading anchors, page numbers) are styled with `:global()` - keep that.
- No em-dashes in code, comments, or copy.
