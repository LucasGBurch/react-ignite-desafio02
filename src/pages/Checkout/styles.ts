import styled from "styled-components";

export const CheckoutContainer = styled.form`
  min-height: 39rem;
  max-width: 90rem;

  display: flex;
  gap: 2rem;
  padding: 0 10rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    padding: 0.75rem 0;
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
    }
  }
`;