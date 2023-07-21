import React from "react";
import * as S from "./styles";
import Button from "../../components/Button";

const Home: React.FC = () => {
  return (
    <S.Main>
      <S.ButtonsContainer>
        <Button isActive>Hot</Button>
        <Button isActive={false}>News</Button>
        <Button>Rising</Button>
      </S.ButtonsContainer>
    </S.Main>
  );
};

export default Home;
