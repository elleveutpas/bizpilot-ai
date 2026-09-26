export default async function handler(request) {
  return new Response(
    JSON.stringify({
      reply: "Le serveur BizPilot AI fonctionne !"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
