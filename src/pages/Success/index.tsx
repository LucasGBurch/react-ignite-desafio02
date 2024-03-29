import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import successImg from '../../assets/SuccessImg.svg';
import { SuccessContainer } from './styles';
import { useContext } from 'react';
import { ClientContext } from '../../contexts/clientContext';

export function Success() {
  const { client, paymentType } = useContext(ClientContext);
  // console.log(client)

  const paymentTypeText =
    paymentType === 'credit'
      ? 'Cartão de Crédito'
      : paymentType === 'debit'
      ? 'Cartão de Débito'
      : paymentType === 'cash'
      ? 'Dinheiro'
      : 'Forma de pagamento';

  return (
    <SuccessContainer>
      <section>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </section>
      <section>
        <ul>
          <li>
            <MapPin id='MapPinSuccess' size={32} weight='fill' />
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {client
                    ? `${client.Street}, ${client.Number}`
                    : 'Rua dos Dados Estáticos João Daniel Martinelli, 102'}
                </strong>
              </span>
              <span>
                {client
                  ? `${client.Neighborhood} - ${client.City}, ${client.FederativeUnit}`
                  : 'Farrapos - Porto Alegre, RS'}
              </span>
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
              <span>Pagamento na entrega</span>
              <span>
                <strong>
                  {paymentType ? paymentTypeText : 'Cartão de Dados Estáticos'}
                </strong>
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
