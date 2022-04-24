import styled from "styled-components";
import colors from "../../../colors";
import { OutsetComponentStyles } from "../../../styles";

export const TranscriptViewContainer = styled.div`
    background-color:#f0f;
    position:fixed;
    top: 40px;
    width: calc(75vw - 100px);
    height: calc(100vh - 75px);
    left: calc(25vw + 60px);
    ${OutsetComponentStyles}
    border-radius:20px;
`;

export const NoUserSelected = styled.div`
    width:100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const UsernamePanel = styled.div`
    padding:10px 15px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Username = styled.div`
    font-size:24px;
    font-weight:bold;
    margin-left:20px;
`;
export const PanelSegment = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const OnlineMarker = styled.div`
    height:20px;
    width:20px;
    border-radius:20px;
    background-color:${props=>props.online?"#0a0":colors.darkShade};
    margin-left:15px;
`;