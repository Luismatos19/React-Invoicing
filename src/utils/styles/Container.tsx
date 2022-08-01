import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 80%;
  max-width: 1200px;
  margin: -110px auto;
  border-radius: 15px;
  min-height: 700px;
  padding: 10px;
`;
