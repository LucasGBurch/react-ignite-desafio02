import { styled } from 'styled-components';

export const CompleteOrderContainer = styled.section`
  height: 40rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;

  form {
    background-color: ${(props) => props.theme['base-card']};

    height: 23.25rem;
    width: 35rem;

    div:first-child {
      margin-bottom: 2rem;
      height: 2.75rem;
      display: flex;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        h3 {
          color: ${props => props.theme['base-subtitle']};
          font-weight: normal;
        }

        p {
          color: ${props => props.theme['base-text']};
        }
      }

      #MapPinCheckout {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }

    div:last-child {
      display: flex;
      flex-wrap: wrap;
    }
  }

  section {
    background-color: ${(props) => props.theme['base-card']};
    height: 13rem;

    padding-top: 2.5rem;

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
  margin-bottom: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  height: 2.625rem;
  width: 12.5rem;
  padding: 0.75rem;

  &:focus {
    border: ${(props) => props.theme['yellow-dark']};
  }

  &:nth-last-child(-n + 3) {
    // últimos 3 inputs
    margin-bottom: 0;
  }
`;

export const CepNumberNeighborInput = styled(BaseFormInput)`
  margin-right: 0.75rem;
`;

export const StreetInput = styled(BaseFormInput)`
  width: 35rem;
`;

export const ComplementInput = styled(BaseFormInput)`
  flex: 1;

  &::placeholder {
    // se não funfar, tentar um span dentro
    &::after {
      content: 'Opcional';
      font-style: italic;
    }
  }
`;
export const CityInput = styled(BaseFormInput)`
  margin-right: 0.75rem;
  width: 17.25rem;
`;

export const FederativeUnitInput = styled(BaseFormInput)`
  width: 3.75rem;
`;
