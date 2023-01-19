import axios from "axios";
import { LoginInfo } from "../types/loginTypes";
import { UserTypeWithNestedAdress } from "../types/userType";
import { apiConfig } from "./apiConifig";

export const login = async (
  loginInfo: LoginInfo
): Promise<UserTypeWithNestedAdress | null> => {
  try {
    const user = await axios.post(`${apiConfig.url}/auth`, loginInfo);
    return user.data.user;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
