-- Create users table
create table public.users (
  id text not null primary key,
  email text not null,
  name text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;

-- Create policy to allow users to read their own data
create policy "Users can read their own data"
  on public.users for select
  using (auth.uid()::text = id);

-- Create policy to allow basic insert (for sync)
-- Note: In a real app with Clerk, you might use a service role key to write to this table securely,
-- or configure RLS to trust the server. For simplicity here, we assume server-side writes.

-- Create policy to allow users to INSERT rows 
create policy "Users can insert their own data"
  on public.users for insert
  using (auth.uid()::text = id);
