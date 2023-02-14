import Fade from 'react-reveal/Fade';

import styled from 'styled-components';

import { Banner } from '../../components/Banner';

import { BetterGeneration } from './components/BetterGeneration';
import { Founders } from './components/Founders';
import { AboutUsHero } from './components/Hero';
import { HeroCards } from './components/HeroCards';
import { OurWayTeaching } from './components/OurWayTeaching';

const AboutUsContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsHero id="about-us-hero" />
      <HeroCards id="about-us-hero-cards" />
      <Fade left>
        <OurWayTeaching id="about-our-way-teaching" />
        <Founders id="about-us-founders" />
        <BetterGeneration id="about-us-better-generation" />
      </Fade>
      <Banner variant="secondary" />
    </AboutUsContainer>
  );
};
