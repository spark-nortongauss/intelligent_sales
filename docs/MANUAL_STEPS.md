# Manual Steps
1. In Supabase Auth settings, disable public signup and enable invite-only user onboarding.
2. Seed first `super_admin` profile row matching the invited user ID.
3. Configure Storage bucket `rom-artifacts` if not created by migration.
4. Deploy edge functions:
   - `reviews-worker`
   - `lead-worker`
   - `artifact-regenerator`
5. Add Vercel environment variables from `.env.example`.
6. Replace TODO integration notes with real RapidAPI/Apollo endpoint URLs.
7. Optional: enable `pg_cron` and schedule workers.
