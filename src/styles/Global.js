import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
        list-style: none;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Poppins';
        color: #FFFFFFFF;

        :focus {
            outline: none;
            color: #FFFFFF;
        }
    }

    body {
        background: white;
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }
`;