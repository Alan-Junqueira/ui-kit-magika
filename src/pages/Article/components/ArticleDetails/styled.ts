import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ArticleDetailsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors.bg};
`;

export const ArticleDetailsContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: grid;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 56px;

    padding: 32px 24px 45px 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    grid-template-columns: 1fr;
    gap: 124px;

    padding: 53px 72px 72px 72px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 330px;
    gap: 94px;

    padding: 64px 152px 182px 152px;
  }
`;

export const ArticleDetailsMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;

  @media (max-width: 425px) {
    gap: 24px;
  }

  > h5 {
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 34px;

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
    }
  }

  > h4 {
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes['2xl']};
    line-height: 34px;
  }

  > p {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: justify;
  }

  div.our-qualities {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    span {
      position: relative;
      padding-left: 24px;

      &::before {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        left: 0;
        top: 8px;

        border-radius: 50%;

        background: radial-gradient(
          127.68% 423.02% at 31.82% -13.39%,
          #ff9b00 12.5%,
          #ed1c24 100%
        );
      }
    }
  }

  blockquote {
    display: flex;

    font-weight: 400;
    font-size: 2.1rem;
    line-height: 34px;
    

    @media (max-width: 425px) {
      flex-direction: column;
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
    }

    @media (min-width: 426px) {
      gap: 32px;
    }

    img {
      width: 48px;
      height: 36px;
    }
  }
`;

export const ArticleDetailsAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 52px;

  @media (min-width: 426px) and (max-width: 1199px) {
    gap: 56px;
  }
`;

export const ArticleDetailsAsideTitle = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.theme.sizes['4xl']};
  line-height: 46px;
`;

export const ArticleDetailsAsideLiks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 52px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 164px;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    gap: 52px;
  }
`;

export const ArticleDetailsAsideLink = styled(Link)`
  @media (max-width: 1199px) {
    &:nth-child(3) {
      display: none;
    }
  }
`;
