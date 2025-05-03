const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-lilac-kappa.vercel.app";

export async function generateMetadata() {
  const frame = {
    version: "next",
    imageUrl: `${BASE_URL}/poll.png`,
    button: {
      title: "🚩 Start",
      action: {
        type: "launch_frame",
        name: "MiniPoll",
        url: `${BASE_URL}/frames`,
        splashImageUrl: `${BASE_URL}/poll.png`,
        splashBackgroundColor: "#f5f0ec",
      },
    },
  };

  return {
    title: "Mini Poll Frame",
    description: "A Farcaster Frame powered by frames.js",
    other: {
      "fc:frame": JSON.stringify(frame), // ✅ inject full JSON string
    },
  };
}
