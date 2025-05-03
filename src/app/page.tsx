import { fetchMetadata } from "frames.js/next";

const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-lilac-kappa.vercel.app";

export async function generateMetadata() {
  const meta = await fetchMetadata(new URL("/frames", BASE_URL));

  return {
    title: "My Frame App",
    description: "Frame-powered app for Farcaster",
    other: meta,
  };
}

export default function Page() {
  return <span>Frame is live. Share this page link on Warpcast to test it.</span>;
}
