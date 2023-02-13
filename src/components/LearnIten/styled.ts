import styled, { css } from 'styled-components';

type LearnItenContainer = {
  bgColor: 'yellow' | 'red' | 'blue' | 'orange';
};

export const LearnItenContainer = styled.div<LearnItenContainer>`
  display: flex;
  align-items: center;

  padding: 18px 24px 18px 48px;
  white-space: nowrap;
  border-radius: 16px;
  width: 100%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.sizes.lg};
  line-height: 30px;

  color: ${(props) => props.theme.colors['white-1']};

  @media (max-width: 1199px) {
    width: fit-content;

    font-family: 'Space Grotesk';
    font-weight: 500;
    font-size: ${(props) => props.theme.sizes.sm};
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    max-width: 370px;
    height: 66px;
  }

  ${(props) =>
    props.bgColor === 'red' &&
    css`
      background: ${(props) => props.theme.colors['brand-2']};
    `};

  ${(props) =>
    props.bgColor === 'blue' &&
    css`
      background: ${(props) => props.theme.colors['blue-100']};
    `};

  ${(props) =>
    props.bgColor === 'yellow' &&
    css`
      background: ${(props) => props.theme.colors.yellow};
    `};

  ${(props) =>
    props.bgColor === 'orange' &&
    css`
      background: ${(props) => props.theme.colors['brand-3']};
    `};

  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    top: 29px;
    left: 24px;
    border-radius: 50%;

    background: white;
  }
`;
