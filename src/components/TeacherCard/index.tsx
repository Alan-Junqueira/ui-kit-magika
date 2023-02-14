import React from 'react';
import {
  TeacherCardContainer,
  TeacherCardName,
  TeacherCardRole,
  TeacherCardTexts
} from './styled';

interface ITeacherCard extends React.HTMLAttributes<HTMLDivElement> {
  teacherImage: string;
  teacherRole: string;
  teacherName: string;
  variant: 'fst' | 'snd' | 'trd' | 'fth';
}

export const TeacherCard = ({
  teacherImage,
  teacherName,
  teacherRole,
  variant,
  ...props
}: ITeacherCard) => {
  return (
    <TeacherCardContainer {...props}>
      <img src={teacherImage} alt="" />
      <TeacherCardTexts variant={variant}>
        <TeacherCardName>{teacherName}</TeacherCardName>
        <TeacherCardRole>{teacherRole}</TeacherCardRole>
      </TeacherCardTexts>
    </TeacherCardContainer>
  );
};
