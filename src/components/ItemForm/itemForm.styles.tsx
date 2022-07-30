import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  background-color: ${({ theme: { colors } }) => colors.primary};
  max-width: 80%;
  margin: ${({ theme: { margins } }) => margins.medium};
`;
