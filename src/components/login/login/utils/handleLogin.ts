import { login } from "../../../../api/login";
import { loginUser } from "../../../../redux/userSlice";
import { LoginInfo } from "../../../../types/loginTypes";

type HandleLogin = (
  e: React.FormEvent<HTMLFormElement>,
  loginInfo: LoginInfo,
  setsShowLoginFailed: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any
) => void;
export const handleLogin: HandleLogin = async (
  e,
  loginInfo,
  setsShowLoginFailed,
  dispatch
) => {
  try {
    e.preventDefault();
    const user = await login(loginInfo);

    const jsonUser = JSON.stringify(user);
    localStorage.setItem("user", jsonUser);
    console.log(user);
    if (user) {
      dispatch(loginUser(user));
      setsShowLoginFailed(false);
    }
    if (!user) {
      setsShowLoginFailed(true);
    }
    setsShowLoginFailed(true);
  } catch (err) {
    setsShowLoginFailed(true);
    throw new Error("something went wrong in login");
  }
};
