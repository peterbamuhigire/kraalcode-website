# Kraal Code detail-page style brief

## Direction

The detail pages use a restrained editorial-enterprise voice: operational clarity first, with a single authored hero moment that makes each capability or sector feel specific to the organisation it serves.

## Typography

- Display: Source Serif 4, chosen for an editorial, high-trust voice that gives long capability and sector names a distinctive silhouette.
- Body/UI: Source Sans 3, chosen for legible operational copy, tables, controls, and multilingual text across English, French, and Kiswahili.
- Both families are self-hosted under `public/fonts/` and licensed under the SIL Open Font License.

## Colour and material

- Deep charcoal and teal remain the brand anchors.
- Ivory/champagne is reserved for high-contrast accents on dark photographic heroes.
- Hero copy sits on a slightly opaque teal-charcoal glass panel with a 10px backdrop blur; the full image receives only a 4px background veil. This keeps the image recognisable while preserving a safe contrast field for the title and subheading.
- The composition uses one focal point: the page title. The image is supportive context, not competing decoration.

## Responsive and accessibility rules

- Image focal points are defined per route with `background-position` so people, screens, and products remain legible at mobile crops.
- Hero text retains a bounded measure and visible focus styling from the shared reset.
- Reduced-motion users receive the same composition without blur scaling effects.
- Hero imagery is treated as supporting/decorative context; the page title and subheading carry the content meaning.
