insert into storage.buckets (id, name, public)
values ('rom-artifacts', 'rom-artifacts', false)
on conflict (id) do nothing;

create policy "rom_artifacts_read" on storage.objects for select using (
  bucket_id = 'rom-artifacts' and auth.uid() is not null
);

create policy "rom_artifacts_write" on storage.objects for insert with check (
  bucket_id = 'rom-artifacts' and auth.uid() is not null
);

-- Example cron setup (requires pg_cron enabled by project owner)
-- select cron.schedule('reviews-worker', '*/10 * * * *', $$select net.http_post(url:='https://<project>.functions.supabase.co/reviews-worker', headers:='{"Authorization":"Bearer ' || current_setting('app.settings.service_role_key', true) || '"}'::jsonb)$$);
