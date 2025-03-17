import { useEffect, useState } from "react";
import "../styles/MyProfileMySettingsPage.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "../contexts/AuthContextProvider";

const MyProfileMySettingsPage = () => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [compName, setCompName] = useState("");
  const [locat, setLocate] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [school, setSchool] = useState("");
  const [spec, setSpec] = useState("");

  // function submit(){
  //   e.preventDefault;
  //   id = this.vacancy.id;
  //   locate(`/vacancies/?id=${id}&title=${title}`)
  // }

  const [role, setRole] = useState(Boolean(true));
  const { getUser, user, updateEmployer, updateEmployee } = useAuth();

  useEffect(() => {
    getUser();
    if (user.role === "EMPLOYEE") {
      setRole(false);
    } else {
      setRole(true);
    }
    console.log(user.role);
  }, []);

  function updateErUser() {
    let formData = new FormData();
    formData = {
      companyName: compName,
      location: locat,
      companyDescription: desc,
    };
    updateEmployer(formData);
  }
  function updateEeUser() {
    let formData = new FormData();
    formData = {
      dateOfBirth: date,
      gender: gender,
      studyLocation: school,
    };
    updateEmployee(formData);
  }
  return (
    <div>
      {" "}
      <div className="mainBlock_myProfile">
        <div>
          <h3>ФИО</h3>
          <div className="myProfile_info">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Отчество" />
            <input type="text" placeholder="Тэг" />
          </div>
          <div className="myProfile_moreInfo">
            <h3>Доп информация</h3>
            {role ? (
              <div>
                <div className="myProfile_inputBlock">
                  <p>Название компании</p>
                  <input
                    type="text"
                    value={compName}
                    onChange={(e) => setCompName(e.target.value)}
                  />
                </div>
                <div className="myProfile_inputBlock">
                  <p>Адрес</p>
                  <input
                    type="text"
                    value={locat}
                    onChange={(e) => setLocate(e.target.value)}
                  />
                </div>
                <div className="myProfile_inputBlock ">
                  <p>О компании</p>
                  <textarea
                    className="oComp"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
              </div>
            ) : (
              <div>
                <div className="myProfile_inputBlock">
                  <p>Дата рождения</p>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="myProfile_inputBlock">
                  <p>Пол</p>
                  <select
                    name="type"
                    id="type"
                    className="myProfile_gender"
                    onChange={(e) => setGender(e.target.value)}>
                    <option selected disabled>
                      Пол
                    </option>
                    <option value="MALE">Мужчина</option>
                    <option value="FEMALE">Женщина</option>
                  </select>
                </div>
                <div className="myProfile_inputBlock">
                  <p>Образование</p>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="myProfile_inputBlock">
                  <p>Специализация</p>
                  <input
                    type="text"
                    value={spec}
                    onChange={(e) => setSpec(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="myProfile_contacts">
            {" "}
            <h3>Контакты</h3>
            <div className="myProfile_contactsMini">
              <div>
                <p>Номер телефона</p>
              </div>
              <PhoneInput
                country={"kg"}
                value={phone}
                onChange={(value) => setPhone(value)}
                countryCodeEditable={false}
              />
            </div>
            <div className="myProfile_contactsMini">
              <div>
                <p>Эллектронный адрес</p>
              </div>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
          {role ? (
            <p className="myProfile_btn" onClick={() => updateErUser()}>
              Сохранить
            </p>
          ) : (
            <p className="myProfile_btn" onClick={() => updateEeUser()}>
              Сохранить
            </p>
          )}
        </div>
      </div>
      {/* <div id={vacancy.id}> 
        <h4>{vacancy.title}</h4>
        <h5>{vacancy.companyName}</h5>
        <p>{vacancy.workTime}</p>
        <button onClick={submit()}></button>
      </div> */}
    </div>
  );
};

export default MyProfileMySettingsPage;
