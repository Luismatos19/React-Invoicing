import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  height: 70px;
  padding: 10px;
`;

export const InputDefault = styled.input`
  height: 20px;
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: 5px;
`;
