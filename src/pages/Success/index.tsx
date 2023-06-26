import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import successImg from '../../assets/SuccessImg.svg';
import { SuccessContainer } from './styles';

export function Success() {
  return (
    <SuccessContainer>
      <section>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
      </section>
      <section>
        <ul>
          <li>
            <MapPin id='MapPinSuccess' size={32} weight='fill' />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </li>
          <li>
            <Timer id='TimerSuccess' size={32} weight='fill' />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </li>
          <li>
            <CurrencyDollar id='CurrencyDollarSuccess' size={32} />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </li>
        </ul>
        <img
          src={successImg}
          alt='Entregador em cima de sua lambreta indo entregar o pedido'
        ></img>
      </section>
    </SuccessContainer>
  );
}
