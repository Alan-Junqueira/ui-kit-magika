import { useParams } from 'react-router-dom';
import { ArticleDetails } from './components/ArticleDetails';

import { ArticleHero } from './components/Hero';

export const Article = () => {
  const params = useParams();

  return (
    <>
      <ArticleHero articleId={params.id ? +params.id : 1} id="article--hero" />
      <ArticleDetails id="article--details" />
    </>
  );
};
