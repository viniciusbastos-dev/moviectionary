"use client"

import React from "react";
import * as S from "./styles";
import Slider from "react-slick";
import { Media } from "@/@types/types";
import MediaCard from "../MediaCard";

interface CarouselProps {
    data: Media[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
    const sliderOptions = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
    };

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <S.Title>Tendências</S.Title>
                </S.Wrapper>
                <S.Carousel>
                    <Slider {...sliderOptions}>
                        {data.map((item) => (
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
