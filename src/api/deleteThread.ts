import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  masg: string;
}

export const deleteThread = async (thread: string): Promise<Data> => {
  try {
    const data = await axios.delete(
      `${apiConfig.url}/thread/deleteThread/${thread}`
    );

    return data.data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
