import styled from 'styled-components';
import { Hero } from '../../../components/Hero';

export const CarrerHeroContainer = styled(Hero)``;

export const CarrerHeroContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: grid;

  @media (max-width: 425px) {
    padding: 0 24px 95px 24px;

    grid-template-areas: 'dots' 'texts';
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 56px 72px;
    grid-template-areas: 'dots' 'texts';
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-areas: 'texts dots';

    padding: 56px 72px;
    gap: 50px;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'texts dots';
    padding: 44px 152px 100px 152px;

    gap: 110px;
  }

  div.texts {
    grid-area: texts;
  }

  div.image {
    grid-area: dots;
    display: none;

    @media (min-width: 769px) and (max-width: 1199px) {
      display: block;
      padding-inline: 68px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CarrerHeroTitle = styled.h1`
  font-weight: 700;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    text-align: center;

    margin-bottom: 16px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 5.8rem;
    line-height: 72px;

    text-align: center;

    margin-bottom: 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 5.8rem;
    line-height: 72px;

    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
    line-height: 100px;
    letter-spacing: -1px;

    margin-bottom: 24px;
  }
`;

export const CarrerHeroDescription = styled.p`
  font-weight: 500;
  opacity: 0.8;
  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;

    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
    opacity: 0.7;
  }
`;

export const CarrerHeroQuoatation = styled.span`
  grid-area: dots;
  display: inline-block;

  font-weight: 700;

  color: ${(props) => props.theme.colors['gray-100']};

  @media (max-width: 768px) {
    text-align: center;
    font-size: 29.3rem;
    line-height: 293px;

    max-height: 176px;

    align-self: flex-start;

    letter-spacing: -2.9309px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    display: none;
  }

  @media (min-width: 1200px) {
    font-size: 62.5rem;
    line-height: 625px;

    max-height: 376px;

    letter-spacing: -6.25px;
  }
`;
