import React from "react";
import Header from "../../components/header/header";
import VacancyList from "../../components/vacancyList/vacancyList";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import './JobOpenings.css'

function JobOpenings() {
  const nav = useNavigate();

  const AddVacancy = () => {
    nav("/AddVacancy");
  };

  return (
    <div>
      <Header />
      <div className="JobOpenings_content">
        <button className="vacancy-btn" onClick={AddVacancy}>
          Добавить вакансию
        </button>
        <VacancyList />
      </div>
      <Footer />
    </div>
  );
>>>>>>> 6b4e452 (vacancy)
}

export default JobOpenings;

