import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  body * {
    font-family: ${({ theme }) => theme.font.family};
  }

  html {
    font-size: 62.5%;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
