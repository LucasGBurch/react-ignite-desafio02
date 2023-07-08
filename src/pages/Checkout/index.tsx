import { CompleteOrder } from './components/CompleteOrder';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <CompleteOrder />
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutContainer>
  );
}
