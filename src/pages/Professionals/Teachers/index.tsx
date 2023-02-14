import React from 'react';
import { SectionInterface } from '../../../@types/sectionInterface';
import { TeacherCard } from '../../../components/TeacherCard';
import { TEMPORARY_TEACHERS } from '../../../services/database/teachers';
import { TeachersContainer, TeachersContent } from './styled';

interface ITeacher extends SectionInterface {}

export const Teachers = ({ ...props }: ITeacher) => {
  return (
    <TeachersContainer {...props}>
      <TeachersContent>
        {TEMPORARY_TEACHERS.map((teacher, index) => (
          <TeacherCard
            key={index}
            teacherImage={teacher.teacherImage}
            teacherName={teacher.teacherName}
            teacherRole={teacher.teacherRole}
            variant={teacher.variant}
          />
        ))}
      </TeachersContent>
    </TeachersContainer>
  );
};
