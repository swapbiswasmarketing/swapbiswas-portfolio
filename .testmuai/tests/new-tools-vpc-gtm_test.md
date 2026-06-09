---
mode: testing
max_steps: 30
target: chrome
---

# Finish E2E - verify VPC + GTM tools (steps that were skipped/inconclusive)

Context: The newsletter popup ("Get Marketing & AI Insights") may appear in the bottom-right corner. If you see it at any point, click its × close button to dismiss. Once dismissed it stays dismissed (localStorage persists across pages in the same session).

## Step 1
Navigate to http://localhost:4322/tools/value-proposition-canvas-generator/ and wait 4 seconds for the page to render fully.

If the newsletter popup is visible in the bottom-right, click its × close button to dismiss it.

Now perform these actions in order, waiting after each:
1. Scroll the form panel (LEFT side) down until you can see a button labeled "Load sample" with a small triangle marker.
2. Click "Load sample" to open the dropdown menu.
3. Click the option labeled "B2B SaaS Attribution".
4. **Wait 3 full seconds** for the live preview to fully update and render (the preview must show all populated fields, not placeholder text).
5. Scroll back to the top of the page so the preview header is visible.

Take a fresh screenshot AFTER the 3-second wait. Then verify ALL of these in that single fresh screenshot:
- The page hero heading text contains "Value Proposition Canvas Generator"
- The preview card (on the right side) shows "Value Map" as a section label on its LEFT half
- The preview card shows "Customer Profile" as a section label on its RIGHT half
- The text "Acme Insights" is visible somewhere in the preview header area
- At least one bullet list inside the preview has populated text content (e.g., visible list items in either Customer jobs, Pains, Gains, Products, Pain relievers, or Gain creators sections - NOT just placeholder text like "Job 1" or "Product 1")

Report PASS or FAIL with which conditions you observed.

## Step 2
Navigate to http://localhost:4322/tools/go-to-market-strategy-template/ and wait 4 seconds for the page to render fully.

If the newsletter popup is visible in the bottom-right, click its × close button to dismiss it.

Now perform these actions in order, waiting after each:
1. Scroll the form panel down until you can see the button labeled "Load sample".
2. Click "Load sample" to open the dropdown menu.
3. Click the option labeled "B2B SaaS Attribution".
4. **Wait 3 full seconds** for the live preview to fully update.
5. Scroll back to the top of the page.

Take a fresh screenshot AFTER the 3-second wait. Then verify ALL of these in that single fresh screenshot:
- The page hero heading text contains "Go-to-Market Strategy Template"
- The preview card shows a header with the product name "Acme Insights"
- The preview shows a panel labeled "Ideal customer profile" or similar
- At least one panel shows populated rows with descriptive content (not placeholder text like "Segment / Segment")

Report PASS or FAIL with which conditions you observed.
