import styled from 'styled-components';

export const ThingsToLearnContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ThingsToLearnContent = styled.div`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 1199px) {
    padding: 56px 0;
  }

  @media (min-width: 1200px) {
    padding: 72px 0;
  }
`;

export const ThingsToLearnTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding-inline: 24px;

  @media (max-width: 425px) {
    margin-bottom: 32px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    margin-bottom: 56px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 72px;
  }
`;

export const ThingsToLearnTitle = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.theme.sizes['4xl']};
  line-height: 46px;

  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;

    margin-bottom: 32px;
  }
`;

export const ThingsToLearnDescription = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.sizes.base};
  line-height: 26px;

  opacity: 0.8;
  color: ${(props) => props.theme.colors.black};

  @media (min-width: 426px) and (max-width: 1199px) {
    max-width: 541.03px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
    opacity: 0.7;

    max-width: 541.03px;
  }
`;

export const ThingsToLearnItens = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;

  gap: 16px;

  @media (min-width: 1200px) {
    gap: 32px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 25px;
  }
`;
