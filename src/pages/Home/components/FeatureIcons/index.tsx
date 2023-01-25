import React from 'react';
import { FeatureCard } from '../../../../components/FeaturedCard';
import { FeatureIconsContent, FeatureIconstContainer } from './styled';

interface IFeaturedIcons extends React.HTMLAttributes<HTMLDivElement> {}

export const FeatureIcons = ({ ...props }: IFeaturedIcons) => {
  return (
    <FeatureIconstContainer {...props}>
      <FeatureIconsContent>
        <FeatureCard
          label="Amet minim mollit non deserunt ullamco."
          variant="blue"
        />
        <FeatureCard
          label="Amet minim mollit non deserunt ullamco."
          variant="red"
        />
        <FeatureCard
          label="Amet minim mollit non deserunt ullamco."
          variant="orange"
        />
      </FeatureIconsContent>
    </FeatureIconstContainer>
  );
};
