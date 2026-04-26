# Tool Creation Instructions

Reference guide for building free interactive tools on swapbiswas.com (e.g., the Sales Battlecard Generator at `/tools/battlecard-generator/`). Follow these steps every time.

## 1. Validate the Idea First (Ahrefs MCP)

Before building anything, confirm SEO opportunity exists. Tools take more effort than blogs - don't build for keywords that don't search.

Use the Ahrefs MCP `keywords-explorer-overview` tool with:
- Tool-name keywords ("X generator", "free X tool", "X calculator")
- Adjacent informational keywords ("X template", "X examples")
- Country: `us` (primary market)

**Greenlight criteria:**
- KD ≤ 10 on the head transactional term ("X template" / "X generator")
- Combined search volume ≥ 200/mo across the cluster
- Traffic Potential ≥ 1,000 (means the #1 page captures meaningful long-tail)
- CPC ≥ $1.50 (signals B2B commercial intent)
- KD `null` on "generator" / "tool" variants is a positive signal (uncontested)

**Red flag:** Low TP (< 200) means you can rank #1 and still get no traffic - skip.

## 2. File Setup

- **Tool page:** `src/pages/tools/{slug}.astro`
- **Slug:** Use the target keyword, hyphenated (e.g., `battlecard-generator`, `positioning-canvas-generator`)
- **Index page:** Update `src/pages/tools/index.astro` to add the tool card
- **Tool URL pattern:** `https://swapbiswas.com/tools/{slug}/`

## 3. Page Structure

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Hero from '../../components/Hero.astro';
import ContactCTA from '../../components/ContactCTA.astro';

const title = "Free {Tool Name} | {Benefit-driven subtitle}";
const description = "150-160 char meta description with target keyword naturally included.";

const faqs = [ /* see FAQ section */ ];
const softwareSchema = { /* see Schema section */ };
const faqSchema = { /* see Schema section */ };
---

<BaseLayout
  title={title}
  description={description}
  breadcrumbs={[{ name: "Tools", url: "/tools/" }, { name: "Tool Name" }]}
>
  <script type="application/ld+json" set:html={JSON.stringify(softwareSchema)} slot="head" />
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} slot="head" />

  <div class="stack gap-20">
    <main class="wrapper tool-page">
      <Hero title="..." tagline="..." align="start" />

      <div class="tool-grid">
        <section class="form-panel">...</section>
        <section class="preview-panel">
          <div class="preview-sticky">
            <div class="preview-controls">...</div>
            <div class="preview-frame" id="preview-frame">
              <div id="rendered-output">...</div>
            </div>
          </div>
        </section>
      </div>

      <section class="tool-cta-strip">{/* newsletter */}</section>
      <section class="seo-content">{/* H2s, How-to, FAQ */}</section>
    </main>

    <ContactCTA />
  </div>
</BaseLayout>
```

**Critical structural rules:**
- Always end with `<ContactCTA />` *after* `</main>` but *inside* the `stack gap-20` wrapper - this creates the visual gap before the footer (matches contact/about pages)
- Breadcrumb second-to-last item gets `url: "/tools/"`, last item is plain text (no URL)
- Tool page wrapper class is `tool-page` (consistent across tools for shared CSS hooks)

## 4. Sticky Preview - The Critical Fix

Tool pages have a form on the left and a live preview on the right. The preview MUST stay visible as the user scrolls the form. **This is broken by default** because of a global CSS rule.

### Required global change (one-time)

In `src/styles/global.css`:
```css
html, body {
    min-height: 100%;
    overflow-x: clip;  /* NOT overflow-x: hidden */
}
```

**Why:** `overflow-x: hidden` causes browsers to compute `overflow-y` as `auto`, making `body` itself a scrolling container. Sticky elements inside then stick within `body` (which has document height), so they never engage as the viewport scrolls. `overflow-x: clip` clips horizontally without creating a scroll container, so sticky works.

This is already fixed in the codebase. Don't undo it.

### Per-tool sticky CSS pattern

```css
@media (min-width: 64em) {
    .tool-grid {
        grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
        align-items: start;  /* required */
    }
    .preview-panel {
        position: sticky;
        top: 1.5rem;
        align-self: start;  /* required */
    }
}

