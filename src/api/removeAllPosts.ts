import axios from "axios";
import { apiConfig } from "./apiConifig";
interface Data {
  masg: string;
}

export const deleteAllPosts = async (threadName: string): Promise<Data> => {
  try {
    const data = await axios.delete(
      `${apiConfig.url}/posts/deleteAllPostsByThread/${threadName}`
    );

    return data.data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
