import { login } from "../../../../api/login";
import { loginUser } from "../../../../redux/userSlice";
import { LoginInfo } from "../../../../types/loginTypes";

type HandleLogin = (
  e: React.FormEvent<HTMLFormElement>,
  loginInfo: LoginInfo,
  setsShowLoginFailed: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any,
  setTryingLogin: React.Dispatch<React.SetStateAction<boolean>>
) => void;
export const handleLogin: HandleLogin = async (
  e,
  loginInfo,
  setsShowLoginFailed,
  dispatch,
  setTryingLogin
) => {
  try {
    e.preventDefault();
    setTryingLogin(true);
    setsShowLoginFailed(false);
    const user = await login(loginInfo);
    const jsonUser = JSON.stringify(user);
    localStorage.setItem("user", jsonUser);

    if (user) {
      dispatch(loginUser(user));
      setsShowLoginFailed(false);
      setTryingLogin(false);
    }
    if (!user) {
      setsShowLoginFailed(true);
      setTryingLogin(false);
    }
    setsShowLoginFailed(true);
  } catch (err) {
    setTryingLogin(false);
    setsShowLoginFailed(true);
    throw new Error("something went wrong in login");
  }
};
