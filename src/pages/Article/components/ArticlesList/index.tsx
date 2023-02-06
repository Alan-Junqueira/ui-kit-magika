import React from 'react';
import { Article } from '../../../../components/Article';
import {
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
  return (
    <ArticlesListContainer>
      <ArticlesListFilterContainer>
        <ArticlesListFilterContent>
          
        </ArticlesListFilterContent>
      </ArticlesListFilterContainer>

      <ArticlesListContent>
        {TEMPORARY_ARTICLES.map((article, index) => (
          <Article
            description={article.description}
            image={article.image}
            title={article.title}
            key={index}
          />
        ))}
      </ArticlesListContent>
    </ArticlesListContainer>
  );
};
