export async function GET() {
    return new Response(
      JSON.stringify({
        frame: {
          version: "1",
          name: "MiniPoll",
          iconUrl: "https://mini-app-lilac-kappa.vercel.app/favicon.ico",
          homeUrl: "https://mini-app-lilac-kappa.vercel.app",
          splashImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
          splashBackgroundColor: "#f5f0ec",
          subtitle: "Simple button test",
          description: "Test your Farcaster Frames flow with this MiniPoll demo.",
          primaryCategory: "developer-tools",
          tags: ["poll", "demo", "frames", "minipoll"],
          ogTitle: "MiniPoll",
          ogDescription: "Tap a button. Watch it react.",
          ogImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
          heroImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  