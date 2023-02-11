import styled, { css } from 'styled-components';

type PolygonProps = {
  variant: 'blue' | 'orange' | 'yellow' | 'red';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const PolygonContainer = styled.div<PolygonProps>`
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

    ${(props) =>
    props.variant === 'orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-3']};
      animation-duration: 6s;
    `};
`;
