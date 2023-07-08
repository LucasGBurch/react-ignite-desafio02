import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { ListItemContainer } from './styles';
import { useState } from 'react';

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
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(0);

  const priceAmount = (price * coffeeQuantity).toFixed(2);

  const valueFormatted = String(priceAmount).replace('.', ',');

  function minusOneCoffeeHandler() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  function PlusOneCoffeeHandler() {
    if (coffeeQuantity < 9) {
      setCoffeeQuantity((prevQuantity) => prevQuantity + 1);
    }
  }

  function addToTheCartHandler() {
    
  }

  return (
    <ListItemContainer>
      <img src={coffeeImg} alt={`Imagem do ${name}`} />
      <div>
        <span>{tipo1}</span>
        {tipo2 && <span>{tipo2}</span>}
        {tipo3 && <span>{tipo3}</span>}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <section>
        <div>
          <span>R$</span>
          <span>{valueFormatted}</span>
        </div>
        <div>
          <button onClick={minusOneCoffeeHandler}>
            <Minus size={14} weight='bold' id='ListItemMinus' />
          </button>
          <span>{coffeeQuantity}</span>
          <button onClick={PlusOneCoffeeHandler}>
            <Plus size={14} weight='bold' id='ListItemPlus' />
          </button>
        </div>
        <div>
          <button onClick={addToTheCartHandler}>
            <ShoppingCart id='ListItemCart' size={22} weight='fill' />
          </button>
        </div>
      </section>
    </ListItemContainer>
  );
}
