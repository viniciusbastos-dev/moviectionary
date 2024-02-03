import React from 'react';
import * as S from './styles';

const Header = () => {
    return (
        <S.Container>
            <a href="/">
                <S.Logo src='/logo.png' />
            </a>
        </S.Container>
    );
}

export default Header;