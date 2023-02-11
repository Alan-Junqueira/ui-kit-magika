import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import {
  CarrerHeroContainer,
  CarrerHeroContent,
  CarrerHeroDescription,
  CarrerHeroQuoatation,
  CarrerHeroTitle
} from './styled';

import semicolonImage from '/assets/images/article-semicolon.svg';

interface ICarrerHero extends SectionInterface {}

export const CarrerHero = ({ ...props }: ICarrerHero) => {
  return (
    <CarrerHeroContainer {...props}>
      <CarrerHeroContent>
        <div className="texts">
          <CarrerHeroTitle>Buiild your career with brida</CarrerHeroTitle>
          <CarrerHeroDescription>
            Here are the reasons why objects can be the most popular school
            today
          </CarrerHeroDescription>
        </div>
        <CarrerHeroQuoatation>“</CarrerHeroQuoatation>
        <div className="image">
          <img src={semicolonImage} alt="" />
        </div>
      </CarrerHeroContent>
    </CarrerHeroContainer>
  );
};
