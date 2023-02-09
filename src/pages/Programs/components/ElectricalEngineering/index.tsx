import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import {
  ProgramsDescription,
  ProgramsMainInfo,
  ProgramsStatistics,
  ProgramsStatisticsCard,
  ProgramsTitle
} from '../../styled';
import { ElectricalEngineeringContainer, ElectricalEngineeringContent } from './styled';

import electricalEngineering from '/assets/images/programs-electrical-engineering.png';

interface IElectricalEngineering extends SectionInterface {}

export const ElectricalEngineering = ({ ...props }: IElectricalEngineering) => {
  return (
    <ElectricalEngineeringContainer {...props}>
      <ElectricalEngineeringContent>
        <ProgramsMainInfo localImage="right" bgImage="blue">
          <div className="content">
            <ProgramsTitle>Electrical Engineering</ProgramsTitle>
            <ProgramsDescription>
              Make it easier for all students to do learning through digital
              media with existing media making it easier for students to learn
              anywhere and anytime. anywhere and anytime.
            </ProgramsDescription>
          </div>
          <div className="image">
            <img src={electricalEngineering} alt="" />
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
      </ElectricalEngineeringContent>
    </ElectricalEngineeringContainer>
  );
};
