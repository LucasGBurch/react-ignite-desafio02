import styled from 'styled-components';

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  height: 19.375rem;
  width: 16rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -20%;
  }

  div {
    // primeira div dos tipos
    display: flex;
    gap: 6px;

    span {
      background-color: ${(props) => props.theme['yellow-light']};
      border-radius: 8px;
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.625rem;
      font-weight: bold;
      padding: 0.25rem;
    }
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['base-button']};
      height: 2.375rem;
      width: 4.5rem;

      span {
        color: ${(props) => props.theme['base-title']};
        font-size: 1rem;
        font-weight: 400;
      }

      button {
        border: none;
      }
    }

    div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
      width: 2.375rem;
    }
  }

  #ListItemCart {
    color: ${(props) => props.theme['base-card']};
  }

  #ListItemMinus {
    color: ${(props) => props.theme['purple-dark']};
  }

  #ListItemPlus {
    color: ${(props) => props.theme['purple-dark']};
  }
`;
