import { createGlobalStyle, ThemeProvider } from "styled-components"

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.background};
}
a{

  color: ${props => props.theme.primary};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;

}
a:houver {
  color: ${props => props.theme.primaryHouver};
}

`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle/>
     <Component {...pageProps} />
    </ThemeProvider>
   
  )
}

export default App