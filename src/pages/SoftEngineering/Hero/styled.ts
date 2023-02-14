import styled from 'styled-components';
import { HeroContainer } from '../../../components/Hero/styled';

export const SoftwareEngineeringHeroContainer = styled(HeroContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SoftwareEngineeringHeroContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: grid;
  align-items: center;

  @media (max-width: 425px) {
    grid-template-areas: 'image' 'texts';
    gap: 50px;
    padding: 40px 24px 78px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-areas: 'image' 'texts';
    gap: 50px;
    padding: 0 72px 55px 72px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-areas: 'texts image';
    padding: 0 72px 55px 72px;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'texts image';
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    padding: 61px 152px 123px 152px;
  }
`;

export const SoftwareEngineeringHeroTexts = styled.div`
  grid-area: texts;
`;

export const SoftwareEngineeringHeroTitle = styled.h1`
  font-weight: 700;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 16px;

    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['5xl']};
    line-height: 72px;

    margin-bottom: 16px;

    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 5.8rem;
    line-height: 72px;

    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
    line-height: 100px;

    letter-spacing: -1px;

    margin-bottom: 20px;
  }
`;

export const SoftwareEngineeringHeroDescription = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors['white-1']};
  opacity: 0.8;

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;

    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 3.2rem;
    line-height: 42px;
  }
`;

export const SoftwareEngineeringHeroImage = styled.div`
  grid-area: image;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    padding-left: 15px;
    height: auto;
  }
`;
