import styled from "styled-components";
import { device } from "./device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100%;
  max-width: 1200px;
  margin: -110px auto;
  border-radius: 0px;
  min-height: 700px;
  padding: 10px;

  @media ${device.tablet} {
    width: 80%;
    border-radius: 15px;
  }
`;
