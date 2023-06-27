import { ListItem } from './ListItem';
import { CoffeeListContainer } from './styles';
import { coffees } from '../../../../coffees.json';

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      {coffees.map((coffee) => (
        <ListItem coffeeImg={coffee.coffeeImg} tipo1={coffee.tipo1} tipo2={coffee.tipo2} tipo3={coffee.tipo3}/>
        ))
      }
    </CoffeeListContainer>
  );
}
