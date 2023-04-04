import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
         font-family: Open-Sans, Helvetica, Sans-Serif;

    }
    body, html {
        scroll-behavior: smooth;
        background-color: #f3f3f3;
    } 

    ul {
        list-style-type: none;
    }

    button, input {
        border: 0;
        outline: 0;
    }

    a {
        text-decoration: none;
    }

    .title {
        font-size: 3rem;
        color: #265df2;
}
`;

export default GlobalStyle;
