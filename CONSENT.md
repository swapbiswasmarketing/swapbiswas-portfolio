# Consent implementation notes

Build-time only. Nothing in this file ships to a visitor. The runtime comments in
`src/components/MainHead.astro` and `src/layouts/BaseLayout.astro` are deliberately
short and point here, the same split `src/config/ads.mjs` uses for the ad loader.

## Scope

Ads and analytics. Consent Mode v2 gates AdSense, GTM/GA4 and Microsoft Clarity, for
visitors in the EEA, the UK and Switzerland only. Everyone else is untouched, and that
is a hard requirement, not a preference. Any change here that alters what a US or India
visitor experiences is a regression regardless of how correct it looks.

## The CMP is Google's built-in AdSense message, and that is not a compromise

AdSense will not accept an alternative shape. Google requires publishers serving ads to
the EEA and UK (since 16 Jan 2024) and Switzerland (since 31 Jul 2024) to use a CMP that
Google has certified and that integrates with the IAB TCF. Consent Mode is not an
accepted substitute: AdSense is absent from Google's list of tags with built-in consent
checks, so it reads the TCF string, not `gtag('consent', ...)`. Google's own European
regulations message is certified, operated by Google LLC under TCF CMP ID 300, and built
to TCF v2.3. It also retains the record of consent and provides revocation, which the EU
user consent policy separately requires and Consent Mode does not do.

One thing it cannot do is signal Microsoft Clarity. That is the only reason any consent
code exists in this repo at all.

Do not write "free" anywhere in user-facing copy. Google publishes no page that says the
message is free of charge; there is simply no documented charge.

## Advanced consent mode, not basic

Basic means withholding the Google tags until the user answers. Two reasons that is
wrong here:

1. `adsbygoogle.js` is what renders the consent message. Gating the AdSense loader on
   consent means the message never loads, consent can never be collected, and no ads
   serve in the EEA at all. The loader stays unconditional, and `ensureLoader()` in
   BaseLayout must keep re-asserting it after every head swap.
2. There is no server-side geo signal on this static site, so basic mode would have to
   withhold tags from everyone, which changes US and India behaviour. Out of scope by
   definition.

Advanced mode also keeps cookieless pings flowing from denied EEA sessions. Do not sell
that as recovered data: GA4 behavioural modeling needs 1,000 denied events per day AND
1,000 daily granted users for 7 of 28 days, and this site will not reach either, so a
denied session is simply absent from reports. Cookieless pings are the honest benefit,
modeled numbers are not.

## Why there is no unscoped default

