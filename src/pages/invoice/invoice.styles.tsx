import styled from "styled-components";

export const Subtitle = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  width: 80%;
  margin: ${({ theme: { margins } }) => margins.medium};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  text-align: center;
  padding: 0.3em;
  border-radius: 0.3em 0.3em 0 0;
`;

export const Infos = styled.div``;
