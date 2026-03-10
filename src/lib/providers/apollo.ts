import { LeadCompany, LeadContact } from '@/lib/providers/types';

export async function enrichLeads(query: string): Promise<{ companies: LeadCompany[]; contacts: LeadContact[] }> {
  return {
    companies: [{ id: 'c1', name: `${query} Group`, domain: 'example.com' }],
    contacts: [{ id: 'ct1', fullName: 'Jane Doe', title: 'VP Sales', email: 'jane@example.com' }]
  };
}
