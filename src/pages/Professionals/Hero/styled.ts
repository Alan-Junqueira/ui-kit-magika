import styled from 'styled-components';
import { HeroContainer } from '../../../components/Hero/styled';

export const ProfessionalsHeroContainer = styled(HeroContainer)``;

export const ProfessionalsHeroContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: grid;

  @media (max-width: 425px) {
    grid-template-areas: 'image' 'texts';
    gap: 82px;

    padding: 54px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-areas: 'image' 'texts';
    gap: 82px;

    padding: 54px 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-columns: 1fr 40%;
    grid-template-areas: 'texts image';
    justify-content: space-between;

    align-items: center;

    padding: 54px 72px 70px 72px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 40%;
    grid-template-areas: 'texts image';

    gap: 62px;
    align-items: center;

    padding: 125px 155px 168px 152px;
  }
`;

export const ProfessionalsHeroTexts = styled.main`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors['white-1']};
  grid-area: texts;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 769px) and(max-width: 1199px) {
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const ProfessionalsHeroTitle = styled.h1`
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['5xl']};
    line-height: 62px;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 5.8rem;
    line-height: 72px;
  }

  @media (min-width: 1200px) and (max-width: 1499px) {
    font-size: ${(props) => props.theme.sizes['7xl']};
    line-height: 80px;

    letter-spacing: -1px;
  }

  @media (min-width: 1500px) {
    font-size: 10rem;
    line-height: 100px;

    letter-spacing: -1px;
  }
`;

export const ProfessionalsHeroDescription = styled.p`
  opacity: 0.8;
  font-weight: 400;

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    opacity: 1;
  }
`;

export const ProfessionalsHeroImage = styled.div`
  grid-area: image;
  position: relative;
  max-width: 500px;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  div.backSquare {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors['brand-1']};
    inset: 0;
    left: 16px;

    border-radius: 20px;
    transform: matrix(1, 0.06, -0.06, 1, 0, 0);
  }

  img {
    position: relative;
    width: 100%;
    height: auto;
  }
`;
