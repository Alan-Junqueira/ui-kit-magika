import styled from 'styled-components';

export const InformaticsEngineeringContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const GetToKnowDefaultTitle = styled.h2`
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
