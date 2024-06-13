import "./hero.css";
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__content-h1">
                            Последние мероприятия
                        </div>
                        <div className="hero__logo">
                            <div className="hero__logo__text">
                                <p>
                                    08 июня 2024 <em>13:00</em>
                                </p>
                                <h2>Что такое SQL и почему он нужен везде?</h2>
                            </div>
                            <div className="hero__logo__organizer">
                                <div className="hero-organizer">
                                    <p>Организатор</p>
                                    <h4>Software Testers from KG</h4>
                                </div>
                                <div className="hero-location">
                                    <p>Локация</p>
                                    <h4>
                                        Codify Academy, 7-й микрорайон, 26/2
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="hero__logo">
                            <div className="hero__logo__text">
                                <p>
                                    08 июня 2024 <em>13:00</em>
                                </p>
                                <h2>Что такое SQL и почему он нужен везде?</h2>
                            </div>
                            <div className="hero__logo__organizer">
                                <div className="hero-organizer">
                                    <p>Организатор</p>
                                    <h4>Software Testers from KG</h4>
                                </div>
                                <div className="hero-location">
                                    <p>Локация</p>
                                    <h4>
                                        Codify Academy, 7-й микрорайон, 26/2
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
