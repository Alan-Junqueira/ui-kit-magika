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
    <ArticleContainer {...props}>
      <img src={image} alt="" />
      <section id="article-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button label="Read More" variant="big" />
      </section>
    </ArticleContainer>
  );
};
