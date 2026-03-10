-- Extensions
create extension if not exists pgcrypto;

-- Roles and profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text not null,
  app_role text not null check (app_role in ('super_admin','admin','user')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  entity text not null,
  entity_id text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.pricing_items (
  id uuid primary key default gen_random_uuid(),
  item_code text not null unique,
  name text not null,
  qty numeric not null check (qty >= 0),
  unit_price numeric not null check (unit_price >= 0),
  comments text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roms (
  id uuid primary key default gen_random_uuid(),
  rom_number text not null unique,
  property_name text not null,
  address text not null,
  solution_type text not null,
  status text not null default 'draft',
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.rom_versions (
  id uuid primary key default gen_random_uuid(),
  rom_id uuid not null references public.roms(id) on delete cascade,
  version_no integer not null check (version_no > 0),
  subtotal numeric not null check (subtotal >= 0),
  pricing_snapshot jsonb not null,
  generated_files jsonb not null default '[]'::jsonb,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  unique (rom_id, version_no)
);

create table if not exists public.review_searches (
  id uuid primary key default gen_random_uuid(),
  query text not null,
  keywords text[] not null,
  property_candidates jsonb not null,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.review_hits (
  id uuid primary key default gen_random_uuid(),
  search_id uuid not null references public.review_searches(id) on delete cascade,
  provider text not null,
  keyword text not null,
  sentiment text not null check (sentiment in ('positive','neutral','negative')),
  raw_payload jsonb not null,
  normalized_excerpt text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.lead_searches (
  id uuid primary key default gen_random_uuid(),
  query text not null,
  created_by uuid references public.profiles(id),
  result_payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.audit_logs enable row level security;
alter table public.pricing_items enable row level security;
alter table public.roms enable row level security;
alter table public.rom_versions enable row level security;
alter table public.review_searches enable row level security;
alter table public.review_hits enable row level security;
alter table public.lead_searches enable row level security;

create policy "profiles_self_or_admin" on public.profiles for select using (
  auth.uid() = id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.app_role in ('super_admin','admin'))
);
create policy "profiles_admin_write" on public.profiles for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.app_role in ('super_admin','admin'))
);

create policy "audit_read_admin" on public.audit_logs for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.app_role in ('super_admin','admin'))
);

create policy "sales_read" on public.roms for select using (auth.uid() is not null);
create policy "sales_write" on public.roms for all using (auth.uid() is not null);
create policy "rom_versions_rw" on public.rom_versions for all using (auth.uid() is not null);
create policy "reviews_rw" on public.review_searches for all using (auth.uid() is not null);
create policy "review_hits_rw" on public.review_hits for all using (auth.uid() is not null);
create policy "leads_rw" on public.lead_searches for all using (auth.uid() is not null);
create policy "pricing_admin" on public.pricing_items for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.app_role in ('super_admin','admin'))
);

insert into public.pricing_items (item_code, name, qty, unit_price, comments)
values ('GW-CTRL', 'Gateway Controller', 1, 1200, 'Base controller'), ('RM-SENSOR', 'Room Sensor Package', 1, 89, 'Per room')
on conflict do nothing;
