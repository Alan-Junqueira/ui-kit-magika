import React, { useEffect, useState } from 'react';
import { ArticleProps } from '../../../@types/article';
import { TEMPORARY_ARTICLES } from '../../../services/database/articles';
import { ArticleHeroContainer } from './styled';

interface IArticlesHero extends React.HTMLAttributes<HTMLDivElement> {
  articleId: number;
}

export const ArticleHero = ({ articleId, ...props }: IArticlesHero) => {
  const [articleToShow, setArticleToShow] = useState<ArticleProps>({
    id: 1,
    image: '',
    title: '',
    description: '',
    contentType: 'design'
  });

  console.log(articleId)

  useEffect(() => {
    TEMPORARY_ARTICLES.forEach((article) => {
      if (article.id === articleId) {
        setArticleToShow(article);
      }
    });
  }, [articleId]);
  return (
    <ArticleHeroContainer {...props}>
      <img src={articleToShow.image} alt="" />
    </ArticleHeroContainer>
  );
};
