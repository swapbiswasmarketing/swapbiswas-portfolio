---
title: "Threads Character Limit: 500 Per Post, 10,000 Attached"
description: "The Threads character limit is 500 per post and 10,000 in a text attachment. Here is each Threads field, its limit, and whether Meta or only a guide states it."
publishDate: 2026-11-05
category: [Marketing]
img: /assets/stock-6.webp
img_alt: "Renaissance-style landscape of a mountain path climbing toward a monastery in morning light, a red cloak on the trail"
faqs:
  - q: "What is the character limit on Threads?"
    a: "500 characters per post, per Meta's Threads API docs as of November 2026. A text-only post can also carry a text attachment of up to 10,000 characters and a link."
  - q: "Did Threads raise its character limit to 10,000?"
    a: "No. The post itself still stops at 500 characters. On 4 September 2025 Meta began rolling out a way to attach up to 10,000 characters of text to a post, and its API docs allow that attachment on text-only posts without a poll."
  - q: "What is the Threads bio character limit?"
    a: "Guides print 150: UniLink on 2 May 2026 and TypeCount in its 7 September 2026 update. None of the 10 Meta developer and newsroom pages I read on 5 November 2026 gives a bio figure, and Meta's Help Center article on editing a Threads profile returned no article text to a plain request."
  - q: "Do emojis count as more than one character on Threads?"
    a: "Yes. Meta's API docs say emojis are counted as the number of UTF-8 bytes. A thumbs-up emoji is 4 bytes and a skin-toned thumbs-up is 8, so on that rule they use 4 and 8 of the 500."
  - q: "How many links can you put in a Threads post?"
    a: "5 unique URLs. From 22 December 2025, Meta's API rejects a post with more than 5 links with the error THREADS_API__LINK_LIMIT_EXCEEDED, and a URL repeated in the text and the link attachment counts once."
---

X caps a post at a weighted 280 characters, with links and emoji priced differently, as set out in [how X counts its 280](/blog/x-character-limit/). The Threads character limit is 500 per post, the figure Meta printed in its [July 2023 launch post](https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/) ("posts can be up to 500 characters long") and still prints in its developer docs as of November 2026. The second Threads number in circulation, 10,000, is a different field: a text attachment, which adds longer text to a 500-character post.

