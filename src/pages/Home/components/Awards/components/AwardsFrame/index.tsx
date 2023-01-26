import React from 'react';
import { AwardsIcon } from '../../../../../../components/AwardsIcon';
import { AwardsFrameContainer } from './styled';

interface IAwardsFrame extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'first' | 'second' | 'third';
  name: string;
  date: string;
}

export const AwardsFrame = ({
  variant,
  name,
  date,
  ...props
}: IAwardsFrame) => {
  const formatDate = (date: string) => {
    let dateToFormat = new Date(date);

    let months = [
      'Jan',
      'Feb',
      'Mar',
      'May',
      'Jun',
      'Jul',
      'Apr',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    return `${dateToFormat.getDate()} ${
      months[dateToFormat.getMonth()]
    },${dateToFormat.getFullYear()}`;
  };
  return (
    <AwardsFrameContainer {...props}>
      <AwardsIcon variant={variant} />
      <span>{name}</span>
      <p>{formatDate(date)}</p>
    </AwardsFrameContainer>
  );
};
