import styled, { css } from 'styled-components';

type ProgramsMainInfoProps = {
  localImage: 'left' | 'right';
  bgImage: 'red' | 'blue' | 'orange' | 'yellow';
};

export const ProgramsMainInfo = styled.div<ProgramsMainInfoProps>`
  display: grid;

  @media (max-width: 768px) {
    grid-template-areas: 'image' 'content';
    gap: 16px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 32px;

    grid-template-areas: 'content image';
    grid-template-columns: 1fr 370px;
  }

  @media (min-width: 1200px) {
    gap: 52px;

    ${(props) =>
      props.localImage === 'left' &&
      css`
        grid-template-areas: 'image content';
        grid-template-columns: 450px 1fr;
      `};

    ${(props) =>
      props.localImage === 'right' &&
      css`
        grid-template-areas: 'content image';
        grid-template-columns: 1fr 450px;
      `};
  }

  div.content {
    grid-area: content;
    display: flex;
    flex-direction: column;

    @media (max-width: 425px) {
      gap: 16px;
    }

    @media (min-width: 426px) and (max-width: 1199px) {
      gap: 32px;
    }

    @media (min-width: 1200px) {
      gap: 52px;
    }
  }

  div.image {
    grid-area: image;
    position: relative;

    div.imageSquare {
    }

    @media (max-width: 1024px) {
      margin-bottom: 50px;
    }

    @media (max-width: 768px) {
      margin-bottom: 100px;
    }

    &::before {
      position: absolute;
      content: '';

      border-radius: 16px;

      transform: matrix(0.93, 0.36, -0.36, 0.93, 0, 0);
      z-index: 0;

      ${(props) =>
        props.bgImage === 'yellow' &&
        css`
          background: ${(props) => props.theme.colors['yellow-100']};
        `};

      ${(props) =>
        props.bgImage === 'red' &&
        css`
          background: ${(props) => props.theme.colors['brand-2']};
        `};

      ${(props) =>
        props.bgImage === 'orange' &&
        css`
          background: ${(props) => props.theme.colors['orange-100']};
        `};

      ${(props) =>
        props.bgImage === 'blue' &&
        css`
          background: ${(props) => props.theme.colors['brand-1']};
        `};

      @media (max-width: 768px) {
        width: 221px;
        height: 126px;

        bottom: -40px;
        right: 30px;
      }

      @media (min-width: 769px) and (max-width: 1199px) {
        width: 248px;
        height: 142px;

        top: 120px;
        right: 30px;
      }

      @media (min-width: 1200px) {
        width: 301px;
        height: 172px;

        top: 140px;
        right: 30px;
      }
    }
    img {
      position: inherit;
      width: 100%;
      height: auto;
      z-index: 10;
    }
  }
`;

export const ProgramsTitle = styled.h3`
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};

  @media (max-width: 425px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
  }

  @media (min-width: 426px) and (max-width: 1199px) {
    font-size: 3.2rem;
    line-height: 42px;
  }

  @media (min-width: 1200px) {
    font-size: 6.4rem;
    line-height: 72px;
  }
`;

export const ProgramsDescription = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors.black};

  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;

    text-align: justify;
    opacity: 0.8;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: ${(props) => props.theme.sizes.base};
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 2.1rem;
    line-height: 34px;
  }
`;

type ProgramsStatisticsProps = {
  positionRight?: boolean;
};

export const ProgramsStatistics = styled.div<ProgramsStatisticsProps>`
  display: flex;

  ${(props) =>
    props.positionRight &&
    css`
      justify-content: flex-end;
    `};

  width: 100%;

  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

type ProgramsStatisticsCardProps = {
  variant: 'transparent' | 'full';
};

export const ProgramsStatisticsCard = styled.div<ProgramsStatisticsCardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid ${(props) => props.theme.colors.beige};

  ${(props) =>
    props.variant === 'transparent' &&
    css`
      background: transparent;
      border-radius: 16px 0px 0px 16px;

      @media (max-width: 768px) {
        border-radius: 16px 16px 0px 0px;
      }
    `};

  ${(props) =>
    props.variant === 'full' &&
    css`
      background: ${(props) => props.theme.colors.primary};
      border-radius: 0px 16px 16px 0px;

      @media (max-width: 768px) {
        border-radius: 0px 0px 16px 16px;
      }
    `};

  @media (max-width: 768px) {
    padding: 37px 40px 24px 40px;
    gap: 9px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 37px 40px 24px 40px;
    gap: 9px;
  }

  @media (min-width: 1200px) {
    padding: 45px 48px 36px 48px;
    gap: 13px;
    max-width: 390px;
  }

  strong {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 42px;

    @media (min-width: 1200px) {
      font-size: 4.2rem;
      line-height: 48px;
    }

    ${(props) =>
      props.variant === 'full' &&
      css`
        color: ${(props) => props.theme.colors['white-1']};
      `};

    ${(props) =>
      props.variant === 'transparent' &&
      css`
        color: ${(props) => props.theme.colors.black};
      `};
  }

  small {
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 34px;

    opacity: 0.7;

    ${(props) =>
      props.variant === 'full' &&
      css`
        color: ${(props) => props.theme.colors['white-1']};
      `};

    ${(props) =>
      props.variant === 'transparent' &&
      css`
        color: ${(props) => props.theme.colors.black};
      `};
  }
`;
