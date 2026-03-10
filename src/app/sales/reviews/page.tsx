import { findProperties, fetchReviewHits } from '@/lib/providers/reviews';
import { summarizeReviews, suggestKeywords } from '@/lib/providers/openai';

export default async function ReviewsPage() {
  const properties = await findProperties('Grand Hotel');
  const keywords = await suggestKeywords(['service', 'location']);
  const hits = await fetchReviewHits(keywords);
  const summary = await summarizeReviews();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Sales / Reviews</h2>
      <div className="card">Map + Property: {properties[0].name}</div>
      <div className="card">AI Summary: {summary}</div>
      <div className="card">Keyword Hits: {hits.length} across providers</div>
    </div>
  );
}
