# Phase 13 — Security Hardening & Privacy

**Directory:** `docs/plans/kraal-website/phase-13-security-hardening-and-privacy/`
**Depends on:** Phase 12
**Gate:** CSP configured, no secrets in repo, security.txt valid, dependency audit clean

---

## Objective

Harden the website's security posture. Configure headers, audit dependencies, verify no secrets are exposed, and prepare privacy controls.

---

## Tasks

### 13.1 Security Headers

Configure via Astro middleware or deployment config:

| Header | Value | Purpose |
|--------|-------|---------|
| Content-Security-Policy | `default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';` | XSS prevention |
| Strict-Transport-Security | `max-age=31536000; includeSubDomains` | HTTPS enforcement (production only) |
| X-Content-Type-Options | `nosniff` | MIME sniffing prevention |
| Referrer-Policy | `strict-origin-when-cross-origin` | Referrer control |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` | Feature restriction |
| X-Frame-Options | `DENY` | Clickjacking prevention |

Note: CSP nonce requires server-side generation in production. For static builds, use a strict allowlist.

### 13.2 security.txt

Verify `public/.well-known/security.txt`:
```
Contact: mailto:security@kraalcode.com
Expires: 2027-08-09T00:00:00.000Z
Preferred-Languages: en, fr, sw
Policy: https://kraalcode.com/en/security/disclosure/
```

### 13.3 Dependency Audit

1. Run `npm audit` — resolve critical and high vulnerabilities
2. Document any accepted risks (medium/low with rationale)
3. Verify no deprecated packages
4. Keep dependency set minimal (currently only `astro` — good)

### 13.4 Secret Scan

1. Verify no API keys, tokens, passwords, or credentials in repository
2. Check `.env` is gitignored
3. Verify no environment-specific URLs in code (only `kraalcode.com`)
4. Verify no source maps in production build
5. Check build output for any exposed internals

### 13.5 Form Security

1. CSRF protection plan (for when backend is connected)
2. Rate limiting design (5 submissions per IP per hour)
3. Honeypot field for bot protection (hidden field, real users won't fill it)
4. Input validation: type, length, format
5. No HTML/JS in text inputs (escape on output)
6. Generic error messages (no server details exposed)
7. No analytics capture of form message contents

### 13.6 Third-Party Script Inventory

Currently: zero third-party scripts (good).

Document what would need to be added and their security implications:
- Analytics (future): require consent, CSP exception, SRI
- Form backend (future): require CSP exception
- No other third-party scripts needed

### 13.7 Privacy Controls

1. Cookie consent mechanism (for future analytics):
   - No non-essential tracking before consent
   - Preferences accessible and reversible
   - No pre-checked consent
   - Clear, non-manipulative wording

2. Privacy notice must be reviewed by legal owner before publication

3. Data minimisation:
   - Contact form collects minimum necessary data
   - No sensitive business/financial/personal data in enquiry form
   - Clear statement of what happens after submission

---

## Deliverables

| File | Purpose |
|------|---------|
| Security headers config | CSP, HSTS, etc. |
| `public/.well-known/security.txt` | Security contact |
| `reports/security/dependency-audit.txt` | npm audit results |
| `reports/security/secret-scan.txt` | Secret scan results |
| Privacy controls plan | Consent mechanism design |

---

## Acceptance Criteria

- [ ] CSP configured with appropriate policy
- [ ] HSTS ready for production HTTPS
- [ ] security.txt valid with correct contact and expiry
- [ ] No critical/high dependency vulnerabilities (or documented exceptions)
- [ ] No secrets in repository
- [ ] No source maps in production build
- [ ] Form security measures documented
- [ ] Privacy controls designed

---

## Gate to Phase 14

Security hardening is complete. Headers configured. Dependencies clean. No secrets exposed. Privacy controls designed.
