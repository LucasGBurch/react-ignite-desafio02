import { createContext, ReactNode, useState } from 'react';
import { NewAddressFormData } from '../@types';

interface ClientContextType {
  client: NewAddressFormData | undefined;
  clientSetter: (clientValues: NewAddressFormData) => void;
  paymentType: string;
  paymentTypeSetter: (paymentType: string) => void;
}

export const ClientContext = createContext({} as ClientContextType);

interface ClientProviderProps {
  children: ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  const [client, setClient] = useState<NewAddressFormData>();
  const [paymentType, setPaymentType] = useState<string>('credit');

  function clientSetterHandler(clientValues: NewAddressFormData) {
    setClient((prevState) => {
      return clientValues;
    });
  }

  const clientContextValues: ClientContextType = {
    client: client,
    clientSetter: clientSetterHandler,
    paymentType: paymentType,
    paymentTypeSetter: setPaymentType,
  };

  return (
    <ClientContext.Provider value={clientContextValues}>
      {children}
    </ClientContext.Provider>
  );
}
