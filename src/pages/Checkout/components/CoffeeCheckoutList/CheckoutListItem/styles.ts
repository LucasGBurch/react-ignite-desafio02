import { styled } from 'styled-components';

export const CheckoutListItemContainer = styled.li`
  height: 5rem;
  max-width: 22.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  &:first-child {
    margin-top: 0;
  }

  img {
    height: 4rem;
    width: 4rem;
  }

  section {
    display: flex;
    justify-content: flex-start;
    gap: 0.25rem;

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
      }

      span {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        padding-right: 0.25rem;
      }
    }

    div:last-child {
      display: flex;
      gap: 0.5rem;

      div {
        background-color: ${(props) => props.theme['base-button']};
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 4.5rem;

        span {
          color: ${(props) => props.theme['base-title']};
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          padding: 0;
          height: 1.25rem;
          width: 1.5rem;
        }

        svg:hover {
          color: ${(props) => props.theme['purple-dark']};
          transition: 0.5s;
        }
      }

      button {
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        border: none;
        font-size: 0.75rem;
        height: 2rem;
        width: 5.75rem;

        color: ${(props) => props.theme['base-text']};

        svg {
          color: ${(props) => props.theme.purple};
        }
      }

      button {
        border-radius: 6px;
        // Botão remover
        &:nth-child(2):hover {
          background-color: ${(props) => props.theme['base-hover']};

          svg {
            color: ${(props) => props.theme['purple-dark']};
            transition: 0.5s;
          }

          transition: 0.5s;
        }
      }
    }
  }

  @media screen and (max-width: 540px) {
    gap: 0.75rem;

    section {
      div:first-child {
        p {
          font-size: 0.85rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
