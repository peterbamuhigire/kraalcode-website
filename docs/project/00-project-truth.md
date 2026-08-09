# Kraal Code Website — Project Truth

**Created:** 2026-08-09 (Phase 1)
**Last updated:** 2026-08-09

---

## Repository Identity

| Field | Value |
|-------|-------|
| Repository | `C:\wamp64\www\kraalcode-website` |
| Product codebase | `C:\wamp64\www\kraal-code` |
| Framework | Astro 5.12+ (static site generator) |
| Language | TypeScript (strict) |
| CSS | Vanilla custom properties (`--kc-*` tokens) — no Tailwind, no SCSS |
| Site URL | `https://kraalcode.com` |
| i18n | English, French, Kiswahili (locale-prefixed routes) |
| Build | Sharp image optimisation, trailing slashes, directory output |

---

## What Exists

### Website (kraalcode-website)

**12 pages built:**

| Route | Status | Content |
|-------|--------|---------|
| `/en/` | Complete | 9 section components + JSON-LD structured data |
| `/en/product/` | Complete | 19 modules listed (6 core + 13 add-on) |
| `/en/capabilities/` | Complete index | 8 cards — but detail pages are dead links |
| `/en/sectors/` | Complete index | 8 cards — but detail pages are dead links |
| `/en/security/` | Complete | 8 security controls + 3 data protection cards |
| `/en/why/` | Complete | 6 reason cards |
| `/en/work-from-anywhere/` | Complete | 3 context cards + 4 control cards |
| `/en/company/` | Complete | 4 design principles |
| `/en/contact/` | Complete UI | 8-field form — `action="#"`, no backend |
| `/en/resources/` | **Placeholder** | 6 cards all "Coming soon" (replaced by Blog in Phase 21) |
| `/fr/` | Complete | Homepage only — all subpages missing |
| `/sw/` | Complete | Homepage only — all subpages missing |

