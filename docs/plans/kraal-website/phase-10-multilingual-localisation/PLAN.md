# Phase 10 — Multilingual Localisation

**Directory:** `docs/plans/kraal-website/phase-10-multilingual-localisation/`
**Depends on:** Phase 09
**Gate:** No raw machine translation, native review status visible, meaning parity, no clipping, hreflang reciprocal

---

## Objective

Create French and Kiswahili versions of every English page. Each locale is authored from meaning — never raw-translated. Content must read as if originally written by a professional from the target market.

---

## Language Targeting Standard

| Locale | Primary Markets | Register |
|--------|----------------|----------|
| **French** | DRC, Congo-Brazzaville, Burundi, Senegal, Mali, Côte d'Ivoire, Togo, Cameroon, Gabon, Madagascar | Formal vous; francophone African professional; OHADA/BCEAO/BEAC references |
| **Kiswahili** | Kenya, Tanzania, DR Congo | Respectful Kiswahili sanifu; no slang, no Sheng |

**Reader profile:** Advanced comprehension. Educated professionals reading fluently — often L2/L3.

---

## Tasks

### 10.1 Route-Equivalence Map

Create localised slugs for every page:

| EN Route | FR Route | SW Route |
|----------|----------|----------|
| /en/product/ | /fr/produit/ | /sw/bidhaa/ |
| /en/capabilities/ | /fr/capacites/ | /sw/uwezo/ |
| /en/capabilities/accounting/ | /fr/capacites/comptabilite/ | /sw/uwezo/hasibu/ |
| /en/capabilities/inventory/ | /fr/capacites/inventaire/ | /sw/uwezo/hifadhi/ |
| /en/capabilities/sales/ | /fr/capacites/ventes/ | /sw/uwezo/mauzo/ |
| /en/capabilities/procurement/ | /fr/capacites/achats/ | /sw/uwezo/ununuzi/ |
| /en/capabilities/manufacturing/ | /fr/capacites/fabrication/ | /sw/uwezo/uzalishaji/ |
| /en/capabilities/hr-payroll/ | /fr/capacites/rh-paie/ | /sw/uwezo/ajira-mishahara/ |
| /en/capabilities/projects/ | /fr/capacites/projets/ | /sw/uwezo/miradi/ |
| /en/capabilities/reporting/ | /fr/capacites/rapports/ | /sw/uwezo/ripoti/ |
| /en/sectors/ | /fr/secteurs/ | /sw/sekta/ |
| /en/sectors/manufacturing/ | /fr/secteurs/industrie/ | /sw/sekta/viwanda/ |
| /en/sectors/trading/ | /fr/secteurs/commerce/ | /sw/sekta/biashara/ |
| /en/sectors/nonprofits/ | /fr/secteurs/ong/ | /sw/sekta/zisizo-faida/ |
| /en/sectors/consultancy/ | /fr/secteurs/conseil/ | /sw/sekta/ushauri/ |
| /en/sectors/agriculture/ | /fr/secteurs/agriculture/ | /sw/sekta/kilimo/ |
| /en/sectors/retail/ | /fr/secteurs/detail/ | /sw/sekta/rejareja/ |
| /en/sectors/hospitality/ | /fr/secteurs/hotellerie/ | /sw/sekta/utalii/ |
| /en/sectors/education/ | /fr/secteurs/education/ | /sw/sekta/elimu/ |
| /en/security/ | /fr/securite/ | /sw/usalama/ |
| /en/why/ | /fr/pourquoi/ | /sw/kwa-nini/ |
| /en/work-from-anywhere/ | /fr/travailler-partout/ | /sw/kazi-popote/ |
| /en/company/ | /fr/entreprise/ | /sw/kampuni/ |
| /en/blog/ | /fr/blogue/ | /sw/blogu/ |
| /en/contact/ | /fr/contact/ | /sw/mawasiliano/ |
| /en/legal/privacy/ | /fr/juridique/confidentialite/ | /sw/kisheria/faragha/ |
| /en/legal/cookies/ | /fr/juridique/temoins/ | /sw/kisheria/vidakuzi/ |
| /en/legal/terms/ | /fr/juridique/conditions/ | /sw/kisheria/masharti/ |
| /en/legal/accessibility/ | /fr/juridique/accessibilite/ | /sw/kisheria/upatikanaji/ |

