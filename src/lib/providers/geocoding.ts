import { PropertyCandidate } from '@/lib/providers/types';

export async function geocodeSearch(query: string): Promise<PropertyCandidate[]> {
  return [{ id: 'geo-1', name: query, address: 'Geocoded address', lat: 37.7749, lng: -122.4194 }];
}
