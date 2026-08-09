# Kraal Code Marketing Website — 21-Phase Master Plan

**Created:** 2026-08-09
**Repository:** `C:\wamp64\www\kraalcode-website`
**Product codebase:** `C:\wamp64\www\kraal-code`
**Target:** kraalcode.com — a world-class, multilingual marketing website that sells Kraal Code ERP subscriptions and wins website design engagements

---

## Current State Assessment

### What Exists (built in prior session)
- Astro 5.12 project scaffolded with TypeScript strict mode
- Design tokens (Source Serif 4 + Source Sans 3, teal-charcoal-ivory palette)
- BaseLayout with SEO, hreflang, structured data, skip link
- Header with trilingual nav, mobile menu, language switcher
- Footer with 4-column links, legal links, language switcher
- 9 section components (Hero, Outcome, WorkAnywhere, CapabilityMap, AfricanContext, Security, Pricing, Implementation, FinalCTA)
- 12 pages built: 3 homepages (EN/FR/SW) + 9 English subpages
- 54 optimised images in `src/assets/images/`
- 2 logo variants in `public/icons/`
- 54 DOCX reference documents in `docs/references/`

### Critical Gaps
1. **16 broken links** — 8 sector detail pages + 8 capability detail pages linked but not built
2. **FR/SW subpages missing** — only homepages exist for French and Swahili
3. **Resources page is placeholder** — all 6 cards say "Coming soon" (will be replaced by Blog in Phase 21)
4. **Contact form not wired** — `action="#"`, no submission handler
5. **No root redirect** — `/` serves nothing (no `src/pages/index.astro`)
6. **No custom 404 page**
7. **No robots.txt, sitemap, llms.txt** content
8. **No product screenshots** — placeholder images only
9. **No Trust Centre** detail pages
10. **No legal/policy pages** (privacy, cookies, terms, accessibility)
11. **No @astrojs/sitemap** integration installed
12. **Button styles duplicated** across 6+ components (no shared component)
13. **Swahili bug** — `OutcomeSection.astro` uses `caption` instead of `description` for first SW outcome
14. **Font files may be missing** from `public/fonts/` (preloaded but not confirmed on disk)

---

## Plan Structure

Phases 1–15: Website build (strategy through launch)
Phases 16–20: ERP product screenshots (capture, process, integrate)
Phase 21: Blog content strategy & publication (independent of screenshots, runs after Phase 15)

Each phase directory contains:
- `PLAN.md` — objectives, tasks, deliverables, resources, acceptance criteria
- `research/` — research inputs and source registers (where applicable)
- `assets/` — image specs, font manifests, icon inventories (where applicable)
- `decisions/` — architecture decision records (where applicable)

---

## Phase Map

| Phase | Name | Depends On | Key Deliverable |
|-------|------|------------|-----------------|
| 01 | Discovery & Project Truth | — | Project truth doc, input inventory, gap register |
| 02 | Product Strategy & Research | 01 | Claim register, audience map, research source register |
| 03 | Information Architecture | 01, 02 | Sitemap, route-equivalence map, content schemas |
| 04 | Brand Direction & Design System | 03 | Visual direction, typography, palette, component library |
| 05 | Technical Foundation | 04 | Stack ADR, tokens, base styles, CI, testing scaffold |
| 06 | English Core — Homepage | 05 | Refactored homepage with shared components |
| 07 | English Core — Product & Capabilities | 06 | Product page, 8 capability detail pages |
| 08 | English Core — Sectors, Security, Why | 07 | 8 sector pages, Trust Centre, Why page refinement |
| 09 | English Core — Contact, Resources, Legal | 08 | Wired form, 6 resource articles, 5 legal pages |
| 10 | Multilingual Localisation | 09 | FR/SW for all pages, native review, hreflang parity |
| 11 | SEO & Discoverability | 10 | Sitemap, robots.txt, llms.txt, structured data, internal links |
| 12 | Accessibility & Performance | 11 | WCAG 2.2 AA, Lighthouse targets, image optimisation |
| 13 | Security Hardening & Privacy | 12 | CSP, headers, security.txt, consent, form security |
| 14 | Quality Gates & Design Audit | 13 | Visual QA, design quality score, AI-slop audit |
| 15 | Handover & Launch Readiness | 14 | Deploy docs, maintenance guide, runbook |
| 16 | Screenshots — Core Dashboards & Finance | 07 | Executive dashboard, accounting, P&L, balance sheet screenshots |
| 17 | Screenshots — Sales, POS & CRM | 16 | POS terminal, invoices, customer management screenshots |
| 18 | Screenshots — Inventory, Procurement & Manufacturing | 17 | Stock dashboard, GRN, production orders, recipe builder screenshots |
| 19 | Screenshots — HR, Payroll & People | 18 | Payroll run, leave, appraisals, staff profile screenshots |
| 20 | Screenshots — Admin, Strategy & Integrations | 19 | Super admin, module mgmt, BSC, permissions, audit screenshots |
| 21 | Blog Content Strategy & Publication | 15 | 5 researched articles, blog infra, pagination, multilingual |

