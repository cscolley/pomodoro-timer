import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --width: 460px;
    --white: #fafafa;
    --darkGrey: rgba(0, 0, 0, 0.87);
    --paradisePink: #ed3d63;
    --palatinateBlue: #223ccf;
    --midnightBlue: #161b7f;
    --darkOrchid: #8d3fd0;
    --electricBlue: #06b3d7;
    --myYellow: #ffcc00;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--midnightBlue);
  }
`;
