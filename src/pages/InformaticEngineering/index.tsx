import React from 'react';
import { SectionInterface } from '../../@types/sectionInterface';
import { Polygon } from '../../components/Polygon';
import {
  InformaticEngineeringContainer,
  InformaticEngineeringContent,
  InformaticEngineeringHeroDescription,
  InformaticEngineeringHeroImage,
  InformaticEngineeringHeroTexts,
  InformaticEngineeringHeroTitle
} from './styled';

import womanHeroImage from '/assets/images/programs-informatic-engineering-hero-woman.png';

interface IInformaticEngineering extends SectionInterface {}

export const InformaticsEngineering = ({
  ...props
}: IInformaticEngineering) => {
  return (
    <InformaticEngineeringContainer {...props}>
      <InformaticEngineeringContent>
        <InformaticEngineeringHeroTexts className="texts">
          <InformaticEngineeringHeroTitle>
            Let's learn informatics engineering
          </InformaticEngineeringHeroTitle>
          <InformaticEngineeringHeroDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </InformaticEngineeringHeroDescription>
        </InformaticEngineeringHeroTexts>
        <InformaticEngineeringHeroImage className="image">
          <Polygon variant="blue" right={0} top={20} />
          <Polygon variant="red" right={15} bottom={40} />
          <Polygon variant="orange" right={-16} bottom={5} />
          <Polygon variant="orange" left={-16} top={30} />
          <Polygon variant="red" left={-16} bottom={15} />
          <img src={womanHeroImage} alt="" />
        </InformaticEngineeringHeroImage>
      </InformaticEngineeringContent>
    </InformaticEngineeringContainer>
  );
};
