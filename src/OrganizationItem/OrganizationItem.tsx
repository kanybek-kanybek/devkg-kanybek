import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OrganizationItem.css";

interface Vacancy {
  id: number;
  logo?: string;
  organization: string;
  office: string;
  salary: string | number;
  jobType: string;
  numVacancies?: number;
  numEvents?: number;
  numVideos?: number;
}

const generateRandomValue = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const OrganizationItem: React.FC = () => {
  const [data, setData] = useState<Vacancy[]>([]);
  const navigate = useNavigate();

  const handleVacancyClick = (id: number) => {
    navigate(`/JobPage/${id}`);
  };

  useEffect(() => {
    axios("https://01de09931cc9286e.mokky.dev/allvakansies")
      .then((res) => {
        const fetchedData = res.data.map((vacancy: Vacancy) => ({
          ...vacancy,
          numVacancies: generateRandomValue(1, 10),
          numEvents: generateRandomValue(1, 5),
          numVideos: generateRandomValue(1, 3),
        }));
        setData(fetchedData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      {data.map((vacancy) => (
        <div className="organization__item" key={vacancy.id} onClick={() => handleVacancyClick(vacancy.id)}>
          <div className="organizationItem_left">
            <div className="organization_logo">
              <img src={vacancy.logo} alt="Organization Logo" />
            </div>
            <div className="organization_details">
              <b className="organization__title">Компания</b>
              <b className="organization__name">{vacancy.organization}</b>
            </div>
          </div>

          <div className="organizationItem_right">
            <div className="organization_details">
              <b className="organization__title">Вакансий: </b>
              <b className="organization__num">{vacancy.numVacancies}</b>
            </div>
            <div className="organization_details">
              <b className="organization__title">Мероприятий: </b>
              <b className="organization__num">{vacancy.numEvents}</b>
            </div>
            <div className="organization_details">
              <b className="organization__title">Видео: </b>
              <b className="organization__num">{vacancy.numVideos}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrganizationItem;