.preview-panel {
    min-width: 0;  /* stops grid blowout */
}
```

**Rules:**
- `align-items: start` on the grid + `align-self: start` on the sticky panel - both are required
- Don't put `display: flex` on `.preview-panel` (interferes with sticky in Chrome)
- `minmax(0, Nfr)` on grid columns - prevents wide content from blowing out the column
- The `.preview-sticky` inner wrapper is for layout (flex column with gap), NOT for sticky positioning

## 5. Live Preview Pattern (data-bind)

Bind form inputs to preview elements via `data-bind="<input-id>"`:

```html
<input type="text" id="your-product" />

<!-- in preview -->
<span data-bind="your-product">Your Product</span>
```

JS wires up `input` event on the form to update all bound spans:
```js
const bindings = card.querySelectorAll('[data-bind]');
form.addEventListener('input', () => {
    bindings.forEach((el) => {
        const id = el.getAttribute('data-bind');
        const val = document.getElementById(id)?.value?.trim() || '';
        // restore placeholder if empty (cache original textContent in data-placeholder)
    });
});
```

**Use a `MutationObserver` on the rendered card** to re-trigger any layout-dependent code (like the scaling calculation below) when content changes.

## 6. Responsive Scaling for Fixed-Width Output

The rendered output is designed at a fixed width (typically 1000px) for consistent PNG export. To fit it visually in a smaller column:

```css
.battlecard {
    width: 1000px;
    transform-origin: top left;
    transform: scale(var(--bc-scale, 1));
}

.preview-frame {
    position: relative;
    width: 100%;
    overflow: hidden;
}
```

JS computes scale based on column width AND viewport height (so sticky preview stays fully visible):
```js
function scaleCard() {
    const widthScale = Math.min(1, frame.clientWidth / 1000);
    const isDesktop = window.matchMedia('(min-width: 64em)').matches;
    let heightScale = 1;
    if (isDesktop) {
        const available = window.innerHeight - 24 - 24 - 64;  // top + bottom + controls
        heightScale = available / cardEl.scrollHeight;
    }
    const scale = Math.min(widthScale, heightScale, 1);
    cardEl.style.setProperty('--bc-scale', String(scale));
    frame.style.height = (cardEl.scrollHeight * scale) + 'px';
}
```

Trigger via `ResizeObserver`, `MutationObserver`, `window.resize`, and `document.fonts.ready`.

## 7. PNG Download + Copy to Clipboard

Use `html-to-image` lazy-loaded from CDN (no npm dep needed). Both Download and Copy share the same render path - extract it into one helper. **Critical:** override the `transform` inline (not via the CSS variable), because the ResizeObserver/MutationObserver will clobber `--<tool>-scale` during the network await and produce a half-rendered PNG with blank space on the right and bottom.

```js
// Shared render helper - takes 'png' for download, 'blob' for clipboard
async function renderCard(format) {
    const cEl = card;
    const frameEl = document.getElementById('preview-frame');
    const prevTransform = cEl.style.transform;
    const prevFrameHeight = frameEl?.style.height || '';
    try {
        const mod = await import('https://esm.sh/html-to-image@1.11.13');
        cEl.style.transform = 'none';
        if (frameEl) frameEl.style.height = cEl.scrollHeight + 'px';
        const opts = {
            pixelRatio: 2,
            backgroundColor: '#0d1117',
            cacheBust: true,
            width: 1000,
            height: cEl.scrollHeight,
        };
        return format === 'blob' ? await mod.toBlob(cEl, opts) : await mod.toPng(cEl, opts);
    } finally {
        cEl.style.transform = prevTransform;
        if (frameEl) frameEl.style.height = prevFrameHeight;
    }
}

