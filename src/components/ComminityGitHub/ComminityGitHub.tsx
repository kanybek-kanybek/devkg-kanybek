import "../ComminityGitHub/ComminityGitHub.css";
import { FaTelegramPlane } from "react-icons/fa";

function ComminityGitHub() {
    return (
        <>
            <div className="github">
                <div className="container">
                    <div className="github__content">
                        <h4 className="Communitycomponent-title">GitHub </h4>
                        <div className="content">
                            <div className="content__resources">
                                <a
                                    className="content__resources_resources"
                                    href="#"
                                >
                                    <span>
                                        <FaTelegramPlane />
                                    </span>
                                    IT-Club Kyrgyzstan
                                </a>
                                <a
                                    className="content__resources_openings"
                                    href="#"
                                >
                                    <span>
                                        <FaTelegramPlane />
                                    </span>
                                    GDG Bishkek
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComminityGitHub;
