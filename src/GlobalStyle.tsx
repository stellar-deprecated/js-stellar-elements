import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500');

  body,
  html {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 28px;
  }
`;
