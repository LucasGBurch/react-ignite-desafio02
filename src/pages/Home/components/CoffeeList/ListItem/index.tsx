import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { CartButton, ListItemContainer } from './styles';
import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../../../../../contexts/coffeesContext';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { Coffee } from '../../../../../@types';

interface ListItemProps extends Coffee {}

export function ListItem({
  name,
  description,
  price,
  coffeeImg,
  isActive,
  quantity,
  tipo1,
  tipo2,
  tipo3,
}: ListItemProps) {
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

  function activeToTheCartHandler() {
    setCoffeeActive(name);
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
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <CartButton
              enablecart={`${isActive ? 'enabled' : 'disabled'}`}
              onClick={activeToTheCartHandler}
            >
              <ShoppingCart id='ListItemCart' size={22} weight='fill' />
            </CartButton>
          </StyleSheetManager>
        </div>
      </section>
    </ListItemContainer>
  );
}
