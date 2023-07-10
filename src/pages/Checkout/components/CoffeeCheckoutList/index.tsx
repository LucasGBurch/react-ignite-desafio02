import { CheckoutListItem } from './CheckoutListItem';
import { CheckoutListContainer } from './styles';
import { coffees } from '../../../../coffees.json';

export function CheckoutList() {
  return (
    <CheckoutListContainer>
      {coffees?.map((coffee) => (
        <CheckoutListItem
          key={coffee.name}
          coffeeImg={coffee.coffeeImg}
          name={coffee.name}
          price={coffee.price}
        />
      ))}
    </CheckoutListContainer>
  );
}
