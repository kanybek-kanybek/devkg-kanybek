import React, { useEffect, useState } from "react";
import "../OrganizationItem/OrganizationItem.css";
import useFetch from "../../Hooks/useFetch";
import { Job } from "../../Hooks/types";

function OrganizationItem() {
    const { data, isLoading } = useFetch({
        url: "http://3.38.98.134/organizations",
    });
    const [, setCompanyNames] = useState<string[]>([]);

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
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
            <div className="container">
                {Array.isArray(data) &&
                    data.map((job: Job, index: number) => (
                        <a
                            key={index}
                            href={`/ru/jobs/${job.slug}`}
                            className="link"
                        >
                            <div
                                className="organization__content"
                                data-v-6dc437e8
                            >
                                <div
                                    className="content__info__one"
                                    data-v-6dc437e8
                                >
                                    <div className="info__logo" data-v-6dc437e8>
                                        {job.icon && (
                                            <img
                                                src={job.icon}
                                                alt={`${job.name} logo`}
                                                className="image"
                                            />
                                        )}
                                    </div>
                                    <div
                                        className="info__company"
                                        data-v-6dc437e8
                                    >
                                        <h5
                                            className="label_title"
                                            data-v-6dc437e8
                                        >
                                            <p>Компания</p>
                                            {job.name || "Не указано"}
                                        </h5>
                                    </div>
                                </div>
                                <div className="content__info__two">
                                    <div
                                        className="info__position"
                                        data-v-6dc437e8
                                    >
                                        <h5
                                            className="label_title"
                                            data-v-6dc437e8
                                        >
                                            <p>Ваканции</p>
                                            {job.jobs_count}
                                        </h5>
                                    </div>
                                    <div
                                        className="info__price"
                                        data-v-6dc437e8
                                    >
                                        <h5
                                            className="label_title"
                                            data-v-6dc437e8
                                        >
                                            <p>Мероприятия</p>
                                            {job.events_count}
                                        </h5>
                                    </div>
                                    <div className="ifno__type" data-v-6dc437e8>
                                        <h5
                                            className="label_title"
                                            data-v-6dc437e8
                                        >
                                            <p>Видео</p>
                                            {job.meetups_count}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </>
    );
}

export default OrganizationItem;