// Copy to clipboard (uses ClipboardItem API)
copyBtn?.addEventListener('click', async () => {
    try {
        const blob = await renderCard('blob');
        if (!navigator.clipboard || !window.ClipboardItem) {
            alert('Copy to clipboard is not supported in this browser. Use Download PNG instead.');
            return;
        }
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        copyBtn.textContent = 'Copied!';
        // Track via dataLayer
        dataLayer.push({ event: 'tool_copy', tool_name: '<slug>', tool_output: 'png' });
    } catch (err) {
        alert('Copy failed. Please use Download PNG instead.');
    }
});

// Download (just calls render then triggers a link click)
downloadBtn?.addEventListener('click', async () => {
    const dataUrl = await renderCard('png');
    const link = document.createElement('a');
    link.download = `<slug>-${safeFilename}.png`;
    link.href = dataUrl;
    link.click();
});
```

**Why the inline transform fix matters:**
- `pixelRatio: 2` for retina/print-quality
- Always pass explicit `width: 1000` and `height: cardEl.scrollHeight` (otherwise html-to-image picks up the scaled bounding box and you get the blank-space bug)
- Override `style.transform = 'none'` directly inside `renderCard`. **Do not** try to lock `--<tool>-scale` to `1` — the ResizeObserver/MutationObserver will undo it during the network await
- Lazy-load the module BEFORE locking the transform (so the network await doesn't happen with the card temporarily un-scaled in the visible UI)
- Restore the inline transform in `finally` so a render error doesn't leave the preview broken
- Generate filename from user inputs (lowercase, kebab-case, fallback to generic name like `'launch-plan.png'` when empty)

## 8. Form Conventions

- Wrap each logical group in `<fieldset>` with `<legend>` (semantic + screen reader friendly)
- Each input gets a numbered legend: `1. Your product`, `2. Competitor`, etc.
- `maxlength` on every input - prevents preview from breaking with absurd content
- Always include "Load sample data" + "Reset" + "Clear saved" buttons at the bottom

### Section toggles (per-fieldset show/hide)

Every body card in the preview should be toggleable via a switch in its corresponding fieldset's legend. The header section (always-visible identity fields) is the only thing that's required.

**Markup pattern:**
```html
<fieldset data-section-card="bc-win">
    <legend>3. Why you win
        <label class="section-toggle" title="Show this section in the output">
            <input type="checkbox" class="section-toggle-input" data-toggle-card="bc-win" checked />
            <span class="section-toggle-track"></span>
        </label>
    </legend>
    <!-- inputs -->
</fieldset>
```

The `data-toggle-card` value matches the CSS class on the corresponding card in the preview. When the toggle is unchecked:
- The card gets `.section-excluded` (CSS `display: none !important`)
- The fieldset gets `.fieldset-muted` (50% opacity, inputs disabled)
- The PNG export naturally omits the hidden card (since html-to-image renders the visual DOM)

JS wiring:
```js
function applyToggle(toggle) {
    const cardClass = toggle.dataset.toggleCard;
    const cardEl = card.querySelector('.' + cardClass);
    const fieldset = toggle.closest('fieldset');
    const excluded = !toggle.checked;
    if (cardEl) cardEl.classList.toggle('section-excluded', excluded);
    if (fieldset) fieldset.classList.toggle('fieldset-muted', excluded);
}
form.querySelectorAll('.section-toggle-input').forEach((toggle) => {
    toggle.addEventListener('change', () => {
        applyToggle(toggle);
        saveState();
        scaleCard();  // re-fit the preview now that height changed
    });
});
```

### localStorage auto-save

Persist form state + toggle state across refreshes. Per-tool key: `tool-state-<slug>`.

```js
const STATE_KEY = 'tool-state-battlecard';

