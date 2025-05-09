export const metadata = {
  title: "Mini Poll Frame",
  description: "A Farcaster Frame powered by frames.js",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://mini-app-lilac-kappa.vercel.app/poll.png",
    "fc:frame:image:aspect_ratio": "1.91:1",
    "fc:frame:button:1": "🚩 Start",
    "fc:frame:button:1:action": "post",
    "fc:frame:button:1:target": "https://mini-app-lilac-kappa.vercel.app/frames/handler"
  }
};

export default function Page() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>👋 Welcome to MiniPoll</h1>
      <p>Try this Farcaster-native poll embedded right into Warpcast.</p>
      <p>Click the button below to get started.</p>
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
