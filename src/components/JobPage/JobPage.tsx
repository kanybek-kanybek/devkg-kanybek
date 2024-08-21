import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./JobPage.css";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Vacancy {
    organization_icon: string;
    id: string;
    position: string;
    organization_name: string;
    salary: string;
    description: string;
    telegram: string;
    skype: string;
    email: string;
    phone: string;
    type: string;
}

function JobPage() {
    const { id } = useParams<{ id: string }>();
    const [vacancy, setVacancy] = useState<Vacancy | null>(null);
    console.log(vacancy);
    const navigatePage = useNavigate();

    useEffect(() => {
        axios
            .get(`http://3.38.98.134/jobs/${id}`)
            .then((response) => {
                setVacancy(response.data.data);
            })
            .catch((error) => {
                console.error("Failed to fetch vacancy:", error);
            });
    }, [id]);

    const removeVacancy = useCallback(
        (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            axios
                .delete(`http://3.38.98.134/jobs/${id}`)
                .then(() => {
                    setVacancy(null);
                })
                .catch((error) => {
                    console.error("Failed to delete vacancy:", error);
                });
        },
        []
    );
    function clickPageHandler() {
        navigatePage("/JobOpenings");
    }

    if (!vacancy) {
        return (
            <div className="vacancy-not-found">
                Вакансия удален <button onClick={clickPageHandler}>back</button>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="job-list-container">
                    <div className="logo-office">
                        <img src={vacancy.organization_icon} alt="" />
                        <h2>
                            {" "}
                            <p>Компания</p>
                            {vacancy.position}
                        </h2>
                    </div>
                    <div className="job__organization">
                        <h4>Организация </h4>
                        <p>{vacancy.organization_name}</p>
                    </div>
                    <div className="job__salary">
                        <h4>Оклад:</h4>
                        <p>{vacancy.salary}</p>
                    </div>
                    <div className="job__type">
                        <h4>Тип </h4>
                        <p>{vacancy.type}</p>
                    </div>
                    <div className="job__description">
                        <h4 className="job__description">Описание:</h4>
                        <p>{vacancy.description}</p>
                    </div>
                    <div className="job__contact__info">
                        <h4 className="telegram">Telegram</h4>
                        <p>
                            {vacancy.telegram && (
                                <a
                                    href={`https://t.me/${vacancy.telegram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {vacancy.telegram}
                                </a>
                            )}
                        </p>
                        <h4 className="skype">Skype </h4>
                        <p>
                            {vacancy.skype && (
                                <a
                                    href={`skype:${vacancy.skype}?chat`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {vacancy.skype}
                                </a>
                            )}
                        </p>

                        <h4 className="email">E-Mail</h4>
                        <p>
                            {vacancy.email && (
                                <a
                                    href={`mailto:${vacancy.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {vacancy.email}
                                </a>
                            )}
                        </p>

                        <h4 className="phone">Телефон </h4>
                        <p>
                            {vacancy.phone && (
                                <a
                                    href={`tel:${vacancy.phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {vacancy.phone}
                                </a>
                            )}
                        </p>
                    </div>
                    <button
                        className="delete-button"
                        type="button"
                        onClick={(e) => removeVacancy(vacancy.id, e)}
                    >
                        Удалить вакансию
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default JobPage;
