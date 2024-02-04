import React from "react";
import { Media } from "@/@types/types";
import * as S from "./styles";

interface BannerProps {
    data: Media;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
    return (
        <S.Background $backgroundImage={data.backdrop_url}>
            <S.Overlay>
                <div>
                    <S.Title>{data.title}</S.Title>
                    <S.Description>{data.overview}</S.Description>
                </div>
                <S.Poster src={data.poster_url} alt={data.title} />
            </S.Overlay>
        </S.Background>
    );
};

export default Banner;
