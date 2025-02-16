import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #f4f6f9;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .dashboard-container {
    display: flex;
    height: 100vh;
  }
`;

export default GlobalStyles;

