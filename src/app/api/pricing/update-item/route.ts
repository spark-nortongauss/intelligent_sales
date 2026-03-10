import { NextRequest, NextResponse } from 'next/server';
import { pricingItemUpdateSchema } from '@/lib/validators/sales';

export async function POST(req: NextRequest) {
  const body = pricingItemUpdateSchema.parse(await req.json());
  return NextResponse.json({ success: true, audit: true, item: body });
}
