import { enrichLeads } from '@/lib/providers/apollo';

export default async function LeadsPage() {
  const leads = await enrichLeads('Acme Hospitality');
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Sales / Lead Generator</h2>
      <div className="card">Companies found: {leads.companies.length}</div>
      <div className="card">Contacts found: {leads.contacts.length}</div>
    </div>
  );
}
