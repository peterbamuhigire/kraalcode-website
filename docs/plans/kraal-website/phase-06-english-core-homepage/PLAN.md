# Phase 06 — English Core: Homepage & Navigation

**Directory:** `docs/plans/kraal-website/phase-06-english-core-homepage/`
**Depends on:** Phase 05
**Gate:** Homepage renders perfectly at all breakpoints, all CTAs link correctly, no placeholder content

---

## Objective

Refine the existing homepage into a production-quality landing page. Fix bugs, verify pricing, ensure responsive perfection, and make the header's active-link highlighting work.

---

## Tasks

### 6.1 Bug Fixes

1. **OutcomeSection.astro (Swahili):** Line 53 uses `caption` instead of `description` for first SW outcome — fix the key name
2. **Header.astro:** `currentPath` prop is received but not used for active-link highlighting — implement active state
3. Verify all 9 section components render without errors in all 3 locales

### 6.2 Pricing Verification

Current PricingSection shows 3 tiers. Verify against product-description.md which lists 5 tiers:

| Tier | UGX/month | Users | Branches |
|------|-----------|-------|----------|
| Starter | 250,000 | Up to 5 | Up to 2 |
| Small Business | 500,000 | Up to 15 | Up to 5 |
| Professional | 1,000,000 | Up to 30 | Up to 10 |
| Business | 1,750,000 | Up to 60 | Up to 20 |
| Enterprise | 2,500,000 | Unlimited | Unlimited |

Decision: show all 5 tiers or keep 3 with "View all plans" link? Recommend showing all 5 in a responsive layout.

### 6.3 HeroSection Refinement

1. Verify the geometric SVG pattern renders correctly at all viewports
2. Verify the 3 stats are accurate: "23 Integrated modules", "4 East African countries", "UGX 250K Per month"
3. Ensure headline uses `text-wrap: balance` (already set — verify it works)
4. Test hero at 320px width — text must not overflow
5. Verify CTA buttons link correctly

### 6.4 Trust Indicators

Add a trust section between Hero and Outcome (or after Security):
- "Trusted by organisations across East Africa" (if no customers yet, use "Built for organisations across East Africa")
- Key trust signals: 23 modules, IFRS-compliant, OWASP-mapped, UGX-denominated
- No fake logos or fabricated testimonials

### 6.5 Responsive Testing

Test every section at these viewports:
- 320px (small mobile)
- 375px (iPhone SE)
- 390px (iPhone 14)
- 768px (tablet)
- 1024px (small laptop)
- 1280px (laptop)
- 1440px (desktop)
- 1536px (wide)

Fix any overflow, clipping, or spacing issues.

### 6.6 Performance Check

1. Run Lighthouse on homepage
2. Verify LCP element (likely hero headline or hero image)
3. Verify no layout shift (CLS < 0.1)
4. Verify font loading doesn't cause FOUT
5. Verify all images use Astro Image component with responsive derivatives

---

## Deliverables

| File | Change |
|------|--------|
| `src/components/sections/OutcomeSection.astro` | Fix SW caption/description bug |
| `src/components/sections/PricingSection.astro` | Update to 5 tiers (or add "View all" link) |
| `src/components/global/Header.astro` | Implement active-link highlighting |
| `src/components/sections/HeroSection.astro` | Refinements if needed |
| Homepage | Trust indicators added |

---

## Acceptance Criteria

- [ ] Homepage renders without errors in all 3 locales
- [ ] No placeholder or "coming soon" content
- [ ] All CTAs link to valid pages
- [ ] Pricing matches verified product documentation
- [ ] Responsive at all 8 breakpoints without overflow
- [ ] Header active link works
- [ ] Lighthouse Performance ≥ 90

---

## Gate to Phase 07

Homepage is production-quality. All bugs fixed. Responsive at all breakpoints. Pricing verified. Trust indicators present.
