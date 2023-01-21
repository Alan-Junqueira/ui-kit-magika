import { ThemeProvider } from 'styled-components';
import { Banner } from './components/Banner';
import { NavBar } from './components/partials/NavBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      <Banner variant='primary'/>
      <Banner variant='secondary'/>
    </ThemeProvider>
  );
}

export default App;
