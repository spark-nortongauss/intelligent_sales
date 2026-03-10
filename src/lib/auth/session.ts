import { AppUser } from '@/lib/auth/types';

export async function getCurrentUser(): Promise<AppUser> {
  return {
    id: '00000000-0000-0000-0000-000000000001',
    email: 'admin@example.com',
    role: 'super_admin',
    fullName: 'System Admin'
  };
}
