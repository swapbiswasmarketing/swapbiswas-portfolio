---
mode: testing
max_steps: 50
target: chrome
---

# Sticky preview + PNG download verification (4 tools)

Each step tests two critical behaviors of one tool:
1. **Sticky preview** - when scrolling the form panel down on desktop, the preview card on the right must stay visible (this is fragile per TOOL_INSTRUCTIONS §4)
2. **PNG download** - clicking the "Download PNG" button must work without throwing a visible error

Newsletter popup note: a popup may appear bottom-right with text "Get Marketing & AI Insights" - if visible, click its × close button. Once dismissed in this browser session, it stays gone.

## Step 1 - Product One-Pager Template
Navigate to http://localhost:4322/tools/product-one-pager-template/?nopopup and wait 3 seconds.

(The ?nopopup query param suppresses the newsletter popup so it won't obstruct interactions.)

Then perform this sequence:
1. Find and click the "Load sample" button in the form area, then click the "B2B SaaS Analytics" option in the dropdown. Wait 2 seconds for the preview to populate.
2. **Sticky check**: Scroll the form panel down using the page scroll. Keep scrolling until you've moved past the middle of the form (you should still see the preview area on the right). Take a screenshot.
3. **Verify in that screenshot**: the preview card on the right side is STILL VISIBLE (it should not have scrolled off the top of the viewport). The preview card should show "Acme Insights" or other sample data.
4. Scroll back to the top of the page.
5. **Download check**: Find the orange "Download PNG" button in the preview controls bar (top-right of the preview area). Click it once.
6. Wait 5 seconds for the download to process.
7. **Verify**: no error alert/dialog appeared on the page. The "Download PNG" button is back in its normal state (not stuck saying "Preparing..." and not showing an error message).

Report PASS if both sticky AND download checks pass; FAIL with specifics otherwise.

## Step 2 - Case Study Template
Navigate to http://localhost:4322/tools/case-study-template/?nopopup and wait 3 seconds.

(?nopopup query param suppresses the newsletter popup.)

Then perform this sequence:
1. Click "Load sample", choose "B2B SaaS Attribution". Wait 2 seconds.
2. **Sticky check**: Scroll the page down past the middle of the form. Take a screenshot.
3. **Verify**: preview card on the right is still visible in the viewport (sticky working).
4. Scroll back to top.
5. **Download check**: Click "Download PNG" button. Wait 5 seconds.
6. **Verify**: no error alert appeared, button returned to "Download PNG" state.

Report PASS or FAIL.

## Step 3 - Value Proposition Canvas Generator
Navigate to http://localhost:4322/tools/value-proposition-canvas-generator/?nopopup and wait 3 seconds.

(?nopopup query param suppresses the newsletter popup.)

Then perform this sequence:
1. Click "Load sample", choose "B2B SaaS Attribution". Wait 2 seconds.
2. **Sticky check**: Scroll the page down past the middle of the form. Take a screenshot.
3. **Verify**: preview card on the right is still visible in the viewport.
4. Scroll back to top.
5. **Download check**: Click "Download PNG" button. Wait 5 seconds.
6. **Verify**: no error alert appeared, button returned to "Download PNG" state.

Report PASS or FAIL.

## Step 4 - Go-to-Market Strategy Template
Navigate to http://localhost:4322/tools/go-to-market-strategy-template/?nopopup and wait 3 seconds.

(?nopopup query param suppresses the newsletter popup.)

Then perform this sequence:
1. Click "Load sample", choose "B2B SaaS Attribution". Wait 2 seconds.
2. **Sticky check**: Scroll the page down past the middle of the form. Take a screenshot.
3. **Verify**: preview card on the right is still visible in the viewport.
4. Scroll back to top.
5. **Download check**: Click "Download PNG" button. Wait 5 seconds.
6. **Verify**: no error alert appeared, button returned to "Download PNG" state.

Report PASS or FAIL.
