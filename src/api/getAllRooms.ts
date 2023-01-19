import axios from "axios";
import { LaundryRoom } from "../types/laundryRoom";
import { apiConfig } from "./apiConifig";

export const getAllRooms = async (): Promise<LaundryRoom[]> => {
  try {
    const data = await axios(`${apiConfig.url}/laundryroom`);
    return data.data.rooms;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
