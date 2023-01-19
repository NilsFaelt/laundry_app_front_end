import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteReminder = async () => {
  try {
    const data = await axios.delete(`${apiConfig.url}/reminder`);
    return data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
