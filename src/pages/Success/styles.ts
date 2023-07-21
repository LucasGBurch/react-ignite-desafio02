import styled from 'styled-components';

export const SuccessContainer = styled.main`
  min-height: 26rem;
  max-width: 70rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 10rem;
  margin-top: 5rem;

  section:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    min-height: 4.5rem;
    max-width: 34.5rem;

    margin-bottom: 2rem;

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
    }
  }

  section:last-child {
    display: flex;
    min-height: 21.375rem;
    gap: 6.375rem;

    max-width: 36.75rem;

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

          span {
            line-height: 1.375rem;
            max-width: 26rem;
          }
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
    }

    #CurrencyDollarSuccess {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  @media screen and (max-width: 1280px) {
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
    max-width: 30rem;
    margin: 2rem auto;

    section:first-child {
      align-items: center;
      width: 22rem;
      text-align: center;

      p {
        width: 20rem;
      }
    }

    section:last-child {
      gap: 1rem;
      flex-direction: column;

      ul {
        padding: 1.5rem;
        width: 26rem;

        li {
          width: 22rem;

          div {
            span {
              line-height: 1.5rem;
              max-width: 20rem;
            }
          }
        }
      }

      img {
        width: 25rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
    max-width: 20rem;

    section:first-child {
      max-width: 20rem;
      gap: 1rem;
    }

    section:last-child {
      max-width: 20rem;

      ul {
        padding: 1.rem;
        width: 20rem;

        li {
          width: 18rem;
        }
      }

      span {
        font-size: 0.875rem;
        line-height: 1rem;
      }

      img {
        display: none;
      }
    }
  }
`;
