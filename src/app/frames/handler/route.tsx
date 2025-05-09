/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  try {
    //const buttonIndex = ctx?.buttonIndex;
    const wasClicked = ctx?.pressedButton !== undefined;

    console.log("ctx:", {
      method: ctx.request.method,
      pressedButton: ctx.pressedButton,
      buttonIndex: ctx.buttonIndex,
      searchParams: ctx.searchParams,
      state: ctx.state,
    });

    return {
      image: wasClicked
        ? "https://dummyimage.com/600x400/008000/ffffff&text=You+clicked+me!"
        : "https://dummyimage.com/600x400/000/fff&text=🔥+Welcome",
      buttons: [
        <Button key="click" action="post">Click me</Button>,
      ],
    };
  } catch (err) {
    console.error("Frame error:", err);
    return {
      image: "https://dummyimage.com/600x400/ff0000/ffffff&text=Frame+Error",
      buttons: [],
    };
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
