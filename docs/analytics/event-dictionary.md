# Analytics event dictionary

**Audience:** Product owner, growth owner, and future analytics implementer  
**Status:** Future design; analytics is not wired  
**Last reviewed:** 2026-08-15

This dictionary defines the smallest privacy-aware measurement layer to add after an analytics provider and consent approach are approved. No event in this document is currently emitted by the site.

## Principles

- Collect only what is necessary to understand discovery, content engagement, and demo intent.
- Never send form contents, names, email addresses, phone numbers, organisation names, IP addresses, or sensitive business data.
- Respect consent and regional legal requirements before non-essential measurement.
- Keep event names stable and properties low-cardinality.
- Document the provider, retention, access owner, and deletion process before implementation.

## Proposed events

| Event | Trigger | Properties | Consent |
| --- | --- | --- | --- |
| `page_view` | Approved page view | `locale`, `route_family`, `path_template` | Provider default; confirm policy |
| `language_selected` | Locale switch activation | `from_locale`, `to_locale`, `route_family` | Non-essential |
| `cta_clicked` | Primary or secondary CTA activation | `cta_name`, `route_family`, `locale`, `placement` | Non-essential |
| `contact_started` | Contact form first meaningful interaction | `locale`, `route_family` | Non-essential |
| `contact_submitted` | Successful form handoff | `locale`, `form_variant` | Explicit form/privacy basis |
| `contact_error` | Client-side submission error | `locale`, `error_class` | Non-essential; no message text |
| `outbound_link_clicked` | Approved external link activation | `link_type`, `route_family` | Non-essential |

## Business measures

The primary measure is qualified demonstration interest. Supporting measures are CTA engagement, contact completion rate, locale usage, capability/sector discovery, and page engagement. Do not optimise to raw traffic without checking route quality and lead relevance.

## Implementation gate

Before adding a provider, approve the privacy notice language, consent mechanism, cookie behaviour, data retention, access roles, and regional processing terms. Add a measurement owner and a 30-day review date to the launch record. Until then, the website remains functional without analytics.
