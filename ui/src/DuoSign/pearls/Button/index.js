import React from "react";
import { ButtonContainer } from "./styles";

function Button({text,onClick}) {
  return <ButtonContainer onClick={onClick}r>
    {text}
  </ButtonContainer>;
}
export default Button;