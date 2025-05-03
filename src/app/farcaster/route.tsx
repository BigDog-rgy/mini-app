export async function GET() {
    return new Response(
      JSON.stringify({
        name: "Mini Frame App",
        description: "An example frame built with Next.js and frames.js",
        website: "https://mini-app-lilac-kappa.vercel.app",
        icons: ["https://mini-app-lilac-kappa.vercel.app/favicon.ico"],
        redirect: "https://mini-app-lilac-kappa.vercel.app",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }