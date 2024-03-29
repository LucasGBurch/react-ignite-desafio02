import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  height: 4rem;
  width: 100%;
  max-width: 90rem;

  bottom: 0;
  margin-top: 3.5rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};

  a {
    text-decoration: none;
    font-weight: bold;

    &:visited {
      color: ${props => props.theme.white};
    }
  }
`;