import React, { useState } from 'react';
import { Article } from '../../../../components/Article';
import { Button } from '../../../../components/Button';
import { List } from '../../../../components/List';
import {
  ArticleFilterListButton,
  ArticlesListContainer,
  ArticlesListContent,
  ArticlesListFilterContainer,
  ArticlesListFilterContent
} from './styled';

import article1 from '/assets/images/article-1.png';
import article2 from '/assets/images/article-2.png';
import article3 from '/assets/images/article-3.png';
import article4 from '/assets/images/article-4.png';
import article5 from '/assets/images/article-5.png';
import article6 from '/assets/images/article-6.png';
import article7 from '/assets/images/article-7.png';
import article8 from '/assets/images/article-8.png';
import article9 from '/assets/images/article-9.png';

import listPolygon from '/assets/images/list-polygon.svg';

type TemporaryArticleProps = {
  image: string;
  title: string;
  description: string;
  contentType: 'design' | 'branding' | 'illustration' | 'motion' | 'software';
};

const TEMPORARY_TITLE = 'Tips on choosing a university';
const TEMPORARY_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';

const TEMPORARY_ARTICLES: TemporaryArticleProps[] = [
  {
    image: article1,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'branding'
  },
  {
    image: article2,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'design'
  },
  {
    image: article3,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'illustration'
  },
  {
    image: article4,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'motion'
  },
  {
    image: article5,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'software'
  },
  {
    image: article6,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'branding'
  },
  {
    image: article7,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'design'
  },
  {
    image: article8,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'illustration'
  },
  {
    image: article9,
    title: TEMPORARY_TITLE,
    description: TEMPORARY_DESCRIPTION,
    contentType: 'motion'
  }
];

interface IArticlesListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticlesList = ({ ...props }: IArticlesListProps) => {
  type filterActiveProps =
    | 'show-all'
    | 'design'
    | 'branding'
    | 'illustration'
    | 'motion'
    | 'software';

  const [filterActive, setFilterActive] =
    useState<filterActiveProps>('show-all');
  const [articlesToShow, setArticlesToShow] =
    useState<TemporaryArticleProps[]>(TEMPORARY_ARTICLES);

  const changeArticlesToShow = (articleType: filterActiveProps) => {
    if (articleType === 'show-all') {
      setFilterActive(articleType);
      setArticlesToShow(TEMPORARY_ARTICLES);
      return;
    }
    let filteredArticles = TEMPORARY_ARTICLES.filter((article) => {
      return article.contentType === articleType;
    });

    setFilterActive(articleType);
    setArticlesToShow(filteredArticles);
  };
  return (
    <ArticlesListContainer {...props}>
      <ArticlesListFilterContainer>
        <ArticlesListFilterContent>
          <ArticleFilterListButton
            className={filterActive === 'show-all' ? 'active' : ''}
            onClick={() => changeArticlesToShow('show-all')}
          >
            Show All
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'design' ? 'active' : ''}
            onClick={() => changeArticlesToShow('design')}
          >
            Design
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'branding' ? 'active' : ''}
            onClick={() => changeArticlesToShow('branding')}
          >
            Branding
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'illustration' ? 'active' : ''}
            onClick={() => changeArticlesToShow('illustration')}
          >
            Illustration
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'motion' ? 'active' : ''}
            onClick={() => changeArticlesToShow('motion')}
          >
            Motion
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
          <ArticleFilterListButton
            className={filterActive === 'software' ? 'active' : ''}
            onClick={() => changeArticlesToShow('software')}
          >
            Software
            <img src={listPolygon} alt="" />
          </ArticleFilterListButton>
        </ArticlesListFilterContent>
      </ArticlesListFilterContainer>

      <ArticlesListContent>
        {articlesToShow.map((article, index) => (
          <Article
            description={article.description}
            image={article.image}
            title={article.title}
            key={index}
          />
        ))}
      </ArticlesListContent>
      <div className="button">
        <Button label="Show More" variant="big" />
      </div>
    </ArticlesListContainer>
  );
};
