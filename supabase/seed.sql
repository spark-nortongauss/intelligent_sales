insert into public.profiles (id, email, full_name, app_role)
values
  ('00000000-0000-0000-0000-000000000001', 'admin@example.com', 'System Admin', 'super_admin')
on conflict (id) do update set app_role = excluded.app_role;
