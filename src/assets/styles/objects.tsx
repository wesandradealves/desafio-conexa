import styled, {css, createGlobalStyle} from "styled-components";

export const Content = styled.main`
 
`;

export const Container = styled.div`
 
`;

export const Section = styled.section`
 
`;

export const Grid = styled.div`
    margin: 0 -.5rem
`;

export const Column = styled.div`
`;

export const Paragraph = styled.p`
    font-size: .8rem;
    line-height: 1.2;
`;

export const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.71);
    height: 100%;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);        
`;