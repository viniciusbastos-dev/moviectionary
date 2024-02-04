import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Selector";

interface SelectorProps {
    data: string;
    setData: Dispatch<SetStateAction<string>>;
}

const Selector: React.FC<SelectorProps> = ({ data, setData }) => {
    const leftClick = () => {
        setData("day");
    };

    const rightClick = () => {
        setData("week");
    };

    return (
        <S.FormBox>
            <S.ButtonBox>
                <S.BtnIndicator position={data} />
                <S.ToggleButton
                    onClick={leftClick}
                    selected={data === "day"}
                >
                    Hoje
                </S.ToggleButton>
                <S.ToggleButton
                    onClick={rightClick}
                    selected={data === "week"}
                >
                    Semana
                </S.ToggleButton>
            </S.ButtonBox>
        </S.FormBox>
    );
};

export default Selector;
