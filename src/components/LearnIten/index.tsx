import React from 'react';
import { LearnItenContainer } from './styled';

interface ILearnIten extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  bgColor: 'yellow' | 'red' | 'blue' | 'orange';
}

export const LearnIten = ({ label, bgColor, ...props }: ILearnIten) => {
  return (
    <LearnItenContainer bgColor={bgColor} {...props}>
      {label}
    </LearnItenContainer>
  );
};
