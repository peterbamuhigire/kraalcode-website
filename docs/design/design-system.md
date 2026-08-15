# Kraal Code design system

**Audience:** Designers, developers, and content owners  
**Status:** Current implementation guide  
**Last reviewed:** 2026-08-15

## Design intent

The visual system is an operational editorial system: calm, precise, warm, and recognisably rooted in Kraal Code rather than in generic SaaS styling. The geometric structure is derived from the Kraal Code mark. Photography shows working contexts and sector realities; it is not decorative filler.

## Typography

| Role | Typeface | Use |
| --- | --- | --- |
| Display | Source Serif 4 | Page titles, section headings, editorial emphasis |
| Body and interface | Source Sans 3 | Paragraphs, navigation, controls, labels, metadata |

Both families are self-hosted from `public/fonts/`, use `font-display: swap`, and include 400, 600, and 700 weights. Do not replace them with Inter, Roboto, Arial, or another generic primary typeface.

## Colour palette

| Token | Hex | Intended use |
| --- | --- | --- |
| `--kc-charcoal` | `#202833` | Primary text and wordmark |
| `--kc-teal` | `#46696b` | Brand anchor, links, interactive emphasis |
| `--kc-teal-deep` | `#3a565a` | Hover and deeper accent |
| `--kc-ivory` | `#ccd9d2` | Text on dark surfaces |
| `--kc-champagne` | `#dbd1b8` | Dark-surface accent |
| `--kc-surface-light` | `#f8f6f3` | Default page background |
| `--kc-surface-warm` | `#f0ece5` | Warm bands and cards |
| `--kc-surface-dark` | `#1a1f28` | Dark sections |
| `--kc-surface-darker` | `#141820` | Footer and deepest surfaces |

Use semantic tokens for status colours. Do not introduce one-off colours or gradients.

## Spacing and layout

Spacing uses a 4px base scale from `--kc-space-1` (4px) through `--kc-space-32` (128px). Content sits inside the shared container system: 1280px maximum for general content, 768px for long-form reading, and 1440px for wide compositions. Every section, card group, hero, dark band, and CTA row must retain deliberate inset from its visual boundary.

Reference breakpoints are 640px, 768px, 1024px, 1280px, and 1536px. The layout must remain usable at 320px and 390px widths without horizontal overflow.

## Components and page patterns

- `BaseLayout` owns document metadata, hreflang, skip link, header, footer, and global CSS.
- `Header` owns primary navigation, language switching, active state, and progressive mobile navigation.
- `Footer` owns legal, contact, and locale links.
- Section components own repeated homepage narratives: outcomes, work-anywhere, capability map, African context, security, pricing, implementation, and final CTA.
- Detail routes use the shared hero treatment in `global.css` and the route map in `src/utils/detailHeroes.ts`.
- Buttons use shared `.btn` variants and must remain visibly focusable and large enough for touch.

## Motion and imagery

Motion is short and subordinate to comprehension. Existing transitions use the shared transition tokens and are disabled or reduced by `prefers-reduced-motion`. Detail imagery uses a restrained veil and text-safe panel; adjust focal position in the route mapping rather than adding arbitrary overlays in page markup.

## Change rule

Update tokens or shared components when a pattern repeats. A page-level style is acceptable only when the treatment is genuinely page-specific. After a visual change, run `npm run typecheck`, `npm run build`, and representative desktop/mobile checks in every affected locale.