### 10.2 French Page Authoring

For each English page, author a French version:

1. Read the English source meaning (not the English words)
2. Write French from meaning using francophone African professional register
3. Use `vous` throughout — never `tu`
4. Reference OHADA, BCEAO/BEAC, FCFA where relevant
5. Use vocabulary understood across West and Central Africa
6. Localise: dates (17 février 2026), numbers (1 000), currency (FCFA or UGX as appropriate)
7. Apply French typography: guillemets « », non-breaking spaces before : ; ! ?
8. Ensure apostrophes in Astro JSX use double-quoted strings (d'excellence, not 'd\'excellence')

Pages to create:
- /fr/produit/ (product)
- /fr/capacites/ (capabilities index)
- /fr/capacites/comptabilite/ through /fr/capacites/rapports/ (8 detail pages)
- /fr/secteurs/ (sectors index)
- /fr/secteurs/industrie/ through /fr/secteurs/education/ (8 detail pages)
- /fr/securite/ (security)
- /fr/pourquoi/ (why)
- /fr/travailler-partout/ (work from anywhere)
- /fr/entreprise/ (company)
- /fr/blogue/ (blog placeholder)
- /fr/contact/ (contact form)
- /fr/juridique/* (4 legal pages)
- /fr/securite/divulgation/ (disclosure)

### 10.3 Kiswahili Page Authoring

For each English page, author a Kiswahili version:

1. Read the English source meaning
2. Write Kiswahili from meaning using respectful Kiswahili sanifu
3. Correct noun-class concord throughout
4. Use terms most widely understood across Kenya and Tanzania
5. Avoid Sheng, Mombasa dialect, Zanzibari variants
6. Localise: dates, numbers, currency as appropriate
7. Maintain formal register throughout

Pages to create: same structure as French, with Kiswahili slugs.

### 10.4 Native Review Checklist

For each locale, verify:
- [ ] Native-quality review completed (or marked "not assessed")
- [ ] Source-meaning back comparison (no material facts lost)
- [ ] Claim strength matches English version
- [ ] Terminology consistency within locale
- [ ] CTA commitment parity with English
- [ ] Localised SEO phrases verified
- [ ] Layout/overflow review (French ~20% longer, Kiswahili variable)
- [ ] No clipping at any viewport
- [ ] Language switcher navigates to equivalent page (not homepage)
- [ ] Apostrophes handled correctly in Astro JSX (French d', l', n')

### 10.5 SEO per Locale

For each locale:
- Unique title and meta description in target language
- Reciprocal hreflang links (en ↔ fr ↔ sw)
- Localised canonical URLs
- Locale-aware sitemap entries
- Open Graph locale tags correct

---

## Deliverables

| Count | Purpose |
|-------|---------|
| ~30 French pages | All EN equivalents with localised slugs |
| ~30 Kiswahili pages | All EN equivalents with localised slugs |
| Route-equivalence map | Complete mapping |
| Native review checklists | Per-locale verification |

---

## Resources Required

- French native-copy skill (website-skills)
- Swahili native-copy skill (website-skills)
- Language standards skill for cross-language parity
- Digital research engine for search intent per locale

---

## Acceptance Criteria

- [ ] No raw machine translation ships
- [ ] Every page has FR and SW equivalents
- [ ] Localised slugs (not just prefix changes)
- [ ] Language switcher works on every page
- [ ] Reciprocal hreflang/canonical/sitemaps
- [ ] No clipping or English-only UI remains
- [ ] Native review status documented per locale

---

## Gate to Phase 11

All three locales are complete for all page families. Language switcher works everywhere. hreflang is reciprocal. Native review status is documented.
