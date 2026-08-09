# Phase 02 — Product Strategy & Research

**Directory:** `docs/plans/kraal-website/phase-02-product-strategy-and-research/`
**Depends on:** Phase 01
**Gate:** No load-bearing page depends on an unsupported claim; target jurisdictions named; primary conversion approved

---

## Objective

Define what the website must achieve commercially, who it speaks to, what claims it can make with evidence, and what proof each audience needs to take action. Every piece of public copy must trace back to a verified source.

---

## Tasks

### 2.1 Website Commercial Job Definition

1. Define the single most important thing the website must achieve (primary: generate qualified demo requests)
2. Define secondary objectives (build trust, establish credibility, support SEO discovery)
3. Define what the website must NOT do (no false promises, no unverified claims, no dark patterns)
4. Output: section in `docs/project/02-website-strategy.md`

### 2.2 Audience Validation & Action Mapping

Validate these 6 audiences against the product documentation and create action records for each:

| Audience | Key Questions | Primary CTA |
|----------|--------------|-------------|
| Executive decision-makers | Can I see what's happening? Can we grow? Is it secure? | Request demo |
| Finance & control leaders | Are records clean? Approvals working? Compliance? | Request demo |
| Operations leaders | Are workflows usable? Connected? Mobile? | Request demo |
| Technology & security reviewers | Architecture? Integration? Data governance? | Discuss requirements |
| Growth-stage African organisations | Moving from spreadsheets? Affordable? Local? | Explore capabilities |
| Regional & global stakeholders | Credible? Professional? Local context? | Request demo |

For each audience, create:
- Context and current situation
- Job to be done
- Current pain points
- Desired outcome
- Top objections
- Proof needed (which SRS docs, which product screens)
- Page entry point
- Primary CTA
- Alternative path for visitors not ready
- Failure/recovery path

Output: `docs/project/02-website-strategy.md` (audience section)

### 2.3 Claim Register Creation

1. Read `C:\wamp64\www\kraal-code\docs\product-description.md` for verified claims
2. Read `docs/project/PROGRESS.md` for claims already categorised (verified, cautious, not-to-make)
3. Cross-reference against SRS documents in `docs/references/`
4. Create claim register with fields:
   - Claim ID, Draft claim, Category, Source, Source location, Status, Scope, Public wording, Review owner, Review/expiry date
5. Categories: product, security, privacy, legal, performance, customer, commercial, market, roadmap
6. Status: verified, qualified, planned, aspirational, disputed, expired, not assessed
7. Output: `docs/project/05-claim-register.md`

### 2.4 Source Register

1. List every source document used (DOCX files, product-description.md, ARCHITECTURE.md, TECH_STACK.md)
2. For each: source tier (primary/secondary/tertiary), publication date, access date, claim fit, limitations, confidence, review trigger
3. Output: `docs/project/06-source-register.md`

### 2.5 Market Research (via Digital Research Engine)

Use `C:\wamp64\www\digital-research-engine` for evidence-disciplined research on:

1. **African ERP market** — market size, growth, key players, adoption barriers
2. **Competitor positioning** — SAP Business One, Oracle NetSuite, Microsoft Dynamics 365 BC, Odoo, ERPNext — pricing, positioning, strengths, weaknesses
3. **Search intent by language** — what do African businesses search for when looking for ERP? (EN/FR/SW)
4. **Cloud trust in East Africa** — what are the buyer concerns about cloud/SaaS?
5. **Mobile money landscape** — MTN MoMo, Airtel Money, M-Pesa adoption and integration expectations

Research rules:
- No hallucinated statistics
- Cite every numeric claim
- Mark gaps as "gap" not filler
- Mark synthesis as "(synthesis)"
- Record source tier and access date

Output: `docs/research/market-landscape.md`, `docs/research/competitor-analysis.md`, `docs/research/search-intent.md`

### 2.6 Claim-Proof-Objection Map

For each major page family, create a map:

| Page | Claim | Proof Source | Objection | Response |
|------|-------|-------------|-----------|----------|
| Homepage | "23 integrated modules" | PROJECT_BRIEF.md module list | "Too good to be true at this price" | Show modular architecture, per-tenant enablement |
| Product | "IFRS-compliant financial reporting" | KraalCode_SRS_Accounting.docx | "How do I know it's really IFRS?" | Show chart of accounts, financial statements |
| Security | "AES-256 encryption" | KraalCode_SRS_RBAC.docx, SecurityCompliance.docx | "Is this audited?" | Show verified controls, OWASP mapping |

Output: embedded in `docs/project/02-website-strategy.md`

### 2.7 Conversion Strategy Refinement

1. Primary conversion: "Request a guided Kraal Code demonstration"
2. Secondary conversion: "Discuss your organisation's requirements"
3. Low-commitment: Explore capabilities, security, sectors
4. CTA placement rules: every major page gets one primary CTA, proof before CTA, objections addressed before CTA
5. No dark patterns, fake scarcity, borrowed logos, anonymous testimonials
6. Output: section in `docs/project/02-website-strategy.md`

---

## Deliverables

| File | Purpose |
|------|---------|
| `docs/project/02-website-strategy.md` | Commercial job, audiences, conversion strategy |
| `docs/project/05-claim-register.md` | Every public claim with source and status |
| `docs/project/06-source-register.md` | Every source with tier and confidence |
| `docs/research/market-landscape.md` | African ERP market research |
| `docs/research/competitor-analysis.md` | Competitor positioning research |
| `docs/research/search-intent.md` | Search intent by language |

---

## Resources Required

- Access to all 54 DOCX reference documents
- Digital research engine at `C:\wamp64\www\digital-research-engine`
- Source evaluation and evidence discipline skills

---

## Research Needed

- African ERP market size and growth
- Competitor pricing and positioning (SAP, Oracle, Dynamics, Odoo, ERPNext)
- Search intent for ERP terms in English, French, Kiswahili
- Cloud trust concerns in East Africa
- Mobile money adoption and integration expectations

---

## Acceptance Criteria

- [ ] Website commercial job is defined and documented
- [ ] All 6 audiences have action records with proof requirements
- [ ] Every public claim has a source, status, and owner in the register
- [ ] Market research uses verified sources with citations
- [ ] No claim appears in the register without a source
- [ ] Claims without sources are marked as gaps
- [ ] Primary conversion is defined and approved

---

## Gate to Phase 03

No load-bearing page depends on an unsupported claim. Target jurisdictions and language markets are named or marked unresolved. The primary conversion is approved or explicitly provisional. The claim register is complete enough to write page copy against.