function saveState() {
    try {
        const fields = {};
        form.querySelectorAll('input[type="text"]').forEach((input) => {
            if (input.value) fields[input.id] = input.value;
        });
        const excluded = {};
        form.querySelectorAll('.section-toggle-input').forEach((toggle) => {
            if (!toggle.checked && toggle.dataset.toggleCard) excluded[toggle.dataset.toggleCard] = true;
        });
        localStorage.setItem(STATE_KEY, JSON.stringify({ fields, excluded, savedAt: Date.now() }));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem(STATE_KEY);
        if (!raw) return false;
        const saved = JSON.parse(raw);
        Object.entries(saved.fields || {}).forEach(([id, val]) => {
            const input = document.getElementById(id);
            if (input && typeof val === 'string') input.value = val;
        });
        Object.entries(saved.excluded || {}).forEach(([cardClass, isExcluded]) => {
            const toggle = form.querySelector(`.section-toggle-input[data-toggle-card="${cardClass}"]`);
            if (toggle && isExcluded) { toggle.checked = false; applyToggle(toggle); }
        });
        return true;
    } catch (e) { return false; }
}

// Debounced save on every input
let saveTimer;
form.addEventListener('input', () => {
    update();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveState, 400);
});

// Restore at the end of init
loadState();
update();
```

Wire the **Reset** button to also reset all toggles back to checked, then `saveState()` (don't just `form.reset()`, because that doesn't touch toggles or persistence).

Wire the **Clear saved** button to `confirm()`, `localStorage.removeItem(STATE_KEY)`, then full reset.

Always show the autosave status in a small text element next to the preview controls:
```html
<p class="autosave-status" id="autosave-status" aria-live="polite"></p>
```

### Sample data rules
- **Never use real company names** in sample/placeholder text. Use fictional ones (NorthWind Labs, Acme Corp, RivalCo, Customer X)
- **Never use the site owner's real name** in sample data (placeholders are fine since they're clearly illustrative; loaded sample data is not). Use fictional names like Alex M., Priya R., Marcus T., Sarah K.
- A user might screenshot the loaded sample - if it attributes a fake quote to a real company OR uses the site owner's name as the "owner" of a fake plan, that's misleading
- Real industry resources (Pavilion, Demand Curve, Kyle Poyar, Exit Five) ARE OK in sample data when used as illustrative consumption sources, since you're not putting fake words in their mouth - just listing what someone follows

### Multiple sample data sets

Every tool ships 3 sample data sets reachable from a `<details class="sample-picker">` dropdown (replaces the single "Load sample" button). Each sample is a distinct industry/persona scenario so users see the tool works for more than one use case.

```html
<details class="sample-picker">
    <summary class="btn-secondary">Load sample <span class="sample-caret">▾</span></summary>
    <ul class="sample-options">
        <li><button type="button" class="sample-option" data-sample="b2b-saas">B2B SaaS Analytics</button></li>
        <li><button type="button" class="sample-option" data-sample="devops">DevOps Platform</button></li>
        <li><button type="button" class="sample-option" data-sample="martech">Marketing Automation</button></li>
    </ul>
</details>
```

```js
const samples: Record<string, Record<string, string>> = {
    'b2b-saas': { /* field-id -> value mappings */ },
    'devops': { /* ... */ },
    'martech': { /* ... */ },
};

function loadSample(key: string) {
    const sample = samples[key];
    if (!sample) return;
    Object.entries(sample).forEach(([id, val]) => {
        const input = document.getElementById(id) as HTMLInputElement | null;
        if (input) input.value = val;
    });
    update();
    updateCounter();
    saveState();
}

