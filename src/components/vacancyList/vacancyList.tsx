import React, { useEffect, useState } from "react";
import "./vacancyList.css";
import useFetch from "../../Hooks/useFetch";
import { Job } from "../../Hooks/types";

function Vacancies() {
    const { data, isLoading } = useFetch({
        url: "http://3.38.98.134/jobs",
    });
    const [, setCompanyNames] = useState<string[]>([]);
    useEffect(() => {
        if (data.length > 0) {
            const names = data.map(
                (job: Job) => job.organization_name || "Не указано"
            );
            setCompanyNames(names);
        }
    }, [data]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }
    const sortData = [...data].sort((a, b) => b.id - a.id);
    const ApiIcon =
        "https://devkg.com/images/organizations/36d2730970ee88fc351b61b2ea4ab182.png";

    return (
        <div id="vacancies">
            <div className="container">
                <div className="vacancies__content">
                    {sortData &&
                        sortData.map((job: Job, index: number) => (
                            <a
                                key={index}
                                href={`/JobPage/${job.id}`}
                                className="link"
                            >
                                <div className="jobs-item content">
                                    <div className="information">
                                        <div className="company__icon">
                                            <img
                                                src={
                                                    job?.organization_icon ||
                                                    ApiIcon
                                                }
                                                alt={`${job.organization_name} logo`}
                                                className="image"
                                            />
                                        </div>
                                        <div className="information__title">
                                            <div className="jobs-item-field type">
                                                <h6>Тип</h6>
                                                <p>{job.type}</p>
                                            </div>
                                            <div className="jobs-item-field company">
                                                <h6>Компания</h6>
                                                <p>
                                                    {job.organization_name ||
                                                        "Не указано"}
                                                </p>
                                            </div>
                                            <div className="jobs-item-field position">
                                                <h6>Должность</h6>
                                                <p>{job.position}</p>
                                            </div>
                                            <div className="jobs-item-field price">
                                                <h6>Оклад</h6>
                                                <p>{job.salary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Vacancies;
