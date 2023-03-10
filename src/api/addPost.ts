import axios from "axios";
import { Post } from "../types/postType";
import { apiConfig } from "./apiConifig";

export const addPost = async (post: Post): Promise<Post> => {
  try {
    const data = await axios.post(`${apiConfig.url}/posts/addPost`, post);
    return data.data.post;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
