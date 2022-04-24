import styled from "styled-components";
import { OutsetActiveStyles, OutsetComponentStyles, OutsetHoverStyles, RidgedComponentStyles } from "../../../styles";
import colors from "../../../colors";
export const UserListContainer = styled.div`
    position:fixed;
    top:100px;
    left:85px;
    height:calc(100vh - 135px);
    width:calc(25vw - 60px);
    border-radius:10px;
    ${RidgedComponentStyles}
`;

export const User = styled.div`
    ${props => props.active ? OutsetActiveStyles : OutsetComponentStyles}
    padding:10px;
    margin:10px;
    border-radius:10px;
    ${props => props.active && `
        background-color:${colors.primary};
        color:${colors.highlightText};
        padding:12px;
        border-color:${colors.primary}
    `}
    :hover{
        ${props => props.active ? OutsetActiveStyles : OutsetHoverStyles}
        border-radius:10px;
        cursor:pointer;
    }
`;