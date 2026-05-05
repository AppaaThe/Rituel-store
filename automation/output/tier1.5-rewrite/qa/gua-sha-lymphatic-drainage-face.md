# QA: gua-sha-lymphatic-drainage-face

**File:** `blog-posts/41-gua-sha-lymphatic-drainage-face.html`
**Verdict:** PASS WITH ONE ADVISORY

## 8-point checklist

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Title <= 60 chars | PASS | 60 chars exactly: "Gua Sha Lymphatic Drainage Face: 30% Less Puffiness in 5 Min". At ceiling — ANY future edit must re-check. |
| 2 | Meta <= 155 chars | PASS | 155 chars exactly (em-dash counted as 1 char). At ceiling — ANY future edit must re-check. |
| 3 | Target query as H2 substring | PASS | H2 "How gua sha lymphatic drainage face technique actually works" + "What gua sha lymphatic drainage on the face can't do" + "FAQ: gua sha lymphatic drainage face" — three captures. |
| 4 | No brand-fact violations | PASS | No France, no derm-approved (one "consult with a dermatologist" referral language allowed), no warranty |
| 5 | No first-person outside FAQs/quotes | PASS | The "I look tired" / "I look like myself" usages on line 98 are clearly framed as quoted feelings/states, not author voice. FAQ "I/my" is in question text. Acceptable. |
| 6 | At least 1 valid schema | PASS | Article + HowTo + FAQPage JSON-LD all present (3 types) |
| 7 | Internal links — handles correct | ADVISORY | One mismatched anchor: line 160 — `<a href="/products/amethyst-gua-sha">starter ritual</a>` — anchor text says "starter ritual" but href points to the gua sha product page, not `/products/starter-ritual`. Same broken-anchor pattern that was explicitly fixed in #48. Should be corrected to `/products/starter-ritual` for consistency. All other slugs resolve. |
| 8 | Pricing intact | PASS | $15 oil, $22 gua sha implied — canonical (no $35 starter mentioned, but starter ritual link itself doesn't carry price) |

## Cannibalization check (per brief)
- **Sister post:** `/blogs/news/gua-sha-for-lymphatic-drainage-face` (file 59).
- **Differentiation in this post:** Comparison table (vs. ice roller / hand massage / caffeine eye cream), "what it can't do" section, beginner-tone FAQ, 5-min routine framing. Sister #59 is positioned as the clinician-grade protocol bible.
- **Verdict:** Differentiation is signaled in body content. No direct internal link from this post (#41) back to sister #59 — good (avoids cannibalization echo). Cross-link goes to `gua-sha-direction-of-strokes` instead.
- **Risk:** Sister #59's outbound link map needs parallel review to ensure it doesn't backlink here. Out of scope for this batch but flagged for follow-up.
- **Acceptable for now.** Recommend 14-day measurement window before any consolidation decision.

## Anatomy compliance
- Forehead strokes: outward to temples (correct for drainage routing — preauricular nodes)
- Under-eye: inner-to-outer corner, then temple DOWN to collarbone (correct)
- Cheeks: nose outward to ears (correct — parotid)
- Jawline: chin outward, then DOWN side of neck (correct — submandibular)
- Neck: ALWAYS DOWN to collarbone (correct — supraclavicular)
- Video figcaption explicitly states "strokes always move down toward the collarbone" — correct.

## Strengths
- Three schema types (Article + HowTo + FAQPage) — top of batch.
- Comparison table captures commercial-comparison search intent.
- "30% in one session" hook in title is data-anchored (Clinical Rehabilitation 2015).
- 7 FAQ Qs mirroring long-tail variants.

## Issues
**ADVISORY:** Line 160 anchor mismatch — "starter ritual" anchor text on `/products/amethyst-gua-sha` href. Recommend correction to `/products/starter-ritual` to match the bundle naming and to match the proposal's stated intent. Not a blocker (link still goes to a valid product page) but it's a misleading anchor for users expecting the bundle.
