# Phase 21 — Blog Content Strategy & Publication

**Directory:** `docs/plans/kraal-website/phase-21-blog-content-strategy/`
**Depends on:** Phase 15 (can run independently of screenshot phases 16-20)
**Gate:** 5 articles published, all researched, all dated, pagination working, no AI slop

---

## Objective

Replace the placeholder "Resources" section with a professional blog. Launch with 5 strong, evidence-backed articles (1 featured + 4 standard) dated between June 2025 and August 2026. Establish the blog infrastructure, pagination, and content governance for ongoing publication.

---

## Blog Architecture

### First Page (Index)
```
┌─────────────────────────────────────┐
│         FEATURED ARTICLE (1)         │
│  Large hero card, full-width image   │
│  Title, excerpt, date, reading time  │
├──────────────────┬──────────────────┤
│  ARTICLE 2       │  ARTICLE 3       │
│  Card with image │  Card with image │
├──────────────────┼──────────────────┤
│  ARTICLE 4       │  ARTICLE 5       │
│  Card with image │  Card with image │
└──────────────────┴──────────────────┘
│          Pagination (← 1 →)          │
```

### Subsequent Pages (when more posts are added)
```
┌──────────┬──────────┬──────────┐
│ POST 1   │ POST 2   │ POST 3   │
├──────────┼──────────┼──────────┤
│ POST 4   │ POST 5   │ POST 6   │
└──────────┴──────────┴──────────┘
│     Pagination (← 1 2 3 ... →)  │
```

### Pagination Rules
- 6 posts per page (page 2+); first page shows 1 featured + 4 standard
- URL: `/en/blog/`, `/en/blog/2/`, `/en/blog/3/`
- Pagination controls: Previous / page numbers / Next
- Show total post count and "Page X of Y"
- Responsive: 3-col desktop, 2-col tablet, 1-col mobile
- Accessible: aria-label on nav, focus management

---

## Tasks

### 21.1 Blog Infrastructure

1. **Content collection setup:** Create Astro content collection for blog posts
   - `src/content/blog/en/` — English posts (markdown/MDX)
   - `src/content/blog/fr/` — French posts
   - `src/content/blog/sw/` — Swahili posts
   - Schema: title, excerpt, date, author, category, tags, featured, image, readingTime

2. **Blog index page:** `src/pages/en/blog/index.astro`
   - First page: 1 featured (large hero) + 4 standard (2×2 grid)
   - Subsequent pages: 6 posts in 3×2 grid
   - Pagination component with proper accessibility

3. **Blog post page:** `src/pages/en/blog/[slug].astro`
   - Article layout with: hero image, title, date, author, reading time, category
   - Body content with proper typography (Source Serif 4 for headings, Source Sans 3 for body)
   - Related posts section
   - Share buttons (optional — privacy-aware)
   - Breadcrumbs: Blog > Category > Article

4. **Blog components:**
   - `src/components/blog/FeaturedPost.astro` — large hero card for featured post
   - `src/components/blog/PostCard.astro` — standard card for grid
   - `src/components/blog/Pagination.astro` — page navigation
   - `src/components/blog/PostMeta.astro` — date, author, reading time, category
   - `src/components/blog/RelatedPosts.astro` — related articles

5. **Category system:**
   - Categories: Product Updates, Industry Insights, How-To Guides, Security & Compliance, Customer Stories
   - Category index pages: `/en/blog/category/[category]/`

6. **RSS feed:** Generate `/blog/rss.xml` for subscribers

7. **Update navigation:** Replace "Resources" with "Blog" in Header.astro and Footer.astro across all three locales

### 21.2 Article Research & Writing

Each article must be researched through the digital research engine (`C:\wamp64\www\digital-research-engine`) for current facts. Every claim needs a source. No AI slop — articles must read as if written by a senior industry analyst.

**Article 1 (FEATURED) — Dated: August 2026**

**Title:** "Why African Businesses Are Moving Beyond Spreadsheets to Cloud ERP"
- Research: African digital transformation trends, spreadsheet failure modes, cloud adoption rates in East Africa
- Angle: Practical, not hype. Show specific scenarios where spreadsheets fail (multi-branch, audit trails, concurrent users, mobile access)
- Position Kraal Code as the natural next step without disparaging competitors
- Include: real-world spreadsheet failure scenarios, what ERP changes, when to migrate, what to expect
- Sectors: manufacturing, trading, NGOs, agriculture
- Length: 2000-2500 words
- Featured image: appropriate African business context
- Sources: minimum 8 verified sources

**Article 2 — Dated: July 2026**

**Title:** "How to Choose the Right ERP for Your East African Business"
- Research: ERP selection criteria, common mistakes, total cost of ownership, implementation timelines
- Angle: Buyer's guide perspective. Honest about what to look for and what to avoid
- Include: evaluation checklist, red flags, pricing comparison framework, questions to ask vendors
- Position Kraal Code's approach (flat pricing, no implementation fees, modular) without hard-selling
- Length: 1800-2200 words
- Sources: minimum 6 verified sources

