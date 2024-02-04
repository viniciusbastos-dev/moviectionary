import React from "react";
import * as S from "./styles";
import { MediaDetails } from "@/@types/types";

interface InfoBannerProps {
    data: MediaDetails;
}

const InfoBanner: React.FC<InfoBannerProps> = ({ data }) => {
    return (
        <S.Container backgroundUrl={data.backdrop_url}>
            <S.Overlay>
                <div style={{ display: "flex" }}>
                    <S.Poster src={data.poster_url} />
                    <div style={{ paddingLeft: "40px" }}>
                        <S.Title>{data.title}</S.Title>
                        <span>{data.release_date}</span>
                        <S.GenreList>
                            {data.genres.map((genre, index) => (
                                <li key={genre.id}>
                                    {genre.name}
                                    {index !== data.genres.length - 1 && ","}
                                </li>
                            ))}
                        </S.GenreList>
                    </div>
                </div>
            </S.Overlay>
        </S.Container>
    );
};

export default InfoBanner;