- **Post:** 500 characters, with each emoji counted as its UTF-8 bytes (Meta's API docs)
- **Text attachment:** up to 10,000 characters plus one link, on text-only posts (Meta's API docs and newsroom)
- **Links:** 5 unique URLs per post; since 22 December 2025 the API rejects posts with more
- **Topic tag:** one per post, 1 to 50 characters

I treat a Threads limit as settled when a Meta page prints it, and on that test the list above holds, along with poll options, alt text, carousels and video length. The bio's 150, the 30-character name fields and the 1,000-character DM that guides print fail it: none of the 10 Meta developer and newsroom pages I read on 5 November 2026 states them, so this post marks each one with the guide that does.

## What Is the Threads Character Limit?

**500 characters per text post.** Meta's [Threads API overview](https://developers.facebook.com/documentation/threads/overview), updated 22 December 2025, says under Other limitations: "Text posts are limited to 500 characters." The [Threads Posts page](https://developers.facebook.com/documentation/threads/posts) repeats it word for word under Limitations and adds: "Emojis are counted as the number of UTF-8 bytes."

| Source | Date on the page | What it says |
|---|---|---|
| Meta newsroom, Introducing Threads | 5 July 2023 | "posts can be up to 500 characters long and include links, photos, and videos up to 5 minutes in length" |
| Threads API overview | Updated 22 December 2025 | "Text posts are limited to 500 characters." |
| Threads Posts page | Read 5 November 2026 | "Text posts are limited to 500 characters." |
| [Meta newsroom, text attachments](https://about.fb.com/news/2025/09/attach-text-threads-posts-share-longer-perspectives/) | 4 September 2025, updated 22 October 2025 | Text attachments exist for "when 500 characters isn't enough" |

None of the Meta pages I read gives a word count. As a rough guide from this post's own copy, the four bullets above hold 56 words in 318 characters, spaces included, which puts 500 characters near 88 words of similar English. Count characters, since that is what Meta limits.

## Threads Limits by Field, and Who States Each One

Every row was read on 5 November 2026. "Meta API docs" means a page on developers.facebook.com, which describes what the Threads API accepts; for most of these fields no Meta page I read gives a separate figure for the app. "Guide only" means no Meta page I read states the figure.

| Field | Limit | Stated by | Where |
|---|---|---|---|
| Text post | 500 characters | Meta API docs and newsroom | Overview, Posts, newsroom 2023 |
| Emoji in a post | Counted as UTF-8 bytes | Meta API docs | Posts, [publishing reference](https://developers.facebook.com/documentation/threads/reference/publishing) |
| Text attachment | 10,000 characters plus a link | Meta API docs and newsroom | [Text Attachments](https://developers.facebook.com/documentation/threads/create-posts/text-attachments), newsroom 2025 |
| Links per post | 5 unique URLs | Meta API docs | Posts, Text Attachments |
| Topic tag | 1 to 50 characters, one per post | Meta API docs | Posts |
| Poll options | 2 to 4 | Meta API docs | [Polls](https://developers.facebook.com/documentation/threads/create-posts/polls) |
| Poll option length | 1 to 25 characters each | Meta API docs | Polls |
| Poll duration | 24 hours | Meta newsroom | Introducing Threads, 26 October 2023 update |
| Image or video alt text | 1,000 characters | Meta API docs | Publishing reference |
| Carousel | 2 to 20 images or videos | Meta API docs | Overview, Posts |
| Video | 5 minutes, 1 GB | Meta API docs | Overview, Posts |
| Image | 8 MB, JPEG or PNG | Meta API docs | Overview, Posts |
| Bio | 150 characters | Guide only | [UniLink](https://unil.ink/blog/threads-character-limit-2026), [TypeCount](https://typecount.com/blog/social-media-character-limits) |
| Display name | 30 characters | Guide only | UniLink |
| Username | 30 characters | Guide only | UniLink |
| Bio link title | 30 characters | Guide only | UniLink |
| Direct message | 1,000 characters | Guide only | UniLink |
| Reply, as its own figure | 500 characters | Guide only | UniLink, TypeCount |
| Posts in a multi-post thread | "No upper limit" | Guide only | UniLink |

UniLink also prints 1,000 for alt text, and on that field Meta agrees: the publishing reference says "The maximum length of `alt_text` is 1,000 characters."

<img src="/assets/blog/threads-character-limit/who-states-threads-limits.webp" alt="Two cards comparing Threads limits. Stated on Meta's pages: post 500, text attachment 10,000, unique links per post 5, topic tag 1 to 50, poll option 1 to 25 with 2 to 4 options, image or video alt text 1,000, carousel 2 to 20 items, video 5 minutes. Printed by guides only: bio 150, display name 30, username 30, bio link title 30, direct message 1,000, reply as a separate figure 500" title="Threads limits, split by who states them" width="1200" height="651" loading="lazy" decoding="async" />

## Does the 10,000-Character Text Attachment Replace the 500?

**No.** The post stays at 500 characters, and the 10,000 belongs to an attachment on it. Meta's newsroom post of 4 September 2025 says "we're rolling out a way to attach up to 10,000 characters of text to a post", and the Text Attachments API page says they let you "share long-form writing in a post or a reply with up to 10,000 characters and a link."

The rules on that API page:

- The `plaintext` field takes "a maximum of 10,000 characters."
- "Text attachments can only be attached to text-only posts", so no image, video or carousel.
- "Text attachments cannot be attached to a post that has a poll."
- If the main post already has a link attachment, the text attachment cannot add its own.
- Styling covers bold, italic, highlight, underline and strikethrough.
- The 5-link cap applies across the post and its attachment.

Two pages misread the attachment in opposite directions:

| Page | What it says | What Meta's pages say |
|---|---|---|
| [t2online, 4 September 2025](https://t2online.in/tech/tech-news/threads-raises-character-limit-for-posts-from-500-to-10-000/2000944) | Headline: "Threads raises character limit for posts from 500 to 10,000" | The post limit is still 500; the 10,000 is an attachment |
| UniLink, 2 May 2026 | "Can I post longer than 500 chars on Threads? Not in a single post." | One post can carry 500 characters plus a 10,000-character attachment |

t2online's body has it both ways: its first line says "Users now have 10,000 characters to play around with when posting on Threads", and its second describes the change correctly as letting users "append text snippets of up to 10,000 characters". For a long take, write the hook in the 500 and the full text in the attachment, and keep the post text-only.

## How Threads Counts Emoji Against the 500

Meta's rule is one sentence on the Posts page and in the publishing reference: "For the post character limit, emojis are counted as the number of UTF-8 bytes." Neither page gives a byte rule for anything other than emoji. For reference, these are the UTF-8 byte lengths Node 22's Buffer.byteLength returned for this post:

| Emoji | Code points | UTF-8 bytes |
|---|---|---|
| Thumbs up | U+1F44D | 4 |
| Red heart, emoji form | U+2764 U+FE0F | 6 |
| Thumbs up, medium skin tone | U+1F44D U+1F3FD | 8 |
| Flag of India | U+1F1EE U+1F1F3 | 8 |
| Family: man, woman, girl, boy | 7 code points joined by U+200D | 25 |

Two cautions:

- UniLink says "Most emojis count as 1 character on Threads", which does not match Meta's byte rule.
- The words "number of UTF-8 bytes" on the Posts page link to [grapheme-splitter on npm](https://www.npmjs.com/package/grapheme-splitter), a library its registry entry describes as breaking "strings into their individual user-perceived characters". That library counts visible characters, so do not use it to count bytes.

Taras Shynkarenko's [AdaptlyPost guide](https://adaptlypost.com/blog/threads-character-limit) works through a full post where emoji bytes push a draft past 500, if you want the arithmetic at post length.

## How Many Links Can a Threads Post Have?

**Five unique URLs.** The Posts page says "The number of links is restricted to 5 or fewer", and adds a dated warning: "Starting December 22, 2025, Threads posts containing more than 5 links will fail to post" with the error code `THREADS_API__LINK_LIMIT_EXCEEDED`.

Meta's counting examples, from the same page:

| Text field contains | Link attachment | Links counted |
|---|---|---|
| www.facebook.com | www.facebook.com | 1 |
| www.instagram.com and www.threads.com | www.facebook.com | 3 |
| www.example.com twice and www.test.com | www.test.com | 2 |

The rules behind those rows: every unique URL in the text counts, a link attachment that differs from them counts as one more, and a repeated URL counts once. If you send no `link_attachment`, the first link in a text-only post becomes the preview card. Link attachments work on text-only posts, not on image, video or carousel posts.

## Topic Tags and Polls on Threads

Topic tags, from the Posts page:

- "Topic tags must be at least 1 character and no more than 50 characters long."
- "Only one topic tag is allowed per post"; through the API, the first valid in-text tag becomes the tag.
- Periods and ampersands are not allowed. In-text tags also end at a space, @, !, ?, comma, semicolon or colon.
- A hash sign before a whole number, such as #1, does not become a tag.

Threads takes one topic tag per post; an Instagram caption takes up to five hashtags, per [the Instagram hashtag limit and its sources](/blog/instagram-hashtag-limit/).

Polls, from the Polls page and the newsroom:

- "at least 2 options and no more than 4 options"
- "Each option must be between 1 and 25 characters long."
- "You can attach polls only to text-only posts", and a poll post cannot take a text attachment.
- The poll "will run for 24 hours", per Meta's 26 October 2023 newsroom update.

At 25 characters, a Threads poll option is shorter than YouTube's text poll answers, which run to 65 in [YouTube's post image and poll specs](/blog/youtube-post-image-size/).

## Threads Bio Character Limit and Other Figures Meta Does Not Publish

The bio limit has no Meta source I could read. The pages I checked on 5 November 2026 were the API overview, Posts, Text Attachments, Polls, the publishing reference, Accessibility, Reply management, Create Replies and the 2023 and 2025 newsroom posts; none contains "bio" or "biography". Meta's Help Center article [Edit your profile on Threads](https://help.instagram.com/759628745637994/) says in its page description that "You can update some of your profile information on Threads, including your bio, links and profile picture", but its body did not load for a plain request, so I cannot say whether it states a number.

| Field | Figure | Who prints it | Date on the guide |
|---|---|---|---|
| Bio | 150 | UniLink; TypeCount, which says Threads "ties its 150-character bio to Instagram" | 2 May 2026; updated 7 September 2026 |
| Display name | 30 | UniLink | 2 May 2026 |
| Username | 30 | UniLink | 2 May 2026 |
| Bio link title | 30 ("Custom CTA for your bio link") | UniLink | 2 May 2026 |
| Direct message | 1,000 | UniLink | 2 May 2026 |
| Reply | 500 | UniLink ("Same as post"); TypeCount | 2 May 2026; 7 September 2026 |

Notes on the table:

- Username: Meta's 2023 launch post says "Your Instagram username and verification will carry over", so the handle comes from Instagram. It gives no length.
- Reply: Meta's Create Replies page creates a reply through the same POST /threads endpoint as a post, with a `reply_to_id` parameter, and states no separate character figure for it.
- Bio: writing to 150 is the safe choice while no Meta page settles it. For the same split on LinkedIn, see [which LinkedIn limits LinkedIn itself states](/blog/linkedin-headline-character-limit/).

## Threads Media and API Rate Limits

These come from the API overview and the Posts page. The media specs describe what the API accepts, and the rate limits are API limits (the overview's wording is "250 API-published posts").

| Item | Limit |
|---|---|
| Carousel | 2 to 20 images, videos or a mix; counts as one post |
| Image | JPEG or PNG, 8 MB, width 320 to 1440 (scaled), aspect ratio up to 10:1 |
| Video | MOV or MP4, 300 seconds (5 minutes), 1 GB, 23 to 60 FPS |
| Published posts via API | 250 per profile per 24-hour moving period |
| Replies via API | 1,000 per 24 hours |
| Deletions via API | 100 per 24 hours |
| Location searches via API | 500 per 24 hours |

LinkedIn's image and video specs for a post are in [my LinkedIn post size reference](/blog/linkedin-post-size/).

## Recheck the Threads Character Limit Each Quarter

The dates on these pages show how often Threads rules move: Meta announced text attachments on 4 September 2025, updated that newsroom post on 22 October 2025, and the 5-link enforcement began on 22 December 2025, the date the API overview shows as its last update. Recheck the overview, the Posts page and the Text Attachments page each quarter, and retry the Help Center profile article until it loads.

On Meta's own pages, the Threads character limit is 500 per post, with a 10,000-character attachment for anything longer, 5 links, one 50-character topic tag and 25-character poll options. Write your next bio to 150 and treat that number as a guide's figure until Meta prints one.
