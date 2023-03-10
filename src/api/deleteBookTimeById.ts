import axios from "axios";
import { apiConfig } from "./apiConifig";

export const deleteBookTimeById = async (id: string) => {
  try {
    const bookedTime = await axios.delete(`${apiConfig.url}/booked/byId/${id}`);

    return bookedTime;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
