import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to='/'></Link>
        <Link to='/checkout'></Link>
      </nav>
    </HeaderContainer>
  );
}
