import React from 'react';
import { Button } from '../Button';
import { ArticleContainer } from './styled';

interface IArticle extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
}

export const Article = ({ title, description, image, ...props }: IArticle) => {
  return (
    <ArticleContainer {...props} image={image}>
      <div></div>
      <section id="article-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
    </ArticleContainer>
  );
};
