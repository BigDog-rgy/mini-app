import { fetchMetadata } from "frames.js/next";

const BASE_URL =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mini-app-poll.vercel.app"; // fallback to your real Vercel domain

export async function generateMetadata() {
  return {
    title: "My Page",
    other: await fetchMetadata(new URL("/frames", BASE_URL)),
  };
}

export default function Page() {
  return <span>My existing page</span>;
}
