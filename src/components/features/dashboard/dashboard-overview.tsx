'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', roms: 12, proposals: 10 },
  { name: 'Feb', roms: 18, proposals: 14 },
  { name: 'Mar', roms: 25, proposals: 21 }
];

export function DashboardOverview() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="card"><p>Total ROMs</p><h3 className="text-2xl font-bold">143</h3></div>
        <div className="card"><p>Proposal Conversion</p><h3 className="text-2xl font-bold">63%</h3></div>
        <div className="card"><p>Avg Deal Size</p><h3 className="text-2xl font-bold">$42.1k</h3></div>
        <div className="card"><p>Regenerated Files</p><h3 className="text-2xl font-bold">27</h3></div>
      </div>
      <div className="card h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="roms" fill="#0A1633" /><Bar dataKey="proposals" fill="#F5C451" /></BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
