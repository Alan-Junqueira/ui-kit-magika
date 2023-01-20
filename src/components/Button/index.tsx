import React from 'react';

import { ButtonContainer } from './styled';

import buttonIcon from '/assets/images/button-icon.svg';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean;
  variant: 'big' | 'small';
  full?: boolean;
  label: string;
}

export const Button = ({
  withIcon,
  variant,
  full,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      withIcon={withIcon}
      full={full}
      type="button"
      {...props}
    >
      {label} <img src={buttonIcon} alt="" />
    </ButtonContainer>
  );
};
