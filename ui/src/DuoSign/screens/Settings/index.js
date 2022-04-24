import React from "react";
import { useNavigate } from "react-router-dom";
import { sidebarConfig } from "../../config";
import Button from "../../pearls/Button";
import Checkbox from "../../pearls/Checkbox";
import Sidebar from "../../pearls/Sidebar";
import TextInput from "../../pearls/TextInput";
import { AppContainer, PageTitle, Spacer } from "../../styles";
import { SettingsContainer,SettingsActions } from "./styles";

function Settings() {
  let [username, setUsername] = React.useState("");
  let [useASL, setUseASL] = React.useState(false);
  let navigate = useNavigate();
  return <SettingsContainer>
    <Sidebar config={sidebarConfig} current={"settings"} />
    <AppContainer>
      <PageTitle>Settings</PageTitle>
      <br />
      <TextInput label="User Name" value={username} setValue={setUsername} />
      <br />
      <Checkbox label="Use ASL?" value={useASL} setValue={setUseASL} />
      <br />
      <SettingsActions>
        <Button text="Save Settings" />
        <Spacer />
        <Button text="Logout" onClick={()=>{
          navigate("/login")
        }}/>
      </SettingsActions>

    </AppContainer>
  </SettingsContainer>;
}
export default Settings;