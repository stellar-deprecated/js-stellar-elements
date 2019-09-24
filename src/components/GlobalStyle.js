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

  h1, h2, h3 {
    font-weight: normal;
    color: ${(props) => props.color};
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.25;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

/** @component */
export default GlobalStyle;
