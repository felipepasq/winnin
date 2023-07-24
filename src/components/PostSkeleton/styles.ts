import { styled } from "styled-components";

export const Skeleton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  margin-top: 1.2rem;
  animation: skeleton 1s ease infinite alternate;

  .skeleton-image {
    width: 7.7rem;
    height: 7.7rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .skeleton-post-info {
    display: flex;
    flex-direction: column;
  }

  @keyframes skeleton {
    to {
      opacity: 0.5;
    }
  }
`;
