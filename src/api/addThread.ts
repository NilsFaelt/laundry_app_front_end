import axios from "axios";
import { ThreadType } from "../types/threadTypes";
import { apiConfig } from "./apiConifig";

export const addThread = async (threadInfo: ThreadType): Promise<void> => {
  try {
    const postedThread = await axios.post(
      `${apiConfig.url}/thread/addNew`,
      threadInfo
    );
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
