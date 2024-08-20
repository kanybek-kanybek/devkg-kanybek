import React, { useEffect, useState } from "react";
import "./vacancyList.css";
import useFetch from "../../Hooks/useFetch";
import { Job } from "../../Hooks/types";

function Vacancies() {
    const { data, isLoading, refetch } = useFetch({
        url: "http://3.38.98.134/events",
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

    return (
        <div id="vacancies">
            <div className="container">
                <div className="vacancies__content">
                    {data.map((job: Job, index: number) => (
                        <a
                            key={index}
                            href={`/JobPage/${job.id}`}
                            className="link"
                        >
                            <div className="jobs-item content">
                                <div className="information">
                                    <div className="company__icon">
                                        {job.logo && (
                                            <img
                                                src={job.logo}
                                                alt={`${job.organization} logo`}
                                                className="image"
                                            />
                                        )}
                                    </div>
                                    <div className="information__title">
                                        <div className="jobs-item-field type">
                                            <h6>Тип</h6>
                                            <p>{job.jobType}</p>
                                        </div>
                                        <div className="jobs-item-field company">
                                            <h6>Компания</h6>
                                            <p>
                                                {job.organization ||
                                                    "Не указано"}
                                            </p>
                                        </div>
                                        <div className="jobs-item-field position">
                                            <h6>Должность</h6>
                                            <p>{job.office}</p>
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
