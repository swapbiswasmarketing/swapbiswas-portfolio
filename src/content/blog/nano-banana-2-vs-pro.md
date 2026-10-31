---
title: "Nano Banana 2 vs Pro (and 2.1): Prices and Limits"
description: "Nano Banana 2 vs Pro, from Google's own pages on 25 October 2026: per-image API prices at every resolution, reference limits, Gemini app access and the new 2.1."
publishDate: 2026-10-25
category: [AI, Design]
img: /assets/stock-8.webp
img_alt: "Renaissance-style study of an open library with globes and folios, a red bookmark in the open volume"
faqs:
  - q: "Is Nano Banana Pro better than Nano Banana 2?"
    a: "Google calls Nano Banana Pro its premium choice for the most complex visual tasks and Nano Banana 2 its previous-generation workhorse. On paper Pro takes up to 3 style reference images (Nano Banana 2 takes none), 5 character references against 4 and 6 object references against 10, and costs $0.134 per 1K image against $0.067, per Google's pages on 25 October 2026."
  - q: "How much does Nano Banana Pro cost per image?"
    a: "Google's Gemini API pricing page listed Nano Banana Pro at $0.134 per image at 1K or 2K and $0.24 at 4K on 25 October 2026, or $0.067 and $0.12 through the Batch API. The API has no free tier for its image output."
  - q: "Is Nano Banana Pro free in the Gemini app?"
    a: "Not in the chat itself. Google's Gemini help pages list Redo with Pro for AI Plus, AI Pro and AI Ultra only. Google's overview and limits pages list Nano Banana 2 for accounts without a plan, though the plans page lists Flash-Lite as the free Gemini model and the help article pairs Flash-Lite with Nano Banana 2 Lite. The free column of the plans page lists limited access to Nano Banana Pro inside Google Flow."
  - q: "What is Nano Banana 2.1?"
    a: "Nano Banana 2.1 (gemini-nano-banana-2.1) is Google's update to Nano Banana 2, generally available in the Gemini API since 6 October 2026. Google recommends it for all new projects and lists its image output at $0.0336 per 1K image, about half of Nano Banana 2's $0.067."
  - q: "What resolution does Nano Banana 2 support?"
    a: "In the Gemini API, Nano Banana 2 generates 512px (0.5K), 1K, 2K and 4K images, and it is the only Nano Banana model with the 0.5K size. In the Gemini app, Google's help page says downloads are 2K with a Google AI plan and 1K without one, though the overview page's free card lists 2K resolution."
---

Google's image-generation docs let Nano Banana 2 take up to **10 object reference images** in one request and Nano Banana Pro up to **6**, while only Pro accepts style reference images, up to 3. At 1K resolution, Google's [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) lists Nano Banana 2 at **$0.067 per image** and Nano Banana Pro at **$0.134**, exactly twice as much. Those two gaps decide most Nano Banana 2 vs Pro choices before output quality comes into it.

Both figures come from Google's pages as I read them on 25 October 2026, and they point at a third model. Google made Nano Banana 2.1 generally available on 6 October 2026, deprecated Nano Banana 2 in the API the same day, and prices 2.1's image output at about half of Nano Banana 2's at 1K. For new work, I think the choice that matters now is 2.1 vs Pro, and Nano Banana 2 earns a place only for the 512px size that no other Nano Banana model produces.

I have run no quality or speed comparison of these models, so this post makes none. Prices and limits change often, so recheck the linked pages before you budget.

## Nano Banana 2 vs Pro: Which Should You Use?

Use Nano Banana Pro when the job needs style reference images, up to 5 character references or Google's "premium choice for the most complex visual tasks", at $0.134 per 1K image. Use Nano Banana 2 for 512px drafts at $0.045. For other new work, Google now points developers to Nano Banana 2.1, at $0.0336 per 1K image.

## Nano Banana Prices per Image: The October 2026 Lineup

