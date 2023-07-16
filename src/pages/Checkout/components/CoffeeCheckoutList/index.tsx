import { CheckoutListItem } from './CheckoutListItem';
import { CheckoutListContainer } from './styles';
import { useContext } from 'react';
import { CoffeeContext } from '../../../../contexts/coffeesContext';

export function CheckoutList() {
  const { coffees } = useContext(CoffeeContext);

  const cafesAtivos = coffees?.map((coffee) => (
    coffee.isActive && <CheckoutListItem
      key={coffee.name}
      coffeeImg={coffee.coffeeImg}
      name={coffee.name}
      price={coffee.price}
      description={coffee.description}
      isActive={coffee.isActive}
      quantity={coffee.quantity}
      tipo1={coffee.tipo1}
    />
  ))

  return (
    <CheckoutListContainer>
      {cafesAtivos}
    </CheckoutListContainer>
  );
}
