import styled, {css, createGlobalStyle} from "styled-components";

interface ContentTypo {
    backgroundImage: string;
}

export const Role = styled.p`
    color: steelblue;
    font-weight: bold;
    span {
        font-weight: 300;
        color: black;
    }
    font-size: .9rem;
`;

export const Taxes = styled.p`
    font-weight: bold;
    color: steelblue;
    small {
        font-weight: 300;
    }
`;

export const Picture = styled.div`
    height: 120px;
    width: 120px;
    border-radius: 100%;
    display: block;
    position: relative;
    overflow: hidden;
    img,
    > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;
`;

export const Content = styled.div`

`;

export const Inner = styled.div`
    border: 1px whitesmoke solid;
    border-radius: 16px;
`;