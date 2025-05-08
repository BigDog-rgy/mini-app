export async function GET() {
    return new Response(
      JSON.stringify({
        accountAssociation: {
          header: "eyJmaWQiOjU0MDg5MCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDgzRDIwZDUwYTgxYTJEQkE2MTE1OTU5NDlBOTVkMWU3MDkwOTFFNjgifQ",
          payload: "eyJkb21haW4iOiJtaW5pLWFwcC1saWxhYy1rYXBwYS52ZXJjZWwuYXBwIn0",
          signature: "MHhmMzE5ZWNjYWMyY2JlZmFiZDU2YzJjNGRkMjM2MDJmZmZjZmI5YzE1MGFiMzA0NjE5ZDcyNWE4ODJjNDc1MmM2NWQ2ODQ4MTQzNjBmYmUwZGQzNzMxMDU1OTYxYjFiOWY4MDk2YmJmZjhkYzAwNjU5NzI3ZmY1Zjg4YmUyNDk2ODFj"
        },
        frame: {
          version: "1",
          name: "MiniPoll",
          path: "/frames/handler",
          iconUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
          homeUrl: "https://mini-app-lilac-kappa.vercel.app",
          splashImageUrl: "https://mini-app-lilac-kappa.vercel.app/poll.png",
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
          "Content-Type": "application/json",
        },
      }
    );
  }
  