import React from "react";
import { TextInputContainer,TextInputLabel,TheInput } from "./styles";

function TextInput({label,value,setValue}) {
  return <TextInputContainer>
    {label && <TextInputLabel>{label}</TextInputLabel>}
    <TheInput value={value} onChange={(e)=>{
      setValue(e.target.value)
    }}/>
  </TextInputContainer>;
}
export default TextInput;