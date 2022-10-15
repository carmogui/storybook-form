import { createGlobalStyle } from "styled-components";
import { color } from "./constants";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  body {
    background-color: ${color.background.main};
  }
`;