---

## Quality Standards (applied throughout)

### Language Targeting (non-negotiable)

Every multilingual output targets these audiences. This standard is enforced across the website-skills and social-media-skills engines.

| Locale | Primary Markets | Secondary Markets | Reader Profile | Register |
|--------|----------------|-------------------|----------------|----------|
| **English** | East Africa (UG, KE, TZ, RW) | All English-speaking Africa + global | Advanced comprehension; educated professionals (often L2/L3) | British-influenced East African professional; globally readable |
| **French** | DRC, Congo-Brazzaville, Burundi, Senegal, Mali, Côte d'Ivoire, Togo, Cameroon, Gabon, Madagascar | All francophone Africa | Advanced comprehension; educated professionals (often L2/L3) | Formal vous; francophone African professional; never France-centric |
| **Kiswahili** | Kenya, Tanzania, DR Congo | Uganda (limited), Rwanda, Burundi | Advanced comprehension; educated professionals | Respectful Kiswahili sanifu; no slang, no Sheng |

**Rules:**
1. English must be globally readable — a professional in London, Lagos, or Nairobi must understand every sentence.
2. French targets francophone Africa, not France — reference OHADA, BCEAO/BEAC, FCFA.
3. Kiswahili targets Kenya and Tanzania first, DR Congo second.
4. Advanced reader assumption — do not simplify or patronise.
5. No raw translation — each language is authored from meaning.
6. No AI slop — every sentence must pass as human-written.

### Anti-AI-Slop (non-negotiable)
Every section must carry at least one concrete, domain-specific, verified element. No tool defaults, no placeholder copy, no generic SaaS language. Grade F from the slop audit blocks progression.

### Evidence Discipline
Every public claim about capabilities, security, pricing, compliance, or performance must have a source in `docs/references/` or a verified external reference. Unverified claims are marked as gaps, never filled with plausible language.

### Design Doctrine
No banned AI-default typefaces (Inter, Roboto, Geist, Arial as primary). No purple/blue gradients. No glass cards. No gradient text. No uniform card piles. No centred two-button SaaS hero. The site must look authored by an exceptional human team.

### Performance
- LCP < 2.5s on 3G (African calibration)
- CLS < 0.1
- Total JS < 50KB gzipped
- All images responsive AVIF/WebP with srcset/sizes
- Font loading within documented budget

### Accessibility
- WCAG 2.2 AA floor
- Semantic HTML, skip link, keyboard navigation
- Focus visible, target sizes adequate
- Reduced motion support
- Screen reader smoke test per page family

---

## Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Master Build Prompt | `docs/KRAAL-CODE-WEBSITE-MASTER-BUILD-PROMPT.md` | 1595-line execution authority |
| Product Description | `C:\wamp64\www\kraal-code\docs\product-description.md` | Verified product claims |
| Project Brief | `C:\wamp64\www\kraal-code\PROJECT_BRIEF.md` | Module list, tech stack |
| Progress Log | `docs/project/PROGRESS.md` | Prior session decisions |
| 54 Reference DOCX | `docs/references/` | Complete SDLC suite |
| Design Tokens | `src/styles/tokens/tokens.css` | Colour, type, spacing |
| Website Skills Engine | `C:\wamp64\www\website-skills` | Build, QA, launch skills |
| Design System Engine | `C:\wamp64\www\design-system-skills` | Typography, colour, layout doctrine |
| Digital Research Engine | `C:\wamp64\www\digital-research-engine` | Evidence, source evaluation |
| Social Media Skills | `C:\wamp64\www\social-media-skills` | Content, campaign, SEO |

---

## Execution Notes

- Phases 01–05 are strategy, design, and foundation work (no visible pages)
- Phases 06–09 build the English site (the core deliverable)
- Phase 10 adds French and Swahili
- Phases 11–15 are quality, security, and launch readiness
- Phase 16–20 are screenshot capture and integration (run after the ERP codebase has matured)
- **Phase 21 is the blog content phase** — replaces the placeholder Resources page with 5 researched, dated articles. Runs independently after Phase 15, concurrent with screenshot phases if desired. Blog infrastructure: featured article (1+4 layout on first page), 6 per page on subsequent pages, proper pagination, categories, RSS.
- Each phase has an explicit gate that must pass before the next phase begins
- The website must look like it was built by a senior design agency, not by an AI

## Blog Architecture (Phase 21)

The Resources section is replaced by a professional blog:

**First page layout:** 1 featured article (large hero) + 4 standard articles (2×2 grid)
**Subsequent pages:** 6 articles per page in 3×2 grid with professional pagination
**URL structure:** `/en/blog/`, `/en/blog/2/`, `/en/blog/category/[category]/`
**Launch content:** 5 articles dated June–August 2026, researched through the digital research engine
**Multilingual:** EN/FR/SW versions of all articles
**Categories:** Product Updates, Industry Insights, How-To Guides, Security & Compliance, Customer Stories
