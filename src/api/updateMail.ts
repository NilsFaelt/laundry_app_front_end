import axios from "axios";
import { MailType } from "../types/mailTypes";
import { apiConfig } from "./apiConifig";

export const updatedMail = async (id: string) => {
  try {
    const data = await axios.put(`${apiConfig.url}/mail/${id}`, { read: true });
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
