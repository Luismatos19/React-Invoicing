import styled from "styled-components";
import { device } from "../../utils/styles/device";

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2em;
  width: 80%;
  height: 3em;
  margin-bottom: ${({ theme: { margins } }) => margins.medium};

  background-color: ${({ theme: { colors } }) => colors.grayLight};

  p {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    overflow: hidden;
    width: 25%;
    padding: 0.1em;
  }

  p:first-child {
    margin-right: 1em;
  }

  @media ${device.tablet} {
  }
`;
export const Icon = styled.span`
  cursor: pointer;

  :hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
