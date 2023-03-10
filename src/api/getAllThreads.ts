import axios from "axios";
import { createDispatchHook } from "react-redux";
import { ThreadType } from "../types/threadTypes";
import { apiConfig } from "./apiConifig";

export const getAllThreads = async (): Promise<ThreadType[] | null> => {
  try {
    const data = await axios(`${apiConfig.url}/thread`);
    return data.data.threads;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
