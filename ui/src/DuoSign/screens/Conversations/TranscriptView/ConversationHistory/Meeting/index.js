import React from "react";
import Chat from "./Chat";
import { MeetingContainer,MeetingTime,MeetingChats } from "./styles";

function getMeetingTimeString(time){
  let date = new Date(time);
  return `Meeting on ${date.toLocaleString()} `
}

function Meeting({meeting}) {
  return <MeetingContainer>
    <MeetingTime>{getMeetingTimeString(meeting.time)}</MeetingTime>
    <MeetingChats>
      {
        meeting.transcript.map(chat=>{
          return <Chat byMe={chat.from == "me"} text={chat.text} time={chat.time}/>
        })
      }
    </MeetingChats>
  </MeetingContainer>;
}
export default Meeting;