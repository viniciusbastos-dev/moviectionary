import React from "react";
import * as S from "./Selector";
import { SelectorStateType } from "../../pages/Home";

const Selector: React.FC<SelectorStateType> = ({ timeFrame, setTimeFrame }) => {
    const leftClick = () => {
        setTimeFrame("day");
    };

    const rightClick = () => {
        setTimeFrame("week");
    };

    return (
        <S.FormBox>
            <S.ButtonBox>
                <S.BtnIndicator position={timeFrame} />
                <S.ToggleButton
                    onClick={leftClick}
                    selected={timeFrame === "day"}
                >
                    Hoje
                </S.ToggleButton>
                <S.ToggleButton
                    onClick={rightClick}
                    selected={timeFrame === "week"}
                >
                    Semana
                </S.ToggleButton>
            </S.ButtonBox>
        </S.FormBox>
    );
};

export default Selector;
