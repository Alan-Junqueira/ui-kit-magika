import styled, { css } from 'styled-components';

type HeroCardContainerProps = {
  image: string;
  variant: 'blue' | 'orange' | 'red';
};

export const HeroCardContainer = styled.div<HeroCardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  div.content {
    max-width: 409px;
    width: 100%;

    border-radius: 0px 0px 26px 26px;

    overflow: hidden;

    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 20%;
      bottom: 0;
      left: 0;

      ${(props) =>
    props.variant === 'orange' &&
    css`
          background: linear-gradient(
            180.3deg,
            rgba(255, 155, 0, 0) 0.26%,
            #ff9b00 99.74%
          );
        `};

      ${(props) =>
    props.variant === 'blue' &&
    css`
          background: linear-gradient(
            180.3deg,
            rgba(0, 0, 255, 0) 0.26%,
            #0000ff 99.74%
          );
        `};

      ${(props) =>
    props.variant === 'red' &&
    css`
          background: linear-gradient(
            180.3deg,
            rgba(237, 28, 36, 0) 0.26%,
            #ed1c24 99.74%
          );
        `};
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  div.description {
    position: absolute;

    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    max-width: 300px;

    h3 {
      font-weight: 700;

      text-align: center;

      color: ${(props) => props.theme.colors['white-1']};

      @media (max-width: 425px) {
        font-size: ${(props) => props.theme.sizes.base};
        line-height: 28px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-size: ${(props) => props.theme.sizes.base};
        line-height: 28px;
      }

      @media (min-width: 1200px) {
        font-size: ${(props) => props.theme.sizes['2xl']};
        line-height: 32px;
      }
    }

    p {
      font-weight: 700;

      text-align: center;

      color: ${(props) => props.theme.colors['white-1']};

      @media (max-width: 425px) {
        font-size: 1.33rem;
        line-height: 21px;
      }

      @media (min-width: 426px) and (max-width: 1199px) {
        font-size: 1.3rem;
        line-height: 22px;
      }

      @media (min-width: 1200px) {
        font-size: 1.3rem;
        line-height: 22px;
      }
    }
  }
`;
