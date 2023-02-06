import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const ArticleHeroContainer = styled(HeroContainer)``;

type ArticleHeroContentProps = {
  bgImage: string;
};

export const ArticleHeroContent = styled.div<ArticleHeroContentProps>`
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding-top: 24px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 58px 72px 32px 72px;
  }

  @media (min-width: 1200px) {
    padding: 80px 152px;
  }

  div.image {
    width: 100%;
    background: url(${(props) => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 425px) {
      height: 168px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      height: 240px;
      border-radius: 16px;
    }

    @media (min-width: 1200px) {
      height: 374px;
      border-radius: 16px;
    }
  }
`;

export const ArticleHeroMainContent = styled.main`
  display: grid;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 861px) {
    grid-template-columns: 1fr 25%;
    gap: 90px;
  }

  div.content {
    @media (max-width: 425px) {
      padding: 24px 24px 67px;
    }
  }
`;

export const ArticleHeroTitle = styled.h1`
  font-weight: 700;
  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;

    text-align: center;

    margin-bottom: 16px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;

    margin-bottom: 24px;
  }
`;

export const ArticleHeroDescription = styled.p`
  display: none;

  @media (max-width: 425px) {
    display: inline-block;
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: center;

    color: ${(props) => props.theme.colors['white-1']};

    opacity: 0.8;
  }
`;

export const ArticleHeroInByDate = styled.div`
  display: none;

  align-items: center;
  gap: 32px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: nowrap;

    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 24px;

    color: ${(props) => props.theme.colors['white-1']};

    small {
      font-weight: 400;
      line-height: 26px;

      opacity: 0.64;
    }
  }

  @media (min-width: 426px) and (max-width: 590px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 16px;
    gap: 4px;
  }

  @media (min-width: 591px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ArticleHeroQuotation = styled.span`
  display: inline-block;

  font-weight: 700;

  color: ${(props) => props.theme.colors['gray-100']};

  @media (max-width: 860px) {
    display: none;
  }

  @media (min-width: 861px) and (max-width: 1199px) {
    text-align: center;
    font-size: 29.3rem;
    line-height: 235px;

    max-height: 110px;

    align-self: flex-start;

    letter-spacing: -2.9309px;
  }

  @media (min-width: 1200px) {
    font-size: 62.5rem;
    line-height: 500px;

    max-height: 250px;

    letter-spacing: -6.25px;
  }
`;
