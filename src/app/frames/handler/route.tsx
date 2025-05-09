/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  const clicked = Boolean(ctx.pressedButton);

  return {
    image: clicked
      ? "https://dummyimage.com/600x400/008000/ffffff&text=You+clicked!"
      : "https://dummyimage.com/600x400/000/fff&text=Welcome+to+the+Frame",
    buttons: [
      <Button action="post">Click me</Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