form.querySelectorAll('.sample-option').forEach((btn) => {
    btn.addEventListener('click', () => {
        loadSample(btn.dataset.sample || '');
        const picker = btn.closest('details');
        if (picker) picker.removeAttribute('open');
    });
});
```

### Empty-field hiding (no placeholder bleed-through)

When a user starts filling fields, empty bound elements should hide entirely instead of showing their placeholder text. On the all-empty initial state, placeholders show as guides.

```js
function update() {
    const hasAnyContent = Array.from(form.querySelectorAll('input[type="text"]'))
        .some((input) => input.value.trim().length > 0);

    bindings.forEach((el) => {
        const val = (document.getElementById(el.dataset.bind) as HTMLInputElement)?.value?.trim() || '';
        if (val) {
            el.textContent = val;
            el.classList.remove('placeholder', 'bind-empty');
        } else if (hasAnyContent) {
            el.textContent = '';
            el.classList.remove('placeholder');
            el.classList.add('bind-empty');
        } else {
            el.textContent = el.dataset.placeholder || '';
            el.classList.add('placeholder');
            el.classList.remove('bind-empty');
        }
    });

    // Group hide: containers that hide when ALL their data-bind descendants are empty
    card.querySelectorAll('[data-hide-group]').forEach((group) => {
        const childBinds = group.querySelectorAll('[data-bind]');
        const allEmpty = childBinds.length > 0 && Array.from(childBinds).every((c) => c.classList.contains('bind-empty'));
        group.classList.toggle('group-hidden', allEmpty);
    });
}
```

```css
.bind-empty,
.group-hidden {
    display: none !important;
}
```

Mark wrapper elements that should hide together with `data-hide-group`:
```html
<div class="bc-obj-item" data-hide-group>
    <div class="bc-q" data-bind="obj-1-q">...</div>
    <div class="bc-a" data-hide-group><strong>Reply:</strong> <span data-bind="obj-1-a">...</span></div>
</div>
```

The inner `data-hide-group` on `.bc-a` hides the "Reply:" label when its bound span is empty. The outer one hides the whole objection item when both q and a are empty.

### Theme switching (Dark / Light / Brand)

Three themes via `data-theme` attribute on the card. Defaults to dark. The theme picker is a 3-button group in the preview-actions bar.

```html
<div class="theme-picker" role="radiogroup" aria-label="Theme">
    <button type="button" class="theme-btn active" data-theme="dark">Dark</button>
    <button type="button" class="theme-btn" data-theme="light">Light</button>
    <button type="button" class="theme-btn" data-theme="brand">Brand</button>
</div>
```

```js
const themeBgColors = { dark: '#0d1117', light: '#ffffff', brand: '#1c0056' };

function applyTheme(theme: string) {
    card.dataset.theme = theme;
    document.querySelectorAll('.theme-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}
// Persist in saveState/loadState. Use themeBgColors[theme] in renderCard's backgroundColor opt.
```

CSS overrides target `.tool-card[data-theme="light"]` and `[data-theme="brand"]` and override colors only - keep the dark theme as the default unscoped rule.

### PDF download

Lazy-load `jspdf@2.5.1` from CDN. Same renderCard helper produces the dataURL; PDF wraps it on a US Letter page, scaled to fit with margins.

```js
async function pngToPdf(dataUrl: string, filename: string) {
    const mod: any = await import('https://esm.sh/jspdf@2.5.1');
    const JsPDF = mod.jsPDF || mod.default;
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
    const pageW = 612, pageH = 792, margin = 36;
    const scale = Math.min((pageW - 2 * margin) / img.width, (pageH - 2 * margin) / img.height);
    const w = img.width * scale, h = img.height * scale;
    const x = (pageW - w) / 2, y = (pageH - h) / 2;
    const pdf = new JsPDF({ orientation: 'portrait', unit: 'pt', format: 'letter' });
    pdf.addImage(dataUrl, 'PNG', x, y, w, h, undefined, 'FAST');
    pdf.save(filename);
}
```

### Field counter

A small status line below the preview controls shows `X/Y fields filled ✓` (✓ when complete). Rebuild on every input + reset + sample load + clear.

```js
function updateCounter() {
    const inputs = form.querySelectorAll('input[type="text"]');
    const filled = Array.from(inputs).filter((i) => i.value.trim().length > 0).length;
    counterEl.textContent = `${filled}/${inputs.length} fields filled${filled === inputs.length ? ' ✓' : ''}`;
}
```

### Logo upload (custom branding)

A file input + upload/remove buttons in the form actions bar. The logo renders top-right of the card meta area, persists as a base64 data URL in localStorage.

```html
<input type="file" id="logo-file-input" accept="image/png,image/jpeg,image/svg+xml,image/webp" hidden />
<button type="button" id="upload-logo" class="btn-secondary">＋ Logo</button>
<button type="button" id="remove-logo" class="btn-secondary btn-danger" hidden>× Logo</button>

<!-- in card header meta div -->
<img class="card-logo" id="card-logo" alt="" hidden />
```

```js
function applyLogo(dataUrl: string | null) {
    if (cardLogo) {
        if (dataUrl) { cardLogo.src = dataUrl; cardLogo.removeAttribute('hidden'); }
        else { cardLogo.removeAttribute('src'); cardLogo.setAttribute('hidden', ''); }
    }
    uploadBtn?.toggleAttribute('hidden', !!dataUrl);
    removeBtn?.toggleAttribute('hidden', !dataUrl);
    scaleCard();
}

fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    if (file.size > 1024 * 1024) {
        if (!confirm('Logo over 1MB. Continue?')) { fileInput.value = ''; return; }
    }
    const reader = new FileReader();
    reader.onload = (e) => { applyLogo(e.target?.result as string); saveState(); };
    reader.readAsDataURL(file);
});
```

Persist logo data URL in saveState/loadState alongside theme + fields.

## 9. Newsletter Capture

Reuse the existing Kit form (don't create a new one):
- Endpoint: `https://app.kit.com/forms/9145889/subscriptions`
- Method: `POST` with `FormData`, `Accept: application/json` header
- On success: push `{ event: 'newsletter_signup', signup_location: 'tool_<toolname>' }` to `dataLayer`

