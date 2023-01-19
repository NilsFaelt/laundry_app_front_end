import axios from "axios";
import { MailType } from "../types/mailTypes";
import { apiConfig } from "./apiConifig";

export const sendMail = async (mailInfo: MailType) => {
  try {
    const data = await axios.post(`${apiConfig.url}/mail`, mailInfo);
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
