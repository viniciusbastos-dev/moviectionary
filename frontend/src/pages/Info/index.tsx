import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMediaInfo } from "../../services/requestHandler";
import NotFound from "../NotFound";
import InfoBanner from "./components/InfoBanner";

interface Genre {
    id: number;
    name: string;
}

export interface Media {
    backdrop_url: string;
    poster_url: string;
    title: string;
    overview: string;
    tagLine: string;
    release_date: string;
    genres: Genre[];
}

const Info: React.FC = () => {
    const { type, id } = useParams();
    const [media, setMedia] = useState<Media>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (type && id) {
                    const data = await getMediaInfo(type, id);
                    setMedia(data);
                }
            } catch (error) {
                console.error("Error fetching media info:", error);
            }
        };

        fetchData();
    }, [type, id]);

    if (!media) return <NotFound />;

    return (
        <>
            <InfoBanner {...media} />
        </>
    );
};

export default Info;
