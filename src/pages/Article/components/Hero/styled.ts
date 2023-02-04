import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const ArticleHeroContainer = styled(HeroContainer)``;

export const ArticleHeroContent = styled.div`
  max-width: 1600px;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding: 32px 26px;
    gap: 32px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 45px 72px;
    gap: 56px;
  }

  @media (min-width: 1200px) {
    padding: 72px 152px;
    gap: 72px;
  }
`;

export const ArticleHeaderContent = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    grid-template-areas: 'image' 'texts';
    gap: 26px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    grid-template-areas: 'texts image';
    grid-template-columns: 1fr 190px;
    gap: 88px;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'texts image';
    grid-template-columns: 1fr 410px;
  }

  div.header-texts {
    grid-area: texts;

    display: flex;
    flex-direction: column;

    @media (max-width: 425px) {
      gap: 16px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      gap: 32px;
    }

    @media (min-width: 1200px) {
      gap: 24px;
    }

    h1 {
      color: ${(props) => props.theme.colors['white-1']};
      font-weight: 700;

      @media (max-width: 425px) {
        font-size: ${(props) => props.theme.sizes['4xl']};
        line-height: 46px;
        text-align: center;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-size: 5.8rem;
        line-height: 72px;
        font-weight: 500;
      }

      @media (min-width: 1200px) {
        font-size: 10rem;
        line-height: 100px;
        letter-spacing: -1px;
      }
    }

    p {
      color: ${(props) => props.theme.colors['white-1']};
      font-weight: 400;
      opacity: 0.7;

      @media (max-width: 425px) {
        font-size: ${(props) => props.theme.sizes.base};
        line-height: 26px;
        text-align: center;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-size: ${(props) => props.theme.sizes.sm};
        line-height: 24px;
      }

      @media (min-width: 1200px) {
        ont-size: 2.1rem;
        line-height: 34px;

        opacity: 0.8;
      }
    }
  }

  div.image {
    grid-area: image;

    @media(max-width: 425px){
      padding-inline: 68px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
