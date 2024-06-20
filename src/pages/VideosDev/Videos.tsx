import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./Videos.css";

const Video: React.FC = () => {
    return (
        <>
            <Header />
            <div id="Video">
                <div className="container">
                    <div className="btn-vkb">
                        <button>Добавить видео</button>
                    </div>
                    <div className="video">
                        <div className="h11">
                            <h1>Все видео</h1>
                        </div>
                        <div className="video-df">
                            <div className="video-bg">
                                <div className="vs-video">
                                    <img
                                        src="https://i.ytimg.com/vi_webp/C2ICic8y5D8/maxresdefault.webp"
                                        alt="img"
                                    />
                                    <h1>
                                        ChatGPT — <br />
                                        революция или <br /> мода? Как нейросети{" "}
                                        <br />
                                        могут помочь в <br /> работе
                                    </h1>
                                    <div className="video-text">
                                        <h2>
                                            <span>Организатор</span> <br />
                                            Kolesa Group
                                        </h2>
                                        <h2>
                                            <span>Когда</span> <br />
                                            12 сентября 2023
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="video-bg">
                                <div className="vs-video">
                                    <img
                                        src="https://i.ytimg.com/vi_webp/C2ICic8y5D8/maxresdefault.webp"
                                        alt="img"
                                    />
                                    <h1>
                                        ChatGPT — <br />
                                        революция или <br /> мода? Как нейросети{" "}
                                        <br />
                                        могут помочь в <br /> работе
                                    </h1>
                                    <div className="video-text">
                                        <h2>
                                            <span>Организатор</span> <br />
                                            Kolesa Group
                                        </h2>
                                        <h2>
                                            <span>Когда</span> <br />
                                            12 сентября 2023
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Video;
