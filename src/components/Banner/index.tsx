import React from 'react';
import { BannerContainer } from './styled';

export interface IBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'primary' | 'secondary';
}

export const Banner = ({ variant, ...props }: IBannerProps) => {
  let year = new Date().getFullYear();
  return (
    <BannerContainer variant={variant} {...props}>
      <div className="content">
        BEST UNIVERSITY IN {year} ❤️ BEST UNIVERSITY IN {year}❤️ BEST UNIVERSITY
        IN {year} ❤️ BEST UNIVERSITY IN {year} ❤️ BEST UNIVERSITY IN {year}❤️
        BEST UNIVERSITY IN {year} ❤️
      </div>
    </BannerContainer>
  );
};
