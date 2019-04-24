import { createGlobalStyle } from "styled-components";

/**
 * @component
 * Global styles: fonts, default typography, etc.
 */
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500');

  body,
  html {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 28px;
  }

  body,
  input,
  select,
  textarea,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

`;
