import React from 'react';
import { ProgramsHero } from './components/Hero';
import { InformaticEngineering } from './components/InformaticEngineering';

export const Programs = () => {
  return (
    <>
      <ProgramsHero id="programs-hero" />
      <InformaticEngineering id="programs--informatic-engineering"/>
    </>
  );
};
