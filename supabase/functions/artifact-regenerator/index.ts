Deno.serve(async () => {
  return new Response(JSON.stringify({ ok: true, worker: 'artifact-regenerator' }), { headers: { 'Content-Type': 'application/json' } });
});
