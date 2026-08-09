# Site architecture

**Audience:** Developers and technical reviewers
**Status:** Current implementation guide
**Last reviewed:** 2026-08-09

## System shape

Kraal Code Website is a static Astro site. Astro renders the HTML at build time; the deployed server serves files from `dist/`. There is no server-side application runtime in this repository.

```text
Astro source pages + shared components + static assets
                     |
                 npm run build
                     |
                    dist/
                     |
          Nginx / Apache / static host
```

The project deliberately uses minimal client JavaScript. The mobile navigation toggle is progressively enhanced; page content and links remain usable without JavaScript.

## Route model

`src/utils/localizedRoutes.ts` is the route authority. It defines:

- route keys for home, product, capabilities, sectors, security, resources, contact, legal, and work-from-anywhere pages;
- localized paths for English, French, and Kiswahili;
- compatibility aliases and redirect targets;
- localized alternates used by the layout and language switcher.

There are 86 source `index.astro` entrypoints in `src/pages/`. The build also emits compatibility redirects and generated output, producing 114 static pages in the current build.

When adding or renaming a route:

1. Add the page source under the correct locale directory.
2. Add or update the route key in `localizedRoutes.ts`.
3. Add localized equivalents or an explicit redirect.
4. Check the header and footer links.
5. Run `npm run typecheck` and `npm run build`.
6. Verify the generated path in `dist/`.

## Shared shell

[`src/layouts/BaseLayout.astro`](../../src/layouts/BaseLayout.astro) owns:

- document metadata, canonical URL, Open Graph, Twitter, and hreflang tags;
- organisation JSON-LD;
- global CSS imports;
- skip link, header, main slot, and footer;
- route-level detail hero metadata and image preloading.

[`src/components/global/Header.astro`](../../src/components/global/Header.astro) owns the main navigation, locale switcher, active route state, and mobile navigation toggle. [`Footer.astro`](../../src/components/global/Footer.astro) owns the footer navigation, legal links, contact details, and locale links.

## Page families

### Homepage

`src/pages/{locale}/index.astro` composes section components for the hero, outcomes, work-anywhere story, capability map, African context, security, pricing, implementation, and final CTA.

`CapabilityMapSection.astro` is shared across locales. It maps each localized capability link to an approved capability background image and applies the medium dark text-safety overlay locally on each card.

### Capability and sector details

Detail pages remain locale-specific Astro files because their copy is authored per language. Their hero treatment is shared through:

1. `getRouteKey()` resolving the current localized path;
2. `getDetailHero()` selecting the image, focal position, alt intent, and localized eyebrow;
3. `BaseLayout.astro` setting route-level CSS custom properties on `<body>`;
4. `global.css` rendering the responsive image, veil, and lighter glass text panel.

This gives every detail route a consistent visual system without duplicating hero markup across 48 pages.

## Styling architecture

- [`src/styles/tokens/tokens.css`](../../src/styles/tokens/tokens.css) contains fonts, colours, semantic surfaces, typography scale, spacing, radii, shadows, breakpoints, transitions, and z-index values.
- [`src/styles/foundations/reset.css`](../../src/styles/foundations/reset.css) defines reset, font smoothing, focus treatment, reflow defaults, and reduced-motion behavior.
- [`src/styles/foundations/global.css`](../../src/styles/foundations/global.css) defines containers, sections, shared utility classes, dark sections, and the detail hero material treatment.
- Page and component styles stay close to their markup and use the shared `--kc-*` tokens.

Do not introduce a new CSS framework, generic system font, or one-off colour when an existing token or component rule covers the need.

## Asset architecture

Static files under `public/` are copied to the root of `dist/`. The existing site keeps website images under `public/src/assets/images/`, so a source URL such as `/src/assets/images/capabilities/finance-payroll-calculator.jpg` resolves directly in the built site.

Use:

- `public/fonts/` for self-hosted web fonts;
- `public/icons/` for logos and favicons;
- `public/static/` for social and Open Graph assets;
- `public/src/assets/images/capabilities/` for capability imagery;
- `public/src/assets/images/industries/` for sector imagery;
- `public/src/assets/images/detail-heroes/` for the shared detail hero set.

Record every placed image in [`docs/project/07-asset-register.md`](../project/07-asset-register.md), including subject, placement, rights status, consent status, and alt-text intent.

## SEO and metadata

Astro sitemap integration is configured in `astro.config.mjs` with `https://kraalcode.com` as the site URL. The layout emits locale-aware canonical and alternate links. New pages must provide an accurate title, description, canonical URL, and locale.

Do not add claims to metadata that are not supported by project truth or approved product documentation.

## Important invariants

- Exactly one meaningful `h1` per page.
- No horizontal overflow at 320px or 390px mobile widths.
- All standalone controls remain keyboard focusable with visible focus.
- All meaningful content images have useful alt intent; decorative supporting imagery does not duplicate the visible copy.
- Route keys and localized links stay in sync.
- Generated `dist/` output is refreshed when a release commit changes rendered output.
