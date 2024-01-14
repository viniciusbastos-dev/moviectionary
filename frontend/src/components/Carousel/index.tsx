import React from "react";
import * as S from "./Carousel";
import { SelectorStateType, TrendingType } from "../../pages/Home";
import Selector from "../Selector";
import MediaCard from "../MediaCard";

interface CarouselProps {
    trending: TrendingType[];
    selector: SelectorStateType;
}

const Carousel: React.FC<CarouselProps> = ({ trending, selector }) => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>Tendências</S.Title>
                <Selector {...selector} />
            </S.Wrapper>
            <S.Slider>
                <S.Scroller>
                    {trending.map((item) => (
                        <S.Item key={item.id}>
                            <MediaCard {...item} />
                        </S.Item>
                    ))}
                </S.Scroller>
            </S.Slider>
        </S.Container>
    );
};

export default Carousel;
