# Kraal Code website Kaizen report

**Date:** 2026-09-06
**Target:** `C:\wamp64\www\kraalcode-website`
**Scope:** Static Astro website; contact conversion journey, crawl/index signals, metadata/schema hygiene, tracked build output, and release evidence.
**Owner:** Parent orchestrator owns commit and release decisions.

## Design and evidence boundary

The existing type system was retained: Source Serif 4 for display and Source Sans 3 for body/UI. The repository documents this pairing as an editorial, high-trust choice with readable operational controls across English, French, and Kiswahili. No brand typeface was replaced. Existing charcoal, teal, ivory, and warm-surface tokens were preserved.

Claims about the product, pricing, controls, routes, and form limitations were compared with repository project truth. Unsupported performance, client, certification, legal, rights, and production-submission claims were not added. Browser rendering, assistive-technology traversal, field performance, stakeholder approval, and asset-rights evidence remain `NOT_ASSESSED`.

## Observe

- The site has 89 source route entrypoints and the build reports 135 generated pages.
- The three contact routes used client-only scripts that created success markup with `innerHTML`, replaced the whole form with `form.innerHTML = ''`, had no live/atomic status region, had no field error text or focus recovery, and validated the required privacy checkbox through `.value` rather than `.checked`.
- `public/robots.txt` named `sitemap-en.xml`, `sitemap-fr.xml`, and `sitemap-sw.xml`, while the build generated `sitemap-index.xml` and `sitemap-0.xml`.
- The sitemap contained 28 noindex compatibility/root redirect URLs before remediation (CLI baseline observation).
- Homepage `WebSite` JSON-LD advertised a `/en/search` `SearchAction`, but no search route exists in the repository. Homepage `SoftwareApplication` JSON-LD advertised Android/iOS support without corresponding repository evidence; that field was removed.
- `dist/` contains 256 tracked files. This is deliberate under the repository contract: `README.md`, `docs/project/CURRENT-STATE.md`, and `docs/deployment/site-operations.md` identify `dist/` as the deployment unit and tracked handoff output. The duplicate `node_modules` entries in `.gitignore` remain hygiene debt; `dist/` was not ignored or untracked.

## Baseline

Raw assessment: **49/100**. Published baseline is **49/100** (`min(raw score, 65)`). This is not a release approval.

| Dimension | Raw | Evidence mode | Baseline finding |
| --- | ---: | --- | --- |
| Technical SEO, metadata, schema | 5/10 | `cli` | Sitemap/robots mismatch, noindex redirects in sitemap, and a nonexistent search action. |
| Contact journey and recovery | 4/10 | `cli`, `llm_only` | Fake success, destructive form replacement, missing field messages/focus recovery, and unchecked required-checkbox defect. |
| Accessibility | 5/15 | `cli` | Static associations were incomplete; no browser keyboard, screen-reader, zoom, or target-size run. |
| Content and claim honesty | 7/10 | `cli`, `human_review` | Project truth is available, but proof gaps remain for rights, legal pages, native locale review, and production form handling. |
| Responsive/UI states | 6/10 | `llm_only` | Existing design tokens and responsive rules are present; rendered breakpoint evidence is unavailable here. |
| Performance | 6/10 | `cli` | Static build passes; field p75, Lighthouse, image budgets, and CWV are `NOT_ASSESSED`. |
| Security-sensitive forms/dependencies | 4/10 | `cli` | No backend or transport is present; `npm audit` reports four high-severity advisories and no fix was applied. |
| AI-slop / delivery debt | 5/10 | `cli`, `llm_only` | Contact scripts used DOM-string replacement and the fake success state; no browser slop scan is available. |
| Build/release/measurement | 7/15 | `cli` | Typecheck/build pass; lint, CI, analytics, browser suite, rollback rehearsal, and live evidence remain open. |

### Baseline blockers and gaps

- **BLOCKER:** A real contact submission endpoint, data handling, and success response are not present. The previous fake success was misleading; full submission success is `NOT_ASSESSED` until an approved endpoint exists.
- **HIGH:** `npm audit --audit-level=high` reports **4 vulnerabilities (1 low, 3 high)**, including Astro, esbuild, fast-uri, and sharp advisories. Remediation requires dependency review; the audit suggested a breaking Astro upgrade. No package lock was changed.
- **NOT_ASSESSED:** Browser screenshots, visual diff, keyboard traversal, screen reader smoke test, 320px/200% zoom, reduced-motion render, axe/Lighthouse, field p75 CWV, live crawler/index state, Search Console/Bing/OpenAI referral outcomes, native French/Kiswahili sign-off, image licence/model releases, and legal approval.
- **Tracked-output debt:** The build rewrote tracked `dist/` files during this operation. The generated churn is not authored source scope and must be excluded or deliberately handled by the parent before commit. No destructive restore/untracking was run after the stop instruction.

## Select

Selected slice: the shared contact journey across `/en/contact/`, `/fr/contact/`, and `/sw/mawasiliano/`. It was selected because it is the primary conversion path and had a reproducible accessibility, trust, and recovery defect. A second small technical slice corrected the crawl contract exposed by the same static audit.

