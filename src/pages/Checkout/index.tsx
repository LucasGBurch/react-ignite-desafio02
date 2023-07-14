import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, useFormState } from 'react-hook-form';

import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';

import { CheckoutContainer } from './styles';
import { useContext } from 'react';
import { ClientContext } from '../../contexts/clientContext';
import {
  NewAddressFormData,
  newAddressFormValidationSchema,
} from '../../@types';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { clientSetter } = useContext(ClientContext);
  const navigate = useNavigate();

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = newAddressForm;

  function handleFinishOrder(clientData: NewAddressFormData) {
    clientSetter(clientData);
    console.log(clientData);
    
    reset();
    navigate('/success');
  }

  // const rua = watch('Street');
  // console.log(rua);

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
