import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 116.4rem;
  padding: 0 1rem 3.8rem;

  .bottom-container {
    margin-top: 0.9rem;
    button:hover {
      background-color: ${({ theme }) => theme.colors.dark_primary};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1.6rem;
  margin: 1.1rem 0 2rem;

  button:hover {
    background-color: ${({ theme }) => theme.colors.dark_gray};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
`;
