import styled, { css } from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  height: auto;

  background-image: url('/assets/images/background-grid.png');
  background-position-x: center;
  background-color: #060919;
`;

export const NotFoundContent = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 127px 245px 193px;
  overflow: hidden;

  @media (max-width: 1290px) {
    padding-inline: 111px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }

  div.numbers {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 700;
    font-size: 37rem;
    line-height: 403px;

    margin-bottom: 13px;

    @media (max-width: 1024px) {
      font-size: 26.8rem;
      line-height: 292px;
      margin-bottom: 32px;
    }

    @media (max-width: 900px) {
      font-size: 11rem;
      line-height: 119px;
      justify-content: space-around;
    }

    span {
      position: relative;
    }

    span.left-four {
      background: ${(props) => props.theme.colors.primary};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      transform: rotate(-30deg);
    }

    span.center-zero {
      position: relative;
      background: ${(props) => props.theme.colors['banner-secondary']};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      &::before {
        position: absolute;
        content: '';
        width: 75px;
        height: 75px;
        top: -75px;
        left: calc(50% - 35px);
        background: ${(props) => props.theme.colors['yellow-200']};
        border-radius: 50%;

        @media (max-width: 900px) {
          width: 54px;
          height: 54px;
          top: -54px;
          left: calc(50% - 27px);
        }

        @media (max-width: 1024px) {
          width: 54px;
          height: 54px;
          top: -54px;
          left: calc(50% - 27px);
        }

        @media (max-width: 900px) {
          width: 22px;
          height: 22px;
          top: -22px;
          left: calc(50% - 11px);
        }
      }
    }

    span.right-four {
      background: ${(props) => props.theme.colors.primary};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      transform: rotate(30deg);
    }
  }

  p {
    font-size: 2.1rem;
    line-height: 34px;

    text-align: center;

    margin-bottom: 24px;

    color: ${(props) => props.theme.colors['white-1']};
    opacity: 0.7;

    @media (max-width: 1024px) {
      font-size: ${(props) => props.theme.sizes.sm};
      line-height: 24px;
      opacity: 0.8;

      margin-bottom: 16px;
    }

    @media (max-width: 900px) {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes.base};
      line-height: 26px;
    }
  }

  div.anchor {
    text-align: center;
    a {
      font-size: 18px;
      line-height: 28px;

      background: ${(props) => props.theme.colors.primary};

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      opacity: 0.8;
    }
  }
`;


type NotFoundPolygonProps = {
  variant: 'blue' | 'red' | 'orange' | 'yellow';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const NotFoundPolygon = styled.div<NotFoundPolygonProps>`
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
    props.variant === 'orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-3']};
      animation-duration: 6s;
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
