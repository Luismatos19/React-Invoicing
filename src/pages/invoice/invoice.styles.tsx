import styled from "styled-components";

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
  width: 80%;
  margin-bottom: ${({ theme: { margins } }) => margins.medium};
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
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
`;
