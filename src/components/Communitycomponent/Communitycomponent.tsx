import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import "../Communitycomponent/Communitycomponent.css";
import { Job } from "../../Hooks/types";

function Communitycomponent() {
    const { data, isLoading } = useFetch({
        url: "http://3.38.98.134/community",
    });

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            console.log(data);
        }
    }, [data]);

    if (isLoading) {
        return (
            <div>
                <img
                    src="https://thumbs.dreamstime.com/t/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B6%D0%B0%D1%82%D1%8B%D0%B9-%D0%BA%D1%80%D1%83%D0%B3-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%BF%D0%B5%D1%82%D0%BB%D0%B8-k-119566269.jpg"
                    alt=""
                />
            </div>
        );
    }

    if (!data || !Array.isArray(data)) {
        return <div>Маалыматтар алынган жок же структура туура эмес</div>;
    }
    console.log(data);

    return (
        <div className="Communitycomponent">
            <div className="container">
                <h4 className="Communitycomponent-title">
                    Наши ресурсы в Telegram
                </h4>
                {data.map((job: Job, index: number) => (
                    <div className="content">
                        <div className="content__resources">
                            <div className="content__resources_resources_reources">
                                {Array.isArray(job.devkg) &&
                                    job.devkg.map((chat, idx) => (
                                        <div key={idx} className="chat__block">
                                            <img
                                                src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                                alt=""
                                            />
                                            <a
                                                href={chat.value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="chat-label">
                                                    <p>{chat.label}</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Communitycomponent;
