import React from 'react';
import { Banner } from '../../components/Banner';
import { ProfessionalsHero } from './Hero';
import { ProfessionalsContainer } from './styled';

export const Professionals = () => {
  return (
    <ProfessionalsContainer>
      <ProfessionalsHero id="professionals--hero" />
      <Banner variant="secondary" />
    </ProfessionalsContainer>
  );
};
