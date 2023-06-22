import { createGlobalStyle } from 'styled-components';

// font-family: 'Baloo 2', cursive;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0; // para tirar borda, melhor que input
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
  }

  input {
    color: ${(props) => props.theme['base-input']};
  }

  label {
    color: ${(props) => props.theme['base-label']};
  }

  button {
    background: ${(props) => props.theme['base-button']};;
  }

  body, input, button, label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;
