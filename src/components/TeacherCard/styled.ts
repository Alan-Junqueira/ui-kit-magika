import styled, { css } from 'styled-components';

export const TeacherCardContainer = styled.div`
  position: relative;

  @media (max-width: 1199px) {
    max-width: 327px;
  }

  @media (min-width: 1200px) {
    max-width: 415px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

type TeacherCardTexts = {
  variant: 'fst' | 'snd' | 'trd' | 'fth';
};

export const TeacherCardTexts = styled.div<TeacherCardTexts>`
  position: absolute;

  border-radius: 15px;
  padding: 16px 24px;
  width: 80% !important;

  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);

  backdrop-filter: blur(30.5px);

  ${(props) =>
    props.variant === 'fst' &&
    css`
      background: ${(props) => props.theme.colors['bg-teacher-100']};
    `};

  ${(props) =>
    props.variant === 'snd' &&
    css`
      background: ${(props) => props.theme.colors['bg-teacher-200']};
    `};

  ${(props) =>
    props.variant === 'trd' &&
    css`
      background: ${(props) => props.theme.colors['bg-teacher-300']};
    `};

  ${(props) =>
    props.variant === 'fth' &&
    css`
      background: ${(props) => props.theme.colors['bg-teacher-400']};
    `};
`;

export const TeacherCardName = styled.h3`
  color: ${(props) => props.theme.colors['white-1']};
  font-weight: 700;
  text-align: center;

  margin-bottom: 8px;

  font-size: ${(props) => props.theme.sizes.lg};
  line-height: 23px;

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.sizes['4xl']};
    line-height: 46px;
  }
`;

export const TeacherCardRole = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 17px;

  text-align: center;

  color: ${(props) => props.theme.colors['white-1']};

  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.xl};
    line-height: 30px;
  }
`;
