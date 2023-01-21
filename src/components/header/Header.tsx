import { useDispatch, useSelector } from "react-redux";
import * as styles from "./header.styles";
import { toogleMenu } from "../../redux/menuSlice";
import DropDownUserMenu from "./dropDownUserMenu/DropDownUserMenu";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import MailPopUp from "../mailPopUp/MailPopUp";
import { getReminder } from "../../api/getReminder";
import { Ireminder } from "../../types/reminderTypes";
import ReminderPopUp from "./reminderPopUp/ReminderPopUp";
import { shortenDateToString } from "../../utils/shortenDateToString";
interface Props {
  toogleMailPopUp: boolean;
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ toogleMailPopUp, setToogleMailPopUp }: Props) => {
  const [reminder, setReminder] = useState<Ireminder | null>(null);
  const readAbleDate = shortenDateToString(new Date());
  const { userMenu } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  const fetchWraper = async () => {
    const data = await getReminder();
    if (data) {
      setReminder(data);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    fetchWraper();
  }, []);

  return (
    <styles.Container>
      {reminder && (
        <ReminderPopUp setReminder={setReminder} reminder={reminder} />
      )}
      <styles.Mail onClick={() => setToogleMailPopUp(!toogleMailPopUp)} />
      <styles.Date>{readAbleDate.date}</styles.Date>
      {!userMenu ? (
        <styles.User onClick={() => dispatch(toogleMenu())}></styles.User>
      ) : (
        <styles.UserDark></styles.UserDark>
      )}

      <DropDownUserMenu setToogleMailPopUp={setToogleMailPopUp} />
      {toogleMailPopUp ? (
        <MailPopUp setToogleMailPopUp={setToogleMailPopUp} />
      ) : null}
    </styles.Container>
  );
};

export default Header;
