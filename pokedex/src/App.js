import Router from './Router/Router';
import { createGlobalStyle } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Fantasy'
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`


function App() {
  return (
    <>
    <ChakraProvider>
    <GlobalStyle />
    <Router/>
    </ChakraProvider>
    </>
  )
}

export default App;
