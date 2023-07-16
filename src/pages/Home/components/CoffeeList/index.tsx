import { useContext } from 'react';
import { ListItem } from './ListItem';
import { CoffeeListContainer } from './styles';
import { CoffeeContext } from '../../../../contexts/coffeesContext';

export function CoffeeList() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
        <ul>
          {coffees?.map((coffee) => (
            <ListItem
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              coffeeImg={coffee.coffeeImg}
              tipo1={coffee.tipo1}
              tipo2={coffee.tipo2}
              tipo3={coffee.tipo3}
              isActive={coffee.isActive}
            />
          ))}
        </ul>
    </CoffeeListContainer>
  );
}
