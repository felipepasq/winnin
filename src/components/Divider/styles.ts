import { styled } from "styled-components";

interface DividerProps {
  margin?: string;
}

export const Divider = styled.div<DividerProps>`
  height: 0.1rem;
  margin: ${({ margin }) => margin || "0"};
  background-color: ${({ theme }) => theme.colors.dark_gray};
  width: 100%;
`;
