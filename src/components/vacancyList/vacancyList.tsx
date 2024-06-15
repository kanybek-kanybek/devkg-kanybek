import axios from "axios";
import { useState, useEffect } from "react";
import "./vacancyList.css";
import { useNavigate } from "react-router-dom";
interface Vacancy {
    id: number;
    logo: string;
    organization: string;
    office: string;
    salary: string | number;
    jobType: string;
}

const VacancyList: React.FC = () => {
    const [data, setData] = useState<Vacancy[]>([]);
    const navigate = useNavigate();

    const handleVacancyClick = (id: number) => {
        navigate(`/JobPage/${id}`);
    };

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
        <>
            <div className="container">
                <div className="VacancyList">
                    {data.map((vacancy) => (
                        <div
                            key={vacancy.id}
                            className="VacancyList__item"
                            onClick={() => handleVacancyClick(vacancy.id)}
                        >
                            <div className="vacancy_logo">
                                <img src={vacancy.logo} />
                            </div>
                            <div className="logo-detalils">
                                <div className="VacancyList__details">
                                    <b className="VacancyList__title">
                                        Компания
                                    </b>
                                    <b className="VacancyList__name">
                                        {vacancy.organization}
                                    </b>
                                </div>
                                <div className="VacancyList__details">
                                    <b className="VacancyList__title">
                                        Должность
                                    </b>
                                    <b className="VacancyList__office">
                                        {vacancy.office}
                                    </b>
                                </div>
                                <div className="VacancyList__details">
                                    <b className="VacancyList__title">Оклад</b>
                                    <b className="VacancyList__salary">
                                        {vacancy.salary}
                                    </b>
                                </div>
                                <div className="VacancyList__details">
                                    <b className="VacancyList__title">Тип</b>
                                    <b className="VacancyList__type">
                                        {vacancy.jobType}
                                    </b>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VacancyList;
