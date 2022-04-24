import React from "react";
import { sidebarConfig } from "../../config";
import Sidebar from "../../pearls/Sidebar";
import { ConversationsContainer } from "./styles";

function Conversations(props) {
  return <ConversationsContainer>
    <Sidebar config={sidebarConfig} current={"list"}/>
  </ConversationsContainer>;
}
export default Conversations;