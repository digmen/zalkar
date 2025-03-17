import {useEffect, useState} from "react";
import Card from "../components/cards/Card";

import "../styles/Vacan.scss";
import { Pagination } from "@mui/material";
import axios from "axios";


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

// const DATA_VACAN = [
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 1,
//   },
//   {
//     title: "Middle Java Backend Разработчик",
//     company: "Makers",
//     graph: "PartTime",
//     time: "Сегодня",
//     key: 2,
//   },
//   {
//     title: "Менеджер по продажам в строительный магазин",
//     company: "ZEINE interiors",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 3,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 4,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 5,
//   },
//   {
//     title: "Middle Java Backend Разработчик",
//     company: "Makers",
//     graph: "PartTime",
//     time: "Сегодня",
//     key: 6,
//   },
//   {
//     title: "Менеджер по продажам в строительный магазин",
//     company: "ZEINE interiors",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 7,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 8,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 9,
//   },
//   {
//     title: "Middle Java Backend Разработчик",
//     company: "Makers",
//     graph: "PartTime",
//     time: "Сегодня",
//     key: 10,
//   },
//   {
//     title: "Менеджер по продажам в строительный магазин",
//     company: "ZEINE interiors",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 11,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 12,
//   },
//   {
//     title: "Дизайнер корпусной мебели",
//     company: "ОсОО Flagman Print",
//     graph: "FullTime",
//     time: "Сегодня",
//     key: 13,
//   },
// ];

const VacanPage = () => {

  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    getVacancies().then((data) => {
      setVacancies(data);
    });
  }, []);

  async function getVacancies() {
    try {
      const vacancyRequest = await axios.get(`${import.meta.env.VITE_API_URL}api/v1/vacations/`, {});
      console.log(vacancyRequest.data);
      return vacancyRequest.data;
    } catch (err) {
      console.log(err);
      // window.location.reload();
    }
  }
  return (
    <div className="ListBlock">
      <h2 className="title">Вакансии</h2>
      <div className="vacanList">
        {
          vacancies?.map(item => (
                  <Card key={item.id} id={item.id} title={item.title}
                        company_name={item.company_name} type_vacation={item.type_vacation}
                        created_at={item.created_at}>
                  </Card>
          ))
        }
      </div>
      <Pagination count={1} />
    </div>
  );
};

export default VacanPage;