**Newsletter copy convention:** Don't claim a specific cadence (no "monthly" / "weekly"). Use the existing site copy: *"Join the newsletter. ... no spam, just value."*

The footer form already exists - do not duplicate it. Build a tool-specific newsletter strip *only* if the tool needs a specific value prop ("Want more PMM tools and templates?"). The strip lives between the tool grid and SEO content.

## 10. Schema Markup

Always include both `WebApplication` and `FAQPage` schemas:

```js
const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "{Tool Name}",
    "description": description,
    "url": "https://swapbiswas.com/tools/{slug}/",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "creator": {
        "@type": "Person",
        "name": "Swapnil Biswas",
        "url": "https://swapbiswas.com/"
    }
};
```

Inject via `<script type="application/ld+json" set:html={JSON.stringify(softwareSchema)} slot="head" />` (the `slot="head"` is required for it to land in `<head>`).

## 11. SEO Content Structure (below the tool)

Every tool needs ranking content below the fold:

1. **H2: How to use the {tool name}** - 5-7 numbered steps with bolded lead-ins
2. **H2: What makes a great {output type}** - 1-2 paragraphs with a cited stat + link to the related blog post
3. **H2: Related templates and guides** - 3-5 internal links to related blog posts (verify each exists)
4. **H2: Frequently asked questions** - 6-8 FAQs in `<details>` accordions, mirrored in FAQPage schema

### FAQ rules
- Always include: what is X, how to use this tool, is it free, what format is the output, how often to update, what makes a great X
- Match every claim in the FAQ to the actual implementation. Example bug caught: FAQ said "1400px wide PNG" but code exported at 1000px - keep these in sync

## 12. Tool ↔ Blog Cross-Linking Strategy

For every tool, there should be a corresponding informational blog post. They target different intents:
- **Blog post**: informational ("competitive battlecard template")
- **Tool page**: transactional ("free battlecard generator")

**Required cross-links:**
1. In the related blog post, add a CTA near the top (after the intro hook) and another near the bottom (before "Related reading"). Use a `>` blockquote for visual emphasis: `> **Skip the blank page.** Use the [free Tool Name](/tools/slug/) ...`
2. In the tool page's "What makes a great X" section, link to the blog: `<a href="/blog/post-slug/">→ Read the full guide</a>`
3. In the tool page's "Related templates and guides" section, link to 3-5 related blogs

This creates a topic cluster that compounds for SEO authority.

## 13. Site-Wide Updates per Tool Launch

When adding the FIRST tool, these are one-time additions (already done):
- `src/components/Nav.astro` - add `{ label: 'Tools', href: '/tools/' }` to `textLinks`
- `src/components/Footer.astro` - add `<li><a href="/tools/">Tools</a></li>` in the Explore list
- `src/layouts/BaseLayout.astro` - add Tools to `navItems` (powers SiteNavigationElement schema)

