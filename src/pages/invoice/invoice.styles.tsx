import styled from "styled-components";
import { device } from "../../utils/styles/device";

export const Subtitle = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  margin: ${({ theme: { margins } }) => margins.small};
  text-align: center;
  padding: 0.3em;
  border-radius: 0.3em 0.3em 0 0;

  &.items {
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
`;

export const Infos = styled.div`
  margin: ${({ theme: { margins } }) => margins.medium};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: ${({ theme: { margins } }) => margins.medium};

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const Logo = styled.img`
  height: 20em;
`;

export const PrintMode = styled("div")<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ active }) =>
    active &&
    `
    max-height: 100%;
  `}

  Select {
    border: 1px solid red;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: ${({ theme: { margins } }) => margins.medium};
  font-size: 0.2em;
  font-weight: bold;

  p:first-child {
    width: 7%;
  }

  @media ${device.mobileL} {
    font-size: 1em;
  }
`;
export const selectCustomStyles = {
  group: (provided: any) => ({
    ...provided,
    border: "1px solid red",
  }),
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    borderBottom: "2px",
    color: state.isSelected ? "yellow" : "black",
    backgroundColor: state.isSelected ? "green" : "white",
  }),
  control: (provided: any) => ({
    ...provided,
    marginTop: "5%",
  }),
};

export const TotalSection = styled.div`
  display: flex;
  width: 40%;
  margin: 1em auto;
  justify-content: space-between;
`;
