import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

import logoImg from '../../assets/Logo.svg';
import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Header() {
  const theme = useTheme();

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

        <Link to='/checkout'></Link>
      </nav>
    </HeaderContainer>
  );
}
