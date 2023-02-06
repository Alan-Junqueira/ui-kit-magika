import React from 'react';
import { ArticlesList } from './components/ArticlesList';
import { ArticleHero } from './components/Hero';

export const Article = () => {
  return (
    <>
      <ArticleHero id="article-page--hero" />
      <ArticlesList id="article-page--article-lists"/>
    </>
  );
};
