export async function suggestKeywords(seedKeywords: string[]): Promise<string[]> {
  if (!process.env.OPENAI_API_KEY) return [...new Set([...seedKeywords, 'service', 'staff', 'cleanliness'])];
  return [...new Set([...seedKeywords, 'location', 'value', 'experience'])];
}

export async function summarizeReviews(): Promise<string> {
  return 'Guests consistently praise staff friendliness and location; recurring concerns mention wait times.';
}
