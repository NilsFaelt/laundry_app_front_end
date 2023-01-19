import axios from "axios";
import { apiConfig } from "./apiConifig";

export const getAllMails = async (email: string) => {
  try {
    const data = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/mail/${email}`
    );
    return data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
