# Architecture
- Next.js App Router with module routes for Dashboard, Reviews, ROM flows, and Leads.
- Server-centric data access for sensitive operations.
- Provider abstraction in `src/lib/providers` for OpenAI, RapidAPI adapters, Apollo, geocoding.
- Pricing engine in `src/lib/pricing` and artifact generation boundary in `src/lib/documents`.
- Supabase Postgres as system of record with RLS + audit logs.
- Supabase Storage for versioned ROM artifacts.
- Playwright E2E for critical workflows and RBAC guards.
