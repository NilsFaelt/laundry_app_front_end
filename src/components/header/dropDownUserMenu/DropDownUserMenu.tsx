import { useDispatch, useSelector } from "react-redux";
import * as styles from "./dropDownUserMenu.styles";
import { RootState } from "../../../redux/store";
import { useRef } from "react";
import { useClickOustsideToClose } from "../../../hooks/useClickOustsideToClose";
import { loggOutUser } from "../../../redux/userSlice";
import { activateBooking, handelDropDownClick } from "../../../redux/menuSlice";
interface Props {
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDownUserMenu = ({ setToogleMailPopUp }: Props) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  let admin = false;
  if (typeof user?.admin === "boolean") admin = user?.admin;
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLInputElement>(null!);
  const { userMenu, firstTooglge } = useSelector(
    (state: RootState) => state.showActiveMenuReducer
  );
  useClickOustsideToClose(menuRef);

  const handleLoggout = () => {
    localStorage.removeItem("user");
    dispatch(handelDropDownClick());
    dispatch(loggOutUser());
  };

  const handleMybookingsOnCLick = () => {
    dispatch(handelDropDownClick());
    dispatch(activateBooking());
  };
  return (
    <>
      {firstTooglge ? (
        <styles.UserMenu
          onClick={() => setToogleMailPopUp(false)}
          ref={menuRef}
          animation={userMenu ? "open-animation" : "close-animation"}
        >
          <styles.Link
            onClick={() => handleMybookingsOnCLick()}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/myBooking"}
          >
            MyBookings
          </styles.Link>
          <styles.Link
            onClick={() => dispatch(handelDropDownClick())}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/myinfo"}
          >
            MyInfo
          </styles.Link>
          {admin ? (
            <styles.Link
              onClick={() => dispatch(handelDropDownClick())}
              animation={
                userMenu ? "open-animation-nav" : "close-animation-nav"
              }
              to={"/allUsers"}
            >
              All Users
            </styles.Link>
          ) : null}
          {admin ? (
            <styles.Link
              onClick={() => dispatch(handelDropDownClick())}
              animation={
                userMenu ? "open-animation-nav" : "close-animation-nav"
              }
              to={"/createUser"}
            >
              Add User
            </styles.Link>
          ) : null}
          {admin ? (
            <styles.Link
              onClick={() => dispatch(handelDropDownClick())}
              animation={
                userMenu ? "open-animation-nav" : "close-animation-nav"
              }
              to={"/laundryrooms"}
            >
              LaundryRooms
            </styles.Link>
          ) : null}
          {admin ? (
            <styles.Link
              onClick={() => dispatch(handelDropDownClick())}
              animation={
                userMenu ? "open-animation-nav" : "close-animation-nav"
              }
              to={"/reminder"}
            >
              Important Message
            </styles.Link>
          ) : null}
          <styles.Link
            onClick={() => dispatch(handelDropDownClick())}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/quiz"}
          >
            Quiz
          </styles.Link>
          <styles.Link
            onClick={handleLoggout}
            animation={userMenu ? "open-animation-nav" : "close-animation-nav"}
            to={"/"}
          >
            Loggout
          </styles.Link>
        </styles.UserMenu>
      ) : null}
    </>
  );
};

export default DropDownUserMenu;
