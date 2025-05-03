
    export async function generateMetadata() {
      return {
        title: "Mini Frame",
        other: {
          "fc:frame": "next",
          "fc:frame:image": "https://mini-app-lilac-kappa.vercel.app/next.svg",
          "og:image": "https://mini-app-lilac-kappa.vercel.app/next.svg",
        },
      };
    }
    

export default function Page() {
  return <span>Frame is live. Share this page link on Warpcast to test it.</span>;
}
