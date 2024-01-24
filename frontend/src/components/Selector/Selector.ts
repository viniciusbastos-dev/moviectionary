import styled from "styled-components";

interface ToggleButtonProps {
    selected: boolean;
}

interface BtnIndicatorProps {
    position: string;
}

export const FormBox = styled.div`
    position: relative;
    border-radius: 30px;
    background: #fff;
`;

export const ButtonBox = styled.div`

`;

export const ToggleButton = styled.button<ToggleButtonProps>`
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    padding: 10px 40px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    text-align: center;
    color: ${(props) => (props.selected ? "#fff" : "#000")};
`;

export const BtnIndicator = styled.div<BtnIndicatorProps>`
    left: ${(props) => (props.position === "day" ? "0" : "109px")};
    top: 0;
    position: absolute;
    width: ${(props) => (props.position === "day" ? "109px" : "132px")};
    height: 100%;
    background: #2a7ae4;
    border-radius: 30px;
    transition: 0.5s;
`;
