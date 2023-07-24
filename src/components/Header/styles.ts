import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 9.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 3.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  .yellow {
    color: ${({ theme }) => theme.colors.yellow};
  }

  a {
    display: flex;
  }
`;
