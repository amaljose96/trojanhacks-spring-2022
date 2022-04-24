import styled from "styled-components";
import TextInput from "../../pearls/TextInput";
import { PageTitle } from "../../styles";

export const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`;

export const LoginTitle = styled(PageTitle)`
    margin-bottom:50px;
`
export const InputContainer = styled.div`
    margin-bottom:20px;
`;
export const CheckboxContainer = styled.div`
    margin-bottom:30px;
`;