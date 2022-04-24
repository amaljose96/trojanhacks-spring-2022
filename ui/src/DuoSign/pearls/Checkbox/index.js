import React from "react";
import { CheckboxContainer, TheCheckbox, Tick, CheckboxLabel } from "./styles";

function Checkbox({ label, value, setValue }) {
  return <CheckboxContainer>
    <TheCheckbox value={value} onClick={() => {
      setValue(!value)
    }}>
      <Tick value={value}/>
    </TheCheckbox>
    {label && <CheckboxLabel>{label}</CheckboxLabel>}
  </CheckboxContainer>;
}
export default Checkbox;