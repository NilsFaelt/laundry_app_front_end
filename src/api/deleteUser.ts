import axios from "axios";
import { apiConfig } from "./apiConifig";

interface Data {
  data: { info: string };
  status: number;
}
export const deleteUser = async (id: string): Promise<Data> => {
  try {
    const data = await axios.delete(`${apiConfig.url}/users/${id}`);

    return data;
  } catch (err: any) {
    throw { msg: err.message, stack: err.stack };
  }
};
