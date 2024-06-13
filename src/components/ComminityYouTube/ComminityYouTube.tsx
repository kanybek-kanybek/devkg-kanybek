import "../ComminityYouTube/ComminityYouTube.css";
import { FaTelegramPlane } from "react-icons/fa";

function ComminityYouTube() {
    return (
        <>
            <div className="youtube">
                <div className="container">
                    <div className="youtube__content">
                        <h4 className="Communitycomponent-title">YouTube</h4>
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
                                <a
                                    className="content__resources_events"
                                    href=""
                                >
                                    <span>
                                        <FaTelegramPlane />
                                    </span>
                                    Bitcoin and Blockchain Kyrgyzstan
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

export default ComminityYouTube;
