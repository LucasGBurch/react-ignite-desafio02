import { MapPinLine } from 'phosphor-react';
import {
  CepNumberNeighborInput,
  ComplementInput,
  CompleteOrderContainer,
  StreetInput,
} from './styles';

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <form>
        <div>
          <MapPinLine id='MapPinCheckout' size={22} />
        </div>
        <div>
          <CepNumberNeighborInput placeholder='CEP' />
          <StreetInput placeholder='Rua' />
          <CepNumberNeighborInput placeholder='Numero' />
          <ComplementInput placeholder='Complemento' />
        </div>
      </form>
      <section>
        <div></div>

        <div>Radix buttons</div>
      </section>
    </CompleteOrderContainer>
  );
}
