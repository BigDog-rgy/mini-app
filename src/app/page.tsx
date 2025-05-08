import ClientPage from "./clientPage";

export const metadata = {
  title: "Mini Poll Frame",
  description: "A Farcaster Frame powered by frames.js",
  other: {
    "fc:frame": "next",
    "fc:frame:image": "https://mini-app-lilac-kappa.vercel.app/poll.png",
    "fc:frame:button:1": "🚩 Start",
    "fc:frame:button:1:action": "post",
    "fc:frame:button:1:target": "https://mini-app-lilac-kappa.vercel.app/frames/handler",
    "fc:frame:image:aspect_ratio": "1.91:1"
  }
};


export default function Page() {
  return <ClientPage />;
}
