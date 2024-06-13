import "../Communitycomponent/Communitycomponent.css";

function Communitycomponent() {
    return (
        <>
            <div className="Communitycomponent">
                <div className="container">
                    <h4 className="Communitycomponent-title">
                        Наши ресурсы в Telegram
                    </h4>
                    <div className="content">
                        <div className="content__resources">
                            <a
                                className="content__resources_resources"
                                href="#"
                            >
                                <img
                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />
                                Общий чат
                            </a>
                            <a className="content__resources_openings" href="#">
                                <img
                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />
                                Вакансии
                            </a>
                            <a className="content__resources_events" href="">
                                <img
                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />
                                Мероприятия
                            </a>
                            <a
                                className="content__resources_conferences"
                                href=""
                            >
                                <img
                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />
                                Видеоконференции
                            </a>
                            <a className="content__resources_Relocate" href="">
                                <img
                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                    alt=""
                                />
                                Relocate & Remote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Communitycomponent;
