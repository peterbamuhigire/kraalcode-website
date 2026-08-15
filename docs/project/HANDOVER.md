# Kraal Code website handover

**Audience:** Project owner, maintainers, release operators, and future contributors  
**Status:** Handover pack with launch conditions  
**Last reviewed:** 2026-08-15

## What is delivered

Kraal Code is a static Astro marketing website for Chwezi Core Systems. The current verified build produces 114 static pages from the multilingual source route set, covering English, French, and Kiswahili home and product content, capability pages, sector pages, security, contact, legal routes, redirects, sitemap, and a branded 404 page.

The site uses Source Serif 4 for display type and Source Sans 3 for body/interface text, tokenised vanilla CSS, self-hosted fonts, responsive photographic assets, shared shell components, locale-aware navigation, canonical metadata, hreflang, organisation JSON-LD, and minimal progressive enhancement.

## Source map

| Concern | Location |
| --- | --- |
| Current implementation truth | `docs/project/CURRENT-STATE.md` |
| Route and shell architecture | `docs/architecture/site-architecture.md` |
| Design decisions | `docs/style-brief.md`, `docs/design/design-system.md` |
| Content and approval rules | `docs/governance/content-governance.md` |
| Written approvals | `docs/project/approvals-log.md` |
| Assets and rights | `docs/project/07-asset-register.md` |
| Deployment and rollback | `docs/deployment/site-operations.md`, `docs/deployment/runbook.md` |
| Maintenance cadence | `docs/maintenance/site-maintenance.md`, `docs/maintenance/schedule.md` |
| Screenshot work | `docs/project/screenshot-capture-plan.md`, phases 16–20 |
| Future measurement | `docs/analytics/event-dictionary.md` |
| Phased execution record | `docs/plans/kraal-website/` |

## How to run it

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

The deployment unit is `dist/`. Follow the deployment runbook before publishing it.

## Current quality evidence

- `npm run typecheck`: passes with zero errors; three non-blocking Astro hints remain.
- `npm run build`: passes and generates 114 pages.
- Route, heading, image, overflow, and representative visual checks have been run across the multilingual site.
- The English Privacy Notice is approved by legal as of 15 August 2026, and its lists render semantic bullets/numbering.

## Conditions before launch approval

The site is not represented as fully launch-approved until the following are closed or explicitly accepted by the project owner:

- image rights and model-release evidence;
- approved ERP screenshots for phases 16–20;
- legal review of cookies, terms, accessibility, and localized policy pages;
- CI/CD workflow and committed browser smoke coverage;
- ESLint installation and a passing lint policy;
- privacy-approved analytics and measurement implementation.

## Ownership and next actions

Engineering owns route, layout, build, and deployment changes. Content/product owns claims, pricing, and English copy. Native reviewers own French and Kiswahili copy. Design/content owns imagery and rights evidence. Legal owns policy approval. The next implementation streams are the approved screenshot capture plan and the Phase 21 blog, which may proceed independently once research and content owners are confirmed.
