import { createContext, ReactNode, useState } from 'react';

interface Client {
  CEP: string;
  Street: string;
  Number: number;
  Neighborhood: string;
  City: string;
  FederativeUnit: string;
  Payment: string;
  Complement?: string;
}

interface ClientContextType {
  client: Client | undefined;
  clientSetter: (clientValues: Client) => void;
}

export const ClientContext = createContext({} as ClientContextType);

interface ClientProviderProps {
  children: ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  const [client, setClient] = useState<Client>();

  function clientSetterHandler(clientValues: Client) {
    setClient((prevState) => {
      return clientValues;
    });
  }

  const clientContextValues: ClientContextType = {
    client: client,
    clientSetter: clientSetterHandler,
  };

  return (
    <ClientContext.Provider value={clientContextValues}>
      {children}
    </ClientContext.Provider>
  );
}
