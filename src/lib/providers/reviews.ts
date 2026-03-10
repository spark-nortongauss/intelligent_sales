import { PropertyCandidate, ReviewHit } from '@/lib/providers/types';

export async function findProperties(query: string): Promise<PropertyCandidate[]> {
  return [{ id: 'p1', name: `${query} Hotel`, address: '123 Main St', lat: 40.71, lng: -74.0 }];
}

export async function fetchReviewHits(keywords: string[]): Promise<ReviewHit[]> {
  return keywords.map((keyword, i) => ({ provider: i % 2 ? 'Google Places' : 'TripAdvisor', keyword, sentiment: i % 3 === 0 ? 'positive' : 'neutral', excerpt: `Sample review mentioning ${keyword}` }));
}
