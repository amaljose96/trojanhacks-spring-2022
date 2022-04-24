import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../pearls/Button";
import TextInput from "../../pearls/TextInput";
import { Spacer } from "../../styles";
import { setLocalProperty } from "../../utils";
import { loginService } from "./service";
import { LoginContainer, LoginTitle, InputContainer } from "./styles";

function Login() {
  let navigate = useNavigate();
  let [username, setUsername] = React.useState("");
  return <LoginContainer>
    <LoginTitle>
      DuoSign
    </LoginTitle>
    <InputContainer>
      <TextInput label="User Name" value={username} setValue={setUsername} />
    </InputContainer>
    <Spacer/>
    <Button text="Login" onClick={() => {
      loginService(username).then((data)=>{
        setLocalProperty("userData",data)
        navigate("/app")
      })
    }} />
  </LoginContainer>;
}
export default Login;