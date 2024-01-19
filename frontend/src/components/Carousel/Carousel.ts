import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
`;

export const Wrapper = styled.div`
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const Slider = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
`;

export const Scroller = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    white-space: nowrap;

    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.div`
    margin-left: 40px;
`;
