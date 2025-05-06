import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `You picked: ${ctx.searchParams.value}`
          : "Choose an option below"}
      </span>
    ),
    buttons: [
      <Button key="yes" action="post" target={{ query: { value: "Yes" } }}>Yes</Button>,
      <Button key="no" action="post" target={{ query: { value: "No" } }}>No</Button>,
    ],
  };
});

export { handleRequest as GET, handleRequest as POST };