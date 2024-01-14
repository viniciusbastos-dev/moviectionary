import { Link } from "react-router-dom";
import * as S from "./MediaCard";
import React from "react";

interface MediaCardProps {
    id: number;
    title: string;
    poster_url: string;
    release_date: string;
    media_type: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
    id,
    poster_url,
    title,
    release_date,
    media_type,
}) => {
    return (
        <S.CardContainer>
            <Link to={`/${media_type}/${id}`}>
                <S.CardPoster src={poster_url} alt={title} />
            </Link>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardDate>{release_date}</S.CardDate>
        </S.CardContainer>
    );
};

export default MediaCard;
