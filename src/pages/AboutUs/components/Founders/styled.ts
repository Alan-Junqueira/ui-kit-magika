import styled from 'styled-components';

export const FoundersContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FoundersContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 56px 24px;
  }
  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 56px 72px;
  }
  @media (min-width: 1200px) {
    padding: 72px 152px;
  }

  > h3 {
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
      line-height: 72pxpx;

      max-width: 820px;
      width: 100%;

      margin-bottom: 16px;
    }
  }

  > p {
    font-weight: 400;
    opacity: 0.7;

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
      opacity: 0.8;

      margin-bottom: 32px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;

      margin-bottom: 65px;
    }

    @media (min-width: 1200px) {
      font-size: 3.2rem;
      line-height: 42px;

      max-width: 526px;
      width: 100%;

      margin-bottom: 90px;
    }
  }
`;
