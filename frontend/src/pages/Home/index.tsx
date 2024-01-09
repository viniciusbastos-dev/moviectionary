import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import axios from "axios";
import MediaCard from "../../components/MediaCard";

export interface TrendingType {
    id: number;
    title: string;
    overview: string;
    media_type: string;
    release_date: string;
    vote_percentage: number;
    backdrop_url: string;
    poster_url: string;
}

const Home = () => {
    const [trending, setTrending] = useState<TrendingType[]>([]);
    const topTrending = trending[0];

    useEffect(() => {
        axios
            .get("/api/trending/all/day/?lang=pt-BR")
            .then((response) => setTrending(response.data));
    }, []);

    if (!trending) return;

    return (
        <>
            <Banner {...topTrending} />
            {trending.map((media) => (
                <MediaCard {...media} />
            ))}
        </>
    );
};

export default Home;
