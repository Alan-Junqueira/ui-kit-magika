import React, { useState } from 'react';
import Pulse from 'react-reveal/Pulse';

import { ArticleProps } from '../../../../@types/article';
import { Article } from '../../../../components/Article';
import { Button } from '../../../../components/Button';
import { TEMPORARY_ARTICLES } from '../../../../services/database/articles';
import {
  ArticleFilterListButton,
  ArticleListIten,
  ArticleListContainer,
  ArticleListContent,
  ArticleListFilterContainer,
  ArticleListFilterContent
} from './styled';

import listPolygon from '/assets/images/list-polygon.svg';

interface IArticleListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleList = ({ ...props }: IArticleListProps) => {
  type filterActiveProps =
    | 'show-all'
    | 'design'
    | 'branding'
    | 'illustration'
    | 'motion'
    | 'software';

  const [filterActive, setFilterActive] =
    useState<filterActiveProps>('show-all');
  const [articleToShow, setArticleToShow] =
    useState<ArticleProps[]>(TEMPORARY_ARTICLES);

  const changeArticleToShow = (articleType: filterActiveProps) => {
    if (articleType === 'show-all') {
      setFilterActive(articleType);
      setArticleToShow(TEMPORARY_ARTICLES);
      return;
    }
    let filteredArticle = TEMPORARY_ARTICLES.filter((article) => {
      return article.contentType === articleType;
    });

    setFilterActive(articleType);
    setArticleToShow(filteredArticle);
  };
  return (
    <ArticleListContainer {...props}>
      <ArticleListFilterContainer>
        <ArticleListFilterContent>
          <ArticleFilterListButton
            className={filterActive === 'show-all' ? 'active' : ''}
            onClick={() => changeArticleToShow('show-all')}
          >
            Show All
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'design' ? 'active' : ''}
            onClick={() => changeArticleToShow('design')}
          >
            Design
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'branding' ? 'active' : ''}
            onClick={() => changeArticleToShow('branding')}
          >
            Branding
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'illustration' ? 'active' : ''}
            onClick={() => changeArticleToShow('illustration')}
          >
            Illustration
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'motion' ? 'active' : ''}
            onClick={() => changeArticleToShow('motion')}
          >
            Motion
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'software' ? 'active' : ''}
            onClick={() => changeArticleToShow('software')}
          >
            Software
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
        </ArticleListFilterContent>
      </ArticleListFilterContainer>

      <ArticleListContent>
        {articleToShow.map((article, index) => (
          <Pulse>
            <ArticleListIten key={index} to={`/article/${article.id}`}>
              <Article
                description={article.description}
                image={article.image}
                title={article.title}
              />
            </ArticleListIten>
          </Pulse>
        ))}
      </ArticleListContent>
      <div className="button">
        <Button label="Show More" variant="big" />
      </div>
    </ArticleListContainer>
  );
};
