import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  masg: string;
}

export const deletePost = async (id: string): Promise<Data> => {
  try {
    const data = await axios.delete(`${apiConfig.url}/posts/deletePost/${id}`);

    return data.data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
