import React from "react";
import * as S from "./styles";
import { Divider } from "../Divider/styles";
import { PostData } from "../../types";
import { getTimeDifference } from "../../utils/timeDifference";
interface PostProps {
  post: PostData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { data } = post;
  const { author, title, created_utc, url } = data;
  const timeDifference = getTimeDifference(created_utc);

  return (
    <>
      <Divider margin="1rem 0" />
      <S.Container>
        <S.Image src="https://placehold.co/77/A7B0BE/000000?text=Post&font=mulish" />
        <S.PostInfo>
          <a className="post-title" href={url} target="_blank">
            {title}
          </a>
          <p className="post-time">
            {`enviado há ${timeDifference} por `}
            <a
              className="post-user"
              href={`https://www.reddit.com/user/${author}/`}
              target="_blank"
            >
              {author}
            </a>
          </p>
          <a className="post-link" href={url} target="_blank">
            {url}
          </a>
        </S.PostInfo>
      </S.Container>
    </>
  );
};

export default Post;
