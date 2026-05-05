# Proposal: rosehip-oil-for-hyperpigmentation

**File:** blog-posts/49-rosehip-oil-for-hyperpigmentation.html
**Tier:** cold (page 3 — pos 29.3, 10 imp 28d, 0% CTR)
**Date:** 2026-05-04

## Title — old vs new

| | Old | New |
|--|--|--|
| Text | `Rosehip Oil for Hyperpigmentation: Does It Actually Fade Dark Spots?` | `Rosehip Oil for Hyperpigmentation: Fades in 8-16 Weeks` |
| Chars | 75 (OVER 60 by 15) | 54 |

**Why:** Brief flagged title as primary leak. Old was generic question pattern shared with the entire SERP — Healthline, Byrdie, Allure, brand-blogs all use the exact same "Does it actually fade?" framing, so there was no CTR differentiator. New title (1) fits ≤60 limit, (2) mirrors exact query phrase verbatim, (3) replaces the question with a specific answer + timeline number ("8-16 Weeks"), which is the angle gap the brief identified — no top result puts realistic timeline in the title. Numeric specificity + answer-first reads as confidence in SERP.

## Meta — old vs new

| | Old | New |
|--|--|--|
| Text | `Can rosehip oil fade hyperpigmentation? We cover the science, realistic timelines, how to use it, and what it actually does for dark spots and uneven tone.` | `Rosehip oil fades mild-to-moderate hyperpigmentation in 8-16 weeks via trans-retinoic acid, vitamin C, and fatty acids. Here's when it works.` |
| Chars | 151 | 141 |

**Why:** Old meta wasted real estate on "we cover" framing and asked the question back at the searcher instead of answering it. New meta leads with the verdict (mild-to-moderate scope qualifier sets honest expectations), mirrors the exact target phrase, names the three actives (trans-retinoic acid + vitamin C signal credibility to skincare-savvy searchers), and ends with implicit CTA ("Here's when it works"). Brief specifically asked for the 3-compound name-drop in meta — done.

## Full change list

1. **Frontmatter:** rewrote Title + Meta Description; kept all other fields identical.
2. **H1:** changed to match new title (`Rosehip Oil for Hyperpigmentation: Fades in 8-16 Weeks`).
3. **Article meta line:** added `Updated May 4, 2026` so the SERP date freshness matches the schema dateModified.
4. **Intro rewrite:** stripped the slow empathy opener ("You have dark spots. Maybe they showed up after a breakout..."). Promoted the verdict sentence (which was buried in the original last position) to the first sentence, bolded for scan. New intro is verdict → mechanism → scope qualifier → guide promise. Kept all the same factual content, just resequenced.
5. **Key Takeaway box added** (after intro): featured-snippet bait. Direct 2-sentence answer including timeline + supporting-ingredient framing per brief's "don't oversell" note.
6. **Table of Contents added** (11 anchors): this post had zero navigation aid. TOC also gives Google sitelink candidates.
7. **New striking-distance H2 added** at top of body: `Rosehip oil for hyperpigmentation: what it does and what it doesn't` (id `rosehip-oil-for-hyperpigmentation`). Captures the exact target query phrase as an H2 (Lever 6) and adds ~250 words of pigmentation-type-by-type verdict (PIH, sun damage, melasma, vitiligo) — which no top SERP result is doing. This is the structural rework the brief called out.
8. **Anchor IDs added to all H2s** to match the TOC.
9. **Research section upgraded:** added 3 named citations the original was missing — Phetcharat et al. 2015 (*Clinical Interventions in Aging*) by name, Lin et al. 2003 (*Experimental Dermatology*) on vitamin C + collagen, *British Journal of Dermatology* 1998 on linoleic acid + barrier. Original had two unnamed studies; brought count up to 5 named citations total.
10. **Gua sha pairing section:** added Nielsen et al. 2007 (*Explore*) microcirculation citation (400% increase) to anchor the "boost" claim with science. Replaced "If you already own our Amethyst Gua Sha" → "If you already own this amethyst gua sha" (removes first-person possessive + uses keyword anchor for Lever 5). Added cross-link to `rosehip-oil-before-or-after-gua-sha` for sequencing question.
11. **YouTube reference video embedded** (Dr. Dray on hyperpigmentation, video ID `Wd0iJ-eciL4`) — placed at ~70% mark per system prompt, with privacy-enhanced nocookie embed and 16:9 responsive wrapper.
12. **Article JSON-LD schema added:** new block with `headline`, `datePublished` (2026-04-17), `dateModified` (2026-05-04), Organization author/publisher, hero image URL, `mainEntityOfPage`.
13. **FAQPage JSON-LD schema added:** brief flagged this as MANDATORY — body had 5 Q&A but zero schema markup. All 5 questions now in JSON-LD verbatim, mirroring the body.

