import React from "react";
import { sidebarConfig } from "../../config";
import Sidebar from "../../pearls/Sidebar";
import { SettingsContainer } from "./styles";

function Settings(props) {
  return <SettingsContainer>
    <Sidebar config={sidebarConfig} current={"settings"}/>
  </SettingsContainer>;
}
export default Settings;