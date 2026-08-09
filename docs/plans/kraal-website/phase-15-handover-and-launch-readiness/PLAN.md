# Phase 15 — Handover & Launch Readiness

**Directory:** `docs/plans/kraal-website/phase-15-handover-and-launch-readiness/`
**Depends on:** Phase 14
**Gate:** All documentation complete, build is clean, no blockers, human approval items listed

---

## Objective

Prepare everything needed to deploy, maintain, and evolve the website. Document the architecture, workflows, and governance so any competent developer or content editor can work on the site.

---

## Tasks

### 15.1 Setup & Maintenance README

Update the repository README with:
1. How to clone and set up locally (`npm install`, `npm run dev`)
2. How to build (`npm run build`) and preview (`npm run preview`)
3. How to add a new page (create `src/pages/en/<slug>/index.astro` with BaseLayout)
4. How to add a new blog post (Phase 21 — content collection)
5. How to add product screenshots (phases 16-20 — ScreenshotFrame component)
6. How to update content (edit component files directly)
7. How to add a new language locale
8. Project structure overview

### 15.2 Architecture Documentation

Create `docs/architecture/website-architecture.md`:
1. Stack decision (Astro 5, vanilla CSS, TypeScript)
2. Component architecture (layouts, global, sections, ui, blog)
3. Styling architecture (tokens, foundations, scoped styles)
4. Content architecture (inline trilingual, future content collections)
5. Asset pipeline (Astro Image, Sharp, AVIF/WebP)
6. i18n architecture (locale prefixes, route equivalence)
7. Build output structure

### 15.3 Design System Documentation

Create `docs/design/design-system.md`:
1. Typography: Source Serif 4 (display), Source Sans 3 (body)
2. Colour palette with hex values and usage
3. Spacing scale (4px base, 13 steps)
4. Component library (Button, Card, Section, Grid, ScreenshotFrame)
5. Responsive breakpoints
6. Motion and transition rules
7. Dark section treatment

### 15.4 Content Governance

Create `docs/governance/content-governance.md`:
1. Language policy and targeting standards
2. Claim register workflow
3. Source register workflow
4. Review and approval process
5. How to add new claims
6. How to update pricing
7. How to add customer testimonials (when available)

### 15.5 Screenshot Capture Plan

Create `docs/project/screenshot-capture-plan.md` (detailed plan for phases 16-20):
1. Which ERP screens to capture
2. Data sanitisation requirements (synthetic data only)
3. Capture viewports (1440px, 768px, 375px)
4. Processing pipeline (capture → crop → optimise → derivatives)
5. Placement map (which screenshot goes where)
6. Component IDs for replacement

### 15.6 Deployment Runbook

Create `docs/deployment/runbook.md`:
1. Pre-deployment checklist
2. Build command and output verification
3. Deployment steps (static hosting)
4. Post-deployment verification
5. Rollback procedure
6. DNS/domain configuration (when ready)
7. SSL/TLS setup
8. CDN configuration (if applicable)

### 15.7 Analytics Dictionary (Future)

Create `docs/analytics/event-dictionary.md` (for when analytics are added):
1. Business measures (demo requests, page engagement, language usage)
2. Event design (name, purpose, trigger, properties, consent requirement)
3. Privacy rules (no form content, no sensitive data)
4. Consent mechanism

### 15.8 Maintenance Schedule

Create `docs/maintenance/schedule.md`:
1. Dependency updates (monthly)
2. Security audit (quarterly)
3. Content review (quarterly)
4. Claim register review (per review dates)
5. Link checking (monthly)
6. Performance audit (quarterly)
7. Accessibility audit (bi-annually)

### 15.9 Final Build Verification

1. `npm run build` — clean build, no errors
2. `npm run typecheck` — no TypeScript errors
3. Verify all pages in `dist/` output
4. Verify no TODO comments in public pages
5. Verify no lorem ipsum or placeholder content
6. Verify no source maps in output
7. Verify no secrets in output

### 15.10 Handover Document

Produce final handover document:
1. What was built (page count, locale count, component count)
2. Which languages and page families are complete
3. Where strategy, design, content, claim, asset, test, and release artefacts live
4. The selected stack and why
5. Quality-gate results
6. Security/privacy review status
7. Remaining blockers and not-assessed checks
8. How to run locally
9. How to add/edit content
10. How to add product screenshots (phases 16-20)
11. How to publish blog articles (Phase 21)
12. What requires human approval before deployment

---

## Deliverables

| File | Purpose |
|------|---------|
| `README.md` | Setup and maintenance guide |
| `docs/architecture/website-architecture.md` | Architecture documentation |
| `docs/design/design-system.md` | Design system documentation |
| `docs/governance/content-governance.md` | Content governance |
| `docs/project/screenshot-capture-plan.md` | Screenshot plan for phases 16-20 |
| `docs/deployment/runbook.md` | Deployment runbook |
| `docs/analytics/event-dictionary.md` | Analytics event dictionary |
| `docs/maintenance/schedule.md` | Maintenance schedule |
| `docs/project/HANDOVER.md` | Final handover document |

---

## Acceptance Criteria

- [ ] All documentation complete
- [ ] Build is clean (no errors, no warnings)
- [ ] No TODO or placeholder in public pages
- [ ] No secrets in repository
- [ ] Handover document produced
- [ ] Human approval items clearly listed
- [ ] Screenshot plan ready for phases 16-20
- [ ] Blog plan ready for Phase 21

---

## Gate to Completion (Phase 15)

The website is ready for deployment. All documentation is in place. Phases 16-20 (screenshots) and Phase 21 (blog) can proceed independently.
