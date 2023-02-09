import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import {
  ProgramsDescription,
  ProgramsMainInfo,
  ProgramsStatistics,
  ProgramsStatisticsCard,
  ProgramsTitle
} from '../../styled';
import { SoftwareEnginerContainer, SoftwareEnginerContent } from './styled';

import softwareEnginer from '/assets/images/programs-software-enginer.png';

interface ISoftwareEnginer extends SectionInterface {}

export const SoftwareEnginer = ({ ...props }: ISoftwareEnginer) => {
  return (
    <SoftwareEnginerContainer {...props}>
      <SoftwareEnginerContent>
        <ProgramsMainInfo localImage="left" bgImage="orange">
          <div className="content">
            <ProgramsTitle>Software Enginer</ProgramsTitle>
            <ProgramsDescription>
              Make it easier for all students to do learning through digital
              media with existing media making it easier for students to learn
              anywhere and anytime. anywhere and anytime.
            </ProgramsDescription>
          </div>
          <div className="image">
            <img src={softwareEnginer} alt="" />
          </div>
        </ProgramsMainInfo>
        <ProgramsStatistics positionRight>
          <ProgramsStatisticsCard variant="transparent">
            <strong>1029+</strong>
            <small>Worldwide Student</small>
          </ProgramsStatisticsCard>
          <ProgramsStatisticsCard variant="full">
            <strong>73+</strong>
            <small>Awwards</small>
          </ProgramsStatisticsCard>
        </ProgramsStatistics>
      </SoftwareEnginerContent>
    </SoftwareEnginerContainer>
  );
};
