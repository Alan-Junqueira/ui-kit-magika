import React from 'react';
import { FeatureIcons } from './components/FeatureIcons';
import { HomeHero } from './components/Hero';
import { OnlineDataAnalytical } from './components/OnlineDataAnalytical';
import { SpecifyTheTime } from './components/SpecifyTheTime';
import { SupportedPremiumSoftware } from './components/SupportedPremiumSoftware';

export const Home = () => {
  return (
    <>
      <HomeHero id="home-hero" />
      <FeatureIcons id="home-featured-icons" />
      <OnlineDataAnalytical id="online-data-analytical" />
      <SpecifyTheTime id="specify-the-time" />
      <SupportedPremiumSoftware id="supported-premium-software" />
    </>
  );
};
