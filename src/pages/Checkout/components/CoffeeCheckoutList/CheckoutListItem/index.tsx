import { Minus, Plus, Trash } from 'phosphor-react';
import { CheckoutListItemContainer } from './styles';
import { Coffee } from '../../../../../@types';
import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../../../../../contexts/coffeesContext';

interface CheckoutListItemProps extends Coffee {}

export function CheckoutListItem({
  name,
  price,
  coffeeImg,
  quantity,
}: CheckoutListItemProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(quantity);

  const { setCoffeeActive, coffeeQuantitySetter } = useContext(CoffeeContext);

  const priceAmount = (price * coffeeQuantity).toFixed(2);
  const valueFormatted = String(priceAmount).replace('.', ',');

  // Era este useEffect que faltava para ajustar a quantidade total no Header evitando o efeito colateral assíncrono do state:
  useEffect(() => {
    coffeeQuantitySetter(name, coffeeQuantity);
  }, [coffeeQuantity]);

  function minusOneCoffeeHandler() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity((prevQuantity) => prevQuantity - 1);
      coffeeQuantitySetter(name, coffeeQuantity);
    }
  }

  function PlusOneCoffeeHandler() {
    if (coffeeQuantity < 9) {
      setCoffeeQuantity((prevQuantity) => prevQuantity + 1);
      coffeeQuantitySetter(name, coffeeQuantity);
    }
  }

  function removeCoffeeFromListHandler() {
    setCoffeeActive(name);
  }

  return (
    <CheckoutListItemContainer>
      <img src={coffeeImg} alt={`Imagem do ${name}`} />
      <section>
        <div>
          <p>{name}</p>
          <span>R$ {valueFormatted}</span>
        </div>
        <div>
          <div>
            {' '}
            {/*type button pra não ativer o forms */}
            <button type='button' onClick={minusOneCoffeeHandler}>
              <Minus size={14} weight='bold' id='ListItemMinus' />
            </button>
            <span>{quantity}</span>
            <button type='button' onClick={PlusOneCoffeeHandler}>
              <Plus size={14} weight='bold' id='ListItemPlus' />
            </button>
          </div>
          <button type='button' onClick={removeCoffeeFromListHandler}>
            <Trash size={16} /> REMOVER
          </button>
        </div>
      </section>
    </CheckoutListItemContainer>
  );
}
