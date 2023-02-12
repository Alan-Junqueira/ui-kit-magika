import React from 'react';
import { ListContainer } from './styled';

import checkIcon from '/assets/images/check.svg';

export interface IListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'sm' | 'sm-2' | 'md' | 'lg';
  label: string;
  color: 'light' | 'dark';
  imageBg?: 'primary' | 'blue' | 'red'
}

export const List = ({ label, variant, imageBg, ...props }: IListProps) => {
  return (
    <ListContainer variant={variant} imageBg={imageBg ? imageBg : 'primary'} {...props}>
      <div className="image">
        <img src={checkIcon} alt="" />
      </div>
      <span>{label}</span>
    </ListContainer>
  );
};
