import axios from "axios";
import { UserType } from "../types/userType";
import { apiConfig } from "./apiConifig";

export async function updateUser(
  createUserInfo: any
): Promise<UserType | null> {
  console.log(createUserInfo, " in axios");

  try {
    const user = await axios.put(
      `${apiConfig.url}/users/${createUserInfo.id}`,
      createUserInfo
    );
    const returnData = user.data.user;

    return returnData;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
}
