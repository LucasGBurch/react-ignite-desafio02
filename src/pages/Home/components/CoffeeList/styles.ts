import styled from 'styled-components';

export const CoffeeListContainer = styled.section`
  max-width: 70rem;
  height: 102rem;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    gap: 2.5rem 2rem;
  }

  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3.375rem;
    height: 2.625rem;
    width: 12rem;
  }
`;
