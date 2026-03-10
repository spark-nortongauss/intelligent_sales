Deno.serve(async () => {
  return new Response(JSON.stringify({ ok: true, worker: 'reviews-worker', note: 'TODO wire RapidAPI provider endpoints' }), { headers: { 'Content-Type': 'application/json' } });
});
