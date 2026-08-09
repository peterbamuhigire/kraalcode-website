# Phase 11 — SEO & Discoverability

**Directory:** `docs/plans/kraal-website/phase-11-seo-and-discoverability/`
**Depends on:** Phase 10
**Gate:** Valid sitemap, robots.txt, all structured data validates, no broken links, hreflang reciprocal

---

## Objective

Make the site discoverable by search engines and AI systems across all three locales. Implement technical SEO, structured data, and search intent optimisation.

---

## Tasks

### 11.1 Sitemap

1. Install `@astrojs/sitemap` integration
2. Configure locale-aware output (separate sitemap per locale or unified with hreflang)
3. Include only indexable routes (exclude 404, noindex pages)
4. Verify sitemap validates
5. Submit sitemap URL for future Google Search Console setup

### 11.2 Robots.txt

1. Verify `public/robots.txt` content
2. Allow all public pages
3. Disallow: admin paths, API endpoints, internal files
4. Reference sitemap location

### 11.3 llms.txt

1. Verify `public/llms.txt` content
2. Provide accurate product description for AI systems
3. List key pages and their purposes
4. Include contact information

### 11.4 Metadata per Page

For every page in every locale:
- Unique title (50-60 characters, includes "Kraal Code")
- Unique meta description (150-160 characters, includes key value proposition)
- One meaningful H1 per page
- Semantic heading order (H1 → H2 → H3, no skipping)
- Open Graph: type, title, description, image, url, site_name, locale
- Twitter Card: summary_large_image

### 11.5 Structured Data

Implement and validate JSON-LD:

| Schema Type | Pages | Properties |
|-------------|-------|------------|
| Organization | All pages (via BaseLayout) | name, url, logo, description, contactPoint, sameAs |
| WebSite | Homepage | name, url, inLanguage, potentialAction (SearchAction) |
| SoftwareApplication | Homepage, Product | name, applicationCategory, operatingSystem, description, offers, featureList |
| BreadcrumbList | All sub-pages | itemListElement with position, name, item |
| Article | Blog posts (Phase 21) | headline, datePublished, author, image |
| FAQPage | Where justified | mainEntity with Question/Answer pairs |

Validate all structured data with Google Rich Results Test (or equivalent).

### 11.6 Internal Linking

1. Capability pages link to related sector pages and vice versa
2. Sector pages link to relevant capability pages
3. Security page links to capability pages with security features
4. Product page links to all capability pages
5. Blog posts (Phase 21) link to 2-3 relevant pages
6. Footer provides comprehensive site-wide links

### 11.7 Search Intent Research

Research search intent per locale using digital research engine:

**English:**
- "ERP software East Africa" / "ERP Uganda" / "ERP Kenya"
- "cloud accounting software Africa"
- "inventory management system"
- "payroll software Uganda"
- "manufacturing ERP"

**French:**
- "logiciel ERP Afrique" / "ERP Afrique francophone"
- "logiciel comptabilité cloud"
- "gestion stock entreprise"
- "paie Afrique de l'Ouest"

**Kiswahili:**
- "mfumo ERP Afrika" / "programu ERP Tanzania"
- "mfumo wa uhasibu"
- "mfumo wa malipo"

Research rules: no hallucinated search volumes, cite sources, mark gaps.

### 11.8 Breadcrumbs

Implement breadcrumb navigation on all sub-pages:
- Home > Capabilities > Accounting
- Home > Sectors > Manufacturing
- Home > Security > Trust Centre

---

## Deliverables

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Updated with sitemap integration |
| `public/robots.txt` | Verified content |
| `public/llms.txt` | Verified content |
| Sitemap output | XML sitemaps per locale |
| All pages | Validated structured data |
| `docs/research/search-intent.md` | Search intent per locale |

---

## Acceptance Criteria

- [ ] Sitemap generates correctly for all locales
- [ ] robots.txt references sitemap
- [ ] All structured data validates
- [ ] Unique titles and descriptions per page per locale
- [ ] Reciprocal hreflang on all pages
- [ ] Canonical URLs correct
- [ ] No broken internal links
- [ ] No orphan routes
- [ ] Breadcrumbs work on sub-pages

---

## Gate to Phase 12

SEO infrastructure is complete. Sitemap, robots.txt, structured data all validate. Search intent is researched. Internal linking is comprehensive.
