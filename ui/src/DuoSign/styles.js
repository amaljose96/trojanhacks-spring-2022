import styled from "styled-components";
import colors from "./colors";


export const DuoSignContainer = styled.div`
    background-color:${colors.background};
    color:${colors.text};
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
`;

export const OutsetComponentStyles = `
  box-shadow: -1px -1px 3px ${colors.lightShade}, 1.5px 1.5px 3px ${colors.darkShade}66;
  background-color:${colors.background};
  border-radius: 5px;
  transition:all 0.3s;
  border:solid 2px ${colors.background};
`;

export const OutsetHoverStyles = ` 
  box-shadow: -2px -2px 5px ${colors.lightShade}, 3px 3px 5px ${colors.darkShade}66;
`;

export const OutsetActiveStyles = ` 
  box-shadow: -1px -1px 3px ${colors.lightShade}, 1.5px 1.5px 2px ${colors.darkShade}, inset -1px -1px 1px ${colors.lightShade}BB, inset 1.5px 1.5px 1px ${colors.darkShade}33;
`;


export const RidgedComponentStyles = `
box-shadow: inset -1px -1px 1px ${colors.lightShade}b3, inset 1px 1px 2px ${colors.darkShade}33, -1px -1px 3px ${colors.lightShade}, 1.5px 1.5px 3px ${colors.darkShade}66;
  border:solid 2px ${colors.background};
  transition:all 0.3s;
  background-color:${colors.background}
`;

export const RidgedHoverStyles = `
  box-shadow: inset -2px -2px 2px ${colors.lightShade}b3, inset 2px 2px 4px ${colors.darkShade}33, -2px -2px 5px ${colors.lightShade}, 3px 3px 5px ${colors.darkShade}66;
`;

export const RidgedActiveStyles = `
  box-shadow: inset -2px -2px 2px ${colors.lightShade}b3, inset 2px 2px 4px ${colors.darkShade}33, -2px -2px 5px ${colors.lightShade}, 3px 3px 5px ${colors.darkShade}66;
`;

export const InsetComponentStyles = `
  box-shadow: inset -2px -2px 2px ${colors.lightShade}b3, inset 2px 2px 4px ${colors.darkShade}30;
  transition:all 0.3s;
  background-color:${colors.background}
`;
export const InsetHoverStyles = `
  box-shadow: inset 0px 0px 10px ${colors.lightShade}dd;
  background-color:${colors.background};
  border:solid 1px ${colors.darkShade};
`;
export const InsetActiveStyles = `
  box-shadow: inset 0px 0px 15px ${colors.lightShade}dd;
  background-color:${colors.background};
  border:solid 1px ${colors.darkShade};
`;
export const Scrollable = `
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color:${colors.background};
    opacity:0.5;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background: ${colors.primary}dd;
    transition: all 0.2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary}ff;
  }
`;


export const PageTitle=styled.div`
  font-size:36px;
  color:${colors.primary};
  font-weight:bold;
`

export const AppContainer=styled.div`
  position:fixed;
  top:5px;
  left:55px;
  height:calc(100vh - 10px);
  width:calc(100vw - 60px);
  ${InsetComponentStyles};
  border-radius:20px;
  padding:30px;
  box-sizing:border-box;
`;

export const Spacer = styled.div`
  box-sizing:border-box;
  height:50px;
  width:50px;
`;