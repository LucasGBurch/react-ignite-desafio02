import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

import logoImg from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Header() {
  const theme = useTheme();

  const cartIsNotEmpty = false;

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logoImg} alt=''></img>
      </Link>
      <nav>
        <div>
          <MapPin color={theme.purple} size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to='/checkout'>
          {cartIsNotEmpty && <div>
            <span>3</span>
          </div>}
          <ShoppingCart id='HeaderShoppingCart' size={22} weight='fill' />
        </Link>
      </nav>
    </HeaderContainer>
  );
}
