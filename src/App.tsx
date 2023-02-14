import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import Routes from './routes';
import { Footer } from './components/partials/Footer';
import { NavBar } from './components/partials/NavBar';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
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
