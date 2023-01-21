import { ThemeProvider } from 'styled-components';
import { AwardsIcon } from './components/AwardsIcon';
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
      <AwardsIcon variant='third'/>
    </ThemeProvider>
  );
}

export default App;
