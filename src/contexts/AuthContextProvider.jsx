import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);


const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [tokenUser, setTokenUser] = useState("");
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState(Boolean(true));
  const [userActive, setUserActive] = useState(() => {
    const storedValue = localStorage.getItem("isAuthenticatedOnJobKg");
    return storedValue === "true";
  });

  const navigate = useNavigate();

  async function register(formData) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/users/registration/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUserActive(true);
        setTokenUser(data.access);
        setLoginStatus(true);
        localStorage.setItem("isAuthenticatedOnJobKg", "true");
        localStorage.setItem("JobKgAccessToken", data.access);
        navigate("/myprofile/");

      } else {
        setUserActive(false);

        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

  async function login(formData) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUserActive(true);
        setTokenUser(data.access);
        setLoginStatus(true);
        localStorage.setItem("isAuthenticatedOnJobKg", "true");
        localStorage.setItem("JobKgAccessToken", data.access);
        navigate("/myprofile/");
      } else {
        setUserActive(false);
        console.log("Login failed:", response.status);
        setLoginStatus(false);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  const logout = () => {
    setTokenUser("");
    setUser("");
    setUserActive(false);
    localStorage.removeItem("isAuthenticatedOnJobKg");
    localStorage.removeItem("JobKgAccessToken");
    navigate("/login");
  };

  async function getUser() {

    let accessToken = localStorage.getItem("JobKgAccessToken");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/users/me/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setUserActive(false);
        throw new Error("Network response was not ok.");
      }

      const userData = await response.json();
      setUser(userData); // Возвращает данные о пользователе (может быть использовано для обработки в вызывающей функции)

    } catch (error) {
      setUser(null);
      setUserActive(false);
      console.error("There was a problem with the fetch operation:", error);
      return null; // В случае ошибки возвращает null или другое значение по умолчанию
    }
  }

  async function updateEmployer(formData) {
    let tokentemp = JSON.parse(tokenUser);
    let accessToken = tokentemp.accessToken;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}employers/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        getUser();
        const updatedUser = await response.json();
      } else {
        const errorData = await response.json();
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

  async function updateEmployee(formData) {
    let tokentemp = JSON.parse(tokenUser);
    let accessToken = tokentemp.accessToken;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}employees/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        getUser();
        const updatedUser = await response.json();
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  return (
    <authContext.Provider
      value={{
        user,
        error,
        userActive,
        tokenuser: tokenUser,
        loginStatus,
        // refreshAccessToken,
        updateEmployee,
        updateEmployer,
        getUser,
        register,
        login,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
