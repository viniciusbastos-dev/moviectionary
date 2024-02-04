import Link from "next/link";
import * as S from "./styles";
import React from "react";
import { Media } from "@/@types/types";

interface MediaCardProps {
    data: Media;
}

const MediaCard: React.FC<MediaCardProps> = ({ data }) => {
    return (
        <S.CardContainer>
            <Link href={`/${data.media_type}/${data.id}`}>
                <S.CardPoster src={data.poster_url} alt={data.title} />
            </Link>
            <S.CardTitle>{data.title}</S.CardTitle>
            <S.CardDate>{data.release_date}</S.CardDate>
        </S.CardContainer>
    );
};

export default MediaCard;
