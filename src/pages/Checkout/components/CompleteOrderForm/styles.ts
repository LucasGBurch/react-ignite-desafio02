import { styled } from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CompleteOrderFormContainer = styled.section`
  min-height: 40rem;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  section:first-child {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    min-height: 23.25rem;
    max-width: 40rem;
    padding: 2.5rem;

    div:first-child {
      margin-bottom: 2rem;
      min-height: 2.75rem;
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

  section:last-child {
    // Botões de forma de pagamento
    background-color: ${(props) => props.theme['base-card']};
    min-height: 13rem;

    max-width: 40rem;
    padding: 2.5rem;

    border-radius: 6px;

    div:first-child {
      margin-bottom: 2rem;
      min-height: 2.75rem;
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

  @media screen and (max-width: 700px) {
    align-items: center;
    text-align: center;
    justify-content: space-between;

    section:first-child {
      max-width: 18rem;
      padding: 1rem;

      div:first-child {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      div:last-child {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        span {
          top: -2.8rem;
          right: 0;
          left: 1.5rem;
        }
      }
    }

    
    section:last-child {
      max-width: 18rem;
      min-height: 25rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div:first-child {
        margin-bottom: 0;
        flex-direction: column;
        align-items: center;

        div {
          gap: 1rem;
        }
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

  @media screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const CepNumberNeighborhoodInput = styled(BaseFormInput)`
  margin-right: 0.75rem;

  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`;

export const StreetInput = styled(BaseFormInput)`
  width: 35rem;

  @media screen and (max-width: 700px) {
    width: 12.5rem;
  }
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

  @media screen and (max-width: 700px) {
    width: 12.5rem;
    margin-right: 0;
  }
`;

export const FederativeUnitInput = styled(BaseFormInput)`
  width: 3.75rem;
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
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
