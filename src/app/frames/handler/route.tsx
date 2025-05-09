/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  try {
    const clicked = ctx?.pressedButton;

    return {
      image: "https://dummyimage.com/600x400/000/fff&text=" + 
             encodeURIComponent(clicked ? "You clicked!" : "Welcome"),
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
