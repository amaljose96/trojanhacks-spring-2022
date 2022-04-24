import React from "react";
import Meeting from "./Meeting";
import { ConversationHistoryContainer } from "./styles";

function ConversationHistory({selectedUser}) {
  let sampleConversationHistory={
    meetings:[
      {
        time: new Date().getTime(),
        transcript:[
          {
            from:"them",
            time: new Date().getTime()+1000,
            text:"Hey"
          },
          {
            from:"me",
            time: new Date().getTime()+12000,
            text:"Hi"
          },
          {
            from:"them",
            time: new Date().getTime()+18000,
            text:"Whats your progress on the hackathon"
          },
          {
            from:"me",
            time: new Date().getTime()+21000,
            text:"It is going well"
          },
        ]
      },
      {
        time: new Date().getTime()+1000000,
        transcript:[
          {
            from:"them",
            time: new Date().getTime()+1001000,
            text:"Hey"
          },
          {
            from:"me",
            time: new Date().getTime()+1012000,
            text:"Hi"
          },
          {
            from:"them",
            time: new Date().getTime()+1018000,
            text:"Whats your progress on the hackathon"
          },
          {
            from:"me",
            time: new Date().getTime()+1021000,
            text:"It is going well"
          },
        ]
      }
    ]
  }
  return <ConversationHistoryContainer>
    {
      sampleConversationHistory.meetings.map(meeting=>{
        return <Meeting meeting={meeting}/>
      })
    }
  </ConversationHistoryContainer>;
}
export default ConversationHistory;