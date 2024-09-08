import React from "react";
import "./../../pages/addVacancy/addVacancy.css";
import { useNavigate } from "react-router-dom";

function LeftSidebar() {
    const clickEventsForm = useNavigate();
    const clickVideoForm = useNavigate();
    const clickJobsForm = useNavigate();

    function eventsFormHandler() {
        clickEventsForm("/eventsForm/:id");
    }
    function videoFormHandler() {
        clickEventsForm("/videoForm/:id");
    }
    function jobsFormHandler() {
        clickEventsForm("/eventsForm/:id");
    }
    return (
        <div className="left-add-vacancy_wrapper">
            <div className="logo">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAolBMVEX////E3uiSwteWwtmUv9mxz+SNwdYAhbQAhrgAf7lios0XibwLhLwAfbxmoc/c7vHc7fHh7fRZospfocxbnMyNttvn8/YAl6QAmqwAlq0Akq8AjrETkLgPmLQVjboUjrkWi7sAc7YAecESc8VomNXy9/oAdMAVb8VqldaXud4jc8YbbMeFttZWkc4bacgBfL6QquAAV8a7y+tjqMpwqc9yoNRKv/LxAAAAsUlEQVR4Ac3PQwLEQBAF0FFs27bvf7WJNuE6f9N4jarX4/P+fH/AFYIQjKBX+IGwG4RxgtxvUhRFj2G+LMcLOxMlWVE1HUKAaXWChqab+CmOpuqWfX5TMQxt7MK5QNUSx4ngup6/R1XVoGDCMIziA2o6PGHieUfUNGvFNDuibsJ5LghFGpUHHNvAkcoNx4tlvUfLxHBixDTKGmaPMDybF5VNu+8z6Pq+J4dh8Ovx3lPzB4eKErshMDnHAAAAAElFTkSuQmCC"
                    alt=""
                />
                <b>devkg</b>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <a onClick={eventsFormHandler} href="#">
                        Вакансии
                    </a>
                </li>
                <li className="menu-item">
                    <a onClick={jobsFormHandler} href="#">
                        Мероприятии
                    </a>
                </li>
                <li className="menu-item">
                    <a onClick={videoFormHandler} href="#">
                        Видео
                    </a>
                </li>
            </ul>
            <a href="#" className="exit">
                Выйти
            </a>
        </div>
    );
}

export default LeftSidebar;
