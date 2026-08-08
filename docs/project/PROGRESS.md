# Kraal Code Website — Build Progress

**Last updated:** 2026-08-09  
**Current phase:** Design & Brainstorming (Phase 0-3 combined)  
**Next action:** Complete design sections, then begin implementation

---

## Decisions Made

### Stack
- **Framework:** Astro 5 (static-first) + TypeScript (strict)
- **Styling:** Component-scoped styles (Astro's built-in `<style>`)
- **Content:** Astro content collections with locale separation (EN/FR/SW)
- **Images:** Astro `<Image />` for responsive AVIF/WebP at build time
- **JS:** Minimal client-side JS, progressive enhancement

### Typography
- **Headlines:** Source Serif 4 (Adobe, open-source, multilingual Latin coverage)
- **Body/UI:** Source Sans 3 (Adobe, open-source, excellent readability)
- **Rationale:** Distinctive but professional, strong French diacritics and Kiswahili coverage, free and self-hostable, no banned AI-default fonts

### Visual Direction
- **Organising idea:** Geometric System — structured interlocking paths derived from the kraal/longhorn logo mark
- **Character:** Assured, operational, distinctly African, premium without luxury theatre
- **No:** Purple/blue gradients, glass cards, gradient text, uniform card piles, centred two-button SaaS hero

### Sector Positioning (User Directive)
- **Core message:** Kraal Code is a customisable ERP that adapts to YOUR sector
- **Sectors to present:** Manufacturers, traders/distributors, non-profits/NGOs, consultancy/professional services, agriculture/cooperatives, retail/POS, hospitality, schools, multi-branch organisations
- **Angle:** Not "one-size-fits-all" — show how the same platform configures differently for a manufacturer vs a consultancy vs an NGO
- **Proof:** Manufacturing has BOM/routings/OEE; NGOs have donor restriction tracking; consultancies have project billing; traders have multi-warehouse/POS

### Brand Colours (extracted from logos)
- **Deep charcoal (wordmark):** `#202833`
- **Dark teal (symbol):** `#46696b`
- **Deeper teal accent:** `#3a565a`
- **Warm ivory (dark mode text):** `#ccd9d2`
- **Champagne accent (dark mode):** `#dbd1b8`
- **Dark teal-green (dark mode symbol):** `#39585d`

### Scope
- **This session:** Full English site + French/Kiswahili multilingual implementation
- **Excluded:** Screenshots (not available yet), production deployment

### Conversion Strategy
- **Primary CTA:** Request a guided Kraal Code demonstration
- **Secondary CTA:** Discuss your organisation's requirements
- **Low-commitment:** Explore capabilities, security, sectors

---

## Repository State

### What exists
- `.git/` — initialized repo
- `docs/KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md` — 1595-line master build prompt
- `docs/references/` — 54 DOCX files (complete SDLC suite)
- `photo-bank/` — 72 images (logos + business photography)
- `docs/project/PROGRESS.md` — this file

### What needs to be created
- `astro.config.mjs`
- `package.json`
- `tsconfig.json`
- `src/` directory structure
- Design tokens, components, layouts, pages
- Content collections (EN/FR/SW)
- All project artefacts under `docs/project/`

---

## Content Synthesis (from reference docs)

### Product Positioning
> Kraal Code is a multi-tenant, modular, cloud-hosted SaaS ERP platform purpose-built for mid-sized and growing organisations in East and Central Africa — priced per organisation (not per seat), denominated in Ugandan Shillings, and designed so any employee can use it on their first day without training.

**Owner:** Chwezi Core Systems  
**Lead Developer:** Peter Bamuhigire  
**Product site:** kraalcode.com | **Company site:** chwezicore.com

### Key Verified Claims (safe for website copy)
- 6 core modules (always active) + 13 add-on modules + 4 platform services = 23 total components
- Organisation-wide flat pricing from UGX 250,000/month (~$67) for the whole organisation
- Zero implementation fee — self-provisioning in ≤ 10 minutes
- Zero mandatory training — enforced by ≥85% unassisted task success rate (Golden Rule)
- UGX-denominated pricing — no USD/EUR exchange rate exposure
- Africa-native integrations from Day 1 (EFRIS, MTN MoMo, Airtel Money, M-Pesa)
- Localisation via configuration — adding a new country requires only a localisation profile
- Fully managed SaaS — no on-premise installation, no server procurement
- OWASP Top 10 (2021) mapped with specific controls
- AES-256 encryption for sensitive data
- Immutable INSERT-only audit log with 7-year retention
- TLS 1.3 in transit
- Multi-tenant row-level isolation

### Claims to Use with Caution
- "Golden Rule: ≥85% unassisted task success target" — not yet measured in production
- "Zero implementation fee" — self-provisioning designed, not yet load-tested
- "Provisioning in ≤10 minutes" — target, not verified
- EFRIS integration — use "EFRIS-ready" cautiously without sandbox evidence

### Claims NOT to Make Yet
- NITA-U compliance
- PDPA compliance (legal review pending)
- ISO 27001 certification (12-month roadmap)
- Production-tested security
- Any specific client count or revenue figure

### Pricing Tiers (verified)
| Plan | UGX/month | Users | Branches |
|---|---|---|---|
| Starter | 250,000 | Up to 5 | Up to 2 |
| Small Business | 500,000 | Up to 15 | Up to 5 |
| Professional | 1,000,000 | Up to 30 | Up to 10 |
| Business | 1,750,000 | Up to 60 | Up to 20 |
| Enterprise | 2,500,000 | Unlimited | Unlimited |

Annual billing: 10 months for 12 months (2 months free).

### Module List
**Core (always active):** Accounting/GL, Inventory, Sales, Procurement, User Management/RBAC, Audit Log

**Add-ons:** Advanced Inventory, Manufacturing (MES-grade), HR & Payroll (4 countries), POS, Sales & CRM, Sales Agents, Outgrower/Farmer Operations, Project Management, Strategy & BSC, Asset Management, AI Intelligence, PLM, Transportation & Fleet

### Target Markets
- **Phase 1 (launch):** Uganda
- **Phase 2 (24 months):** Kenya, Tanzania, Rwanda
- **Phase 3 (36 months):** DRC, Cameroon, Côte d'Ivoire, Senegal, Mali, Burkina Faso, South Sudan, Burundi

### Ideal Customer Profile
- 5–500 employees
- UGX 10M–10B monthly revenue
- Non-technical owner or small IT team (1–3 people)
- Currently on spreadsheets, QuickBooks, or partial legacy ERP

---

## Page Architecture (planned)

### Primary Navigation
- Product
- Capabilities
- Why Kraal Code
- Security & Privacy
- Resources
- Company
- Request a Demo
- Language Switcher (EN/FR/SW)

### Phase 1 Page Families
1. **Home** — Hero, outcome story, work-from-anywhere, capability map, African context, security, sectors, implementation, proof, demo CTA
2. **Product/Platform** — One modular operating environment, shared data, governed workflows
3. **Capabilities Index** — Structured capability groups (Finance, Sales, Inventory, Procurement, Manufacturing, HR, Projects, Field Ops, Reporting, Platform)
4. **Security & Privacy** — Buyer-readable controls summary, Trust Centre architecture
5. **Why Kraal Code** — Philosophy, local fit, modularity, implementation, regional context
6. **Work from Anywhere** — Laptop, phone, field, branch, remote, cross-border
7. **Industries** — Manufacturing, Distribution, Retail, Services, NGOs, Agriculture, Multi-branch
8. **Implementation & Support** — Discovery, configuration, onboarding, training, rollout
9. **About/Company** — Product story, purpose, team, design philosophy
10. **Contact/Request Demo** — Accessible form with privacy notice
11. **Legal pages** — Privacy notice, Cookie notice, Website terms, Accessibility statement

### URL Strategy
```
/en/product
/en/capabilities
/en/capabilities/accounting
/en/security
/fr/produit
/fr/capacites
/fr/securite
/sw/bidhaa
/sw/uwezo
/sw/usalama
```

---

## Quality Gates (from master prompt)

- WCAG 2.2 AA floor
- Lighthouse performance targets (African 3G calibration)
- No horizontal overflow at required widths/locales
- Valid canonical/hreflang/sitemap
- No fabricated claims
- No exposed secrets
- AI-slop audit grade A or B (C/F blocks ship)
- Design-quality score at world-class floor

---

## Photo Bank Audit (2026-08-09)

**Total:** 72 images | **Usable:** 65 | **Hero candidates:** 22 | **Duplicates:** 3 | **Not suitable:** 4

### Strong Coverage
- Remote/mobile work (6 images) — Work from Anywhere page well-served
- Technology/cloud (13 images) — Product/Platform and Security pages
- Finance/accounting (7 images) — Finance capability well-served
- Manufacturing/industrial (7 images) — Manufacturing industry well-served
- Agriculture (4 images) — Agriculture industry well-served

### Critical Gaps (need new photos or creative treatment)
- Sales/CRM/POS — zero images
- Procurement — zero images
- Retail — zero images
- Hospitality — zero images
- Schools — zero images
- Consultancy/professional services — zero images
- Homepage hero — no dedicated brand-defining hero image

### Images to Remove
- `african-american-prosecutor-reading-file...` (law enforcement)
- `beautiful-excited-pictures.jpg` (vague/unclear)
- `justice-law-concept-legal-counsel...` (legal/law)
- `police-officer-examining-complicated-case...` (law enforcement)

### Asset Move Complete (2026-08-09)
- **38 photos** moved to `src/assets/images/` (organized by page)
- **2 logos** moved to `public/icons/` (kraalcode-light.png, kraalcode-dark.png)
- **35 photos** remain in `photo-bank/` (unused, duplicates, extras)
- **4 unsuitable** still in photo-bank (law enforcement/legal — delete when convenient)

### Image Assignments by Page
| Page | Images Used |
|---|---|
| Homepage | work-from-anywhere-online-meeting, african-context-smart-farming, security-cloud-network, manufacturing-solar-engineers, inventory-logistics-tablet |
| Product/Platform | erp-platform-overview, programmer-holographic-dashboard |
| Capabilities > Finance | finance-payroll-calculator, finance-team-payroll-analysis, finance-hands-calculator, finance-spreadsheet-analysis |
| Capabilities > Inventory | inventory-warehouse-supervisors, inventory-employees-device |
| Capabilities > HR | hr-people-networking, hr-management-concept |
| Capabilities > Manufacturing | manufacturing-smart-factory, manufacturing-automation |
| Capabilities > Projects | projects-gantt-chart, projects-milestones |
| Capabilities > Reporting | reporting-analytics-laptop |
| Industries > Manufacturing | manufacturing-solar-technician, manufacturing-factory-machine |
| Industries > Agriculture | agriculture-sorghum-field, agriculture-woman-farmer |
| Industries > Non-Profits | nonprofits-volunteers, nonprofits-charity-drive |
| Work from Anywhere | remote-work-home-laptop, remote-work-sofa, remote-work-freelancer, remote-work-desk-phone |
| Security & Privacy | security-cloud-tablet-globe, security-cloud-database, security-folders-padlock, security-screens-darkroom |
| About/Company | about-team-strategy-meeting, about-modern-office, about-conference-room |
| Contact | contact-signing-paperwork |

### New Photos Added (2026-08-09)
User added 16 new photos covering all previous gaps:
- **Retail/POS:** retail-pos-terminal, retail-local-market
- **Procurement:** procurement-supply-chain, procurement-purchase-order
- **Hospitality:** hospitality-hotel-pool, hospitality-breakfast
- **Healthcare:** healthcare-pharmacist, healthcare-pharmacy-inventory, healthcare-medical-assistant, healthcare-doctor-dms
- **Schools/Education:** schools-science-lesson, schools-student-tablet, schools-classroom
- **Consultancy:** consultancy-analysts-meeting, consultancy-analytics-review, consultancy-scientist-lab

**All sector gaps now filled.** Total assets: 54 images in src/assets/images/
- Security: `cyber-security-cloud-network...`
- Manufacturing sector: `team-black-engineers-finetuning-manufacturing-solar-panels.jpg`

---

## What to Do Next

1. ✅ Complete design sections (brainstorm)
2. ✅ Scaffold Astro project (Phase 4)
3. ✅ Implement design tokens and base styles (Phase 4)
4. ✅ Build Header component
5. ⬜ Build Footer component
6. ⬜ Build homepage sections
7. ⬜ Create content collections for EN/FR/SW
8. ⬜ Build remaining English pages (Product, Capabilities, Sectors, Security, Why, Work from Anywhere, Contact)
9. ⬜ Implement French and Kiswahili (Phase 6)
10. ⬜ Quality checks (Phase 7-8)
11. ⬜ Handover documentation (Phase 9)

---

## Files to Read for Continuation

If another agent needs to continue this work:
1. `docs/project/PROGRESS.md` — this file (current state)
2. `docs/KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md` — full master prompt (1595 lines)
3. `docs/references/` — 54 DOCX files (SDLC suite)
4. `photo-bank/` — 72 images including logos
5. Engine routers:
   - `C:\wamp64\www\website-skills\CLAUDE.md`
   - `C:\wamp64\www\design-system-skills\README.md`
   - `C:\wamp64\www\design-system-skills\doctrine\design-doctrine.md`

---

## User Directives

- **Anti-AI-Slop:** Be very strict. Every section must have at least one concrete, domain-specific element. No tool defaults, no placeholder copy. Run slop audit after each major iteration.
- **SEO & LLM Optimization:** Be very thorough. Implement full metadata, structured data (Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage), hreflang, canonical, sitemap, robots.txt, and llms.txt. Follow Google AI Search guidance — no unsupported AEO claims.
- **Progress Tracking:** Always update this document so another AI agent can continue if tokens run out.

---

## Skills Loaded

- `website-skills` — master orchestrator for website builds
- `design-system-skills` — anti-AI-slop design engine, typography, colour, layout
- `seo` skill — metadata, structured data, sitemaps, hreflang, canonical
- `google-ai-search` skill — official Google AI Search guidance
- `anti-ai-slop` skill — continuous slop detection

---

## Open Questions

- [ ] Need to verify which photos have model releases (rights status unknown)
- [ ] Need to confirm which SRS modules are implemented vs prospective
- [ ] Need to decide on analytics/consent provider
- [ ] Need to confirm hosting and domain
