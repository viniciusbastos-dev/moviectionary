import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import { getTrending } from "../../services/requestHandler";

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

export interface SelectorStateType {
    timeFrame: string;
    setTimeFrame: Dispatch<SetStateAction<string>>;
}

const Home: React.FC = () => {
    const [trending, setTrending] = useState<TrendingType[]>([]);
    const [topTrending, setTopTrending] = useState<TrendingType>(trending[0]);
    const [timeFrame, setTimeFrame] = useState("day");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTrending(timeFrame);
                setTrending(data);

                if (!topTrending) {
                    setTopTrending(data[0]);
                }
            } catch (error) {
                console.error("Error fetching trending data:", error);
            }
        };

        fetchData();
    }, [timeFrame, topTrending]);

    if (!trending && !topTrending) return;

    return (
        <>
            <Banner {...topTrending} />
            <Carousel
                selector={{ timeFrame, setTimeFrame }}
                trending={trending}
            />
        </>
    );
};

export default Home;
