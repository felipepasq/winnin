interface Post {
  id: string;
  title: string;
  created_utc: number;
  author: string;
  url: string;
}

export interface PostData {
  data: Post;
  kind: string;
}

export interface Theme {
  colors: {
    primary: string;
    dark_primary: string;
    secondary: string;
    dark_gray: string;
    yellow: string;
    white: string;
    black: string;
  };
  fonts: {
    text: string;
  };
}

export type PostType = "rising" | "hot" | "new";
