import React from "react";
import * as S from "./Carousel";
import { SelectorStateType, TrendingType } from "../../pages/Home";
import Slider from "react-slick";
import Selector from "../Selector";
import MediaCard from "../MediaCard";

interface CarouselProps {
    trending: TrendingType[];
    selector: SelectorStateType;
}

const Carousel: React.FC<CarouselProps> = ({ trending, selector }) => {
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
                    <Selector {...selector} />
                </S.Wrapper>
                <S.Carousel>
                    <Slider {...sliderOptions}>
                        {trending.map((item) => (
                            <S.Item key={item.id}>
                                <MediaCard {...item} />
                            </S.Item>
                        ))}
                    </Slider>
                </S.Carousel>
            </S.Container>
        </>
    );
};

export default Carousel;
