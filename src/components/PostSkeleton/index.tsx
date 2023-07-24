import React from "react";
import { Divider } from "../Divider/styles";
import LoadingStripe from "../LoadingStripe";
import * as S from "./styles";
const PostSkeleton: React.FC = () => {
  return (
    <>
      <Divider margin="1rem 0" />
      <S.Skeleton>
        <div className="skeleton-image" />
        <div className="skeleton-post-info">
          <LoadingStripe height="2.5rem" width="12.9rem" />
          <LoadingStripe height="2rem" width="30.8rem" margin="0.8rem 0" />
          <LoadingStripe height="2rem" width="7.9rem" />
        </div>
      </S.Skeleton>
    </>
  );
};

export default PostSkeleton;
