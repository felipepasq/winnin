import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  margin-top: 1.2rem;
`;

export const Image = styled.div`
  width: 7.7rem;
  height: 7.7rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.dark_gray};
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  .post-title {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }

  .post-time {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.dark_gray};
  }

  .post-user {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
  .post-link {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }

  .post-time,
  .post-user,
  .post-link {
    font-size: 16px;
  }
`;