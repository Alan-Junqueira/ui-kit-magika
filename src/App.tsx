import { ThemeProvider } from 'styled-components';
import { Article } from './components/Article';
import { NavBar } from './components/partials/NavBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import article1 from '/assets/images/article-1.png'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      <Article
        title="Tips belajar menjadi menyenangkan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet mass"
        image={article1}
      />
    </ThemeProvider>
  );
}

export default App;
