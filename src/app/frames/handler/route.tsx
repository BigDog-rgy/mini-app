import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async () => {
  return {
    image: "https://dummyimage.com/600x400/000/fff&text=Success",
    buttons: [
      <Button key="click" action="post">Click me</Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;