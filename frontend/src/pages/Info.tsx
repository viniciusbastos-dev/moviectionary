import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMediaInfo } from "../services/requestHandler";
import NotFound from "./NotFound";

const Info: React.FC = () => {
    const [media, setMedia] = useState();

    const { type, id } = useParams();

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
            <h1>PAGINA DE INFORMAÇÃO EM DESENVOLVIMENTO...</h1>
            {/* Renderize os detalhes da mídia usando o estado 'media' conforme necessário */}
        </>
    );
};

export default Info;