## Experiment

Implemented the smallest reversible change that improves the observed path:

1. Added `src/components/forms/ContactForm.astro` with localized fields and messages. The form now uses static semantic markup, `role="alert"`, `aria-live="assertive"`, `aria-atomic="true"`, `aria-invalid`, `aria-describedby`, field-level errors, visible focus styling, a 24px checkbox target, and focus to the first invalid field.
2. Corrected required-checkbox validation to use `.checked`; invalid input retains entered values for recovery. A short loading state ends in an explicit no-backend error rather than claiming a request was received. No client data is sent or stored.
3. Replaced the three duplicated contact scripts/forms with the shared localized component. No contact route contains `innerHTML` or `form.innerHTML` after the change.
4. Added an explicit `OAI-SearchBot` allow rule and changed the robots sitemap pointer to the generated `sitemap-index.xml`.
5. Filtered known root/compatibility redirects from the sitemap. Converted default Open Graph/Twitter images to absolute URLs, made JSON-LD inline intent explicit, and removed the nonexistent homepage search action plus unsupported operating-system field.

Rollback is file-scoped: revert the shared component and the three contact imports/usages to restore the previous contact implementation; revert `astro.config.mjs`, `public/robots.txt`, `src/layouts/BaseLayout.astro`, and `src/pages/en/index.astro` to restore the previous search/sitemap/metadata behavior. The parent owns that decision; no rollback was executed here.

## Check

### Completed checks

| Check | Result | Evidence |
| --- | --- | --- |
| `npm run typecheck` | PASS | 120 files; 0 errors, 0 warnings, 0 hints. |
| `npm run build` | PASS | Astro completed; 135 pages built. |
| Contact static assertions | PASS | All three routes have status semantics, five required-field error associations, correct checkbox markup, direct-email fallback, no fake success, and no `innerHTML`. |
| Sitemap/robots static assertions | PASS | 106 sitemap URLs; zero noindex URLs in sitemap; robots points to an existing sitemap index. |
| Content-page metadata assertions | PASS | 106 content pages have one title, description, canonical, and absolute Open Graph image. |
| Internal-link static check | PASS | No broken internal links found in generated HTML. |
| Preview HTTP smoke | PASS | `/en/`, `/fr/`, `/sw/`, all three contact routes, `/sitemap-index.xml`, `/robots.txt`, and `/404/` returned HTTP 200 from the local preview server. This is not visual/browser evidence. |
| `npm run lint` | FAIL / unavailable | `eslint` is not installed or executable in the project dependencies; existing project gap retained. |
| `npm audit --audit-level=high` | FAIL / remediation open | Four vulnerabilities reported; no package or lockfile mutation made. |

### Evidence modes and limits

- `cli`: source scans, Astro typecheck/build, generated-HTML checks, sitemap/link checks, preview HTTP smoke, and npm audit.
- `browser`: **NOT_ASSESSED**. No browser automation or screenshot harness is installed in this repository; no rendered screenshot path exists from this run.
- `human_review`: limited source/design inspection only; no stakeholder, native-language, legal, rights, or production review.
- `llm_only`: used only to identify the original DOM replacement/fake-success pattern and copy-risk candidates; not treated as accessibility or visual proof.

## Standardise

The shared contact component and sitemap exclusion policy are standardised for this source tree because they pass the available structural checks and remove a known misleading state. The change is **not** standardised as proof of WCAG conformance or successful lead capture. The no-backend form limitation remains visible to visitors and owners until an approved submission integration exists.

## Teach

Future contact-form work must preserve values on failure, expose field-associated errors, move focus to the first invalid control, use live/atomic status text, validate checkbox state with `.checked`, and never replace the form with untrusted or opaque DOM strings. A success message may be shown only after an approved transport returns a verified success response. Future sitemap changes must exclude noindex redirects and keep robots pointers aligned with actual generated files.

## Re-measure and 95/100 plan

Target: **95/100 after evidence exists**, not a current score.