**Components:**
- 9 section components (Hero, Outcome, WorkAnywhere, CapabilityMap, AfricanContext, Security, Pricing, Implementation, FinalCTA)
- 2 global components (Header, Footer)
- 1 layout (BaseLayout)
- 0 UI components (shared Button/Card/Grid don't exist yet)

**Styles:**
- `tokens.css` — 142 lines, full design token system
- `reset.css` — 108 lines, modern CSS reset
- `global.css` — 260 lines, typography, containers, section variants

**Assets:**
- 53 JPG images in `src/assets/images/` (54–485KB each)
- 5 PNG files in `public/icons/` (logos + favicons)
- 0 font files (MISSING)
- 0 SVG files (MISSING)

### ERP Codebase (kraal-code)

**~434 user-facing PHP pages** across 16 modules:

| Module | SRS Doc | Key Screens | Status |
|--------|---------|-------------|--------|
| Accounting & GL | `SRS_Accounting.docx` | 13 | Fully implemented |
| Inventory | `SRS_Inventory.docx` | 8 | Fully implemented |
| Sales | `SRS_Sales.docx` | 5 | Implemented |
| Procurement | `SRS_Procurement.docx` | 6 | Implemented |
| HR & Payroll | `SRS_HRPayroll.docx` | 8 | Implemented |
| Manufacturing | `SRS_Manufacturing.docx` | 7 | Implemented |
| Sales & CRM | `SRS_SalesCRM.docx` | 2 | Partial |
| Sales Agents | `SRS_SalesAgents.docx` | 4 | Implemented |
| POS | `SRS_POS.docx` | 3 | Implemented |
| Projects | `SRS_Projects.docx` | 3 | Minimal |
| Strategy & BSC | `SRS_StrategyBSC.docx` | 5 | Implemented |
| Assets | `SRS_Assets.docx` | 1 | Minimal |
| Cooperative | `SRS_Cooperative.docx` | 3 | Implemented |
| Platform/Tenancy | `SRS_Platform_Tenancy.docx` | 3 | Implemented |
| RBAC | `SRS_RBAC.docx` | 4 | Implemented |
| Audit Log | `SRS_AuditLog.docx` | 1 | Implemented |

**Additional modules (SRS exists, implementation unclear):**
- Advanced Inventory (`SRS_AdvancedInventory.docx`)
- AI Intelligence (`SRS_AIIntelligence.docx`)
- Integration Layer (`SRS_IntegrationLayer.docx`)
- Localisation (`SRS_Localisation.docx`)
- Mobile API (`SRS_MobileAPI.docx`)
- PLM (`SRS_PLM.docx`)
- Supply Chain Planning (`SRS_SupplyChainPlanning.docx`)
- Transportation (`SRS_Transportation.docx`)

**Three-tier panels:**
- `/public/` — Tenant admin workspace (~381 pages)
- `/public/superadmin/` — Platform admin (13 screens)
- `/public/sales-agents/` — Agent self-service portal (12 screens)
- `/public/portal/` — Does not exist yet

### Reference Documents (54 DOCX files)

| Category | Count | Examples |
|----------|-------|---------|
| SRS documents | 17 | Accounting, Inventory, Sales, HR, Manufacturing, etc. |
| Architecture | 4 | HLD, LLD, DatabaseDesign, ADRCatalog |
| Test | 4 | TestPlan, TestStrategy, TestReport, TraceabilityMatrix |
| Business | 5 | BusinessCase, LeanCanvas, Vision, StakeholderAnalysis, PRD |
| Operations | 8 | DevSetup, DeploymentGuide, Infrastructure, Monitoring, Runbook |
| Security | 2 | SecurityCompliance, RiskAssessment |
| UX | 2 | UXSpec, UserManual |
| Other | 7 | FAQ, DoD, DoR, IoTSignalInventory, CodingGuidelines, ContributionGuide, OnboardingGuide |

---

## What Is Broken or Missing

### Critical (blocks launch)

| Issue | Impact | Phase |
|-------|--------|-------|
| Font files missing (woff2) | Headings fall back to Georgia, body to Segoe UI | 05 |
| SVG logos missing | Header and Footer logo links broken | 05 |
| 16 broken links | 8 capability detail pages + 8 sector detail pages | 07, 08 |
| FR/SW subpages missing | Only homepages exist for French and Kiswahili | 10 |
| Contact form not wired | `action="#"`, no submission handler | 09 |

### Important (should fix)

| Issue | Impact | Phase |
|-------|--------|--------|
| Favicons oversized (201KB each) | Should be <10KB | 05 |
| Resources page placeholder | All "Coming soon" — replaced by Blog | 09, 21 |
| No root redirect (`/`) | Root URL serves nothing | 05 |
| No custom 404 page | Unknown routes show default | 05 |
| No @astrojs/sitemap | No XML sitemap generated | 11 |
| Button styles duplicated | Same styles in 8+ components | 04 |
| Swahili bug in OutcomeSection | `caption` instead of `description` key | 06 |
| OG default image missing | Social sharing fallback broken | 05 |
| No `@font-face` declarations | Only `<link rel="preload">`, fonts may not render | 05 |

### Nice-to-have

| Issue | Impact | Phase |
|-------|--------|--------|
| No eslint installed | Lint script references missing dep | 05 |
| No tests | No automated quality checks | 05 |
| No CI/CD pipeline | No automated build verification | 15 |
| No analytics | No measurement or tracking | 15 |

---

## Colour Palette (extracted from logos)

| Token | Hex | Usage |
|-------|-----|-------|
| `--kc-charcoal` | `#202833` | Deep charcoal — wordmark, primary text |
| `--kc-teal` | `#46696b` | Dark teal — symbol, primary brand |
| `--kc-teal-deep` | `#3a565a` | Deeper teal — hover states, links |
| `--kc-teal-light` | `#5a8a8e` | Lighter teal — interactive elements |
| `--kc-ivory` | `#ccd9d2` | Warm ivory — dark mode text |
| `--kc-champagne` | `#dbd1b8` | Champagne — dark mode accent |
| `--kc-surface-light` | `#f8f6f3` | Warm off-white — page background |
| `--kc-surface-warm` | `#f0ece5` | Warmer surface — card backgrounds |
| `--kc-surface-dark` | `#1a1f28` | Near-black — dark sections |
| `--kc-surface-darker` | `#141820` | Deepest dark — footer |

---

## Typography

| Role | Font | Licence | Coverage |
|------|------|---------|----------|
| Display/Headlines | Source Serif 4 | SIL Open Font (free) | Latin-ext (EN, FR diacritics, SW) |
| Body/UI | Source Sans 3 | SIL Open Font (free) | Latin-ext (EN, FR diacritics, SW) |
| Mono (referenced) | JetBrains Mono | SIL Open Font (free) | Latin |

**Status:** Font files are NOT present in `public/fonts/`. Preload links exist in BaseLayout but files must be obtained.

---

## Verified Claims (safe for website copy)

From `docs/project/PROGRESS.md`:
- 6 core modules + 13 add-on modules + 4 platform services = 23 total components
- Organisation-wide flat pricing from UGX 250,000/month
- Zero implementation fee — self-provisioning designed
- UGX-denominated pricing — no USD/EUR exchange rate exposure
- Africa-native integrations from Day 1 (EFRIS, MTN MoMo, Airtel Money, M-Pesa)
- Fully managed SaaS
- OWASP Top 10 (2021) mapped with specific controls
- AES-256 encryption for sensitive data at rest
- Immutable INSERT-only audit log with 7-year retention
- TLS 1.3 in transit
- Multi-tenant row-level isolation

---

## Claims to Use with Caution

- "Golden Rule: ≥85% unassisted task success target" — not yet measured
- "Zero implementation fee" — designed, not load-tested
- "Provisioning in ≤10 minutes" — target, not verified
- EFRIS integration — use "EFRIS-ready" without sandbox evidence

---

## Claims NOT to Make Yet

- NITA-U compliance
- PDPA compliance (legal review pending)
- ISO 27001 certification (12-month roadmap)
- Production-tested security
- Any specific client count or revenue figure
