# Security Controls
- Invite-only auth model (no public sign-up route).
- RBAC: `super_admin`, `admin`, `user`.
- RLS enabled for business tables and storage access policies.
- Service role key used only server-side.
- Zod validation on mutation/search endpoints.
- Rate limiting in API route layer for expensive mutation paths.
- Idempotency key required on ROM create endpoint.
- Audit log table for critical changes.
- Pricing updates are forward-only and ROM versions maintain snapshot history.
