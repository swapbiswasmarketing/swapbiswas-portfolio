# Lane G handoff - fact refresh of existing posts (4 November 2026)

Branch: `cloud/lane-g`. Six posts edited, no new posts. `npm run build` exit 0. KIT gates 1-5 pass on all six (ASCII clean, TROPE PASS, CLAIM PASS, title/description in band, no HTML comments).

## Skipped: items 1 and 3 (OpenAI pages unreadable from the cloud VM)
- `chatgpt-go-free-india` and `chatgpt-go-vs-gemini` were NOT refreshed. Every OpenAI host (openai.com, help.openai.com, chatgpt.com/pricing) returns HTTP 403 with `cf-mitigated: challenge` (Cloudflare bot check) to both curl and WebFetch from this VM. The network itself is open (anthropic.com, notion.com, elevenlabs.io, semrush.com, bing.com all 200), so this is not a network-policy problem and a Full-network environment will not fix it. Getting past the bot check was not attempted.
- Both posts still need the 4 November 2026 refresh (first free Go years end; renewal price, auto-renew, whether the offer still runs for new users; Jio's Gemini offer closed 29 October 2026). Do it from the author's machine, where OpenAI's pages load.

## claude-student-discount-india (updatedDate -> 2026-11-04)
- Main answer unchanged: no student price on any individual Claude plan, so no dated note at the top.
- Anthropic's Pro article now reads "We don't offer standard discounted pricing for individual plans (Pro, Max, and Ultra)" (curl-confirmed). Pricing page: Pro $20, Max $100, Ultra $200 a month. Wording updated to "Pro, Max or Ultra"; usage bundles now cover Pro, Max, Ultra and Team.
- Removed the Artifact usage promotion row and its two mentions (its help article now 404s).
- Updated help-center search results, the GitHub announcement date, the moved GitHub agents docs URL, the article dates, and the "10 October" stamps -> 4 November 2026. Removed an old "served to a connection in India" line (KIT section 0).
- Diagram `who-has-to-act.svg` subtitle date changed; WebP and 660w re-rendered and viewed; `src/data/image-manifest.json` updated by the build.
- Two GitHub sources were confirmed through WebFetch only (github.com blocks curl here).
- URLs: https://support.claude.com/en/articles/8325606-what-is-the-pro-plan, https://support.claude.com/en/articles/11049741-what-is-the-max-plan, https://claude.com/pricing, https://claude.com/programs/campus, https://claude.com/programs/team-plan-for-scientists, https://claude.com/solutions/education, https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university, https://support.claude.com/en/articles/14246112-buy-usage-bundles, https://docs.github.com/en/copilot/get-started/plans, https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-third-party-coding-agents, https://gemini.google/in/students/?hl=en-IN
- Next refresh: 4 December 2026, then 31 December 2026 (Gemini student offer redeem deadline).

## elevenlabs-price-in-india (updatedDate -> 2026-11-04)
- The Starter promo is still on the page: elevenlabs.io/pricing showed "Starter $1 first month Then $6 per month" on 4 Nov 2026 (curl-confirmed), but the "Until Nov 1" label is gone and no end date is shown. The post now says the offer was "still shown as of November 2026 with no end date".
- The rupee conversion now uses RBI's rate for 4 Nov 2026, Rs 94.8416 (was Rs 94.9432 for 23 Oct). The conversion table, FAQ 1, App Store gap (Rs 212, 10.2%) and per-minute rupee column were recomputed, still labelled as arithmetic.
- Added the Dubbing Studio watermark rate (5,000 credits a minute). Removed the "logged out from an Indian connection" wording. India App Store and Google Play (gl=IN) rupee prices are unchanged from 25 Oct.
- URLs: https://elevenlabs.io/pricing, https://www.rbi.org.in/, https://apps.apple.com/in/app/elevenlabs-ai-voice-generator/id6743162587, https://play.google.com/store/apps/details?id=io.elevenlabs.coreapp&hl=en_IN&gl=IN, https://elevenlabs.io/docs/overview/administration/billing, https://elevenlabs.io/docs/help-center/account/payment-billing/can-i-pay-for-my-eleven-labs-subscription-in-inr
- Next refresh: 4 December 2026 (check whether the Starter $1 offer has gone).

## is-notion-ai-free (updatedDate -> 2026-11-04)
- Main answer unchanged (Notion AI is free only as a trial, and comes included on Business and Enterprise).
- Credit system: Notion's 19 Oct blog says "Existing customers move over on November 2". No Notion page confirms the move happened, so the post says existing customers "were due to" move. The help pages give 1,500 Standard + 500 Select credits a month on Business/Enterprise.
- Removed the old first-person "checked from an Indian connection" wording and the FAQ line "USD only when opened from India" (cannot be reproduced from a US VM; KIT section 0). The post now says notion.com labels prices "Price in USD" and does not mention India or GST. Apple India App Store rupee prices are unchanged and stamped as of November 2026.
- The author may want to restore the India-currency check if re-done from India.
- URLs: https://www.notion.com/blog/notion-ai-more-for-less, https://www.notion.com/help/what-are-notion-credits, https://www.notion.com/help/manage-your-ai-credits, https://www.notion.com/help/standard-select-and-notion-credits-eligible-features, https://www.notion.com/help/notion-ai-faqs, https://apps.apple.com/in/app/notion-notes-tasks-ai/id1232780281
- Next refresh: about 3 December 2026 (AI Meeting Notes start using credits on 1 December).

## llm-optimization (updatedDate -> 2026-11-04)
- Replaced "There is no Google Search Console for LLMs yet" (body and FAQ) with Bing Webmaster Tools' AI Performance report: public preview since 10 February 2026, counting citations in Microsoft Copilot, AI-generated summaries in Bing and select partner integrations, with a Topics Portfolio beta added on 13 October 2026. The lane-e post `bing-ai-performance-report` is not on origin/main, so the fix links Microsoft's pages. Once lane-e merges, the merge session can swap the first link for `/blog/bing-ai-performance-report/`.
- Fixed three gate failures that were already in the post: a superlative claim against llmstxt.org, the non-ASCII "≥" in the checklist table, and a reasoning-leak phrase.
- URLs: https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/, https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/
- Next refresh: when AI Performance leaves public preview, or by February 2027.

## how-do-i-check-my-seo-ranking (updatedDate 2026-09-10 -> 2026-11-04)
- Replaced the old Semrush Pro/Guru plan names with the current plans from https://www.semrush.com/pricing/ (redirects to /pricing/seo-ai-search/), checked 4 Nov 2026: SEO $139/mo (5 websites, 500 keywords tracked daily, Position Tracking), Starter SEO + AI Search $199/mo, Pro+ SEO + AI Search $299/mo (15 websites, 1,500 keywords, historical SEO data, keyword cannibalization analysis). The comparison table's historical-data cell now says "Pro+ SEO + AI Search".
- Not touched: the unsourced "2-3 day delay" lines (logged earlier as an OPTIMIZE item).
- Next refresh: February 2027.

## competitive-intelligence-analysis (updatedDate unchanged)
- The second link to /blog/competitive-battlecard-template/ (closing section) is now plain text ("the competitive battlecard template linked above"). Link fix only, no fact change.
