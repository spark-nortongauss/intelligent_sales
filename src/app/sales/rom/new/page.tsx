import { calculateROMPricing } from '@/lib/pricing/engine';
import { generateROMArtifacts } from '@/lib/documents/generator';

export default async function RomNewPage() {
  const pricing = calculateROMPricing(120);
  const artifacts = await generateROMArtifacts('ROM-001');

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">ROM Generator / Create New</h2>
      <div className="card">Computed subtotal: ${pricing.subtotal.toLocaleString()}</div>
      <div className="card">Artifacts: {artifacts.map((a) => a.kind).join(', ')}</div>
    </div>
  );
}
