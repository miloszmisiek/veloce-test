import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  font-family: sans-serif;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

button{
  cursor: pointer;
}
`;
