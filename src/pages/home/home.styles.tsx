import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};

  h1 {
    margin-bottom: ${({ theme: { margins } }) => margins.small};
  }
`;
