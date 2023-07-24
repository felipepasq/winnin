import axios from "axios";
import { PostData, PostType } from "../types";

const API_ENDPOINT = "https://www.reddit.com/r";
const instance = axios.create({
  baseURL: API_ENDPOINT,
});

interface ResponseData {
  data: {
    after: string;
    children: PostData[];
  };
}

export const api = {
  getPosts: (subject: string, postType: PostType, after?: string) => {
    let endpointPath = `/${subject}/${postType}.json?limit=10`;
    if (after) {
      endpointPath += `&after=${after}`;
    }
    return instance.get<ResponseData>(endpointPath);
  },
};
