import { ThemeProvider } from 'styled-components';
import { Article } from './components/Article';
import { FeatureCard } from './components/FeaturedCard';
import { NavBar } from './components/partials/NavBar';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import article1 from '/assets/images/article-1.png';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
