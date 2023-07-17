import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

import logoImg from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { CoffeeContext } from '../../contexts/coffeesContext';

export function Header() {
  const theme = useTheme();

  const { coffees } = useContext(CoffeeContext);

  const selectedCoffees = coffees?.filter((coffee) => {
    if (coffee.isActive && coffee.quantity > 0) {
      return coffee.quantity;
    }
  });

  const selectedCoffeesQuantity = selectedCoffees?.reduce((accumulator, coffees) => accumulator + coffees.quantity, 0)

  const cartIsNotEmpty = selectedCoffeesQuantity ? true : false;

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
          {cartIsNotEmpty && (
            <div>
              <span>{selectedCoffeesQuantity}</span>
            </div>
          )}
          <ShoppingCart id='HeaderShoppingCart' size={22} weight='fill' />
        </Link>
      </nav>
    </HeaderContainer>
  );
}
