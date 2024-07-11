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
        return <div>Loading...</div>;
    }

    return (
        <div className="Communitycomponent">
            <div className="container">
                <h4 className="Communitycomponent-title">
                    Наши ресурсы в Telegram
                </h4>
                {data.map((job: Job, index: number) => (
                    <a
                        key={index}
                        href={`/ru/jobs/${job.slug}`}
                        className="link"
                    >
                        <div className="content">
                            <div className="content__resources">
                                <div className="content__resources_resources">
                                    {Array.isArray(job.devkg) &&
                                        job.devkg.map((job, idx) => (
                                            <div key={idx}>
                                                <a
                                                    href={job.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {job.label}
                                                </a>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Communitycomponent;
