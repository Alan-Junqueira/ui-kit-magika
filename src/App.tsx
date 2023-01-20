import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/partials/NavBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
