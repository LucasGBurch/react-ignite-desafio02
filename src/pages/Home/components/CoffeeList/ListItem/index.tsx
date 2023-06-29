import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { ListItemContainer } from './styles';

// import coffeimg from '../../../../../assets/' 
// teste do caminho para colocar no objeto json das imagens

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

  const quantity = 1;
  const value = quantity * price;

  return (
    <ListItemContainer>
      <img src={coffeeImg} alt={`Imagem do ${name}`}/>
      <div>
        <span>{tipo1}</span>
        {tipo2 && <span>{tipo2}</span>}
        {tipo3 && <span>{tipo3}</span>}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <section>
        <span>{value}</span>
        <div>
          <button>
            <Minus size={14} weight='bold' id='ListItemMinus' />
          </button>
          <span>{quantity}</span>
          <button>
            <Plus size={14} weight='bold' id='ListItemPlus' />
          </button>
        </div>
        <div>
          <ShoppingCart id='ListItemCart' size={22} weight='fill' />
        </div>
      </section>
    </ListItemContainer>
  );
}
