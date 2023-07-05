import { CompleteOrder } from "./components/CompleteOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return <CheckoutContainer>
    <CompleteOrder />
    <SelectedCoffees />
  </CheckoutContainer>
}