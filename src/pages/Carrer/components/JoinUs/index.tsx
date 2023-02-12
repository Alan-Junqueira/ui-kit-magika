import React from 'react';
import { SectionInterface } from '../../../../@types/sectionInterface';
import { Polygon } from '../../../../components/Polygon';
import {
  JoinUsContainer,
  JoinUsContent,
  JoinUsDescription,
  JoinUsTitle
} from './styled';

interface IJoinUs extends SectionInterface {}

export const JoinUs = ({ ...props }: IJoinUs) => {
  return (
    <JoinUsContainer {...props}>
      <JoinUsContent>
        <JoinUsTitle>
          join us, get the best work experience.
          <Polygon variant="red" className="full" bottom={-40} left={50} />
          <Polygon variant="blue" className="full" right={25} top={-25} />
          <Polygon variant="orange" className="full" left={-88} top={40} />
          <Polygon variant="yellow" className="full" right={-10} top={50} />
          <Polygon variant="red" className="md" right={30} top={-20} />
          <Polygon variant="blue" className="md" left={10} top={-15} />
          <Polygon variant="yellow" className="md" right={50} bottom={-15} />
          <Polygon variant="blue" className="sm" left={10} top={-20} />
          <Polygon variant="red" className="sm" right={10} top={-20} />
          <Polygon variant="yellow" className="sm" right={-10} bottom={25} />
        </JoinUsTitle>
        <JoinUsDescription>
          Make it easier for all students to do learning through digital media
          with existing media making it easier for students to learn anywhere
          and anytime. Lorem ipsum dolor sit amet, lorem ipsum amet amet dolor.
          <br /> <br /> Make it easier for all students to do learning through
          digital media with existin.
        </JoinUsDescription>
      </JoinUsContent>
    </JoinUsContainer>
  );
};
