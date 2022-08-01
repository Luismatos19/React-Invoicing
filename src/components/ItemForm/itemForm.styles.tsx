import styled from "styled-components";
import { device } from "../../utils/styles/device";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  background-color: ${({ theme: { colors } }) => colors.primary};
  max-width: 80%;
  margin: ${({ theme: { margins } }) => margins.medium};

  @media ${device.tablet} {
    flex-direction: row;
    Input {
      width: 60%;
    }
  }
`;
