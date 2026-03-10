export type AppRole = 'super_admin' | 'admin' | 'user';

export interface AppUser {
  id: string;
  email: string;
  role: AppRole;
  fullName: string;
}
