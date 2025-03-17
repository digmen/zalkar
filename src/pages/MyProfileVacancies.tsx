import {useEffect, useState} from "react";
import Card from "../components/cards/Card";

import "../styles/Vacan.scss";
import { Pagination } from "@mui/material";
import axios from "axios";
import {useAuth} from "../contexts/AuthContextProvider";


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

const MyProfileVacancies = () => {
      const [vacancies, setVacancies] = useState<Vacancy[]>([]);
      const {user} = useAuth();

      useEffect(() => {
            getVacancies().then((data) => {
                  const filteredVacancies = data.filter((vacancy: Vacancy) => vacancy.created_by === user.id);
                  setVacancies(filteredVacancies);
            });
      }, [user]);

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
}
export default MyProfileVacancies;