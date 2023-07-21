import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 116.4rem;
  padding: 0 1rem 3.8rem;

  .bottom-container {
    margin-top: 0.9rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1.6rem;
  margin: 1.1rem 0 2rem;
`;
