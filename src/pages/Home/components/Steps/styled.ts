import styled, { css } from 'styled-components';
import { HeroContainer } from '../../../../components/Hero/styled';

export const StepsContainer = styled(HeroContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const StepsContent = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 56px 24px 33px;
    gap: 32px;
    flex-direction: column;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    flex-direction: row;
    align-items: center;
    padding: 56px 72px;
    gap: 65px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    padding: 154px 152px 115px 152px;
    gap: 150px;
  }
`;

export const StepsCards = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-top: 56px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    padding: 53px 32px 0 30px;
  }

  @media (min-width: 1200px) {
    padding: 34px 16px 0 0;
  }
`;

type StepCardProps = {
  variant: 'yellow' | 'orange' | 'red';
};

export const StepCard = styled.div<StepCardProps>`
  position: relative;
  display: flex;

  gap: 18px;

  padding: 12px;
  width: 100%;

  border-radius: 6px;

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      font-weight: 400;

      color: ${(props) => props.theme.colors.dark};
      background-color: ${(props) => props.theme.colors['yellow-100']};
      box-shadow: 0px 2.3134px 8.0969px rgba(0, 0, 0, 0.08);

      @media (max-width: 425px) {
        max-width: 292px;
        font-size: ${(props) => props.theme.sizes['12px']};
        line-height: 19px;

        margin-bottom: 47px;

        align-self: flex-end;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        max-width: 274px;
        font-size: ${(props) => props.theme.sizes['11px']};
        line-height: 17px;
        text-align: justify;

        margin-bottom: 44px;

        align-self: flex-end;
      }

      @media (min-width: 1200px) {
        max-width: 500px;
        font-size: ${(props) => props.theme.sizes['20px']};
        line-height: 32px;

        margin-bottom: 80px;

        align-self: flex-end;
      }

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;

        @media (min-width: 1200) {
          width: 62px;
          height: 62px;
        }
      }

      strong {
        font-weight: 700;
      }

      > div.shape-top {
        position: absolute;

        z-index: 10;

        @media (max-width: 425px) {
          top: -50px;
          right: -10px;
        }

        @media (min-width: 426px) and (max-width: 1199px) {
          top: -30px;
          right: -30px;
        }

        @media (min-width: 1200px) {
          top: -50px;
          right: -50px;
        }

        img {
          @media (max-width: 1199px) {
            width: 100%;
            max-width: 38px;
            height: auto;
          }

          @media (min-width: 1200px) {
            width: 66px;
            height: auto;
          }
        }
      }
    `};

  ${(props) =>
    props.variant === 'orange' &&
    css`
      font-weight: 400;

      color: ${(props) => props.theme.colors['white-2']};
      background-color: ${(props) => props.theme.colors['orange-100']};

      @media (max-width: 425px) {
        font-size: ${(props) => props.theme.sizes['12px']};
        line-height: 17px;
        max-width: 154px;
        text-align: center;

        align-self: center;

        margin-bottom: 35px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        max-width: 144px;
        font-size: ${(props) => props.theme.sizes['11px']};
        line-height: 16px;
        text-align: justify;

        margin-bottom: 33px;

        align-self: center;
      }

      @media (min-width: 1200px) {
        max-width: 265px;
        font-size: ${(props) => props.theme.sizes['20px']};
        line-height: 29px;
        text-align: center;

        margin-bottom: 61px;

        align-self: center;
      }

      strong {
        font-weight: 600;
      }

      div.arrow-flow {
        position: absolute;
        top: -52px;
        left: 35%;
        z-index: 1;

        transform: rotateY(150deg) rotateZ(90deg);

        @media (min-width: 1200px) {
          top: -100px;
          width: 100px;
          svg {
            height: 100px !important;
            width: 55px;
          }
        }

        &::before {
          position: absolute;
          content: '';
          width: 9px;
          height: 9px;
          top: 57%;
          left: 8%;

          background-color: ${(props) => props.theme.colors.black};
          border: 1.79532px solid #ffffffb2;
          border-radius: 50%;

          @media (min-width: 1200px) {
            top: 54%;
            left: 6%;
            width: 22px;
            height: 22px;
            border: 3.1042px solid #ffffffb2;
          }
        }

        svg {
          width: 100%;
          height: 57px;

          color: ${(props) => props.theme.colors['white-1']};
        }
      }
    `};

  ${(props) =>
    props.variant === 'red' &&
    css`
      font-weight: 400;

      color: ${(props) => props.theme.colors['white-1']};
      box-shadow: 0px 2.3134px 8.0969px rgba(0, 0, 0, 0.08);
      background-color: ${(props) => props.theme.colors['brand-2']};

      @media (max-width: 425px) {
        font-size: ${(props) => props.theme.sizes['12px']};
        line-height: 19px;
        max-width: 290px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        max-width: 262px;
        font-size: ${(props) => props.theme.sizes['11px']};
        line-height: 17px;
        text-align: justify;

        margin-bottom: 33px;

        align-self: flex-start;
      }

      @media (min-width: 1200px) {
        max-width: 483px;
        font-size: ${(props) => props.theme.sizes['20px']};
        line-height: 32px;
        text-align: center;

        align-self: flex-start;
      }

      img {
        border-radius: 50%;

        @media (max-width: 425px) {
          width: 36px;
          height: 36px;
        }

        @media (min-width: 426px) and (max-width: 1199px) {
          width: 34px;
          height: 34px;
        }

        @media (min-width: 1200px) {
          width: 62px;
          height: 62px;
        }
      }

      strong {
        font-weight: 700;
      }

      > div.shape-bottom {
        position: absolute;
        bottom: 30%;
        left: 0;
        z-index: 10;
        transform: rotateY(-180deg);

        @media (max-width: 425px) {
          top: -50px;
          left: -10px;
        }

        @media (min-width: 426px) and (max-width: 1199px) {
          top: -30px;
          left: -30px;
        }

        @media (min-width: 1200px) {
          top: -50px;
          left: -50px;
        }

        img {
          @media (max-width: 1199px) {
            width: 100%;
            max-width: 38px;
            height: auto;
          }
        }
      }
    `};

  div.arrow-down {
    position: absolute;
    left: 40%;
    bottom: -45px;

    z-index: 1;

    @media (min-width: 1200px) {
      bottom: -70px;
      img {
        height: 57px;
      }
    }

    &::before {
      position: absolute;
      content: '';
      width: 12px;
      height: 12px;
      top: -10px;
      left: 20%;

      background-color: ${(props) => props.theme.colors.black};
      border: 3.1042px solid #ffffffb2;
      border-radius: 50%;

      @media (min-width: 1200px) {
        width: 16px;
        height: 16px;
        left: 26%;
      }
    }
  }
