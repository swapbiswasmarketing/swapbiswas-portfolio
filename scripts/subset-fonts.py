#!/usr/bin/env python3
"""Regenerate the self-hosted woff2 subsets in public/assets/fonts/.

Run by hand from the repo root, never from `npm run build`: the outputs are
committed, so the Vercel build needs no Python.

    pip install "fonttools[woff]" brotli
    python scripts/subset-fonts.py            # write the subset files
    python scripts/subset-fonts.py --metrics  # re-derive the fallback numbers

Measured on 2026-09-04 with fontTools 4.63.0 / Brotli 1.2.0:

    bricolage-grotesque   76,868 ->  60,512 B   -21.3%
    inter                 73,016 ->  35,000 B   -52.1%
    jetbrains-mono        31,340 ->  11,392 B   -63.7%
    inter-italic          37,544 ->  24,432 B   -34.9%

The three files PageSpeed puts on the critical path drop 181,224 -> 106,904 B,
so 72.6 KiB / 41.0% comes off a fan-out that totals about 190 KiB and is 94%
font bytes. Do not expect the reported 748ms max critical-path latency to move
much: that number is set by the BaseLayout JS chunk, not by a font, and with
font-display: swap none of these files blocks paint. The win is 41% off an
asset every cold visit downloads, on mobile as well as desktop.

ORDER MATTERS: subset first, THEN clip the axis. Doing it the other way round
crashes. instantiateVariableFont drops gvar entries whose deltas go empty when
the axis is clipped (Inter loses 6, JetBrains 8, including '.notdef'), and the
subsetter's gvar handler indexes variations by every retained glyph and raises
KeyError: '.notdef'. Subsetting first never produces that gap, needs no
round-trip through a buffer, and comes out fractionally smaller.

Three independent reductions:

1. Codepoints. Google's latin subset carries about 230 and we keep 187. Every
   Latin-1 letter stays whether or not it is used today, so a post that spells
   Zoe, cafe or Muller properly does not need a re-subset first. This is the
   SMALLEST of the three savings on the text faces: a variable font keeps its
   outlines in gvar, which does not shrink in proportion to glyph count the way
   a static font's glyf does.

   Every codepoint listed below is inside the unicode-range the @font-face
   rules declare. That is not optional. unicode-range gates which characters a
   face is allowed to serve, so a glyph kept outside it is dead weight the
   browser can never reach. U+2192, U+2260, U+2713 and friends already render
   in a system font today for exactly that reason; putting them in the file
   would not change what the reader sees.

2. Variable axis range. Every file ships more wght range than its @font-face
   declares, and a browser clamps a requested weight into the declared range,
   so the extra gvar deltas can never be rendered by this site. Inter is the
   whole story: it carries wght 100-900 against a declared `400 600` and its
   gvar is 78,384 bytes decompressed, so clipping it is worth about 17 KB
   alone. opsz is left at full range on both faces that have one - global.css
   sets font-optical-sizing: auto and the h1 depends on it.

3. Layout features. tnum and pnum are NOT in pyftsubset's default keep-list,
   and about.astro plus eight /tools pages set font-variant-numeric:
   tabular-nums, so they are named explicitly below; running the subsetter with
   its defaults would silently break tabular figures. frac/numr/dnom go,
   nothing asks for fractions. calt is dropped from JetBrains Mono ONLY: it is
   that font's sole ligature feature, it costs 14,116 bytes (11,392 with it
   gone against 25,440 with it kept), and every fenced block in the corpus is
   text, markdown or json - AI prompts meant to be copied verbatim, where
   ligating -- into one connected glyph hides the real character count.

Verified after generation: unitsPerEm, hhea ascender/descender/lineGap, OS/2
sxHeight and sCapHeight are unchanged on all four; opsz keeps its original
range; advance widths are byte-identical at Inter 400 (the body text) and at
every JetBrains Mono weight. Clipping an axis re-rounds intermediate deltas, so
Inter 450-550 and Bricolage 400-700 move by at most one font unit: 0.008px at
16px, 0.08px at 80px. All four outputs reparse as valid woff2.
"""

import sys
from pathlib import Path

from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
# Google's untouched latin woff2 files. They live under src/ rather than public/ so
# they are never served: only the subsets in FONT_DIR reach a browser. Keeping them in
# the repo is what makes this script re-runnable - a future subset revision reduces the
# originals again rather than compounding losses on an already-subsetted file.
SRC_DIR = ROOT / "src" / "assets" / "fonts-original"
FONT_DIR = ROOT / "public" / "assets" / "fonts"

# Listed as codepoints rather than harvested from a text sample, so the set
# cannot silently shrink when the corpus changes under it. Everything here is
# inside the unicode-range declared in global.css; see note 1 in the docstring.
KEEP = (
    list(range(0x0020, 0x007F))            # printable ASCII
    + [0x00A0]                             # no-break space
    + list(range(0x00C0, 0x0100))          # Latin-1 letters, incl. multiply and divide
    + [0x00AA, 0x00BA]                     # ordinal indicators
    + [0x00A3, 0x00A9, 0x00AE, 0x00B0, 0x00B7]
    + [0x0131, 0x0152, 0x0153]             # dotless i, OE, oe
    + [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x2026, 0x2022, 0x2032, 0x2033]
    + [0x2039, 0x203A]                     # terminal.astro renders U+203A as a ::before
    + [0x2191, 0x2193, 0x2212, 0x2215]
    + [0x20AC, 0x2122]
)

