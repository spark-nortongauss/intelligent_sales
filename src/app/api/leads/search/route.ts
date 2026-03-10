import { NextRequest, NextResponse } from 'next/server';
import { leadSearchSchema } from '@/lib/validators/sales';
import { enrichLeads } from '@/lib/providers/apollo';

export async function POST(req: NextRequest) {
  const data = leadSearchSchema.parse(await req.json());
  return NextResponse.json(await enrichLeads(data.query));
}
