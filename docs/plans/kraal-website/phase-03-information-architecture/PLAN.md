# Phase 03 — Information Architecture & Content Model

**Directory:** `docs/plans/kraal-website/phase-03-information-architecture/`
**Depends on:** Phases 01, 02
**Gate:** Every route has audience, job, content owner, CTA, proof requirement, locale status, acceptance criteria

---

## Objective

Define every page the website will contain, what each page does for which audience, how pages connect, and how content is structured. Fix the 16 broken links by defining what each missing page must contain.

---

## Tasks

### 3.1 Sitemap Finalisation

Complete page tree with all page families:

```
/ (root redirect → /en/)
├── /en/
│   ├── /en/product/                    ← Platform overview (EXISTS, refine)
│   ├── /en/capabilities/              ← Capabilities index (EXISTS, refine)
│   │   ├── /en/capabilities/accounting/      ← BUILD
│   │   ├── /en/capabilities/inventory/       ← BUILD
│   │   ├── /en/capabilities/sales/           ← BUILD
│   │   ├── /en/capabilities/procurement/     ← BUILD
│   │   ├── /en/capabilities/manufacturing/   ← BUILD
│   │   ├── /en/capabilities/hr-payroll/      ← BUILD
│   │   ├── /en/capabilities/projects/        ← BUILD
│   │   └── /en/capabilities/reporting/       ← BUILD
│   ├── /en/sectors/                   ← Sectors index (EXISTS, refine)
│   │   ├── /en/sectors/manufacturing/        ← BUILD
│   │   ├── /en/sectors/trading/              ← BUILD
│   │   ├── /en/sectors/nonprofits/           ← BUILD
│   │   ├── /en/sectors/consultancy/          ← BUILD
│   │   ├── /en/sectors/agriculture/          ← BUILD
│   │   ├── /en/sectors/retail/               ← BUILD
│   │   ├── /en/sectors/hospitality/          ← BUILD
│   │   └── /en/sectors/education/            ← BUILD
│   ├── /en/why/                        ← Why Kraal Code (EXISTS, refine)
│   ├── /en/work-from-anywhere/         ← Remote work (EXISTS, refine)
│   ├── /en/security/                   ← Security & Trust Centre (EXISTS, expand)
│   │   └── /en/security/disclosure/          ← BUILD (responsible disclosure)
│   ├── /en/company/                    ← About (EXISTS, refine)
│   ├── /en/resources/                  ← Resources hub (EXISTS, content needed)
│   │   └── /en/resources/[slug]/             ← BUILD (6 article detail pages)
│   ├── /en/contact/                    ← Demo request form (EXISTS, wire form)
│   ├── /en/legal/
│   │   ├── /en/legal/privacy/                ← BUILD
│   │   ├── /en/legal/cookies/                ← BUILD
│   │   ├── /en/legal/terms/                  ← BUILD
│   │   └── /en/legal/accessibility/          ← BUILD
│   └── /en/search                      ← Future (structured data references it)
├── /fr/ (all equivalents with localised slugs)
│   ├── /fr/produit/
│   ├── /fr/capacites/
│   │   ├── /fr/capacites/comptabilite/
│   │   └── ... (8 detail pages)
│   ├── /fr/secteurs/
│   │   ├── /fr/secteurs/industrie/
│   │   └── ... (8 detail pages)
│   └── ... (all equivalents)
└── /sw/ (all equivalents with localised slugs)
    ├── /sw/bidhaa/
    ├── /sw/uwezo/
    │   ├── /sw/uwezo/hasibu/
    │   └── ... (8 detail pages)
    ├── /sw/sekta/
    │   ├── /sw/sekta/viwanda/
    │   └── ... (8 detail pages)
    └── ... (all equivalents)
```

### 3.2 Route-Equivalence Map

Create a complete map with fields:
- Route ID, page family, locale, localised slug, canonical URL, equivalent route IDs, content status, native review status, indexability, hreflang eligibility, redirect/fallback behaviour, sitemap status

Output: `docs/project/route-equivalence-map.md`

### 3.3 Content Schema Per Page Family

For each page family, define:
- **Fields:** heading, subheading, body sections, CTAs, images, proof elements
- **Proof requirements:** which claims, which SRS docs, which screenshots
- **CTA:** primary action, secondary action, low-commitment action
- **Screenshot slots:** where ERP screenshots will be placed (phases 16-20)

