import styled from 'styled-components';

export const GetToKnowContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GetToKnowContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: grid;
  align-items: center;

  @media (max-width: 425px) {
    grid-template-areas: 'image' 'texts';
    gap: 32px;

    padding: 56px 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-areas: 'image' 'texts';
    gap: 65px;

    padding: 56px 72px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-areas: 'texts image';
    grid-template-columns: 1fr 40%;
    gap: 65px;

    padding: 56px 72px;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'texts image';
    grid-template-columns: 1fr 40%;
    gap: 100px;

    padding: 72px 152px;
  }
`;

export const GetToKnowTextsContainer = styled.div`
  grid-area: texts;
`;

export const GetToKnowTitle = styled.h2`
  font-weight: 700;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 16px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;

    margin-bottom: 52px;
  }
`;

export const GetToKnowDescription = styled.p`
  font-weight: 400;

  color: ${(props) => props.theme.colors.black};
  opacity: 0.7;

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
    opacity: 0.8;

    margin-bottom: 40px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;

    margin-bottom: 64px;
  }
`;

export const GetToKnowListsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 425px) {
    gap: 24px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 24px 56px;
  }

  @media (min-width: 1200px) {
    gap: 24px 56px;
  }
`;

export const GetToKnowImageContainer = styled.div`
  grid-area: image;
  img {
    width: 100%;
    height: auto;
  }
`;
