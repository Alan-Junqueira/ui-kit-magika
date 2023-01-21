import { ThemeProvider } from 'styled-components';
import { Banner } from './components/Banner';
import { List } from './components/List';
import { NavBar } from './components/partials/NavBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      <List label='World Class' variant='sm'/>
    </ThemeProvider>
  );
}

export default App;
