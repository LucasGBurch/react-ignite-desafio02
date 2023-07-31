import styled from 'styled-components';

export const IntroContainer = styled.section`
  height: 34rem;
  max-width: 90rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;

  div {
    display: flex;
    flex-direction: column;

    padding-bottom: 1.125rem;
    width: 36.75rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      font-weight: 700;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.5rem;
      line-height: 130%;
      width: 36.75rem;
      margin-bottom: 4.125rem;
    }

    div {
      height: 5.25rem;
      width: 35.438rem;

      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1.25rem;

      div {
        width: 14.438rem;
      }

      div:last-child {
        width: 18.375rem;
      }

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        font-size: 1rem;

        svg {
          color: ${(props) => props.theme.white};
          border-radius: 1000px;
          padding: 0.5rem;
        }
      }

      #ShopCartIntro {
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      #TimerIntro {
        background-color: ${(props) => props.theme.yellow};
      }

      #PackageIntro {
        background-color: ${(props) => props.theme['base-text']};
      }

      #CoffeeIntro {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 50rem;

    img {
      width: 25rem;
    }
  }

  @media screen and (max-width: 700px) {
    height: 35rem;
    justify-content: flex-start;

    div {
      align-items: center;
      text-align: center;
      max-width: 20rem;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        width: 20rem;
      }

      div {
        padding-bottom: 0;
        padding-left: 0.5rem;
        height: 6rem;
        width: 20rem;

        div {
          width: 18rem;
        }

        div:last-child {
          width: 20rem;
        }
      }
    }

    img {
      display: none;
    }
  }
`;
