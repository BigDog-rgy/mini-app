import type { Metadata } from "next";

const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-lilac-kappa.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${BASE_URL}/api/og-image`; // you can hardcode a PNG URL here for now if needed

  return {
    title: "Mini Frame App",
    description: "Test frame for Warpcast",
    openGraph: {
      images: [imageUrl],
    },
    other: {
      "fc:frame": "next",
      "fc:frame:image": imageUrl,
    },
  };
}
