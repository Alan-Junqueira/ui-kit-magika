import styled from 'styled-components';

export const HeroCardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    margin-top: -208px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    margin-top: -180px;
  }

  @media (min-width: 1200px) {
    margin-top: -315px;
  }
`;

export const HeroCardsContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 0 48px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 0 72px;
  }

  @media (min-width: 1200px) {
    padding: 0 152px;
  }
`;

export const HeroCardsSlider = styled.div``;
