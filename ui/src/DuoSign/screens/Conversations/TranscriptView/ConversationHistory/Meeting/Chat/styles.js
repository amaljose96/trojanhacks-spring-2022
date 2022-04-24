import styled from "styled-components";
import colors from "../../../../../../colors";
import { OutsetComponentStyles } from "../../../../../../styles";

export const ChatContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:${props=>props.byMe?"flex-end":"flex-start"};
    margin:10px 0px;
`;
export const ChatTime = styled.div`
    font-size:12px;
`;
export const ChatBubble = styled.div`
    margin-${props=>props.byMe ? "right":"left"}:10px;
    ${OutsetComponentStyles}
    padding:10px;
    color:${colors.highlightText};
    background-color:${props=>props.byMe ? colors.secondary : colors.primary};
    border-color:${props=>props.byMe ? colors.secondary : colors.primary};
`;