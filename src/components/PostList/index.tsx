import React from "react";
import { PostData } from "../../types";
import Post from "../Post";
import PostSkeleton from "../PostSkeleton";

interface PostListProps {
  posts: PostData[];
  isLoading: boolean;
}

const PostList: React.FC<PostListProps> = ({ posts, isLoading }) => {
  return (
    <>
      {isLoading &&
        Array.from({ length: 10 }).map((_, index) => (
          <PostSkeleton key={index} />
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <Post key={post.data.id} post={post} />)}
    </>
  );
};

export default PostList;