For each subsequent tool:
- Add a card to `src/pages/tools/index.astro` (`status: "live"` once shipped, `"soon"` while planned)

## 14. GTM Custom Events

Tool pages should fire two dataLayer events:

```js
// On PNG download
dataLayer.push({
    event: 'tool_download',
    tool_name: '<tool_slug>',
    tool_output: 'png'
});

// On newsletter submit
dataLayer.push({
    event: 'newsletter_signup',
    signup_location: 'tool_<tool_slug>'
});
```

After launch, configure GA4 custom dimensions: `tool_name`, `tool_output`. Add `tool_download` as a conversion event in GA4.

## 15. View Transitions Compliance

Every script in a tool page MUST work after View Transition navigations. Two patterns:

```js
// Pattern A: page-load event
function initTool() {
    const form = document.getElementById('my-form');
    if (!form || form._initialized) return;
    form._initialized = true;
    // ... wire up
}
initTool();
document.addEventListener('astro:page-load', initTool);
```

**Never use `DOMContentLoaded`** - it doesn't fire on View Transition nav. Always guard with `_initialized` flag (or `_tracked`, etc.) to prevent duplicate listeners.

## 16. Build & Test Checklist

Before shipping:
- [ ] `npm run build` succeeds (no errors)
- [ ] Built page exists: `dist/tools/{slug}/index.html`
- [ ] Built tools index exists: `dist/tools/index.html`
- [ ] Sitemap contains both URLs: `dist/sitemap-0.xml`
- [ ] Hard-refresh `/tools/{slug}/` and test: form input updates preview live
- [ ] "Load sample data" populates everything
- [ ] PNG download produces a 1000×N px image at 2x DPR, with all content rendered
- [ ] Resize browser - preview scales to fit column width
- [ ] Scroll the form - preview stays sticky on the right (desktop ≥1024px)
- [ ] Newsletter form submits successfully (check Kit dashboard)
- [ ] Mobile (<1024px): form stacks above preview, sticky disabled

## 17. Fact-Checking Rules (Inherited from Blog)

The same rules apply to tool page SEO content:
- **Every stat must be verifiable.** Open the cited URL, find the exact number
- **Sources less than 5 years old.** No 2018 reports
- **No URL guessing.** Test every URL after writing - dead links and stale citations are common (we found four in one audit)
- **Match wording to source.** Don't paraphrase a stat into something the source doesn't actually say

## 18. Image Generation (if needed)

Tools generally don't need separate hero images (the live preview *is* the image). If a tool needs supporting visuals (diagrams, examples), follow the [Diagram Design System in MEMORY.md](.claude/MEMORY.md):
- Background `#0d1117` to `#161b22`
- Cards `#151b23` fill, `#30363d` border, rx 16
- Light accent colors only - never dark purple on dark backgrounds
- Save as WebP to `public/assets/tools/{slug}/`

## 19. LinkedIn Launch Pattern

After shipping a tool:
1. Add the LinkedIn post to `LINKEDIN_POSTS.md` with UTM `?utm_source=linkedin&utm_medium=social&utm_campaign={slug}`
2. Generate a 1200x628 sample output PNG via the tool itself (load sample data, download, crop/resize)
3. Schedule for Tue/Wed/Thu/Fri (per existing convention)
4. Cross-post the sample image with a 3-sentence hook + tool URL

## Quick Reference: What Lives Where

| Thing | Location |
|---|---|
| Tool page | `src/pages/tools/{slug}.astro` |
| Tools index | `src/pages/tools/index.astro` |
| Nav link | `src/components/Nav.astro` (textLinks) |
| Footer link | `src/components/Footer.astro` (link-list) |
| Schema nav item | `src/layouts/BaseLayout.astro` (navItems) |
| Global sticky fix | `src/styles/global.css` (`html, body { overflow-x: clip }`) |
| Newsletter endpoint | `https://app.kit.com/forms/9145889/subscriptions` |
| Cross-link in blog | `src/content/blog/{related-slug}.md` (top + bottom CTAs) |
