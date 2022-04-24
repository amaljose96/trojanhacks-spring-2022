import React from "react";
import Button from "../../pearls/Button";
import Checkbox from "../../pearls/Checkbox";
import TextInput from "../../pearls/TextInput";
import { LoginContainer, LoginTitle, InputContainer,CheckboxContainer } from "./styles";

function Login() {
  let [username, setUsername] = React.useState("");
  let [useASL, setUseASL] = React.useState(false);
  return <LoginContainer>
    <LoginTitle>
      DuoASL
    </LoginTitle>
    <InputContainer>
      <TextInput label="User Name" value={username} setValue={setUsername} />
    </InputContainer>
    <CheckboxContainer>
    <Checkbox label="Use ASL?" value={useASL} setValue={setUseASL}/>
    </CheckboxContainer>
    <Button text="Login" onClick={() => {
      // alert("finally")
    }} />
  </LoginContainer>;
}
export default Login;