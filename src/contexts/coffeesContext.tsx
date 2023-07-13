import { createContext, ReactNode, useState } from 'react';

interface Coffee {
  name: string;
  description: string;
  price: number;
  quantity: number;
  coffeeImg: string;
  tipo1: string;
  tipo2?: string;
  tipo3?: string;
}

interface CoffeeContextType {
  coffee: Coffee | undefined;
  coffeeSetter: (coffeeValues: Coffee) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffee, setCoffee] = useState<Coffee>();

  function coffeeSetterHandler(coffeeValues: Coffee) {
    setCoffee((prevState) => {
      return coffeeValues;
    });
  }

  const coffeeContextValues: CoffeeContextType = {
    coffee: coffee,
    coffeeSetter: coffeeSetterHandler,
  };

  return (
    <CoffeeContext.Provider value={coffeeContextValues}>
      {children}
    </CoffeeContext.Provider>
  );
}