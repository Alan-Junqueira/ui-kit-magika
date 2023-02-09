import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import {
  ProgramsDescription,
  ProgramsMainInfo,
  ProgramsStatistics,
  ProgramsStatisticsCard,
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
        <ProgramsMainInfo localImage="right" bgImage="yellow">
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
        <ProgramsStatistics>
          <ProgramsStatisticsCard variant="transparent">
            <strong>1029+</strong>
            <small>Worldwide Student</small>
          </ProgramsStatisticsCard>
          <ProgramsStatisticsCard variant="full">
            <strong>73+</strong>
            <small>Awwards</small>
          </ProgramsStatisticsCard>
        </ProgramsStatistics>
      </InformaticEngineeringContent>
    </InformaticEngineeringContainer>
  );
};
