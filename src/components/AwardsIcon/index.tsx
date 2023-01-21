import React from 'react';
import { AwardsIconContainer } from './styled';

export interface IAwardsIcon extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'first' | 'second' | 'third';
}

import firstImage from '/assets/images/awards-first.svg';
import secondImage from '/assets/images/awards-second.svg';
import thirdImage from '/assets/images/awards-third.svg';

export const AwardsIcon = ({ variant, ...props }: IAwardsIcon) => {
  return (
    <AwardsIconContainer variant={variant} {...props}>
      {variant === 'first' && <img src={firstImage} alt="" />}
      {variant === 'second' && <img src={secondImage} alt="" />}
      {variant === 'third' && <img src={thirdImage} alt="" />}
    </AwardsIconContainer>
  );
};
