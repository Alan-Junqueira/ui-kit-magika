import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NavBar } from './components/partials/NavBar';
import { NotFound } from './pages/NotFound';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import Routes from './routes';
import { Footer } from './components/partials/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <NavBar />
        <Routes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
