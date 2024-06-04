import axios from "axios";
import { useState, useEffect } from "react";
import './vacancyList.css';

interface Vacancy {
  id: number;
  logo?: string;
  company: string;
  office: string;
  salary: string | number;
  jobType: string;
}

const VacancyList: React.FC = () => {
  const [data, setData] = useState<Vacancy[]>([]);

  useEffect(() => {
    axios("https://01de09931cc9286e.mokky.dev/allvakansies")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="VacancyList">
      {data.map((vacancy) => (
        <div key={vacancy.id} className="VacancyList__item">
          <div className="VacancyList__details">
            <b className="VacancyList__title">ID</b>
            <b className="VacancyList__id">{vacancy.id}</b>
          </div>
          <div className="VacancyList__logo">
            {vacancy.logo ? (
              <img
                src={vacancy.logo}
                alt={vacancy.company}
                className="VacancyList__logo-img"
              />
            ) : (
              <div className="VacancyList__logo-placeholder">Logo</div>
            )}
          </div>
          <div className="VacancyList__details">
            <b className="VacancyList__title">Company</b>
            <b className="VacancyList__name">{vacancy.company}</b>
          </div>
          <div className="VacancyList__details">
            <b className="VacancyList__title">Position</b>
            <b className="VacancyList__office">{vacancy.office}</b>
          </div>
          <div className="VacancyList__details">
            <b className="VacancyList__title">Salary</b>
            <b className="VacancyList__salary">{vacancy.salary}</b>
          </div>
          <div className="VacancyList__details">
            <b className="VacancyList__title">Type</b>
            <b className="VacancyList__type">{vacancy.jobType}</b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VacancyList;
