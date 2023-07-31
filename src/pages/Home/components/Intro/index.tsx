import { IntroContainer } from './styles';
import cupIntroImg from './../../../../assets/IntroImg.svg';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Intro() {
  const theme = useTheme();

  return (
    <IntroContainer>
      <div>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div>
          <div>
            <span>
              <ShoppingCart id='ShopCartIntro' size={32} weight='fill' />
              Compra simples e segura
            </span>

            <span>
              <Timer id='TimerIntro' size={32} weight='fill' />
              Entrega rápida e rastreada
            </span>
          </div>
          <div>
            <span>
              <Package id='PackageIntro' size={32} weight='fill' />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Coffee id='CoffeeIntro' size={32} weight='fill' />O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>
      <img src={cupIntroImg} />
    </IntroContainer>
  );
}
