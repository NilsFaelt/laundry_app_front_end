import axios from "axios";
import { Post } from "../types/postType";
import { apiConfig } from "./apiConifig";

export const getAllPosts = async (query: string): Promise<Post[]> => {
  try {
    const data = await axios(`${apiConfig.url}/posts/${query}`);
    return data.data.posts;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
