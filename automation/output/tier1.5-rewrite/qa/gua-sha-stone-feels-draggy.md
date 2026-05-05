# QA: gua-sha-stone-feels-draggy

**File:** `blog-posts/88-gua-sha-stone-feels-draggy.html`
**Verdict:** PASS

## 8-point checklist

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Title <= 60 chars | PASS | 52 chars: "Why Your Gua Sha Feels Draggy: 5 Causes + 15-Sec Fix" |
| 2 | Meta <= 155 chars | PASS | 140 chars |
| 3 | Target query as H2 substring | PASS | H1 + body H2s capture "draggy" / "draggy stone" multiple times. The exact phrase "gua sha stone feels draggy" appears in body, FAQ Q ("Why does my gua sha stone feel draggy even with oil?"), and meta. H2 "Why 'draggy stone' is the single most common complaint we hear" is the striking-distance capture. |
| 4 | No brand-fact violations | PASS | No France, no derm-approved, no warranty. Critical brand-fact corrections from brief verified: |
| 5 | No first-person outside FAQs/quotes | PASS | "I/my" usage on line 333 is an explicitly QUOTED reader-question from Reddit (`<em>"I bought a gua sha, it just drags, what am I doing wrong?"</em>`). Allowed under the workflow rule. |
| 6 | At least 1 valid schema | PASS | Article + FAQPage JSON-LD present |
| 7 | Internal links — handles correct | PASS | All slugs resolve: amethyst-gua-sha (16), rosehip-oil-vs-jojoba-oil-face (42), is-my-amethyst-gua-sha-real (18), gua-sha-with-retinol-vitamin-c (39), gua-sha-pressure-guide (38), amethyst-gua-sha-vs-jade-vs-ice-roller (34), gua-sha-for-forehead-wrinkles (45), gua-sha-caused-a-bruise (83), gua-sha-broke-me-out (74). |
| 8 | Pricing intact | PASS | $15 oil, $22 gua sha, $35 bundle (line 329: "or bundle it with the stone for $35 total") — canonical |

## Brief-flagged extra scrutiny

### Synthetic customer quotes — VERIFIED REMOVED
- No "March 2026" or "April 2026" date strings present in file.
- No fabricated testimonial blockquotes with BY RITUEL customer attributions.
- Replaced with H2 "Why 'draggy stone' is the single most common complaint we hear" — grounded in third-party Reddit thread evidence (r/SkincareAddiction, r/30PlusSkinCare). Defensible.

### "Diamond-polished" / "Brazilian amethyst" — VERIFIED SOFTENED
- No "diamond-polished" string in file.
- No "Brazilian amethyst" string in file.
- Replaced with "polished to a high gloss without wax coatings" — defensible (describes ship state, not manufacturing process). Per-batch testing claim also removed.

## Strengths
- Strongest body in the batch (per proposal — minimal body work needed).
- Hero image, inline images, YouTube embed all present and correct anatomy.
- Real citations preserved with PubMed links (Phetcharat 2015 + 1998 BJD paper).
- Editorial "we" voice consistent throughout — no founder-personal slips.
- Striking-distance H2 + 3 H2/H3 variants in body capture the target query thoroughly.

## Issues
None blocking. None advisory.

## Risk note (per proposal, not a QA blocker)
- Niche query, low traffic ceiling at position 6 with 1 imp/28d. Win here is defensive (CTR-ready when query fires) and structural (the customer-quote-replacement pattern can template the rest of Tier 1.5).
