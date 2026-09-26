export default async function handler(request) {
  try {
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Méthode non autorisée" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const body = await request.json();
    const message = body.message;

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message manquant" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          input: message
        })
      }
    );

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return new Response(
        JSON.stringify({
          error: "Erreur OpenAI",
          details: data
        }),
        {
          status: openaiResponse.status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        reply: data.output_text
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Erreur serveur",
        details: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
