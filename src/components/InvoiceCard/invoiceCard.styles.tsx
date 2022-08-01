import styled from "styled-components";
import { device } from "../../utils/styles/device";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 2px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 10px;
  padding: 0.2em;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-size: 2em;

  :hover {
    box-shadow: 5px 10px ${({ theme: { colors } }) => colors.gray};
    background-color: ${({ theme: { colors } }) => colors.primary};
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Avatar = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-right: 0.3em;
  border: 2px solid ${({ theme: { colors } }) => colors.black}; ;
`;

export const Info = styled.div`
  @media ${device.tablet} {
    padding-right: 3em;
  }
`;
