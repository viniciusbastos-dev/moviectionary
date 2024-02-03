import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.Logo src="/logo.png" alt="Logo do Moviectionary" />
            <p>
                Site feito por{" "}
                <S.HighlightedText>Vinícius Bastos</S.HighlightedText>
            </p>
        </S.Footer>
    );
};

export default Footer;
