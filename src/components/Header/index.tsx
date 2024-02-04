import React from 'react';
import * as S from './styles';
import Link from 'next/link';

const Header = () => {
    return (
        <S.Container>
            <Link href="/">
                <S.Logo src='/logo.png' />
            </Link>
        </S.Container>
    );
}

export default Header;