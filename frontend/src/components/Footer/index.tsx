import React from "react";
import * as S from "./Footer";

// TODO: Complete Footer component

const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.Logo src="/logo.png" alt="" />
            <p>
                Site feito por{" "}
                <S.HighlightedText>Vinícius Bastos</S.HighlightedText>
            </p>
        </S.Footer>
    );
};

export default Footer;
