import styled from "styled-components";
import colors,{getLighterShade} from "../../colors";
import { InsetActiveStyles, OutsetComponentStyles } from "../../styles";

export const SidebarContainer = styled.div`
    position:fixed;
    height:100vh;
    width:50px;
    top:0px;
    left:0px;
    ${OutsetComponentStyles}
    border-radius:0px;
    border-width:0px;
    border-color:${colors.primary};
    background-color:${colors.primary};
`;

export const AppLogoContainer = styled.div`
    box-sizing:border-box;
    height:60px;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:solid 2px ${colors.background};
    margin-bottom:10px;
`;

export const MenuItem = styled.div`
    box-sizing:border-box;
    height:50px;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.2s;
    ${props=>props.active && `background-color:${colors.background}`};
    
    :hover{
        cursor:pointer;
        ${props=>props.active ?`background-color:${colors.background}dd`:`background-color:${colors.background}33`};
        
    }
`;