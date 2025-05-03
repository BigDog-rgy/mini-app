import type { Metadata } from "next";

const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-lilac-kappa.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
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

  // Cast as Record<string, string> to bypass type checking on custom meta
  return {
    title: "Mini Poll Frame",
    description: "A Farcaster Frame powered by frames.js",
    other: {
      "fc:frame": JSON.stringify(frame),
    } as Record<string, string>,
  };
}

export default function Page() { // filler for vercel deploy
  return <span>Frame ready. Paste this URL in Warpcast to test.</span>;
}