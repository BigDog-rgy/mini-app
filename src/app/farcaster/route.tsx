export async function GET() {
    return new Response(
      JSON.stringify({
        name: "Mini Frame App",
        description: "Example frame app",
        website: "https://mini-app-lilac-kappa.vercel.app/",
        icons: ["https://mini-app-lilac-kappa.vercel.app/next.svg"],
        redirect: "https://mini-app-lilac-kappa.vercel.app/",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  