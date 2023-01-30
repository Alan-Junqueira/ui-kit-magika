import React from 'react';
import {
  AboutUsHeroContainer,
  AboutUsHeroContainerTitle,
  AboutUsHeroContent,
  AboutUsHeroQuoatation,
  AboutUsHeroDescription
} from './styled';

interface IAboutUsHero extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutUsHero = ({ ...props }: IAboutUsHero) => {
  return (
    <AboutUsHeroContainer {...props}>
      <AboutUsHeroContent>
        <AboutUsHeroContainerTitle>
          Why can it be the most favorite school.
        </AboutUsHeroContainerTitle>
        <AboutUsHeroDescription>
          Here are the reasons why objects can be the most popular school today
        </AboutUsHeroDescription>
        <AboutUsHeroQuoatation>“</AboutUsHeroQuoatation>
      </AboutUsHeroContent>
    </AboutUsHeroContainer>
  );
};
