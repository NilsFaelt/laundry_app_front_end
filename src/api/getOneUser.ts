import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export const getOneUser = async (email: string) => {
  console.log(email);
  try {
    const data = await axios.get(`${apiConfig.url}/users/getOne/${email}`);

    return data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
