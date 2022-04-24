import styled from "styled-components";
import colors from "../../colors";

export const LandingContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    height:100vh;
`;

export const AppLogoContainer = styled.div`
    margin-bottom:50px;
`;

export const Title = styled.div`
    font-size:48px;
    font-weight:800;
    color:${colors.primary}
`;