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
  top: ${(props) => props.top}%;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;

  width: 32px;
  height: 32px;

  border-radius: 4px;

  transform: rotate(45deg);

  @media (max-width: 1024px) {
    width: 23px;
    height: 23px;
    border-radius: 2.89531px;
  }

  @media (max-width: 900px) {
    width: 9px;
    height: 9px;
    border-radius: 1.17903px;
  }

  animation: opacityAnimaiton ease;

  animation-iteration-count: infinite;
  /* animation-timing-function: linear; */

  @keyframes opacityAnimaiton {
    0% {
      opacity: 0;
      transform: rotate(45deg) scale(0);
    }

    50% {
      opacity: 1;
      transform: rotate(45deg) scale(1);

    }

    100% {
      opacity: 0;
      transform: rotate(45deg) scale(0);
    }
  }

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-1']};
      animation-duration: 4s;
    `};

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background-color: ${(props) => props.theme.colors.yellow};
      animation-duration: 5s;
    `};

  ${(props) =>
    props.variant === 'orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-3']};
      animation-duration: 6s;
    `};

  ${(props) =>
    props.variant === 'red' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-2']};
      animation-duration: 7s;
    `};
`;
