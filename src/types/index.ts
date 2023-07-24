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

export type PostType = "rising" | "hot" | "new";
