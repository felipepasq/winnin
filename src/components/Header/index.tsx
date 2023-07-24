import React from "react";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Header>
      <a href="/">
        <p>REACT</p>
        <p className="yellow">JS</p>
      </a>
    </S.Header>
  );
};

export default Header;
