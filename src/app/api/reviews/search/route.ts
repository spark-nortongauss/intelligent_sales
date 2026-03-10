import { NextRequest, NextResponse } from 'next/server';
import { reviewsSearchSchema } from '@/lib/validators/sales';
import { fetchReviewHits, findProperties } from '@/lib/providers/reviews';

export async function POST(req: NextRequest) {
  const data = reviewsSearchSchema.parse(await req.json());
  const properties = await findProperties(data.query);
  const hits = await fetchReviewHits(data.keywords);
  return NextResponse.json({ properties, hits });
}
