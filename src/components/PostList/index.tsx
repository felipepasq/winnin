import React from "react";
import { PostData } from "../../types";
import Post from "../Post";

interface PostListProps {
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.data.id} />
      ))}
    </>
  );
};

export default PostList;
