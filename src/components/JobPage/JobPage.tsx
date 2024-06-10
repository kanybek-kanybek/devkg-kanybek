import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./JobPage.css";

interface Vacancy {
  id: string;
  office: string;
  organization: string;
  salary: string;
  description: string;
  telegram: string;
  skype: string;
  email: string;
  phone: string;
  jobType: string;
}

function JobPage() {
  const { id } = useParams<{ id: string }>();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);

  useEffect(() => {
    axios
      .get(`https://01de09931cc9286e.mokky.dev/allvakansies/${id}`)
      .then((response) => {
        setVacancy(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch vacancy:", error);
      });
  }, [id]);

  const removeVacancy = useCallback(
    (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      axios
        .delete(`https://01de09931cc9286e.mokky.dev/allvakansies/${id}`)
        .then(() => {
          setVacancy(null);
        })
        .catch((error) => {
          console.error("Failed to delete vacancy:", error);
        });
    },
    []
  );

  if (!vacancy) {
    return <div className="vacancy-not-found">Вакансия удален</div>;
  }

  return (
    <div className="job-list-container">
      <h2>{vacancy.office}</h2>
      <p className="organization">Организация: {vacancy.organization}</p>
      <p className="salary">Оклад: {vacancy.salary}</p>
      <p className="job-type">Тип работы: {vacancy.jobType}</p>
      <p className="description">Описание: {vacancy.description}</p>
      <div className="contact-info">
      {vacancy.telegram && (
  <p className="telegram">
    Telegram:{" "}
    <a href={`https://t.me/${vacancy.telegram}`} target="_blank" rel="noopener noreferrer">
      {vacancy.telegram}
    </a>
  </p>
)}
{vacancy.skype && (
  <p className="skype">
    Skype:{" "}
    <a href={`skype:${vacancy.skype}?chat`} target="_blank" rel="noopener noreferrer">
      {vacancy.skype}
    </a>
  </p>
)}
{vacancy.email && (
  <p className="email">
    E-Mail:{" "}
    <a href={`mailto:${vacancy.email}`} target="_blank" rel="noopener noreferrer">
      {vacancy.email}
    </a>
  </p>
)}
{vacancy.phone && (
  <p className="phone">
    Телефон:{" "}
    <a href={`tel:${vacancy.phone}`} target="_blank" rel="noopener noreferrer">
      {vacancy.phone}
    </a>
  </p>
)}

      </div>
      <button className="delete-button" type="button" onClick={(e) => removeVacancy(vacancy.id, e)}>
        Удалить вакансию
      </button>
    </div>
  );
}

export default JobPage;
