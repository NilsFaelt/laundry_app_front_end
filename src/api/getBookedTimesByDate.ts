import axios from "axios";
import { BookedLaundrytimes } from "../types/laundryTypes";
import { apiConfig } from "./apiConifig";

export const getBookedTimesByDate = async (date: string) => {
  try {
    const bookedTimes = await axios.post(`${apiConfig.url}/booked/byDay`, {
      dateForBooking: date,
    });

    return bookedTimes.data.bookings;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
