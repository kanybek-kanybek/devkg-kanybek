import "./footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import logoFooter from "../../assets/imges/logo.footer.svg";
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer-logo">
                            <img src={logoFooter} alt="" />
                        </div>
                        <div className="footer__info">
                            <div className="footer__info__text">
                                <p>
                                    Мы — сообщество разработчиков Кыргызстана.
                                    Данный проект поддерживается и <br />
                                    администрируется членами нашего сообщества.{" "}
                                    <br />
                                    <img
                                        src="//www.net.kg/img.php?id=6620&amp;refer=https%3A//devkg.com/ru/events/chto-takoe-avtomatizaciya-testirovaniya-i-s-chem-eyo-edyat-software-testers-from-kg-1097&amp;page=https%3A//devkg.com/ru&amp;c=yes&amp;java=now&amp;razresh=1920x1080&amp;cvet=24&amp;jscript=1.3&amp;rand=0.06055120196641606"
                                        alt="Net.kg counter"
                                    />
                                </p>
                            </div>
                            <div className="footer__info__icons">
                                <FaTelegramPlane />
                                <FaFacebookSquare />
                                <TfiGithub />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
