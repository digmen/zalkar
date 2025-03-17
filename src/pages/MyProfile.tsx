import { useEffect, useState } from "react";
import "../styles/MyProfileMySettingsPage.scss";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "../contexts/AuthContextProvider";

const MyProfile = () => {
      const [isUpdating, setIsUpdating] = useState(false);
      const { getUser, user, logout } = useAuth();

      const [name, setName] = useState("");
      const [surname, setSurname] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [role, setRole] = useState("");

      useEffect(() => {
            getUser();
      }, []);

      useEffect(() => {
            if (user) {
                  setName(user.first_name);
                  setSurname(user.last_name);
                  setUsername(user.username);
                  setEmail(user.email);
                  setRole(user.role);
            }
      }, [user]);

      async function updateUser() {
            let formData = new FormData();
            formData = {
                  first_name: name,
                  last_name: surname,
                  email: email,
            };
            console.log(formData);
            setIsUpdating(false);
            updateUserRequest(formData);
      }

      async function updateUserRequest(formData) {

            const accessToken = localStorage.getItem("JobKgAccessToken");

            try {
                  const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/users/me/`, {
                        method: "PATCH",
                        headers: {
                              Authorization: `Bearer ${accessToken}`,
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                  });
                  if (!response.ok) {
                        throw new Error("Network response was not ok.");
                  }
                  alert("Данные успешно обновлены");
                  window.location.reload();
            } catch (error) {
                  console.error("There was a problem with the fetch operation:", error);
                  return null; // В случае ошибки возвращает null или другое значение по умолчанию
            }
      }

      return (
              <div>
                    <div className="mainBlock_myProfile">
                          <div>
                                <h3>ФИО</h3>
                                <div className="myProfile_info">
                                      <input
                                              type="text"
                                              placeholder="Имя"
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}
                                              disabled={!isUpdating}
                                      />
                                      <input
                                              type="text"
                                              placeholder="Фамилия"
                                              value={surname}
                                              onChange={(e) => setSurname(e.target.value)}
                                              disabled={!isUpdating}
                                      />
                                </div>
                                <div className="myProfile_contacts">
                                      <h3>Контакты</h3>
                                      <div className="myProfile_contactsMini">
                                            <div>
                                                  <p>Эллектронный адрес</p>
                                            </div>
                                            <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    disabled={!isUpdating}
                                            />
                                      </div>
                                </div>
                                <div className="myProfile_contacts">
                                      <h3>Информация</h3>
                                      <div className="myProfile_contactsMini">
                                            <div>
                                                  <p>Роль</p>
                                            </div>
                                            <input
                                                    type="text"
                                                    placeholder="EMPLOYEE"
                                                    value={role}
                                                    readOnly
                                            />
                                      </div>
                                      <div className="myProfile_contactsMini">
                                            <div>
                                                  <p>Username</p>
                                            </div>
                                            <input
                                                    type="text"
                                                    placeholder="username"
                                                    value={username}
                                                    readOnly
                                            />
                                      </div>
                                </div>

                                <div className="myProfile_btns">
                                      {!isUpdating ? (
                                              <p className="myProfile_btn" onClick={() => setIsUpdating(true)}>
                                                    Редактировать
                                              </p>
                                      ) : (
                                              <p className="myProfile_btn save" onClick={() => updateUser()}>
                                                    Сохранить
                                              </p>
                                      )}

                                      <p className="myProfile_btn logout" onClick={() => logout()}>
                                            Выйти
                                      </p>
                                </div>
                          </div>
                    </div>
              </div>
      );
};

export default MyProfile;