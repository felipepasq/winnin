import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { PostData } from "../../types";
import PostList from "../../components/PostList";
import { api } from "../../services/api";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await api.getPosts("react", "new");
      setPosts(response.data.data.children);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.Main>
      <S.ButtonsContainer>
        <Button>Hot</Button>
        <Button>News</Button>
        <Button>Rising</Button>
      </S.ButtonsContainer>
      <PostList posts={posts} />
      <div className="bottom-container">
        <Button width="100%" selected>
          + Ver mais
        </Button>
      </div>
    </S.Main>
  );
};

export default Home;
