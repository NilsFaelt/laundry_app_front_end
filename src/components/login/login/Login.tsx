import { useState } from "react";
import * as styles from "./login.styles";
import { LoginInfo } from "../../../types/loginTypes";
import { changeInputInfo } from "./utils/changeInputInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleLogin } from "./utils/handleLogin";

const Login = () => {
  const [showLoginFailed, setsShowLoginFailed] = useState(false);
  const [tryingLogin, setTryingLogin] = useState(false);
  const user = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: null,
    password: null,
  });

  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Login</styles.Title>
        {!showLoginFailed && tryingLogin && (
          <styles.PLogin>Logging in...</styles.PLogin>
        )}
        {showLoginFailed ? (
          <styles.P>Make sure credentials are correct</styles.P>
        ) : null}
        <styles.Form
          onSubmit={(e) =>
            handleLogin(
              e,
              loginInfo,
              setsShowLoginFailed,
              dispatch,
              setTryingLogin
            )
          }
        >
          <styles.Input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            name='email'
            placeholder='Email'
          ></styles.Input>
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            required
            name='password'
            placeholder='Password'
            type={"password"}
          ></styles.Input>
          <styles.Btn>LOGIN</styles.Btn>
        </styles.Form>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Login;
