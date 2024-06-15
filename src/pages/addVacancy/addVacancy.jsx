import React from "react";
import LeftSidebar from "../../components/leftSidebar/leftSidebar";
import VacancyForm from "../../components/vacancyForm/vacancyForm";
import "./addVacancy.css";
import Footer from "../../components/footer/footer";

function AddVacancy() {
  return (
    <div className="container">
      <div className="AddVacancy_content">
        <LeftSidebar />
        <div className="right-add-vacancy_wrapper">
          <h1 className="head-title">Добавить новую вакансию</h1>
          <p className="title-description">
            Вакансия должна относится к сфере информационных технологий и будет
            опубликована после проверки модератором
          </p>
          <VacancyForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AddVacancy;
