import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    z-index: 10;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme.color.bg};
      font-family: ${theme.font.family.primary}, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
    }
  `}
`;

export default GlobalStyles;