| Priority | Owner | Exact next work | Measure / acceptance evidence | Rollback |
| --- | --- | --- | --- | --- |
| P0 | Engineering + product owner | Approve and implement a real contact endpoint, privacy/retention contract, rate limiting, spam handling, and success/error response for the shared component. | Browser normal/failure/offline tests; no data loss; success only after transport confirmation; approved event dictionary. | Disable endpoint path and retain direct-email fallback. |
| P0 | Engineering | Resolve or pin audited Astro/esbuild/fast-uri/sharp versions through the package manager. | Fresh `npm ci`, `npm audit --audit-level=high`, typecheck/build; no breaking upgrade without review. | Revert package-manager change to last tested lockfile. |
| P0 | QA/design | Add Playwright plus axe/manual keyboard and screen-reader evidence in the project-approved pipeline. | EN/FR/SW contact routes at 375/768/1280 and 320px/200%; focus not obscured; reduced-motion run; screenshots stored under an approved evidence path. | Keep current source and block release until coverage is available. |
| P1 | SEO owner | Validate live canonical/hreflang, robots, sitemap, structured data, and Search Console state against production. | Crawl report with zero canonical/noindex conflicts; schema matches visible content; source register updated. | Revert only the affected metadata/config change. |
| P1 | Product/content owners | Replace unsupported or provisional service/security/legal assertions with approved proof, or qualify/remove them; obtain native French/Kiswahili and legal review. | Claim register with source, owner, review date, and approval; no unsupported superiority claims. | Keep the narrower wording and mark proof gaps. |
| P1 | Design/content owner | Resolve image licence/model-release evidence and replace any asset without rights proof. | Asset register entries with provenance/permission; rendered crop review. | Remove the affected image and use an approved asset or typographic fallback. |
| P2 | Release owner | Decide whether tracked `dist/` remains the hosting contract; if yes, document generated-output review and CI drift checks; if no, obtain approval before untracking. | Explicit decision record; clean authored diff; reproducible build comparison. | Preserve current tracked-output contract. |
| P2 | Engineering + measurement owner | Add CI for typecheck, build, link/metadata/schema checks, lint, browser smoke, and privacy-approved analytics. | Green pipeline, rollback drill, event dictionary approval, and 30-day measurement review. | Disable non-essential measurement and retain functional no-analytics path. |

## Currentness and source register

The parent supplied the following sources as verified on 2026-09-06. They support the implementation boundaries below; they do not prove ranking, conversion, accessibility conformance, or production readiness.

| ID | Claim used | Source / tier | Scope and dates | Freshness / status / uncertainty | Owner |
| --- | --- | --- | --- | --- | --- |
| R1 | Core SEO, crawl/index eligibility, and useful non-commodity content remain the basis for generative Search; no ranking-hack AI text file or special markup was added. | [Google AI features and your website](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) / Tier 1 primary | Google Search guidance; verified/accessed 2026-09-06; publication/update 2026-05-15. | Time-sensitive; supported for this scope; archive snapshot `NOT_ASSESSED`. Recheck 2026-10-06. | SEO owner |
| R2 | Structured data must represent visible main content and does not guarantee a rich result. | [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) / Tier 1 primary | Google Search documentation; verified/accessed 2026-09-06. | Time-sensitive; supported for schema cleanup; archive snapshot `NOT_ASSESSED`. Recheck 2026-10-06. | SEO owner |
| R3 | FAQPage was not retained as a Google rich-result tactic. | [Google Search updates](https://developers.google.com/search/updates) / Tier 1 primary | Google Search feature updates; verified/accessed 2026-09-06; FAQ rich-result change dated 2026-05-07. | Time-sensitive; no FAQPage was present in the inspected source; archive snapshot `NOT_ASSESSED`. Recheck 2026-10-06. | SEO owner |
| R4 | Explicit OAI-SearchBot access is compatible with publisher discoverability; GPTBot is a separate control. | [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) / Tier 1 primary | OpenAI publisher guidance; verified/accessed 2026-09-06; early-September 2026 update. | Time-sensitive; supports the robots intent only; archive snapshot `NOT_ASSESSED`. Recheck 2026-10-06. | SEO owner |
| R5 | WCAG 2.2 is the accessibility target, and automation alone cannot establish full-page conformance. | [W3C WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) / Tier 1 standard | Current W3C Recommendation; verified/accessed 2026-09-06. | Stable/current; supports the `NOT_ASSESSED` browser/a11y boundary; archive snapshot `NOT_ASSESSED`. Recheck 2026-10-06. | QA owner |
| P1 | Route, product, deployment, and claim facts. | `README.md`, `docs/project/CURRENT-STATE.md`, `docs/project/03-assumptions-and-gaps.md`, `docs/deployment/site-operations.md` / repository evidence | Working-tree source and project docs inspected 2026-09-06. | Context-bound; deployment contract explicitly retains tracked `dist/`; product/legal/rights gaps remain. | Parent + project owners |

## Re-audit date

**2026-10-06**, or earlier when the contact endpoint, audited dependencies, browser evidence, or production search configuration changes. Until then, this report is a qualified improvement record, not a launch certificate.

## Final verification addendum

- Parent verification reran `npm run typecheck` (**PASS**, 0 diagnostics) and `npm run build` (**PASS**, 135 pages).
- Non-forced dependency remediation reduced the audit to 3 advisories (2 high, 1 low). Remaining Astro/Sharp remediation requires a breaking Astro migration; this supersedes the earlier 4-advisory baseline count.
- Render review: **PASS for the English homepage sample** at 1440×900 and 390×844. The page retained its documented Source Serif 4/Source Sans 3 hierarchy, showed no horizontal overflow or hidden sections, and avoided banned purple/glass/decorative-motion defaults. Evidence: `rendered/home-desktop.png`, `rendered/home-mobile.png`.
- The regenerated tracked `dist/` remains part of this commit because the repository explicitly defines it as the deployment handoff unit. Full route/locale visual coverage, screen-reader testing, Lighthouse, field CWV, and production form transport remain `NOT_ASSESSED`.
