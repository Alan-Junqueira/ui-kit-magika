import React from 'react';
import { BannerContainer } from './styled';

export interface IBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary';
  delay?: number;
}

export const Banner = ({ variant, delay, ...props }: IBannerProps) => {
  let year = new Date().getFullYear();
  return (
    <BannerContainer variant={variant} delay={delay} {...props}>
      <div className="content">
        BEST UNIVERSITY IN {year} ❤️ BEST UNIVERSITY IN {year}❤️ BEST UNIVERSITY
        IN {year} ❤️ BEST UNIVERSITY IN {year} ❤️ BEST UNIVERSITY IN {year}❤️
        BEST UNIVERSITY IN {year} ❤️
      </div>
    </BannerContainer>
  );
};
