import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import {
  ProgramsDescription,
  ProgramsMainInfo,
  ProgramsTitle
} from '../../styled';
import {
  InformaticEngineeringContainer,
  InformaticEngineeringContent
} from './styled';

import informaticEngineering from '/assets/images/programs-informatic-engineering.png';

interface IInformaticEngineering extends SectionInterface {}

export const InformaticEngineering = ({ ...props }: IInformaticEngineering) => {
  return (
    <InformaticEngineeringContainer {...props}>
      <InformaticEngineeringContent>
        <ProgramsMainInfo localImage="right">
          <div className="content">
            <ProgramsTitle>Informatic Engineering</ProgramsTitle>
            <ProgramsDescription>
              Make it easier for all students to do learning through digital
              media with existing media making it easier for students to learn
              anywhere and anytime. anywhere and anytime.{' '}
            </ProgramsDescription>
          </div>
          <div className="image">
            <img src={informaticEngineering} alt="" />
          </div>
        </ProgramsMainInfo>
      </InformaticEngineeringContent>
    </InformaticEngineeringContainer>
  );
};
