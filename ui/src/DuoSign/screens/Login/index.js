import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../pearls/Button";
import Checkbox from "../../pearls/Checkbox";
import TextInput from "../../pearls/TextInput";
import { Spacer } from "../../styles";
import { LoginContainer, LoginTitle, InputContainer, CheckboxContainer } from "./styles";

function Login() {
  let navigate = useNavigate();
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
      <Checkbox label="Use ASL?" value={useASL} setValue={setUseASL} />
    </CheckboxContainer>
    <Spacer/>
    <Button text="Login" onClick={() => {
      navigate("/app")
    }} />
  </LoginContainer>;
}
export default Login;