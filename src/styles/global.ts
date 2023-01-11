import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #666ca3;
    --black: #13183F;
    --gray: #83869a;
    --pink1: #f74780;
    --pink2: #ffa7c3;
    --white: #fff;
    --gradient1: linear-gradient(180deg, #ff6f48, #f02aa6);
    --gradient2: linear-gradient(180deg, #f02aa6, #4851ff);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`