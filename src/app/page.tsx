import ClientPage from "./clientPage";

export const metadata = {
  title: "Mini Poll Frame",
  description: "A Farcaster Frame powered by frames.js",
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: `https://mini-app-lilac-kappa.vercel.app/poll.png`,
      button: {
        title: "🚩 Start",
        action: {
          type: "launch_frame",
          name: "MiniPoll",
          url: `https://mini-app-lilac-kappa.vercel.app/frames/handler`,
          splashImageUrl: `https://mini-app-lilac-kappa.vercel.app/poll.png`,
          splashBackgroundColor: "#f5f0ec",
        },
      },
    }),
  },
};

export default function Page() {
  return <ClientPage />;
}
 