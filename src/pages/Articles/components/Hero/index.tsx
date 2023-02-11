import React from 'react';
import {
  ArticlesHeaderContent,
  ArticlesHeroContainer,
  ArticlesHeroContent,
  ArticlesMainContent
} from './styled';

import { Button } from '../../../../components/Button';

import semicolonImage from '/assets/images/article-semicolon.svg';
import articles1 from '/assets/images/article-1.png';

interface IHero extends React.HTMLAttributes<HTMLDivElement> {}

export const ArticleHero = ({ ...props }: IHero) => {
  return (
    <ArticlesHeroContainer {...props}>
      <ArticlesHeroContent>
        <ArticlesHeaderContent>
          <div className="header-texts">
            <h1>Blog Articles</h1>
            <p>
              Here are the reasons why objects can be the most popular school
              today
            </p>
          </div>
          <div className="image">
            <img src={semicolonImage} alt="" />
          </div>
        </ArticlesHeaderContent>
        <ArticlesMainContent bgImage={articles1}>
          <div className="image"></div>
          <div className="main-content">
            <h2>Tips belajar menjadi menyenangkan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
              facilisis mauris sit amet massa.
            </p>
            <Button label="Read more" variant="big" />
          </div>
        </ArticlesMainContent>
      </ArticlesHeroContent>
    </ArticlesHeroContainer>
  );
};
