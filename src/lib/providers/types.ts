export interface PropertyCandidate { id: string; name: string; address: string; lat: number; lng: number; }
export interface ReviewHit { provider: string; keyword: string; sentiment: 'positive'|'neutral'|'negative'; excerpt: string; }
export interface LeadCompany { id: string; name: string; domain: string; }
export interface LeadContact { id: string; fullName: string; title: string; email: string; }