The Gemini API prices image output in tokens and converts each resolution into a per-image figure. These are the paid-tier prices on the [pricing page](https://ai.google.dev/gemini-api/docs/pricing) (last updated 22 October 2026 when I read it), with the Batch API price in brackets:

| Model (API id) | 0.5K | 1K | 2K | 4K | Status, per Google's [changelog](https://ai.google.dev/gemini-api/docs/changelog) |
|---|---|---|---|---|---|
| Nano Banana 2.1 (`gemini-nano-banana-2.1`) | Not offered | $0.0336 ($0.0168) | $0.0504 ($0.0252) | $0.113 ($0.0567) | Generally available 6 October 2026 |
| Nano Banana 2 (`gemini-3.1-flash-image`) | $0.045 ($0.022) | $0.067 ($0.034) | $0.101 ($0.050) | $0.151 ($0.076) | Generally available 28 May 2026; deprecated 6 October 2026, no shutdown date announced |
| Nano Banana 2 Lite (`gemini-3.1-flash-lite-image`) | Not offered | $0.0336 ($0.0168) | Not offered | Not offered | Generally available 30 June 2026 |
| Nano Banana Pro (`gemini-3-pro-image`) | Not offered | $0.134 ($0.067) | $0.134 ($0.067) | $0.24 ($0.12) | Generally available 28 May 2026 |
| Nano Banana (`gemini-2.5-flash-image`) | One size: $0.039 ($0.0195) | | | | Deprecated; see the note below |

<img src="/assets/blog/nano-banana-2-vs-pro/price-per-image.webp" alt="Bar chart of Gemini API standard prices per image on 25 October 2026: at 1K, Nano Banana 2.1 and Nano Banana 2 Lite cost $0.0336, Nano Banana 2 $0.067 and Nano Banana Pro $0.134; at 2K, 2.1 costs $0.0504, Nano Banana 2 $0.101 and Pro $0.134; at 4K, 2.1 costs $0.113, Nano Banana 2 $0.151 and Pro $0.24" title="Nano Banana price per image by resolution, October 2026" width="1200" height="840" loading="lazy" decoding="async" />

What the table does not show on its own:

- **No free API tier.** Every image model's Free Tier column reads "Not available" on the pricing page, so each API image is billed.
- **The token rates behind the prices.** Image output costs $30 per million tokens on 2.1 and 2 Lite, $60 on Nano Banana 2 and $120 on Pro. A Pro image at 1K and at 2K both count as 1,120 tokens, which is why the two sizes cost the same.
- **Thinking is billed too.** The guide says the Gemini 3 image models reason before they draw, that this is "enabled by default and cannot be disabled in the API", and that thinking tokens are billed. The interim "thought images" are not charged. Text and thinking output is priced separately, at $7.50 per million tokens on 2.1, $3 on Nano Banana 2, $1.50 on 2 Lite and $12 on Pro. So 2.1's thinking costs 2.5 times Nano Banana 2's per token, and the half-price gap covers the image output only.
- **One token count disagrees.** The pricing page says a 4K image on 2.1 consumes 3,780 tokens, while the resolution table in the image guide lists 2,520 for the same size. My table uses the pricing page's $0.113, the higher figure, so check your first 4K invoice line.
- **Two shutdown dates for the original Nano Banana.** The pricing page's warning says `gemini-2.5-flash-image` "will be shut down on October 2, 2026", while Google's [deprecations page](https://ai.google.dev/gemini-api/docs/deprecations) lists 15 March 2027 and names Nano Banana 2 Lite as its replacement. Do not start new work on it either way.

Pro also has a Flex tier at the batch prices and a Priority tier at $216 per million image tokens, against $120 standard.

## Nano Banana 2 vs Pro Limits: Resolution, References and Inputs

The price gap buys different limits, not one model with more of everything. The [image generation guide](https://ai.google.dev/gemini-api/docs/image-generation) (last updated 9 October 2026 when I read it) describes each model in one line:

| Model | Google's description |
|---|---|
| Nano Banana 2.1 | "primary high-efficiency workhorse model for image generation and conversational editing" |
| Nano Banana 2 | "The previous-generation high-efficiency workhorse model", with "Recommended for all new projects to use Nano Banana 2.1" |
| Nano Banana 2 Lite | "The fastest and cheapest Gemini image model", "Not optimized for multiple reference inputs or multi-turn sequential editing" |
| Nano Banana Pro | "The premium choice for the most complex visual tasks" |

The same guide's per-model limits:

| Spec | Nano Banana 2.1 | Nano Banana 2 | Nano Banana 2 Lite | Nano Banana Pro |
|---|---|---|---|---|
| Resolutions | 1K, 2K, 4K | 0.5K (512px), 1K, 2K, 4K | 1K only | 1K, 2K, 4K |
| Object reference images | Up to 10 | Up to 10 | Up to 14 | Up to 6 |
| Character reference images | Up to 4 | Up to 4 | N/A | Up to 5 |
| Style reference images | N/A | N/A | N/A | Up to 3 |
| Video as input | Yes | Yes | Yes | No |
| Google Search grounding | Web and Image Search | Web and Image Search | Not supported | Web search |
| Thinking levels you can set | minimal, medium, high (default medium) | minimal, high (default minimal) | minimal, high (default minimal) | Not listed in the guide's thinking table |

The guide's section heading says Nano Banana models can mix up to 14 reference images in total; the rows above are the per-type caps. The guide's limitations section adds that Pro "supports 5 images with high fidelity, and up to 14 images in total", and that the 2.1 and Nano Banana 2 search grounding does not use real-world images of people from web search.

Image size at the same setting is identical across 2.1, 2 and Pro. At 16:9, a 1K image is **1376 x 768**, 2K is 2752 x 1536 and 4K is 5504 x 3072. Nano Banana 2's 0.5K option gives 688 x 384 at 16:9. The guide lists 16:9 among 2 Lite's aspect ratios but gives no pixel table for that model. All generated images carry a SynthID watermark, according to the same guide.

For a picture with words in it, the guide also says Gemini "works best if you first generate the text and then ask for an image with the text". When the words and numbers must be exact, as in a chart or a diagram, [Claude Code's routes to an image file](/blog/can-claude-code-generate-images/) include four that need no image model at all.

## Is Nano Banana Pro Free? What Each Gemini App Plan Gets

Not in the Gemini app chat. In the app, Pro is a "Redo with Pro" button for paid plans, and Google's overview and limits pages list Nano Banana 2 for the free tier. I read four Google pages logged out on 25 October 2026, the [Gemini image generation overview](https://gemini.google/overview/image-generation/?hl=en), the [image help article](https://support.google.com/gemini/answer/14286560?hl=en), the [Gemini Apps limits page](https://support.google.com/gemini/answer/16275805?hl=en) and [Google's plans page](https://gemini.google/us/subscriptions/?hl=en):

| Plan | Image models, as Google's pages put it on 25 October 2026 |
|---|---|
| No Google AI plan | Nano Banana 2, marked "Free" on the overview page, though the plans page lists "Access to our Flash-Lite model" and the help article pairs Flash-Lite with Nano Banana 2 Lite; downloads at 1K per the help article (the overview's free card lists "2K resolution"); no Redo with Pro; the plans page lists "limited access to Nano Banana Pro" only inside Google Flow, Google's creative studio |
| Google AI Plus | Nano Banana 2.1 plus Redo with Pro; downloads at 2K; usage limits "2x higher than standard limits" |
| Google AI Pro | Nano Banana 2.1 plus Redo with Pro; downloads at 2K; "4x higher than standard limits" |
| Google AI Ultra | Nano Banana 2.1 plus Redo with Pro; downloads at 2K; "5x or 20x higher than AI Pro limits depending on your subscription" |

The overview page says "Google AI Pro, Plus, Ultra users have access to our best image model, Nano Banana 2.1". The limits page still lists "Image generation with Nano Banana 2" under all four plans, and the help article never names 2.1, so Google's pages disagree on which model a paid plan's images use by default. None of the four pages gives an image count per day for any plan.

Rules from the help article that change how Pro behaves in the app:

1. The image model follows the Gemini model you choose. Flash-Lite uses Nano Banana 2 Lite, Flash or Pro uses Nano Banana 2, and the Pro redo needs the Gemini model set to Pro.
2. To use Pro, create the image first, then select More and Redo with Pro.
3. "If you reach your daily quota of Nano Banana 2 images, you can't redo any additional images with Nano Banana Pro."

The limits page refers to five-hour and weekly usage limits, after which you wait for a refresh or upgrade. Fetched logged out from an Indian connection on 25 October 2026, the English India version of the overview page (hl=en-IN) carried the same model lines as the US page. Indian readers comparing plan routes can start with [what Jio's Google AI Pro offer includes and what it costs after 18 months](/blog/jio-gemini-pro-offer/).

## Choose by Job: A Decision Table From Google's Specs

Each pick follows from a published limit or a list price:

| Job | Model the specs point to | The spec or price that decides it |
|---|---|---|
| High-volume rough drafts | Nano Banana 2 at 0.5K | The only 512px option, $0.045 per image or $0.022 in batch |
| Cheapest usable 1K image | Nano Banana 2.1 or 2 Lite | Both $0.0336 per image output; Lite's input ($0.25 per million tokens against $1.50) and thinking ($1.50 against $7.50) rates are lower, but it has no search grounding and is "Not optimized for multiple reference inputs" |
| 4K final asset | Nano Banana 2.1 | $0.113 against $0.151 on Nano Banana 2 and $0.24 on Pro |
| On-brand look from sample art | Nano Banana Pro | The only model that takes style reference images (up to 3) |
| One character across a series | Nano Banana Pro or 2.1 | 5 character references on Pro, 4 on 2.1 |
| Many products in one scene | Nano Banana 2.1 | 10 object references, against 6 on Pro; 2 Lite lists 14 but Google says it is "Not optimized for multiple reference inputs" |
| Infographic or text-heavy image in the Gemini app | Generate, then Redo with Pro | The help article says Pro "can provide additional detail, especially for images that use text rendering or for infographics" |
| Thumbnail or poster from a video | Nano Banana 2.1 | Pro does not accept video input |

## Worked Cost: 100 LinkedIn Images on Each Model

I write one Nano Banana image prompt for each LinkedIn post, all in one house style: a Renaissance still life on a warm paper background with one vermilion accent and no text, at 1200 x 628. The reason for that size is in [my LinkedIn post size guide](/blog/linkedin-post-size/).

On 2.1, Nano Banana 2 and Pro, a 1K image at 16:9 is 1376 x 768. Scaled to 1200 wide it becomes 1200 x 670, and a crop of 42 pixels of height gives 1200 x 628. The 0.5K option, at 688 x 384, is too small for that width without upscaling, so 1K is the cheapest size that fits. The guide gives no pixel size for 2 Lite's 1K output, so check one 2 Lite image before you count on the same crop. At Google's 1K list prices on 25 October 2026:

| Model | Per image, standard | 100 images, standard | Per image, batch | 100 images, batch |
|---|---|---|---|---|
| Nano Banana 2.1 | $0.0336 | **$3.36** | $0.0168 | $1.68 |
| Nano Banana 2 Lite (pixel size not published; see above) | $0.0336 | $3.36 | $0.0168 | $1.68 |
| Nano Banana 2 | $0.067 | $6.70 | $0.034 | $3.40 |
| Nano Banana Pro | $0.134 | **$13.40** | $0.067 | $6.70 |

The arithmetic is 100 times the per-image price. Pro costs $10.04 more than 2.1 per 100 standard images. Batch roughly halves every line on the pricing page, and the guide's batch section says batch jobs have a turnaround "of up to 24 hours". These totals cover the image output only: prompt tokens, thinking tokens and any image you regenerate are billed on top. The same 1376 x 768 frame also covers a 1200 x 630 link-preview card, and [the OG image size guide](/blog/og-image-size/) lists the size each platform asks for on its own page.

In the Gemini app there is no per-image fee. The same 100 images draw down your plan's usage limit instead, and Google publishes no image count for any plan. For a LinkedIn profile photo rather than a post image, [the guide to headshot prompts and Gemini model settings](/blog/prompt-for-linkedin-profile-picture/) recommends Flash or Pro over Flash-Lite, since a headshot often takes a second or third edit.

## Nano Banana 2 vs Pro Is Now a 2.1 vs Pro Decision

Read on Google's pages, Nano Banana 2 vs Pro has a short answer: Nano Banana 2 now sits behind 2.1 in Google's recommendation and price list, so price your next batch of images against 2.1 and Pro and keep Nano Banana 2 for 512px drafts.

Recheck the pricing page and the changelog before you commit a budget.