Page families to schema:
1. Homepage (exists — refine)
2. Product/Platform overview (exists — refine)
3. Capability detail ×8 (new)
4. Sector detail ×8 (new)
5. Security/Trust Centre (exists — expand)
6. Why Kraal Code (exists — refine)
7. Work from Anywhere (exists — refine)
8. About/Company (exists — refine)
9. Resources hub + article detail (exists — content needed)
10. Contact/Demo form (exists — wire form)
11. Legal pages ×4 (new)
12. Responsible disclosure (new)

Output: `docs/project/content-schemas.md`

### 3.4 Navigation Design

1. Desktop mega-menu structure (7 items from Header.astro)
2. Mobile menu structure (same 7 items + CTA + language switcher)
3. Footer link structure (4 columns from Footer.astro)
4. Breadcrumb strategy for sub-pages
5. Internal linking strategy (how capability pages link to sector pages, how sector pages link to product)

Output: section in `docs/project/content-schemas.md`

### 3.5 Screenshot Slot Specification

For each page that will receive ERP screenshots (phases 16-20), define:
- Component ID for the screenshot slot
- Screenshot type (dashboard, form, list, report, map)
- Viewport(s) needed
- Alt text template
- Caption template
- Which ERP screen maps to this slot

Output: `docs/project/screenshot-slots.md`

### 3.6 Fix Broken Links

Define what each of the 16 broken-linked pages must contain:

**Capability pages (8):**
| Page | Must Show | SRS Source |
|------|-----------|-----------|
| /capabilities/accounting/ | GL, AP/AR, bank recon, multi-currency, budgets, financial statements | KraalCode_SRS_Accounting.docx |
| /capabilities/inventory/ | Item catalogue, FIFO/weighted avg, GRN, transfers, batch tracking, UOM | KraalCode_SRS_Inventory.docx |
| /capabilities/sales/ | Quotations, orders, invoices, CRM, POS, agents | KraalCode_SRS_Sales.docx |
| /capabilities/procurement/ | Supplier master, RFQ, three-way matching, PO workflow | KraalCode_SRS_Procurement.docx |
| /capabilities/manufacturing/ | BOM, routings, QC, OEE, yield, production orders | KraalCode_SRS_Manufacturing.docx |
| /capabilities/hr-payroll/ | Employee master, leave, attendance, payroll (NSSF/PAYE), appraisals | KraalCode_SRS_HRPayroll.docx |
| /capabilities/projects/ | Project register, WBS, timesheets, billing | KraalCode_SRS_Projects.docx |
| /capabilities/reporting/ | Dashboards, AI commentary, BSC, executive dashboard | KraalCode_SRS_StrategyBSC.docx |

**Sector pages (8):**
| Page | Must Show | Differentiator |
|------|-----------|---------------|
| /sectors/manufacturing/ | BOM, routings, work centres, QC, OEE, production orders | Full MES-grade manufacturing |
| /sectors/trading/ | Multi-warehouse, batch tracking, FEFO, PO workflow | Distribution-specific inventory |
| /sectors/nonprofits/ | Donor-restricted fund accounting, logframe, project tracking | NGO-specific accounting |
| /sectors/consultancy/ | Project billing, timesheets, expense tracking | Professional services focus |
| /sectors/agriculture/ | Outgrower registration, weighbridge, commodity intake | Agricultural supply chain |
| /sectors/retail/ | POS terminal, barcode, offline mode, stock management | Retail-specific POS |
| /sectors/hospitality/ | POS table mode, hotel/restaurant, inventory | Hospitality workflows |
| /sectors/education/ | Student fees, academic calendar, reporting | Education-specific features |

---

## Deliverables

| File | Purpose |
|------|---------|
| `docs/project/route-equivalence-map.md` | Complete route map for EN/FR/SW |
| `docs/project/content-schemas.md` | Content structure per page family |
| `docs/project/screenshot-slots.md` | Where ERP screenshots will go |

---

## Resources Required

- Phase 01 deliverables (project truth, input inventory)
- Phase 02 deliverables (claim register, audience map)
- Website skills: i18n, page-builder, navigation/IA skills
- Design system skills: composition, responsive layout

---

## Acceptance Criteria

- [ ] Every route has audience, job, content owner, CTA, proof requirement
- [ ] Every route has locale status (built/provisional/planned)
- [ ] No thin duplicate industry pages (each sector page has unique content)
- [ ] Language switching and localised slug policy is coherent
- [ ] 16 broken links are resolved with defined page content
- [ ] Screenshot slots are defined with component IDs

---

## Gate to Phase 04

The information architecture is complete. Every page has a defined purpose, audience, content structure, and proof requirement. The screenshot slot map is ready for phases 16-20.
