# Social profile banners

X (1500x500) and LinkedIn (1584x396) banners in the Paper & Signal system (DESIGN.md). Built 2026-09-25.

## Upload files

| Set | X / Twitter | LinkedIn |
|---|---|---|
| `primary/` (light, the one to use) | `x-banner.png` | `li-banner.png` |
| `dark/` (warm-charcoal alternate) | `x-banner.png` | `li-banner.png` |

Each has a `.jpg` twin (q92, 4:4:4) if a platform re-compresses PNGs badly. Both platforms accept PNG and JPG; neither accepts WebP.

Copy on both: "A marketer who builds." / "I love AI enough to ship my own tools and automations." / Stack: Claude, Replit, Lovable, Gemini, + more. Dateline: swapbiswas.com, 18M+ organic visits, 20+ AI agents & apps (dark set: "20+ agents & apps · 18M+ visits", shortened to fit beside the URL lockup). Do not use "the signal" wording (Swapnil's call).

## Files

- `render.cjs` - the harness. `node design/social-banners/render.cjs <file.html> x|li` serves the repo root on 127.0.0.1, renders at 2x in Playwright Chromium (`--disable-lcd-text`, so no ClearType fringes), downsamples with Lanczos, and writes the upload `.png`/`.jpg`, an `@2x.png` master, `-overlay.png` (profile-photo circles and crop zones), and `-desktop.png` / `-mobile.png` mocks with the real avatar.
- `brand.css` - tokens and `@font-face` for the site's own subset fonts in `public/assets/fonts/`.
- `fonts/inter-cv08-latin.woff2` - banner-only Inter cut with the serifed capital I, used for the deck so "I love AI" cannot read as "l love Al" on phones.
- `prep-art.cjs` - grades the full-resolution raws in `tmp/art-raw/` (2752px) into `art/*.jpg`. The site copies stop at 2000px, which is too small for a 2x banner.
- `prep-dusk-art.cjs` - banner-only clean-up of the dusk painting (crack and speck softening) into `art/hero-landscape-dusk-banner.jpg`, used by `dark/`.

## Safe zones the harness draws

- X: photo covers about x 40-436, y 275-500 (desktop and phone); about 60px top and bottom can crop.
- LinkedIn: desktop photo about x 47-362, y 175-396; the phone app shows only about x 228-1356 and its photo covers about x 274-552, y 200-396. The phone geometry is approximate, so check a real phone after uploading.

## Editing

Change the HTML, re-run the harness for both platforms, and read the `-overlay` and `-mobile` images before uploading. `dark/` fits its tool row with a small script (padding 0.6em, edge to edge); `primary/` uses fixed values set by hand.
