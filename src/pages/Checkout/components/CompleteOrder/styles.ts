import { styled } from "styled-components";

export const CompleteOrderContainer = styled.section`
  height: 40rem;
  width: 37rem;

  form {
    height: 23.25rem;
  }
`;

export const BaseFormInput = styled.input`
  border-radius: 4px;
  background-color: ${props => props.theme["base-input"]};
  color: ${props => props.theme["base-text"]};

  &::placeholder {
    color: ${props => props.theme["base-label"]};

    // se não funfar, tentar um span dentro
    &::after {
      content: 'Opcional';
      font-style: italic;
    }
  }

  height: 2.625rem;
  padding: 0.75rem;


  &:focus {
    border: ${props => props.theme["yellow-dark"]};
  }
`;
