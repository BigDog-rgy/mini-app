export async function GET() {
    return new Response(
      JSON.stringify({
        frame: {
          version: "1",
          name: "MiniPoll",
          iconUrl: "https://mini-app-lilac-kappa.vercel.app/icon.png",
          homeUrl: "https://mini-app-lilac-kappa.vercel.app",
          splashImageUrl: "https://mini-app-lilac-kappa.vercel.app/splash.png",
          splashBackgroundColor: "#f5f0ec",
          subtitle: "Vote demo",
          description: "Try this Farcaster MiniPoll demo frame.",
          primaryCategory: "developer-tools",
          tags: ["poll", "demo", "frames"],
          ogTitle: "MiniPoll",
          ogDescription: "Vote using a frame!",
          ogImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
          heroImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png"
        }
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  