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

        :focus {
            outline: none;
        }

        // ::selection {
        //     color: none;
        //     background: none;
        // }
    }

    body {
        background: white;
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        background: transparent;        
        width: 10px;
        overflow: overlay;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #b4b4b483;
        border-radius: 1rem;
        transition: .3s ease-in-out;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #2a447cbb;
    }
`;
