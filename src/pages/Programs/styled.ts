import styled, { css } from 'styled-components';

type ProgramsMainInfoProps = {
  localImage: 'left' | 'right';
};

export const ProgramsMainInfo = styled.div<ProgramsMainInfoProps>`
  display: grid;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
    img {
      width: 100%;
      height: auto;
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
