import "../../styles/CardAbout.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContextProvider";

interface Vacancy {
  id: number;
  title: string;
  address: string;
  company_name: string;
  phone_number: string;
  description: string;
  type_vacation: string;
  requirements: string;
  responsibilities: string;
  created_at: string;
  updated_at: string;
  created_by: number;
  updated_by: number;
}

const CardAbout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, getUser } = useAuth();
  const [vacancy, setVacancy] = useState <Vacancy>({} as Vacancy);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    getUser();
    getVacancy().then((data) => {
      setVacancy(data);
      setTitle(data?.title || "");
      setDescription(data?.description || "");
      setResponsibilities(data?.responsibilities || "");
      setRequirements(data?.requirements || "");
      setAddress(data?.address || "");
      setCompanyName(data?.company_name || "");
      setPhoneNumber(data?.phone_number || "");
    });
  }, [id]);

  async function getVacancy() {
    try {
      const vacancyRequest = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/vacations/${id}/`);
      return vacancyRequest.data;
    } catch (err) {
      console.log(err);
    }
  }

  async function updateVacancy() {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("address", address);
    formData.append("company_name", companyName);
    formData.append("phone_number", phoneNumber);
    formData.append("description", description);
    formData.append("type_vacation", '');
    formData.append("requirements", requirements);
    formData.append("responsibilities", responsibilities);
    console.log(formData);
    setIsEditing(false);
    updateVacancyRequest(formData);
  }

  async function updateVacancyRequest(formData) {
    const accessToken = localStorage.getItem("JobKgAccessToken");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/vacations/${vacancy?.id}/`, {
        method: "PUT",
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

  async function deleteVacancy() {
    const accessToken = localStorage.getItem("JobKgAccessToken");
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/v1/vacations/${vacancy?.id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      alert("Вакансия успешно удалена");
      navigate("/");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return null; // В случае ошибки возвращает null или другое значение по умолчанию
    }
  }

  return (
    <>
      <div className="mainBlock_about">
        <div className="aboutBlock_first">
          {isEditing ? (
            <input className="about_smallInput mini-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          ) : (
            <h2>{vacancy?.title}</h2>
          )}
          {isEditing ? (
            <textarea className="about_bigInput" value={description} onChange={(e) => setDescription(e.target.value)} />
          ) : (
            <p>{vacancy?.description}</p>
          )}
          <h3>Обязанности:</h3>
          {isEditing ? (
            <textarea className="about_bigInput" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
          ) : (
            <p>{vacancy?.responsibilities}</p>
          )}
          <h3>Требования:</h3>
          {isEditing ? (
            <textarea className="about_bigInput" value={requirements} onChange={(e) => setRequirements(e.target.value)} />
          ) : (
            <p>{vacancy?.requirements}</p>
          )}
        </div>
        <div className="aboutBlock_second">
          <div className="aboutBlock_second_info">
            {isEditing ? (
              <input className="about_smallInput mini-title" type="text" value={companyName}
                onChange={(e) => setCompanyName(e.target.value)} />
            ) : (
              <h4>{vacancy?.company_name}</h4>
            )}
            {isEditing ? (
              <input className="about_smallInput" type="text" value={address}
                onChange={(e) => setAddress(e.target.value)} />
            ) : (
              <p>{vacancy?.address}</p>
            )}
            {isEditing ? (
              <input className="about_smallInput" type="text" value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
            ) : (
              <p>Контакты: {vacancy?.phone_number}</p>
            )}


          </div>
          {user?.id === vacancy?.created_by && (
            <div className="about_btns">
              {!isEditing ? (
                <p className="about_btn" onClick={() => setIsEditing(true)}>Редактировать</p>
              ) : (
                <p className="about_btn save" onClick={updateVacancy}>Сохранить</p>
              )}
              <p className="about_btn delete" onClick={() => deleteVacancy()}>
                Удалить
              </p>
            </div>

          )}
        </div>
      </div>

    </>
  );
};

export default CardAbout;
