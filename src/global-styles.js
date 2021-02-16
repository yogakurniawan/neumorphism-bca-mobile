import styledSanitize from 'styled-sanitize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${styledSanitize}

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Nunito', sans-serif;
    line-height: 1.43;
    font-weight: 400;
    color: rgb(2, 77, 153);
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-attachment: fixed;
  }
`

export default GlobalStyle
