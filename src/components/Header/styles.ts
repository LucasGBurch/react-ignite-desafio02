import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  max-width: 90rem;
  width: 100%;
  padding: 2rem 10rem;

  position: sticky; // ISTO AQUI FAZ O HEADER
  top: 0; // SEGUIR NO TOPO QUANDO SCROLLAR
  background-color: ${props => props.theme.background};

  nav {
    display: flex;
    justify-content: space-between;

    height: 2.375rem;
    width: 12.75rem;

    div {
      background: ${(props) => props.theme['purple-light']};
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 14px;

      border-radius: 6px;
      padding: 0.75rem;

      width: 9.5rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 6px;
      background-color: ${(props) => props.theme['yellow-light']};

      width: 2.375rem;

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        position: absolute;
        margin-top: -2.25rem;
        margin-right: -2.25rem;

        border-radius: 1000px;

        font-size: 12px;

        height: 1.2rem;
        width: 1.2rem;
      }
    }

    #HeaderShoppingCart {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`;