`;

export const StepsDescription = styled.div`
  > h2 {
    font-weight: 700;
    line-height: 46px;

    color: ${(props) => props.theme.colors['white-1']};

    @media (max-width: 425px) {
      font-size: ${(props) => props.theme.sizes['32px']};
      margin-bottom: 16px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      font-size: ${(props) => props.theme.sizes['36px']};
      margin-bottom: 32px;
    }

    @media (min-width: 1200px) {
      font-weight: 500;
      font-size: ${(props) => props.theme.sizes['48px']};
      line-height: 60px;
      margin-bottom: 24px;
    }
  }

  > p {
    font-weight: 400;
    font-size: ${(props) => props.theme.sizes['16px']};
    line-height: 26px;

    color: ${(props) => props.theme.colors['white-1']};

    opacity: 0.8;

    margin-bottom: 32px;

    @media (min-width: 1200px) {
      font-weight: 400;
      font-size: ${(props) => props.theme.sizes['21px']};
      line-height: 34px;
      margin-bottom: 64px;
    }
  }

  > div.list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-right: 26px;

    > div.step-list--spring {
      display: none;
      position: absolute;
      bottom: 0;
      left: 0;

      @media (min-width: 426px) and (max-width: 1199px) {
        display: block;
        max-width: 153px;
        width: 100%;
      }

      @media (min-width: 1200px) {
        max-width: 211px;
        width: 100%;
      }
    }

    > div.development {
      align-self: flex-start;
    }
    > div.brand {
      align-self: center;
    }
    > div.art {
      align-self: flex-end;
    }
  }
`;

type StepsPolygonProps = {
  variant: 'blue' | 'red' | 'yellow';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const StepsPolygon = styled.div<StepsPolygonProps>`
  position: absolute;
  border-radius: 2.3134px;
  transform: rotate(-45deg);

  z-index: 10;

  animation: opacityAnimaiton ease;
  animation-iteration-count: infinite;

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

  @media (max-width: 425px) {
    width: 19px;
    height: 19px;
  }

  @media (max-width: 1199px) {
    width: 17px;
    height: 17px;
  }

  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
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
