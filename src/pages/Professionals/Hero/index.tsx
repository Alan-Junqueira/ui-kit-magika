import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import {
  ProfessionalsHeroContainer,
  ProfessionalsHeroContent,
  ProfessionalsHeroTitle,
  ProfessionalsHeroDescription,
  ProfessionalsHeroImage,
  ProfessionalsHeroTexts
} from './styled';

import professionalImage from '/assets/images/professionals-hero.png';

interface IProfessionalsHero extends SectionInterface {}

export const ProfessionalsHero = ({ ...props }: IProfessionalsHero) => {
  return (
    <ProfessionalsHeroContainer {...props}>
      <ProfessionalsHeroContent>
        <ProfessionalsHeroTexts>
          <ProfessionalsHeroTitle>
            Teachers with the best qualifications
          </ProfessionalsHeroTitle>
          <ProfessionalsHeroDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </ProfessionalsHeroDescription>
        </ProfessionalsHeroTexts>
        <ProfessionalsHeroImage>
          <img
            src={professionalImage}
            alt="a man wearing a black shirt and using glass"
          />
        </ProfessionalsHeroImage>
      </ProfessionalsHeroContent>
    </ProfessionalsHeroContainer>
  );
};
