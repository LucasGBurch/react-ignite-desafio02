import { ConfirmOrderButton, SelectedCoffeesContainer } from './styles';
import { CheckoutList } from '../CoffeeCheckoutList';
import { useContext } from 'react';
import { CoffeeContext } from '../../../../contexts/coffeesContext';
import { Link } from 'react-router-dom';

export function SelectedCoffees() {
  const { coffees } = useContext(CoffeeContext);

// ---VARIÁVEIS DE CONTAGEM DE VALORES---
  const deliverValueNumber = 3.5;
  const deliverValueString = String(deliverValueNumber)
    .replace('.', ',')
    .padEnd(4, '0');
  // Manipulação do 0 decimal. Em um cenário com valor de entraga calculável (não fixo), seria preciso fazer uso da length para determinar o padEnd dinamicamente. Isso seria feito na contagem total feita com o reduce(), mas aparentemente não foi necessário;

  // Experimentando unir o filter com o Reduce (fiz separado no Header para fins de aprendizado):
  const itemsTotalNumber = coffees
    ?.filter((coffee) => coffee.isActive && coffee.quantity > 0)
    .reduce((acc, coffees) => acc + coffees.quantity * coffees.price, 0);

  const itemsTotalString = String(itemsTotalNumber!.toFixed(2)).replace(
    '.',
    ','
  );
  const finalTotalNumber = (itemsTotalNumber! + deliverValueNumber).toFixed(2);
  const finalTotalString = String(finalTotalNumber).replace('.', ',');

  const activeCoffees = coffees?.find((coffee) => {
    return coffee.isActive;
  }); // Converter truthy ou falsy em boolean com !!:
  const thereIsActiveCoffees = !!activeCoffees;
  // console.log(thereIsActiveCoffees);


// ---VARIÁVEIS PARA RENDERIZAÇÕES E CONDICIONAIS---
  const coffeesInTheCart = coffees
    ?.filter((coffee) => {
      if (coffee.isActive && coffee.quantity > 0) {
        return coffee.quantity;
      }
    })
    .reduce((accumulator, coffees) => accumulator + coffees.quantity, 0);

  const thereIsCoffeesInTheCart = !!coffeesInTheCart;

  const listContent = thereIsActiveCoffees ? (
    <CheckoutList />
  ) : (
    <p>
      Não há cafés selecionados. <Link to='/'>Retorne ao menu</Link> e selecione
      seu café clicando no carrinho e nas quantidades de cada um.{' '}
    </p>
  );

  return (
    <SelectedCoffeesContainer>
      {listContent}
      <section>
        <p>
          <span>Total de itens</span>
          <span>R$ {itemsTotalString}</span>
        </p>
        <p>
          <span>Entrega</span>
          <span>R$ {deliverValueString}</span>
        </p>
        <h3>
          <span>Total</span>
          <span>R$ {finalTotalString}</span>
        </h3>
      </section>
      <ConfirmOrderButton type='submit' disabled={!thereIsCoffeesInTheCart}>
        Confirmar Pedido
      </ConfirmOrderButton>
    </SelectedCoffeesContainer>
  );
}
