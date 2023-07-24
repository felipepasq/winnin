import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { PostData, PostType } from "../../types";
import PostList from "../../components/PostList";
import { api } from "../../services/api";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [after, setAfter] = useState("");
  const [buttonText, setButtonText] = useState("+ Ver mais");
  const [postType, setPostType] = useState<PostType>(() => {
    const storagedPostType = localStorage.getItem("@Winnin:post");
    if (storagedPostType) {
      return JSON.parse(storagedPostType);
    }
    return "hot";
  });

  const fetchPosts = async () => {
    setButtonText("Carregando ...");
    try {
      const response = await api.getPosts("reactjs", postType, after);
      setAfter(response.data.data.after);
      setPosts((prevData) => [...prevData, ...response.data.data.children]);
      setButtonText("+ Ver mais");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (value: PostType) => {
    localStorage.setItem("@Winnin:post", JSON.stringify(value));
    setAfter("");
    setIsLoading(true);
    setPostType(value);
  };

  useEffect(() => {
    fetchPosts();

    return () => {
      setPosts([]);
    };
  }, [postType]);

  const shouldRenderMoreButton = !isLoading || posts.length > 0;

  return (
    <S.Main>
      <S.ButtonsContainer>
        <Button
          onClick={() => handleClick("hot")}
          selected={postType === "hot"}
        >
          Hot
        </Button>
        <Button
          onClick={() => handleClick("new")}
          selected={postType === "new"}
        >
          News
        </Button>
        <Button
          onClick={() => handleClick("rising")}
          selected={postType === "rising"}
        >
          Rising
        </Button>
      </S.ButtonsContainer>

      <PostList posts={posts} isLoading={isLoading} />
      {shouldRenderMoreButton && (
        <div className="bottom-container">
          <Button width="100%" selected onClick={() => fetchPosts()}>
            {buttonText}
          </Button>
        </div>
      )}
    </S.Main>
  );
};

export default Home;
