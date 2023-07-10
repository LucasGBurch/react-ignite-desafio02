import styled from 'styled-components';

export const SuccessContainer = styled.main`
  height: 26rem;
  width: 90rem;

  display: flex;
  flex-direction: column;

  margin-top: 5rem;
  padding: 0 10rem;

  section {
    display: flex;

    height: 4.5rem;
    width: 34.5rem;

    h2 {
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: 700;

      justify-content: flex-start;

      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 130%;
      width: 36.75rem;
      margin-bottom: 4.125rem;
    }
  }

  section {
    display: flex;
    height: 21.375rem;

    width: 36.75rem;

    ul {
      // do background à border: truque pra gradiente + radius
      background: linear-gradient(
            ${(props) => props.theme.background},
            ${(props) => props.theme.background}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      margin-right: 6.375rem;
      padding: 2.5rem;

      list-style: none;

      width: 32.875rem;

      li {
        display: flex;
        font-size: 1rem;
        gap: 0.75rem;
        align-items: center;

        height: 2.625rem;

        width: 32.875rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
      }
    }

    svg {
      color: ${(props) => props.theme.white};
      border-radius: 1000px;
      padding: 0.5rem;
    }

    #MapPinSuccess {
      background: ${(props) => props.theme.purple};
    }

    #TimerSuccess {
      background: ${(props) => props.theme.yellow};
      padding: 0.7rem;
    }

    #CurrencyDollarSuccess {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`;
