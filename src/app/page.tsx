// --- app/page.tsx ---
import { fetchMetadata } from "frames.js/next";

const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-lilac-kappa.vercel.app/";

export async function generateMetadata() {
  const imageUrl = `${BASE_URL}/poll.png`;

  return {
    title: "Mini Frame App",
    description: "A Farcaster frame built with Next.js",
    openGraph: {
      images: [imageUrl],
    },
    other: {
      "fc:frame": "next",
      "fc:frame:image": imageUrl,
      "og:image": imageUrl,
    },
  };
}

export default function Page() {
  return <span>Frame ready. Paste this URL in Warpcast to test.</span>;
}