"use client";

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Slider from "react-slick";
import { Media } from "@/@types/types";
import MediaCard from "../MediaCard";
import Selector from "../Selector";
import { getTrending } from "@/services/request";
import { time } from "console";

interface CarouselProps {
    data: Media[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
    const [timeframe, setTimeframe] = useState<string>("day");
    const [newData, setNewData] = useState<Media[]>(data);
    const sliderOptions = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
    };

    useEffect(() => {
        getTrending(timeframe).then((response) => setNewData(response));
    }, [timeframe]);

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <S.Title>Tendências</S.Title>
                    <Selector data={timeframe} setData={setTimeframe} />
                </S.Wrapper>
                <S.Carousel>
                    <Slider {...sliderOptions}>
                        {newData.map((item) => (
                            <S.Item key={item.id}>
                                <MediaCard data={item} />
                            </S.Item>
                        ))}
                    </Slider>
                </S.Carousel>
            </S.Container>
        </>
    );
};

export default Carousel;
