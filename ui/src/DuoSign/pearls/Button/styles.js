import styled from "styled-components";
import colors from "../../colors";
import { OutsetActiveStyles, OutsetComponentStyles, OutsetHoverStyles } from "../../styles";

export const ButtonContainer = styled.span`
box-sizing:border-box;
    padding:10px 25px;
    ${OutsetComponentStyles}
    color:${colors.primary};
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:800;
    font-size:18px;
    :hover{
        ${OutsetHoverStyles}
        cursor:pointer;
    }
    :active{
        ${OutsetActiveStyles}
    }
`;