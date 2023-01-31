import styled, { css } from 'styled-components';

export const OurWayTeachingContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const OurWayTeachingContent = styled.div`
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
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 56px 72px;
    gap: 65px;
  }

  @media (min-width: 981px) and (max-width: 1199px) {
    grid-template-columns: 60% 40%;
  }

  @media (min-width: 1200px) {
    padding: 104px 152px;
    grid-template-columns: 40% 60%;
  }
`;

export const OurWayTeachingLeft = styled.div`
  grid-area: info;

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

export const OurWayTeachingRight = styled.div`
  grid-area: image;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 425px) {
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 32px 31px 24px 0;
  }

  @media (max-width: 980px) {
    max-width: 370px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    padding: 42px 28px 31px 61px;
  }

  span {
    font-weight: 700;
    text-align: center;

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 28px;
      max-width: 136px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      font-size: 1.9rem;
      line-height: 41px;
      width: 153px;
    }

    @media (min-width: 1200px) {
      width: 300px;
      font-size: ${(props) => props.theme.sizes['4xl']};
      line-height: 46px;
    }
  }

  div.woman {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    align-self: flex-start;

    @media (max-width: 425px) {
      padding-left: 20px;
    }

    img {
      width: 100%;
      height: auto;

      @media (max-width: 425px) {
        max-width: 100px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        max-width: 112px;
      }

      @media (min-width: 1200px) {
        max-width: 211px;
      }
    }
  }

  div.men {
    h4 {
      padding-left: 40px;

      margin-bottom: 96px;

      @media (max-width: 425px) {
        font-weight: 600;
        font-size: 2.1rem;
        line-height: 28px;
        padding-top: 20px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-weight: 700;
        font-size: ${(props) => props.theme.sizes['2xl']};
        line-height: 41px;
      }

      @media (min-width: 1200px) {
        font-weight: 500;
        font-size: ${(props) => props.theme.sizes['5xl']};
        line-height: 60px;
      }
    }

    div.shape {
      position: absolute;
      top: 0;
      right: 0;

      img {
        width: 65px;
        height: 65px;
      }

    }

    div.menImage {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 24px;

      img {
        width: 100%;
        height: auto;

        @media (max-width: 425px) {
          max-width: 100px;
        }

        @media (min-width: 426px) and (max-width: 1199px) {
          max-width: 102px;
        }

        @media (min-width: 1200px) {
          max-width: 211px;
        }
      }
    }
  }
`;

type OurWayPolygonProps = {
  variant: 'blue' | 'red' | 'yellow';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const OurWayPolygon = styled.div<OurWayPolygonProps>`
  position: absolute;
  transform: rotate(-45deg);

  z-index: 10;

  animation: opacityAnimaiton ease;
  animation-iteration-count: infinite;

  @keyframes opacityAnimaiton {
    0% {
      opacity: 0.5;
      transform: rotate(45deg) scale(0.5);
    }

    50% {
      opacity: 1;
      transform: rotate(45deg) scale(1);
    }

    100% {
      opacity: 0.5;
      transform: rotate(45deg) scale(0.5);
    }
  }

  @media (max-width: 425px) {
    width: 19px;
    height: 19px;
    border-radius: 3px;
  }

  @media (max-width: 1199px) {
    width: 17px;
    height: 17px;
    border-radius: 3px;
  }

  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
    border-radius: 5.17536px;
  }

  ${(props) =>
    props.top && props.top < 0
      ? css`
          top: ${props.top}px;
        `
      : css`
          top: ${props.top}%;
        `};

  ${(props) =>
    props.right && props.right < 0
      ? css`
          right: ${props.right}px;
        `
      : css`
          right: ${props.right}%;
        `};

  ${(props) =>
    props.bottom && props.bottom < 0
      ? css`
          bottom: ${props.bottom}px;
        `
      : css`
          bottom: ${props.bottom}%;
        `};

  ${(props) =>
    props.left && props.left < 0
      ? css`
          left: ${props.left}px;
        `
      : css`
          left: ${props.left}%;
        `};

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-1']};
      animation-duration: 4s;
    `};

  ${(props) =>
    props.variant === 'red' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-2']};
      animation-duration: 5s;
    `};

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background-color: ${(props) => props.theme.colors.yellow};
      animation-duration: 6s;
    `};

  &.mobile {
    @media (min-width: 1200px) {
      display: none;
    }
  }

  &.desktop {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
