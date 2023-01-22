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
    font-size: ${(props) => props.theme.sizes['370px']};
    line-height: 403px;

    margin-bottom: 13px;

    @media (max-width: 1024px) {
      font-size: ${(props) => props.theme.sizes['268px']};
      line-height: 292px;
      margin-bottom: 32px;
    }

    @media (max-width: 900px) {
      font-size: ${(props) => props.theme.sizes['110px']};
      line-height: 119px;
      justify-content: space-around;
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
    font-size: ${(props) => props.theme.sizes['21px']};
    line-height: 34px;

    text-align: center;

    margin-bottom: 24px;

    color: ${(props) => props.theme.colors['white-1']};
    opacity: 0.7;

    @media (max-width: 1024px) {
      font-size: ${(props) => props.theme.sizes['14px']};
      line-height: 24px;
      opacity: 0.8;

      margin-bottom: 16px;
    }

    @media (max-width: 900px) {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['16px']};
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
  variant: 'blue' | 'orange' | 'yellow' | 'red';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const NotFoundPolygon = styled.div<NotFoundPolygonProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;

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
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-1']};
      animation-duration: 2s;
    `};

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background-color: ${(props) => props.theme.colors.yellow};
      animation-duration: 2.5s;
    `};

  ${(props) =>
    props.variant === 'orange' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-3']};
      animation-duration: 3s;
    `};

  ${(props) =>
    props.variant === 'red' &&
    css`
      background-color: ${(props) => props.theme.colors['brand-2']};
      animation-duration: 4s;
    `};
`;
