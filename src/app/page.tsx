import { fetchMetadata } from "frames.js/next";

const BASE_URL = "https://mini-app-lilac-kappa.vercel.app/"

export async function generateMetadata() {
  return {
    title: "Mini Poll Frame",
    other: {
      ...(await fetchMetadata(new URL("/frames/handler", BASE_URL))),
    },
  };
}

export default function Page() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>👋 Welcome to MiniPoll</h1>
      <p>Try this Farcaster-native poll embedded right into Warpcast.</p>
      <a
        href="/frames/handler"
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
