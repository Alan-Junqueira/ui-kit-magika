import React from 'react';
import { useParams } from 'react-router-dom';

import { ArticleHero } from './components/Hero';

export const Article = () => {
  const params = useParams();

  return (
    <>
      <ArticleHero articleId={params.id ? +params.id : 1} />
    </>
  );
};
