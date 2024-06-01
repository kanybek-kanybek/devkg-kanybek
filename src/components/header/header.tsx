import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { SlArrowRightCircle } from "react-icons/sl";
function Header() {
    const navLogo = useNavigate();
    function logoHeader() {
        navLogo("/");
    }
    return (
        <>
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
                            <Link to={"/JobOpenings"}>Вакансии</Link>
                            <Link to={"/Events"}>Мероприятия</Link>
                            <Link to={"/Video"}>Видео</Link>
                            <Link to={"/Organizations"}>Организации</Link>
                            <Link to={"/Community"}>Сообщество</Link>
                        </div>
                        <div className="header__enter">
                            <button>
                                <span>
                                    <SlArrowRightCircle />
                                </span>
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
