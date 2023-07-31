import { createContext, ReactNode, useState } from 'react';
import { coffees as coffeesData } from '../coffees.json';
import { Coffee } from '../@types';

interface CoffeeContextType {
  coffees: Coffee[] | undefined;
  setCoffeeActive: (coffeeName: string) => void;
  coffeeQuantitySetter: (coffeeName: string, newQuantity: number) => void;
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

  function coffeeQuantitySetterHandler(coffeeName: string, newQuantity: number) {
    // Usando o setter dos cafés para atualizar a quantidade para o café:
    setCoffees((prevCoffeesState) => {
      const updatedcoffees = prevCoffeesState.map((coffee) => {
        if (coffee.name === coffeeName) {
          return { ...coffee, quantity: newQuantity };
        } else {
          return { ...coffee };
        }
      });
      // console.log(newQuantity);
      return updatedcoffees;
    });
  }

  function setCoffeeActiveHandler(coffeeName: string) {
    // Usando o setter dos cafés para atualizar os ativos para a página Checkout:
    setCoffees((prevCoffeesState) => {
      const updatedcoffees = prevCoffeesState.map((coffee) => {
        if (coffee.name === coffeeName) {
          return { ...coffee, isActive: !coffee.isActive };
        } else {
          return { ...coffee };
        }
      });

      return updatedcoffees;
    });
  }

  const coffeeContextValues: CoffeeContextType = {
    coffees: coffees,
    setCoffeeActive: setCoffeeActiveHandler,
    coffeeQuantitySetter: coffeeQuantitySetterHandler,
  };

  return (
    <CoffeeContext.Provider value={coffeeContextValues}>
      {children}
    </CoffeeContext.Provider>
  );
}
