import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { GlobalStyle } from './styles/theme/global';
import { defaultTheme } from './styles/theme/default';
import { ClientProvider } from './contexts/clientContext';
import { CoffeeProvider } from './contexts/coffeesContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <CoffeeProvider>
            <ClientProvider>
              <Router />
            </ClientProvider>
          </CoffeeProvider>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
