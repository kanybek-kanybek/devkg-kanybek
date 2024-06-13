import "../ComminitycomponentChannels/ComminitycomponentChannels.css";
import { FaTelegramPlane } from "react-icons/fa";

function ComminitycomponentChannels() {
    return (
        <>
            <div className="CommunitycomponentChannals">
                <div className="container">
                    <h4 className="Communitycomponent-title">
                        Телеграм каналы
                    </h4>
                    <div className="content">
                        <div className="content__resources">
                            <a
                                className="content__resources_resources"
                                href="#"
                            >
                                <span>
                                    <FaTelegramPlane />
                                </span>
                                Всё о Python
                            </a>
                            <a className="content__resources_openings" href="#">
                                <span>
                                    <FaTelegramPlane />
                                </span>
                                Mad Devs
                            </a>
                            <a className="content__resources_events" href="">
                                <span>
                                    <FaTelegramPlane />
                                </span>
                                GDG Osh
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComminitycomponentChannels;
