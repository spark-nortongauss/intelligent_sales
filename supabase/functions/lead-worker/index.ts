Deno.serve(async () => {
  return new Response(JSON.stringify({ ok: true, worker: 'lead-worker', note: 'TODO wire Apollo enrichment endpoints' }), { headers: { 'Content-Type': 'application/json' } });
});
