import React from "react";
import { ChatContainer,ChatTime,ChatBubble } from "./styles";

function getChatTimeString(time){
  let date = new Date(time);
  return `${date.toLocaleString()} `
}
function Chat({byMe,text,time}) {
  return <ChatContainer byMe={byMe}>
    {!byMe && <ChatTime>{getChatTimeString(time)}</ChatTime>}
    <ChatBubble byMe={byMe}>{text}</ChatBubble>
    {byMe && <ChatTime>{getChatTimeString(time)}</ChatTime>}
  </ChatContainer>;
}
export default Chat;