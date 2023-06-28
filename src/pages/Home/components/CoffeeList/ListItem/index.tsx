import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { ListItemContainer } from './styles';

interface ListItemProps {
  name: string;
  description: string;
  price: number;
  coffeeImg: string;
  tipo1: string;
  tipo2?: string;
  tipo3?: string;
}

export function ListItem({
  name,
  description,
  price,
  coffeeImg,
  tipo1,
  tipo2,
  tipo3,
}: ListItemProps) {
  return (
    <ListItemContainer>
      <img src={coffeeImg} />
      <div>
        <span>{tipo1}</span>
        {tipo2 && <span>{tipo2}</span>}
        {tipo3 && <span>{tipo3}</span>}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <section>
        <span>{price}</span>
        <button>
          <Minus weight='bold' />
        </button>
        <span>1</span>
        <button>
          <Plus weight='bold' />
        </button>
        <ShoppingCart id='ListItemCart' weight='fill' />
      </section>
    </ListItemContainer>
  );
}
