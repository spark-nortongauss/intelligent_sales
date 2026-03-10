import { NextRequest, NextResponse } from 'next/server';
import { romCreateSchema } from '@/lib/validators/sales';
import { enforceRateLimit } from '@/lib/ratelimit/memory';

export async function POST(req: NextRequest) {
  enforceRateLimit(`rom:${req.headers.get('x-forwarded-for') ?? 'local'}`, 10);
  const idempotency = req.headers.get('idempotency-key');
  if (!idempotency) return NextResponse.json({ error: 'Missing idempotency key' }, { status: 400 });
  const data = romCreateSchema.parse(await req.json());
  return NextResponse.json({ romId: 'ROM-NEW-001', data });
}
