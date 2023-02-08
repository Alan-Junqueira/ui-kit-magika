import React from 'react';
import {
  ProgramsHeroContainer,
  ProgramsHeroContent,
  ProgramsHeroDescription,
  ProgramsHeroDots,
  ProgramsHeroTexts,
  ProgramsHeroTitle
} from './styled';

import semicolonImage from '/assets/images/article-semicolon.svg';

import { SectionInterface } from '../../../../@types/sectionInterface';

export const ProgramsHero = ({ ...props }: SectionInterface) => {
  return (
    <ProgramsHeroContainer {...props}>
      <ProgramsHeroContent>
        <ProgramsHeroTexts>
          <ProgramsHeroTitle>Some of the majors in brida</ProgramsHeroTitle>
          <ProgramsHeroDescription>
            Here are the reasons why objects can be the most popular school
            today
          </ProgramsHeroDescription>
        </ProgramsHeroTexts>
        <ProgramsHeroDots className="quotation">“</ProgramsHeroDots>
        <ProgramsHeroDots className="semicolon">
          <img src={semicolonImage} alt="" />
        </ProgramsHeroDots>
      </ProgramsHeroContent>
    </ProgramsHeroContainer>
  );
};
