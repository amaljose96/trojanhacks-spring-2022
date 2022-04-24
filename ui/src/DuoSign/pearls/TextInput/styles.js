import styled from "styled-components";
import colors from "../../colors";
import { RidgedActiveStyles, RidgedComponentStyles, RidgedHoverStyles } from "../../styles";

export const TextInputContainer = styled.div`
    margin:5px;
`;


export const TextInputLabel = styled.div`
    margin-bottom:10px;
    font-size:12px;
    margin-left:10px;
    font-weight:bold;
    color:${colors.primary};
`;
export const TheInput = styled.input`
    appearance:none;
    padding:10px 15px;
    border:none;
    outline:none;
    border-radius:100px;
    font-size:16px;
    ${RidgedComponentStyles};
    :hover{
        ${RidgedHoverStyles};
    }
    :active{
        ${RidgedActiveStyles}
    }
`;
