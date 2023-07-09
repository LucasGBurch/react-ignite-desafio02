import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  CepNumberNeighborInput,
  CityInput,
  ComplementInput,
  CompleteOrderContainer,
  FederativeUnitInput,
  PaymentType,
  PaymentTypeButton,
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
        <div>
          <CurrencyDollar id='CurrencyDollarCheckout' size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <PaymentType>
          <PaymentTypeButton value='credit'>
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </PaymentTypeButton>
          <PaymentTypeButton value='debit'>
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </PaymentTypeButton>
          <PaymentTypeButton value='money'>
            <Money size={16} />
            <span>DINHEIRO</span>
          </PaymentTypeButton>
        </PaymentType>
      </section>
    </CompleteOrderContainer>
  );
}
