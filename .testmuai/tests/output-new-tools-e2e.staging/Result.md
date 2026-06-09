---
test: ../new-tools-e2e_test.md
status: failed
started: 2026-06-02T15:16:09.874Z
duration_s: 1209
session_id: 2f51d930-0368-41c4-a079-6532366bbe86
---

# E2E smoke test for the 4 new PMM tools — Result

## Step 1 ✓ passed (140.3s)
md5: 4e807da90f7a86d6075377d064e3c139
Navigate to http://localhost:4322/tools/product-one-pager-template/ and wait 3 seconds for the page to render.

Look at the bottom-right corner of the viewport. If there is a small newsletter dialog visible with text "Get Marketing & AI Insights", find its × close button (top-right of the dialog) and click it to dismiss. If no dialog is visible yet, that's fine - continue.

Verify the page hero heading text reads "Free Product One-Pager Template".

Report PASS or FAIL.

## Step 2 ✓ passed (252.3s)
md5: 08705309397109e35f10d55006dfa8ec
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

## Step 3 ✓ passed (208.3s)
md5: 707435ed583c624629c7ae0c6c8c1919
Still on the Product One-Pager page. Find the theme picker - a small button group above the preview with three buttons: "Dark" (active), "Light", "Brand".

Click the "Light" button. Wait 1 second.

Verify the preview card background changes from dark navy/black to a light (white/cream) color and that the text inside the card is still readable (not white-on-white).

Then click the "Dark" button to restore. Verify the card returns to dark background.

Report PASS or FAIL.

## Step 4 ✓ passed (319.2s)
md5: 284adc02c1c56d3fae49845b8a5bef29
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

## Step 5 ✗ failed (268.2s)
md5: b80a59befdee73871f9b1b8770e735a7
Reason: Checkpoint assertion failed: "Verify all of these are TRUE in the preview area: hero reads "Free Value Proposition Canvas Generator"; preview shows two-column canvas with "Value Map" header on the left and "Customer Profile" header on the right; "Acme Insights" appears as the product name at the top; each side has visible bullet-list content (not empty placeholder text)"
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

## Step 6 ⏭ skipped
