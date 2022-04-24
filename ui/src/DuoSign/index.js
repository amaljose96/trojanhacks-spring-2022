import React from "react";
import Landing from "./screens/Landing";
import { DuoSignContainer } from "./styles";
import { Route,Routes } from "react-router-dom"
import Login from "./screens/Login";
import Conversations from "./screens/Conversations";
import Settings from "./screens/Settings";
function DuoSign() {
  return <DuoSignContainer>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/app" element={<Conversations/>}/>
      <Route path="/app/settings" element={<Settings/>}/>
    </Routes>
  </DuoSignContainer>;
}
export default DuoSign;