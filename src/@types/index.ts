import * as zod from 'zod';

export const newAddressFormValidationSchema = zod.object({
  CEP: zod.string().regex(/(\d{2}[.]?\d{3})[-]?(\d{3})/, 'Digite um CEP'),
  Street: zod.string().min(5, 'Informe um nome de rua válido.'),
  Number: zod
    .number()
    .min(1, 'Informe um número de endereço válido')
    .max(10000, 'Informe um número de endereço válido'),
  Neighborhood: zod.string().min(5, 'Informe um nome de bairro válido.'),
  City: zod.string().min(2, 'Informe um nome válido de cidade'),
  FederativeUnit: zod
    .string()
    .min(2, 'Informe uma UF válida.')
    .max(2, 'Informe uma UF válida.'),
  Complement: zod.string().optional(),
});

export type NewAddressFormData = zod.infer<
  typeof newAddressFormValidationSchema
>;

export interface Coffee {
  name: string;
  description: string;
  price: number;
  coffeeImg: string;
  tipo1: string;
  tipo2?: string;
  tipo3?: string;
  isActive: boolean;
  quantity: number;
}

