import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0
  }

  body {
    font-weight: 500;
    font-family: 'Space Grotesk', sans-serif;
    background-color: ${(props) => props.theme.colors['white-1']};
    color: #1F1F26;
    -webkit-font-smoothing: antialiased
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
  }
`;
