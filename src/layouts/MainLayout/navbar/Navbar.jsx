import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import burger from "../../../assets/burger-menu-svgrepo-com.svg";
import closeburgericon from "../../../assets/closeburger.svg";
import "../../../styles/Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState(false);
  const {
    userActive,
    getUser,
    tokenuser
  } = useAuth();

  return (
    <>
      <div className="mainBlock">
        <div className="firstBlock">
          <div>
            <h2 className="logo" onClick={() => navigate("/")}>
              JOB KG
            </h2>
          </div>
          <div className="firstBlock_nav">
            <p onClick={() => navigate("/vacancies")}>Вакансии</p>
            <p onClick={() => navigate("/contacts")}>Контакты</p>
          </div>

        </div>
        {userActive ? (
                <div className="secondBlock">
                  <p onClick={() => navigate("/myprofile")}>Мой Профиль</p>
                </div>
        ) : (
                <div className="secondBlock">
                  <p onClick={() => navigate("/login")}>Войти</p>
                  <p onClick={() => navigate("/register")}>Регистрация</p>
                </div>
        )}
        <div className="burgerMenu">
          {buttonStatus ? (
            <img
              src={closeburgericon}
              alt="X"
              className="burgerMenu_img closingImg"
              onClick={() => {
                setButtonStatus(!buttonStatus);
              }}
            />
          ) : (
            <img
              src={burger}
              alt="X"
              className="burgerMenu_img"
              onClick={() => {
                setButtonStatus(!buttonStatus);
              }}
            />
          )}
        </div>
      </div>
      <div className={buttonStatus ? "openedBurger " : "closedBurger"}>
        <h2
          className="logo"
          onClick={() => {
            navigate("/"), setButtonStatus(!buttonStatus);
          }}>
          JOB KG
        </h2>
        <p
          onClick={() => {
            navigate("/vacancy"), setButtonStatus(!buttonStatus);
          }}>
          Вакансии
        </p>
        <p
          onClick={() => {
            navigate("/contacts"), setButtonStatus(!buttonStatus);
          }}>
          Контакты
        </p>
        {userActive ? (
                  <p onClick={() => {navigate("/myprofile"),
                          setButtonStatus(!buttonStatus)}}>Мой Профиль</p>
        ) : (
                <>
                  <p onClick={() => {navigate("/login"),
                          setButtonStatus(!buttonStatus)}}>Войти</p>
                  <p onClick={() => {navigate("/register"),
                          setButtonStatus(!buttonStatus)}}>Регистрация</p>
                </>
        )}
      </div>
    </>
  );
};

export default Navbar;
