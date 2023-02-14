import { Routes, Route } from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article';
import { Contact } from './pages/Contact';
import { Programs } from './pages/Programs';
import { Carrer } from './pages/Carrer';
import { InformaticsEngineering } from './pages/InformaticEngineering';
import { SoftwareEngineering } from './pages/SoftEngineering';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/article" element={<Articles />} />"
      <Route path="/article/:id" element={<Article />} />"
      <Route path="/contact" element={<Contact />} />
      <Route path="/programs" element={<Programs />} />
      <Route
        path="/programs/informatics-engineerings"
        element={<InformaticsEngineering />}
      />
      <Route
        path="/programs/software-engineerings"
        element={<SoftwareEngineering />}
      />
      <Route path="/carrer" element={<Carrer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
