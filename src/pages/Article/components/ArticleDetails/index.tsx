import React from 'react';
import { ArticleDetailsContainer, ArticleDetailsContent } from './styled';

interface IArticleDetails extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleDetails = ({ ...props }: IArticleDetails) => {
  return (
    <ArticleDetailsContainer>
      <ArticleDetailsContent>Article Details</ArticleDetailsContent>
    </ArticleDetailsContainer>
  );
};
