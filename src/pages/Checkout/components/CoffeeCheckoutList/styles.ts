import { styled } from "styled-components";

export const CheckoutListContainer = styled.ul`
  height: 13rem;
  width: 23rem;

  overflow: auto;

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