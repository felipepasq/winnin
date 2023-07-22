import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  selected?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  height = "4.8rem",
  width = "20.2rem",
  selected = false,
  children,
}) => {
  return (
    <S.Button height={height} width={width} selected={selected}>
      {children}
    </S.Button>
  );
};

export default Button;
