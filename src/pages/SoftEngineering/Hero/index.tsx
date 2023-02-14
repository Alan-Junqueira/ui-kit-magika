import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { Polygon } from '../../../components/Polygon';
import {
  SoftwareEngineeringHeroContainer,
  SoftwareEngineeringHeroContent,
  SoftwareEngineeringHeroDescription,
  SoftwareEngineeringHeroImage,
  SoftwareEngineeringHeroTexts,
  SoftwareEngineeringHeroTitle
} from './styled';

import menHeroImage from '/assets/images/programs-software-engineering-hero.png';

interface ISoftwareEngineeringHero extends SectionInterface {}

export const SoftwareEngineeringHero = ({
  ...props
}: ISoftwareEngineeringHero) => {
  return (
    <SoftwareEngineeringHeroContainer {...props}>
      <SoftwareEngineeringHeroContent>
        <SoftwareEngineeringHeroTexts className="texts">
          <SoftwareEngineeringHeroTitle>
            Let's learn Software engineer
          </SoftwareEngineeringHeroTitle>
          <SoftwareEngineeringHeroDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </SoftwareEngineeringHeroDescription>
        </SoftwareEngineeringHeroTexts>
        <SoftwareEngineeringHeroImage className="image">
          <Polygon variant="blue" right={0} top={20} />
          <Polygon variant="red" right={15} bottom={40} />
          <Polygon variant="orange" right={-16} bottom={5} />
          <Polygon variant="orange" left={-16} top={30} />
          <Polygon variant="red" left={-16} bottom={15} />
          <img src={menHeroImage} alt="" />
        </SoftwareEngineeringHeroImage>
      </SoftwareEngineeringHeroContent>
    </SoftwareEngineeringHeroContainer>
  );
};
