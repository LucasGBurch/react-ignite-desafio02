import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <CompleteOrderForm />
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutContainer>
  );
}
