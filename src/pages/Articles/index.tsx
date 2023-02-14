import React from 'react';
import { Banner } from '../../components/Banner';
import { ArticleList } from './components/ArticlesList';
import { ArticleHero } from './components/Hero';
import { ArticlesContainer } from './styled';

export const Articles = () => {
  return (
    <ArticlesContainer>
      <ArticleHero id="articles-page--hero" />
      <ArticleList id="articles-page--article-lists"/>
      <Banner variant='secondary'/>
    </ArticlesContainer>
  );
};
