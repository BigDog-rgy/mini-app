import type { Metadata } from "next";
import { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

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

export default function Page() {
  useEffect(() => {
    const initialize = async () => {
      await sdk.actions.ready();
    };
    initialize();
  }, []);
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>👋 Welcome to MiniPoll</h1>
      <p>Try this Farcaster-native poll embedded right into Warpcast.</p>
      <p>Click the button below to get started.</p>
      <a
        href="/frames"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "1rem",
          display: "inline-block",
        }}
      >
        🚀 Launch Frame
      </a>
    </main>
  );
}
