import "../ComminityWebsite/ComminityWebsite.css";
import { FaTelegramPlane } from "react-icons/fa";

function ComminityWebsite() {
    return (
        <>
            <div className="Website">
                <div className="container">
                    <div className="website__content">
                        <h4 className="Communitycomponent-title">Веб-сайты</h4>
                        <div className="content">
                            <div className="content__resources">
                                <a
                                    className="content__resources_resources"
                                    href="#"
                                >
                                    <span>
                                        <FaTelegramPlane />
                                    </span>
                                    Lance.kg
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComminityWebsite;
