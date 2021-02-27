import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }
  
  body {
    background: var(--background);
    color: var(--text);
  }
  
  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  /* Font size */
  @media (max-width: 1080) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 1080) {
    html {
      font-size: 87.5%;
    }
  }
`;
export default GlobalStyle;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;
