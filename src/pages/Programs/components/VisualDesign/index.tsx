import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import {
  ProgramsDescription,
  ProgramsMainInfo,
  ProgramsStatistics,
  ProgramsStatisticsCard,
  ProgramsTitle
} from '../../styled';
import { VisualDesignContainer, VisualDesignContent } from './styled';

import visualDesign from '/assets/images/programs-visual-design.png';

interface IVisualDesign extends SectionInterface {}

export const VisualDesign = ({ ...props }: IVisualDesign) => {
  return (
    <VisualDesignContainer {...props}>
      <VisualDesignContent>
        <ProgramsMainInfo localImage="left" bgImage="red">
          <div className="content">
            <ProgramsTitle>Visual Designer</ProgramsTitle>
            <ProgramsDescription>
              Make it easier for all students to do learning through digital
              media with existing media making it easier for students to learn
              anywhere and anytime. anywhere and anytime.
            </ProgramsDescription>
          </div>
          <div className="image">
            <img src={visualDesign} alt="" />
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
      </VisualDesignContent>
    </VisualDesignContainer>
  );
};
