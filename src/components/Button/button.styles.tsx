import styled, { css } from "styled-components";

import { ButtonProps } from "./button";

export const ButtonDefault = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  height: 40px;
  width: 150px;

  .icon {
    width: 20px;
    height: 20px;
  }

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;

const COLOR = {
  primary: css`
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.primary};
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;
