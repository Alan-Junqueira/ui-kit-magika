import React, { ReactNode } from 'react';

import { ButtonContainer } from './styled';

import buttonIcon from '/assets/images/button-icon.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon?: boolean;
  variant: 'big' | 'small';
  full?: boolean;
  label: string;
  children?: ReactNode;
}

export const Button = ({
  withIcon,
  variant,
  full,
  label,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
      withIcon={withIcon}
      full={full}
      {...props}
    >
      {label} <img src={buttonIcon} alt="" />
      {children}
    </ButtonContainer>
  );
};
