import React from "react";
import { useNavigate } from "react-router-dom";
import { sidebarConfig } from "../../config";
import Button from "../../pearls/Button";
import Checkbox from "../../pearls/Checkbox";
import Sidebar from "../../pearls/Sidebar";
import TextInput from "../../pearls/TextInput";
import { AppContainer, PageTitle, Spacer } from "../../styles";
import { getLocalProperty, setLocalProperty } from "../../utils";
import { updateName } from "./service";
import { SettingsContainer,SettingsActions } from "./styles";

function Settings() {
  let [username, setUsername] = React.useState("");
  let [oldUsername,setOldUsername] = React.useState("");
  React.useEffect(()=>{
    let userData=getLocalProperty("userData");
    setOldUsername(userData.username);
    setUsername(userData.username);
  },[])
  let navigate = useNavigate();
  return <SettingsContainer>
    <Sidebar config={sidebarConfig} current={"settings"} />
    <AppContainer>
      <PageTitle>Settings</PageTitle>
      <br />
      <TextInput label="User Name" value={username} setValue={setUsername} />
      <br />
      <SettingsActions>
        <Button text="Save Settings" onClick={()=>{
          updateName(oldUsername,username).then(data=>{
            setLocalProperty("userData",data)
            navigate("/app");
          })
        }}/>
        <Spacer />
        <Button text="Logout" onClick={()=>{
          navigate("/login")
        }}/>
      </SettingsActions>

    </AppContainer>
  </SettingsContainer>;
}
export default Settings;