import { createGlobalStyle, css } from 'styled-components';

const Reset = createGlobalStyle`

body {
  margin: 0px;
  min-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

ul, ol, blockquote {
  margin: 0;
  padding: 0;
}

li {
  margin: 0.5em 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
}

button{
  -webkit-appearance: none;
  border: none;
  background: none;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 500px white inset !important;
}
`
export default Reset;