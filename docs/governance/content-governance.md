# Content governance

**Audience:** Product owners, content editors, translators, and legal reviewers  
**Status:** Current operating guide  
**Last reviewed:** 2026-08-15

## Ownership and approval

| Content | Owner | Required review |
| --- | --- | --- |
| Product capability and pricing claims | Product owner | Verify against approved product truth before release |
| English copy | Content/product owner | Editorial, claim, and link review |
| French copy | French reviewer | Native-language review before release |
| Kiswahili copy | Kiswahili reviewer | Native-language review before release |
| Legal and privacy copy | Legal reviewer | Written approval before treating as policy |
| Images and alt text | Design/content owner | Asset-register and rights review |

The English Privacy Notice is approved by legal as of 15 August 2026. Cookies, terms, accessibility, and localized policy pages remain pending their respective legal or language approvals.

## Claims workflow

1. Identify the claim in the page or metadata.
2. Locate the supporting product document or approved source in `docs/references/`.
3. Record the claim, source, scope, status, owner, and review date in the claim register when one is introduced.
4. Label targets and unverified capabilities as planned or qualified; do not convert them into production facts.
5. Obtain product-owner approval for pricing, modules, integrations, security controls, and performance statements.
6. Re-run the affected route checks and update `docs/project/CURRENT-STATE.md`.

Do not publish client counts, certifications, regulatory approvals, production security outcomes, or performance guarantees unless the repository contains evidence and a named approver.

## Localisation rules

English is the route and claim reference language. French is authored for Francophone African readers; Kiswahili is authored in respectful standard Kiswahili for East African readers. Do not use raw machine translation as final copy. Keep navigation labels, calls to action, breadcrumbs, metadata, canonical URLs, and alternate links aligned.

When a localized page is intentionally unavailable, use an explicit approved fallback or a noindex decision. Never leave a language switcher pointing to an unrelated page without recording the decision.

## Updating common content

- **Pricing:** update the pricing source and every affected locale or explicitly record a locale exception; verify currency and billing terms.
- **Product modules:** update the capability map, detail route, route equivalence, and relevant product documentation.
- **Testimonials:** add only with written permission, attribution scope, and a source record; do not imply endorsement beyond the approved wording.
- **Blog:** store research notes with the article and include source links for every statistic, law, standard, or market claim.

## Release checklist

- Copy is free of placeholder text and unsupported claims.
- Every changed route has accurate title, description, canonical, and locale alternates.
- Links and images resolve in `dist/`.
- Legal status is visible and accurate.
- Typecheck, build, and changed-template visual checks pass.
