<<<<<<< HEAD
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import React from 'react'
import AddVacancy from '../addVacancy/addVacancy'

function JobOpenings() {
    return (
        <>
            <Header />
            <AddVacancy />
            <Footer />
        </>
    );
=======
import React from 'react';
import Header from '../../components/header/header';
import VacancyList from '../../components/vacancyList/vacancyList';
import { useNavigate } from 'react-router-dom';

function JobOpenings() {
  const nav = useNavigate();

  const AddVacancy = () => {
    nav('/AddVacancy');
  };

  return (
    <div>
      <Header />
      <button onClick={AddVacancy}>Добавить вакансию</button>
      <VacancyList />
    </div>
  );
>>>>>>> 6b4e452 (vacancy)
}

export default JobOpenings;
