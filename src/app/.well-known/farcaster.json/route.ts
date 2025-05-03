export async function GET() {
    return new Response(
      JSON.stringify({
        name: "Mini Poll Frame",
        description: "A simple Farcaster frame built with frames.js + Next.js",
        icon: "https://mini-app-lilac-kappa.vercel.app/favicon.ico",
        website: "https://mini-app-lilac-kappa.vercel.app",
        redirect: "https://mini-app-lilac-kappa.vercel.app",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  