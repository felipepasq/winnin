import { styled } from "styled-components";

export const ToggleButton = styled.button<{ isactive: boolean }>`
  background-color: ${({ theme, isactive }) =>
    isactive ? theme.colors.black : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 1.4em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;
