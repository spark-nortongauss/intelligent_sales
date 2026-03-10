const calls = new Map<string, number[]>();

export function enforceRateLimit(key: string, maxCalls = 30, windowMs = 60_000) {
  const now = Date.now();
  const history = (calls.get(key) || []).filter((t) => now - t < windowMs);
  history.push(now);
  calls.set(key, history);
  if (history.length > maxCalls) throw new Error('Rate limit exceeded');
}
