import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import "../../../styles/Register.scss";
import { useAuth } from "../../../contexts/AuthContextProvider";
import {useEffect, useState} from "react";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const { register, error, userActive} = useAuth();

  function createUser() {
    if (!email || !password || !username ||!name || !surname || !email || !role) {
      alert("You have empty inputs!");
      return;
    }

    let formData = new FormData();
    formData = {
      first_name: name,
      last_name: surname,
      username: username,
      email: email,
      password: password,
      confirm_password: password,
      role: role,
    };
    register(formData);
  }

  useEffect(() => {
    if(userActive) {
      navigate("/myprofile/");
    }
  }, []);

  return (
    <div className="regMain_block">
      {error ? <h3>{error}</h3> : ""}
      <div>
        <img src={loginimg} alt="" className="imgreg" />
      </div>
      <div className="regPanel">
        <h2>Регистрация</h2>
        <div className="regPanel_inputsBlock">
          <input
                  type="text"
                  placeholder="Имя"
                  className="regPanel_inputs"
                  onChange={(e) => setName(e.target.value)}
          />
          <input
                  type="text"
                  placeholder="Фамилия"
                  className="regPanel_inputs"
                  onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
        />
        <input
                type="text"
                placeholder="Электронный адрес"
                onChange={(e) => setEmail(e.target.value)}
        />
        <input
                type={showPass ? "text" : "password"}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
        />
        <input
                type={showPass ? "text" : "password"}
                placeholder="Повторите пароль"
        />

        <div className="checkBox_reg">
          <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onClick={() => setShowPass(!showPass)}
          />
          <label htmlFor="scales">Показать пароль</label>
        </div>
        <select
                name="who"
                id="who"
                className="selectreg"
                onChange={(e) => setRole(e.target.value)}>
          <option selected disabled>
            Кто вы?
          </option>
          <option value="EMPLOYER">Я работодатель</option>
          <option value="EMPLOYEE">Я ищу работу</option>
        </select>
        <p
                className="regPanel_btn"
                onClick={() => {
                  createUser();
                }}>
          Регистрация
        </p>
        <p className="regPanel_register">
          Уже есть аккаунт?{" "}
          <span onClick={() => navigate("/login")}>Войти</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
