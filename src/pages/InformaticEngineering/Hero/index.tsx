import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { Polygon } from '../../../components/Polygon';
import {
  InformaticHeroContainer,
  InformaticHeroContent,
  InformaticHeroDescription,
  InformaticHeroImage,
  InformaticHeroTexts,
  InformaticHeroTitle
} from './styled';

import womanHeroImage from '/assets/images/programs-informatic-engineering-hero-woman.png';

interface IInformaticHero extends SectionInterface {}

export const InformaticHero = ({
  ...props
}: IInformaticHero) => {
  return (
    <InformaticHeroContainer {...props}>
      <InformaticHeroContent>
        <InformaticHeroTexts className="texts">
          <InformaticHeroTitle>
            Let's learn informatics engineering
          </InformaticHeroTitle>
          <InformaticHeroDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </InformaticHeroDescription>
        </InformaticHeroTexts>
        <InformaticHeroImage className="image">
          <Polygon variant="blue" right={0} top={20} />
          <Polygon variant="red" right={15} bottom={40} />
          <Polygon variant="orange" right={-16} bottom={5} />
          <Polygon variant="orange" left={-16} top={30} />
          <Polygon variant="red" left={-16} bottom={15} />
          <img src={womanHeroImage} alt="" />
        </InformaticHeroImage>
      </InformaticHeroContent>
    </InformaticHeroContainer>
  );
};
