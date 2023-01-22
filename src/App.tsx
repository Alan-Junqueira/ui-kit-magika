import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NavBar } from './components/partials/NavBar';
import { NotFound } from './pages/NotFound';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import article1 from '/assets/images/article-1.png';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
