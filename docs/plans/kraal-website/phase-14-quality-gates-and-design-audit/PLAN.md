# Phase 14 — Quality Gates & Design Audit

**Directory:** `docs/plans/kraal-website/phase-14-quality-gates-and-design-audit/`
**Depends on:** Phase 13
**Gate:** Visual QA passes, slop audit grade A/B, design quality 8+/10, no critical browser bugs

---

## Objective

Run every quality gate before launch. The site must look like it was built by a senior design agency. No AI slop, no generic templates, no broken layouts.

---

## Tasks

### 14.1 Visual QA

Screenshot every page at 6 viewports:
- 320px (small mobile)
- 375/390px (iPhone)
- 768px (tablet)
- 1024px (laptop)
- 1280px (standard desktop)
- 1440px (wide desktop)

Check for:
- [ ] No horizontal overflow at any viewport
- [ ] No text clipping or truncation
- [ ] No image distortion
- [ ] No layout shift on load
- [ ] Consistent spacing across sections
- [ ] Consistent typography (no stray font sizes)
- [ ] Consistent button styles
- [ ] Dark sections render correctly
- [ ] Images load and display correctly
- [ ] Focus indicators visible on dark backgrounds

### 14.2 AI-Slop Audit

Run anti-slop audit on ALL content across ALL three locales:

**Specificity floor:**
- [ ] Every section has at least one concrete, domain-specific element
- [ ] No tool defaults or placeholder copy
- [ ] No lorem ipsum or TODO comments in public pages

**Verify before emit:**
- [ ] No unverified statistics or claims
- [ ] Every numeric claim has a source
- [ ] No fabricated customer names, logos, or testimonials

**Authored voice:**
- [ ] Clear point of view in every section
- [ ] Not template prose
- [ ] Varied rhythm and composition

**Cover hard parts:**
- [ ] Constraints acknowledged where relevant
- [ ] Trade-offs mentioned where relevant

**Break the template:**
- [ ] Not repetitive card piles
- [ ] Not identical section structures
- [ ] Composition varies by narrative purpose

**Grade:**
- A = passes all checks
- B = minor issues, fixable in this phase
- C = significant issues, blocks launch
- F = fundamental problems, blocks launch

Required: Grade A or B. C/F blocks progression.

### 14.3 Design Quality Score

Score across 7 categories (minimum 8/10 each):

| Category | What to Check |
|----------|---------------|
| Typography | Source Serif 4 + Source Sans 3 used correctly, hierarchy clear, no stray fonts |
| Colour | Palette consistent, contrast verified, no random colours |
| Spacing | Consistent rhythm, no cramped or floating elements |
| Hierarchy | Clear visual hierarchy, CTAs prominent, content scannable |
| Copy | Specific, verified, authored, no filler |
| Trust | Security cues present, no fabricated proof, honest about gaps |
| Originality | Not a generic SaaS template, recognisably Kraal Code |

### 14.4 Cross-Page Consistency

- [ ] All pages use the same header and footer
- [ ] Button styles consistent across all pages
- [ ] Section padding consistent
- [ ] Card styles consistent
- [ ] Dark section treatment consistent
- [ ] Image treatment consistent (crops, ratios, filters)
- [ ] CTA placement and styling consistent

### 14.5 Browser/Device Testing

Test on:
- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop)
- [ ] Safari (desktop + iOS)
- [ ] Edge (desktop)

Test states:
- [ ] Default state
- [ ] Hover state
- [ ] Focus state
- [ ] Active state
- [ ] Menu open (mobile)
- [ ] Form error state
- [ ] Form success state
- [ ] 404 page

### 14.6 Content Audit

- [ ] Every published claim has source, scope, owner, review date
- [ ] No broken links (run link checker)
- [ ] No placeholder content ("Coming soon", "Lorem ipsum", "TODO")
- [ ] All images have alt text
- [ ] All pages have unique titles and descriptions
- [ ] Contact form works (validation, states)
- [ ] Language switcher works on every page

---

## Deliverables

| File | Purpose |
|------|---------|
| `reports/visual-qa/` | Screenshots at all viewports |
| `reports/design-quality/` | Design quality score |
| `reports/slop-audit/` | AI-slop audit results |
| `reports/browser-testing/` | Cross-browser test results |

---

## Acceptance Criteria

- [ ] Visual QA passes at all viewports
- [ ] AI-slop audit grade A or B
- [ ] Design quality ≥ 8/10 per category
- [ ] No critical browser bugs
- [ ] No broken links
- [ ] No placeholder content
- [ ] All forms work
- [ ] Language switcher works everywhere

---

## Gate to Phase 15

All quality gates pass. The site is visually polished, content is verified, and no AI slop remains.
