import React from "react";
import { sidebarConfig } from "../../config";
import Sidebar from "../../pearls/Sidebar";
import { AppContainer, PageTitle } from "../../styles";
import { ConversationsContainer } from "./styles";
import TranscriptView from "./TranscriptView";
import UserList from "./UserList";

function Conversations() {
  let [selectedUser,setSelectedUser] = React.useState(false);
  return <ConversationsContainer>
    <Sidebar config={sidebarConfig} current={"list"}/>
    <AppContainer>
      <PageTitle>Contacts</PageTitle>
     <UserList selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
    <TranscriptView selectedUser={selectedUser}/>
    </AppContainer>
  </ConversationsContainer>;
}
export default Conversations;