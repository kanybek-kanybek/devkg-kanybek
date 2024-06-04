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
}

export default JobOpenings