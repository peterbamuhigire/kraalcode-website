# Deployment runbook

**Audience:** Release operators and hosting maintainers  
**Status:** Current static-site runbook  
**Last reviewed:** 2026-08-15

The canonical operational detail is [`site-operations.md`](site-operations.md). This shorter runbook is the release checklist required by Phase 15.

## Pre-deployment

- Confirm the approved commit, branch, operator, and rollback target.
- Confirm legal status: the English Privacy Notice is approved; other policy pages must not be represented as approved until their review is recorded.
- Confirm image rights and product screenshot approvals for any newly added assets.
- Confirm no secrets, production credentials, or real customer data are present.
- Run `npm ci` from the lockfile.

## Build and verify

```bash
npm run typecheck
npm run build
test -f dist/en/index.html
test -f dist/fr/index.html
test -f dist/sw/index.html
test -f dist/sitemap-index.xml
```

The build must complete without errors. Current known non-blocking Astro hints concern empty content folders and inline JSON-LD scripts; record them if a release evidence sheet is created.

## Publish

Publish the generated `dist/` directory to the static host using an atomic or staged release when supported. The document root must serve directory `index.html` files and the generated `_assets/`, `fonts/`, `icons/`, `static/`, and image paths. HTTPS is required in production.

## Post-deployment smoke test

Check `/en/`, `/fr/`, `/sw/`, one capability page per changed locale, one sector page, `/en/legal/privacy/`, `/sitemap-index.xml`, `/robots.txt`, and an intentionally missing route. Confirm status, title, canonical, locale links, images, fonts, and the primary CTA.

## Rollback

Stop promotion, restore the last known-good `dist/` release, run the smoke test again, and record the failing commit, symptom, detection time, and restored release. Correct the repository source before attempting a new release.

## Human release approvals

Deployment is not considered launch-approved while image rights, product screenshots, analytics, CI/browser automation, or remaining legal reviews are open. The current-state document is the release truth.
