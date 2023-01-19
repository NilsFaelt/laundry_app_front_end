import { UsersData } from "../../../api/getAllUsers";
import { UserTypeWithNestedAdress } from "../../../types/userType";

export const fetchWrapper = async (
  getAllUsers: () => Promise<UsersData>,
  setAllMails: React.Dispatch<React.SetStateAction<string[]>>,
  setAllMailsFiltered: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const data = await getAllUsers();
  const allMail = data.users.map(
    (user: UserTypeWithNestedAdress) => user.email
  );
  setAllMails(allMail);
  setAllMailsFiltered(allMail);
};
