import React from 'react';
import { Banner } from '../../components/Banner';
import { ProfessionalsHero } from './Hero';
import { ProfessionalsContainer } from './styled';
import { Teachers } from './Teachers';
import { TeachMethods } from './TeachMethods';

export const Professionals = () => {
  return (
    <ProfessionalsContainer>
      <ProfessionalsHero id="professionals--hero" />
      <Teachers id="professionals--teachers" />
      <TeachMethods id="professionals--teach-methods" />
      <Banner variant="secondary" />
    </ProfessionalsContainer>
  );
};
