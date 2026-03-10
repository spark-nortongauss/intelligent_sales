# Setup
1. Copy `.env.example` to `.env.local` and provide values.
2. Run Supabase migrations in order under `supabase/migrations`.
3. Deploy Supabase Edge Functions under `supabase/functions/*`.
4. Install dependencies: `npm install`.
5. Run app: `npm run dev`.
6. Run checks: `npm run lint && npm run typecheck && npm run build`.
7. Run e2e: `npm run test:e2e`.
