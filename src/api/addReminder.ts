import axios from "axios";
import { Ireminder } from "../types/reminderTypes";
import { apiConfig } from "./apiConifig";

export const addReminder = async (info: Ireminder): Promise<Ireminder> => {
  try {
    const data = await axios.post(`${apiConfig.url}/reminder`, info);
    return data.data.reminder;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
