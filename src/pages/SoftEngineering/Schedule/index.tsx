import { Clock } from 'phosphor-react';
import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import {
  ScheduleContainer,
  ScheduleContent,
  ScheduleDescription,
  ScheduleTime,
  ScheduleTimesContainer,
  ScheduleTitle
} from './styled';

import timePath from '/assets/images/time-path.png';

interface ISchedule extends SectionInterface {}

export const Schedule = ({ ...props }: ISchedule) => {
  return (
    <ScheduleContainer {...props}>
      <ScheduleContent>
        <ScheduleTitle>Schedule for new student admissions </ScheduleTitle>
        <ScheduleDescription>
          Make it easier for all students to do learning through digital media
          with existing media making it easier for students to learn anywhere
          and anytime.
        </ScheduleDescription>
        <ScheduleTimesContainer>
          <ScheduleTime>
            <div className="date">
              <strong>3</strong>
              <div>
                <span>November</span>
                <span>2021</span>
              </div>
            </div>
            <span className="time">
              <Clock weight="fill" />
              8:00 am - 3:00 pm
            </span>
            <p>Pendaftaran</p>
          </ScheduleTime>

          <ScheduleTime>
            <div className="date">
              <strong>4</strong>
              <div>
                <span>November</span>
                <span>2021</span>
              </div>
            </div>
            <span className="time">
              <Clock weight="fill" />
              8:00 am - 3:00 pm
            </span>
            <p>Pendaftaran</p>
          </ScheduleTime>

          <ScheduleTime>
            <div className="date">
              <strong>5</strong>
              <div>
                <span>November</span>
                <span>2021</span>
              </div>
            </div>
            <span className="time">
              <Clock weight="fill" />
              8:00 am - 3:00 pm
            </span>
            <p>Pendaftaran</p>
          </ScheduleTime>
        </ScheduleTimesContainer>
      </ScheduleContent>
    </ScheduleContainer>
  );
};
