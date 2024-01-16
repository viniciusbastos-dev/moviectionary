import React from "react";
import * as S from "./Header";

const Header: React.FC = () => {
    return (
        <S.Header>
            <a href="/">
                <S.Logo src="/logo.png" alt="Moviectionary's logo" />
            </a>
        </S.Header>
    );
};

export default Header;
