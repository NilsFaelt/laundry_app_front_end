import axios from "axios";
import { BookedLaundrytimes, LaundryTimes } from "../types/laundryTypes";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByUser = async (
  userEmail: string
): Promise<BookedLaundrytimes[] | null> => {
  try {
    const bookedTimes = await axios.post(`${apiConfig.url}/booked/byUser`, {
      email: userEmail,
    });
    return bookedTimes.data.bookings;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
