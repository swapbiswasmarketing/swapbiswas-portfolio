---
mode: testing
max_steps: 60
target: chrome
---

# E2E smoke test for the 4 new PMM tools

Important context: each tool page has a newsletter slide-in popup ("Get Marketing & AI Insights") that appears 30 seconds after page load or on scroll. The popup is positioned bottom-right and can obscure form controls. Once closed (by clicking its × button), localStorage stores 'nl-popup-dismissed' = '1' and the popup stays hidden across all subsequent pages in the same browser session. Step 1 dismisses the popup so later steps are unobstructed.

## Step 1
Navigate to http://localhost:4322/tools/product-one-pager-template/ and wait 3 seconds for the page to render.

Look at the bottom-right corner of the viewport. If there is a small newsletter dialog visible with text "Get Marketing & AI Insights", find its × close button (top-right of the dialog) and click it to dismiss. If no dialog is visible yet, that's fine - continue.

Verify the page hero heading text reads "Free Product One-Pager Template".

Report PASS or FAIL.

## Step 2
On the same Product One-Pager page (still loaded from Step 1), perform this sequence:
1. Scroll the form panel (LEFT side of the layout) down until you can see a button labeled "Load sample" with a small downward triangle next to it. This is the sample picker dropdown.
2. Click the "Load sample" button to open the dropdown.
3. In the open dropdown menu, click the option labeled "B2B SaaS Analytics".
4. Wait 1 second for the live preview to update.

Verify all of these are TRUE in the right-side preview area:
- The text "Acme Insights" appears as the product name
- The text "Revenue attribution platform" appears as a small uppercase category label
- A customer quote block is visible (italicized text with attribution)

Report PASS if all three are visible, FAIL otherwise with what you saw.

## Step 3
Still on the Product One-Pager page. Find the theme picker - a small button group above the preview with three buttons: "Dark" (active), "Light", "Brand".

Click the "Light" button. Wait 1 second.

Verify the preview card background changes from dark navy/black to a light (white/cream) color and that the text inside the card is still readable (not white-on-white).

Then click the "Dark" button to restore. Verify the card returns to dark background.

Report PASS or FAIL.

## Step 4
Navigate to http://localhost:4322/tools/case-study-template/ and wait 2 seconds. The newsletter popup should not appear (was dismissed in Step 1, localStorage persists).

Perform this sequence:
1. Scroll the form panel down to find the "Load sample" dropdown button.
2. Click it to open.
3. Click the "B2B SaaS Attribution" option.
4. Wait 1 second.

Verify all of these are TRUE in the preview area:
- The page hero reads "Free Case Study Template"
- The preview now shows a large stat box with the number "95%"
- The text "NorthWind Labs" appears as the company name in the header area
- A blockquote-style customer quote is visible

Report PASS or FAIL.

## Step 5
Navigate to http://localhost:4322/tools/value-proposition-canvas-generator/ and wait 2 seconds.

Perform this sequence:
1. Scroll the form panel to find the "Load sample" button.
2. Click it open.
3. Click "B2B SaaS Attribution".
4. Wait 1 second.

Verify all of these are TRUE in the preview area:
- The page hero reads "Free Value Proposition Canvas Generator"
- The preview shows a two-column canvas with "Value Map" header on the left side and "Customer Profile" header on the right side
- "Acme Insights" appears as the product name at the top of the preview
- Each side has visible bullet-list content (not empty placeholder text)

Report PASS or FAIL.

## Step 6
Navigate to http://localhost:4322/tools/go-to-market-strategy-template/ and wait 2 seconds.

Perform this sequence:
1. Scroll the form panel to find the "Load sample" button.
2. Click it open.
3. Click "B2B SaaS Attribution".
4. Wait 1 second.

Verify all of these are TRUE in the preview area:
- The page hero reads "Free Go-to-Market Strategy Template"
- The preview shows a grid of six panels labeled approximately: "Ideal customer profile", "Positioning", "Pricing & packaging", "Channels & motion", "Goals", "Success metrics"
- "Acme Insights" appears as the product name in the header
- The "Ideal customer profile" panel shows populated content (e.g., a row labeled "Segment" with text)

Report PASS or FAIL.
