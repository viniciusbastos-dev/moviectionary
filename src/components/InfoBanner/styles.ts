import styled from "styled-components";

interface ContainerProps {
    backgroundUrl: string;
}

export const Container = styled.div<ContainerProps>`
    background: url(${(props) => props.backgroundUrl});
    background-size: cover;
    color: #fff;
`;

export const Overlay = styled.section`
    background-color: #313131a8;
    padding: 30px 40px;
`;

export const Poster = styled.img`
    width: 300px;
    height: 450px;
    border-radius: 8px;
`;

export const Title = styled.h2`
    font-size: 2.275rem;
    font-weight: 700;
`;

export const GenreList = styled.ul`
    display: flex;
    gap: 4px;
`;
