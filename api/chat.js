export default async function handler(request) {
  return new Response(
    JSON.stringify({
      reply: "TEST VERCEL OK"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
