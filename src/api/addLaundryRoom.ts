import axios from "axios";
import { LaundryRoom } from "../types/laundryRoom";
import { apiConfig } from "./apiConifig";

export const addRoom = async (room: string): Promise<LaundryRoom> => {
  try {
    const data = await axios.post(`${apiConfig.url}/laundryroom`, {
      laundryRoom: room,
    });
    return data.data.laundryRoom;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
