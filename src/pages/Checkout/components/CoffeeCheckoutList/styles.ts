import { styled } from "styled-components";

export const CheckoutListContainer = styled.ul`
  height: 15rem;
  width: 23rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  overflow: auto;

  border-bottom: solid 1px ${props => props.theme["base-button"]} ;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.purple};
    transition: 0.5s;
  }
`;