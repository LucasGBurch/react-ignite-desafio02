import { MapPinLine } from 'phosphor-react';
import {
  CepNumberNeighborInput,
  CityInput,
  ComplementInput,
  CompleteOrderContainer,
  FederativeUnitInput,
  StreetInput,
} from './styles';

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <form>
        <div>
          <MapPinLine id='MapPinCheckout' size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <div>
          <CepNumberNeighborInput placeholder='CEP' />
          <StreetInput placeholder='Rua' />
          <CepNumberNeighborInput placeholder='Numero' />
          <ComplementInput placeholder='Complemento' />
          <CepNumberNeighborInput placeholder='Bairro' />
          <CityInput placeholder='Cidade' />
          <FederativeUnitInput placeholder='UF' />
        </div>
      </form>
      <section>
        <div></div>

        <div>Radix buttons</div>
      </section>
    </CompleteOrderContainer>
  );
}
