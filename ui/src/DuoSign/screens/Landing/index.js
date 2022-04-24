import React, { useEffect } from "react";
import colors from "../../colors";
import { AppLogoContainer, LandingContainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";

function Landing(props) {
  let navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/login");
    },5000)
  },[])

  let logoSize = "260";
  return <LandingContainer>
    <AppLogoContainer>
      <svg width={logoSize} height={logoSize} viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_4_8)">
          <rect x="4" y="4" width="250" height="250" rx="125" fill={colors.primary} />
        </g>
        <path d="M82.125 83.4643C72.5093 83.4643 64.7143 91.2594 64.7143 100.875V157.125C64.7143 166.741 72.5093 174.536 82.125 174.536H133.018C142.633 174.536 150.429 166.741 150.429 157.125V100.875C150.429 91.2593 142.633 83.4643 133.018 83.4643H82.125Z" fill="#F0F0F3" />
        <path d="M177.874 164.588L158.464 145.572V112.923L177.815 93.4854C182.029 89.2524 189.257 92.2368 189.257 98.2099V159.805C189.257 165.738 182.112 168.74 177.874 164.588Z" fill={colors.background} />
        <defs>
          <filter id="filter0_dd_4_8" x="0" y="0" width="258.5" height="258.5" filterUnits="userSpaceOnUse">
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="1.5" dy="1.5" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_8" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_4_8" result="effect2_dropShadow_4_8" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4_8" result="shape" />
          </filter>
        </defs>
      </svg>
    </AppLogoContainer>
    <Title>DuoASL</Title>
  </LandingContainer>;
}
export default Landing;