import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { ClientContext } from '../../contexts/clientContext';
import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';

import {
  NewAddressFormData,
  newAddressFormValidationSchema,
} from '../../@types';

import { CheckoutContainer } from './styles';
import { useTheme } from 'styled-components';

export function Checkout() {
  const theme = useTheme();
  const { clientSetter } = useContext(ClientContext);
  const navigate = useNavigate();

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = newAddressForm;
  // const rua = watch('Street');
  // console.log(rua);

  function handleFinishOrder(clientData: NewAddressFormData) {
    clientSetter(clientData);
    // console.log(clientData);
    reset();
    navigate('/success');
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleFinishOrder)}>
      <section>
        <h2>Complete seu pedido</h2>
        <FormProvider {...newAddressForm}>
          <CompleteOrderForm />
        </FormProvider>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutContainer>
  );
}
