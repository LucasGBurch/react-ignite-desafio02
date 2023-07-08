import { styled } from 'styled-components';

export const CompleteOrderContainer = styled.section`
  height: 40rem;
  width: 37rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  form {
    background-color: ${props => props.theme['base-card']};

    height: 23.25rem;

    padding: 2.5rem;

    div:first-child {
      margin-bottom: 2rem;
      height: 2.75rem;
  
      #MapPinCheckout {
        color: ${props => props.theme['yellow-dark']};
      }
    }

    div:last-child {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  section {
    background-color: ${props => props.theme['base-card']};
    height: 13rem;

    padding: 2.5rem;

    div:first-child {
      height: 2.75rem;
    }


    div:last-child {
      height: 3.25rem;
    }
  }
`;

export const BaseFormInput = styled.input`
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 0.25rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  height: 2.625rem;
  width: 12rem;
  padding: 0.75rem;

  &:focus {
    border: ${(props) => props.theme['yellow-dark']};
  }

  &:nth-last-child(-n+3) { // últimos 3 inputs
    margin-bottom: 0;
  }
`;

export const CepNumberNeighborInput = styled(BaseFormInput)``;

export const StreetInput = styled(BaseFormInput)`
  width: 35rem;
`;

export const ComplementInput = styled(BaseFormInput)`
  width: 19.25rem;

  &::placeholder {
    // se não funfar, tentar um span dentro
    &::after {
      content: 'Opcional';
      font-style: italic;
    }
  }
`;
export const CityInput = styled(BaseFormInput)``;

export const FederativeUnitInput = styled(BaseFormInput)``;