Google's rule: a default command with no `region` applies to every visitor not covered by
a region-scoped one. Emitting an unscoped `granted` would be behaviourally identical to
today for non-EEA visitors, but it asserts a consent nobody gave, which is a claim we
cannot back (India's DPDP Act being the obvious counter-example), and it is a change we
do not need to make. Omitting it leaves those visitors in the "not set" state, which is
exactly the state every visitor is in today, before this change.

Expected and correct consequence: for a US or India visitor, the `gcd` parameter shows
the `l` letter (signal never set). That is the designed outcome, not a broken default.
Only read `l` as a bug if you see it from an EEA IP.

## The region list, and the rule that governs it

Google publishes no ISO list for the EEA, UK and Switzerland anywhere in the consent mode
docs. It publishes only prose, in the EU user consent policy: "This policy applies to end
users located in the EEA, the UK and Switzerland. The EEA comprises the EU Member States
and Iceland, Liechtenstein, and Norway." The list in MainHead is our expansion of that
prose and ours to maintain. 39 codes:

- 27 EU: AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE
- EEA remainder: IS LI NO
- UK: GB
- Switzerland: CH
- EU outermost regions and Aaland, which Google may resolve to their own alpha-2 code
  rather than the parent state: AX GF GP MQ RE YT MF

Greece is `GR` in ISO 3166-1, not the EU's own `EL`. Never write `EU`, `EEA` or `UK` as a
region code, and never lowercase them.

**THE RULE. A code belongs in this list only if Google also serves the European
regulations message for it.** Over-inclusion is not free insurance. A visitor who matches
our denied default but whom Google does not scope for the message has no banner, no
`consent update`, and no re-open control (the bridge is fail-closed on `gdprApplies`), so
they sit at `gcs=G100` forever with no user-facing remedy. That is permanent denial, not
coverage.

This is why **`GI` (Gibraltar) was removed**. Gibraltar left the EU with the UK on
31 Jan 2020, is not in the EEA, and is a British Overseas Territory rather than part of
the United Kingdom, so it is outside the policy's own definition of scope and Google will
not serve there. The outermost-region tail survives the same test: those are EU territory
where GDPR applies and Google does serve, so if Google resolves a Reunion visitor as `FR`
the `RE` entry is inert, and if it resolves as `RE` we are covered.

**Deliberately omitted, so nobody "fixes" it later:** `GG`, `JE`, `IM` (Guernsey, Jersey,
Isle of Man). They are Crown Dependencies, not part of the UK, with their own data
protection regimes, and they fail the rule above. `GI` fails it for the same reason.

## wait_for_update: 500

The CMP loads asynchronously, well after the tags. Without a hold, a returning EEA
visitor who consented last week has their first page_view sent under the denied default,
and Google documents the result: sessions missing `session_start`, incomplete reports.

500 is Google's documented example value. Google publishes no recommended value; do not
repeat the folklore that it recommends 500.

It is written inside the region-scoped command so that it should apply only to that
region. Verify that. If a hit from a US IP shows a ~500ms delay to the first
`/g/collect` that is not there today, the parameter is being applied globally and it must
be deleted, because a delay for non-EEA traffic is out of scope. Deleting the single line
is the whole rollback.

## The Clarity bridge: what it does, and what it does NOT do

What it does: reads `googlefc.getGoogleConsentModeValues()` and calls
`clarity('consentv2', ...)`, because Google's CMP will never tell Microsoft anything and
Clarity does not read Consent Mode. On a granted-to-denied transition it also calls
`clarity('consent', false)`, Microsoft's documented cookie-erase call, because `consentv2`
alone does not remove cookies already written.

The enum has FIVE members, not two:
`{ UNKNOWN: 0, GRANTED: 1, DENIED: 2, NOT_APPLICABLE: 3, NOT_CONFIGURED: 4 }`.
Map `=== GRANTED` to granted and everything else to denied. Testing `!== DENIED` sends
granted for a message that has not been answered yet (UNKNOWN) or was never published
(NOT_CONFIGURED), which writes Clarity cookies for a user who consented to nothing. The
whole path is additionally gated on `gdprApplies === true`, so a US visitor whose status
comes back NOT_APPLICABLE is never signalled at all and their cookies are never touched.

What it does NOT do, stated plainly because the privacy copy has to match: **it does not
stop Clarity recording.** `consentv2` governs cookies only. Microsoft's own verification
procedure says to confirm Clarity is still making `/collect` calls in no-consent mode. So
an EEA visitor who refuses is recorded cookielessly, with IP and user agent, and an EEA
visitor is recorded from `<head>` before any consent signal exists at all. See the risk
register for why the tag is not withheld and what the real remedies are.

## Callback re-registration, and why `_consentInit` alone is not enough

`ensureLoader()` at BaseLayout:436 re-appends `adsbygoogle.js` after every head swap,
because Astro's swap deletes the loader element MainHead created. So the funding-choices
kernel can boot again on navigation 2, 3, 4 and may hand out a fresh
`window.googlefc.callbackQueue`. A bridge guarded only by `window._consentInit` would
register its callbacks once, into an array that is then replaced, and silently stop
working mid-session. `register()` compares queue object identity on every
`astro:page-load` and re-pushes only when it actually changed. Assert this in testing;
it is the least visible failure mode in the whole design.

## What is deliberately NOT implemented

- **`gtag('consent','update', ...)`.** Google's CMP issues it, once both checkboxes under
  Privacy & messaging > European regulations settings > Manage consent mode settings are
  ticked. Writing our own would mean hand-mapping the TCF string to four signals, racing
  Google's own update, and owning that mapping bug forever. If the checkboxes are ever
  un-ticked, `gcs` will sit at `G100` for the whole EEA session; the bridge pushes
  `consent_misconfigured` into dataLayer when that happens, which is the only signal you
  will ever get.
- **`ads_data_redaction`.** Google documents its effect as scoped to Google Ads and
  Floodlight tags. This site runs neither. Set it only if Google Ads conversion tracking
  or remarketing is ever added.
- **`url_passthrough`.** The ad-click half needs a GCLID or DCLID, which this site never
  has. The analytics half would decorate internal links with `_gl` and friends, which has
  to be checked against routing, the service worker cache keys and canonicals, for a
  session-stitching benefit that is invisible at this traffic level.
- **`functionality_storage`, `personalization_storage`, `security_storage`.** Google
  documents these as "privacy parameters", not consent mode parameters. They are in no
  Google v2 snippet and absent from the gtag API reference entirely.
- **Clarity's project-level cookie toggle.** Leave it ON. Turning it off puts every
  region into consent mode, which strips cookies from US and India traffic. Clarity
  already enforces consent mode for EEA/UK/CH by its own geo rule (enforced since
  31 Oct 2025), so that population is already cookieless by default and the bridge only
  upgrades or downgrades it.

## Byte cost, measured

The three shipped blocks are 1,523 + 3,873 + 619 bytes raw, against 371 bytes replaced,
so roughly **+5.6 KB of raw HTML per page view**, compressing to about 1.9 KB standalone
with brotli and less than that in context. Do not repeat the earlier "roughly 1 KB"
estimate; it was wrong by more than 4x. By this repo's own standard that is a number
worth watching: `src/config/ads.mjs` records that moving a block out of the page saved
3,522 bytes per view.

The bridge is the bulk of it and it is the one piece that could move. It is off the
critical path and it does not need to be inline, so a bundled Astro `<script>` would land
in `/_astro/**` with a content hash, be fetched once and cached, and be deduped by `src`
rather than by textContent. That is the documented next step if page weight matters. It
is NOT done here because it adds a moving part to a change whose whole value is being
boring, and because the head block must stay inline regardless.

## The three invariants that break this silently

1. **Never interpolate anything into the MainHead analytics block.** Astro's ClientRouter
   dedupes inline scripts by exact `textContent`. Byte-identical text means the block runs
   once per session, which is what keeps the `denied` default from being re-emitted after
   the CMP granted. Interpolate a page value and the key changes on every page: a second
   GTM container load, a second Clarity tag, doubled page_views, and consent flipping back
   to denied mid-session. `window.__tagBoot` is the second line of defence, and a CSP
   nonce is safe because it is an attribute, not textContent.
2. **Never move the consent config into `/assets/`.** The service worker is cache-first
   with no revalidation for same-origin scripts and `/assets/**` is not content-hashed, so
   a returning visitor would keep a wrong region list until `CACHE_NAME` is bumped, and no
   deploy could fix it. Inline HTML is on the network-first navigate path. `/_astro/**` is
   content-hashed and would also be safe.
3. **Never rely on `hidden` alone to hide a consent control.** `[hidden] { display: none }`
   is a UA rule and loses to any author `display` on the same element. `.back-to-top` sets
   `display: inline-flex`, so the footer control needs the explicit
   `[data-consent-ui][hidden] { display: none; }` rule that now sits beside it. Nav.astro
   already carries the same patch for `.menu-button`. An attribute-based test
   (`:not([hidden])`) cannot catch this; assert computed visibility instead.

Related: `sw.js` caches every successful navigation but only ever reads `OFFLINE_URL` back
out, so cached HTML is dead storage today. If anyone converts that branch to
stale-while-revalidate, the head consent block becomes cached HTML and a bad region list
ships to returning visitors for the life of the cache.