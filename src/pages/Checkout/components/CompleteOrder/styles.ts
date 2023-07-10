import { styled } from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CompleteOrderContainer = styled.section`
  height: 40rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  form {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    height: 23.25rem;
    width: 40rem;
    padding: 2.5rem;

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
          color: ${(props) => props.theme['base-subtitle']};
          font-weight: normal;
        }

        p {
          color: ${(props) => props.theme['base-text']};
        }
      }

      #MapPinCheckout {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }

    div:last-child {
      display: flex;
      flex-wrap: wrap;

      span {
        color: ${(props) => props.theme['base-label']};
        height: 0;
        width: 0;
        position: relative;
        top: 0.75rem;
        right: 4rem;
        font-size: 0.875rem;
        font-style: italic;
      }
    }
  }

  section {
    background-color: ${(props) => props.theme['base-card']};
    height: 13rem;

    width: 40rem;
    padding: 2.5rem;

    border-radius: 6px;

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
          color: ${(props) => props.theme['base-subtitle']};
          font-weight: normal;
        }

        p {
          color: ${(props) => props.theme['base-text']};
        }
      }

      #CurrencyDollarCheckout {
        color: ${(props) => props.theme.purple};
      }
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
    border: 1px solid ${(props) => props.theme['yellow-dark']};
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

export const PaymentType = styled(RadioGroup.Root)`
  display: flex;
  justify-content: space-between;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  height: 3.125rem;
  width: 11.125rem;
  padding: 1rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  cursor: pointer;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['base-hover']};
    transition: 0.5s;
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`;
