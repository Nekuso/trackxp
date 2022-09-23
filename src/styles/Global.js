import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Poppins'
        color: #FFFFFFF;
    }

    body {
        background: #000000;
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }
`;