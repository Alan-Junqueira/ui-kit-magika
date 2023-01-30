import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const AboutUsHeroContainer = styled(HeroContainer)``;

export const AboutUsHeroContent = styled.div`
  display: grid;
  grid-template-areas: 'title quotation' 'description quotation';
  align-items: center;

  max-width: 1600px;
  width: 100%;
  height: auto;

  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 0px 24px 266px 24px;
  }

  @media (max-width: 768px) {
    grid-template-areas: 'quotation' 'title' 'description';
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 58px 72px 226px 72px;
  }

  @media (min-width: 1200px) {
    padding: 155px 116px 368px 152px;
  }
`;

export const AboutUsHeroContainerTitle = styled.h1`
  grid-area: title;

  font-weight: 700;

  letter-spacing: -1px;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: 3.6rem;
    line-height: 46px;
    margin-bottom: 16px;

    text-align: center;
  }

  @media (min-width: 425px) and (max-width: 1199px) {
    font-size: 5.8rem;
    line-height: 72px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1200px) and (max-width: 1495px) {
    font-size: ${(props) => props.theme.sizes['7xl']};
    line-height: 100px;
    margin-bottom: 24px;
  }

  @media (min-width: 1496px) and (max-width: 1545px) {
    font-size: ${(props) => props.theme.sizes['8xl']};
    line-height: 100px;
    margin-bottom: 24px;
  }

  @media (min-width: 1546px) {
    font-size: 10rem;
    line-height: 100px;
    margin-bottom: 24px;
  }
`;

export const AboutUsHeroQuoatation = styled.span`
  grid-area: quotation;
  display: inline-block;

  font-weight: 700;

  color: ${(props) => props.theme.colors['gray-100']};

  @media (max-width: 1199px) {
    text-align: center;
    font-size: 29.3rem;
    line-height: 293px;

    max-height: 176px;

    align-self: flex-start;

    letter-spacing: -2.9309px;
  }

  @media (min-width: 1200px) {
    font-size: 62.5rem;
    line-height: 625px;

    max-height: 376px;

    letter-spacing: -6.25px;
  }
`;

export const AboutUsHeroDescription = styled.p`
  grid-area: description;
  font-weight: 500;

  opacity: 0.8;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
    opacity: 0.7;
  }
`;
