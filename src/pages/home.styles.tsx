import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
