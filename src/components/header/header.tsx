import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import { VscClose } from "react-icons/vsc";
import "./header.css";
import Cookies from "js-cookie";

function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    const navigate = useNavigate();
    const navigateLogin = useNavigate();
    function logoHeader() {
        navigate("/");
    }

    function toggleBurgerMenu() {
        setIsBurgerOpen(!isBurgerOpen);
    }
    function clickLogin() {
        navigateLogin("/Sinup/:id");
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header-logo">
                        <img
                            onClick={logoHeader}
                            src="https://devkg.com/js/img/logo.458f2cd.svg"
                            alt=""
                        />
                    </div>

                    <div className="header__nav">
                        <Link to="/JobOpenings">Вакансии</Link>
                        <Link to="/Events">Мероприятия</Link>
                        <Link to="/Video">Видео</Link>
                        <Link to="/Organizations">Организации</Link>
                        <Link to="/Community">Сообщество</Link>
                    </div>
                    <div className="header__menu-and-clicker">
                        <div
                            className="header__burger"
                            onClick={toggleBurgerMenu}
                        >
                            <div
                                className={`hamburger ${
                                    isBurgerOpen ? "is-active" : ""
                                }`}
                            >
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`burger-menu ${
                                isBurgerOpen ? "active" : ""
                            }`}
                        >
                            <nav className="burger-menu__list">
                                <div className="burger-menu__list__links">
                                    <Link
                                        className="burger-menu__list-logo"
                                        to="/"
                                        onClick={toggleBurgerMenu}
                                    >
                                        <img
                                            onClick={logoHeader}
                                            src="https://devkg.com/js/img/logo.458f2cd.svg"
                                            alt=""
                                        />
                                    </Link>
                                    <Link
                                        to="/JobOpenings"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Вакансии
                                    </Link>
                                    <Link
                                        to="/Events"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Мероприятия
                                    </Link>
                                    <Link
                                        to="/Video"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Видео
                                    </Link>
                                    <Link
                                        to="/Organizations"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Организации
                                    </Link>
                                    <Link
                                        to="/Community"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Сообщество
                                    </Link>
                                </div>
                                <div>
                                    <p className="burger-menu__list-paragraft">
                                        <VscClose />
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <div className="header__enter">
                            <button onClick={clickLogin}>
                                <span>
                                    <SlArrowRightCircle />
                                </span>
                                Войти
                            </button>
                        </div>
                        <div className="header__enter__two">
                            <span>
                                <SlArrowRightCircle />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
