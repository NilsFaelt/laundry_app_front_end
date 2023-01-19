import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export async function createUser(createUserInfo: UserType): Promise<UserType> {
  try {
    const user = await axios.post(`${apiConfig.url}/users`, createUserInfo);
    const returnData = user.data.user;
    console.log(returnData, "user");
    return returnData;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
}
