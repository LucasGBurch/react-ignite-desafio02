import { createContext, ReactNode, useState } from 'react';
import { coffees as coffeesData } from '../coffees.json';
import { Coffee } from '../@types';

interface CoffeeContextType {
  coffees: Coffee[] | undefined;
  coffeeSetter: (coffeeName: string, coffeeIsActive: boolean) => void;
  coffeeCartSetter: (coffeeValues: Coffee[]) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([
    ...coffeesData.map((coffee) => {
      // Pegando os dados iniciais do json:
      return { isActive: false, quantity: 0, ...coffee };
    }),
  ]);
  const [cartCoffees, setCartCoffees] = useState<number>(0);

  function coffeeSetterHandler(coffeeName: string, coffeeIsActive: boolean) {
    // Usando o setter dos cafés para atualizar os ativos para a página Checkout:
    setCoffees((prevCoffeesState) => {
      const updatedcoffees = prevCoffeesState.map((coffee) => {
        if (coffee.name === coffeeName) {
          return { ...coffee, isActive: coffeeIsActive };
        } else {
          return { ...coffee };
        }
      });

      return updatedcoffees;
    });
  }

  function coffeeCartSetterHandler(coffeeValues: Coffee[]) {}

  const coffeeContextValues: CoffeeContextType = {
    coffees: coffees,
    coffeeSetter: coffeeSetterHandler,
    coffeeCartSetter: coffeeCartSetterHandler,
  };

  return (
    <CoffeeContext.Provider value={coffeeContextValues}>
      {children}
    </CoffeeContext.Provider>
  );
}
