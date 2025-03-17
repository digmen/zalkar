import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import googleIcon from "../../../assets/icons8-google.svg"; // Добавь иконку Google
import "../../../styles/Login.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const { login, loginStatus, userActive } = useAuth();

  function loginUser() {
    login({ username, password });
  }

  useEffect(() => {
    if (userActive) {
      navigate("/myprofile/");
    }
  }, [userActive, navigate]);

  // Ссылка для Google OAuth
  const googleAuthUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/google/callback/&prompt=consent&response_type=code&client_id=614782548389-hdp7ss8trmthkhvm6nn5o2892vqv83fb.apps.googleusercontent.com&scope=openid%20email%20profile&access_type=offline";

  return (
    <div className="loginMain_block">
      <div>
        <img src={loginimg} alt="Login illustration" />
      </div>
      <div className="loginPanel">
        <h2>Вход</h2>
        {loginStatus ? null : <div style={{ color: "red" }}>Неправильный логин или пароль</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <div className="checkBox_login">
          <input type="checkbox" id="showPass" onClick={() => setShowPass(!showPass)} />
          <label htmlFor="showPass">Показать пароль</label>
        </div>
        <p className="loginPanel_btn" onClick={loginUser}>
          Войти
        </p>

        {/* Кнопка входа через Google */}
        <a className="loginPanel_btn googleBtn" href={googleAuthUrl}>
          <img src={googleIcon} alt="Google" className="google-icon" />
          Войти с помощью Google
        </a>

        <p className="loginPanel_register">
          Нет аккаунта?{" "}
          <span onClick={() => navigate("/register")}>Регистрация</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
