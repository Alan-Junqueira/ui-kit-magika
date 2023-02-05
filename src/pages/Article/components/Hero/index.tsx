import React from 'react';
import { ArticleHeaderContent, ArticleHeroContainer, ArticleHeroContent, ArticleMainContent } from './styled';

import semicolonImage from '/assets/images/article-semicolon.svg';
import article1 from '/assets/images/article-1.png';
import { Button } from '../../../../components/Button';

interface IHero extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleHero = ({ ...props }: IHero) => {
  return (
    <ArticleHeroContainer {...props}>
      <ArticleHeroContent>
        <ArticleHeaderContent>
          <div className="header-texts">
            <h1>Blog Article</h1>
            <p>
              Here are the reasons why objects can be the most popular school
              today
            </p>
          </div>
          <div className="image">
            <img src={semicolonImage} alt="" />
          </div>
        </ArticleHeaderContent>
        <ArticleMainContent bgImage={article1}>
          <div className="image">
            {/* <img src={article1} alt="" /> */}
          </div>
          <div className="main-content">
            <h2>Tips belajar menjadi menyenangkan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
              facilisis mauris sit amet massa.
            </p>
            <Button label="Read more" variant="big" />
          </div>
        </ArticleMainContent>
        <h1>Teste</h1>
        <p>teste</p>
      </ArticleHeroContent>
    </ArticleHeroContainer>
  );
};
