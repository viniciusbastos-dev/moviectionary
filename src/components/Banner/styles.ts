"use client"

import styled from "styled-components";

interface BackgroundProps {
    $backgroundImage: string;
}

export const Background = styled.section<BackgroundProps>`
    background-image: url("${(props) => props.$backgroundImage}");
    background-size: cover;
    width: 100%;
    color: #fff;
`;

export const Overlay = styled.div`
    background-color: #0000009d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 40px;
`;

export const Title = styled.h2`
    font-size: 2.875rem;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    max-width: 660px;
`;

export const Poster = styled.img`
    width: 320px;
    border-radius: 8px;
`;
