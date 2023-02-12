import styled from 'styled-components';

export const JoinUsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.bg};
`;

export const JoinUsContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;

    padding: 51px 24px 36px;

    gap: 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
    padding: 77px 72px 65px 77px;

    gap: 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 77px 72px 65px 77px;
    align-items: center;

    gap: 56px;
  }

  @media (min-width: 1200px) {
    padding: 127px 152px 118px 152px;
    align-items: center;

    gap: 128px;
  }
`;

export const JoinUsTitle = styled.h2`
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: 4.2rem;
    line-height: 48px;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;
  }

  position: relative;

  div.sm {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }

  div.md {
    display: none;
    @media (min-width: 769px) and (max-width: 1199px) {
      display: block;
    }
  }

  div.full {
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }
`;

export const JoinUsDescription = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};
  text-align: justify;
  opacity: 0.8;

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
  }
`;
