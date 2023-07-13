import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { GlobalStyle } from './styles/theme/global';
import { defaultTheme } from './styles/theme/default';
import { ClientProvider } from './contexts/clientContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ClientProvider>
          <Router />
        </ClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