# mark/mkmk position the accents ccmp composes; locl covers the
# language-specific forms Google's subset ships; calt is Inter's contextual
# spacing; tnum/pnum are the numeric variants the CSS actually asks for.
TEXT_FEATURES = ["kern", "mark", "mkmk", "ccmp", "calt", "locl", "tnum", "pnum"]
# Same list minus calt, which in JetBrains Mono is only programming ligatures.
MONO_FEATURES = ["kern", "mark", "mkmk", "ccmp", "locl", "tnum", "pnum"]

# (source stem, output stem, wght range to keep or None, features)
JOBS = [
    ("bricolage-grotesque-latin-v9", "bricolage-grotesque-latin-v9s1", (400, 800), TEXT_FEATURES),
    ("inter-latin-v20", "inter-latin-v20s1", (400, 600), TEXT_FEATURES),
    ("inter-italic-latin-v20", "inter-italic-latin-v20s1", None, TEXT_FEATURES),
    ("jetbrains-mono-latin-v24", "jetbrains-mono-latin-v24s1", (400, 500), MONO_FEATURES),
]


def build(src_stem, out_stem, wght, features):
    src = SRC_DIR / f"{src_stem}.woff2"
    out = FONT_DIR / f"{out_stem}.woff2"
    before = src.stat().st_size

    font = TTFont(src)

    opts = Options()
    opts.layout_features = features
    opts.hinting = False
    opts.desubroutinize = True
    opts.name_IDs = ["*"]      # keep the family/style names the OFL notice needs
    opts.name_legacy = True
    opts.notdef_outline = True

    sub = Subsetter(options=opts)
    sub.populate(unicodes=sorted(set(KEEP)))
    sub.subset(font)

    if wght is not None:
        # Range limit, not a pin: the axis survives, only deltas outside the
        # declared @font-face range are discarded. Must run AFTER the subset;
        # see the ORDER MATTERS note at the top of this file.
        instantiateVariableFont(font, {"wght": wght}, inplace=True, updateFontNames=False)

    font.flavor = "woff2"
    font.save(out)
    after = out.stat().st_size
    pct = 100 * (before - after) / before
    print(f"  {src_stem:<32} {before:>7,} -> {after:>7,} B  ({pct:.1f}% smaller)")
    return before, after


def metrics():
    """Print the size-adjust / ascent-override numbers used in global.css.

    size-adjust is a ratio of average advance width weighted by how often each
    character actually appears in this site's rendered blog text, not by a
    generic English frequency table. Run `npm run build` first - it reads dist/.
    Windows only: it reads Arial from the system font directory. The numbers
    shift by about a percentage point depending on whether you sample rendered
    HTML or raw markdown, so always regenerate rather than reusing a figure
    from a commit message.
    """
    import collections
    import glob
    import re

    freq = collections.Counter()
    for path in glob.glob("dist/blog/*/index.html"):
        html = open(path, encoding="utf-8", errors="replace").read()
        html = re.sub(r"<script.*?</script>|<style.*?</style>", " ", html, flags=re.S)
        freq.update(re.sub(r"<[^>]+>", " ", html))
    freq = {c: n for c, n in freq.items() if ord(c) >= 0x20}
    if not freq:
        print("no dist/blog/*/index.html found - run `npm run build` first")
        return
    print(f"sampled {sum(freq.values()):,} characters of rendered blog text")

    def avg_advance(font):
        upem = font["head"].unitsPerEm
        cmap, hmtx = font.getBestCmap(), font["hmtx"]
        num = den = 0
        for char, n in freq.items():
            if ord(char) in cmap:
                num += hmtx[cmap[ord(char)]][0] * n
                den += n
        return num / den / upem

    arial = avg_advance(TTFont(r"C:\Windows\Fonts\arial.ttf"))
    print(f"Arial average advance: {arial:.5f} em")
    # Only Inter gets a fallback face. Bricolage cannot have one: every element
    # that uses --font-display also sets font-synthesis: none at weight 600, so
    # a single-weight local('Arial') face would render those headings in Arial
    # Regular instead of the Segoe UI Semibold they fall back to today.
    for label, stem, loc in [
        ("Inter", "inter-latin-v20", {"wght": 400, "opsz": 16}),
    ]:
        f = instantiateVariableFont(TTFont(SRC_DIR / f"{stem}.woff2"), loc)
        upem = f["head"].unitsPerEm
        asc, desc = f["hhea"].ascender / upem, abs(f["hhea"].descender) / upem
        adj = avg_advance(f) / arial
        print(
            f"{label}: size-adjust:{adj * 100:.1f}%; ascent-override:{asc / adj * 100:.1f}%; "
            f"descent-override:{desc / adj * 100:.1f}%; line-gap-override:0%"
        )


if __name__ == "__main__":
    if "--metrics" in sys.argv:
        metrics()
    else:
        total_before = total_after = 0
        for job in JOBS:
            b, a = build(*job)
            total_before += b
            total_after += a
        saved = total_before - total_after
        print(
            f"\n  all four: {total_before:,} -> {total_after:,} B "
            f"({saved:,} B / {saved / 1024:.1f} KiB saved)"
        )
