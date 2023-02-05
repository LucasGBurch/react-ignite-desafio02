import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';

/*LISTA DE ÍCONES PHOSPHOR (fill é com propriedade "weight" e cor "color") */
import {
  MapPin, // fill
  MapPinLine,
  Trash,
  CurrencyDollar,
  ShoppingCart, // fill
  Timer, // fill
  Package, // fill
  Coffee, // fill
  Plus, // bold
  Minus, // bold
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} />
    </Routes>
  );
}
