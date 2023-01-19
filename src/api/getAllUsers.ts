import axios from "axios";
import { UserTypeWithNestedAdress } from "../types/userType";
import { apiConfig } from "./apiConifig";
export interface UsersData {
  users: UserTypeWithNestedAdress[];
}
export const getAllUsers = async (): Promise<UsersData> => {
  try {
    const allUsers = await axios(
      `http://${apiConfig.url}:${apiConfig.port}/users`
    );
    console.log(allUsers.data);
    return allUsers.data;
  } catch (err: unknown) {
    if (err instanceof Error) throw { msg: err.message, stack: err.stack };
  }
  throw new Error();
};
