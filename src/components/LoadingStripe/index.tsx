import React from "react";

import * as S from "./styles";

interface LoadingStripeProps {
  height: string;
  width: string;
  margin?: string;
}

const LoadingStripe: React.FC<LoadingStripeProps> = ({
  height,
  width,
  margin,
}) => {
  return <S.Container height={height} width={width} margin={margin} />;
};

export default LoadingStripe;
