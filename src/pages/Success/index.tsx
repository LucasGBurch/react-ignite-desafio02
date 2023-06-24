import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import successImg from '../../assets/SuccessImg.svg';
import { SuccessContainer } from './styles';

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <section>
        <div>
          <MapPin weight='fill' />
          <p></p>
        </div>
        <div>
          <Timer weight='fill' />
          <p></p>
        </div>
        <div>
          <CurrencyDollar />
          <p></p>
        </div>
        <img
          src={successImg}
          alt='Entregador em cima de sua lambreta indo entregar o pedido'
        ></img>
      </section>
    </SuccessContainer>
  );
}
