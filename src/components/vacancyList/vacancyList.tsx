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
        return <div>Loading...</div>;
    }

    return (
        <>
            <div id="vacancies">
                <div className="container">
                    <div className="vacancies__content">
                        {data.map((job: Job, index: number) => (
                            <a
                                key={index}
                                href={`/ru/jobs/${job.slug}`}
                                className="link"
                            >
                                <div
                                    className="jobs-item content"
                                    data-v-6dc437e8
                                >
                                    <div
                                        className="information"
                                        data-v-6dc437e8
                                    >
                                        <div
                                            className="company__icon"
                                            data-v-6dc437e8
                                        >
                                            {job.organization_icon && (
                                                <img
                                                    src={job.organization_icon}
                                                    alt={`${job.organization_name} logo`}
                                                    className="image"
                                                />
                                            )}
                                        </div>
                                        <div className="information__title">
                                            <div
                                                className="jobs-item-field company"
                                                data-v-6dc437e8
                                            >
                                                <h2
                                                    className="label"
                                                    data-v-6dc437e8
                                                >
                                                    <h6>Компания</h6>
                                                    <p>
                                                        {job.organization_name ||
                                                            "Не указано"}
                                                    </p>
                                                </h2>
                                            </div>
                                            <div
                                                className="jobs-item-field position"
                                                data-v-6dc437e8
                                            >
                                                <h2
                                                    className="label"
                                                    data-v-6dc437e8
                                                >
                                                    <h6>Должность</h6>
                                                    <p>{job.position}</p>
                                                </h2>
                                            </div>
                                            <div
                                                className="jobs-item-field price"
                                                data-v-6dc437e8
                                            >
                                                <h2
                                                    className="label"
                                                    data-v-6dc437e8
                                                >
                                                    <h6>Оклад</h6>
                                                    <p>{job.salary}</p>
                                                </h2>
                                            </div>
                                            <div
                                                className="jobs-item-field type"
                                                data-v-6dc437e8
                                            >
                                                <h2
                                                    className="label"
                                                    data-v-6dc437e8
                                                >
                                                    <h6>Тип</h6>
                                                    <p>{job.type}</p>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vacancies;
