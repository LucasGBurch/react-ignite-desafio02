import { useNavigate } from 'react-router-dom';
import { ConfirmOrderButton, SelectedCoffeesContainer } from './styles';
import { CheckoutList } from '../CoffeeCheckoutList';

export function SelectedCoffees() {

  const navigate = useNavigate();

  const deliverValueNumber = 3.51;
  const deliverValue = String(deliverValueNumber).replace('.', ',');
  const itemsTotal = 0
  const finalTotal = String(itemsTotal + deliverValueNumber).replace('.', ',');

  function confirmOrderHandler() {

    navigate('/success');
  }

  return (
    <SelectedCoffeesContainer>
      <CheckoutList />
      <section>
        <p>
          <span>Total de itens</span>
          <span>R$ {}</span>
        </p>
        <p>
          <span>Entrega</span>
          <span>R$ {deliverValue}</span>
        </p>
        <h3>
          <span>Total</span>
          <span>R$ {finalTotal}</span>
        </h3>
      </section>
      <ConfirmOrderButton onClick={confirmOrderHandler}>
        Confirmar Pedido
      </ConfirmOrderButton>
    </SelectedCoffeesContainer>
  );
}
