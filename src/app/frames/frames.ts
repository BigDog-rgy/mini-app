import { createFrames } from "frames.js/next";

export const frames = createFrames({
    imagesRoute: "/frames/handler", // 👈 this tells frames.js how to render JSX as images
  });