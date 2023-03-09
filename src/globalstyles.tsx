import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    h1, h2, h3, h4 {
        padding: 0;
        margin: 0;
    }
    
    div {
       display: block;
       box-sizing: border-box;
    }    

    body {
        height: 690px;
        margin: 0;
        padding: 0;
        background: rgb(2,0,36);
    }

    #root {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        background: 0;
        border: 0;
        cursor: pointer;
        font-family: Roboto, 'sans-serif';
        font-weight: 600;
        cursor: pointer;
        outlineÖ none;
    }

    input {
        border: 0;
        outline: 0;
        &::-webkit-input-placeholder { color: #000; }
    }
`;

export default GlobalStyles;