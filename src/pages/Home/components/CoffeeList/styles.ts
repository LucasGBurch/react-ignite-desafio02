import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  max-width: 70rem;
  min-height: 102rem;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    gap: 1.5rem 2rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3.375rem;
    height: 2.625rem;
    width: 12rem;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 2rem;
    }

    ul {
      grid-template-columns: repeat(3, 3fr);
      grid-template-rows: repeat(5, 5fr);
      gap: 1.5rem 1rem;
    }
  }

  @media screen and (max-width: 840px) {
    ul {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(7, 7fr);
    }

    h2 {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 620px) {
    h2 {

    }

    ul {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(14, 14fr);
      gap: 1.5rem 0;
    }
  }
`;
