import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  CepNumberNeighborInput,
  CityInput,
  ComplementInput,
  CompleteOrderFormContainer,
  FederativeUnitInput,
  PaymentType,
  PaymentTypeButton,
  StreetInput,
} from './styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const newAddressFormValidationSchema = zod.object({
  CEP: zod.string(),
  Rua: zod.string().min(5, 'Informe um nome de rua válido.'),
  Numero: zod
    .string()
    .min(1, 'Informe um número de endereço válido')
    .max(10000, 'Informe um número de endereço válido'),
  Bairro: zod.string().min(5, 'Informe um nome de bairro válido.'),
  Cidade: zod.string().min(2, 'Informe um nome válido de cidade'),
  Estado: zod
    .string()
    .min(2, 'Informe uma UF válida.')
    .max(2, 'Informe uma UF válida.'),
});

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export function CompleteOrderForm() {
  const { register } = useForm();


  const [paymentType, setPaymentType] = useState<string>('');

  function paymentTypesHandler(event: React.FormEvent<HTMLButtonElement>) {
    setPaymentType(event.currentTarget.value);
  }

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = newAddressForm;

  function handleFinishOrder() {
    
  }

  return (
    <CompleteOrderFormContainer>
      <form onSubmit={handleSubmit(handleFinishOrder)}>
        <div>
          <MapPinLine id='MapPinCheckout' size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <div>
          <CepNumberNeighborInput
            id='CEP'
            placeholder='CEP'
            type='text'
            minLength={8}
            maxLength={10} /*com ponto e traço*/
            {...register('CEP', { pattern: /(\d{2}[.]?\d{3})[-]?(\d{3})/ })}
          />
          <StreetInput id='Rua' placeholder='Rua' type='text' minLength={5} />
          <CepNumberNeighborInput
            id='Numero'
            placeholder='Numero'
            type='number'
            min={1}
            max={10000}
            {...register('Numero', { valueAsNumber: true })}
          />
          <ComplementInput placeholder='Complemento' />
          <span>Opcional</span>
          <CepNumberNeighborInput
            id='Bairro'
            placeholder='Bairro'
            type='text'
            minLength={3}
            {...register('Bairro')}
          />
          <CityInput
            id='Cidade'
            placeholder='Cidade'
            type='text'
            minLength={3}
            {...register('Cidade')}
          />
          <FederativeUnitInput
            id='Estado'
            placeholder='UF'
            type='text'
            minLength={2}
            maxLength={2}
            {...register('Estado')}
          />
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
