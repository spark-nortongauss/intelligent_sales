import { AppRole } from '@/lib/auth/types';

export function assertRole(role: AppRole, allowed: AppRole[]) {
  if (!allowed.includes(role)) throw new Error('Forbidden');
}
