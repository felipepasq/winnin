import React from "react";
import { PostData } from "../../types";
import Post from "../Post";
import PostSkeleton from "../PostSkeleton";

interface PostListProps {
  posts: PostData[];
  isLoading: boolean;
}

const PostList: React.FC<PostListProps> = ({ posts, isLoading }) => {
  const renderPosts = () =>
    posts.map((post) => <Post key={post.data.id} post={post} />);
  const renderLoadingSkeleton = () =>
    Array.from({ length: 10 }).map((_, index) => <PostSkeleton key={index} />);

  return (
    <>
      {isLoading ? (
        renderLoadingSkeleton()
      ) : posts.length > 0 ? (
        renderPosts()
      ) : (
        <h2>Nenhum post encontrado</h2>
      )}
    </>
  );
};

export default PostList;
