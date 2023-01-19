import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getAllMails = async (email: string) => {
  try {
    const data = await axios(`${apiConfig.url}/mail/${email}`);
    return data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
