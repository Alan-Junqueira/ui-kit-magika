import React from 'react';
import { FeaturedCardContainer } from './styled';

import featurePlane from '/assets/images/feature-cards-1.svg';
import featureGlobe from '/assets/images/feature-cards-2.svg';
import featureWallet from '/assets/images/feature-cards-3.svg';

interface IFeatureCard extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'blue' | 'red' | 'orange';
  label: string;
}

export const FeatureCard = ({ variant, label, ...props }: IFeatureCard) => {
  return (
    <FeaturedCardContainer variant={variant} {...props}>
      {variant === 'blue' && (
        <div>
          {' '}
          <img src={featurePlane} alt="" />
        </div>
      )}
      {variant === 'red' && (
        <div>
          <img src={featureGlobe} alt="" />
        </div>
      )}
      {variant === 'orange' && (
        <div>
          <img src={featureWallet} alt="" />
        </div>
      )}
      <p>{label}</p>
    </FeaturedCardContainer>
  );
};
