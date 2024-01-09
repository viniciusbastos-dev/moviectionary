import React from "react";
import * as S from "./Banner";
import { TrendingType } from "../../pages/Home";

const Banner: React.FC<TrendingType> = ({
    backdrop_url,
    title,
    overview,
    poster_url,
}) => {
    return (
        <S.Background $backgroundImage={backdrop_url}>
            <S.Overlay>
                <div>
                    <S.Title>{title}</S.Title>
                    <S.Description>{overview}</S.Description>
                </div>
                <S.Poster src={poster_url} alt={title} />
            </S.Overlay>
        </S.Background>
    );
};

export default Banner;
