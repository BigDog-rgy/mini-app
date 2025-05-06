import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async () => {
  return {
    image: <span>🔥 Frame launched successfully!</span>,
    buttons: [
      <Button action="post">Click me</Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;