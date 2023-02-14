import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { Polygon } from '../../../components/Polygon';
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
          <Polygon variant='blue' top={-42} right={10}/>
          <Polygon variant='orange' top={20} left={-18}/>
          <Polygon variant='orange' bottom={10} right={-52}/>
          <Polygon variant='red' bottom={20} left={-52}/>
          <div className="backSquare"></div>
          <img
            src={professionalImage}
            alt="a man wearing a black shirt and using glass"
          />
        </ProfessionalsHeroImage>
      </ProfessionalsHeroContent>
    </ProfessionalsHeroContainer>
  );
};
