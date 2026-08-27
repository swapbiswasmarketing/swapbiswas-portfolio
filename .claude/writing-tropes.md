# Writing tropes to avoid (site rulebook)

Source: [tropes.fyi/tropes-md](https://tropes.fyi/tropes-md) - 49 catalogued AI-writing tells, checked 2026-08-27. This file is the swapbiswas.com version: what each trope looks like in a post here, the carve-outs that keep the SEO/AEO structure legal, and which gate catches it. `BLOG_INSTRUCTIONS.md` still wins on any conflict.

Two enforcement layers, both mandatory for every post that ships:

1. **Mechanical gate** - `node scripts/lint-tropes.cjs src/content/blog/<slug>.md`. The last line must read `TROPE GATE: PASS`. `FAIL` lines block publishing. `WARN` lines are not optional noise: read each one and either fix it or defend it in one line in the report ("WARN L84 all-in-one: quoting the vendor's own tagline").
2. **Judgment audit** - the tropes no regex can see, answered in writing at `/swapblog` Step 11 (section D below).

The source's own rule: one instance of most tropes is fine; the tell is repetition and stacking. So the gate is zero-tolerance for vocabulary and signposting (there is never a reason to write "delve"), and threshold-based for rhythm devices (one "It's not X, it's Y" per post, not five).

## A. Hard bans - any hit is a FAIL

| Trope | Looks like | Write instead |
|---|---|---|
| Em-dashes, curly quotes, arrows | `—`, `--` (the ASCII stand-in), `“ ”`, `→`, `•` | plain ASCII: ` - `, straight quotes, spell out "leads to" |
| Signposted conclusion | "In conclusion", "To sum up", "In summary", "To conclude", "In closing", "Wrapping up", "Long story short", "Net-net", "The bottom line is", "At the end of the day", sentence-opening "Bottom line:", "Key takeaway:", "Final thought:", "Ultimately," | just end; the last paragraph is the conclusion |
| Fractal summary | sentence-initial "In this post ...", "As we've seen", "To recap", "as discussed above" | delete the sentence; say the thing once |
| Tie-back | "So, to answer your question", "To bring it back to", sentence-initial "In short,", "which brings me back to" | stop once the answer is given |
| Filler transitions | "It's worth noting", "It's also worth adding", "It should be noted", "It's important to note that", "It bears mentioning", "Needless to say", "Of note,", sentence-opening "Importantly," / "Interestingly," / "Notably," | cut the frame, keep the claim |
| False suspense | "Here's the kicker/thing/catch", "But here's what most people miss", "Nobody talks about this", "The uncomfortable truth is", "This is where it gets interesting", "The part nobody mentions" | state the point without the drum roll |
| Teacher voice | "Let's dive in", "Let's break this down", "Let's unpack", "Let's get into it", "Let's start by", "Let me walk you through" | start |
| Patronizing analogy | "Think of it as ...", "Picture this:", "It's like a Swiss Army knife for ...", "It's basically a CRM for battlecards", "The analogy I use is", "A useful mental model:", "the marketing equivalent of a dragnet" | explain the thing itself ("Treat it as a checklist" is an instruction, not an analogy, and is fine) |
| Futurism invitation | "Imagine a world where ...", "Now imagine", "Imagine if you could" | describe what happens today, with a name and a number |
| Zero-information opener | "In today's fast-paced digital landscape", "It's no secret that", "We all know" | open with the specific: a stat, a scenario, a claim |
| Acknowledge-then-dismiss | "Despite these challenges, the initiative continues to thrive" | either the challenge matters or it goes |
| Reasoning leak | "I want to be clear about my role here", "To be clear,", "Before we go further", "It is worth being precise", "I'll be careful with", "which is to say", "One caveat before" | delete; the reader never needed the voiceover |
| Vague attribution | "Studies show", "Research suggests", "Experts agree", "The data says", "Most teams find", "Seasoned operators agree", "The consensus is", "Conventional wisdom says", "A growing body of research", "The data is clear" | a linked, named primary source (which then enters the Step 10 fact-check table) or a first-person claim ("In the launches I've run ..."). A brand, year, or link in the same sentence counts as named |
| "Not X. Not Y. Just Z." | "Not a bug. Not a feature. A design flaw.", "It is not a tagline. It is not a mission statement. It is ..." | state Z |
| Model vocabulary | delve, utilize, leverage (verb), robust, streamline, harness the, tapestry, paradigm, synergy, treasure trove, testament to, realm, in the realm of, navigate the landscape, ever-evolving, fast-paced, multifaceted, myriad, plethora, embark on, foster a culture, underscores the importance, a deeper understanding of, crucial role, pivotal moment, vibrant, meticulous, intricate, daunting, beacon, bustling, cannot be overstated, **load-bearing** | the plain word: use, build, strong, simplify, field, important |

"load-bearing" is called out because it is the current-generation tell: on the 2026-08-27 baseline it appeared 12 times across 9 posts, all written in 2026, and was the single most common hard-fail hit in the corpus.

## B. Thresholds - rhythm devices the gate counts

| Device | Limit per post | Why the limit, not a ban |
|---|---|---|
| Negative parallelism ("It's not X. It's Y.", "X was never A; it was B.", "This isn't a tactic, it's a philosophy.") | max 2; 3+ fails | one is a legitimate contrast; the detector keys on the negated copula plus a pivot clause, and on the 2026-08-27 baseline found it in 64 posts (24 over the limit), so never add one casually |
| Self-posed drama question ("The result? Devastating.", "Sound familiar?") | max 1; 2+ fails | the source lists it as fading; still a tell when stacked |
| Standalone fragment paragraphs ("Done.", "Three groups.") | max 2; 3+ fails | one fragment reads as emphasis, three reads as a model writing for a 6th-grade reading level |
| Staccato runs (3+ consecutive sentences of 4 words or fewer) | max 1 run; 2+ fails | same |
| Magic adverbs (quietly, silently, subtly, "the quiet part", deeply, profoundly, fundamentally, remarkably, arguably, genuinely, truly, certainly, incredibly, surprisingly, undeniably, inherently, invariably, materially, wildly, radically, strikingly, meaningfully, "unusually [anything]", "without fanfare") | 3 per 1,000 words; more fails | "quietly" alone appears 72 times across 43 post bodies. Delete the adverb or replace it with the number that made it feel significant |
| Editorial Wh-headings ("Where the market is stuck", "What we do differently") | max 3; 4+ fails | see the carve-out for keyword-form headings in section E |

## C. Warnings - mechanical hints that need a human read

The script prints these as `WARN`. Fix or defend each one; do not skim past them.

- **Promotional language** - all-in-one, best-in-class, world-class, seamless, effortless, frictionless, unparalleled, unprecedented, cutting-edge, empower, elevate, "unlock the power/potential", game-changer, holistic. Describe what the thing does with a number or a named example.
- **"landscape" / "ecosystem"** as a generic field-word ("the marketing landscape", "the search ecosystem"). Say market, category, stack, or the specific thing. `competitive landscape` is exempt (term of art).
- **"deep dive" / "dive into"** - model vocabulary in its own right; say "breakdown", "detail", or name the section by content.
- **"Serves as" dodge** - serves as, stands as, marks a pivotal, represents a shift. Use "is".
- **False ranges** - "from innovation to implementation to cultural transformation" where nothing sits on a scale. List them plainly.
- **Superficial "-ing" tails** - ", highlighting its importance", ", underscoring the need", ", contributing to a broader shift", ", paving the way for", ", setting the stage for". Cut, or make it a sourced sentence.
- **Appeal to familiarity** - famously, notoriously, "as we all know", "a classic mistake", sentence-opening "Obviously," / "Clearly,". Show the evidence or drop the word.
- **False vulnerability** - "And yes,", "Let's be honest:", "Full disclosure:", "This isn't a rant". Real candour is a specific, uncomfortable detail, not a frame.
- **Grandiose stakes** - "changes everything", "fundamentally reshape", seismic, tectonic, transformative, "a new era of", inflection point. A pricing page is not the fate of civilisation.
- **Preamble announcers** - "Three constraints shape the design.", "The more important point is ...". Delete the announcer; the items were the point.
- **Compulsive counting in prose** - "Here are five reasons", "There are three ways". The list shows its own count. Listicle titles and H2s are exempt.
- **Enumerated prose** - paragraphs opening "The first wall ... The second wall ... The third ...". Use a real list or write connected paragraphs.
- **Anaphora** - three consecutive sentences opening with the same words ("They assume ... They assume ... They assume ...", "Every fix ... Every field ... Every owner ...", "No databases. No PHP. No server."). Vary the openers. Question and conditional lists ("Does X? Does Y?", "If it clears 70 ... If it lands under 40 ...") are not counted.
- **In-paragraph fragments** - "The brief shipped on a Friday. Openly. On purpose." Two-word sentences hung after a full one count toward the same fragment limit as standalone fragment paragraphs.
- **Bold-first bullets** - two or more lists of five or more bullets where every bullet opens with a bold label. One such list per post is fine; the tell is every list.
- **Bold or italic standalone one-liners** - "**Every metric that rewards volume punishes leverage.**" Slide-bait aphorism check: does the line carry a fact a reader can act on? If not, cut it.
- **Forced simile** - "is like trying to ...", "is like asking ...". Keep a simile only when it clarifies something the literal sentence could not.
- **Invented concept labels** - "the supervision paradox", "the acceleration trap", "workload creep", "the attention divide", "the content spiral", "call it the approval tax" used as if established. Make the argument, or attribute the term to whoever coined it. Real terms (scope creep, feature creep, crawl trap, digital divide, death spiral, switching costs, technical debt) and plain English ("the same trap", "a common trap") are exempt.
- **Editorial "we"** - "As we move forward", "our focus shifts to", "we've all been there", or "we/our/us" above ~12 per 1,000 words. The site voice is first-person "I"; "we" is fine only when it names a real team ("at LambdaTest we ran ...").
- **Historical-analogy runs** - "Apple didn't build Uber. Facebook didn't build Spotify.", "every major platform shift". Borrowed authority; cut.
- **"Where it actually lives"** - "where the complexity actually lives / sits / happens". A location metaphor standing in for the answer. Give the answer.
- **Mixed heading case** - Title Case and sentence case H2/H3 in the same post. Pick one (site convention: Title Case).

## D. Judgment-only tropes - the Step 11 self-audit

No regex sees these. At `/swapblog` Step 11 (and `/swapblog-optimize` Step 4 for any section you touched), answer in writing, one line each, "none" or what you fixed:

1. **Premise stacking** - a point (often a question) preceded by a paragraph of its own evidence, so it lands after it has already been made twice. Ask the question first, then the evidence.
2. **Belaboring the unnecessary** - defending an uncontroversial point against an objection nobody raised ("I don't mean any of that as cynicism about ..."). Cut.
3. **Self-echo** - a phrase from earlier reused "as a payoff" ("quietly become ... quietly disappear"). One use per phrase.
4. **Synonym cycling** - the dashboard becomes the interface, then the portal, then the analytics hub. One word per referent, repeated as often as needed.
5. **One-point dilution** - one thesis restated eight ways across 2,000 words. If a section adds no new fact, decision rule, or example, delete it. Word-count targets are floors for completeness, not padding goals.
6. **Content duplication** - a paragraph that reappears reworded later. Search your own draft for the load-bearing nouns of each section.
7. **Never-ending conclusion** - the last paragraph stacking clause after clause because the model will not stop. Land one point. The final sentence should be short and contain a noun the reader can act on.
8. **Comma-clipped tails** - "... above the content, and save." / "... asked forty times, mentoring." A short tail hung off a comma instead of landing the point. Finish the sentence or split it.
9. **Rule-of-three stacking** - one tricolon is fine; three back-to-back ("Products impress; platforms empower. Products solve; platforms create. Products scale; platforms ...") is a pattern-recognition failure. Also watch for lists that are always exactly three items.
10. **Quotable one-liners** (unformatted) - a sentence built to be lifted out of context that carries no information. The bold/italic version is caught mechanically; the plain-text version is on you.
11. **Forced figurative language** - a coined metaphor reached for because it sounds clever, especially one that repurposes a word from the topic. Delete if the literal sentence works.
12. **Grandiose stakes / promotional tone** as a whole-piece register, not a single word - does the post sell the subject or describe it?

## E. Site carve-outs - do not "fix" these

- **Keyword-form headings are exempt from the Wh-header rule.** "What Is an Ideal Customer Profile?", "How to Build a Battlecard", "When to Use ABM", "Why Positioning Fails", "Where ABM Wins" carry search intent and are the reason the page ranks. The script treats a heading as keyword-bearing when it contains the post's slug words (two of them, or one distinctive one such as "ABM"), or has a "what is X / how to X" shape with a real noun after it. The trope is the *editorial* Wh-heading with no keyword and no question mark ("What we do differently", "Where the market is stuck today", "What This Means", "What To Do Instead", "Why This Matters"). Rewrite those to state the finding: "ABM wins on deal size; inbound wins on volume".
- **The one head-question H2 required by `/swapblog` Step 8 for AEO** is exempt (it ends with `?` and the first sentence under it is the answer).
- **FAQ questions** in `faqs:` are real queries and are not scanned. FAQ **answers** are scanned - they render on the page and in the FAQPage schema.
- **Listicle numbers** in the title and H2s ("7 ABM Campaign Examples") are exempt. Counting in body prose ("Here are seven examples") is not.
- **"Competitive landscape"** is a PMM term of art and a target keyword. Generic "landscape" is not.
- **Title Case H2/H3** is the established site convention (113 of 125 posts have at least one Title Case H2). tropes.fyi flags Title Case as a tell; the trade-off here is corpus consistency. Do not mix cases inside one post.
- **Bold key stats** (`BLOG_INSTRUCTIONS.md`) stays. The trope is a bold *sentence* standing alone as an aphorism (ending in a full stop), and lists where *every* bullet opens bold. A bold list introducer ending in ":" and a bold scripted question ending in "?" are not aphorisms.
- **One bold-label list per post** is fine. Two or more is the tell. The source flags every such list; the site allows one because `BLOG_INSTRUCTIONS.md` asks for scannable, bold-labelled structure in how-to posts and a single labelled list is how a definition block reads best on the page.
- **"framework" and "gated"** are PMM terms of art (positioning framework, gated content) and are not scanned, even though the source lists them among the fashionable ornate nouns.
- **Quoted material is not the author's voice.** Text inside double quotes (and space-delimited single quotes) - sample prompts, competitor copy, scripted rep questions, use-mention of a banned word - is skipped by every rule except the unicode check. Do not quote your own prose to dodge the gate; the judgment audit still applies.
- **"leverage" as a noun** (pricing leverage, negotiating leverage) is fine. As a verb it is banned.
- **First-person "I"** is the site voice. "we" is fine when it names a real team.
- **Attributed frameworks** (April Dunford's positioning, Bob Moesta's JTBD) and **your own original framework** presented as yours (the Step 4 citability asset) are fine. The trope is a coined "X paradox / X trap" used as if it were an established term.
- **Quoted vendor copy** ("Salesforce calls itself 'the all-in-one customer platform'") may contain promotional words; defend the WARN in the report rather than rewriting the quote.

## F. The rewrite moves

| When the gate flags | Do this |
|---|---|
| Negative parallelism | State Y directly. If the contrast matters, one sentence with "rather than" or "instead of" |
| Vague attribution | Name the source and link it (into the Step 10 table), or make it first-person and specific |
| Magic adverb | Delete it, or replace it with the number or example that made it feel significant |
| Fragment / staccato run | Merge into one sentence with a subordinate clause |
| Signpost / preamble / reasoning leak | Delete the sentence; the next sentence was the point |
| Quotable one-liner | Add the fact that makes it true, or delete it |
| Editorial Wh-heading | A heading that states the finding, or a real question whose answer is the first sentence beneath it |
| Promotional word | The thing it does, with a number or a named example |
| Bold-first list | Plain bullets, a table, or two sentences of prose |
| "we" | "I", or the named team |

## G. Running the gate

```
# one post (the /swapblog Step 13 gate) - read the LAST line
node scripts/lint-tropes.cjs src/content/blog/<slug>.md

# optimize pass (the /swapblog-optimize gate): snapshot before editing, then compare
node scripts/lint-tropes.cjs src/content/blog/<slug>.md --json > /tmp/tropes-<slug>.json
# ... make the edit ...
node scripts/lint-tropes.cjs src/content/blog/<slug>.md --baseline=/tmp/tropes-<slug>.json

# whole corpus, ranked worst-first (audit / picking a de-slop target)
node scripts/lint-tropes.cjs --all
```

Exit codes: `0` = PASS (no FAIL; WARN allowed), `1` = FAIL, `2` = usage or tooling error (prints a `lint-tropes:` message and no gate line - never a pass). In baseline mode the gate fails only on **new** FAIL hits: line-level hits are matched by trope and snippet, post-level density hits (negative parallelism, magic adverbs, fragments, Wh-headings) by count, so inserting a clean paragraph that shifts line numbers does not re-trigger them. Any FAIL inside text you touched must still be fixed even if it was pre-existing. `--strict` promotes WARN to FAIL; `--json` gives machine output; `--all` works from any directory. An unclosed code fence or an empty body is itself a FAIL (a gate that scanned nothing is not a pass). Run it in the Bash tool; interpret by the last line and the exit code, never by "looked clean".

Corpus baseline on 2026-08-27, before any de-slop work and after the gate was adversarially tuned: 67 of 125 posts had at least one FAIL hit (120 FAIL, 509 WARN in total); the biggest single causes were stacked negative parallelism (24 posts over the limit), model vocabulary (16 posts, mostly "load-bearing"), and the magic-adverb density cap (7 posts). New posts start from zero. `node scripts/lint-tropes.cjs --all` ranks the corpus worst-first when picking a de-slop target for `/swapblog-optimize`.
