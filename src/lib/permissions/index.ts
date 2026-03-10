import { AppRole } from '@/lib/auth/types';

export const permissions = {
  manageUsers: (role: AppRole) => role === 'super_admin' || role === 'admin',
  managePricing: (role: AppRole) => role === 'super_admin' || role === 'admin',
  runSalesFlows: (role: AppRole) => ['super_admin', 'admin', 'user'].includes(role),
  createAdmin: (role: AppRole) => role === 'super_admin'
};
