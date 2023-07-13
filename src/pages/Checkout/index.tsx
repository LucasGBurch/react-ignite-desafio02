import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm, FormProvider } from 'react-hook-form';

import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';

import { CheckoutContainer } from './styles';

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

export function Checkout() {


  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = newAddressForm;

  function handleFinishOrder() {

  }

  return (
    <CheckoutContainer onSubmit={handleFinishOrder}>
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
