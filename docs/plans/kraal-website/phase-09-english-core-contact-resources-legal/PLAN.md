# Phase 09 — English Core: Contact, Resources (Blog), Legal

**Directory:** `docs/plans/kraal-website/phase-09-english-core-contact-resources-legal/`
**Depends on:** Phase 08
**Gate:** Form has validation and states, legal pages exist as drafts, blog infrastructure planned

---

## Objective

Wire the contact form with proper validation and states, build legal/policy pages as drafts, and prepare the blog infrastructure (replacing the placeholder Resources page).

---

## Tasks

### 9.1 Contact Form Wiring

`/en/contact/` exists with a complete UI but `action="#"` and no handler.

1. Define provider-neutral form contract:
   - Fields: name, email, organisation, country, role, size, interests, message
   - Privacy consent (required), marketing opt-in (optional)
   - Success state: thank you message, what happens next, expected response time
   - Error state: generic error message, detailed server-side logging
   - Loading state: disable button, show spinner

2. Client-side validation:
   - Required fields: name, email, organisation, country, privacy consent
   - Email format validation
   - Minimum message length (prevent spam)
   - No HTML injection in text fields

3. Form security considerations:
   - CSRF protection plan (when backend is connected)
   - Rate limiting (5 submissions per IP per hour)
   - Bot protection (honeypot field, not CAPTCHA)
   - No sensitive data collection

4. Success/failure states:
   - Success: "Thank you. We aim to respond within 2 business days."
   - Failure: "Something went wrong. Please email info@kraalcode.com directly."
   - Loading: disable submit button, show "Sending..."

5. Note: actual backend integration is out of scope — form will use client-side JS with a placeholder endpoint. Document the backend requirements for future implementation.

### 9.2 Blog Infrastructure Planning

The Resources page will be replaced by a blog in Phase 21. In this phase:

1. Rename "Resources" to "Blog" in Header.astro and Footer.astro navigation
2. Update all locale versions of the navigation
3. Create placeholder blog index page at `/en/blog/` with "Articles coming soon" message
4. Remove the 6 "Coming soon" resource cards
5. Plan the blog content collection structure for Phase 21 implementation

### 9.3 Legal Pages (Drafts)

All legal pages marked as **DRAFT — pending legal review** until a qualified reviewer approves.

**Page 1: /en/legal/privacy/ — Privacy Notice**
- Who we are (Chwezi Core Systems)
- What data we collect (contact form data, analytics)
- How we use it (respond to enquiries, improve the site)
- How we protect it (encryption, access controls)
- Data retention periods
- User rights (access, correction, deletion)
- Cookie usage
- Third-party services
- Contact for privacy questions
- Source: `KraalCode_SecurityCompliance.docx` for verified controls

**Page 2: /en/legal/cookies/ — Cookie Notice**
- What cookies are used (essential only in phase 1 — no analytics yet)
- Essential cookies: session, language preference
- Future: analytics cookies (will require consent)
- How to manage cookies
- No pre-checked consent

**Page 3: /en/legal/terms/ — Website Terms of Use**
- Acceptance of terms
- Intellectual property (Kraal Code, Chwezi Core Systems)
- Permitted use
- Disclaimer (software availability, pricing accuracy)
- Limitation of liability
- Governing law (Uganda)
- Changes to terms

**Page 4: /en/legal/accessibility/ — Accessibility Statement**
- Commitment to WCAG 2.2 AA
- Current accessibility status
- Known limitations
- Feedback mechanism
- Assessment methodology

**Page 5: /en/security/disclosure/ — Responsible Disclosure**
- How to report vulnerabilities
- What to include in a report
- Response timeline commitment
- Safe harbour policy
- Security contact: security@kraalcode.com

### 9.4 Footer Link Verification

Verify all Footer.astro links point to pages that exist or will exist:
- `/en/legal/privacy/` — building in this phase
- `/en/legal/cookies/` — building in this phase
- `/en/legal/terms/` — building in this phase
- `/en/legal/accessibility/` — building in this phase
- `/en/security/disclosure/` — building in this phase
- `/en/implementation/` — does not exist yet (remove from footer or build in Phase 08)

---

## Deliverables

| File | Purpose |
|------|---------|
| `src/pages/en/contact/index.astro` | Wired form with validation and states |
| `src/pages/en/blog/index.astro` | Placeholder blog index |
| `src/pages/en/legal/privacy/index.astro` | Privacy notice (draft) |
| `src/pages/en/legal/cookies/index.astro` | Cookie notice (draft) |
| `src/pages/en/legal/terms/index.astro` | Website terms (draft) |
| `src/pages/en/legal/accessibility/index.astro` | Accessibility statement (draft) |
| `src/pages/en/security/disclosure/index.astro` | Responsible disclosure |

---

## Resources Required

- `KraalCode_SecurityCompliance.docx` for verified security controls
- Legal review (human — not AI-generated)
- Website skills: form-ux-design, policy-pages

---

## Acceptance Criteria

- [ ] Contact form has client-side validation
- [ ] Form shows success, error, and loading states
- [ ] Navigation updated (Resources → Blog)
- [ ] All 5 legal pages exist as drafts
- [ ] All legal pages marked "DRAFT — pending legal review"
- [ ] No unsupported legal or compliance claims
- [ ] Footer links verified

---

## Gate to Phase 10

Contact form is functional (client-side). Legal pages exist as drafts. Blog placeholder is in place. All English pages are complete (pending screenshots in phases 16-20).
