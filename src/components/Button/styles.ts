import { styled } from "styled-components";

interface ButtonProps {
  height: string;
  width: string;
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.color.secondary};
  font-size: 2rem;
  font-weight: 600;
`;
