import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;

}
body {
  margin: 0;
  font-family: sans-serif;
  font-size: 112.5%;
  background-color: #f3e7dd;
}
input,
button,
textarea {
  font-size: inherit;
}

`

export default GlobalStyles
