export default async function handler(request) {
  return new Response(
    JSON.stringify({
      reply: process.env.OPENAI_API_KEY
        ? "La clé OpenAI est bien détectée par Vercel."
        : "La clé OpenAI n'est PAS détectée par Vercel."
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
