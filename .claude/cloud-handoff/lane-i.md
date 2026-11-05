# Lane I handoff: character limits by platform (cloud run, 2026-11-05)

Branch: cloud/lane-i (from origin/main d9b3528). Demand for every keyword is unmeasured: no Semrush or Ahrefs data this run; Google autocomplete presence and the live SERP only. Covers are left as `img: /assets/stock-4.webp` / `img_alt: "placeholder"` for the merge session.

## Batch 1 (publishDate 2026-11-05)

### facebook-character-limit
- Primary keyword: facebook character limit (variants: facebook post character limit, facebook bio character limit, facebook page description / page name limit)
- Verdict: TOP5 (downgraded from TOP3_PLAUSIBLE: the soft top 3 was seen only in WebSearch, not confirmed on Google)
- Realistic: 5-30 visits/month (US/global, #4-8). Top-3 upside: about 80-350/month (10-30 if an AI Overview answers "63,206").
- Proof page: none confirmed in the top 5. The #1 article is blog.eklipse.gg (2023, est. DR 45-60). Small-site articles typecount.com and howmanywords.app sit around #14-16.
- Refresh: 2026-02-05 (quarterly). Re-fetch the Graph API Page reference (the `about` "Limit of 100 characters" line, v27.0) and the m.facebook.com Help articles (username and Page-name guidelines, organic link limits). facebook.com/help could not be read from this VM, so a Help article stating a post/bio/comment length may exist.
- Footprint: `| facebook-character-limit | reference table: what Meta publishes vs what guides print | myth-led (63,206 traced to a 2011 press report) | prose | synthesized |`
- Review ledger: status=new, review_due=2026-11-26
- First-hand question: Does the author manage a Facebook Page and/or profile he could test on? If so, on a dated day paste 101 then 102 characters into the profile Intro (bio), and 100 then 101 characters into the Page's Description field, and record where the editor stops or warns.
- Hosts edited (one sentence each): x-character-limit (hub down-link), linkedin-headline-character-limit ("Notes on the table" bullet), og-image-size (Sharing Debugger bullet).

### threads-character-limit
- Primary keyword: threads character limit (variants: threads character limit per post, threads word limit, threads text attachment, threads bio character limit)
- Verdict: TOP5 (downgraded from TOP3_PLAUSIBLE in self-refute)
- Realistic: 3-18 visits/month (US/global, #5-8). Top-3 upside: about 40-80/month. The top 3 is soft: OneUp's #1 URL returned 404 on 2026-11-05, #2 is a counter tool, #3 an off-topic forum plugin.
- Proof page: none valid in the top 5. unil.ink/blog/threads-character-limit-2026 (est. DR 25-45) sits around #11-13.
- Refresh: 2026-02-05. Re-fetch the Threads API overview (500, updated 22 Dec 2025), the posts and polls pages, and the newsroom text-attachment item. Try the Threads Help Center "Edit your profile" article again (a JS shell to curl here) for a bio figure.
- Footprint: `| threads-character-limit | reference table: limit + who states it | comparison-led (X's 280 vs Threads' 500, then 500 vs the 10,000 attachment) | list | synthesized |`
- Review ledger: status=new, review_due=2026-11-26
- First-hand question: Do you have a Threads account? If so, open Edit profile in the Threads app, paste 151 characters into the Bio field and note where it stops and whether a counter shows. The answer belongs in the H2 "Threads Bio Character Limit and Other Figures Meta Does Not Publish".
- Hosts edited: x-character-limit (hub down-link), linkedin-headline-character-limit ("Do Not State" section), youtube-post-image-size (after the poll/quiz image line).

### whatsapp-character-limit
- Primary keyword: whatsapp character limit (variants: whatsapp status character limit, whatsapp status 700 character limit, whatsapp about character limit, whatsapp group description character limit)
- Verdict: TOP5
- Realistic: 3-15 visits/month (#5-8; large India share likely but unmeasured). Top-3 upside: 30-120/month.
- Proof page: typecount.com/blog/whatsapp-character-limit (about #4; Martin Sikula, updated 30 Aug 2026; est. DR under 30; cites no WhatsApp/Meta page).
- Refresh: 2026-02-05. Re-fetch Meta's WhatsApp Business Platform pages (business profile, messages, Groups API). faq.whatsapp.com served titles without article text to curl here, so the consumer-app figures (status 700, message 65,536, display name 25, group name 100) are "not on any page I could read".
- Footprint: `| whatsapp-character-limit | reference table by field: guides vs Meta's docs | question-led ("700 or 139?") | table | synthesized |`
- Review ledger: status=new, review_due=2026-11-26
- First-hand question: In your own WhatsApp app (state app version and Android/iOS), how many characters did a text status accept before it stopped taking input, and how many did a group name accept? The answers belong in the "Is the WhatsApp Status Limit 700 or 139?" and "Group Name and Description" H2s.
- Hosts edited: x-character-limit (hub down-link), og-image-size (WhatsApp bullet), instagram-hashtag-limit (after the IG User Media caption paragraph).

### Optimize notes surfaced by the gates (not actioned: outside this lane's allowed edits)
- local-seo-checklist.md:61 says Google "retired the public Q&A section on Business Profiles in late 2025". Google's live Help page says Q&A is "available only for select business categories and regions". Correct that line.
- instagram-hashtag-limit: Meta's Ads Guide page for Instagram Feed image ads still lists "Maximum Number of Hashtags: 30" (fetched 2026-11-05). This could be a one-line addition to the "Pages That Still Print an Old Number" section.

### LinkedIn drafts (batch 1)

#### [DRAFTED] Facebook's 63,206-character limit has no Meta page behind it

Every guide says a Facebook post can run to 63,206 characters. I went looking for the Meta page that says so.

What I found on 5 November 2026:

- The 63,206 traces to a TechRadar report from 1 December 2011. None of the four guides I read links a Meta page for it.
- Meta's Graph API Page reference does give one hard number: a Page's Description (the `about` field) has a "Limit of 100 characters".
- Guides print 155 or 255 for that same field.
- The 101-character bio figure appears in a 2017 Adweek piece. No Meta page I read states it.
- Meta's username guidelines give a 5-character minimum and no maximum.

The rule I use: a limit is settled when the platform prints it. Everything else is a guide's number, and I label it that way.

🔗 https://swapbiswas.com/blog/facebook-character-limit/?utm_source=linkedin&utm_medium=social&utm_campaign=facebook-character-limit

#SocialMediaMarketing #ContentMarketing #Facebook #Copywriting #MarketingOps

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, muted earth tones, an old printed broadsheet folded on a wooden desk beside a brass ruler laid along a long handwritten scroll that trails off the table edge, a magnifying glass resting on the broadsheet, one small vermilion wax seal on the ruler as the only accent, soft window light, no text in the image, 1200x628.

---

#### [DRAFTED] Threads did not raise its limit to 10,000 characters

The headlines said Threads went from 500 to 10,000 characters. The post itself still stops at 500.

What Meta's own pages say (checked 5 November 2026):

- 500 characters per post, per the Threads API overview (updated 22 December 2025).
- The 10,000 is a text attachment, which Meta began rolling out on 4 September 2025. Its API docs allow one on text-only posts without a poll.
- Emoji count as their UTF-8 bytes: a thumbs-up is 4 of your 500.
- Polls take 2 to 4 options of 1 to 25 characters each. A topic tag runs 1 to 50 characters.
- The 150-character bio? None of the 10 Meta developer and newsroom pages I read prints it. Only guides do.

X weighs its 280 by script. Threads counts emoji as bytes. Same idea, a different ruler for each platform.

🔗 https://swapbiswas.com/blog/threads-character-limit/?utm_source=linkedin&utm_medium=social&utm_campaign=threads-character-limit

#SocialMediaMarketing #Threads #ContentStrategy #Copywriting #Meta

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, muted earth tones, a short folded letter on a desk with a much longer rolled parchment tied beneath it by a thin cord, a wooden abacus beside them, a quill at rest, one vermilion ribbon on the parchment as the only accent, no text in the image, 1200x628.

---

#### [DRAFTED] Is the WhatsApp status limit 700 or 139? The guides cannot agree

Search for the WhatsApp status character limit and you get two answers: 700 and 139. Neither appears on any WhatsApp page I could read.

What Meta's developer docs do state (5 November 2026):

- About: 1 to 139 characters. Business description: 512.
- A text message sent through the API: 4,096 characters. One guide prints 1,600.
- Image or video caption: 1,024, the one figure the guides and Meta agree on.
- Groups API: a subject of 128 characters, a description of 2,048.

Those are Business Platform figures. For the consumer app's status, message and group-name limits, the numbers come only from guides, and the post labels them that way.

If a status runs long, post a photo and put the words in the caption.

🔗 https://swapbiswas.com/blog/whatsapp-character-limit/?utm_source=linkedin&utm_medium=social&utm_campaign=whatsapp-character-limit

#WhatsAppMarketing #WhatsAppBusiness #SocialMediaMarketing #Copywriting #MarketingOps

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, muted earth tones, two small handwritten notes of different lengths pinned side by side to a wooden board, a pair of brass calipers measuring the longer note, an inkwell and quill below, one vermilion thread linking the two notes as the only accent, no text in the image, 1200x628.

## Batch 2 (publishDate 2026-11-05)

### youtube-character-limit
- Primary keyword: youtube character limit (variants: youtube title character limit, youtube description character limit, youtube tags character limit, youtube comment character limit, youtube channel description character limit)
- Verdict: LONGTAIL_ONLY (no valid sub-DR-40 article in the top 5; #1 influencermarketinghub.com, est. DR 70+, updated 5 Nov 2026)
- Realistic: 5-30 visits/month (US/global, #6-10). Top-3 upside: 100-400/month, discounted because "100 characters" is answered zero-click.
- Proof page: none valid in the top 5. utilhq.pages.dev (#5, "UtilHQ Team", tool site) fails the named-owner test.
- Refresh: 2026-02-05. Re-fetch Help 57404 ("Edit video settings": title 100, description 5,000 characters), the hashtags Help page 6390658 (60), and the Data API v3 videos/channels references (description "maximum length of 5000 bytes", tags 500, channel title 30, description 1000, keywords 500; all "Last updated 2026-11-03 UTC"). The Data API URLs now 301 to developers.google.com/youtube/data/reference/rest/v3/<resource>.
- Footprint: `| youtube-character-limit | reference table by field: YouTube Help vs Data API vs guides + byte worked example | problem-led (5,000 characters in Help vs 5,000 bytes in the API, for Hindi) | prose | synthesized |`
- Review ledger: status=new, review_due=2026-11-26
- First-hand question: Do you have access to any YouTube channel you can test on (not an employer channel)? If so, paste a description of 1,700 Devanagari characters (about 5,100 UTF-8 bytes) into YouTube Studio's description box and note what the counter shows and whether it saves. The answer belongs in "YouTube Description Character Limit: Characters in Help, Bytes in the API".
- Hosts edited: x-character-limit (hub down-link, same paragraph as the batch-1 down-links), youtube-post-image-size (after the poll/quiz image line), instagram-hashtag-limit (end of "Do Hashtags Still Help Reach" section).

### LinkedIn draft (batch 2)

#### [DRAFTED] YouTube gives a description 5,000 characters. Its API counts 5,000 bytes.

YouTube's Help page says a video description can run to 5,000 characters. YouTube's own Data API reference says 5,000 bytes. In English those are the same. In Hindi they are not.

The arithmetic (UTF-8, checked 5 November 2026):

- An English letter is 1 byte, so 5,000 fit either way.
- A Devanagari, Bengali or Tamil letter is 3 bytes. 1,666 of them come to 4,998 bytes. One more and you are over.
- 5,000 Hindi characters, the figure Help gives, come to 15,000 bytes: three times the API's cap.

The rest of the field-by-field picture:

- Title: 100 characters, on both the Help page and the API reference.
- Tags: 500 in total, and the commas count. A tag with a space gets quotes, which count too.
- Hashtags: add more than 60 and YouTube ignores every one.
- Comment limit, playlist title, Shorts title: no YouTube page I read gives one. The 10,000 you see is a guide's number.

If you write descriptions in an Indian language, count bytes, not characters.

🔗 https://swapbiswas.com/blog/youtube-character-limit/?utm_source=linkedin&utm_medium=social&utm_campaign=youtube-character-limit

#YouTubeMarketing #ContentMarketing #VideoMarketing #Localization #MarketingOps

**Nano Banana image prompt (1200x628):** Renaissance-style still life, warm paper background #f6f4ef, muted earth tones, a brass balance scale on a wooden desk with a small stack of thin paper slips in one pan and a single thick bound ledger in the other, a quill and inkwell beside it, one vermilion ribbon tied around the ledger as the only accent, soft side light, no text in the image, 1200x628.

## Rejected (gated, not written)
- instagram character limit (I01): DROP. replug.io (#1, edited 13 Oct 2026) already publishes the "Help Center and Meta docs vs not published" table with sources. Head query answered zero-click; DR 55-90 top 5. Realistic 5-40 at #8-15.
- facebook ad character limit / meta ads primary text (I07): DROP. Meta's Ads Guide gives only per-placement "Text Recommendations". socialrails.com already publishes the recommended-vs-maximum debunk. Realistic 2-10.
- google ads headline character limit / RSA (I06): LONGTAIL_ONLY at 1-9/month, below the 10/month floor. No sub-DR-40 article in the top 5. Google's pages state 30/90/15.
- google business profile description character limit (I08): LONGTAIL_ONLY at 2-8/month, below the floor. "750" is answered on the SERP.
- Not gated (budget): pinterest pin title/description limit (weaker niche fit), youtube comment limit (folded into youtube-character-limit), instagram bio/username as standalone posts (folded into I01, which was dropped).
