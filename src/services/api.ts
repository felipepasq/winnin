import axios from "axios";
import { PostData } from "../types";
const API_ENDPOINT = "https://www.reddit.com/r";

const instance = axios.create({
  baseURL: API_ENDPOINT,
});

type PostType = "rising" | "hot" | "new";

interface ResponseData {
  data: {
    children: PostData[];
  };
}

export const api = {
  getPosts: (subject: string, postType: PostType) =>
    instance.get<ResponseData>(`/${subject}/${postType}.json?limit=10`),
};
