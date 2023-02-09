import React from 'react';
import { Steps } from '../../components/Steps';
import { Awards } from './components/Awards';
import { FeatureIcons } from './components/FeatureIcons';
import { HomeHero } from './components/Hero';
import { OnlineDataAnalytical } from './components/OnlineDataAnalytical';
import { ReadBlogs } from './components/ReadBlogs';
import { SpecifyTheTime } from './components/SpecifyTheTime';
import { SupportedPremiumSoftware } from './components/SupportedPremiumSoftware';

export const Home = () => {
  return (
    <>
      <HomeHero id="home-hero" />
      <FeatureIcons id="home-featured-icons" />
      <OnlineDataAnalytical id="home-online-data-analytical" />
      <SpecifyTheTime id="home-specify-the-time" />
      <SupportedPremiumSoftware id="home-supported-premium-software" />
      <Steps id="home-steps" />
      <ReadBlogs id="home-read-blogs" />
      <Awards id="awards"/>
    </>
  );
};
