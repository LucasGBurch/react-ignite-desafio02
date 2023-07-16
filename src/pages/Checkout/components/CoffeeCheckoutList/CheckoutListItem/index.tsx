import { Minus, Plus, Trash } from 'phosphor-react';
import { CheckoutListItemContainer } from './styles';
import { Coffee } from '../../../../../@types';

interface CheckoutListItemProps extends Coffee {
}

export function CheckoutListItem({
  name,
  price,
  coffeeImg,
  isActive,
}: CheckoutListItemProps) {
  function minusOneCoffeeHandler() {}

  function PlusOneCoffeeHandler() {}

  function removeCoffeeFromListHandler() {}

  return (
    <CheckoutListItemContainer>
      <img src={coffeeImg} alt={`Imagem do ${name}`} />
      <section>
        <div>
          <p>{name}</p>
          <span>R$ {price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div>
          <div>
            <button onClick={minusOneCoffeeHandler}>
              <Minus size={14} weight='bold' id='ListItemMinus' />
            </button>
            <span>{1}</span>
            <button onClick={PlusOneCoffeeHandler}>
              <Plus size={14} weight='bold' id='ListItemPlus' />
            </button>
          </div>
          <button onClick={removeCoffeeFromListHandler}>
            <Trash size={16} /> REMOVER
          </button>
        </div>
      </section>
    </CheckoutListItemContainer>
  );
}
