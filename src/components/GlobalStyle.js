import { createGlobalStyle } from "styled-components";

/**
 * Global styles: fonts, default typography, etc.
 */
const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: normal;
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

/** @component */
export default GlobalStyle;
