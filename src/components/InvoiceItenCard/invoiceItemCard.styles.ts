import styled from "styled-components";

export const Card  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2em;
    width: 80%;
    height: 3em;
    margin-bottom: ${({ theme: { margins } }) => margins.medium};

    background-color: ${({ theme: { colors } }) => colors.grayLight};

    p{
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    }
`
export const Icon = styled.span`
    cursor: pointer;

    :hover {
        color: ${({ theme: { colors } }) => colors.primary};
    }
    `