**Article 3 — Dated: June 2026**

**Title:** "Mobile Money Meets ERP: How MTN MoMo, Airtel Money, and M-Pesa Are Changing Business Operations"
- Research: Mobile money adoption in East Africa, integration patterns, business use cases
- Angle: How mobile money transforms procurement, sales, and payroll in African businesses
- Include: specific integration scenarios, reconciliation challenges, what to look for in an ERP
- Position Kraal Code's mobile money readiness (EFRIS, MoMo integration)
- Length: 1500-2000 words
- Sources: minimum 8 verified sources (mobile money adoption stats, regulatory sources)

**Article 4 — Dated: August 2026**

**Title:** "Multi-Branch Operations Without the Chaos: A Guide for Growing African Businesses"
- Research: Multi-branch management challenges, inventory visibility, approval workflows, reporting consolidation
- Angle: Operational guide for businesses expanding beyond one location
- Include: specific pain points (stock visibility, inter-branch transfers, consolidated reporting, branch-level permissions)
- Position Kraal Code's multi-branch architecture (tenant isolation, branch-level RBAC, real-time dashboards)
- Length: 1500-2000 words
- Sources: minimum 5 verified sources

**Article 5 — Dated: July 2026**

**Title:** "IFRS for SMEs in Practice: What East African Businesses Need to Know"
- Research: IFRS for SMEs Section 34 adoption in East Africa, practical compliance challenges, common mistakes
- Angle: Practical compliance guide, not academic paper
- Include: key IFRS for SMEs requirements, common pitfalls, how ERP automates compliance
- Position Kraal Code's IFRS-compliant financial reporting (chart of accounts, financial statements, audit trail)
- Length: 2000-2500 words
- Sources: minimum 8 verified sources (IASB, country regulators, accounting bodies)

### 21.3 Article Quality Standards

Every article must pass:

1. **Source verification:** Every statistic, name, organisation, law, or market claim has a source
2. **Anti-slop audit:** Grade A or B. No generic filler, no template prose, no unsupported claims
3. **Voice:** Clear, assured, practical, technically credible, respectful, direct about trade-offs
4. **British English:** Spelling and conventions
5. **No banned words:** "revolutionary", "game-changing", "cutting-edge", "seamless", "robust", "holistic"
6. **Specificity:** Every section has at least one concrete, domain-specific element
7. **CTA:** Each article ends with a relevant, non-pushy CTA to explore capabilities or request a demo

### 21.4 Multilingual Publication

After English articles are complete:
1. Author French versions for named Francophone African markets (not France-only copy)
2. Author Kiswahili versions in respectful standard language
3. Localise slugs, metadata, search terms
4. Run native review checklist
5. Update route-equivalence map

### 21.5 SEO for Blog

1. Research search intent per article topic (EN/FR/SW)
2. Implement per-article: unique title, meta description, canonical, hreflang, OG tags
3. Add Article structured data (schema.org)
4. Internal linking: each article links to 2-3 relevant capability/sector pages
5. Category pages are indexable
6. RSS feed includes all published articles

---

## Deliverables

| File | Purpose |
|------|---------|
| `src/content/blog/en/*.md` | 5 English articles |
| `src/content/blog/fr/*.md` | 5 French articles |
| `src/content/blog/sw/*.md` | 5 Kiswahili articles |
| `src/pages/en/blog/index.astro` | Blog index with featured + pagination |
| `src/pages/en/blog/[slug].astro` | Individual post template |
| `src/pages/en/blog/category/[category]/` | Category pages |
| `src/components/blog/*.astro` | Blog components (5 files) |
| `docs/research/blog-articles/` | Research notes per article |
| `public/blog/rss.xml` | RSS feed |

---

## Resources Required

- Digital research engine at `C:\wamp64\www\digital-research-engine`
- Source evaluation and evidence discipline
- French and Kiswahili native copy skills
- Social media skills for content strategy
- 5 hero images for articles (from photo-bank or new)

---

## Research Needed

For each article:
- Current market data and adoption statistics
- Regulatory and compliance requirements
- Competitor positioning and pricing
- Search intent per language
- Mobile money adoption data
- IFRS for SMEs implementation guidance

---

## Acceptance Criteria

- [ ] Blog infrastructure works: index, posts, pagination, categories, RSS
- [ ] 5 English articles published with real, researched content
- [ ] Each article has verified sources (minimum 5-8 per article)
- [ ] Featured article displays prominently on first page
- [ ] Pagination works correctly (1+4 on page 1, 6 on subsequent pages)
- [ ] Articles are dated between June 2025 and August 2026
- [ ] Anti-slop audit: grade A or B for all articles
- [ ] French and Kiswahili versions published
- [ ] Navigation updated (Resources → Blog)
- [ ] RSS feed validates
- [ ] SEO metadata complete per article

---

## Gate to Completion

5 articles are published, researched, dated, and passing anti-slop audit. Blog infrastructure supports ongoing publication. Multilingual versions are complete. The "Resources" placeholder is permanently replaced with a professional, evidence-backed blog.
