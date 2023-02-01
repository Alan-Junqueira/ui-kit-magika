import styled, { css } from 'styled-components';

export const BetterGenerationContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`;

export const BetterGenerationContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: grid;
  align-items: center;
  grid-template-areas: 'info image';

  @media (max-width: 425px) {
    margin-top: 20px;
    padding: 56px 24px;
  }

  @media (max-width: 980px) {
    grid-template-areas: 'image' 'info';
    gap: 32px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 56px 72px;
  }

  @media (min-width: 981px) and (max-width: 1199px) {
    grid-template-columns: 60% 40%;
  }

  @media (min-width: 1200px) {
    padding: 104px 152px;
    grid-template-columns: 60% 40%;
  }
`;

export const BetterGenerationLeft = styled.div`
  grid-area: info;

  @media (max-width: 425px) {
  }

  @media (min-width: 981px) and (max-width: 1199px) {
    max-width: 450px;
  }

  @media (min-width: 1200px) {
    max-width: 620px;
  }

  h3 {
    font-weight: 700;

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes['4xl']};
      line-height: 46px;
      margin-bottom: 16px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      font-size: 3.2rem;
      line-height: 42px;
      margin-bottom: 32px;
    }

    @media (min-width: 1200px) {
      font-size: 6.4rem;
      line-height: 72px;
      margin-bottom: 52px;
    }
  }

  p {
    font-weight: 400;

    opacity: 0.7;

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
      margin-bottom: 32px;
      opacity: 0.8;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
      margin-bottom: 64px;
    }

    @media (min-width: 1200px) {
      font-size: 2.1rem;
      line-height: 34px;
      margin-bottom: 64px;
    }
  }
`;

export const BetterGenerationRight = styled.div`
  grid-area: image;

  img {
    width: 100%;
    height: auto;
  }
`;
