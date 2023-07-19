import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { ClientContext } from '../../../../contexts/clientContext';

import {
  CepNumberNeighborhoodInput,
  CityInput,
  ComplementInput,
  CompleteOrderFormContainer,
  FederativeUnitInput,
  PaymentType,
  PaymentTypeButton,
  StreetInput,
} from './styles';

export function CompleteOrderForm() {
  const { register } = useFormContext();
  const { paymentType, paymentTypeSetter } = useContext(ClientContext);

  function paymentTypesHandler(event: React.FormEvent<HTMLButtonElement>) {
    paymentTypeSetter(event.currentTarget.value);
  }

  return (
    <CompleteOrderFormContainer>
      <section>
        <div>
          <MapPinLine id='MapPinCheckout' size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <div>
          <CepNumberNeighborhoodInput
            id='CEP'
            placeholder='CEP'
            type='text'
            minLength={8}
            maxLength={10} /*com ponto e traço*/
            {...register('CEP', {
              pattern: {
                value: /(\d{2}[.]?\d{3})[-]?(\d{3})/,
                message: 'Digite um CEP válido.'
              },
            })}
          />
          <StreetInput
            id='Street'
            placeholder='Rua'
            type='text'
            minLength={5}
            {...register('Street')}
          />
          <CepNumberNeighborhoodInput
            id='Number'
            placeholder='Numero'
            type='number'
            min={1}
            max={10000}
            {...register('Number', { valueAsNumber: true })}
          />
          <ComplementInput id='Complement' placeholder='Complemento' />
          <span>Opcional</span>
          <CepNumberNeighborhoodInput
            id='Neighborhood'
            placeholder='Bairro'
            type='text'
            minLength={3}
            {...register('Neighborhood')}
          />
          <CityInput
            id='City'
            placeholder='Cidade'
            type='text'
            minLength={3}
            {...register('City')}
          />
          <FederativeUnitInput
            id='FederativeUnit'
            placeholder='UF'
            type='text'
            minLength={2}
            maxLength={2}
            {...register('FederativeUnit')}
          />
        </div>
      </section>
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
          <PaymentTypeButton
            value='credit'
            checked={paymentType === 'credit'}
            onClick={paymentTypesHandler}
          >
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </PaymentTypeButton>
          <PaymentTypeButton
            value='debit'
            checked={paymentType === 'debit'}
            onClick={paymentTypesHandler}
          >
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </PaymentTypeButton>
          <PaymentTypeButton
            value='cash'
            checked={paymentType === 'cash'}
            onClick={paymentTypesHandler}
          >
            <Money size={16} />
            <span>DINHEIRO</span>
          </PaymentTypeButton>
        </PaymentType>
      </section>
    </CompleteOrderFormContainer>
  );
}
