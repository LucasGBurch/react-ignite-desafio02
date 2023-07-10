import { styled } from "styled-components";

export const CheckoutListItemContainer = styled.li`
  height: 5rem;
  width: 22.25rem;

  display: flex;
  align-items: center;

  margin: 1.5rem auto;

  &:first-child {
    margin-top: 0;
  }

  img {
    height: 4rem;
    width: 4rem;
  }

  section {


    div:first-child {
      display: flex;
      justify-content: space-between;
    }
  }

`;