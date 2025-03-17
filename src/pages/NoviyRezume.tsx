import "../styles/NoviyRezume.scss";
import "../assets/image 3.svg";
import {useEffect, useState} from "react";
import {useAuth} from "../contexts/AuthContextProvider";
import {useNavigate} from "react-router-dom";


const NoviyRezume = () => {
      const {userActive} = useAuth();
      const navigate = useNavigate();

      const [title, setTitle] = useState("");
      const [address, setAddress] = useState("");
      const [companyName, setCompanyName] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [description, setDescription] = useState("");
      const [typeVacation, setTypeVacation] = useState("FULL");
      const [requirements, setRequirements] = useState("");
      const [responsibilities, setResponsibilities] = useState("");

      useEffect(() => {
            if(userActive === false) {
                  navigate("/login/");
            }
      }, []);

      async function createVacancy() {
            if (!title || !address || !companyName || !phoneNumber || !description || !typeVacation || !requirements || !responsibilities) {
                  alert("You have empty inputs!");
                  return;
            }
            const formData = {
                  title: title,
                  address: address,
                  company_name: companyName,
                  phone_number: phoneNumber,
                  description: description,
                  type_vacation: typeVacation,
                  requirements: requirements,
                  responsibilities: responsibilities,
            };
            console.log(formData);
            await createVacancyRequest(formData);
      }

      async function createVacancyRequest(formData:any) {
            const accessToken = localStorage.getItem("JobKgAccessToken");
            try {
                  const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/vacations/`, {
                        method: "POST",
                        headers: {
                              Authorization: `Bearer ${accessToken}`,
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                  });

                  if (response.ok) {
                        alert("Вакансия успешно создана");
                        navigate("/");
                  } else {
                        alert("Ошибка при создании вакансии");
                        const errorData = await response.json();
                        console.log(errorData);
                        console.log(JSON.stringify(formData));
                  }
            } catch (err) {
                  console.error("Error:", err);
            }
      }





      return (
              <div className="NoviyRezumesub">
                    <div>
                          <h2 className="h1">Создание вакансии </h2>
                    </div>
                    <div className="button">
                          <p className="h2">Основная информация</p>
                    </div>
                    <div className="infoBlock_rezume">
                          <div className="sub">
                                <h3>Названия вакансии</h3>
                                <input
                                        className="rezumeInp rezumeInp_name"
                                        type="text"
                                        placeholder="Название вакансии" onChange={(e) => setTitle(e.target.value)}/>
                          </div>
                          <div className="Vod">
                                <h3>График</h3>
                                <select name="type" id="type" className="rezumeInp"
                                        onChange={(e) => setTypeVacation(e.target.value)}>
                                      <option selected disabled>
                                            Время работы?
                                      </option>
                                      <option value="PART">Part Time</option>
                                      <option value="FULL">Full Time</option>
                                      <option value="REMOTE">Remote Time</option>
                                </select>
                          </div>
                    </div>
                    <div className="Pod">
                          <h3>Название компании</h3>
                          <input name="company_name" id="company_name" type="text"
                                 className="rezumeInp rezumeInp_name  "
                                 placeholder="Название компании"
                                 onChange={(e) => setCompanyName(e.target.value)}></input>
                    </div>
                    <div className="Pod">
                          <h3>Адрес компании</h3>
                          <input name="address" id="address" type="text"
                                 className="rezumeInp rezumeInp_name  "
                                 placeholder="Адрес компании"
                                 onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div className="Pod">
                          <h3>Номер компании</h3>
                          <input name="phoneNumber" id="phoneNumber" type="text"
                                 className="rezumeInp rezumeInp_name  "
                                 placeholder="Номер компании"
                                 onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div className="Pod">
                          <h3>Подробное описание</h3>
                          <textarea name="description" id="description" className="oPole"
                                    onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="Pod">
                          <h3>Обязанности</h3>
                          <textarea name="responsibilities" id="responsibilities" className="oPole"
                                    onChange={(e) => setResponsibilities(e.target.value)}></textarea>
                    </div>
                    <div className="Pod">
                          <h3>Требования</h3>
                          <textarea name="requirements" id="requirements" className="oPole"
                                    onChange={(e) => setRequirements(e.target.value)}></textarea>
                    </div>
                    <button className="rezum_btn" onClick={() => {
                          createVacancy();
                    }}>Сохранить</button>
              </div>
      );
};

export default NoviyRezume;
