import React, { useEffect, useState } from 'react';
import { ArticleProps } from '../../../../@types/article';
import { TEMPORARY_ARTICLES } from '../../../../services/database/articles';
import { firstLetterUppercase } from '../../../../utils/firstLetterUppercase';
import { getMonth } from '../../../../utils/getMonth';
import {
  ArticleHeroContainer,
  ArticleHeroContent,
  ArticleHeroDescription,
  ArticleHeroInByDate,
  ArticleHeroMainContent,
  ArticleHeroQuotation,
  ArticleHeroTitle
} from './styled';
interface IArticlesHero extends React.HTMLAttributes<HTMLDivElement> {
  articleId: number;
}

export const ArticleHero = ({ articleId, ...props }: IArticlesHero) => {
  const [articleToShow, setArticleToShow] = useState<ArticleProps>(
    TEMPORARY_ARTICLES[0]
  );

  useEffect(() => {
    TEMPORARY_ARTICLES.forEach((article) => {
      if (article.id === articleId) {
        setArticleToShow(article);
      }
    });
  }, [articleId]);
  return (
    <ArticleHeroContainer {...props}>
      <ArticleHeroContent bgImage={articleToShow.image}>
        <ArticleHeroMainContent>
          <div className="content">
            <ArticleHeroTitle>{articleToShow.title}</ArticleHeroTitle>
            <ArticleHeroInByDate>
              <span className="in">
                <small>In</small>{' '}
                {firstLetterUppercase(articleToShow.contentType)}
              </span>
              <span className="by">
                <small>By</small> {articleToShow.owner}
              </span>
              <span className="date">
                <small>Date</small>
                {articleToShow.createdAt.getDate()}{' '}
                {getMonth(articleToShow.createdAt.getMonth())},{' '}
                {articleToShow.createdAt.getFullYear()}
              </span>
            </ArticleHeroInByDate>
            <ArticleHeroDescription>
              {articleToShow.description}
            </ArticleHeroDescription>
          </div>
          <ArticleHeroQuotation>"</ArticleHeroQuotation>
        </ArticleHeroMainContent>
        <div className="image"></div>
      </ArticleHeroContent>
    </ArticleHeroContainer>
  );
};
