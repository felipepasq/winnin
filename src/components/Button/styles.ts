import { styled } from "styled-components";

interface ButtonProps {
  height: string;
  width: string;
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 0.8rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.secondary};
  font-size: 2rem;
  font-weight: 600;

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.dark_primary : theme.colors.dark_gray};
  }
`;
