export default async function RomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">ROM Generator / Update ROM / {id}</h2>
      <div className="card">Editable ROM fields with recalculation and artifact versioning.</div>
    </div>
  );
}
