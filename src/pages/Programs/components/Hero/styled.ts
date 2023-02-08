import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const ProgramsHeroContainer = styled(HeroContainer)``;

export const ProgramsHeroContent = styled.div`
  width: 100%;
  max-width: 1600px;

  display: grid;
  grid-template-areas: 'texts quotation';

  @media (max-width: 425px) {
    padding: 0 24px 95px 24px;
    grid-template-areas: 'quotation' 'texts';
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-areas: 'quotation' 'texts';
    padding: 56px 72px;
    gap: 88px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-columns: 1fr 190px;
    padding: 56px 72px;
    gap: 88px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 322px;
    padding: 44px 116px 97px 152px;
    gap: 110px;
  }
`;

export const ProgramsHeroTexts = styled.div`
  grid-area: texts;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 425px) {
    gap: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export const ProgramsHeroTitle = styled.h1`
  font-weight: 700;
  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['5xl']};
    line-height: 68px;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 5.8rem;
    line-height: 72px;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
    line-height: 100px;

    letter-spacing: -1px;
  }
`;

export const ProgramsHeroDescription = styled.p`
  font-weight: 500;
  opacity: 0.8;
  ${(props) => props.theme.colors['white-1']};

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

  font-size: 14px;
  line-height: 24px;

  color: #ffffff;
`;

export const ProgramsHeroDots = styled.span`
  grid-area: quotation;
  &.quotation {
    grid-area: quotation;
    display: none;

    font-weight: 700;

    color: ${(props) => props.theme.colors['gray-100']};

    @media (max-width: 425px) {
      display: inline-block;
      text-align: center;
      font-size: 29.3rem;
      line-height: 293px;

      max-height: 176px;

      align-self: flex-start;

      letter-spacing: -2.9309px;
    }

    @media (min-width: 1200px) {
      display: inline-block;
      font-size: 62.5rem;
      line-height: 625px;

      max-height: 376px;

      letter-spacing: -6.25px;
    }
  }

  &.semicolon {
    display: none;
    @media (min-width: 425px) and (max-width: 768px) {
      display: inline-block;
      padding-inline: 60px;
      img {
        width: 100%;
        height: auto;
      }
    }

    @media (min-width: 769px) and (max-width: 1199px) {
      display: inline-block;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
