/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `✅ You pressed button index ${ctx.buttonIndex}`
          : "🔥 Frame launched successfully!"}
      </span>
    ),
    buttons: [
      <Button action="post">Click me</Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
