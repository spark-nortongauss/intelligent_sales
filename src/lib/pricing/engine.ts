export interface PricingLine { name: string; qty: number; unitPrice: number; total: number; }

export function calculateROMPricing(rooms: number): { subtotal: number; lines: PricingLine[] } {
  const lines = [
    { name: 'Gateway Controller', qty: 1, unitPrice: 1200, total: 1200 },
    { name: 'Room Sensor Package', qty: rooms, unitPrice: 89, total: rooms * 89 }
  ];
  const subtotal = lines.reduce((acc, line) => acc + line.total, 0);
  return { subtotal, lines };
}
