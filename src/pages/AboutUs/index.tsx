import React from 'react';
import { AboutUsHero } from './components/Hero';
import { HeroCards } from './components/HeroCards';

export const AboutUs = () => {
  return (
    <>
      <AboutUsHero id="about-us-hero"/>
      <HeroCards id="about-us-hero-cards" />
    </>
  );
};
