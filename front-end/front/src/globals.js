import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        width: 100vw;
        heigth: 100vh;
        display: flex;
        justify-content: center;
        background-color: rgb(45 180 221);
    }

`;

export default GlobalStyle;