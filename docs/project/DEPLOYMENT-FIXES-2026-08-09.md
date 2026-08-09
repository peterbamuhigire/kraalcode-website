# Deployment Fixes - 2026-08-09

## Context

The first production deployment exposed three site issues:

- `/` returned a directory-index `403` after the Astro build removed the temporary `dist/index.html`.
- Image and logo URLs returned `404` because rendered pages referenced files that were not present under `public/` and therefore were not copied to `dist/`.
- Several navigation and card links pointed to planned pages that were not generated yet.

## Changes Made

- Added `src/pages/index.astro` so the built site generates a root page that redirects visitors to `/en/`.
- Added public asset files for all currently referenced logos, favicons, social images, work-anywhere photos, capability photos, sector photos, product imagery, about imagery, and security imagery.
- Swapped logo usage so the light-background header uses `kraalcode-light.png`, which contains the dark readable wordmark, while the dark footer uses `kraalcode-dark.png`.
- Increased rendered logo sizes in the header and footer.
- Replaced the duplicate-looking "From a phone in the field" image with a distinct field/mobile work image.
- Removed missing font preload references from `BaseLayout.astro`.
- Added `src/pages/[locale]/[...slug].astro` to generate interim pages for linked-but-not-yet-authored detail routes across English, French, and Kiswahili.
- Added a conservative global inset for sections, page heroes, and card-like elements so text, images, and buttons do not sit hard against their visual boundaries.
- Normalized the home warm/dark section wrappers to use the shared `.section` spacing class and added bottom padding to CTA/control rows so buttons no longer sit on section edges.

## Verification

Commands run:

```bash
npm run build
```

The final build generated 97 pages.

Generated output was checked for root-relative `href`, `src`, and `content` references. The check covered 127 references and found no missing generated targets.

Directly verified:

```text
https://kraalcode.com/src/assets/images/work-anywhere/remote-work-sofa.jpg -> 200
```

## Follow-up

The generated fallback detail pages are intentional interim coverage. Replace them with full authored pages as product, sector, legal, and localized content is completed.
