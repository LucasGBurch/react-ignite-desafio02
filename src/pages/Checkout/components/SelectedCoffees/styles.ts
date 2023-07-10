import { styled } from "styled-components";

export const SelectedCoffeesContainer = styled.section`
  height: 31.5rem;
  width: 28rem;

  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;

  section {
    height: 5.75rem;
    width: 23rem;

    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: ${props => props.theme["base-text"]};
      font-size: 0.875rem;
    }

    h3 {
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }

    p, h3 {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  height: 2.875rem;
  width: 23rem;
  cursor: pointer;

  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 6px;

  font-weight: bold;
  line-height: 1.375rem;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
    transition: 0.5s;
  }
`;
