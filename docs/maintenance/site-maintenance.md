# Site maintenance

**Audience:** Maintainers, content owners, designers, and project owners
**Status:** Current maintenance guide
**Last reviewed:** 2026-08-09

## Ownership model

| Area | Primary owner | Required review |
| --- | --- | --- |
| Route and layout code | Engineering | Typecheck, build, route smoke test |
| Product claims and pricing | Product owner | Verify against approved product truth before release |
| English content | Content/product owner | Editorial and claim review |
| French content | French reviewer | Native-language review before release |
| Kiswahili content | Kiswahili reviewer | Native-language review before release |
| Imagery and rights | Design/content owner | Asset register, rights, consent, crop review |
| Legal pages | Legal reviewer | Review before treating draft pages as policy |
| Deployment | Release operator | Release checklist and post-deploy watch |

## Weekly review

1. Check the live homepage, all three locale homepages, one capability detail, and one sector detail.
2. Check the primary CTA, locale switcher, sitemap, robots file, and 404 route.
3. Review any broken-link, image, font, or server errors.
4. Confirm the current deployment SHA is known.

## Monthly review

1. Run `npm ci`, `npm run typecheck`, and `npm run build` from a clean checkout.
2. Compare source route count and generated page count with the current-state document.
3. Review titles, descriptions, canonical links, and hreflang output for new or changed pages.
4. Review imagery for crop quality, text safety, duplicate use, and rights evidence.
5. Review open gaps in [`project/CURRENT-STATE.md`](../project/CURRENT-STATE.md).
6. Update the asset register and documentation if the repository structure has changed.

## Quarterly review

- Revisit the typography, colour, and imagery decisions in [`docs/style-brief.md`](../style-brief.md).
- Review performance on a representative mobile device and a constrained network.
- Review accessibility at keyboard, mobile, reduced-motion, and zoom states.
- Decide whether to add CI, automated browser tests, analytics, or content collections.
- Confirm legal policy pages and image rights with the relevant owner.

## Adding or changing a page

1. Confirm the page goal, audience, approved copy, primary CTA, and locale scope.
2. Add the Astro route under `src/pages/`.
3. Update `src/utils/localizedRoutes.ts` for route equivalence and navigation behavior.
4. Add or update metadata and structured data through `BaseLayout.astro` or page props.
5. Add assets only through the asset-register process.
6. Update architecture or operations documentation when the new page changes a shared contract.
7. Run typecheck, build, and representative visual checks.
8. Record the change in the next release note or project decision log.

## Changing imagery

The project treats image placement as a design and rights decision. Before committing a new image:

1. Verify the file decodes and inspect its subject and focal point.
2. Choose a stable filename without source-machine naming or query strings.
3. Confirm the crop at desktop and mobile widths.
4. Confirm the overlay preserves readable text and does not hide the subject.
5. Record source, placement, rights status, consent status, and alt-text intent in `docs/project/07-asset-register.md`.
6. Rebuild and verify the asset exists in `dist/`.

## Localization maintenance

When changing English copy, search for the equivalent French and Kiswahili route before release. Do not use raw machine translation as a final editorial pass. Keep labels, CTAs, navigation, breadcrumbs, metadata, and alternate links aligned.

If a locale is intentionally missing, link to an approved fallback or add a noindex decision rather than silently shipping a broken link.

## Incident triage

| Symptom | First checks | Recovery |
| --- | --- | --- |
| Page returns 404 | Confirm generated path and trailing slash handling | Rebuild, check server directory index, restore previous release if needed |
| Hero or card image missing | Confirm public path and `dist/` copy | Correct asset path, rebuild, rerun smoke test |
| Text unreadable over image | Check overlay and focal position in shared CSS/data mapping | Adjust tokenized overlay or focal point, rerun desktop/mobile review |
| Locale link goes to wrong page | Check `localizedRoutes.ts` and route aliases | Correct route map, rebuild, check all locale links |
| Fonts fall back | Check `/fonts/` responses and `@font-face` paths | Restore font files/path, rebuild, clear cache if required |
| Build fails | Read first Astro/TypeScript error, not only final summary | Fix source or dependency issue, rerun typecheck and build |

## Documentation hygiene

- Keep each Markdown file below 500 lines; split deep content into a nearby subdirectory.
- Use fenced code blocks with language identifiers.
- Keep a blank line around headings, lists, and code fences.
- Mark historical documents as historical instead of silently rewriting their original record.
- Update `docs/project/CURRENT-STATE.md` when a known gap is closed or a new release constraint appears.