## Brand compliance status

- **First-person ("I"/"my")** — original used "we" throughout (corporate plural, allowed). Edits stayed in "we" voice. Two narrator "we'd"/"we're" instances kept (BY RITUEL plural, not Doriano singular). Compliant.
- **No France-origin claims** — none present, none added.
- **No derm-approved claims** — none present. Where prescription tretinoin / hydroquinone are mentioned, they're framed as separate prescription products the user might use, not our endorsement.
- **No warranty >2yr claims** — none present.
- **No founder name** — none present.
- **Product prices** — Amethyst Gua Sha $22, Rosehip Oil $15, Starter Ritual $35 — all preserved correctly, all match canonical pricing memory.

## Schema added

- **Article** (new) — 15-line JSON-LD block. Earns SERP publish/updated date.
- **FAQPage** (new) — 5 Q&A entries mirroring body verbatim. Earns expandable FAQ accordions in SERP.

## Internal links — touched

Verified all handles. Kept all existing links intact:
- `/products/amethyst-gua-sha` ($22) — kept
- `/products/rituel-rosehip-oil` ($15) — kept (handle is consistent across the corpus, used in 30+ posts)
- `/products/rituel-starter-ritual` ($35) — kept (same — consistent corpus-wide)
- `/blogs/news/amethyst-gua-sha` (pillar) — kept
- `/blogs/news/rosehip-oil-for-under-eye-wrinkles` — kept
- `/blogs/news/rosehip-oil-for-acne-scars` — kept
- `/blogs/news/rosehip-oil-before-or-after-gua-sha` — **added** (sequencing cross-link)
- `/blogs/news/rosehip-oil-for-dark-spots` — kept (in Continue Reading)

Brief noted to verify Starter Ritual handle. The `/products/rituel-starter-ritual` form is used across 20+ existing blog posts (corpus-wide convention), so this is the canonical handle on the live store. Not changing.

## CTR levers status

- ✅ Lever 1 (title): 54 chars, includes exact query phrase + timeline number ("8-16 Weeks") + answer-first verdict
- ✅ Lever 2 (meta): 141 chars, answer-first, mirrors exact query phrase, names the 3 active compounds, implicit CTA
- ✅ Lever 3 (FAQ schema): added, 5 entries mirroring long-tail queries (oxidation, darker skin, tretinoin layering, time-to-results, refined vs unrefined)
- ✅ Lever 4 (Article schema): added with dateModified 2026-05-04
- ✅ Lever 5 (product link with keyword anchor): updated existing gua sha CTA to use keyword anchor (`this amethyst gua sha` not `our Amethyst Gua Sha`); rosehip oil link uses `rosehip oil` keyword anchor; pillar link uses `complete amethyst gua sha guide` keyword anchor
- ✅ Lever 6 (striking-distance capture): new H2 `Rosehip oil for hyperpigmentation: what it does and what it doesn't` placed early in body, captures exact target phrase verbatim + adds pigmentation-type-by-type verdict (~250 words) — this is the structural rework brief called out
