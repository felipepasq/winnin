import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 9.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 3.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};

  .yellow {
    color: ${({ theme }) => theme.color.yellow};
  }
`;
