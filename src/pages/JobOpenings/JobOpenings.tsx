import React from "react";
import Header from "../../components/header/header";
import VacancyList from "../../components/vacancyList/vacancyList";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";

function JobOpenings() {
  const nav = useNavigate();

  const AddVacancy = () => {
    nav("/AddVacancy");
  };

  const styles = {
    button: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#6fcf97",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div>
      <Header />
      <button style={styles.button} onClick={AddVacancy}>
        Добавить вакансию
      </button>
      <VacancyList />
      <Footer />
    </div>
  );
>>>>>>> 6b4e452 (vacancy)
}

export default JobOpenings;

