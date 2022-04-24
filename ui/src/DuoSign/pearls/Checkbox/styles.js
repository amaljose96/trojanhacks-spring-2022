import styled from "styled-components";
import colors, { getDarkerShade, getLighterShade } from "../../colors";
import { InsetComponentStyles, OutsetComponentStyles, RidgedComponentStyles, RidgedHoverStyles } from "../../styles";

export const CheckboxContainer = styled.div`
    display:flex;
    align-items:center;
`;

export const TheCheckbox = styled.div`
    box-sizing:border-box;
    height:28px;
    width:50px;
    padding:0px 2px;
    border-radius:100px;
    display:flex;
    align-items:center;
    justify-content:${props=>props.value?"flex-end":"flex-start"};
    ${RidgedComponentStyles};
    :hover{
        cursor:pointer;
        ${RidgedHoverStyles}
    }
`;
export const Tick=styled.div`
    box-sizing:border-box;
    height:20px;
    width:20px;
    ${OutsetComponentStyles}
    ${props=>props.value && `background-color:${colors.secondary};border-color:${colors.secondary}`};
    border-radius:100px;
`;
export const CheckboxLabel = styled.div`
    margin-left:15px;
`;
