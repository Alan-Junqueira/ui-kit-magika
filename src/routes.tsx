import { Routes, Route } from 'react-router-dom';

import React from 'react';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Article } from './pages/Article';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/article" element={<Article />} />"
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
