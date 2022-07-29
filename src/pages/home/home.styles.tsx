import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};

  .button {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    margin: 3em;
  }
`;
