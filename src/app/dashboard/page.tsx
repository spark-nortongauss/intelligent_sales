import { DashboardOverview } from '@/components/features/dashboard/dashboard-overview';

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Home KPI Dashboard</h2>
      <DashboardOverview />
      <div className="card">Recent ROMs table placeholder with export action.</div>
    </div>
  );
}
