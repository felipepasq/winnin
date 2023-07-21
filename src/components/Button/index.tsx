import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  isActive?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (
  { height = "48px", width = "202px", isActive = false, children },
  ...rest
) => {
  return (
    <S.Button height={height} width={width} isActive={isActive} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
