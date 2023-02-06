import styled from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const ArticlesHeroContainer = styled(HeroContainer)``;

export const ArticlesHeroContent = styled.div`
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

export const ArticlesHeaderContent = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-areas: 'image' 'texts';
    align-items: center;
    justify-content: center;
    gap: 26px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
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

      @media (max-width: 768px) {
        font-size: ${(props) => props.theme.sizes['4xl']};
        line-height: 46px;
        text-align: center;
      }

      @media (min-width: 769px) and (max-width: 1199px) {
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

      @media (max-width: 768px) {
        font-size: ${(props) => props.theme.sizes.base};
        line-height: 26px;
        text-align: center;
      }

      @media (min-width: 769px) and (max-width: 1199px) {
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

    @media (max-width: 768px) {
      padding-inline: 68px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

type ArticlesMainContentProps = {
  bgImage: string;
};

export const ArticlesMainContent = styled.main<ArticlesMainContentProps>`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 72px;
  }

  @media (min-width: 1200px) {
    gap: 72px;
  }

  div.image {
    border-radius: 15px;
    background-image: ${(props) => `url(${props.bgImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100px;

    @media (max-width: 425px) {
      height: 298px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      height: 298px;
    }

    @media (min-width: 1200px) {
      max-width: 563px;
      height: 412px;
    }
  }

  div.main-content {
    h2 {
      font-weight: 700;
      color: ${(props) => props.theme.colors['white-1']};

      @media (max-width: 425px) {
        font-size: 3.2rem;
        line-height: 42px;
        margin-bottom: 8px;

        text-align: justify;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-size: 3.2rem;
        line-height: 42px;
        margin-bottom: 8px;
      }

      @media (min-width: 1200px) {
        font-size: 6.4rem;
        line-height: 72px;
        margin-bottom: 16px;
      }
    }

    p {
      font-size: ${(props) => props.theme.sizes.base};
      font-weight: 400;

      @media (max-width: 425px) {
        line-height: 26px;
        text-align: justify;

        color: ${(props) => props.theme.colors['grey-1']};
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        line-height: 26px;

        margin-bottom: 24px;

        color: ${(props) => props.theme.colors['gray-500']};
      }

      @media (min-width: 1200px) {
        font-size: ${(props) => props.theme.sizes['2xl']};
        line-height: 40px;

        margin-bottom: 32px;

        color: ${(props) => props.theme.colors['white-1']};
      }
    }

    button {
      @media (max-width: 425px) {
        display: none;
      }
    }
  }
`;
