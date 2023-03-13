import styled from "styled-components";

//align columns side by side
export const Flex = styled.div`
    display:flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`