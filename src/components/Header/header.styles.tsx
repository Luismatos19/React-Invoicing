import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: 300px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1em;

  h1 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  }

  img {
    width: 60px;
    height: 60px;
  }
`;
