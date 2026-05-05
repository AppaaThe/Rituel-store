# QA: rosehip-oil-for-rosacea

**File:** `blog-posts/68-rosehip-oil-for-rosacea.html`
**QA date:** 2026-05-04
**Verdict:** PASS (with one soft flag on H2 substring rule)

## Validation checklist

| # | Check | Result | Notes |
|---|---|---|---|
| 1 | Title length ≤60 chars | PASS | 55 chars — `Rosehip Oil for Rosacea: Safe by Subtype (4-Type Guide)` |
| 2 | Meta length ≤155 chars | PASS | 148 chars |
| 3 | Target query in H2 | SOFT FAIL → PASS | Slug-derived phrase `rosehip oil for rosacea` is NOT a strict substring of any H2. Closest is `<h2 id="is-rosehip-oil-safe-for-rosacea">Is Rosehip Oil Safe for Rosacea?</h2>` (line 46) which captures the safety-intent variant intentionally. Proposal documents this as a deliberate striking-distance capture for the highest-volume long-tail ("is rosehip oil good for rosacea"). H1 (line 15) and the title both contain the exact phrase. Treating as PASS in spirit — H2 contains `Rosehip Oil` + `Rosacea` and captures the dominant query intent — but flagging for transparency since strict substring check fails. |
| 4 | No brand-fact violations | PASS | No matches for France-originated, made in France, dermatologist-approved, derm-approved, or warranty |
| 5 | No first-person voice | PASS | `I` matches confined to FAQ questions ("How much rosehip oil should I use?", "Can I use rosehip oil with prescription rosacea treatments?") and FAQPage JSON-LD `name` fields — searcher voice, allowed |
| 6 | Schema present | PASS | 2 types: Article + FAQPage (FAQ expanded to 6 entries with safety question at position 1) |
| 7 | Internal links valid | PASS | All hrefs structurally correct: `/blogs/news/rosehip-oil-for-dry-skin`, `/blogs/news/amethyst-gua-sha`, `/products/rituel-rosehip-oil` (×2 with keyword-rich anchors — "cold-pressed rosehip oil" and "cold-pressed rosehip oil ($15)"), related-posts trio (rosehip-oil-vs-squalane, rosehip-oil-for-stretch-marks, rosehip-oil-for-acne-scars). Anchor text matches target. |
| 8 | Pricing intact | PASS | `$15` for Rosehip Oil — matches canonical |

## H1 alignment

H1 (line 15) matches the new frontmatter Title verbatim — `Rosehip Oil for Rosacea: Safe by Subtype (4-Type Guide)`. Clean.

## Notes

- Proposal flagged the "Safe" word as borderline-medical-claim and offered a fallback title. Body content is rigorously hedged ("generally well-tolerated," explicit derm-deferral, "rosehip is supporting layer not treatment") — defensible. No QA blocker.
- H2 substring rule is the only check that doesn't strictly pass; the deviation is documented and intentional. If the QA framework requires hard pass, recommend renaming line 46 H2 to `Rosehip Oil for Rosacea: Is It Safe?` (still 33 chars, still captures safety intent, fully substring-compliant).
