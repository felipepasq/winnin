import React from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import Post from "../../components/Post";
const Home: React.FC = () => {
  return (
    <S.Main>
      <S.ButtonsContainer>
        <Button isActive>Hot</Button>
        <Button isActive={false}>News</Button>
        <Button>Rising</Button>
      </S.ButtonsContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <div className="bottom-container">
        <Button width="100%" isActive>
          + Ver mais
        </Button>
      </div>
    </S.Main>
  );
};

export default Home;
