import React from "react";

import { ButtonDefault } from "./button.styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  disabled,
}) => {
  return (
    <ButtonDefault onClick={onClick} color={color} disabled={disabled}>
      {children}
    </ButtonDefault>
  );
};
