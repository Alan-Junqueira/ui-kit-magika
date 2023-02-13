import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 65%;
  }

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
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.sizes.base};
    -webkit-font-smoothing: antialiased;

    background-color: ${(props) => props.theme.colors.bg};
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
