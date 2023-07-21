import React from "react";
import * as S from "./styles";
import { Divider } from "../Divider/styles";

const Post: React.FC = () => {
  return (
    <>
      <Divider margin="1rem 0" />
      <S.Container>
        <S.Image />
        <S.PostInfo>
          <p className="post-title">Titulo</p>
          <p className="post-time">
            Titulo <span className="post-user">teste</span>
          </p>
          <p className="post-link">Titulo</p>
        </S.PostInfo>
      </S.Container>
    </>
  );
};

export default Post;
