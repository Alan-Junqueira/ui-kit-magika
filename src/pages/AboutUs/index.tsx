import React from 'react';
import { AboutUsHero } from './components/Hero';
import { HeroCards } from './components/HeroCards';
import { OurWayTeaching } from './components/OurWayTeaching';

export const AboutUs = () => {
  return (
    <>
      <AboutUsHero id="about-us-hero"/>
      <HeroCards id="about-us-hero-cards" />
      <OurWayTeaching id="about-our-way-teaching"/>
    </>
  );
};
