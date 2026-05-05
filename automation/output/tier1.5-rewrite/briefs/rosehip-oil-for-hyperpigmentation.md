# Brief: rosehip-oil-for-hyperpigmentation

## Snapshot
- **File:** blog-posts/49-rosehip-oil-for-hyperpigmentation.html
- **Tier:** cold
- **GSC 28d:** 10 imp · pos 29.3 · 0% CTR
- **Diagnosis:** page 3 — title is generic question format. Lacks structural rework + missing schema. Body is strong but the answer-first verdict isn't surfaced in title or meta.

## Current state
- **Title** (75/60): `Rosehip Oil for Hyperpigmentation: Does It Actually Fade Dark Spots?` — **OVER LIMIT BY 15**
- **Meta** (151/155): `Can rosehip oil fade hyperpigmentation? We cover the science, realistic timelines, how to use it, and what it actually does for dark spots and uneven tone.`
- **Intro hook** (first ~50 words): "You have dark spots. Maybe they showed up after a breakout. Maybe pregnancy left them. Maybe you spent one too many summers without sunscreen..." — relatable but slow; verdict buried in last sentence of intro
- **H2 structure:**
  - Why hyperpigmentation happens in the first place
  - The three compounds in rosehip oil that actually matter for pigmentation
  - What the research actually says
  - How to use rosehip oil for hyperpigmentation (step by step)
  - Boost it: rosehip oil plus gua sha for hyperpigmentation
  - Realistic timeline: when will dark spots actually fade?
  - What rosehip oil will not do (the honest list)
  - Rosehip oil vs. other natural dark spot treatments
  - Frequently asked questions
  - The routine we'd actually recommend
  - The bottom line
- **Schema present:** None (no FAQPage despite FAQ section in body, no Article).

## Target query analysis
- **Query:** rosehip oil for hyperpigmentation
- **Intent:** problem-diagnosis / commercial (user has spots, wants verdict on whether to buy)
- **SERP top 3 titles:** SERP fetch failed (Google consent redirect). Based on niche knowledge:
  1. Healthline / Byrdie / Allure "Does Rosehip Oil Fade Dark Spots?"
  2. Brand-blog "Rosehip Oil for Hyperpigmentation Benefits"
  3. The Ordinary / Pai / Mario Badescu product pages
- **Common patterns in top SERP titles:** Question format, "benefits" listicles, "natural treatment"
- **Angle gap (what no top result is doing):** Putting the 8–16 week realistic timeline + pigmentation-type-specific verdict in the title. Most competitors promise vaguely or hedge.

## Recommended rewrite direction
- **Title formula:** [Exact query] + [time-to-results verdict] + [pigmentation type qualifier]. Example direction: `Rosehip Oil for Hyperpigmentation: Fades in 8–16 Weeks` or `Rosehip Oil for Hyperpigmentation: 3 Compounds That Work`
- **Title must include:** exact phrase "rosehip oil for hyperpigmentation" + a number (weeks or compounds) + ≤60 chars
- **Meta description angle:** Lead with "yes, fades mild-to-moderate spots in 8–16 weeks" verdict + name the 3 active compounds (trans-retinoic acid, vitamin C, fatty acids). Mirror exact query. Replace current "we cover" framing.
- **Intro hook fix:** Replace empathetic "you have dark spots" opener with answer-first: "Rosehip oil can visibly fade mild to moderate hyperpigmentation in 8–16 weeks because it contains natural trans-retinoic acid, vitamin C, and barrier-rebuilding fatty acids. It won't replace prescription hydroquinone for severe melasma. Here's exactly when it works." Then expand. The bolded sentence in current intro is good — promote it to first sentence.
- **Body changes needed:** minor — body is excellent. Add an exact-match H2 "Rosehip Oil for Hyperpigmentation" near the top.
- **Schema additions:** **MANDATORY: add FAQPage JSON-LD** (post has 5 Qs ready in body). Add Article JSON-LD with image. Consider HowTo for the application sequence.
- **Internal link opportunities:** keep rosehip-before-or-after-gua-sha, dark-spots, acne-scars, under-eye-wrinkles, comedogenic. Add link to amethyst pillar (already there) and rosehip-vs-vitamin-c if exists.

## Brand-fact compliance check
- Pricing $15 rosehip + $22 gua sha + Starter Ritual at $35 — matches canonical. **NOTE:** post links to `/products/rituel-starter-ritual` (with `rituel-` prefix) — verify this handle is live; the canonical may be `/products/starter-ritual`.
- No France-origin / derm-approved violations.

## Hard constraints for the writer
- New title: ≤ 60 characters (this is non-negotiable)
- New meta: ≤ 155 characters
- Must include the exact target query phrase as an H2 inside the article (striking-distance lever)
- Keep ALL existing internal links and product CTAs intact unless replacing with better ones
- **MANDATORY: add FAQPage JSON-LD schema** — body has 5 Qs but no schema markup
- Verify Starter Ritual product handle (`/products/starter-ritual` vs `/products/rituel-starter-ritual`)
