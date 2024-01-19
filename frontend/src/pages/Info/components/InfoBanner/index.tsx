import React from "react";
import * as S from "./styles";
import { Media as InfoBannerProps } from "../..";

const InfoBanner: React.FC<InfoBannerProps> = ({
    backdrop_url,
    poster_url,
    title,
    release_date,
    genres,
}) => {
    return (
        <S.Container backgroundUrl={backdrop_url}>
            <S.Overlay>
                <div style={{ display: "flex" }}>
                    <S.Poster src={poster_url} />
                    <div style={{ paddingLeft: "40px" }}>
                        <S.Title>{title}</S.Title>
                        <span>{release_date}</span>
                        <S.GenreList>
                            {genres.map((genre, index) => (
                                <li key={genre.id}>
                                    {genre.name}
                                    {index !== genres.length - 1 && ","}
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
